import React, { useCallback, useRef, useState } from "react";
import questions from "../assets/questions";
import QuizComplete from "./QuizComplete";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import Question from "./Question";

const Quiz = () => {
  // Handle answers
  const [selectedAns, setSelectedAns] = useState([]);


  // Derive the index of the next question
  const activeQues = selectedAns.length 

  // Check if the quiz is complete
  const quizComp = activeQues === questions.length;

  const handleClick = useCallback(
    (ans) => {
      // setAnsState("answered");
      setSelectedAns((prevAns) => [...prevAns, ans]);
    },
    []
  );

  console.log(selectedAns);
  const handleTimer = useCallback(() => handleClick(null), [handleClick]);

  return (
    <div id="quiz">
      {quizComp ? (
        <QuizComplete Answers={selectedAns} />
      ) : (
        <Question
         
          handleClick={handleClick}
        
          key={activeQues}
          quizComp={quizComp}
          handleTimer={handleTimer}
          index={activeQues}
        />
      )}
    </div>
  );
};

export default Quiz;
