import React from "react";
import styles from "../styles/footer.module.css";
import instagramLogo from "../assets/instagram.svg";

const Footer = () => {
  return (
    <footer className={styles.container}>
        <a href="https://www.instagram.com/filoart__/?hl=es" rel='noopener noreferrer' target='_blank' className="{styles.instagramLink}">
        <img src={instagramLogo} alt="Instagram" className={styles.instagramLogo} />
        </a>
        <span className={styles.instagramText}>Ingresa a nuestro Instagram para contactarte con nosotros.</span>
    </footer>
  )
}

export default Footer