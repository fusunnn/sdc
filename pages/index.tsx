import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import carousel__styles from "../styles/components/Carousel.module.css";
import styles from "../styles/Home.module.css";

import ArtOfAgingCover from "../public/assets/covers/art-aging/3dcover.png";
import DeathCleaningCover from "../public/assets/covers/sdc/3dcover.png";
import Stripes from "../public/assets/hp-pt-stripes.png";
import Crabs from "../public/assets/sketches/crabs.png";
import Walk from "../public/assets/sketches/dleh.png";
import TeaCups from "../public/assets/sketches/tea-cups.png";

import { CgChevronRight } from "react-icons/cg";
import Carousel from "../components/Carousel";

const Home: NextPage = () => {
  const booksSectionRef = useRef<null | HTMLDivElement>(null);

  const handleScrollClick = () => {
    booksSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Margareta Magnusson</title>
        <meta
          name="description"
          content="Margareta Magusson official website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.home__section}>
        <div className={styles.home__left} data-aos="fade-right">
          <div className={styles.people__walking__sketch__container}>
            <Image src={Walk} alt="people-walking-sketch" />
          </div>
          <p className={styles.bio}>
            <span className={styles.bio__span__name}> Margareta Magnusson</span>{" "}
            is, in her own words, aged between 80 and 100. Born in Sweden, she
            has lived all over the world. Margareta graduated from Beckman’s
            College of Design and her art has been exhibited in galleries from
            Hong Kong to Singapore. She has five children and lives in
            Stockholm. She is the author of{" "}
            <span
              className={styles.bio__span__title__1}
              onClick={handleScrollClick}
            >
              The Gentle Art of Swedish Death Cleaning
            </span>{" "}
            and{" "}
            <span
              className={styles.bio__span__title__2}
              onClick={handleScrollClick}
            >
              The Swedish Art of Aging Exuberantly
            </span>
            .
          </p>
          <div className={styles.home__left__bot__container}>
            <div className={styles.arrow__container}>
              <div className={styles.styled__arrow} />
            </div>
            <div className={styles.teacups__sketch__container}>
              <Image src={TeaCups} alt="teacups-sketch" />
            </div>
            <div className={styles.arrow__container}>
              <div className={styles.styled__arrow} />
            </div>
          </div>
        </div>
        <div className={styles.crabs__sketch__container}>
          <Image src={Crabs} alt="crabs-sketch" />
        </div>
        <div className={styles.mm__portrait__container} data-aos="fade-left">
          <Image
            placeholder="blur"
            src={Stripes}
            alt="margareta-portrait"
            objectFit="cover"
            layout="responsive"
            priority
          />
        </div>
      </section>

      <section className={styles.books__section} ref={booksSectionRef}>
        <p className={styles.books__section__title}>Books</p>
        <div className={styles.book__cover__section}>
          <div className={styles.book__section} data-aos="fade-right">
            <div className={styles.book__bio}>
              <p className={styles.book__bio__text}>
                A charming, practical, and unsentimental approach to putting a
                home in order while reflecting on the tiny joys that make up a
                long life.
              </p>

              <Link href="/books/swedish-death-cleaning">
                <div className={styles.death__cleaning__more__button}>
                  Learn More <CgChevronRight />{" "}
                </div>
              </Link>
            </div>
            <Link href="/books/swedish-death-cleaning">
              <div className={styles.book__cover__container}>
                <Image
                  className={styles.book__cover}
                  placeholder="blur"
                  src={DeathCleaningCover}
                  alt="3d-cover-sdc"
                />
              </div>
            </Link>
          </div>

          <div className={styles.book__section} data-aos="fade-left">
            <div className={styles.book__bio}>
              <p className={styles.book__bio__text}>
                A book of humorous and charming advice for embracing life and
                aging joyfully.
              </p>
              <Link href="/books/art-of-aging">
                <div className={styles.art__aging__more__button}>
                  Learn More <CgChevronRight />{" "}
                </div>
              </Link>
            </div>

            <Link href="/books/art-of-aging">
              <div className={styles.book__cover__container}>
                <Image
                  className={styles.book__cover}
                  placeholder="blur"
                  src={ArtOfAgingCover}
                  alt="3d-cover-aging"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.videos__section}>
        <p className={styles.videos__section__title}>Videos</p>
        <div className={styles.title__underline} />
        <Carousel>
          <div className={carousel__styles.embla__slide}>
            <div className={styles.video__container}>
              <iframe
                width="800"
                height="450"
                src="https://www.youtube.com/embed/97sG2vKgmb0"
                title="The Gentle Art Of Swedish Death Cleaning | Official Trailer | Peacock Original"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className={carousel__styles.embla__slide}>
            <div className={styles.video__container}>
              <iframe
                width="950"
                height="534"
                src="https://www.youtube.com/embed/yv6fBOZlMgE"
                title="The Gentle Art of Swedish Death Cleaning"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className={carousel__styles.embla__slide}>
            <div className={styles.video__container}>
              <iframe
                width="414"
                height="736"
                src="https://www.youtube.com/embed/cF9fqP8H8UU"
                title="Aging with Style: Wear Stripes, Feel Alive"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className={carousel__styles.embla__slide}>
            <div className={styles.video__container}>
              <iframe
                width="414"
                height="736"
                src="https://www.youtube.com/embed/72d2jdFKfhg"
                title="Is Chocolate the Secret to a Long Happy Life?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className={carousel__styles.embla__slide}>
            <div className={styles.video__container}>
              <iframe
                width="414"
                height="736"
                src="https://www.youtube.com/embed/1GhjpBvjolg"
                title="The Secret to Aging: Gin and Tonic"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Carousel>
      </section>
    </div>
  );
};

export default Home;
