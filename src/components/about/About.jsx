import React from "react";
import "./about.css";
import ME from "../../assets/about-me4.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <br />
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Pulchowk Campus</h5>
              <small>2018-2022 | 74.4%</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>CCRC</h5>
              <small>2016-2018 | 3.48</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Himalayan ESS</h5>
              <small>3.95 (Bhaktapur Topper)</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>

          <p>
            Highly motivated Computer Engineer swith a strong passion in full
            stack web development. Having completed a number of individual and
            group projects, possesses a significant ability to work in team
            environments. Looking forward to applying my skills and contributing
            to a dynamic organization.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
