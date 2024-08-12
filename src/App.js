
import './index.scss';
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import Landing from "./pages/landing/landing";
import NoPage from "./pages/nopage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path = "/" element={<Landing />} />
        <Route exact path = "/index.html" element={<Landing />} />
        <Route path = "*" element={<NoPage />} />
      </Routes>
    </>
  );
};

export default App;
