import React from 'react'
import Events from "../components/Events"
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'
import Filter from '../components/shared/Filter'
import { Helmet } from 'react-helmet-async'

function Results() {
  return (
    <div>
       <Helmet>
        {/* use context as prop to get search data with redux, check https://www.freecodecamp.org/news/react-helmet-examples/  */}
        <title>EventHarbor - Search Results</title>
        <meta name='description'  content="Search Results!" />
      </Helmet>
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