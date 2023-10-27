import React from "react";
import { useState, useEffect, useRef} from 'react';
import axios from 'axios';
import "./TopEvents.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {Autoplay, FreeMode, Pagination } from 'swiper/modules';

 
function TopEvents() {
  
  // get concert data from endpoint to map
    const [data, setData] = useState([]);
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=8')
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error('Fetching error: ', error);
        });
    }, []);
  

    
  
    return (
      <>
      <div className="container mt-5">
      <fieldset className="border border-light rounded ps-3 pe-3">
       <legend className="float-none w-auto ps-2 pe-2 text-light">Music</legend>
       {/* new row and col for button because float-end without new row and div disabled btn click */}
       <div className="row ">
        <div className="col "> <button className="btn btn-outline-light float-end">View More</button></div>
       </div>

              <Swiper
                  style={{
                      "--swiper-pagination-color": "#fff",
                      "--swiper-pagination-bullet-inactive-color": "#999999",
                      "--swiper-pagination-bullet-inactive-opacity": "0.2",
                      "--swiper-pagination-bullet-size": "8px",
                      "--swiper-pagination-bullet-horizontal-gap": "5px"
                      }}
                  slidesPerView={1}
                  breakpoints={{
                    500: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                  }}
                  spaceBetween={30}
                  freeMode={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay,FreeMode, Pagination]}
                  className="mySwiper"
                >

                  {
                    data.map((item) => ( 
                      <SwiperSlide key={item.id}>
                          <div className="slider-item">
                          <img src={item.thumbnailUrl} className="" alt="..." />
                          <div className="slider-item-text">
                          <h6 title={item.title} className="event-title">{item.title}</h6>
                          </div>
                        </div>
                      </SwiperSlide>    
                    ))   }
          
          
                </Swiper>
            </fieldset>
      </div>

      <div className="container mt-5">
      <fieldset className="border border-light rounded ps-3 pe-3">
       <legend className=" float-none w-auto ps-2 pe-2 text-light">Events - Art</legend>
           {/* new row and col for button because float-end without new row and div disabled btn click */}
       <div className="row ">
        <div className="col "> <button className="btn btn-outline-light float-end">View More</button></div>
       </div>
              <Swiper
                  style={{
                    "--swiper-pagination-color": "#fff",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "0.2",
                    "--swiper-pagination-bullet-size": "8px",
                    "--swiper-pagination-bullet-horizontal-gap": "5px"
                    }}
                  slidesPerView={1}
                  breakpoints={{
                    500: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                  }}
                  spaceBetween={30}
                  freeMode={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay,FreeMode, Pagination]}
                  className="mySwiper"
                >

                  {
                    data.map((item) => ( 
                      <SwiperSlide key={item.id} >
                          <div className="slider-item">
                          <img src={item.thumbnailUrl} className="" alt="..." />
                          <div className="slider-item-text">
                          <h6 title={item.title} className="event-title">{item.title}</h6>
                          </div>
                        </div>
                      </SwiperSlide>    
                    ))   }
          
          
                </Swiper>
            </fieldset>
      </div>


      <div className="container mt-5 mb-5">
      <fieldset className="border border-light rounded ps-3 pe-3">
       <legend className=" float-none w-auto ps-2 pe-2 text-light">Sports</legend>
             {/* new row and col for button because float-end without new row and div disabled btn click */}
       <div className="row ">
        <div className="col "> <button className="btn btn-outline-light float-end">View More</button></div>
       </div>
            
              <Swiper
                  style={{
                    "--swiper-pagination-color": "#fff",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "0.2",
                    "--swiper-pagination-bullet-size": "8px",
                    "--swiper-pagination-bullet-horizontal-gap": "5px"
                    }}
                  slidesPerView={1}
                  breakpoints={{
                    500: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                  }}
                  spaceBetween={30}
                  freeMode={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay,FreeMode, Pagination]}
                  className="mySwiper"
                >

                  {
                    data.map((item) => ( 
                      <SwiperSlide key={item.id} >
                          <div className="slider-item">
                          <img src={item.thumbnailUrl} className="" alt="..." />
                          <div className="slider-item-text">
                          <h6 title={item.title} className="event-title">{item.title}</h6>
                          </div>
                        </div>
                      </SwiperSlide>    
                    ))   }
          
          
                </Swiper>
            </fieldset>
      </div>
      </>
    );
  }
  
  export default TopEvents;