
import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState( [
        { title: "My new website",          body:"lorem ipsum...", author: "Mario",  id:1},
        { title: "Welcome to answer party", body:"lorem ipsum...", author: "Luigi",  id:2},
        { title: "Web dev top tips",        body:"lorem ipsum...", author: "Stella", id:3},
    ]);

    return (
        <div className="home">
            { blogs.map( (blog) => ( // <-- parenthesis because it holds JSX. If it was holding javascript it would be curly brace
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;
