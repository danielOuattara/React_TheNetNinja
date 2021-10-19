const BlogList2 = (props) => {  // props is an object
	const {blogs, title} = props;

	return (
		<div className="blog-list">
			<h2> { title } </h2>
			{ blogs.map( (blog) => (
                <div className="blog-preview" key={blog.id}>
					<h2>{blog.title}</h2>
					<p>{blog.author}</p>
                </div>
            ))}
		</div>
	);
}

export default BlogList2;