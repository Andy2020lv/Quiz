import React, { useEffect } from "react";
import Begin from "./components/Begin";
import Game from "./components/Game";
import { nanoid, random } from "nanoid";
import { shuffle } from "lodash";

export default function App() {
  const [begin, setBegin] = React.useState(true);
  const [questionsData, setQuestionsData] = React.useState({
    data: [],
    answers: [],
    id: "",
  });
  // const [answers, setAnswers] = React.useState([]);
  const [hold, setHold] = React.useState(false);
  // const [test, setTest] = React.useState(false);

  // console.log(JSON.stringify(questionsData.results[0].question));

  function handleBegin() {
    setBegin(!begin);
  }
  // const arr = [1, 2, 3, 4, 5];

  // const FetchJason = function () {

  // React.useEffect(() => {
  //   fetch("https://opentdb.com/api.php?amount=5&type=multiple")
  //     .then((res) => res.json())
  //     .then((data) =>
  //       setQuestionsData({
  //         data: data,
  //         id: nanoid(),
  //       })
  //     );
  //   console.log("Data retrieved");
  // }, []);

  useEffect(() => {
    var Answers = [];

    // var incorrectAnswer = [];
    var url =
      "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((question) => {
          let correctAnswer = [question.correct_answer];
          Answers.push([...correctAnswer, ...question.incorrect_answers]);
        });
        for (let i = 0; i < 5; i++) {
          for (let k = 0; k < 10; k++) {
            Answers[i] = shuffle(Answers[i]);
          }
          console.log(Answers[i]);
        }
        setQuestionsData({
          data: data,
          answers: Answers,
          id: nanoid(),
        });
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(questionsData.data.results[0].incorrect_answers);
  // console.log(questionsData.answers);

  // const incorrect_answers = [];

  // for (let i = 0; i < 5; i++) {
  //   incorrect_answers.push(questionsData.data.results[i].incorrect_answers);

  //   incorrect_answers[i].push(questionsData.data.results[i].correct_answer);
  //   console.log(incorrect_answers);
  // }
  // console.log("cycle");

  // console.log(questionsData.data.results[0].incorrect_answers);

  // console.log(whatever);
  // const questions = [];
  // questions.push(questionsData.data.results[0].incorrect_answers);
  // questions.push(questionsData.data.results[0].correct_answer);
  // console.log(questions);

  // function Test() {
  //   setTest(!test);
  // }
  // console.log(JSON.stringify(questionsData));
  function holdAnswer(id) {
    // console.log(id);

    return setHold(!hold);
  }

  return (
    <div>
      {begin ? (
        <Begin onClick={handleBegin} />
      ) : (
        <Game
          answers={questionsData.answers}
          question1={questionsData.data.results[0].question}
          incorrect_answer1={questionsData.data.results[0].incorrect_answers}
          correct_answer1={questionsData.data.results[0].correct_answer}
          question2={questionsData.data.results[1].question}
          incorrect_answer2={questionsData.data.results[1].incorrect_answers}
          correct_answer2={questionsData.data.results[1].correct_answer}
          question3={questionsData.data.results[2].question}
          incorrect_answer3={questionsData.data.results[2].incorrect_answers}
          correct_answer3={questionsData.data.results[2].correct_answer}
          question4={questionsData.data.results[3].question}
          incorrect_answer4={questionsData.data.results[3].incorrect_answers}
          correct_answer4={questionsData.data.results[3].correct_answer}
          question5={questionsData.data.results[4].question}
          incorrect_answer5={questionsData.data.results[4].incorrect_answers}
          correct_answer5={questionsData.data.results[4].correct_answer}
          isHeld={() => holdAnswer(questionsData.id)}
          holdV={hold}
          key={questionsData.id}
        />
      )}

      {/* <Game
        question1={questionsData.results[0].question}
        incorrect_answer1={questionsData.results[0].incorrect_answers}
        correct_answer1={questionsData.results[0].correct_answer}
        question2={questionsData.results[1].question}
        incorrect_answer2={questionsData.results[1].incorrect_answers}
        correct_answer2={questionsData.results[1].correct_answer}
        question3={questionsData.results[2].question}
        incorrect_answer3={questionsData.results[2].incorrect_answers}
        correct_answer3={questionsData.results[2].correct_answer}
        question4={questionsData.results[3].question}
        incorrect_answer4={questionsData.results[3].incorrect_answers}
        correct_answer4={questionsData.results[3].correct_answer}
        question5={questionsData.results[4].question}
        incorrect_answer5={questionsData.results[4].incorrect_answers}
        correct_answer5={questionsData.results[4].correct_answer}
      /> */}
      {/* TODO
      pass the array data to the Game component */}
      {/* <pre>{JSON.stringify(questionsData, null, 2)}</pre> */}
    </div>
  );
}
