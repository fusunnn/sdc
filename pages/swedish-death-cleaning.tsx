import React from "react";
import Image from "next/image";
import styles from "../styles/DeathCleaning.module.css";

import { Nav } from "../components/Nav";

import DeathCleaningCover from "../public/assets/death-cleaning.png";

const SwedishDeathCleaning = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.content__container}>
        <div className={styles.cover__container}>
          <Image src={DeathCleaningCover} placeholder="blur" />
        </div>
      </div>
    </div>
  );
};

export default SwedishDeathCleaning;
