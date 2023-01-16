import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Num1 from "./QuizSrc/Num1";
import Num2 from "./QuizSrc/Num2";
import Num3 from "./QuizSrc/Num3";
import Num4 from "./QuizSrc/Num4";
import Num5 from "./QuizSrc/Num5";
import Num6 from "./QuizSrc/Num6";

const Quiz = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, []);
  const Add = () => {
    setCount((i) => i + 1);
    console.log(count);
  };
  const Minus = () => {
    setCount((i) => i - 1);
    console.log(count);
  };
  return (
    <div className="Quiz">
      {count != 0 && (
        <button onClick={Minus}>
          <BiChevronLeft />
        </button>
      )}
      {count == 0 && <button className="blank"></button>}
      <div className="nums">
        {count == 0 && <Num1 />}
        {count == 1 && <Num2 />}
        {count == 2 && <Num3 />}
        {count == 3 && <Num4 />}
        {count == 4 && <Num5 />}
        {count == 5 && <Num6 />}
      </div>
      {count != 5 && (
        <button onClick={Add}>
          <BiChevronRight />
        </button>
      )}
      {count == 5 && <button className="blank"></button>}
    </div>
  );
};
export default Quiz;
