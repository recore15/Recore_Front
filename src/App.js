import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import "./App.css";
import Guide from "./page/recycle//Guide";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/recycle" element={<Guide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
