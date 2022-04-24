import React, { useState } from "react";

export default function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h2> About Me </h2>
      </div>

      <div className="about-text">
        <p> My name is Andreas Kaiafas and I am junior software developer.</p>
        <p>
          {" "}
          My love and passion for learning has carried me from a career focused
          around digging deep into the science of food, to an exciting new
          career engineering our futures software!
        </p>
        <p></p>
      </div>
    </div>
  );
}
