import React from "react";
import Header from "./components/Header";
import ThemeStatus from "./components/ThemeStatus";
import LeftNav from "./components/LeftNav";

const App: React.FC = () => {
  return (
    <div>
      <LeftNav />
      <div>
        <Header />

        <ThemeStatus />
      </div>
    </div>
  );
};

export default App;
