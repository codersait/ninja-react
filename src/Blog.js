const Blog = ({ blog }) => {
  return (
    <div className='blog-preview'>
      <h2>{blog.title}</h2>
      <p>
        written by <strong>{blog.author}</strong>
      </p>
    </div>
  )
}

export default Blog
