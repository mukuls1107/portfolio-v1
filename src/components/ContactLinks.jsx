import React from "react";
import "../styles/contactLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    default:
      url = `https://x.com/mukulownsyou`;
      break;
  }

  window.open(url, "_blank");
}

function ContactLinks() {
  return (
    <div className="container">
      <div className="items">
        <FontAwesomeIcon
          icon={["fab", "github"]}
          id="github"
          onClick={redirect}
        />
      </div>
      <div className="items">
        <FontAwesomeIcon
          icon={["fab", "twitter"]}
          id="twitter"
          onClick={redirect}
        />
      </div>
      <div className="items">
        <FontAwesomeIcon
          icon={["fab", "linkedin"]}
          id="linkedin"
          onClick={redirect}
        />
      </div>
    </div>
  );
}

export default ContactLinks;
