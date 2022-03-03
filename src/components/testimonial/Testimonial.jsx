import React from "react";
import "./Testimonial.css";
import AVATAR from "../../assets/me.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: AVATAR,
    name: "Rohan Kumar",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
    magni provident voluptatibus accusamus ipsam quos dolorem eius,
    suscipit, veniam inventore eaque id enim voluptates exercitationem!
    Quia molestias esse itaque aspernatur!`,
  },
  {
    avatar: AVATAR,
    name: "Rohan Kumar",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
    magni provident voluptatibus accusamus ipsam quos dolorem eius,
    suscipit, veniam inventore eaque id enim voluptates exercitationem!
    Quia molestias esse itaque aspernatur!`,
  },
  {
    avatar: AVATAR,
    name: "Rohan Kumar",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
    magni provident voluptatibus accusamus ipsam quos dolorem eius,
    suscipit, veniam inventore eaque id enim voluptates exercitationem!
    Quia molestias esse itaque aspernatur!`,
  },
  {
    avatar: AVATAR,
    name: "Rohan Kumar",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
    magni provident voluptatibus accusamus ipsam quos dolorem eius,
    suscipit, veniam inventore eaque id enim voluptates exercitationem!
    Quia molestias esse itaque aspernatur!`,
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testominial</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
