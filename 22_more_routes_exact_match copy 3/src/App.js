
import NavBar from "./NavBar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path={"/home"}>
              <Home />
            </Route>
            <Route path={"/new"}>
              <Create />
            </Route>
        
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
