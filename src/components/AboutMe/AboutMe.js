import React, { useState } from "react";
import "./aboutMe.css";
import AboutMEPhoto from "../../Images/aboutMe-photo.avif";

function AboutMe() {
  const [activeTab, setActiveTab] = useState("MainSkills");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="aboutMe-container" id="about">
      <div className="aboutMe">
        <div className="aboutMe-image">
          <img src={AboutMEPhoto} alt="aboutMe" />
        </div>
        <div className="aboutMe-text">
          <div className="aboutMe-mySlef">
            <h1>About Me</h1>
            <p>
              I am a Junior Full-Stack Developer with a passion for web
              development, and I am actively seeking, full-time job to further
              enhance my skills and gain valuable experience in the field. I am
              eager to contribute to dynamic projects, collaborate with talented
              teams, and continue my professional growth in the world of web
              development.
            </p>
          </div>
          <div className="aboutMe-experience">
            <ul>
              <li
                onClick={() => handleTabClick("MainSkills")}
                className={activeTab === "MainSkills" ? "active-tab" : ""}
                style={{
                  color: activeTab === "MainSkills" ? "#f4004d" : "white",
                }}
              >
                Main Skills
              </li>
              <li
                onClick={() => handleTabClick("Experience")}
                className={activeTab === "Experience" ? "active-tab" : ""}
                style={{
                  color: activeTab === "Experience" ? "#f4004d" : "white",
                }}
              >
                Experience
              </li>
              <li
                onClick={() => handleTabClick("Education")}
                className={activeTab === "Education" ? "active-tab" : ""}
                style={{
                  color: activeTab === "Education" ? "#f4004d" : "white",
                }}
              >
                Education
              </li>
            </ul>
            {activeTab === "MainSkills" && (
              <div className="aboutMe-details">
                <p>
                  Worked on various Backend using
                  <br />
                  NodeJS, Express, PHP, Laravel, and SQL
                </p>
                <p>
                  Worked on different projects as Frontend using                   
                  <br />
                  Javascript, React, and Bootstrap
                </p>
                <p>
                Applied the AGILE Methodology 
                   <br />
                   organize the flow through the projects
                </p>
              </div>
            )}
            {activeTab === "Experience" && (
              <div className="aboutMe-details">
                <p>
                  Full-Stack Web Developer
                  <br />
                  2021 - 2022
                </p>
                <p>
                  Mern Stack Web Developer
                  <br />
                  2022 - 2023
                </p>
                <p>
                  Free Lance Web Developer
                  <br />
                  2023 - current
                </p>
              </div>
            )}
            {activeTab === "Education" && (
              <div className="aboutMe-details">
                <p>
                 Master in System and Network | Antonine University<br />
                 2012
                </p>
                <p>
                  Full Stack Web Developer | Codi tech
                <br />
                  2020
                </p>
                <p>
                Excel Fundamentals For Data Analysis by Coursera
                  <br />
                  2022
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
