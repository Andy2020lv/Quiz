import React from "react";

export default function Question(props) {
  return (
    <div>
      {props.questions.map((question) => (
        <h1>{question}</h1>
      ))}
    </div>
  );
}
