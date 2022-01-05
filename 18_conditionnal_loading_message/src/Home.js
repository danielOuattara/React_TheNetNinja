
import  { useState, useEffect } from  "react";
import  BlogList from "./BlogList"

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    // ---------------------------------------------THEN/CATCH
    // useEffect( () => { 
    //         fetch("http://localhost:8000/blogs")
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             console.log(data);
    //             setBlogs(data);
    //             setIsPending(false);
    //         })
    //         .catch()
    // }, []);


    // ----------------------------------------------ASYNC/AWAIT
    useEffect( () => { 
        (async() => {
            const output = await fetch("http://localhost:8000/blogs");
            const data = await output.json();
            // setBlogs(data);
            setBlogs(() => {
                return data
            });
            setIsPending(false);
        })()
    } , []);

    return (
        <div className="home">
            {isPending && <div>Loading ...</div>}
            { blogs && <BlogList blogs={ blogs } title="All Blogs 1 !" /* handleDelete={handleDelete} */ /> }
        </div>
    );
}

export default Home;
