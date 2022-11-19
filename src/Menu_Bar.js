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
            <button>분리수거</button>
            <button>음식물쓰레기</button>
            <button>에코프렌드</button>
            <div className="menu_line">
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu_Bar;
