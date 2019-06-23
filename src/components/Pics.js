import React from "react";
import '../App.css';


const Pics = props => (
  <div 
    className="card col-3" 
    value={props.id} 
    onClick={() => props.handleClick(props.id)}
  >
    <img alt={props.name} src={props.image} />
  </div>
);

export default Pics;

