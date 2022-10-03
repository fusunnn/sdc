import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Stripes from "../assets/hp-pt-stripes.png";
import Coffee from "../assets/coffee-cr.png";
import Books from "../assets/books.png";
import Walk from "../assets/dleh.png";
import Crabs from "../assets/crabs.png";
import TeaCups from "../assets/tea-cups.png";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Margareta Magnusson</title>
        <meta
          name="description"
          content="Home page for the Margareta Magusson website."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <p className={styles.title}>
          Margareta <br /> Magnusson
        </p>
        <ul className={styles.navList}>
          <li>
            <a>Books</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Articles</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        <div className={styles.homeContainer}>
          <div className={styles.crabContainer}>
            <Image src={Crabs} />
          </div>

          <div className={styles.bioContainer}>
            <div className={styles.walkContainer}>
              <Image src={Walk} />
            </div>
            <p className={styles.bio}>
              <span className={styles.bioSpanName}> Margareta Magnusson</span>{" "}
              is, in her own words,{" "}
              <span className={styles.bioSpanAge}>aged between 80 and 100</span>
              . Born in <span className={styles.bioSpanSweden}>Sweden</span>,
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
            <div className={styles.styledArrow}></div>
            <div className={styles.teacupsContainer}>
              <Image src={TeaCups} />
            </div>
          </div>

          <div className={styles.imageContainer}>
            <Image placeholder="blur" src={Stripes} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
