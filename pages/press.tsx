import React from "react";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Press.module.css";

import BBC from "../public/assets/collage/bbc.png";
import Buzzfeed from "../public/assets/collage/buzzfeed.png";
import Dagens from "../public/assets/collage/dagens.png";
import EW from "../public/assets/collage/ew-roundup.png";
import Frankfurter from "../public/assets/collage/frankfurter.png";
import Fru from "../public/assets/collage/fru.png";
import Hygge from "../public/assets/collage/hygge.png";
import Japan from "../public/assets/collage/japan.png";
import NYT from "../public/assets/collage/nyt.png";
import Pause from "../public/assets/collage/pause.png";
import People from "../public/assets/collage/people.png";
import Tina from "../public/assets/collage/tina.png";
import Wired from "../public/assets/collage/wired.png";

const Press = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Press - Margareta Magnusson</title>
      </Head>
      <p className={styles.title}>International Press</p>
      <div className={styles.grid__container}>
        <div className={styles.bbc__container}>
          <Image src={BBC} alt="bbc" />
        </div>
        <div className={styles.bbc__container}>
          <Image src={Buzzfeed} alt="buzzfeed" />
        </div>
        <div className={styles.dagens__container}>
          <Image src={Dagens} alt="dagens" />
        </div>
        <div className={styles.ew__container}>
          <Image src={EW} alt="ew-roundups" />
        </div>
        <div className={styles.frankfurter__container}>
          <Image src={Frankfurter} alt="frankfurter" />
        </div>
        <div className={styles.fru__container}>
          <Image src={Fru} alt="fru" />
        </div>
        <div className={styles.hygge__container}>
          <Image src={Hygge} alt="hygge" />
        </div>
        <div className={styles.japan__container}>
          <Image src={Japan} alt="japan" />
        </div>
        <div className={styles.nyt__container}>
          <Image src={NYT} alt="nyt" />
        </div>
        <div className={styles.pause__container}>
          <Image src={Pause} alt="pause" />
        </div>
        <div className={styles.people__container}>
          <Image src={People} alt="people" />
        </div>
        <div className={styles.tina__container}>
          <Image src={Tina} alt="tina" />
        </div>

        <div className={styles.wired__container}>
          <Image src={Wired} alt="wired" />
        </div>
      </div>
    </div>
  );
};

export default Press;
