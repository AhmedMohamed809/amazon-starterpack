import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { SliderProducts } from "../../data/products";
//import style
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slid, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="left-s">
                <div className="name">
                  <span>{slid.name}</span>
                  <span>{slid.detail}</span>
                </div>
                <span>£{slid.price}</span>
                <div>Shop now</div>
              </div>
              <img src={slid.img} alt="products" className="img-p" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
