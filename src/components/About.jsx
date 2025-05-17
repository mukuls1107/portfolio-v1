import React from "react";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className={styles.aboutBox}>
      <div className={styles.innerBox}>
        <div className={styles.headingContainer}>
          <h1 className={styles.aboutTag}>/about me</h1>
          <span className={styles.line}></span>
        </div>
        <p className={`${styles.blur} ${styles.tag}`}>
          Hey there! I'm{" "}
          <span className={styles.nameGlow}>Mukul Singh</span> — a self taught
          developer with a curious mind and a keyboard that's been through
          countless lines of trial, error, and breakthroughs. My journey started
          with a simple goal: build a Discord bot for fun. But that little
          experiment unlocked a world I couldn't look away from. Since then, I've
          been diving deep into full-stack web development, backend systems, and
          everything in between.
        </p>

        <p className={`${styles.blur} ${styles.tag}`}>
          Here are some technologies I've been working with recently:
        </p>

        <ul className={styles.skillsList}>
          <li className={styles.skillItem}>JavaScript (ES6+)</li>
          <li className={styles.skillItem}>React</li>
          <li className={styles.skillItem}>TypeScript</li>
          <li className={styles.skillItem}>Node.js</li>
          <li className={styles.skillItem}>Python</li>
          <li className={styles.skillItem}>Express</li>
        </ul>

        <p className={`${styles.blur} ${styles.tag}`}>
          Outside of code, you'll probably find me exploring new tech, helping
          friends debug their projects, or maybe we'll just bump into each other
          at the gym.
        </p>
      </div>
    </div>
  );
};

export default About;
