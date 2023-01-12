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
                      "건전지",
                      "Img/recycle/분리수거/건전지.jpg",
                      "#건전지",
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
                <img alt="건전지" src="Img/recycle/분리수거/건전지.jpg" />
              </button>
              <h3>건전지</h3>
            </div>
            <div className="box">
              <button
                onClick={() => {
                  navigate("/detail", {
                    state: [
                      "박스",
                      "Img/recycle/분리수거/박스.jpg",
                      "#박스",
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
                <img alt="박스" src="Img/recycle/분리수거/박스.jpg" />
              </button>
              <h3>박스</h3>
            </div>
          </div>
          <div className="column2">
            <div className="box">
              <button
                onClick={() => {
                  navigate("/detail", {
                    state: [
                      "신문지",
                      "Img/recycle/분리수거/신문지.jpg",
                      "#신문지",
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
                <img alt="신문지" src="Img/recycle/분리수거/신문지.jpg" />
              </button>
              <h3>신문지</h3>
            </div>
            <div className="box">
              <button
                onClick={() => {
                  navigate("/detail", {
                    state: [
                      "아령",
                      "Img/recycle/분리수거/아령.jpg",
                      "#아령",
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
                <img alt="아령" src="Img/recycle/분리수거/아령.jpg" />
              </button>
              <h3>아령</h3>
            </div>
            <div className="box">
              <button
                onClick={() => {
                  navigate("/detail", {
                    state: [
                      "약",
                      "Img/recycle/분리수거/약.jpg",
                      "#약",
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
                <img alt="약" src="Img/recycle/분리수거/약.jpg" />
              </button>
              <h3>약</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Guide;
