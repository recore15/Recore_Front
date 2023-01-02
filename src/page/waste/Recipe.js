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
                      "음식이름1",
                      "음식한줄소개",
                      "음식1사진",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img alt="음식이름1" src="../Img/temporary.png" />
              </button>
              <h3>음식이름</h3>
            </div>
            <div className="box">
              <button
                onClick={() =>
                  navigate("/recipe_De", {
                    state: [
                      "음식이름2",
                      "음식한줄소개",
                      "음식2사진",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img alt="음식이름2" src="../Img/temporary.png" />
              </button>
              <h3>음식이름</h3>
            </div>
            <div className="box">
              <button
                onClick={() =>
                  navigate("/recipe_De", {
                    state: [
                      "음식이름3",
                      "음식한줄소개",
                      "음식3사진",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img alt="음식이름3" src="" />
              </button>
              <h3>음식이름</h3>
            </div>
            <div className="box">
              <button
                onClick={() =>
                  navigate("/recipe_De", {
                    state: [
                      "음식이름4",
                      "음식한줄소개",
                      "음식4사진",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img alt="음식이름4" src="" />
              </button>
              <h3>음식이름</h3>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <button
                onClick={() =>
                  navigate("/recipe_De", {
                    state: [
                      "음식이름5",
                      "음식한줄소개",
                      "음식5사진",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img alt="음식이름5" src="" />
              </button>
              <h3>음식이름</h3>
            </div>
            <div className="box">
              <button
                onClick={() =>
                  navigate("/recipe_De", {
                    state: [
                      "음식이름6",
                      "음식한줄소개",
                      "음식6사진",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img alt="음식이름6" src="../Img/temporary.png" />
              </button>
              <h3>음식이름</h3>
            </div>
            <div className="box">
              <button
                onClick={() =>
                  navigate("/recipe_De", {
                    state: [
                      "음식이름7",
                      "음식한줄소개",
                      "음식7사진",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img alt="음식이름7" src="../Img/temporary.png" />
              </button>
              <h3>음식이름</h3>
            </div>
            <div className="box">
              <button
                onClick={() =>
                  navigate("/recipe_De", {
                    state: [
                      "음식이름8",
                      "음식한줄소개",
                      "음식8사진",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img alt="음식이름8" src="../Img/temporary.png" />
              </button>
              <h3>음식이름</h3>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <button
                onClick={() =>
                  navigate("/recipe_De", {
                    state: [
                      "음식이름9",
                      "음식한줄소개",
                      "음식9사진",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img alt="음식이름9" src="" />
              </button>
              <h3>음식이름</h3>
            </div>
            <div className="box">
              <button
                onClick={() =>
                  navigate("/recipe_De", {
                    state: [
                      "음식이름10",
                      "음식한줄소개",
                      "음식10사진",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img alt="음식이름10" src="../Img/temporary.png" />
              </button>
              <h3>음식이름</h3>
            </div>
            <div className="box">
              <button
                onClick={() =>
                  navigate("/recipe_De", {
                    state: [
                      "음식이름11",
                      "음식한줄소개",
                      "음식11사진",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img alt="음식이름11" src="" />
              </button>
              <h3>음식이름</h3>
            </div>
            <div className="box">
              <button
                onClick={() =>
                  navigate("/recipe_De", {
                    state: [
                      "음식이름12",
                      "음식한줄소개",
                      "음식12사진",
                      "작성자",
                      "준비 재료 목록",
                      "조리방법1",
                      "조리방법2",
                    ],
                  })
                }
              >
                <img alt="음식이름12" src="../Img/temporary.png" />
              </button>
              <h3>음식이름</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recipe;
