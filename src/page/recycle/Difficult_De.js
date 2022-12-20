import Menu_Bar from "../../Menu_Bar";
import Position from "../../Position";
const Difficult_De = () => {
  return (
    <div className="Difficult_De">
      <Menu_Bar />
      <div className="main">
        <div className="title">
          <h1>까다로운 분리수거</h1>
          <Position title1={"분리수거"} title2={"까다로운 분리수거"} />
        </div>
        <div className="step"></div>
      </div>
    </div>
  );
};
export default Difficult_De;
