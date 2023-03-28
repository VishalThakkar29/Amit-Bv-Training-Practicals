import React, { useEffect, useState } from "react";
import { MRP } from "./MRP";
import ProgressBar from "./ProgressBar";
import Question from "./Question";
import "./general.css";

const Quiz: React.FC = () => {
  const [questionIndex, setQuestionIndex] = useState<null | number>(null);
  const [answerStatus, setAnswerStatus] = useState<null | number | boolean>(
    null
  );
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    setAnswerStatus(null);
    setTimer(30);
  }, [questionIndex]);

  useEffect(() => {
    if (answerStatus) {
      setCorrectAnswerCount((count) => count + 1);
    }
  }, [answerStatus]);

  useEffect(() => {
    if (timer === 0 && answerStatus === null) {
      setQuestionIndex(null);
      setCorrectAnswerCount(0);
      setQuizComplete(false);
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, answerStatus]);

  const onNextClick = () => {
    if (questionIndex === MRP.length - 1) {
      setQuizComplete(true);
    } else {
      setQuestionIndex(questionIndex == null ? 0 : questionIndex + 1);
      setTimer(30);
    }
  };

  const onRestartClick = () => {
    setQuizComplete(false);
    setQuestionIndex(null);
    setCorrectAnswerCount(0);
    setTimer(30);
  };

  const onAnswerSelect: any = (status: boolean) => {
    setAnswerStatus(status);
  };

  if (questionIndex == null) {
    return (
      <div className="quiz">
        <h1>Start Quiz</h1>
        <p>This is a simple React quiz.</p>
        <button className="start" onClick={onNextClick}>
          Start
        </button>
      </div>
    );
  }

  return (
    <div className="quiz">
      {quizComplete ? (
        <>
          <h1>Quiz complete!</h1>
          <p>
            You answered {correctAnswerCount} questions correctly (out of a
            total {MRP.length} questions)
          </p>
        </>
      ) : (
        <>
          <ProgressBar
            currentQuestionIndex={questionIndex}
            totalQuestionsCount={MRP.length}
          />
          <div className="timer">{timer} seconds remaining</div>
          <Question
            question={MRP[questionIndex]}
            setAnswerStatus={onAnswerSelect}
          />
          {answerStatus != null && (
            <div>
              <div className="answerStatus">
                {!answerStatus ? "Correct! :)" : "Your answer was incorrect :("}
              </div>
              <button className="next" onClick={onNextClick}>
                {questionIndex === MRP.length - 1
                  ? "See results of this quiz"
                  : "Next Question ->"}
              </button>
            </div>
          )}
        </>
      )}
      {questionIndex != null && (
        <button className="restart" onClick={onRestartClick}>
          Restart quiz
        </button>
      )}
    </div>
  );
};
export default Quiz;
