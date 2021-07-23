
import  { useState } from  "react";

const Home = () => {

    // let name ="Mario";
    const [name, setName] = useState("Mario");
    const [ age, setAge] = useState(25);

    const handleClick = () => {
      //  name = "Luigi";
      //  console.log(name);
      setName("Daniel");
      setAge(37);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p> {name} is {age} y.o</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;
