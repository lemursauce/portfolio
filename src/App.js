// import logo from './logo.svg';
import './index.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import Landing from "./pages/landing/landing";
import NoPage from "./pages/nopage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path = "/" element={<Landing />} />
          <Route path = "/index.html" element={<Landing />} />
          <Route path = "*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
