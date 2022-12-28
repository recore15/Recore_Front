import { useNavigate } from "react-router-dom";

const List_Btn = ({ props }) => {
  const navigate = useNavigate();
  return (
    <div className="List_Btn">
      <button
        onClick={() => {
          navigate(props);
        }}
      >
        목록
      </button>
    </div>
  );
};
export default List_Btn;
