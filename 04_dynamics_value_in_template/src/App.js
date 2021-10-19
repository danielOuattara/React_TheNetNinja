
function App() {
  const title = "Welcome to the Blog";
  const likes = 50;
  const person = {name: "You", age:25};
  const link = "https://www.google.com";
  return (
    <div className="App">
      <h1> { title } </h1>
      <p> { likes }</p>
      <p> { person.age }</p>
      <p> { [1, 2, 3, 4, 5] }</p>
      <p> { Math.random() * 10 }</p>
      <a href={ link }>Google site</a>
    </div>
  );
}

export default App;
