import React from "react";
import '../App.css';


function Background(props) {
  return <div className="background">{props.children}</div>;
}

export default Background;