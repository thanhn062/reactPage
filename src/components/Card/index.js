import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none",
        marginLeft: "100px",
        float: "left",
      }}

    >
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    <a href={props.href} target="_blank"><div className="cardName">{props.title}</div></a>
    </div>
  );
}

export default Card;
