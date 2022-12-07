import React from "react";
import Question from "./Question";
export default function ButtonsAnswers(props) {
  const style = {
    backgroundColor: props.holdV ? "#d6dbf5" : "",
  };
  return (
    <div>
      {/* {props.questions.map((question) => (
        <Question q={question} />
      ))} */}
      {props.questions}
      <div className="buttons">
        {props.correctAnswers.map((answer) => (
          <button
            style={style}
            onClick={props.isHeld}
            className={props.className}
          >
            {" "}
            {answer}{" "}
          </button>
        ))}
      </div>
      <hr></hr>
    </div>
  );
}
