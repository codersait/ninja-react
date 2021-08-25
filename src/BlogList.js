import Blog from './Blog'

const BlogList = ({ blogs, title }) => {
  // const blogs = props.blogs
  // const title = props.title

  return (
    <div className='blog-list'>
      <h1>{title}</h1>
      {blogs.map(blog => (
        <Blog blog={blog} key={blog.id} />
      ))}
    </div>
  )
}

export default BlogList
