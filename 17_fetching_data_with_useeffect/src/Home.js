
import  { useState, useEffect } from  "react";
import  BlogList from "./BlogList"
import BlogList2 from "./BlogList2";

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState("Mario");

    // const handleDelete = (id) => { 
    //     const newBlogs = blogs.filter( blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    useEffect( () => { // this function runs every render
        fetch("http://localhost:8000/blogs")
        .then( res => {
            return res.json()
        })
        .then( data => {
            console.log(data);
            setBlogs(data)
        })
        .catch()
    }, []);

    return (
        <div className="home">
            { blogs && <BlogList blogs={ blogs } title="All Blogs 1 !" /* handleDelete={handleDelete} */ /> }

            <hr />

            { blogs && <BlogList2  blogs={blogs.filter( blog => blog.author === "Mario")} 
                        title="Mario Blogs !" 
                        /* handleDelete={ handleDelete } */ /> }


            <button onClick={()=> setName("Luigi")}>Change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;
