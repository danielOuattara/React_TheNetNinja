
import BlogList from "./BlogList"
import useFetch from "./useFetch";

const url = "http://localhost:8000/blogs";


const Home = (props) => {
    const { data: blogs, isPending, error} = useFetch(url)
    
    // const handleHome = () => {
    //     props.history.push("/");
    // }
    return (
        <div className="home">
            {isPending &&  <div>Loading ...</div>}
            { blogs && <BlogList blogs={ blogs } title="All Blogs 1 !" /* handleHome={handleHome} */  /> }
            { error && <div>{error}</div>}
        </div>
    );
}

export default Home;
