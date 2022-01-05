const BlogList2 = ({ blogs, title, handleDelete }) => {  // destructuring props 
	return (
		<div className="blog-list">
			{ blogs.length > 0  && <h2>{title}</h2>}
			{ blogs.map( blog => (
                <div className="blog-preview" key={blog.id}>
					{ blogs.length > 0  && <h2>{blog.title}</h2>}
					<p>{blog.author}</p>
					<button onClick={() => handleDelete(blog.id)}> Delete </button>
                </div>
            ))}
		</div>
	);
}

export default BlogList2;