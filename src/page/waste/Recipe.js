import { useNavigate } from "react-router-dom";
import Menu_Bar from "../../Menu_Bar";

const Recipe = () => {
  const navigate = useNavigate();
  return (
    <div className="Recipe">
      <Menu_Bar />
      <div className="main">
        <div className="title">
          <h2>레시피 위드 에코</h2>
          <button onClick={() => navigate("/write_Re")}>글쓰기</button>
        </div>
        <div className="content">
          <div className="column">
            <div className="box">
              <button
                onClick={() =>
                  navigate("/recipe_De", {
                    state: [
                      "김밥",
                      "음식한줄소개",
                      "Img/waste/레시피/김밥.png",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img alt="김밥" src="Img/waste/레시피/김밥.png" />
              </button>
              <h3>김밥</h3>
            </div>
            <div className="box">
              <button
                onClick={() =>
                  navigate("/recipe_De", {
                    state: [
                      "깐풍기",
                      "음식한줄소개",
                      "Img/waste/레시피/치킨 깐풍기.png",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img alt="치킨 깐풍기" src="Img/waste/레시피/치킨 깐풍기.png" />
              </button>
              <h3>치킨 깐풍기</h3>
            </div>
            <div className="box">
              <button
                onClick={() =>
                  navigate("/recipe_De", {
                    state: [
                      "라자냐",
                      "음식한줄소개",
                      "Img/waste/레시피/전 라자냐.png",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img alt="전 라자냐" src="Img/waste/레시피/전 라자냐.png" />
              </button>
              <h3>전 라자냐</h3>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <button
                onClick={() =>
                  navigate("/recipe_De", {
                    state: [
                      "백설기 샌드위치",
                      "음식한줄소개",
                      "Img/waste/레시피/백설기 샌드위치.png",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img
                  alt="백설기 샌드위치"
                  src="Img/waste/레시피/백설기 샌드위치.png"
                />
              </button>
              <h3>백설기 샌드위치</h3>
            </div>
            <div className="box">
              <button
                onClick={() =>
                  navigate("/recipe_De", {
                    state: [
                      "브레드 푸딩",
                      "음식한줄소개",
                      "Img/waste/레시피/브레드 푸딩.png",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img alt="브레드 푸딩" src="Img/waste/레시피/브레드 푸딩.png" />
              </button>
              <h3>브레드푸딩</h3>
            </div>
            <div className="box">
              <button
                onClick={() =>
                  navigate("/recipe_De", {
                    state: [
                      "자투리 월남쌈밥",
                      "음식한줄소개",
                      "Img/waste/레시피/자투리 월남쌈밥.png",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img
                  alt="자투리 월남쌈밥"
                  src="Img/waste/레시피/자투리 월남쌈밥.png"
                />
              </button>
              <h3>자투리 월남쌈밥</h3>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <button
                onClick={() =>
                  navigate("/recipe_De", {
                    state: [
                      "비지 팬케이크",
                      "음식한줄소개",
                      "Img/waste/레시피/비지 팬케이크.png",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img
                  alt="비지 펜케이크"
                  src="Img/waste/레시피/비지 팬케이크.png"
                />
              </button>
              <h3>비지 팬케이크</h3>
            </div>
            <div className="box">
              <button
                onClick={() =>
                  navigate("/recipe_De", {
                    state: [
                      "야채껍질 모듬튀김",
                      "음식한줄소개",
                      "Img/waste/레시피/야채껍질 모듬튀김.png",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img
                  alt="야채껍질 모듬튀김"
                  src="Img/waste/레시피/야채껍질 모듬튀김.png"
                />
              </button>
              <h3>야채껍질 모듬튀김</h3>
            </div>
            <div className="box">
              <button
                onClick={() =>
                  navigate("/recipe_De", {
                    state: [
                      "찌개 부침개",
                      "음식한줄소개",
                      "Img/waste/레시피/찌개 부침개.png",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img alt="찌개 부침개" src="Img/waste/레시피/찌개 부침개.png" />
              </button>
              <h3>찌개 부침개</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recipe;
