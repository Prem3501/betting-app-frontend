import React from "react";
import MainScreen from "./pages/Mainscreen";
import About from "./pages/About";
import ResponsibleGambling from "./pages/ResponsibleGambling";
import Termsandcondition from "./pages/Termsandcondition";
import KYC from "./pages/KYC";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sports from "./pages/Sports";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/ResponsibleGambling" element={<ResponsibleGambling />} />
        <Route path="/KYC" element={<KYC />} />
        <Route path="/Termsandconditions" element={<Termsandcondition />} />
        <Route path="/About" element={<About />} />
        <Route path="/Sports" element={<Sports />} />
      </Routes>
    </Router>
  );
}

export default App;
