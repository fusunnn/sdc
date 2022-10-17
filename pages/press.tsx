import React from "react";
import styles from "../styles/Press.module.css";

import Image from "next/image";

import Collage from "../public/assets/press-collage-3.png";

const Press = () => {
  return (
    <div className={styles.container}>
      <div className={styles.collage__container}>
        <Image src={Collage} />
      </div>
    </div>
  );
};

export default Press;
