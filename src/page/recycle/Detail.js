import { useLocation } from "react-router-dom";
import List_Btn from "../../List_Btn";
import Menu_Bar from "../../Menu_Bar";

const Detail = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="Detail">
      <Menu_Bar />
      <div className="main">
        <div>
          <div className="search">
            <input placeholder="검색어를 입력하시오"></input>
            <button></button>
          </div>
          <div className="line"></div>
          <div className="title">
            <h1>재활용 분리 방법 안내</h1>
          </div>
          <div className="content">
            <img alt={state[0]} src={state[1]} />
            <div className="name">
              <h2>{state[0]}</h2>
              <h3>{state[2]}</h3>
              <h4>{state[12]}</h4>
            </div>
          </div>
          <div className="how">
            <h2>버리는 방법</h2>
            <div className="expl">
              <div className="box">
                <div className="image">
                  <img alt={state[3]} src={state[5]} />
                </div>
                <div>
                  <h3>step1</h3>
                  <h2>{state[3]}</h2>
                  <h3>{state[4]}</h3>
                </div>
              </div>
              <div className="box">
                <div className="image">
                  <img alt={state[6]} src={state[8]} />
                </div>
                <div>
                  <h3>step2</h3>
                  <h2>{state[6]}</h2>
                  <h3>{state[7]}</h3>
                </div>
              </div>
              <div className="box">
                <div className="image">
                  <img alt={state[9]} src={state[11]} />
                </div>
                <div>
                  <h3>step3</h3>
                  <h2>{state[9]}</h2>
                  <h3>{state[10]}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <List_Btn props={"/guide"} />
    </div>
  );
};
export default Detail;
