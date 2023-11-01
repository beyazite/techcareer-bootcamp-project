import React from 'react'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'
import EventDetail from "../components/EventDetail"
import { Helmet } from 'react-helmet-async'


function Detail() {
  return (
    <div>
      <Helmet>
        {/* use context as prop to get search data with redux, check https://www.freecodecamp.org/news/react-helmet-examples/  */}
        <title>EventHarbor - Event Detail</title>
        <meta name='description'  content="Page not found." />
      </Helmet>
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