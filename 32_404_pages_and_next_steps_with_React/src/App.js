
import NavBar from "./NavBar";
import Home from "./Home";
import Create from "./Create";
import About from "./AboutPage";
import BlogDetails from "./BlogDetails";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound404 from "./NotFound404";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <div className="content">
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/create" component= {Create}/>
              <Route path="/blogs/:blogId" component={BlogDetails}/>
              <Route path="/about"  component={About}/>
              <Route path="*"  component={NotFound404}/>
            </Switch>
          </div>
      </div>
    </Router>

  );
}

export default App;
