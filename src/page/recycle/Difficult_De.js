import Menu_Bar from "../../Menu_Bar";
import Position from "../../Position";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
const Difficult_De = () => {
  const { state } = useLocation();

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
                <h3>{state[2]}</h3>
              </Link>
            </div>
            <div className="line"></div>
            <div>
              <Link to="3" spy={true} smooth={true}>
                <h4>STEP3.</h4>
                <h3>{state[3]}</h3>
              </Link>
            </div>
          </div>
          <div className="de_content">
            <div className="box" id="1">
              <div className="picture"></div>
              <div className="writing">
                <h4>STEP1.</h4>
                <h3>{state[1]}</h3>
              </div>
            </div>
            <div className="box" id="2">
              <div className="picture"></div>
              <div className="writing">
                <h4>STEP2.</h4>
                <h3>{state[2]}</h3>
              </div>
            </div>
            <div className="box" id="3">
              <div className="picture"></div>
              <div className="writing">
                <div>
                  <h4>STEP3.</h4>
                </div>
                <h3>{state[3]}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Difficult_De;
