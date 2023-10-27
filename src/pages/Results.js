import React from 'react'
import Events from "../components/Events"
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'
import Filter from '../components/shared/Filter'

function Results() {
  return (
    <div>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Filter/>
        <Events/>
        <Footer/>
    </div>
  )
}

export default Results