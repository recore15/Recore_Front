import { useNavigate } from "react-router-dom";
const Main_Btn = ({ props, name }) => {
  const navigate = useNavigate();
  return (
    <div className="Main_Btn">
      <button
        onClick={() => {
          navigate(props);
        }}
      >
        {name}
      </button>
    </div>
  );
};
export default Main_Btn;
