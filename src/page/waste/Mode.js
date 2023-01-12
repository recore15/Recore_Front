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
                      "단단한 껍질과 안의 과육을 분리한다.",
                      "Img/waste/음식물쓰레기/수박_분리한다.jpg",
                      "과육의 크기가 큰 경우, 잘게 썰어서 크기를 줄인다.",
                      "Img/waste/음식물쓰레기/수박_줄인다.jpg",
                      "과육은 음식물쓰레기로, 단단한 껍질은 일반 쓰레기로 배출한다.",
                      "Img/waste/음식물쓰레기/수박_배출한다.jpg",
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
                      "고추장",
                      "Img/waste/음식물쓰레기/고기.jpg",
                      "#고기",
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
                <img alt="고기" src="Img/waste/음식물쓰레기/고기.jpg" />
              </button>
              <h3>고기</h3>
            </div>
            <div className="box">
              <button
                onClick={() => {
                  navigate("/mode_De", {
                    state: [
                      "고추장",
                      "Img/waste/음식물쓰레기/고추장.jpg",
                      "#고추장",
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
                <img alt="고추장" src="Img/waste/음식물쓰레기/고추장.jpg" />
              </button>
              <h3>고추장</h3>
            </div>
          </div>
          <div className="column2">
            <div className="box">
              <button
                onClick={() => {
                  navigate("/mode_De", {
                    state: [
                      "과일",
                      "Img/waste/음식물쓰레기/과일.jpg",
                      "#과일",
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
                <img alt="과일" src="Img/waste/음식물쓰레기/과일.jpg" />
              </button>
              <h3>과일</h3>
            </div>
            <div className="box">
              <button
                onClick={() => {
                  navigate("/mode_De", {
                    state: [
                      "김치",
                      "Img/waste/음식물쓰레기/김치.jpg",
                      "#김치",
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
                <img alt="김치" src="Img/waste/음식물쓰레기/김치.jpg" />
              </button>
              <h3>김치</h3>
            </div>
            <div className="box">
              <button
                onClick={() => {
                  navigate("/mode_De", {
                    state: [
                      "달걀껍질",
                      "Img/waste/음식물쓰레기/달걀껍질.jpg",
                      "#달걀껍질",
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
                <img alt="달걀껍질" src="Img/waste/음식물쓰레기/달걀껍질.jpg" />
              </button>
              <h3>달걀껍질</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mode;
