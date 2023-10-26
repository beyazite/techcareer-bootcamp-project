import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "./VisualSlide.css";
import Navbar from "./Navbar";
import Filter from "./Filter";




const VisualSlide = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
    <section className="image " >
      <Navbar></Navbar>
      <div className="img-section"></div>
      <Swiper
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.activeIndex);
        }}
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
        style={{paddingTop:'170px'}}
      >
        <SwiperSlide
          style={{
            boxShadow: activeSlide === 0 ? "1px 1px 15px 4px #31d7a9" : "none",
            transition: "border 0.3s, box-shadow 0.3s",
          }}
        >
          <div className="slide-content">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
            <div className="overlay">
              <h6 className="text-light">Title</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            boxShadow: activeSlide === 1 ? "1px 1px 15px 4px #31d7a9" : "none",
            transition: "border 0.3s, box-shadow 0.3s",
          }}
        >
          <div className="slide-content">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
            <div className="overlay">
              <h6 className="text-light">Title</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            boxShadow: activeSlide === 2 ? "1px 1px 15px 4px #31d7a9" : "none",
            transition: "border 0.3s, box-shadow 0.3s",
          }}
        >
          <div className="slide-content">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
            <div className="overlay">
              <h6 className="text-light">Title</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            boxShadow: activeSlide === 3 ? "1px 1px 15px 4px #31d7a9" : "none",
            transition: "border 0.3s, box-shadow 0.3s",
          }}
        >
          <div className="slide-content">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
            <div className="overlay">
              <h6 className="text-light">Title</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            boxShadow: activeSlide === 4 ? "1px 1px 15px 4px #31d7a9" : "none",
            transition: "border 0.3s, box-shadow 0.3s",
          }}
        >
          <div className="slide-content">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
            <div className="overlay">
              <h6 className="text-light">Title</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            boxShadow: activeSlide === 5 ? "1px 1px 15px 4px #31d7a9" : "none",
            transition: "border 0.3s, box-shadow 0.3s",
          }}
        >
          <div className="slide-content">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
            <div className="overlay">
              <h6 className="text-light">Title</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            boxShadow: activeSlide === 6 ? "1px 1px 15px 4px #31d7a9" : "none",
            transition: "border 0.3s, box-shadow 0.3s",
          }}
        >
          <div className="slide-content">
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
            <div className="overlay">
              <h6 className="text-light">Title</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            boxShadow: activeSlide === 7 ? "1px 1px 15px 4px #31d7a9" : "none",
            transition: "border 0.3s, box-shadow 0.3s",
          }}
        >
          <div className="slide-content">
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
            <div className="overlay">
              <h6 className="text-light">Title</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            boxShadow: activeSlide === 8 ? "1px 1px 15px 4px #31d7a9" : "none",
            transition: "border 0.3s, box-shadow 0.3s",
          }}
        >
          <div className="slide-content">
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
            <div className="overlay">
              <h6 className="text-light">Title</h6>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
     

    </div>
  );
};

export default VisualSlide;
