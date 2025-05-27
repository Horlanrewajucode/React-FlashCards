import { useState } from "react";
import "./styles.css";

const questions = [
  {
    id: 3457,
    question: "What syntax does React use to write HTML in JavaScript?",
    Answers: "JSX",
  },
  {
    id: 7336,
    question: "What hook is used to add local state to a functional component?",
    Answers: "useState",
  },
  {
    id: 8832,
    question: "What hook is used for side effects like API calls?",
    Answers: "useEffect",
  },
  {
    id: 1297,
    question: " What prop helps React identify list items uniquely?",
    Answers: "key",
  },
  {
    id: 2583,
    question: "What kind of component manages its own state using refs?",
    Answers: "uncontrolled",
  },
  {
    id: 2002,
    question: "What virtual structure does React use to optimize DOM updates?",
    Answers: "Virtual DOM",
  },
];

export default function App() {
  return <FlashCards />;
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.Answers : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
