
import  { useState } from  "react";
import  BlogList from "./BlogList"
import BlogList2 from "./BlogList2";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "My new website",          body:"lorem ipsum...", author: "Mario",  id:1},
        { title: "Welcome to answer party", body:"lorem ipsum...", author: "Luigi",  id:2},
        { title: "Web dev top tips",        body:"lorem ipsum...", author: "Stella", id:3},
    ]);

    // const handleClick = () => { }

    return (
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs  1 !"/>
            <hr />
            <BlogList2 blogs={blogs} title="All Blogs 2 !"></BlogList2>
        </div>
    );
}

export default Home;
