import Main_Btn from "../Btn/Main_Btn";
import Sites from "../Sites";
const MainPage = () => {
  return (
    <div className="MainPage">
      <div className="span">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
      <div className="logo">
        <img className="logo_main" alt="logo" src="../Img/logo.png" />
      </div>
      <div className="btn">
        <Main_Btn
          name={"분리수거"}
          prop1={"/"}
          prop2={"/Guide"}
          content1={"까다로운 분리수거"}
          content2={"재활용 분류 방법 안내"}
        />
        <Main_Btn
          name={"음식물쓰레기"}
          prop1={"/"}
          prop2={"/"}
          content1={"음식물 쓰레기 버리는 법"}
          content2={"레시피공유 위드 에코"}
        />
        <Main_Btn
          name={"에코프렌드"}
          prop1={"/"}
          prop2={"/"}
          content1={"이름7"}
          content2={"이름8"}
        />
      </div>
      <div className="search">
        <input placeholder="검색어를 입력하시오"></input>
        <button></button>
      </div>
      <div className="site">
        <Sites />
      </div>
    </div>
  );
};
export default MainPage;
