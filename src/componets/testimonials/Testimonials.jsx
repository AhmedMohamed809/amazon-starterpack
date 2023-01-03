import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Hero from "../../assets/testimonialHero.png";
import css from "./Testimonial.module.css";
import { TestimonialsData } from "../../data/testimonials";
function Testimonials() {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            Seedily say has suitable disposaland boy. Exercise joy man childern
            rejoiced
          </span>
        </div>
        <img src={Hero} alt="hero" />
        <div className={css.container}>
          <span>100K</span>
          <span>Happy Customers with us </span>
        </div>
      </div>
      <div className={css.reviews}>Reviews</div>
      <div className={css.carousel}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.tCarousel}
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide>
              <div className={css.testimonial}>
                <img src={testimonial.image} alt="img" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
