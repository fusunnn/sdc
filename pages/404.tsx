import React from "react";
import styles from "../styles/Error.module.css";

const Error404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content__container}>
        <p className={styles.error__number}>404</p>
        <div className={styles.line__divider} />
        <p className={styles.error__message}>
          Looks like the page you{"'"}re looking for doesn{"'"}t exist.
        </p>
      </div>
    </div>
  );
};

export default Error404;
