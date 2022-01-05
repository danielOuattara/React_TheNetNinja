
const BlogList = (props) => {  // props is an object
	const blogs = props.blogs;
	const title = props.title;
	const handleDelete = props.handleDelete
	// console.log(props);
	
	return (
		<div className="blog-list">
			{ blogs.length > 0 && <h2> { title } </h2> }
			{ blogs.map( blog => (
                <div className="blog-preview" key={blog.id}>
					<h2>{blog.title}</h2>
					<p>{blog.author}</p>
					<button onClick={() => handleDelete(blog.id)}> Delete </button> 
					<button onClick={() => props.handleDelete(blog.id)}> Delete </button> 
                </div>
            ))}
		</div>
	);
};

export default BlogList;


