import { useState } from "react";

const Num5 = () => {
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
      className="Num5"
      onMouseOver={() => {
        showAnswer();
      }}
      onMouseLeave={() => {
        showQuestion();
      }}
    >
      {question && <h1>Q5. 달걀껍질, 생선 뼈는 음식물 쓰레기로 배출한다.</h1>}
      {answer && <h1>X / 달걀껍질, 생선 뼈는 일반쓰레기로 배출</h1>}
    </div>
  );
};
export default Num5;
