import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.Footer} py-5 mt-auto`}>
      <div className="container mx-auto flex justify-center items-center px-4">
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/?locale=en_GB" className={`${styles.Footerlink}`} target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/" className={`${styles.Footerlink}`} target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://x.com/?lang=en" className={`${styles.Footerlink}`} target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
