import { useState } from "react";
import DropDown from "../DropDown";
const Main_Btn = ({ prop1, prop2, name, content1, content2 }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="Main_Btn">
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {name}
      </button>
      {show && (
        <DropDown
          content1={content1}
          content2={content2}
          prop1={prop1}
          prop2={prop2}
        />
      )}
    </div>
  );
};
export default Main_Btn;
