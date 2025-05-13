import React from "react";
import "../styles/contactLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactLinks() {  
  return (
    <div className="container">
      <div className="items">
        <FontAwesomeIcon icon={['fab', 'github']} />
      </div>
      <div className="items">
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </div>
      <div className="items">
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </div>
    </div>
  );
}

export default ContactLinks;
