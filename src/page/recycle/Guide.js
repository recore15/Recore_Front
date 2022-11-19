import Image_Re from "../../Image/recycle/Image_Re";

const Guide = () => {
  return (
    <div className="Guide">
      <div className="line">
        <hr />
      </div>
      <div className="menu">
        <div className="menu_src">
          <div className="logo">
            <img className="logo_main" alt="logo" src="../image/logo.png" />
          </div>
          <div className="btn">
            <button>분리수거</button>
            <button>음식물쓰레기</button>
            <button>에코프렌드</button>
            <div className="menu_line">
              <hr />
            </div>
          </div>
        </div>
      </div>
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
            <Image_Re name={"물품이름"} props={"../image/temporary.png"} />
            <Image_Re name={"물품이름"} props={"../image/temporary.png"} />
            <Image_Re name={"물품이름"} props={"../image/temporary.png"} />
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
