import Menu_Bar from "../../Menu_Bar";
import Position from "../../Position";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import List_Btn from "../../List_Btn";

const Difficult_De = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="Difficult_De">
      <Menu_Bar />
      <div className="main">
        <div className="content">
          <div className="title">
            <div></div>
            <div>
              <h1>까다로운 분리수거</h1>
              <Position title1={"분리수거"} title2={"까다로운 분리수거"} />
            </div>
            <div></div>
          </div>
          <div className="step">
            <div className>
              <h3>{state[0]}</h3>
              <h4>이렇게 분리수거 해주세요</h4>
            </div>
            <div className="line"></div>
            <div>
              <Link to="1" spy={true} smooth={true}>
                <h4>STEP1.</h4>
                <h3>{state[1]}</h3>
              </Link>
            </div>
            <div className="line"></div>
            <div>
              <Link to="2" spy={true} smooth={true}>
                <h4>STEP2.</h4>
                <h3>{state[4]}</h3>
              </Link>
            </div>
            <div className="line"></div>
            <div>
              <Link to="3" spy={true} smooth={true}>
                <h4>STEP3.</h4>
                <h3>{state[7]}</h3>
              </Link>
            </div>
          </div>
          <div className="de_content">
            <div className="box" id="1">
              <div className="picture">
                <img src={state[2]} alt={state[1]} />
              </div>
              <div className="writing">
                <h4>STEP1.</h4>
                <h3>{state[1]}</h3>
                <h5>{state[3]}</h5>
              </div>
            </div>
            <div className="box" id="2">
              <div className="picture">
                <img src={state[5]} alt={state[4]}></img>
              </div>
              <div className="writing">
                <h4>STEP2.</h4>
                <h3>{state[4]}</h3>
                <h5>{state[6]}</h5>
              </div>
            </div>
            <div className="box" id="3">
              <div className="picture">
                <img src={state[8]} alt={state[7]} />
              </div>
              <div className="writing">
                <div>
                  <h4>STEP3.</h4>
                </div>
                <h3>{state[7]}</h3>
                <h5>{state[9]}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <List_Btn props={"/difficult"} />
    </div>
  );
};
export default Difficult_De;
