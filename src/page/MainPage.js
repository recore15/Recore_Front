import Main_Btn from "../Btn/Main_Btn";
const MainPage = () => {
  return (
    <div className="MainPage">
      <div className="span">
        <span>로그인</span>
        <span>회원가입</span>
      </div>
      <div className="logo">
        <img className="logo_main" alt="logo" src="../image/logo.png" />
      </div>
      <div className="btn">
        <Main_Btn
          name={"분리수거"}
          props={"/"}
          content1={"이름1"}
          content2={"이름2"}
          content3={"이름3"}
        />
        <Main_Btn
          name={"음식물쓰레기"}
          props={"/"}
          content1={"이름4"}
          content2={"이름5"}
          content3={"이름6"}
        />
        <Main_Btn
          name={"에코프렌드"}
          props={"/"}
          content1={"이름7"}
          content2={"이름8"}
          content3={"이름9"}
        />
      </div>
      <div className="search">
        <input placeholder="검색어를 입력하시오"></input>
        <button></button>
      </div>
    </div>
  );
};
export default MainPage;
