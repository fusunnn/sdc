import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

import Stripes from "../public/assets/hp-pt-stripes.png";
import Walk from "../public/assets/sketches/dleh.png";
import TeaCups from "../public/assets/sketches/tea-cups.png";
import DeathCleaningCover from "../public/assets/covers/death-cleaning.png";
import ArtOfAgingCover from "../public/assets/covers/art-of-aging.png";

import { CgChevronRight } from "react-icons/cg";

import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Margareta Magnusson</title>
        <meta
          name="description"
          content="Home page for the Margareta Magusson website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.home}>
          <Nav />
          <div className={styles.home__content}>
            <div className={styles.home__left}>
              <div className={styles.walk__container}>
                <Image src={Walk} alt="walk-sketch" />
              </div>
              <p className={styles.bio}>
                <span className={styles.bioSpanName}> Margareta Magnusson</span>{" "}
                is, in her own words, aged between 80 and 100. Born in Sweden,
                she has lived all over the world. Margareta graduated from
                Beckman’s College of Design and her art has been exhibited in
                galleries from Hong Kong to Singapore. She has five children and
                lives in Stockholm. She is the author of{" "}
                <span className={styles.bioSpanBT1}>
                  The Gentle Art of Swedish Death Cleaning
                </span>{" "}
                and{" "}
                <span className={styles.bioSpanBT2}>
                  The Swedish Art of Aging Exuberantly
                </span>
                .
              </p>
              <div className={styles.home__left__bot__container}>
                <div className={styles.arrow__container}>
                  <div className={styles.styled__arrow} />
                </div>
                <div className={styles.teacups__container}>
                  <Image src={TeaCups} alt="teacups-sketch" />
                </div>
                <div className={styles.arrow__container}>
                  <div className={styles.styled__arrow} />
                </div>
              </div>
            </div>
            <div className={styles.stripes__container}>
              <Image
                placeholder="blur"
                src={Stripes}
                alt="margareta-portrait"
              />
            </div>
          </div>
        </section>

        <section className={styles.books__section}>
          <p className={styles.books__section__title}>Books</p>
          <div className={styles.book__cover__section}>
            <div className={styles.death__cleaning__section}>
              <div className={styles.death__cleaning__bio}>
                <p className={styles.death__cleaning__bio__text}>
                  A charming, practical, and unsentimental approach to putting a
                  home in order while reflecting on the tiny joys that make up a
                  long life.
                </p>
                <Link href="/swedish-death-cleaning">
                  <div className={styles.death__cleaning__more__button}>
                    Learn More <CgChevronRight />{" "}
                  </div>
                </Link>
              </div>
              <Link href="/swedish-death-cleaning">
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

            <div className={styles.art__aging__section}>
              <div className={styles.art__aging__bio}>
                <p className={styles.art__aging__bio__text}>
                  A book of humorous and charming advice for embracing life and
                  aging joyfully.
                </p>
                <Link href="/art-of-aging">
                  <div className={styles.art__aging__more__button}>
                    Learn More <CgChevronRight />{" "}
                  </div>
                </Link>
              </div>

              <Link href="/art-of-aging">
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
          {/* <Carousel showStatus={false} showThumbs={false}> */}
          {/* <div> */}
          <div className={styles.video__container}>
            <iframe
              width="950"
              height="534"
              src="https://www.youtube.com/embed/yv6fBOZlMgE"
              title="The Gentle Art of Swedish Death Cleaning"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* </div>

            {} */}
          {/* </Carousel> */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
