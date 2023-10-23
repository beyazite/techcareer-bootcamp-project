import React from "react";
import Navbar from "./components/shared/Navbar";
import VisualSlide from "./components/shared/VisualSlide";
import Filter from "./components/shared/Filter";
import Subscribe from "./components/shared/Subscribe";
import Footer from "./components/shared/Footer"


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <VisualSlide></VisualSlide>
      <Filter></Filter>

      
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
};

export default App;
