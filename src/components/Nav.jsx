import React from "react";
import "../styles/nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {  
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

export default Nav;
