import React from "react";
import styles from "../styles/projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  return (
    <div className={styles.projectsBox}>
      <div className={styles.innerBox}>
        <div className={styles.headingContainer}>
          <h1 className={styles.projectsTag}>/projects</h1>
          <span className={styles.line}></span>
        </div>
        <div className={`${styles.pbox} ${styles.blur}`}>
          {" "}
          <div className={styles.projectItems}>
            <h3 className={styles.projectTitle}>Sugo</h3>
            <p className={styles.projectDescription}>
              A lightweight, intuitive static website generator that transforms
              Markdown into polished HTML. Built with Python, for simplicity.
            </p>
            <ul className={styles.projectTech}>
              <li className={styles.techItem}>Python</li>
              <li className={styles.techItem}>HTML</li>
              <li className={styles.techItem}>Shell</li>
            </ul>
            <div className={styles.projectLinks}>
              <a
                href="https://github.com/mukuls1107/sugo"
                className={styles.projectLink}
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </div>
          </div>
          <div className={styles.projectItems}>
            <h3 className={styles.projectTitle}>Developer Story</h3>
            <p className={styles.projectDescription}>
              Engineered a responsive resume builder application using React.js
              and modern web technologies.
            </p>{" "}
            <ul className={styles.projectTech}>
              <li className={styles.techItem}>React</li>
              <li className={styles.techItem}>Vite</li>
              <li className={styles.techItem}>CSS</li>
            </ul>
            <div className={styles.projectLinks}>
              <a
                href="https://github.com/mukuls1107/CV-app"
                className={styles.projectLink}
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </div>
          </div>
          <div className={styles.projectItems}>
            <h3 className={styles.projectTitle}>File Sort</h3>
            <p className={styles.projectDescription}>
              Architected an automated file organization system using Node.js.
              Implemented intelligent file categorization based on extensions.
            </p>{" "}
            <ul className={styles.projectTech}>
              <li className={styles.techItem}>Node.js</li>
              <li className={styles.techItem}>JavaScript</li>
              <li className={styles.techItem}>File System</li>
            </ul>
            <div className={styles.projectLinks}>
              <a
                href="https://github.com/mukuls1107/file-sorter/"
                className={styles.projectLink}
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
