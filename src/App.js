import React from "react"
import {Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Results from "./pages/Results";
import Detail from "./pages/Detail"
import NotFound from "./pages/NotFound";
import { HelmetProvider } from "react-helmet-async";
const App = () => {
  return (
    <div>
      <HelmetProvider>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/search-result" element={<Results/>} />
      <Route path="/event" element={<Detail/>} />
      <Route path="/*" element={<NotFound/>} />
    </Routes> 
    </HelmetProvider>
    
   
    </div>
  );
};

export default App;
