import React from "react";
import "./Portfolio.css";
import uberEats from "../../assets/uberEats.png";
import instagram from "../../assets/instagram.png";
import portfolio from "../../assets/myPortfolio.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={uberEats} alt="" />
          </div>
          <h3>Uber eats clone with React native</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/rohanrathor84/uberEatsMobileClone"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/rohanrathor84/uberEatsMobileClone"
              className="btn btn primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={instagram} alt="" />
          </div>
          <h3>Instagram clone with React native</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/rohanrathor84/igClone"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/rohanrathor84/igClone"
              className="btn btn primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={portfolio} alt="" />
          </div>
          <h3>My portfolio designed with ReactJs</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/rohanrathor84/my-portfolio"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/rohanrathor84/my-portfolio"
              className="btn btn primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
