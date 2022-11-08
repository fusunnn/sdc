import { useRef, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import carousel__styles from "../styles/components/Carousel.module.css";

import Stripes from "../public/assets/hp-pt-stripes.png";
import Walk from "../public/assets/sketches/dleh.png";
import Crabs from "../public/assets/sketches/crabs.png";
import TeaCups from "../public/assets/sketches/tea-cups.png";
import DeathCleaningCover from "../public/assets/covers/sdc/3dcover.png";
import ArtOfAgingCover from "../public/assets/covers/art-aging/3dcover.png";

import { CgChevronRight } from "react-icons/cg";
import Carousel from "../components/Carousel";
import { useEffect } from "react";
import { Loading } from "../components/Loading";

import { db } from "../firebase/firestore";
import { fetchMetadata } from "../firebase/utils/fetchMetadata";
import { YoutubeVideo } from "../components/YoutubeVideo";
import { YoutubeVideoType } from "../types/YoutubeDataType";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [sdcBookInfo, setSdcBookInfo] = useState("");
  const [artAgingBookInfo, setArtAgingBookInfo] = useState("");
  const [youtubeVideosData, setYoutubeVideosData] = useState<
    YoutubeVideoType[]
  >([]);

  const booksSectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    fetchMetadata(db, "home")
      .then((doc) => {
        setSdcBookInfo(doc!.sdc__section__info);
        setArtAgingBookInfo(doc!.art__aging__section__info);
        setYoutubeVideosData(doc!.youtube__videos);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleScrollClick = () => {
    booksSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  if (isLoading) {
    return <Loading />;
  }
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
              <p className={styles.book__bio__text}>{sdcBookInfo}</p>

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
              <p className={styles.book__bio__text}>{artAgingBookInfo}</p>
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
          {youtubeVideosData.map((video, i) => {
            return (
              <div className={carousel__styles.embla__slide} key={i}>
                <div className={styles.video__container}>
                  <YoutubeVideo src={video.src} title={video.title} />
                </div>
              </div>
            );
          })}
        </Carousel>
      </section>
    </div>
  );
};

export default Home;
