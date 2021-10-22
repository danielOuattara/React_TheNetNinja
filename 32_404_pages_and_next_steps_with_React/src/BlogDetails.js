// Not Working (porps undefined) :: WHY ???? about "props" in fucntion ??
//=======================================================================

// import React from 'react';
// import { useParams } from 'react-router';

//  export default function BlogDetails() {
//     const blogId = props.match.params.id; 
//     return (
//         <div className="blog-details">
//             <h2>Blog Details</h2>
//             <p>Blog ID :{blogId}</p>
//         </div>
//     );
// }
//--------------------------------------------------------------

import { useHistory, useParams } from 'react-router';
import useFetch from "./useFetch";

 export default function BlogDetails() {
    const {blogId} = useParams();
    const url = `http://localhost:8000/blogs/${blogId}`;
    const { data: blog, error, isPending} = useFetch(url);
    const history = useHistory();

    const handleDelete= () => {
        fetch(url, {
            method:'DELETE',
        })
        .then(() => {
            history.push("/")
        })

    } 

    return (
        <div className="blog-details">

            {error && <div>{error.message}</div>}
            {isPending && <div>Loading...</div>}

            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h3>Author : {blog.author}</h3>
                    <p>{blog.body}</p>
                    <button onClick={handleDelete}>Delete blog</button>
                </article>
            )}
        </div>
    );
}


