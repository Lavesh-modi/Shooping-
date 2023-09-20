import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import { Link } from "react-router-dom";
import Home from "./Home";

function Header() {
  return (
    <div>
      <span className="header"> Context API</span>
      <ul className="nav">
        <li className="prod">
          <Link to="/">Home</Link>
          {/* <div>home </div> */}
        </li>
        <li className="prod1">
          <div>Cart</div>
          {/* <Link to="/cart">Cart ()</Link> */}
        </li>
      </ul>
    </div>
  );
}

export default Header;
