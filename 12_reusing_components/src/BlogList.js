
const BlogList = (props) => {  // props is an object
	const blogs = props.blogs;
	const title = props.title;
	// console.log(props);
	
	return (
		<div className="blog-list">
			<h2> { title } </h2>
			{ blogs.map( blog => (
                <div className="blog-preview" key={blog.id}>
					<h2>{blog.title}</h2>
					<p>{blog.author}</p>
                </div>
            ))}
		</div>
	);
};

export default BlogList;


