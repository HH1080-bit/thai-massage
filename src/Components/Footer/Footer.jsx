import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container d-flex justify-content-between">
        <div>All &copy;opy Rights Are Reserved</div>
        <div className={`${styles.lists}`}>
          <ul>
            <li>
              <Link to="/Contact" className={styles.customLink}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/Policy" className={styles.customLink}>
                Service Policy
              </Link>
            </li>
            <li>
              <a
                href="https://www.facebook.com/HarmonyThaiYoga"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#3B5998" }}
              >
                <AiFillFacebook size={32} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
