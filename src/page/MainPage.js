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
        <Main_Btn name={"분리수거"} props={"/"} />
        <Main_Btn name={"음식물쓰레기"} props={"/"} />
        <Main_Btn name={"에코프렌드"} props={"/"} />
      </div>
    </div>
  );
};
export default MainPage;
