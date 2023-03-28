import "./general.css";

type ProgressProps = {
  currentQuestionIndex: number;
  totalQuestionsCount: number;
};
const ProgressBar: React.FC<ProgressProps> = ({
  currentQuestionIndex,
  totalQuestionsCount,
}) => {
  return (
    <>
      <div className="progressBar">
        <div className="text">
          {currentQuestionIndex} answered (
          {totalQuestionsCount - currentQuestionIndex} remaining)
        </div>
      </div>
    </>
  );
};
export default ProgressBar;
