
import  { useState, useEffect } from  "react";
import  BlogList from "./BlogList"
import BlogList2 from "./BlogList2";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [name, setName] = useState("Mario");

    // useEffect( () => { // this function runs every render
    //     fetch("http://localhost:8000/blogs")
    //     .then( res => res.json())
    //     .then( data => {
    //         console.log(data);
    //         setBlogs(data)
    //     })
    //     .catch(err => console.log(err.message))
    // }, []);


    /*  ASYNC/AWAIT 
    -----------------*/
    useEffect( () => { // this function runs every render
        (async () =>  {
            let output = await fetch("http://localhost:8000/blogs");
            const data = await output.json();
            console.log(data);
            setBlogs(data);
        }
    )()}, []);


    /*  ASYNC/AWAIT 
    ----------------*/
    // useEffect( () => { // this function runs every render
    //     (async () =>  {
    //         let data = await (await fetch("http://localhost:8000/blogs")).json();
    //         console.log(data);
    //         setBlogs(data);

    //     })()}, []);

    return (
        <div className="home">
            { blogs && <BlogList blogs={ blogs } title="All Blogs 1 !" /> }

            <hr />

            { blogs && <BlogList2  blogs={blogs.filter( blog => blog.author === "Mario")} 
                        title="Mario Blogs !" /> }

            <button onClick={()=> setName("Luigi")}>Change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;
