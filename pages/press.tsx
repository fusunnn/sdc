import React from "react";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Press.module.css";

import BBC from "../public/assets/collage/bbc.png";
import Buzzfeed from "../public/assets/collage/buzzfeed.png";
import Dagens from "../public/assets/collage/dagens.jpg";
import EW from "../public/assets/collage/ew-roundup.jpg";
import Frankfurter from "../public/assets/collage/frankfurter.png";
import Fru from "../public/assets/collage/fru.jpg";
import Hygge from "../public/assets/collage/hygge.png";
import Japan from "../public/assets/collage/japan.png";
import NYT from "../public/assets/collage/nyt.jpg";
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
          <Image src={BBC} />
        </div>
        <div className={styles.bbc__container}>
          <Image src={Buzzfeed} />
        </div>
        <div className={styles.dagens__container}>
          <Image src={Dagens} />
        </div>
        <div className={styles.ew__container}>
          <Image src={EW} />
        </div>
        <div className={styles.frankfurter__container}>
          <Image src={Frankfurter} />
        </div>
        <div className={styles.fru__container}>
          <Image src={Fru} />
        </div>
        <div className={styles.hygge__container}>
          <Image src={Hygge} />
        </div>
        <div className={styles.japan__container}>
          <Image src={Japan} />
        </div>
        <div className={styles.nyt__container}>
          <Image src={NYT} />
        </div>
        <div className={styles.pause__container}>
          <Image src={Pause} />
        </div>
        <div className={styles.people__container}>
          <Image src={People} />
        </div>
        <div className={styles.tina__container}>
          <Image src={Tina} />
        </div>

        <div className={styles.wired__container}>
          <Image src={Wired} />
        </div>
      </div>
    </div>
  );
};

export default Press;
