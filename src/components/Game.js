import React from "react";
import ButtonsAnswers from "./ButtonsAnswers";
// import ButtonsIncorrect from "./ButtonsAnswers";
// import ButtonsCorrect from "./ButtonsCorrectAnswer";
import Question from "./Question";

export default function Game(props) {
  // console.log(props.incorrect_answer);
  //   console.log(props.question);
  // TODO
  // 1. Catch the api data, from the App component
  // 2. Possibly create a buttonn component, so we can map through the incorrect_answers array from the API and
  // make a button for each of them.
  //   3. Pass the questions as a component and map though the questions array
  // console.log(props.answers[0]);

  return (
    <div className="game">
      {/* {props.answers.map((answer) => (
        <ButtonsAnswers
          questions={props.questions}
          isHeld={props.isHeld}
          holdV={props.holdV}
          className="button"
          answer={answer}
          key={props.key}
        />
      {/* ))} */}

      <ButtonsAnswers
        questions=<Question questions={props.questions} />
        correctAnswers={props.correctAnswers}
      />

      {/* <ButtonsCorrect className="button" answer={props.correct_answer1} /> */}
    </div>
  );
}

// (
//     <div className="game">
//       <h1>How would one say goodbye in Spanish?</h1>
//       <div className="buttons">
//         <button>Adios</button>
//         <button>Hola</button>
//         <button>Au Revoir</button>
//         <button>Salir</button>
//       </div>
//       <hr></hr>
//       <h1>
//         Which best selling toy of 1983 caused hysteria, resulting in riots
//         breaking in stores?
//       </h1>
//       <div className="buttons">
//         <button>Adadasasdasios</button>
//         <button>Hosadasdasdasdla</button>
//         <button>Adaadu Revoir</button>
//         <button>Sadasasasdlir</button>
//       </div>
//       <hr></hr>
//       <h1>What is the hottest planet in our Solar System?</h1>
//       <div className="buttons">
//         <button>Adadasasdasios</button>
//         <button>Hosadasdasdasdla</button>
//         <button>Adaadu Revoir</button>
//         <button>Sadasasasdlir</button>
//       </div>
//       <hr></hr>
//       <h1>How Many Hearts Does An Octopus Have?</h1>
//       <div className="buttons">
//         <button>Adadasasdasios</button>
//         <button>Hosadasdasdasdla</button>
//         <button>Adaadu Revoir</button>
//         <button>Sadasasasdlir</button>
//       </div>
//       <hr></hr>
//       <h1>In which country was the caesar salad invented?</h1>
//       <div className="buttons">
//         <button>Adadasasdasios</button>
//         <button>Hosadasdasdasdla</button>
//         <button>Adaadu Revoir</button>
//         <button>Sadasasasdlir</button>
//       </div>
//       <hr></hr>
//       <div className="gameButton">
//         <button>Check answers</button>
//       </div>
//     </div>
//   );
