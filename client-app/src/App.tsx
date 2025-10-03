import React from "react";
import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
import MainContent from "./components/MainContent";
import MapComponent from "./components/MapComponent";
import { Routes, Route } from "react-router-dom";
import PlantRegistration from "./components/treatment-plants/PlantRegistration";

const App: React.FC = () => {
  return (
    <>
        <Header />
        <LeftNav />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/map" element={<MapComponent />} />
          <Route path="/register-plant" element={<PlantRegistration />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
