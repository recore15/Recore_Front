import Menu_Bar from "../../Menu_Bar";
import Position from "../../Position";
import { useRef } from "react";
const Difficult_De = () => {
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
              <h3>배달 음식 먹고 난 후!</h3>
              <h4>이렇게 분리수거 해주세요</h4>
            </div>
            <div className="line"></div>
            <div>
              <h4>STEP1.</h4>
              <h3>비우고</h3>
            </div>
            <div className="line"></div>
            <div>
              <h4>STEP2.</h4>
              <h3>씻고</h3>
            </div>
            <div className="line"></div>
            <div>
              <h4>STEP3.</h4>
              <h3>분류하고</h3>
            </div>
          </div>
          <div className="de_content">
            <div className="box">
              <div className="picture"></div>
              <div className="writing">
                <h4>STEP1.</h4>
                <h3>비우고</h3>
              </div>
            </div>
            <div className="box">
              <div className="picture"></div>
              <div className="writing">
                <h4>STEP2.</h4>
                <h3>씻고</h3>
              </div>
            </div>
            <div className="box">
              <div className="picture"></div>
              <div className="writing">
                <div>
                  <h4>STEP3.</h4>
                </div>
                <h3>분류하고</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Difficult_De;
