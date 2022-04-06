import React from "react";
import Label from "../Label";

import styles from "./styles.module.css";

function Input({ value, label, onChange, type }) {
  return (
    <>
      <Label>{label}</Label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </>
  );
}

export default Input;
