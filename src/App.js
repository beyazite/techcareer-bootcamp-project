import React from "react";
import Navbar from "./components/shared/Navbar";
import VisualSlide from "./components/shared/VisualSlide";
import TopEvents from "./components/shared/TopEvents";
import EventDetail from "./pages/event-detail-page/EventDetail";
import Events from "./components/shared/Events";
import Footer from "./components/shared/Footer";
import Subscribe from "./components/shared/Subscribe";
import Filter from "./components/shared/Filter";

const App = () => {
  return (
    <div>
      
      <Navbar></Navbar>
      <VisualSlide></VisualSlide>
      <Filter></Filter>
      <TopEvents />
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
};

export default App;
