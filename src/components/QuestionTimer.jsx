import React, { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout,mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    console.log("setTimeout");
    const timeoutt = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timeoutt);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log("setInterval");
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, [100]);
    return () => {
      clearInterval(interval);
    }; //cleanup function
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} className={mode} />;
};

export default QuestionTimer;
