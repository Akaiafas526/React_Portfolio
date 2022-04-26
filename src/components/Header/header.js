import React from "react";

function Header({ page, setPage }) {
  const navLinks = ["About Me", "Projects", "Contact"];
  return (
    <div className="header">
      <div className="logo"> Andreas Kaiafas </div>
      <ul className="nav-links">
        {navLinks.map((link, index) => (
          <li
            className={`${link === page ? "selected" : ""}`}
            onClick={() => setPage(link)}
            key={index}
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
