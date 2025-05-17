import React from "react";
import styles from "../styles/title.module.css";
import profileImage from "../assets/portfolio2.png";
import ContactLinks from "./ContactLinks";

function Title(props) {
  return (
    <div className={styles.sectionBox}>
      <div className={styles.contentSide}>
        <div>
          <p className={styles.clrLight}>Hi, my name is</p>
          <h1 className={styles.head}>{props.name}</h1>
          <p className={`${styles.blur} ${styles.extend}`}>
            I build things for the web.
          </p>
          <p className={styles.blur}>
            I'm a passionate developer living in India, who got into coding
            trying to make a simple discord bot. Eventually, my interest grew
            and I started exploring different parts of the CS world.{" "}
          </p>
        </div>
        <ContactLinks />
      </div>{" "}
      <div className={styles.imageSide}>
        <div className={styles.imgBg}></div>
        <div className={styles.artisticDots}></div>
        <img
          src={profileImage}
          alt="Mukul Singh"
          className={styles.profileImage}
        />
      </div>
    </div>
  );
}

export default Title;
