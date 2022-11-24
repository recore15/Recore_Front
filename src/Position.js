import { AiOutlineRight } from "react-icons/ai";
import { BsFillStopFill } from "react-icons/bs";
const Position = ({ title1, title2 }) => {
  return (
    <div className="Position">
      <BsFillStopFill />
      <AiOutlineRight />
      <button>{title1}</button>
      <AiOutlineRight />
      <button>{title2}</button>
    </div>
  );
};
export default Position;
