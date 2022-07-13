import React from "react";
import styles from "./footer.module.scss";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__left}>
        <p className={styles.footer__menu}>Ru</p>
        <p className={`${styles.footer__menu} ${styles.underlined}`}>En</p>
      </div>
      <p className={styles.footer__copyright}>&copy;{year} Bella Mironova</p>
    </footer>
  );
}

export default Footer;
