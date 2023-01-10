import { useNavigate } from "react-router-dom";
import Menu_Bar from "../../Menu_Bar";
import Position from "../../Position";
const Guide = () => {
  const navigate = useNavigate();
  return (
    <div className="Guide">
      <Menu_Bar />
      <div className="main">
        <div className="title">
          <div className="title_menu">
            <div className="name">
              <h2>재활용 분리 방법 안내</h2>
              <Position title1={"분리수거"} title2={"재활용 분리방법 안내"} />
            </div>
            <div className="search">
              <input placeholder="검색어를 입력하시오"></input>
              <button></button>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="column1">
            <div className="box">
              <button
                onClick={() => {
                  navigate("/detail", {
                    state: [
                      "페트병",
                      "Img/recycle/분리수거/페트병.jpg",
                      "#페트병 #PET #투명 페트병\n재활용: 가능\n분류: PET",
                      "비운다",
                      "페트병 안을 깨끗이 비운다.",
                      "Img/recycle/분리수거/페트_비운다.jpg",
                      "제거한다",
                      "제품의 표면에 부착된 라벨,뚜껑등의 이물질을 제거한다.",
                      "Img/recycle/분리수거/페트_제거한다.jpg",
                      "줄인다",
                      "찌그려트려 부피를 최소화한다.",
                      "Img/recycle/분리수거/페트_줄인다.jpg",
                    ],
                  });
                }}
              >
                <img alt="페트병" src="Img/recycle/분리수거/페트병.jpg" />
              </button>
              <h3>페트병</h3>
            </div>
            <div className="box">
              <button
                onClick={() => {
                  navigate("/detail", {
                    state: [
                      "물품이름2",
                      "Img/temporary.png",
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
                      "../../Img/recycle/분리수거/페트병.jpg",
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
