import React, { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

const Question = ({
  quesText,
  index,
  selectedAns,
  ansState,
  handleClick,
  answers,
  quizComp,
  handleTimer,
}) => {
  return (
    <div id="question">
      {/* key is used to make new copy of the component everytime to reset the timer for every question */}
      {<QuestionTimer timeout={10000} onTimeout={handleTimer} />}
      <h1>{quesText}</h1>
      <Answers
        answers={answers}
        selectedAns={selectedAns}
        ansState={ansState}
        handleClick={handleClick}
        quizComp={quizComp}
      />
    </div>
  );
};

export default Question;
