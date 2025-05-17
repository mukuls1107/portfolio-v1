import React from "react";
import ContactLinks from "./ContactLinks";
import styles from "../styles/footer.module.css";

const Footer = ({ onBacklinkClick }) => {
  return (
    <div className={styles.footer}>
      <p className={styles.name}>Built using React.js by Mukul Singh</p>
      <div className={styles.backlinks}>
        <p className={styles.items} onClick={() => onBacklinkClick("title")}>
          Landing
        </p>
        <p className={styles.items} onClick={() => onBacklinkClick("about")}>
          About
        </p>
        <p className={styles.items} onClick={() => onBacklinkClick("projects")}>
          Projects
        </p>
      </div>
    </div>
  );
};

export default Footer;
