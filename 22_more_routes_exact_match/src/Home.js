
// import  { useState, useEffect } from  "react";
import  BlogList from "./BlogList"
import useFetch from "./useFetch";

const Home = () => {
    const url = "http://localhost:8000/blogs";
    const { data: blogs, isPending, error} = useFetch(url)

    return (
        <div className="home">
            <h2>Home Page</h2>
            {isPending &&  <div>Loading ...</div>}
            { blogs && <BlogList blogs={ blogs } title="All Blogs 1 !" /* handleDelete={handleDelete} */ /> }
            { error && <div>{error}</div>}
        </div>
    );
}

export default Home;
