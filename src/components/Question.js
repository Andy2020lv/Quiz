import React from "react";
import { nanoid } from "nanoid";

export default function Question(props) {
  let answers = props.q.answers;

  function handleClick(answer) {
    if (props.q.checked) {
      return;
    }
    props.handleClickAnswer(props.id, answer);
  }

  const answerElement = answers.map((answer) => {
    let id = null;
    if (props.q.checked) {
      if (props.q.correct === answer) {
        id = "correct";
      } else if (props.q.selected === answer) {
        id = "incorrect";
      } else {
        id = "not-selected";
      }
    }
    return (
      <div>
        <button
          key={nanoid()}
          id={id}
          onClick={() => handleClick(answer)}
          className={answer === props.q.selected ? "answer selected" : "answer"}
        >
          {atob(answer)}
        </button>
      </div>
    );
  });

  return (
    <div className="game">
      <div className="content">
        <h1>{atob(props.q.question)}</h1>
        <div className="buttons">{answerElement}</div>
        <hr></hr>
      </div>
    </div>
  );
}
