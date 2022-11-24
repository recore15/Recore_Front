import { Link } from "react-router-dom";

const DropDown = ({ content1, content2, prop1, prop2 }) => {
  return (
    <div className="DropDown">
      <ul>
        <li>
          <Link
            to={prop1}
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "10px",
              marginTop: "10px",
            }}
          >
            {content1}
          </Link>
        </li>
        <li>
          <Link
            to={prop2}
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "10px",
            }}
          >
            {content2}
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default DropDown;
