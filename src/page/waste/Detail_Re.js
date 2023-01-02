import { useLocation } from "react-router-dom";
import List_Btn from "../../List_Btn";
import Menu_Bar from "../../Menu_Bar";

const Detail_Re = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="Detail_Re">
      <Menu_Bar />
      <div className="main">
        <div>
          <div className="title">
            <div className="row">
              <>
                <h1>{state[0]}</h1>
                <h3>{state[1]}</h3>
              </>
            </div>
            <div className="row">
              <img src={state[2]} alt={state[0]} />
              <h4>Made by {state[3]}</h4>
            </div>
          </div>
          <div className="line_hr">
            <hr />
          </div>
          <div>
            <div>
              <h2>준비재료</h2>
              <h3>{state[4]}</h3>
            </div>
            <div>
              <h2>조리방법</h2>
              <h3>1. 조리방법</h3>
              {state[5]}
              <h3>2. 조리방법</h3>
              {state[6]}
            </div>
          </div>
        </div>
      </div>
      <List_Btn props={"/recipe"} />
    </div>
  );
};
export default Detail_Re;
