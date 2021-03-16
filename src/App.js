import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
//import About from './pages/About'
//import Contact from './pages/Contact'
import Home from "./pages/Home";
//import Users from './pages/Users'
import "./pages/UserL.css";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Users = lazy(() => import("./pages/Users"));
class Loader extends React.Component{
    render(){
        return <div>
  <img src="./images/char.gif" />      
        </div>
    }

    
}
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <ul>
            <li className="link-list">
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li className="link-list">
              {" "}
              <Link to="/about"> About</Link>
            </li>
            <li className="link-list">
              {" "}
              <Link to="/contact"> Contactus</Link>
            </li>
            <li className="link-list">
              {" "}
              <Link to="/user"> Users</Link>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/about">
            <Suspense fallback="loading">
              <About />
            </Suspense>
          </Route>
          <Route path="/contact">
            <Suspense fallback="loading">
              <Contact />
            </Suspense>
          </Route>
          <Route path="/User">
              <Suspense fallback="loading">
              <Users />
              </Suspense>

          </Route>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
//<Route  component={About} />
//          <Route  component={Contact}/>
