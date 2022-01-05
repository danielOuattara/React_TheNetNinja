
// const Home = () => {
//     let name ="Mario";
//     const handleClick = () => { // the variable "name" changes but React is not aware of this change.
//        name = "Luigi";
//        console.log(name); 
//     }

//     return (
//         <div className="home">
//             <h2>Homepage</h2>
//             <p>{name}</p>
//             <button onClick={handleClick}>Click Me</button>
//         </div>
//     );
// }

//export default Home;

//-------------------------------------------------------------------

import { useState, useEffect } from  "react";

const Home = () => {
    const [name, setName] = useState("Mario");
    const [ age, setAge] = useState(25);

    const handleClick = () => {
        setName("Daniel");
        setAge(37);
    }

    useEffect(() => console.log(name))

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p> {name} is {age} y.o</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;
