
import  { useState, useEffect } from  "react";
import  BlogList from "./BlogList"
import BlogList2 from "./BlogList2";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "My new website",     body:"lorem ipsum...", author: "Mario",  id:1},
        { title: "Welcome to party !", body:"lorem ipsum...", author: "Luigi",  id:2},
        { title: "Web dev top tips",   body:"lorem ipsum...", author: "Stella", id:3},
    ]);

    const handleDelete = (id) => { 
        const newBlogs = blogs.filter( blog => blog.id !== id);
        setBlogs(newBlogs);
    }

/*  usEffect to: ASYNC
        - fetch data
        - communicate with auth service
        - etc...
     */
    useEffect( () => { // this function runs every render
       console.log ("use effect ran");
       console.log(blogs)  // output the elements of the state also
    });

    return (
        <div className="home">
            <BlogList 
                blogs={ blogs } title="All Blogs 1 !" 
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
