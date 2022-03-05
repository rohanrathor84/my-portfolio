import React from "react";
import "./About.css";
import ME from "../../assets/me1.jpg";
import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            {/* <article className="about__card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <article className="about__text">
            Hi, I'm Rohan Kumar. A motivated individual with the ability to
            adapt to any situation. I'm a{" "}
            <mark className="text__highlight">
              Mobile and Web Application developer
            </mark>
            . I like to learn new things or tools. If I don’t know something,
            I’ll definitely learn it.
          </article>
          <article className="about__text">
            Currently, I'm working as a Software developer(
            <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
              React-Native
            </a>{" "}
            and{" "}
            <a
              href="https://developer.android.com/"
              target="_blank"
              rel="noreferrer"
            >
              Android
            </a>
            ) at{" "}
            <a
              href="https://play.google.com/store/apps/details?id=fc.admin.fcexpressadmin"
              target="_blank"
              rel="noreferrer"
            >
              Firstcry India
            </a>{" "}
            and{" "}
            <a
              href="https://play.google.com/store/apps/details?id=ae.firstcry.shopping.parenting"
              target="_blank"
              rel="noreferrer"
            >
              Firstcry Arabia
            </a>{" "}
            projects.
          </article>
          <a href="#contact" className="btn btn-primary btn__style">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
