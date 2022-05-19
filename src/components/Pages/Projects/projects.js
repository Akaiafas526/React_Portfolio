import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export default function Projects() {
  library.add(faLink);
  return (
    <div className="projects">
      <div className="main-project" id="project-1">
        <div className="title-card">
          <h2 className="project-title">SnapShot</h2>
          <a className="repo" href="https://github.com/Akaiafas526/SnapShot">
            <FontAwesomeIcon className="fa-icon" icon="fa-solid fa-link" />
          </a>
        </div>
      </div>
      <div className="sub-projects">
        <div className="project-container" id="project-2">
          <div className="title-card">
            <h2 className="project-title">Tech Blog</h2>
            <a
              className="repo"
              href="https://github.com/Akaiafas526/Tech_Blogtechblog"
            >
              <FontAwesomeIcon className="fa-icon" icon="fa-solid fa-link" />
            </a>
          </div>
        </div>
        <div className="project-container" id="project-3">
          <div className="title-card">
            <h2 className="project-title">Note Taker</h2>
            <a
              className="repo"
              href="https://github.com/Akaiafas526/Note_Taker"
            >
              <FontAwesomeIcon className="fa-icon" icon="fa-solid fa-link" />
            </a>
          </div>
        </div>
        <div className="project-container" id="project-4">
          <div className="title-card">
            <h2 className="project-title">NBA Stat Website</h2>
            <a
              className="repo"
              href="https://github.com/danchanyoungkim/NBA-Team-Stats"
            >
              <FontAwesomeIcon className="fa-icon" icon="fa-solid fa-link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
