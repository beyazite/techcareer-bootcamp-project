import React from "react"
import {Routes, Route, Link, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import Results from "./pages/Results";
import Detail from "./pages/Detail"
import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/search-result" element={<Results/>} />
      <Route path="/event" element={<Detail/>} />
      <Route path="/*" element={<NotFound/>} />
    </Routes>
    
    </div>
  );
};

export default App;
