import React, { useState } from "react";
import Button from "../../ui/Button";

export default function Header() {
  const [isCollapse, setCollapse] = useState(true);

  const handelClick = (e) => {
    setCollapse(!isCollapse);
  };

  return (
    <div className=" navbar">
      <nav className=" container">
        <img src="./assets/logo.svg" alt="logo" />
        <button
          className="navbar-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isCollapse ? true : false}
          aria-label="Toggle navigation"
          onClick={handelClick}
        >
          <span>
            {!isCollapse ? (
              <img src="./assets/icon-hamburger.svg" alt="hamb" />
            ) : (
              <img src="./assets/icon-close.svg" alt="close" />
            )}
          </span>
        </button>
        <span
          className={` ${isCollapse ? "nav-collapse-backdrop " : ""}`}
        ></span>
        <div
          className={` nav-collapse collapse  ${isCollapse ? "show " : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="nav">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
              <div className="active"></div>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link ">
                About
              </a>
              <div className="active"></div>
            </li>
            <li className="nav-item">
              <a href="#home" className="nav-link ">
                Contact
              </a>
              <div className="active"></div>
            </li>
            <li className="nav-item">
              <a href="#careers" className="nav-link">
                Careers
              </a>
              <div className="active"></div>
            </li>
          </ul>
        </div>

        <Button>Requeste Invite</Button>
      </nav>
    </div>
  );
}
