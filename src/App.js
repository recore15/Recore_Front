import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import "./App.css";
import Guide from "./page/recycle//Guide";
import Detail from "./page/recycle/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Guide" element={<Guide />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
