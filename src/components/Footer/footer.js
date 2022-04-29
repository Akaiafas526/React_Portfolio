import React from "react";
// import './footer.css';
import { ReactComponent as Github } from "../../assets/github-brands.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin-brands.svg";
import { ReactComponent as Resume } from "../../assets/file-solid.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <a
          href="https://github.com/Akaiafas526"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img src={Github} alt="github"></img> */}
          <Github className="img" />
        </a>
        <a
          href="https://www.linkedin.com/in/andreas-kaiafas-62641a13a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img src={Linkedin} alt="linkedin"></img> */}
          <Linkedin className="img" />
        </a>
        <a 
          href="../assets/andreas_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img src={Resume} alt="resume"></img> */}
          <Resume id="img" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
