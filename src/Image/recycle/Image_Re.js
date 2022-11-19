import { useNavigate } from "react-router-dom";
const Image_Re = ({ props, name }) => {
  const navigate = useNavigate();
  return (
    <div className="Image_Re">
      <div className="image">
        <button
          onClick={() => {
            navigate("/detail");
          }}
        >
          <img alt={name} src={props} />
        </button>
      </div>
      <div className="name">
        <h3>{name}</h3>
      </div>
    </div>
  );
};
export default Image_Re;
