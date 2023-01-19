import { useLocation } from "react-router-dom";
import Box from "../../Box";
import List_Btn from "../../List_Btn";
import Menu_Bar from "../../Menu_Bar";

const Detail_Re = () => {
  const { state } = useLocation();
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
              <br />
              <h2>조리방법</h2>
              {state.map((item, idx) => {
                if (idx % 2 == 1) {
                  if (idx >= 5 && state[idx] != null) {
                    return <Box k={state[idx]} g={state[idx + 1]} />;
                  }
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <List_Btn props={"/recipe"} />
    </div>
  );
};
export default Detail_Re;
