import React, { useRef } from "react";

const Answers = ({ answers, selectedAns, ansState, handleClick, quizComp }) => {
  const shuffledAns = useRef();
  // Create a shuffled copy of answers only if the quiz is not complete
  if (!shuffledAns.current) {
    shuffledAns.current = !quizComp
      ? [...answers].sort(() => Math.random() - 0.5)
      : [];
  }
  return (
    <ul id="answers">
      {shuffledAns.current.map((ans) => {
        const isSelected = selectedAns === ans;
        let css = "";

        if (ansState == "answered" && isSelected) css = "selected";

        if ((ansState == "correct" || ansState == "wrong") && isSelected)
          css = ansState;

        return (
          <li key={ans} className="answer">
            <button onClick={() => handleClick(ans)} className={css}>
              {ans}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
