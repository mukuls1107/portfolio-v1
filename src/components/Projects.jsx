import React, { forwardRef } from "react";
import styles from "../styles/projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = forwardRef((props, ref) => {
  return (
    <div className={styles.projectsBox} id={props.id} ref={ref}>
      <div className={styles.innerBox}>
        <div className={styles.headingContainer}>
          <h1 className={styles.projectsTag}>/projects</h1>
          <span className={styles.line}></span>
        </div>
        <div className={`${styles.pbox} ${styles.blur}`}>
          {" "}
          <div className={styles.projectItems}>
            <h3 className={styles.projectTitle}>Lost in Hawkins</h3>
            <p className={styles.projectDescription}>
              Generates Stranger Things style missing posters for people. (Just for fun)
            </p>
            <ul className={styles.projectTech}>
              <li className={styles.techItem}>Canvas</li>
              <li className={styles.techItem}>Gemini API</li>
              <li className={styles.techItem}>ReactJS</li>
            </ul>
            <div className={styles.projectLinks}>
              <a
                href="https://lostinhawkins.vercel.app/"
                className={styles.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </div>
          </div>
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
        </div>{" "}
      </div>
    </div>
  );
});

export default Projects;
