import { Link } from 'react-router-dom'
const Blog = ({ blog }) => {
  return (
    <div className='blog-preview'>
      <Link to={`/blogs/${blog.id}`}>
        <h2>{blog.title}</h2>
        <p>
          written by <strong>{blog.author}</strong>
        </p>
      </Link>
    </div>
  )
}

export default Blog
