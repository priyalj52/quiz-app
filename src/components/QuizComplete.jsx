import React from "react";
import img2 from "../assets/quiz-complete.png";
import questions from "../assets/questions";
const QuizComplete = ({Answers}) => {
  const skipped=Answers.filter((ans)=>ans===null)
  const correctAns=Answers.filter((ans,index)=>questions[index].answers[0]===ans)

const skippedPercent=Math.round((skipped.length/Answers.length)*100)
const correctPercent=Math.round((correctAns.length/Answers.length)*100)
const wrongPercent=100-skippedPercent-correctPercent
    return (
    <div id="summary">
      <img src={img2} alt="quiz-done" />
      <h2>Quiz completed</h2>
      <div id="summary-stats">
        <p>
            <span className="number">{skippedPercent}%</span>
            <span className="text">skipped</span>
        </p>
        <p>
            <span className="number">{correctPercent}%</span>
            <span className="text">answered correctly</span>
        </p>
        <p>
            <span className="number">{wrongPercent}%</span>
            <span className="text">answered wrongly</span>
        </p>
      </div>
<ol>
    {Answers.map((ans,index)=>{
        let css='user-answer'
        if(ans===null)
        css+=' skipped'
    else if(questions[index].answers[0]===ans)
    css+=' correct'
else
css+=' wrong'

        
        return(
            <li key={index}>
            <h3>{index+1}</h3>
            <p className="question">{questions[index].text}</p>
            <p className={css}>{ans??'Skipped'}</p>
        </li>
        )
    })}
  
</ol>

    </div>
  );
};

export default QuizComplete;
