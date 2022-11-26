import Image_Re from "../../Image/recycle/Image_Re";
import Menu_Bar from "../../Menu_Bar";

const Guide = () => {
  return (
    <div className="Guide">
      <Menu_Bar />
      <div className="main">
        <div className="title">
          <div className="title_menu">
            <h2>재활용 분리 방법 안내</h2>
            <div className="search">
              <input placeholder="검색어를 입력하시오"></input>
              <button></button>
            </div>
          </div>
          <div className="title_line">
            <hr />
          </div>
        </div>
        <div className="content">
          <dlv className="column1">
            <Image_Re name={"물품이름"} props={"../Img/temporary.png"} />
            <Image_Re name={"물품이름"} props={"../Img/temporary.png"} />
            <Image_Re name={"물품이름"} props={"../Img/temporary.png"} />
          </dlv>
          <div className="column2">
            <Image_Re name={"물품이름"} props={""} />
            <Image_Re name={"물품이름"} props={""} />
            <Image_Re name={"물품이름"} props={""} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Guide;
