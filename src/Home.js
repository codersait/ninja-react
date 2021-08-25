import { useState, useEffect } from 'react'
import BlogList from './BlogList'
const Home = props => {
  const [blogs, setBlogs] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => res.json())
      .then(data => {
        setBlogs(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className='home'>
      {isLoading && <h1>Loading....</h1>}
      {blogs && <BlogList blogs={blogs} title='All Blogs' />}
    </div>
  )
}

export default Home
