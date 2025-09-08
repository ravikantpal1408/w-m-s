import React from "react";
import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
import MainContent from "./components/MainContent";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <LeftNav />
      <MainContent />
    </>
  );
};

export default App;
