const Blog = ({ blog, handleDelete }) => {
  return (
    <div className='blog-preview'>
      <h1>{blog.title}</h1>
      <p>
        written by <strong>{blog.author}</strong>
      </p>
      <button onClick={() => handleDelete(blog.id)}>delete</button>
    </div>
  )
}

export default Blog
