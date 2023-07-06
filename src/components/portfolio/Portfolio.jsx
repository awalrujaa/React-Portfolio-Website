import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "FPMS",
    github:
      "https://github.com/awalrujaa/Faculty-Publication-Management-System",
    demo: "https://awalrujaa.github.io/awalrujaa.github.io-/",
  },
  // {
  //   id: 2,
  //   image: IMG2,
  //   title: "Handwritten Equation Recognizer",
  //   github: "https://github.com/awalrujaa/Handwritten-Equation-Recognizer",

  //   demo: "https://awalrujaa.github.io/awalrujaa.github.io-/",
  // },
  {
    id: 2,
    image: IMG3,
    title: "Chess",
    github: "https://github.com/awalrujaa/Chess",
    demo: "https://awalrujaa.github.io/awalrujaa.github.io-/",
  },
  {
    id: 3,
    image: IMG4,
    title: "Tic Tac Toe",
    github: "https://github.com/awalrujaa/Tic-Tac-Toe",
    demo: "https://awalrujaa.github.io/awalrujaa.github.io-/",
  },
  {
    id: 4,
    image: IMG2,
    title: "Real Time Covid InfoMeter",
    github: "https://github.com/awalrujaa/Real-Time-Covid-Infometerr",
    demo: "https://awalrujaa.github.io/awalrujaa.github.io-/",
  },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Stock Price Notification",
  //   github: "https://github.com/awalrujaa/Stock-Price-Notification",
  //   demo: "https://awalrujaa.github.io/awalrujaa.github.io-/",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <br />
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}

        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project 1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://awalrujaa.github.io/awalrujaa.github.io-/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>{" "}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project 1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://awalrujaa.github.io/awalrujaa.github.io-/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>{" "}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project 1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://awalrujaa.github.io/awalrujaa.github.io-/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>{" "}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project 1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://awalrujaa.github.io/awalrujaa.github.io-/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>{" "}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project 1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://awalrujaa.github.io/awalrujaa.github.io-/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
