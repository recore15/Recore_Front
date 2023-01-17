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
                        "Img/recycle/까다로운 분리수거/배달_비우고.jpg",
                        "안의 음식물은 모두  깨끗이 비운다!\n음식물을 감싸고 있던 알루미늄 호일, 기름 종이 등은 일반 쓰레기!",
                        "씻고",
                        "Img/recycle/까다로운 분리수거/배달_씻고.jpg",
                        "빨간 양념 자국은 햇빛에 말리면 대부분 사라진다!(약간의 얼룩은 분리수거 가능)\n작은 소스 비닐도 씻어서 비닐로 분류하자!\n잘 닦이지 않는 부분은 찢거나 분리하여 일반 쓰레기로 분류!",
                        "분류하고",
                        "Img/recycle/까다로운 분리수거/배달_분류하고.jpg",
                        "실링된 플라스틱 용기는 최대한 비닐 제거하기\n흰색 스티로폼은 분리수거, 색이 조금이라도 있다면 일반 쓰레기\n반질반질하거나 손으로 잘 찢기지 않는 종이상자는 일반쓰레기\n소재 확인이 어려운 피자 고정핀, 랩칼 등은 일반 쓰레기",
                      ],
                    })
                  }
                >
                  <div className="picture">
                    <img
                      src="Img/recycle/까다로운 분리수거/배달기사.png"
                      alt="배달"
                    />
                  </div>
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
                  <div className="picture">
                    <img src="Img/recycle/분리수거/아령2.jpg" alt="아령" />
                  </div>
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
                  <div className="picture">
                    <img
                      src="Img/recycle/까다로운 분리수거/택배.jpg"
                      alt="택배"
                    />
                  </div>
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
                  <div className="picture">
                    {" "}
                    <img
                      src="Img/recycle/까다로운 분리수거/서랍장.jpg"
                      alt="서랍장"
                    />
                  </div>
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
