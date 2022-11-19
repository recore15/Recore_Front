import Menu_Bar from "../../Menu_Bar";

const Detail = () => {
  return (
    <div className="Detail">
      <Menu_Bar />
      <div className="main">
        <div className="title">
          <div className="search">
            <input placeholder="검색어를 입력하시오"></input>
            <button></button>
          </div>
          <div className="title_line">
            <hr />
          </div>
          <div className="title_menu">
            <h2>재활용 분리 방법 안내</h2>
          </div>
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
};
export default Detail;
