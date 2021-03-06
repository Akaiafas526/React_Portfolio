import React from "react";
import ProfilePic from "../../../assets/profile_pic.png";

export default function About() {
  return (
    <div className="about">
      <div className="about-header">
          <img className="profile-pic" src={ProfilePic} alt="myself"></img>
      </div>

      <div className="about-text">
        <div className="about-header">
        <h2> Introduction </h2>
        </div>
        <div className="text-area">
        <p>
          {" "}
          Hello my name is Andreas Kaiafas a junior software developer and tester with
          a passion for creativity and self development. My love and passion
          for learning has carried me from a career focused around digging deep
          into the science of our food and agriculture, to an exciting new
          adventure engineering our futures software!
        </p>
        <p>
          I have a few hobbies I enjoy in my freetime. These include creating
          fun and new recipes to make delicious meals for my family, playing
          soccer with my friends, riding my bicycle to take in the day and going
          to the gym. Coding is a newfound passion of mine that has taken me by
          storm. The feeling you get when immersed in a new and exciting project
          is much like the same feeling I got when being behind the line in a
          kitchen. I've found my new love and I am looking forward to pursuing a
          career in software developement.
        </p>
        </div>
      </div>
    </div>
  );
}
