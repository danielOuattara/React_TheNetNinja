
import  { useState, useEffect } from  "react";
import  BlogList from "./BlogList"

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);


    useEffect( () => { // this function runs every render
        setTimeout( () => {
            fetch("http://localhost:8000/blogs")
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
                setIsPending(false);
            })
            .catch()
        }, 2000)
    }, []);

    return (
        <div className="home">
            {isPending && <div>Loading ...</div>}
            { blogs && <BlogList blogs={ blogs } title="All Blogs 1 !" /* handleDelete={handleDelete} */ /> }
        </div>
    );
}

export default Home;
