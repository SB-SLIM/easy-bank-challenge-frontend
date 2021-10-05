import React from "react";
import Button from "../../ui/Button";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container footer-items d-flex justify-content-between">
        <div className="footer-item">
          <img src="./assets/logo.svg" alt="logo" className="footer-logo" />
          <div>
            <img
              src="./assets/icon-facebook.svg"
              alt="icon-facebook"
              className="footer-img"
            />
            <img
              src="./assets/icon-youtube.svg"
              alt="icon-youtube"
              className="footer-img"
            />
            <img
              src="./assets/icon-twitter.svg"
              alt="icon-twitter"
              className="footer-img"
            />
            <img
              src="./assets/icon-pinterest.svg"
              alt="icon-pinterest"
              className="footer-img"
            />
            <img
              src="./assets/icon-instagram.svg"
              alt="icon-instagram"
              className="footer-img"
            />
          </div>
        </div>
        <div className="footer-item-2">
          <div className="footer-item me-5 p-0">
            <div>
              <a href="#home" className="footer-link">
                About us
              </a>
            </div>
            <div>
              <a href="#home" className="footer-link">
                Contact
              </a>
            </div>
            <div>
              <a href="#home" className="footer-link">
                Blog
              </a>
            </div>
          </div>
          <div className="footer-item p-0">
            <div>
              <a href="#home" className="footer-link">
                Careers
              </a>
            </div>
            <div>
              <a href="#home" className="footer-link">
                Supprot
              </a>
            </div>
            <div>
              <a href="#home" className="footer-link">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <div className="footer-item">
          <Button styles="align-self-center">Requeste Invite</Button>
          <div>© Easybank. All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
}
