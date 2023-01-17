import { useState } from "react";

const Num4 = () => {
  const [question, setQuestion] = useState(true);
  const [answer, setAnswer] = useState(false);
  const showQuestion = () => {
    setQuestion(true);
    setAnswer(false);
  };
  const showAnswer = () => {
    setQuestion(false);
    setAnswer(true);
  };
  return (
    <div
      className="Num4"
      onMouseOver={() => {
        showAnswer();
      }}
      onMouseLeave={() => {
        showQuestion();
      }}
    >
      {question && (
        <h1>Q4. 멜론 껍질, 수박 껍질은 음식물 쓰레기로 배출한다.</h1>
      )}
      {answer && <h1>O / 멜론 껍질, 수박 껍질은 음식물 쓰레기로 배출</h1>}
    </div>
  );
};
export default Num4;
