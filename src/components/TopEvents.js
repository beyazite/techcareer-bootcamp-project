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
  

    // swiper.js timer code, do not touch
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  
    return (
      <>
      <div className="container">
      <fieldset className="border top-event-fieldset">
       <legend className=" float-none w-auto ps-2 pe-2">Music</legend>
            <button className="btn btn-outline-secondary float-end">View More</button>
              <Swiper
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
                  onAutoplayTimeLeft={onAutoplayTimeLeft}
                  className="mySwiper"
                >

                  {
                    data.map((item) => ( 
                      <SwiperSlide key={item.id} >
                          <div className="slider-item">
                          <img src={item.thumbnailUrl} className="" alt="..." />
                
                          <div className="slider-item-text">
                          <h6>{item.title}</h6>
                          <span className="tooltip-text">{item.title}</span>
                          </div>
                        </div>
                      </SwiperSlide>    
                    ))   }
          
          <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                      <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                  </div>
                </Swiper>
            </fieldset>
      </div>

      <div className="container">
      <fieldset className="border top-event-fieldset">
       <legend className=" float-none w-auto ps-2 pe-2">Events - Art</legend>
            <button className="btn btn-outline-secondary float-end">View More</button>
              <Swiper
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
                  onAutoplayTimeLeft={onAutoplayTimeLeft}
                  className="mySwiper"
                >

                  {
                    data.map((item) => ( 
                      <SwiperSlide key={item.id} >
                          <div className="slider-item">
                          <img src={item.thumbnailUrl} className="" alt="..." />
                
                          <div className="slider-item-text">
                          <h6>{item.title}</h6>
                          <span className="tooltip-text">{item.title}</span>
                          </div>
                        </div>
                      </SwiperSlide>    
                    ))   }
          
          <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                      <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                  </div>
                </Swiper>
            </fieldset>
      </div>


      <div className="container">
      <fieldset className="border top-event-fieldset">
       <legend className=" float-none w-auto ps-2 pe-2">Sports</legend>
            <button className="btn btn-outline-secondary float-end">View More</button>
              <Swiper
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
                  onAutoplayTimeLeft={onAutoplayTimeLeft}
                  className="mySwiper"
                >

                  {
                    data.map((item) => ( 
                      <SwiperSlide key={item.id} >
                          <div className="slider-item">
                          <img src={item.thumbnailUrl} className="" alt="..." />
                
                          <div className="slider-item-text">
                          <h6>{item.title}</h6>
                          <span className="tooltip-text">{item.title}</span>
                          </div>
                        </div>
                      </SwiperSlide>    
                    ))   }
          
          <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                      <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                  </div>
                </Swiper>
            </fieldset>
      </div>
      </>
    );
  }
  
  export default TopEvents;