import { useState } from "react";

const Num1 = () => {
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
      className="Num1"
      onMouseOver={() => {
        showAnswer();
      }}
      onMouseLeave={() => {
        showQuestion();
      }}
    >
      {question && <h1>Q1. 페트병은 모두 플라스틱류로 분리배출 한다.</h1>}
      {answer && (
        <h1>
          X / 패트병은 라벨을 떼고 깨끗이 씻은 후, 유색과 투명을 분리하여 따로
          배출
        </h1>
      )}
    </div>
  );
};
export default Num1;
