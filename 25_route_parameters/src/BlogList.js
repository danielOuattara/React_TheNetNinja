import { Link } from 'react-router-dom';

const BlogList = (props) => {  // props is an object
	const {blogs, title, /* handleHome */}= props
	
	return (
		<div className="blog-list">
				<h2> { title } </h2>
				{ blogs.map( blog => (
					<div className="blog-preview" key={blog.id}>
						<Link to={`/blogs/${blog.id}`}>
							<h2>{blog.title}</h2>
							<p>{blog.author}</p>
							{/* <button onClick={() => handleHome(blog.id)}> ReturnHome </button>  */}
							{/* <button onClick={() => props.handleDelete(blog.id)}> Delete </button>  */}
						</Link>
						</div>
				))}
		</div>
	);
};

export default BlogList;


