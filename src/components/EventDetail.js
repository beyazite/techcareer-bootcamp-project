import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import EventDetailSlider from "./EventDetailSlider"

export default function EventDetail() {

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/comments/1')
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error('Fetching error: ', error);
        });
    },[]);

  return (
    <>
     <div className="container mt-5 mb-5">
      {/* first row, event name and share start */}
    <div className="row  rounded-1 pt-2 pb-2" style={{backgroundColor: "#0B2657"}}>
        <div className="col-lg-9 col-9 mb-2 ">
            <div className="item display-6 text-white text-uppercase">{data.name}</div>
        </div>

        <div className="col-lg-3 col-3  mb-2 d-flex align-items-center justify-content-end">
            <div className="item text-white">Share on Social Media</div>
        </div>
    </div>
    {/* first row ends */}

    {/* second row, event images slider start */}
    <div className='row'>    
        <div className="col-12  mb-2">
            <div className="item">
                <EventDetailSlider/>
            </div>
        </div>
    </div>
    {/* second row ends */}

   {/* third row, event detail and ticket-date sections start */}
    <div className="row">
        <div className="col-lg-6 col-12 mb-2 border border-3 rounded-1 d-flex align-items-start justify-content-center">
            <div className="item h5 pt-4">{data.body} {data.email}</div>
        </div>

       
        <div className="col-lg-6 col-12 mb-2">
            <div className="item">

            <div className="accordion" id="accordionPanelsStayOpenExample">
                
                <div className="accordion-item">
                    <h2 className="accordion-header ">
                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <i className="bi bi-calendar-week pe-3 h2 "></i> <p className='h4'>Event Date</p>
                    </button>
                    </h2>

                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" >
                    <div className="accordion-body">
                    <ul className='list-group h5'>
                      <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
                        <p className='pt-2'>Start - 12.12.2024 - 09:00</p>
                            
                      </li>
                      <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
                        <p className='pt-2'>End - 13.12.2024 - 09:00</p> 
                      </li>
                    </ul>
                    </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    <i className="bi bi-ticket-perforated pe-3 h2 "></i> <p className=' h4'>Ticket Groups and Prices</p>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" >
                    <div className="accordion-body">
                        <ul className='list-group h5'>
                            <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
                                <p className='pt-2'>Group 1 - 25 $</p>
                                <div>
                                  <button className='bi bi-dash-circle btn btn-lg'></button>
                                   <p className='d-inline h4'>0</p>
                                  <button className='bi bi-plus-circle btn  btn-lg'></button>
                                </div>
                            </li>
                            <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
                                <p className='pt-2'>Group 2 - 35 $</p> 
                                <div>
                                    <button className='bi bi-dash-circle btn btn-lg'></button> 
                                      <p className='d-inline h4'>0</p>
                                    <button className='bi bi-plus-circle btn  btn-lg'></button>
                                </div>
                            </li>
                            <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
                                <p className='pt-2'>Group 3 - 45 $</p> 
                               <div>
                                 <button className='bi bi-dash-circle btn btn-lg'></button> 
                                 <p className='d-inline h4'>0</p>
                                <button className='bi bi-plus-circle btn btn-lg'></button>
                               </div>
                            </li>
                        </ul>
                      
                    </div>
                    </div>
                </div>
                </div>
            
                </div>
                 </div>
                 </div>
                 {/* third row ends */}
                {/* fourth row, maps section start */}
                 <div className='row justify-content-center'>
        <div className="col-12 col-md-8 border border-3 rounded-1 p-0">
            <div className="item">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.3872089985102!2d28.909373075593518!3d41.06052801620662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab088cd043bf5%3A0xcf4b63fe45d3c8ef!2s%C5%9Eanzelize%20Kafe!5e0!3m2!1str!2str!4v1698061902676!5m2!1str!2str" width="100%" height="360x" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </div>
           {/* fourth row ends */}
</div>

    </>
  )}