import React from "react";
import "../App.css";
import "./style.css";
import { FaUserLock, FaUserCircle } from "react-icons/fa";
import imgs from "../components/images/logo.jpg";
const Home = () => {
  //verification for input
  const valid = () => {
    const getid = document.getElementById("email").value;
    if (getid) {
      document.getElementById("id").innerHTML = getid;
    } else {
      document.getElementById("id").innerHTML = "nothing found";
    }
  };

  const getbody = () => {
    document.querySelector("div").style.backgroundColor = "#eae7e1";
  };
  return (
    <>
      <div className="row my-5 mx-auto">
        <div className="col-lg-4 col-md-4 col-sm-12 bg-info  ">
          {/* verification of the inputs */}
          <p id="id" className="text-danger text-center "></p>
          <div className="form-group">
            <label>Email</label>
            <FaUserCircle color="white" size={20} style={{ margin: 10 }} />
            <input
              type="email"
              placeholder="enter email"
              className="form-control"
              id="email"
            />
          </div>
          <div className="form-group">
            <label>password</label>
            <FaUserLock size={20} color="white" style={{ margin: 10 }} />
            <input
              type="password"
              placeholder="enter password"
              className="form-control"
            />
          </div>

          <div className="form-group my-5">
            <select className="form-control bootstrap-select">
              <option>select</option>
              <option>female</option>
              <option>male</option>
              <option>decline</option>
            </select>
          </div>
          <div className="form-group my-5">
            <input
              type="submit"
              value="log in"
              className="btn btn-block btn-dark btn-sm"
              onClick={valid}
              onMouseOver={getbody}
            />
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12 zoom">
          <div>
            <h3>LATEST NEWS</h3>
            <p>
              The third way we can add Bootstrap to our React app is by using a
              package that has rebuilt Bootstrap components to work particularly
              as React components. There are a couple of such packages available
              in the npm repository, but I will emphasize the two most popular
              of them in this tutorial, namely: react-bootstrap reactstrap Both
              packages are great choices for using Bootstrap with React apps
              although you are not necessarily required to use any of them. They
              share very similar characteristics. Using built-in Bootstrap
              classes and components You can use Bootstrap directly on elements
              and components in your React app by applying the built-in classes
              just like any other class. Let’s build a simple theme switcher
              React component to demonstrate using Bootstrap classes and
              components.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 zoom">
          <img src={imgs} className=" img-fluid" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
