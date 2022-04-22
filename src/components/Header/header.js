import React from "react";

function Header({ page, setPage }) {
  const navLinks = ["About Me", "Projects", "Contact"];
  return (
    <div className="navContainer">
      <div className="navName"> Andreas Kaiafas </div>
      <ul className="navLinkContainer">
        {navLinks.map((link, index) => (
          <li
            className={`${link === page ? "selected" : ""}`}
            onClick={() => setPage(link)}
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
