const Menu_Bar = () => {
  return (
    <div className="Menu_Bar">
      <div className="line">
        <hr />
      </div>
      <div className="menu">
        <div className="menu_src">
          <div className="logo">
            <img className="logo_main" alt="logo" src="../Img/logo.png" />
          </div>
          <div className="btn">
            <ul>
              <li>
                분리수거
                <hr />
                <ul>
                  <li>
                    <a href="/difficult">까다로운 분리수거</a>
                  </li>
                  <li>
                    <a href="/guide">재활용 분류방법 안내</a>
                  </li>
                </ul>
              </li>
              <li>
                음식물 쓰레기
                <hr />
                <ul>
                  <li>
                    <a href="#">음식물 쓰레기 버리는 법</a>
                  </li>
                  <li>
                    <a href="#">레시피공유 위드 에코</a>
                  </li>
                </ul>
              </li>
              <li>
                에코프렌드
                <hr />
                <ul>
                  <li>
                    <a href="#">뉴스기사</a>
                  </li>
                  <li>
                    <a href="#">에코플레이스</a>
                  </li>
                  <li>
                    <a href="#">봉사/캠페인</a>
                  </li>
                  <li>
                    <a href="#">순기능</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu_Bar;
