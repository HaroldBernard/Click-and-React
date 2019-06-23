import React from "react";
import '../App.css';


const Navbar = props => (
  <nav className="nav navbar navbar-expand-lg navbar-light bg-light nav-fill">
      <li className="nav-item">
        <a href="/">{props.title}</a>
      </li>

      <li className="nav-item" id="rw">{props.rightWrong}</li>

      <li className="nav-item" id="cur-sco">Current Score: {props.score}</li>

      <li className="nav-item" id="top-sco">Top Score: {props.topScore}</li>
  </nav>
);

export default Navbar;
