import { useState } from "react";

const Num2 = () => {
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
      className="Num2"
      onMouseOver={() => {
        showAnswer();
      }}
      onMouseLeave={() => {
        showQuestion();
      }}
    >
      {question && <h1>Q2. 보조베터리는 건전지와 같이 분리배출 한다.</h1>}
      {answer && (
        <h1>
          O / 보조베터리도 폐전지 중 하나로, 건전지와 함께 “폐건전지 수거함”으로
          분리배출
        </h1>
      )}
    </div>
  );
};
export default Num2;
