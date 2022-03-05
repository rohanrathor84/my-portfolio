import React from "react";
import CV from "../../assets/Rohan-Kumar-Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Hire Me
      </a>
    </div>
  );
};

export default CTA;
