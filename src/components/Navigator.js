import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Header from "./Header";
import Contact from "./Contact";

const Navigator = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark">
        <Header />
        <ul className="navbar-nav mr-auto text-left m-auto">
          <li>
            <Link to={"/"} className="nav-link text-light">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/Menu"} className="nav-link text-light">
              Profile
            </Link>
          </li>
          <li>
            <Link to={"/Contact"} className="nav-link text-light">
              Contact
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="nav-link text-light">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Contact" component={Contact} />
        <Route path="/About" component={About} />
        <Route path="/Menu" component={Menu} />
      </Switch>
    </>
  );
};

export default Navigator;
