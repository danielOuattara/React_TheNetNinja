
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  const title = "Welcome to the Blog";
  const likes = 50;
  const person = {name: "You", age:25};
  const link = "https://www.google.com";
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
