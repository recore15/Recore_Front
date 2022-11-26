import Menu_Bar from "../../Menu_Bar";
import Position from "../../Position";

const Difficult = () => {
  return (
    <div className="Difficult">
      <Menu_Bar />
      <div className="block">
        <div className="blank"></div>
        <div className="main">
          <h2>까다로운 분리수거</h2>
          <Position title1={"분리수거"} title2={"까다로운 분리수거"} />
          <div className="title">
            <h3>배달음식 먹고 난 후! 이렇게 분리수거 해주세요</h3>
          </div>
          <div className="content"></div>
          <div className="title">
            <h3>택배물에 대한 분리수거는 이렇게 해주세요</h3>
          </div>
          <div className="content"></div>
          <div className="title">
            <h3>복합재료에 대한 분리수거는 이렇게 해주세요</h3>
          </div>
          <div className="content"></div>
          <div className="title">
            <h3>대형 폐기물에 대한 분리수거는 이렇게 해주세요</h3>
          </div>
          <div className="content"></div>
        </div>
      </div>
    </div>
  );
};
export default Difficult;
