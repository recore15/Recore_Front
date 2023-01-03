import { useState } from "react";

import Menu_Bar from "../../Menu_Bar";
import CreateInput from "./CreateInput";

const Write_Re = () => {
  const [countList, setCountList] = useState([0]);
  const onAddDetailDiv = () => {
    let countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter);
    setCountList(countArr);
  };
  const onRegist = () => {
    alert("등록되었습니다!!");
  };
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
              <div className="add_btn">
                <CreateInput countList={countList} />

                <button onClick={onAddDetailDiv}>+ 방법추가</button>
              </div>
            </div>
          </div>
          <div className="register_Btn">
            <div></div>
            <button onClick={onRegist}>등록하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Write_Re;
