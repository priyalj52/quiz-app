import React, { useCallback, useState } from 'react';
import questions from '../assets/questions';
import QuizComplete from './QuizComplete';
import QuestionTimer from './QuestionTimer';

const Quiz = () => {
  // Handle answers 
  const [selectedAns, setSelectedAns] = useState([]);

  // Derive the index of the next question
  const activeQues = selectedAns.length;

  // Check if the quiz is complete
  const quizComp = activeQues === questions.length;

  // Create a shuffled copy of answers only if the quiz is not complete
  const shuffledAns = !quizComp
    ? [...questions[activeQues]?.answers].sort(() => Math.random() - 0.5)
    : [];

  const handleClick = useCallback((ans) => {
    setSelectedAns((prevAns) => [...prevAns, ans]);
  },[])

  console.log(selectedAns);
const handleTimer=useCallback((()=>handleClick(null)),[handleClick])


  return (
    <div id="quiz">
      {quizComp ? (
        <QuizComplete />
      ) : (
        <div id="question">
          {/* key is used to make new copy of the component everytime to reset the timer for every question */}
         {<QuestionTimer key={activeQues}  timeout={10000} onTimeout={handleTimer}/>} 
          <h1>{questions[activeQues]?.text}</h1>
          <ul id="answers">
            {shuffledAns.map((ans) => (
              <li key={ans} className='answer'>
                <button onClick={() => handleClick(ans)}>{ans}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;
