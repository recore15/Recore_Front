import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import "./App.css";
import Guide from "./page/recycle//Guide";
import Detail from "./page/recycle/Detail";
import Difficult from "./page/recycle/Difficult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Guide" element={<Guide />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/difficult" element={<Difficult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
