
import { useState } from  "react";
import BlogList from "./BlogList"
import BlogList2 from "./BlogList2";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "My new website", body:"lorem ipsum...", author: "Mario",  id:1},
        { title: "PHP and dynamic website", body:"lorem ipsum...", author: "Mario",  id:2},
        { title: "Welcome to answer party !", body:"lorem ipsum...", author: "Luigi",  id:3},
        { title: "Web dev top tips", body:"lorem ipsum...", author: "Stella", id:4},
    ]);

    let marioBlog = blogs.filter(blog => blog.author === "Mario");

    return (
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs"/>
            <hr />
            <BlogList2 blogs={blogs.filter( blog => blog.author === "Mario")} title="Mario Blogs - Only"></BlogList2>
            <hr />
            <BlogList2 blogs={marioBlog} title="Mario Blogs - Only"></BlogList2>
        </div>
    );
}

export default Home;
