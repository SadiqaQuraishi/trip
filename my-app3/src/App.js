import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import home from './components/home/home'
import contact from './components/contact/contact';
import login from './components/login/login';
import trip from './components/trip/trip'
import Register  from './components/register/register';


function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="#">
            Myvacation.com
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trip">
                  Trip Pakages
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav  ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item ml-auto">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/contact" component={contact} />
          <Route path="/trip" component={trip} />
          <Route path="/login" component={login} />
          <Route path="/register" component={Register} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
