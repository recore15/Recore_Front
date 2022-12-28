import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import "./App.css";
import Guide from "./page/recycle//Guide";
import Detail from "./page/recycle/Detail";
import Difficult from "./page/recycle/Difficult";
import Difficult_De from "./page/recycle/Difficult_De";
import Mode from "./page/waste/Mode";
import Detail_Mo from "./page/waste/Detail_Mo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/difficult" element={<Difficult />} />
        <Route path="/difficult_De" element={<Difficult_De />} />
        <Route path="/mode" element={<Mode />} />
        <Route path="/mode_De" element={<Detail_Mo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
