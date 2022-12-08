import React, { useEffect } from "react";
import Begin from "./components/Begin";
import Question from "./components/Question";
import { shuffle } from "lodash";
import { nanoid } from "nanoid";
import blob from "./assets/blob1.svg";
export default function App() {
  const [begin, setBegin] = React.useState(true);
  const [count, setCount] = React.useState(0);
  const [questionsData, setQuestionsData] = React.useState([]);
  const [checked, setChecked] = React.useState(false);
  const [correct, setCorrect] = React.useState(0);
  // const [answers, setAnswers] = React.useState([]);
  // const [test, setTest] = React.useState(false);

  // console.log(JSON.stringify(questionsData.results[0].question));

  function handleBegin() {
    setBegin(!begin);
  }

  useEffect(() => {
    async function getQuestion() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&difficulty=easy&encode=base64"
      );
      const data = await res.json();
      let q = [];
      data.results.forEach((question) => {
        q.push({
          id: nanoid(),
          answers: shuffle([
            ...question.incorrect_answers,
            question.correct_answer,
          ]),
          question: question.question,
          correct: question.correct_answer,
          selected: null,
          checked: false,
        });
      });

      setQuestionsData(q);
    }
    getQuestion();
  }, [count]);

  function handleCheck() {
    let selected = true;
    questionsData.forEach((question) => {
      if (question.selected === null) {
        selected = false;
        return;
      }
    });
    if (!selected) {
      return;
    }
    setQuestionsData((questions) =>
      questions.map((question) => {
        return { ...question, checked: true };
      })
    );
    setChecked(true);
    let correct = 0;
    questionsData.forEach((question) => {
      if (question.correct === question.selected) {
        correct += 1;
      }
    });
    setCorrect(correct);
  }

  function handleClickAnswer(id, answer) {
    setQuestionsData((questions) =>
      questions.map((question) => {
        return question.id === id
          ? { ...question, selected: answer }
          : question;
      })
    );
  }

  function handlePlayAgain() {
    setCount((count) => count + 1);
    setChecked(false);
  }

  const questionElement = questionsData
    ? questionsData.map((question) => {
        return (
          <Question
            handleClickAnswer={handleClickAnswer}
            // onClick={handleClick}
            key={question.id}
            q={question}
            id={question.id}
          />
        );
      })
    : [];

  return begin ? (
    <Begin onClick={handleBegin} />
  ) : (
    <div>
      {questionElement}
      {checked && (
        <div className="score-container">
          {" "}
          <span className="score">You scored {correct}/5 correct answers</span>
        </div>
      )}
      <div className="check-container">
        <button
          className="check"
          onClick={checked ? handlePlayAgain : handleCheck}
        >
          {checked ? "Play Again" : "Check Answers"}
        </button>
      </div>
      <div className="blob">
        <img className="blob-svg" src={blob} alt="blob"></img>
      </div>
    </div>
  );
}
