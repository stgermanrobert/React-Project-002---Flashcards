import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Flashcards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function Flashcards() {
  const [selectedId, setSelectedId] = useState(2002);

  function handleClick(id) {
    // if the selected id is the same as the one that cames from the click, we go back to null
    setSelectedId(id === selectedId ? null : id);
  }

  return (
    <div className="flashcards">
      {/*map through the questions list to render all the questions as cards*/}
      {questions.map((question) => (
        <div
          key={question.id}
          // Only apply "selected" className when question.id coincides with selectedId
          className={question.id === selectedId ? "selected" : ""}
          // pass the handleClick function to onClick function.
          onClick={() => handleClick(question.id)}
        >
          {/*if the selectId is the same as the question.id, we render the answer*/}
          {selectedId === question.id ? question.answer : question.question}
        </div>
      ))}
    </div>
  );
}
