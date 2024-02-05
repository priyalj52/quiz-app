import React, { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import questions from "../assets/questions";

const Question = ({

  index,
 
  handleClick,
 
  quizComp,
  handleTimer,
}) => 
{



    const [answer,setAnswer]=useState({
        selectedAns:'',
        isCorrect:null
      })

let timer=10000
if(answer.selectedAns)
timer=1000
if(answer.isCorrect!=null)
timer=2000

      function handleSelectAns(ans){
    setAnswer({
        selectedAns:ans,
        isCorrect:null
    })
    setTimeout(()=>{
        setAnswer({
            selectedAns:ans,
            isCorrect:questions[index].answers[0]==ans
        })
setTimeout(()=>{
handleClick(ans)
},2000)


    },1000)
      }
      let answerState=''
      if(answer.selectedAns && answer.isCorrect!=null){
        answerState=answer.isCorrect?"correct":"wrong"
      }else if(answer.selectedAns){
        answerState="answered"
      }



  return (
    <div id="question">
      {/* key is used to make new copy of the component everytime to reset the timer for every question */}
      {<QuestionTimer timeout={timer} onTimeout={answer.selectedAns===''?handleTimer:null} mode={answerState} key={timer} />}
      <h1>{questions[index].text}</h1>
      <Answers
        answers={questions[index].answers}
        selectedAns={answer.selectedAns}
        ansState={answerState}
        handleClick={handleSelectAns}
        quizComp={quizComp}
      />
    </div>
  );
};

export default Question;
