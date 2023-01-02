import Menu_Bar from "../../Menu_Bar";

const Write_Re = () => {
  return (
    <div className="Write_Re">
      <Menu_Bar />
      <div className="main">
        <div>
          <div className="title">
            <h1>레시피 등록</h1>
            <div className="line_hr1">
              <hr />
            </div>
          </div>
          <div className="content">
            <div className="row">
              <h3>제목</h3>
              <input placeholder="제목을 입력 해주세요" />
            </div>
            <div className="row">
              <h3>첨부파일</h3>
              <input placeholder="파일을 업로드 해주세요" />
            </div>
            <div className="row">
              <h3>한 줄 소개</h3>
              <input />
            </div>
            <div className="line_hr2">
              <hr />
            </div>
            <div className="row">
              <h3>재료</h3>
              <input />
            </div>
            <div className="row">
              <h3>조리 방법</h3>
              <input />
            </div>
            <div className="row">
              <h3></h3>
              <button>+ 방법 추가</button>
            </div>
          </div>
          <div className="register_Btn">
            <div></div>
            <button>등록하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Write_Re;
