import React from "react";

function Header({ page, setPage }) {
  const navLinks = ["About Me", "Portfolio", "Contact", "Resume"];
  return (
    <div className="navContainer">
      <div className="navName"> Andreas Kaiafas </div>
      <div className="navLinkContainer">
        {navLinks.map((link, index) => (
          <div key={index}>
            <div
              className={`link ${link === page ? "selected" : ""}`}
              onClick={() => setPage(link)}
            >
              {link}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
