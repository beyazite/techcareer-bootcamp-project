import React from 'react'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'
import Filter from '../components/shared/Filter'
import VisualSlide from '../components/shared/VisualSlide'
import EventDetail from "../components/EventDetail"


function Detail() {
  return (
    <div>
       <Navbar/>
       <br/>
       <br/>
       <br/>
       <EventDetail />
       <Footer/>
    </div>
  )
}

export default Detail