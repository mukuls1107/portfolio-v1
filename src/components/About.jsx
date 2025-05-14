import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-box">
      <div className="inner-box">
        <div className="heading-container">
          <h1 className="about-tag">/about me</h1>
          <span className="line"></span>
        </div>
        <p className="blur tag">
          Hey there! I'm <span className="name-glow">Mukul Singh</span> — a self taught developer with
          a curious mind and a keyboard that's been through countless lines of
          trial, error, and breakthroughs. My journey started with a simple
          goal: build a Discord bot for fun. But that little experiment unlocked
          a world I couldn't look away from. Since then, I've been diving deep
          into full-stack web development, backend systems, and everything in
          between.
        </p>

        <p className="blur tag">
          Here are some technologies I've been working with recently:
        </p>

        <ul className="skills-list">
          <li className="skill-item">JavaScript (ES6+)</li>
          <li className="skill-item">React</li>
          <li className="skill-item">TypeScript</li>
          <li className="skill-item">Node.js</li>
          <li className="skill-item">Python</li>
          <li className="skill-item">Express</li>
        </ul>

        <p className="blur tag">
          Outside of code, you’ll probably find me exploring new tech, helping
          friends debug their projects, or maybe we’ll just bump into each other
          at the gym.
        </p>
      </div>
    </div>
  );
};

export default About;
