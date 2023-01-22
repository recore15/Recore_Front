import { useNavigate } from "react-router-dom";
import Menu_Bar from "../../Menu_Bar";
import Position from "../../Position";
const Mode = () => {
  const navigate = useNavigate();
  return (
    <div className="Mode">
      <Menu_Bar />
      <div className="main">
        <div className="title">
          <div className="title_menu">
            <div className="name">
              <h2>음식물 쓰레기 버리는 법 안내</h2>
              <Position
                title1={"음식물 쓰레기"}
                title2={"음식물 쓰레기 버리는 법 안내"}
              />
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
                  navigate("/mode_De", {
                    state: [
                      "수박",
                      "Img/waste/음식물쓰레기/수박.jpg",
                      "#과일#수박#파인애플#코코넛\n재활용: 가능\n분류: 음식물 쓰레기, 일반쓰레기",
                      "분리한다",
                      "단단한 껍질과 안의 과육을 분리한다.",
                      "Img/세부 페이지/음식물/수박_분리한다.jpg",
                      "줄인다",
                      "과육의 크기가 큰 경우, 잘게 썰어서 크기를 줄인다.",
                      "Img/세부 페이지/음식물/수박_줄인다.jpg",
                      "배출한다",
                      "과육은 음식물쓰레기로, 단단한 껍질은 일반 쓰레기로 배출한다.",
                      "Img/세부 페이지/음식물/수박_배출한다.jpg",
                    ],
                  });
                }}
              >
                <img alt="수박" src="Img/waste/음식물쓰레기/수박.jpg" />
              </button>
              <h3>수박</h3>
            </div>
            <div className="box">
              <button
                onClick={() => {
                  navigate("/mode_De", {
                    state: [
                      "조개",
                      "Img/waste/음식물쓰레기/조개.jpg",
                      "#어패류 #홍합 #가리비 #조개껍질\n재활용: 불가능\n분류: 일반 쓰레기",
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
                <img alt="조개" src="Img/waste/음식물쓰레기/조개.jpg" />
              </button>
              <h3>조개</h3>
            </div>
            <div className="box">
              <button
                onClick={() => {
                  navigate("/mode_De", {
                    state: [
                      "달걀껍질",
                      "Img/waste/음식물쓰레기/달걀껍질.jpg",
                      "#달걀 #껍질\n재활용: 불가능\n분류: 일반 쓰레기",
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
                <img alt="달걀껍질" src="Img/waste/음식물쓰레기/달걀껍질.jpg" />
              </button>
              <h3>달걀껍질</h3>
            </div>
          </div>
          <div className="column2">
            <div className="box">
              <button
                onClick={() => {
                  navigate("/mode_De", {
                    state: [
                      "장류",
                      "Img/waste/음식물쓰레기/고추장.jpg",
                      "#고추장 #쌈장 #된장 #간장\n재활용: 불가능\n분류: 일반 쓰레기",
                      "비운다",
                      "액체인 장류는 배수구에 흘려 보내고, 들어 있던 통은 깨끗이 씻어 분류한다.",
                      "Img/세부 페이지/음식물/장류_비운다.jpg",
                      "묶는다",
                      "고추장, 쌈장 등은 비닐에 담아 단단히 묶어 배출한다.",
                      "Img/세부 페이지/음식물/장류_묶는다.jpg",
                      "버린다",
                      "염류를 많이 포함하고 있으므로, 음식물 쓰레기가 아닌 일반 쓰레기로 배출한다.",
                      "Img/세부 페이지/음식물/장류_버린다.jpg",
                    ],
                  });
                }}
              >
                <img alt="장류" src="Img/waste/음식물쓰레기/고추장.jpg" />
              </button>
              <h3>장류</h3>
            </div>
            <div className="box">
              <button
                onClick={() => {
                  navigate("/mode_De", {
                    state: [
                      "뼈",
                      "Img/waste/음식물쓰레기/생선뼈.jpg",
                      "#생선 #치킨 #족발 #닭발\n재활용: 불가능\n분류: 일반 쓰레기",
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
                <img alt="뼈" src="Img/waste/음식물쓰레기/생선뼈.jpg" />
              </button>
              <h3>뼈</h3>
            </div>

            <div className="box">
              <button
                onClick={() => {
                  navigate("/mode_De", {
                    state: [
                      "소금",
                      "Img/waste/음식물쓰레기/소금.jpg",
                      "#소금\n재활용: 불가능\n분류: 불연성 쓰레기",
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
                <img alt="소금" src="Img/waste/음식물쓰레기/소금.jpg" />
              </button>
              <h3>소금</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mode;
