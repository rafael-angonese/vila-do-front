import React from "react";

import styles from './styles.module.css'

const Header = () => {

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a className={styles.link} href="#">
          Home
        </a>
        <a className={styles.link} href="#">
          Resilia
        </a>
        <a className={styles.link} href="#">
          Vila do Front
        </a>
        <a className={styles.link} href="#">
          Contato
        </a>
        <a  className={styles.link} href="#">
          Lala
        </a>
      </nav>
    </header>
  );
};

export default Header;
