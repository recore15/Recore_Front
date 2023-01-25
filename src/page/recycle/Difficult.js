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
                        "Img/세부 페이지/까다로운 분리수거/배달_비우고.jpg",
                        "안의 음식물은 모두  깨끗이 비운다!\n\n음식물을 감싸고 있던 알루미늄 호일, 기름 종이 등은 일반 쓰레기!",
                        "씻고",
                        "Img/세부 페이지/까다로운 분리수거/배달_씻고.jpg",
                        "빨간 양념 자국은 햇빛에 말리면 대부분 사라진다!\n(약간의 얼룩은 분리수거 가능)\n\n작은 소스 비닐도 씻어서 비닐로 분류하자!\n\n잘 닦이지 않는 부분은 찢거나 분리하여 일반 쓰레기로 분류!",
                        "분류하고",
                        "Img/세부 페이지/까다로운 분리수거/배달_분류하고.jpg",
                        "실링된 플라스틱 용기는 최대한 비닐 제거하기\n\n흰색 스티로폼은 분리수거, 색이 조금이라도 있다면 일반 쓰레기\n\n반질반질하거나 손으로 잘 찢기지 않는 종이상자는 일반쓰레기\n\n소재 확인이 어려운 피자 고정핀, 랩칼 등은 일반 쓰레기",
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
                        "복합재료 버릴때!",
                        "확인하고",
                        "Img/세부 페이지/까다로운 분리수거/복합_확인하고.jpg",
                        "제품에 표시된 분리배출 표시를 확인하여 그에 맞는 제품 분류 방법을 구분한다.\n\n빨간색 ‘도포/첩합 표시’가 부착되어 있는 경우, 일반 쓰레기로 분류한다.",
                        "배출하고",
                        "Img/세부 페이지/까다로운 분리수거/복합_분류하고.jpg",
                        "분리배출 표시를 참고하여 재질이 다른 부분을 최대한 분리한다.\n\n분리한 부분들을 해당 분류에 맞게 알맞게 배출한다.",
                        "분리배출표시",
                        "Img/세부 페이지/까다로운 분리수거/복합_분리배출표시_표.png",
                        "알맞게 배출하세요!",
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
                        "택배 수령 후!",
                        "제거하고",
                        "Img/세부 페이지/까다로운 분리수거/택배_제거하고.jpg",
                        "상자, 포장지 등에 붙어있는 송장, 광고물, 테이프 등을 최대한 깨끗이 제거한다!\n\n제거한 쓰레기는 개인정보 등이 유출되지 않도록 종량제 봉투에 잘 버린다!",
                        "정리하고",
                        "Img/세부 페이지/까다로운 분리수거/택배_정리하고.jpg",
                        "상자, 스티로폼 등에 이물질이 뭍지 않도록 한다!\n\n상자 등은 접어서 부피를 최소화한다!",
                        "분류하고",
                        "Img/세부 페이지/까다로운 분리수거/택배_분류하고.jpg",
                        "상자는 종이류! 흰색 스티로폼은 플라스틱류!\n(별도로 구분)\n\n뽁뽁이 같은 비닐 완충재는 비닐류!\n\n아이스팩, 부직포 가방 등은 일반 쓰레기!",
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
                        "대형폐기물 이렇게 버리세요!",
                        "확인하고",
                        "Img/세부 페이지/까다로운 분리수거/대형 폐기물_확인하고.jpg",
                        "재활용 가능 여부를 확인한다!\n(재활용센터, 개인수집상 등 활용)\n\n제품의 종류를 명확히 구분한다!\n(폐기물 신고 사이트 참고)",
                        "신고하고",
                        "Img/세부 페이지/까다로운 분리수거/대형 폐기물_신고하고.jpg",
                        "‘거주하는 곳 + 폐기물’을 인터넷에 검색하면 각 지역의 폐기물 신고 사이트를 찾을 수 있다!\n\n배출하고자하는 물품의 종류, 규격 등을 정확히 파악한 후 수수료와 함께 신고한다!\n\n신고 후, 신고필증 출력 또는 해당 내용을 종이에 기입한다.",
                        "배출하고",
                        "Img/세부 페이지/까다로운 분리수거/대형 폐기물_배출하고.jpg",
                        "준비된 신고필증을 배출하고자 하는 대형 폐기물에 반드시 부착한다!\n\n정해진 시간(지역별 수거시간 또는 신고 예정 시간)에 올바른 장소에 배출한다.",
                      ],
                    })
                  }
                >
                  <div className="picture">
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
