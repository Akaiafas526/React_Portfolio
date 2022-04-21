import React from "react";
import Nav from "./nav";
// import "./header.css";
import { navigationLinks } from "./navigationLinks";

function Header({ page, setPage }) {
  return (
    <div className="navContainer">
      <div className="navName"> Andreas Kaiafas </div>
      <div className="navLinkContainer">
        {/* Navigation Links mapped from the navagationData.js file */}
        {navigationLinks.map((navLink, index) => (
          <div key={index}>
            <Nav navLink={navLink} page={page} setPage={setPage} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
