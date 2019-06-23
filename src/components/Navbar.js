import React from "react";

const Navbar = props => (
  <nav>
    <ul className="nav nav-tabs">
      <li className=" nav-item brand animated lightSpeedIn">
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li className=" nav-item" id="rw">{props.rightWrong}</li>

      <li className=" nav-item" id="cur-sco">Current Score: {props.score}</li>

      <li className=" nav-item" id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);


  //   <ul className="nav nav-tabs">
  //     <li className="nav-item">
  //       <a
  //         href="."
  //         // onClick={() => props.handlePageChange("Home")}
  //         // className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
  //       >
  //         Click and React
  //       </a>
  //     </li>
  //     <li className="nav-item">
  //       <a
  //         href="#about"
  //         onClick={() => props.handlePageChange("About")}
  //         className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
  //       >
  //         About
  //       </a>
  //     </li>
  //     <li className="nav-item">
  //       <a
  //         href="#blog"
  //         onClick={() => props.handlePageChange("Blog")}
  //         className={props.currentPage === "Blog" ? "nav-link active" : "nav-link"}
  //       >
  //         Blog
  //       </a>
  //     </li>
  //     <li className="nav-item">
  //       <a
  //         href="#contact"
  //         onClick={() => props.handlePageChange("Contact")}
  //         className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
  //       >
  //         Contact
  //       </a>
  //     </li>
  //   </ul>
  // );




export default Navbar;
