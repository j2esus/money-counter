import { FaGithub } from 'react-icons/fa';
import { IconContext } from "react-icons";
import React from 'react';

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
      <div className="container">
        <div className="navbar-brand">Money counter</div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a target="_blank" rel="noreferrer" className="nav-link" href="https://github.com/j2esus/money-counter">
                <IconContext.Provider value={{size: "2em"}}>
                  <div><FaGithub/></div>
                </IconContext.Provider>
              </a>
            </li>
          </ul>
      </div>
    </div>
  );
}

export default Navbar;