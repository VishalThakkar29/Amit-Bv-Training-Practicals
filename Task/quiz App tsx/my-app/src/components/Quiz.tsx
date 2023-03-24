import React from "react";
import { MRP } from "./MRP";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    setAnswerStatus(null);
  }, [questionIndex]);

  useEffect(() => {
    if (answerStatus) {
      setCorrectAnswerCount((count) => count + 1);
    }
  }, [answerStatus]);

  const onNextClick = () => {
    if (questionIndex === MRP.length - 1) {
      setQuizComplete(true);
    } else {
      setQuestionIndex(questionIndex == null ? 0 : questionIndex + 1);
    }
  };

  const onRestartClick = () => {
    setQuizComplete(false);
    setQuestionIndex(null);
    setCorrectAnswerCount(0);
  };

  if (questionIndex == null) {
    return (
      <div className="quiz">
        <h1>Start Quiz</h1>
        <p>This is a simple React quiz.</p>
        {/* <p>
            Check out the accompanying article over at{" "}
            <a href="#">justacodingblog</a> for a detailed breakdown of how the
            quiz works!
          </p> */}
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
          <Question
            question={MRP[questionIndex]}
            setAnswerStatus={setAnswerStatus}
          />
          {answerStatus != null && (
            <div>
              <div className="answerStatus">
                {!!answerStatus
                  ? "Correct! :)"
                  : "Your answer was incorrect :("}
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
