import { useState } from  "react";
import BlogList from "./BlogList"
import BlogList2 from "./BlogList2";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "My new website",  body:"lorem ipsum...", author: "Mario",  id:1},
        { title: "Dynamic PHP",     body:"lorem ipsum...", author: "Mario",  id:2},
        { title: "Welcome to party !", body:"lorem ipsum...", author: "Luigi",  id:3},
        { title: "Web dev top tips",   body:"lorem ipsum...", author: "Stella", id:4},
    ]);

    const handleDelete = (id) => { 
        const newBlogs = blogs.filter( blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList 
                blogs={ blogs } title="All Blogs !" 
                handleDelete={handleDelete} />

            <hr />

            <BlogList2 
                blogs={blogs.filter( blog => blog.author === "Mario")} 
                title="Mario Blogs !" 
                handleDelete={ handleDelete } />
        </div>
    );
}

export default Home;
