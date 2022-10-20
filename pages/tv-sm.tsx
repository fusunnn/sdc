import React from "react";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/TvSM.module.css";

import People from "../public/assets/tv/people.png";
import Deadline from "../public/assets/tv/deadline.png";
import NYT from "../public/assets/tv/nyt.png";
import Saunders from "../public/assets/tv/saunders.png";

import Carousel from "../components/Carousel";
import carousel__styles from "../styles/components/Carousel.module.css";

import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const TvSM = () => {
  const redirect = (url: string) => {
    window.open(url, "_blank");
    return;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>TV & Social Media - Margareta Magnusson</title>
      </Head>
      <section className={styles.headlines__section}>
        <div className={styles.title__container}>
          <div className={styles.title}>TV & Social Media</div>
          <div className={styles.social__media__icons__container}>
            <FaInstagram
              size={28}
              className={styles.social__media__icon}
              onClick={() =>
                redirect("https://www.instagram.com/swedishdeathcleaning/")
              }
            />
            <FaFacebookSquare
              size={28}
              className={styles.social__media__icon}
              onClick={() =>
                redirect("https://www.facebook.com/deathcleaning/")
              }
            />
          </div>
        </div>
        <div className={styles.headlines__grid}>
          <div
            className={styles.headline__container}
            onClick={() =>
              redirect(
                "https://people.com/tv/amy-poehler-the-gentle-art-of-swedish-death-cleaning-peacock-reality-show/?utm_campaign=peoplemagazine&utm_content=link&utm_medium=social&utm_source="
              )
            }
          >
            <Image src={People} alt="people-headline" />
          </div>
          <div
            className={styles.headline__container}
            onClick={() =>
              redirect(
                "https://deadline.com/2022/04/amy-poehler-the-gentle-art-of-swedish-death-cleaning-peacock-1234996342/"
              )
            }
          >
            <Image src={Deadline} alt="deadline-headline" />
          </div>

          <div
            className={styles.headline__container}
            onClick={() =>
              redirect(
                "https://www.nytimes.com/2022/04/09/opinion/letters/death-cleaning-clutter.html"
              )
            }
          >
            <Image src={NYT} alt="nyt-headline" />
          </div>
          <div
            className={styles.headline__container}
            onClick={() =>
              redirect(
                "https://georgesaunders.substack.com/p/the-great-death-cleaning"
              )
            }
          >
            <Image src={Saunders} alt="saunders-headline" />
          </div>
        </div>
      </section>
      <section className={styles.youtube__section}>
        <div className={styles.youtube__title}>Death Cleaning on YouTube</div>
        <div className={styles.title__underline} />
        <div className={styles.carousel__container}>
          <Carousel>
            <div className={carousel__styles.embla__slide}>
              <iframe
                width="966"
                height="543"
                src="https://www.youtube.com/embed/3XNbAbhQZFA"
                title="I tried 'Swedish Death Cleaning' (and it worked!)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className={carousel__styles.embla__slide}>
              <iframe
                width="966"
                height="543"
                src="https://www.youtube.com/embed/TED9GXg8WGg"
                title="I FINALLY TRIED SWEDISH DEATH CLEANING (and it actually works!!!)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className={carousel__styles.embla__slide}>
              <iframe
                width="966"
                height="543"
                src="https://www.youtube.com/embed/8vmjd3SfTeo"
                title="Swedish Death Cleaning: Just 2 questions to ask yourself"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default TvSM;
