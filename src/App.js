import React from "react";
import Navbar from "./components/shared/Navbar";
import VisualSlide from "./components/shared/VisualSlide";
import TopEvents from "./components/shared/TopEvents";


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <VisualSlide></VisualSlide>
      <TopEvents/>
    </div>
  );
};

export default App;
