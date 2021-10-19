
import { useState } from  "react";
import BlogList0 from "./BlogList0"
import BlogList1 from "./BlogList1"
import BlogList2 from "./BlogList2";
import BlogList3 from "./BlogList3";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "My new website",          body:"lorem ipsum...", author: "Mario",  id:1},
        { title: "Welcome to answer party", body:"lorem ipsum...", author: "Luigi",  id:2},
        { title: "Web dev top tips",        body:"lorem ipsum...", author: "Stella", id:3},
    ]);

    return (
        <div className="home">
            <BlogList0 blogs={blogs} title="All Blogs 0 !"/>
            <hr />
            <BlogList1 blogs={blogs} title="All Blogs 1 !"/>
            <hr />
            <BlogList2 blogs={blogs} title="All Blogs 2 !"></BlogList2>
            <hr />
            <BlogList3 blogs={blogs} title="All Blogs 3 !"></BlogList3>
        </div>
    );
}

export default Home;
