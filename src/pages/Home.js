import React from 'react'
import VisualSlide from "../components/shared/VisualSlide"
import Filter from "../components/shared/Filter"
import TopEvents from "../components/TopEvents"
import Footer from "../components/shared/Footer"
import { Helmet } from 'react-helmet-async'

function Home() {
  return (
    <div>
      <Helmet>
        <title>EventHarbor - Your Harbor for Event Tickets</title>
        <meta name='description'  content="Best event booking service!" />
      </Helmet>
        <VisualSlide/>
        <Filter/>
        <TopEvents/>
        <Footer/>
    </div>
  )
}

export default Home