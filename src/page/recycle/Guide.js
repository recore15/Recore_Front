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
                      "Img/세부 페이지/분리수거/페트_비운다.jpg",
                      "제거한다",
                      "제품의 표면에 부착된 라벨,뚜껑등의 이물질을 제거한다.",
                      "Img/세부 페이지/분리수거/페트_제거한다.jpg",
                      "줄인다",
                      "찌그려트려 부피를 최소화한다.",
                      "Img/세부 페이지/분리수거/페트_줄인다.jpg",
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
                      "책",
                      "Img/recycle/분리수거/책.jpg",
                      "#공책 #노트 #전집\n재활용: 가능\n분류: 종이류",
                      "확인한다",
                      "심한 이물질이 뭍었는지 확인한다.(심할경우: 일반쓰레기)",
                      "Img/세부 페이지/분리수거/책_확인한다.jpg",
                      "분리한다",
                      "스프링, 플라스틱 표지 등의 구성품은 일반 종이와 분리한다.",
                      "Img/세부 페이지/분리수거/책_분리한다.jpg",
                      "분류한다",
                      "종이류에 모아 분류한다.",
                      "Img/세부 페이지/분리수거/책_분류한다.jpg",
                    ],
                  });
                }}
              >
                <img alt="책" src="Img/recycle/분리수거/책.jpg" />
              </button>
              <h3>책</h3>
            </div>
            <div className="box">
              <button
                onClick={() => {
                  navigate("/detail", {
                    state: [
                      "인형",
                      "Img/recycle/분리수거/인형.jpg",
                      "#인형 #대형인형\n재활용: 불가능\n분류: 일반쓰레기",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "I",
                    ],
                  });
                }}
              >
                <img alt="인형" src="Img/recycle/분리수거/인형.jpg" />
              </button>
              <h3>인형</h3>
            </div>
          </div>
          <div className="column2">
            <div className="box">
              <button
                onClick={() => {
                  navigate("/detail", {
                    state: [
                      "약",
                      "Img/recycle/분리수거/약.jpg",
                      "#알약 #가루약 #물약 #연고\n재활용: 불가능\n분류: 폐의약품 수거함",
                      "분류한다",
                      "약과 봉투, 상자, 설명서 등을 분류하여 따로 버린다.",
                      "Img/세부 페이지/분리수거/약_분류한다.jpg",
                      "씻지 않는다",
                      "약을 담고 있던 봉지, 튜브, 포장재 등을 씻지 않는다.(약 성분이 환경 오염을 유발할 수 있음)",
                      "Img/세부 페이지/분리수거/약_씻지않는다.jpg",
                      "버린다",
                      "약국, 보건소 등에 전달하거나 비치된 폐의약품 수거함에 버린다.",
                      "Img/세부 페이지/분리수거/약_버린다.jpg",
                    ],
                  });
                }}
              >
                <img alt="약" src="Img/recycle/분리수거/약.jpg" />
              </button>
              <h3>약</h3>
            </div>
            <div className="box">
              <button
                onClick={() => {
                  navigate("/detail", {
                    state: [
                      "박스",
                      "Img/recycle/분리수거/박스.jpg",
                      "#상자 #과일상자 #택배상자\n재활용: 가능\n분류: 종이류",
                      "제거한다",
                      "상자에 붙어있는 송장, 테이프, 철핀 등을 깨끗이 제거한다.",
                      "Img/세부 페이지/분리수거/상자_제거한다.jpg",
                      "접는다",
                      "부피가 줄어들도록 적당히 접어 정리한다.",
                      "Img/세부 페이지/분리수거/상자_접는다.jpg",
                      "모은다",
                      "박스를 모아 종이류에 배출한다.",
                      "Img/세부 페이지/분리수거/상자_모은다.jpg",
                    ],
                  });
                }}
              >
                <img alt="박스" src="Img/recycle/분리수거/박스.jpg" />
              </button>
              <h3>박스</h3>
            </div>
            <div className="box">
              <button
                onClick={() => {
                  navigate("/detail", {
                    state: [
                      "영수증",
                      "Img/recycle/분리수거/영수증.jpg",
                      "#송장 #전표 #계산서\n재활용: 불가능\n분류: 일반쓰레기",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                    ],
                  });
                }}
              >
                <img alt="영수증" src="Img/recycle/분리수거/영수증.jpg" />
              </button>
              <h3>영수증</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Guide;
