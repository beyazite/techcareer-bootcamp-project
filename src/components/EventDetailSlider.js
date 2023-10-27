import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import './EventDetailSlider.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function EventDetailSlider() {
  
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
  
  <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper"
    >

      {
        data.map((item) => (
          <SwiperSlide
        style={{
          boxShadow: "1px 1px 15px 4px #b3b1b5",
          transition: "border 0.3s, box-shadow 0.3s",
        }}
      >
        <div className="slide-content">
          <img src={item.url} alt="" />
          
        </div>
      </SwiperSlide>
        ))
      }

    </Swiper>
    
    
   </>
  );
}