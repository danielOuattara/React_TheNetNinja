
function App() {
  const title = "Welcome to the Blog";
  const likes = 50;
  const person = {name: "You", age:25}
  return (
    <div className="App">
      <h1> {title} </h1>
      <p> {likes}</p>
      <p> {person.age}</p>
    </div>
  );
}

export default App;
