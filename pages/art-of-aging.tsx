import React from "react";
import Image from "next/image";

import styles from "../styles/ArtAging.module.css";

import ArtOfAgingCover from "../public/assets/art-of-aging.png";

import { Nav } from "../components/Nav";

const ArtOfAging = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.content__container}>
        <div className={styles.cover__container}>
          <Image
            src={ArtOfAgingCover}
            placeholder="blur"
            alt="3d-cover-aging"
          />
        </div>
      </div>
    </div>
  );
};
export default ArtOfAging;
