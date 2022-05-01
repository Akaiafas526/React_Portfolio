import React, { useState } from "react";

export default function Projects() {
  return (
    <div className="projects">
      <div className="main-project" id="project-1">
        <div className="title-card">
          <h2 className="project-title">SnapShot</h2>
          <a className="repo" href="https://github.com/Akaiafas526/SnapShot">
        Repository:
          </a>
          <a className="deploy" href="https://snapshotban.herokuapp.com/">
            Deployed:
          </a>
        </div>
      </div>
      <div className="sub-projects">
        <div className="project-container" id="project-2">
          <div className="title-card">
            <h2 className="project-title">Tech Blog</h2>
            <a className="repo" href="https://github.com/Akaiafas526/Tech_Blogtechblog">
            Repository:
            </a>
            <a className="deploy" href="https://tech-blog-ak.herokuapp.com/">
              Deployed:
            </a>
          </div>
        </div>
        <div className="project-container" id="project-3">
          <div className="title-card">
            <h2 className="project-title">Note Taker</h2>
            <a className="repo" href="https://github.com/Akaiafas526/Note_Taker">
            Repository
            </a>
            <a className="deploy" href="https://note-taker-andreas.herokuapp.com/">
              Deployed:
            </a>
          </div>
        </div>
        <div className="project-container" id="project-4">
          <div className="title-card">
            <h2 className="project-title">NBA Stat Website</h2>
            <a className="repo" href="https://github.com/danchanyoungkim/NBA-Team-Stats">
              <h5>Repository:</h5>
            </a>
            <a className="deploy" href="https://danchanyoungkim.github.io/NBA-Team-Stats/">
              <h5>Deployed:</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
