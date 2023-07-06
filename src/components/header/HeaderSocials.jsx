import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiFillMediumSquare } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/ruja-awal-b971551aa/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/awalrujaa" target="_blank">
        <BsGithub />
      </a>
      <a href="https://medium.com/@rujaawal" target="_blank">
        <AiFillMediumSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
