import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.link} to="/fairies">
          Fadas
        </Link>
        <Link className={styles.link} to="/clients">
          Clientes
        </Link>
        <a className={styles.link} href="/teste">
          Vila do Front
        </a>
        <Link className={styles.link} to="/contact">
          Contato
        </Link>
        <a className={styles.link} href="#">
          Lala
        </a>
      </nav>
    </header>
  );
};

export default Header;
