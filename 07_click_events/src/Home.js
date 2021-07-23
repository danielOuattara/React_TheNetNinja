
const Home = () => {

    const handleClick = () => {
        console.log("Hello !");
    }

    const handleClick2 = (name) => {
        console.log("Hello" + name);
    }
    const handleClick3 = (event) => {
        console.log("Hello", event);
    }
    const handleClick4 = (event, name) => {
        console.log("Hello " + name, event);
    }


    return (  
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClick2("Daniel") }>Click Me 2</button>
            <button onClick={handleClick3}>Click Me 3</button>
            <button onClick={(event) => handleClick4("Daniel", event) }>Click Me 4</button>
        </div>
    );
}
 
export default Home;