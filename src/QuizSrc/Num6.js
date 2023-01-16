import { useState } from "react";

const Num6 = () => {
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
      className="Num6"
      onMouseOver={() => {
        showAnswer();
      }}
      onMouseLeave={() => {
        showQuestion();
      }}
    >
      {question && <h1>Q6. 고추장, 된장은 음식물 쓰레기로 배출한다.</h1>}
      {answer && (
        <h1>
          X / 장류는 염도가 높아 동물 사료나 퇴비로 활용 될 수 없기 때문에 일반
          쓰레기로 배출
        </h1>
      )}
    </div>
  );
};
export default Num6;
