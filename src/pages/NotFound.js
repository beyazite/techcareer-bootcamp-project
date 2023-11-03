import React from 'react'
import {Link} from "react-router-dom"
import { Helmet } from 'react-helmet-async'

function NotFound() {
  return (
    <div>
       <Helmet>
        <title>EventHarbor - Page Not Found</title>
        <meta name='description'  content="Page not found." />
      </Helmet>
      404
        PAGE NOT FOUND 
        <Link to="/">GO MAIN PAGE</Link>
    </div>
  )
}

export default NotFound