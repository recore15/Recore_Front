import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Main_Btn = ({ props, name, content1, content2, content3 }) => {
  const [show, setShow] = useState("false");
  const view = () => {
    setShow(!show);
  };
  const navigate = useNavigate();
  return (
    <div className="Main_Btn">
      <button
        onClick={() => {
          // navigate(props);
          view();
        }}
      >
        {name}
      </button>
    </div>
  );
};
export default Main_Btn;
