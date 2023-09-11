import React from "react";
import MainScreen from "./pages/Mainscreen";
import About from "./pages/About";
import ResponsibleGambling from "./pages/ResponsibleGambling";
import Termsandcondition from "./pages/Termsandcondition";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/ResponsibleGambling" element={<ResponsibleGambling />} />
        <Route path="/Termsandcondition" element={<Termsandcondition />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
