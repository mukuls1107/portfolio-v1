import React from "react";
import styles from "../styles/contactLinks.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function redirect(event) {
  const id = event.currentTarget.id;
  let url;

  switch (id) {
    case "linkedin":
      url = "https://linkedin.com/in/mukul1107";
      break;
    case "github":
      url = "https://github.com/mukuls1107";
      break;
    case "twitter":
      url = "https://x.com/mukulownsyou";
      break;
    default:
      url = "https://x.com/mukulownsyou";
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
    </div>
  );
}

export default ContactLinks;
