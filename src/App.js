import React from "react";
import Navbar from "./components/shared/Navbar";
import VisualSlide from "./components/shared/VisualSlide";
import TopEvents from "./components/shared/TopEvents";
import EventDetail from "./pages/event-detail-page/EventDetail";


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <VisualSlide></VisualSlide>
      <TopEvents/>
      <EventDetail/>
    </div>
  );
};

export default App;
