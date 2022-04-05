// import  { useState, useEffect } from  "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const url = "http://localhost:8000/blogs";
const Home = () => {
  const { data: blogs, isPending, error } = useFetch(url);

  return (
    <div className="home">
      {isPending && <div>Loading ...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs 1 !" /* handleDelete={handleDelete} */
        />
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Home;
