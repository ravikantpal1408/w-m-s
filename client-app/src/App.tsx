import React from "react";
import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
import MainContent from "./components/MainContent";
import MapComponent from "./components/MapComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <LeftNav />

        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/map" element={<MapComponent />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
