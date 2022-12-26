import { useNavigate } from "react-router-dom";
import Menu_Bar from "../../Menu_Bar";
import Position from "../../Position";

const Difficult = () => {
  const navigate = useNavigate();
  return (
    <div className="Difficult">
      <Menu_Bar />
      <div className="block">
        <div className="main">
          <h1>까다로운 분리수거</h1>
          <Position title1={"분리수거"} title2={"까다로운 분리수거"} />
          <div className="content">
            <div>
              <div className="box">
                <button
                  onClick={() =>
                    navigate("/difficult_De", {
                      state: [
                        "배달 음식 먹고 난 후!",
                        "비우고",
                        "씻고",
                        "분류하고",
                      ],
                    })
                  }
                >
                  <div className="picture"></div>
                  <div className="title">
                    <h2>배달음식 먹고 난 후!</h2>
                    <h4>이렇게 분리수거 해주세요</h4>
                  </div>
                </button>
              </div>
              <div className="box">
                <button
                  onClick={() =>
                    navigate("/difficult_De", {
                      state: [
                        "배달 음식 먹고 난 후!",
                        "비우고",
                        "씻고",
                        "분류하고",
                      ],
                    })
                  }
                >
                  <div className="picture"></div>
                  <div className="title">
                    <h2>복합재료!</h2>
                    <h4>이렇게 분리수거 해주세요</h4>
                  </div>
                </button>
              </div>
            </div>
            <div>
              <div className="box">
                <button
                  onClick={() =>
                    navigate("/difficult_De", {
                      state: [
                        "배달 음식 먹고 난 후!",
                        "비우고",
                        "씻고",
                        "분류하고",
                      ],
                    })
                  }
                >
                  <div className="picture"></div>
                  <div className="title">
                    <h2>택배 수령 후!</h2>
                    <h4>이렇게 분리수거 해주세요</h4>
                  </div>
                </button>
              </div>
              <div className="box">
                <button
                  onClick={() =>
                    navigate("/difficult_De", {
                      state: [
                        "배달 음식 먹고 난 후!",
                        "비우고",
                        "씻고",
                        "분류하고",
                      ],
                    })
                  }
                >
                  <div className="picture"></div>
                  <div className="title">
                    <h2>대형 폐기물!</h2>
                    <h4>이렇게 분리수거 해주세요</h4>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Difficult;
