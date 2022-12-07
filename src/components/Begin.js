import React from "react";

export default function Begin(props) {
  return (
    <div className="firstScreen">
      <h1>Quizzical</h1>
      <p>Some description</p>
      <button onClick={props.onClick}>Start quiz</button>
    </div>
  );
}
