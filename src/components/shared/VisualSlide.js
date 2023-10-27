import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "./VisualSlide.css";
import Navbar from "./Navbar";
import axios from "axios";

const VisualSlide = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=8")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Fetching error: ", error);
      });
  }, []);

  return (
    <section className="image ">
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
        style={{ paddingTop: "170px" }}
      >
        {data.map((item) => (
          <SwiperSlide
          key={item.id}
            style={{
              boxShadow:
                activeSlide === item.id -1 ? "1px 1px 15px 4px #31d7a9" : "none",
              transition: "border 0.3s, box-shadow 0.3s",
            }}
          >
            <div className="slide-content">
              <img
                src={item.url} 
                alt=""
              />
              <div className="overlay">
                <h6 className="text-light">Title</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default VisualSlide;
