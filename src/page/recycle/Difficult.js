import Menu_Bar from "../../Menu_Bar";
import Position from "../../Position";

const Difficult = () => {
  return (
    <div className="Difficult">
      <Menu_Bar />
      <div className="title">
        <div className="name">
          <div className="block"></div>
          <h2>까다로운 분리수거</h2>
          <div className="block"></div>
        </div>
        <Position title1={"분리수거"} title2={"까다로운 분리수거"} />
      </div>
    </div>
  );
};
export default Difficult;
