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

import React from 'react';
import { useParams } from 'react-router';

 export default function BlogDetails() {
    const {blogId} = useParams();
    return (
        <div className="blog-details">
            <h2>Blog Details</h2>
            <p>Blog ID :{blogId}</p>
        </div>
    );
}

