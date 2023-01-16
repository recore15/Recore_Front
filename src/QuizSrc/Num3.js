import { useState } from "react";

const Num3 = () => {
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
      className="Num3"
      onMouseOver={() => {
        showAnswer();
      }}
      onMouseLeave={() => {
        showQuestion();
      }}
    >
      {question && <h1>Q3. 모든 의류 및 가방은 재활용이 불가능하다.</h1>}
      {answer && (
        <h1>
          O / 의류와 가방은 일반 쓰레기로 분류되어 종량제 봉투에 담아 배출
        </h1>
      )}
    </div>
  );
};
export default Num3;
