import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ImStackoverflow } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/rohan-kumar-26818a112/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/rohanrathor84"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://stackoverflow.com/users/11061503/rohan"
        target="_blank"
        rel="noreferrer"
      >
        <ImStackoverflow />
      </a>
      <a
        href="https://www.instagram.com/rohan_kumar.11/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
      <a
        href="https://www.facebook.com/rohankumar1197"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>
    </div>
  );
};

export default HeaderSocials;
