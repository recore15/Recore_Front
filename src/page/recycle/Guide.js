import { useNavigate } from "react-router-dom";
import Menu_Bar from "../../Menu_Bar";

const Guide = () => {
  const navigate = useNavigate();
  return (
    <div className="Guide">
      <Menu_Bar />
      <div className="main">
        <div className="title">
          <div className="title_menu">
            <h2>재활용 분리 방법 안내</h2>
            <div className="search">
              <input placeholder="검색어를 입력하시오"></input>
              <button></button>
            </div>
          </div>
          <div className="title_line">
            <hr />
          </div>
        </div>
        <div className="content">
          <div className="column1">
            <div className="box">
              <button
                onClick={() => {
                  navigate("/detail", {
                    state: [
                      "물품이름1",
                      "../Img/temporary.png",
                      "단계1",
                      "../Img/temporary.png",
                      "단계2",
                      "단계2사진",
                      "단계3",
                      "단계3사진",
                    ],
                  });
                }}
              >
                <img alt="물품이름1" src="../Img/temporary.png" />
              </button>
              <h3>물품이름1</h3>
            </div>
            <div className="box">
              <button
                onClick={() => {
                  navigate("/detail", {
                    state: [
                      "물품이름2",
                      "../Img/temporary.png",
                      "단계1",
                      "단계1사진",
                      "단계2",
                      "단계2사진",
                      "단계3",
                      "단계3사진",
                    ],
                  });
                }}
              >
                <img alt="물품이름2" src="../Img/temporary.png" />
              </button>
              <h3>물품이름2</h3>
            </div>
            <div className="box">
              <button
                onClick={() => {
                  navigate("/detail", {
                    state: [
                      "물품이름3",
                      "../Img/temporary.png",
                      "단계1",
                      "단계1사진",
                      "단계2",
                      "단계2사진",
                      "단계3",
                      "단계3사진",
                    ],
                  });
                }}
              >
                <img alt="물품이름3" src="../Img/temporary.png" />
              </button>
              <h3>물품이름3</h3>
            </div>
          </div>
          <div className="column2">
            <div className="box">
              <button
                onClick={() => {
                  navigate("/detail", {
                    state: [
                      "물품이름4",
                      "물품사진",
                      "단계1",
                      "단계1사진",
                      "단계2",
                      "단계2사진",
                      "단계3",
                      "단계3사진",
                    ],
                  });
                }}
              >
                <img alt="물품이름4" src="" />
              </button>
              <h3>물품이름4</h3>
            </div>
            <div className="box">
              <button
                onClick={() => {
                  navigate("/detail", {
                    state: [
                      "물품이름5",
                      "물품사진",
                      "단계1",
                      "단계1사진",
                      "단계2",
                      "단계2사진",
                      "단계3",
                      "단계3사진",
                    ],
                  });
                }}
              >
                <img alt="물품이름5" src="" />
              </button>
              <h3>물품이름5</h3>
            </div>
            <div className="box">
              <button
                onClick={() => {
                  navigate("/detail", {
                    state: [
                      "물품이름6",
                      "물품사진",
                      "단계1",
                      "단계1사진",
                      "단계2",
                      "단계2사진",
                      "단계3",
                      "단계3사진",
                    ],
                  });
                }}
              >
                <img alt="물품이름6" src="" />
              </button>
              <h3>물품이름6</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Guide;
