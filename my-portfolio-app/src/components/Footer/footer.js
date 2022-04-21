import React from "react";
// import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <a href="https://github.com/Akaiafas526">
          <img
            className="githubLogo"
            src="/images/github-logo.png"
            alt="GitHub Logo"
          ></img>
        </a>
        <a href="https://www.linkedin.com/in/andreas-kaiafas-62641a13a/">
          <img
            className="linkedInLogo"
            src="/images/linkedin-logo.png"
            alt="LinkedIn Logo"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
