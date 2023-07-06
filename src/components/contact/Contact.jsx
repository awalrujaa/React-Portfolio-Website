import React from "react";
import "./contact.css";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_92x431s",
        "service_92x431s",
        form.current,
        "9B6oy8MeJGz4NEWaK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <br />
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>awalruja2023@gmail.com</h5>
            <a href="mailto:awalruja2023@gmail.com">Send a message.</a>
          </article>

          <article className="contact__option">
            {/* <a
              href="https://www.linkedin.com/in/ruja-awal-b971551aa/"
              target="_blank"
            >
              <FaLinkedin className="contact__option-icon" />
            </a> */}
            <FaLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Ruja Awal</h5>
            <a href="https://www.linkedin.com/in/ruja-awal-b971551aa/">
              Connect
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />

          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
