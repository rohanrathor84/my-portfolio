import React from "react";
import "./Education.css";
import { FaUserGraduate } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { BiBusSchool } from "react-icons/bi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: <FaUserGraduate />,
    name: "Smt. Kashibai Navale college of engineering",
    review: `I have completed my bachelor's degree from Savitribai Phule Pune University
     in Electronics and telecommunication stream with an aggregate percentage of 59.16%. 
     My course year was 2014 – 2018.`,
  },
  {
    avatar: <FaSchool />,
    name: "Doon ser. sec. school",
    review: `I have completed my Higher Secondary Certificate education from the Central Board of 
    Secondary Education in Mathematics and Science stream with a percentage of 68%. 
    My course year was 2013 – 2014.`,
  },
  {
    avatar: <BiBusSchool />,
    name: "Doon ser. sec. school",
    review: `I have completed my Secondary School Certificate (SSC) education from the Central Board of 
    Secondary Education (CBSE) in Mathematics and Science stream with a percentage of 68%. 
    My course year was 2012.`,
  },
];

const Education = () => {
  return (
    <section id="education">
      <h5>My Knowledge Background</h5>
      <h2>Education</h2>
      <Swiper
        className="container educations__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="education">
              <div className="client__avatar">
                <div className="icon__style">{avatar}</div>
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

export default Education;
