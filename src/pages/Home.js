import React from 'react'
import VisualSlide from "../components/shared/VisualSlide"
import Filter from "../components/shared/Filter"
import TopEvents from "../components/TopEvents"
import Footer from "../components/shared/Footer"

function Home() {
  return (
    <div>
        <VisualSlide/>
        <Filter/>
        <TopEvents/>
        <Footer/>
    </div>
  )
}

export default Home