import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ImStackoverflow } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="#" className="footer__logo">
        Rohan
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#contact">Contacts</a>
        </li>
      </ul>
      <div className="footer__view">
        <div className="footer__socials">
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
          <a
            href="https://twitter.com/RohanKumar1197"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoTwitter />
          </a>
        </div>
      </div>

      <div className="footer__copyright">
        <small>&copy; Rohan Kumar. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
