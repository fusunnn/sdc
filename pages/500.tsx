import React from "react";
import styles from "../styles/Error.module.css";

const Error500 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content__container}>
        <p className={styles.error__number}>500</p>
        <div className={styles.line__divider} />
        <p className={styles.error__message}>
          There was an error processing your request, please try again later.
        </p>
      </div>
    </div>
  );
};

export default Error500;
