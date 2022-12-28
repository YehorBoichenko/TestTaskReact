import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./Components/User";
import Images from "./Components/Images";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Images />}></Route>
          <Route path="/:username" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
