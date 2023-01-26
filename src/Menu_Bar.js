import { Link, NavLink } from "react-router-dom";

const Menu_Bar = () => {
  return (
    <div className="Menu_Bar">
      <div className="line">
        <hr />
      </div>
      <div className="menu">
        <div className="menu_src">
          <NavLink to={"/"}>
            <div className="logo">
              <img className="logo_main" alt="logo" src="../Img/logo.png" />
            </div>
          </NavLink>
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
                    <a href="/mode">음식물 쓰레기 버리는 법</a>
                  </li>
                  <li>
                    <a href="/recipe">레시피공유 위드 에코</a>
                  </li>
                </ul>
              </li>
              <li>
                에코프렌드
                <hr />
                <ul>
                  <li>
                    <Link to="/newsMain">뉴스기사</Link>
                  </li>
                  <li>
                    <Link to="/placeMain">에코플레이스</Link>
                  </li>
                  <li>
                    <Link to="/volMain">봉사/캠페인</Link>
                  </li>
                  <li>
                    <Link to="/productMain">순기능</Link>
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
