import React from "react";
// import './footer.css';
import Github from "../../assets/github-brands.svg"
import Linkedin from "../../assets/linkedin-brands.svg"
import Resume from "../../assets/file-solid.svg"

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <a
          href="https://github.com/Akaiafas526"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="github"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/andreas-kaiafas-62641a13a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Linkedin} alt="linkedin"></img>
        </a>
        <a
          href="../assets/andreas_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Resume} alt="resume"></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
