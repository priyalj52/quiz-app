import React, { useCallback, useRef, useState } from "react";
import questions from "../assets/questions";
import QuizComplete from "./QuizComplete";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import Question from "./Question";

const Quiz = () => {
  // Handle answers
  const [selectedAns, setSelectedAns] = useState([]);
  const [ansState, setAnsState] = useState("");

  // Derive the index of the next question
  const activeQues =
    ansState === "" ? selectedAns.length : selectedAns.length - 1;

  // Check if the quiz is complete
  const quizComp = activeQues === questions.length;

  const handleClick = useCallback(
    (ans) => {
      setAnsState("answered");
      setSelectedAns((prevAns) => [...prevAns, ans]);
      setTimeout(() => {
        if (ans === questions[activeQues].answers[0]) setAnsState("correct");
        else setAnsState("wrong");
        setTimeout(() => {
          setAnsState("");
        }, [2000]);
      }, [1000]);
    },
    [activeQues]
  );

  console.log(selectedAns);
  const handleTimer = useCallback(() => handleClick(null), [handleClick]);

  return (
    <div id="quiz">
      {quizComp ? (
        <QuizComplete />
      ) : (
        <Question
          quesText={questions[activeQues]?.text}
          selectedAns={selectedAns[selectedAns.length - 1]}
          ansState={ansState}
          handleClick={handleClick}
          answers={questions[activeQues].answers}
          key={activeQues}
          quizComp={quizComp}
          handleTimer={handleTimer}
          index={questions[activeQues]?.text}
        />
      )}
    </div>
  );
};

export default Quiz;
