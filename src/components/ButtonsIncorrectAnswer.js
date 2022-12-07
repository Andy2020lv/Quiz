import React from "react";

export default function ButtonsIncorrect(props) {
  const style = {
    backgroundColor: props.holdV ? "#d6dbf5" : "",
  };
  return (
    <button style={style} onClick={props.isHeld} className={props.className}>
      {props.answer}
    </button>
  );
}
