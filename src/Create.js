import { useState } from 'react'
const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('mario')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const blog = { title, body, author }
    setIsLoading(true)
    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(blog)
    }).then(() => {
      setIsLoading(false)
    })
  }

  return (
    <div className='create'>
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type='text' required value={title} onChange={e => setTitle(e.target.value)} />
        <label>Blog body:</label>
        <textarea required value={body} onChange={e => setBody(e.target.value)}></textarea>
        <label>Blog author:</label>
        <select required value={author} onChange={e => setAuthor(e.target.value)}>
          <option value='mario'>mario</option>
          <option value='yoshi'>yoshi</option>
        </select>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding blog...</button>}
      </form>
    </div>
  )
}

export default Create
