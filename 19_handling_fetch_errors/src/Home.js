
import  { useState, useEffect } from  "react";
import  BlogList from "./BlogList"

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // ---------------------------------------------------------THEN/CATCH

    // useEffect( () => { // this function runs every render
    //     setTimeout( () => {
    //         fetch("http://localhost:8000/blogss")
    //         .then(res => {
    //             console.log("response =", res)
    //             if(!res.ok) {
    //                 throw Error("Could not fetch the data from that ressource")
    //             }
    //             return res.json();
    //         })
    //         .then(data => {
    //             console.log(data);
    //             setBlogs(data);
    //             setIsPending(false);
    //             setError(false);
    //         })
    //         .catch( err => {
    //             // console.log("Error = ", err.message);
    //             setError(err.message);
    //             setIsPending(false);
    //         });
    //     }, 2000)
    // }, []);

    //--------------------------------------------------------ASYNC/AWAIT

    useEffect( () => { // this function runs every render
        (async () => {
            try {
                const res = await fetch("http://localhost:8000/blogss");
                if(!res.ok) throw Error("Could not fetch the data from that ressource")
                const data = await res.json();
                console.log(data);
                setBlogs(data);
                setIsPending(false);
                
            } catch (err) {
                console.log("Error = ", err.message);
                setError(err.message);
                setIsPending(false);
            }
        })()
    }, []);

    return (
        <div className="home">
            {isPending &&  <div>Loading ...</div>}
            { blogs && <BlogList blogs={ blogs } title="All Blogs 1 !" /* handleDelete={handleDelete} */ /> }
            { error && <div>{error}</div>}
        </div>
    );
}

export default Home;
