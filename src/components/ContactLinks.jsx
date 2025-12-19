import React from "react";
import styles from "../styles/contactLinks.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
function redirect(element) {
  let id = element.currentTarget.id;
  // console.log(id)
  let url = undefined;
  switch (id) {
    case "linkedin":
      url = `https://linkedin.com/in/mukul1107`;
      break;
    case "github":
      url = `https://github.com/mukuls1107`;
      break;
    case "twitter":
      url = `https://x.com/mukulownsyou`;
      break;
    case "resume":
      url = `https://drive.google.com/file/d/130jWh9tyjMqSDlSXucHqEHKq2I7_7lsL/view?usp=sharing`;
      break;
    default:
      url = `https://x.com/mukulownsyou`;
      break;
  }

  window.open(url, "_blank");
}

function ContactLinks() {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <div className={styles.items}>
          <FontAwesomeIcon
            icon={["fab", "github"]}
            id="github"
            onClick={redirect}
          />
        </div>
        <span className={styles.tooltip}>GitHub</span>
      </div>

      <div className={styles.iconWrapper}>
        <div className={styles.items}>
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            id="twitter"
            onClick={redirect}
          />
        </div>
        <span className={styles.tooltip}>Twitter</span>
      </div>

      <div className={styles.iconWrapper}>
        <div className={styles.items}>
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            id="linkedin"
            onClick={redirect}
          />
        </div>
        <span className={styles.tooltip}>LinkedIn</span>
      </div>

      
  );
}

export default ContactLinks;
