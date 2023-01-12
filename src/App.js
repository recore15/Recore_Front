import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import "./App.css";
import Guide from "./page/recycle//Guide";
import Detail from "./page/recycle/Detail";
import Difficult from "./page/recycle/Difficult";
import Difficult_De from "./page/recycle/Difficult_De";
import Mode from "./page/waste/Mode";
import Detail_Mo from "./page/waste/Detail_Mo";
import Recipe from "./page/waste/Recipe";
import Detail_Re from "./page/waste/Detail_Re";
import Write_Re from "./page/waste/Write_Re";
import VolMain from "./page/ecofriend/VolMain";
import VolPostView from "./page/ecofriend/VolPostView";
import VolPostWrite from "./page/ecofriend/VolPostWrite";

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
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipe_De" element={<Detail_Re />} />
        <Route path="/write_Re" element={<Write_Re />} />
        <Route path="/volMain" element={<VolMain />} />
        <Route path="/volPostView" element={<VolPostView />} />
        <Route path="/volPostWrite" element={<VolPostWrite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
