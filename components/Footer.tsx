import React from "react";
import styles from "../styles/components/Footer.module.css";

import { FiInstagram, FiFacebook } from "react-icons/fi";

export const Footer = () => {
  const redirect = (url: string) => {
    window.open("https://www.instagram.com/swedishdeathcleaning/", "_blank");
  };

  return (
    <div className={styles.footer__container}>
      <div className={styles.mm__copyright}>© 2022 Margareta Magnusson</div>
      {"|"}
      <div className={styles.social__media__icons__container}>
        <FiInstagram
          className={styles.social__media__icon}
          onClick={() =>
            redirect("https://www.instagram.com/swedishdeathcleaning/")
          }
          size={20}
        />
        <FiFacebook
          className={styles.social__media__icon}
          onClick={() => redirect("https://www.facebook.com/deathcleaning/")}
          size={20}
        />
      </div>
    </div>
  );
};
