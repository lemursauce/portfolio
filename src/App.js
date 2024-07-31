// import logo from './logo.svg';
// import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/general/NavBar";
import Landing from "./pages/landing";
import NoPage from "./pages/nopage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route exact path = "/" element={<Landing />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
