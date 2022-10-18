import React from "react";
import Image from "next/image";
import Head from "next/head";

import styles from "../../styles/books/BookPage.module.css";

import ArtOfAgingCover from "../../public/assets/covers/art-aging/3dcover.png";
import UKCover from "../../public/assets/covers/art-aging/international/uk.jpg";

import AmazonBL from "../../public/assets/buy-logos/amazon-bl.png";
import BarnesNobleBL from "../../public/assets/buy-logos/barnesnoble-bl.png";
import BookshopBL from "../../public/assets/buy-logos/bookshop-bl.png";
import SimonSchusterBL from "../../public/assets/buy-logos/simonschuster-bl.png";
import AppleBL from "../../public/assets/buy-logos/apple-bl.svg";

import { Quote } from "../../components/Quote";
import { quotes } from "../../public/assets/quotes/art-aging-quotes";

const ArtOfAging = () => {
  const redirect = (url: string) => {
    window.open(url, "_blank");
    return;
  };

  const AMAZON_URL =
    "https://www.amazon.com/Swedish-Art-Aging-Well-Probably/dp/1982196629";
  const BARNESNOBLE_URL =
    "https://www.barnesandnoble.com/w/the-swedish-art-of-aging-exuberantly-margareta-magnusson/1141621812";
  const BOOKSHOP_URL =
    "https://bookshop.org/books/the-swedish-art-of-aging-exuberantly-life-wisdom-from-someone-who-will-probably-die-before-you/9781982196622";
  const SIMONSCHUSTER_URL =
    "https://www.simonandschuster.com/books/The-Swedish-Art-of-Aging-Exuberantly/Margareta-Magnusson/The-Swedish-Art-of-Living-Dying-Series/9781982196622";
  const APPLEBOOKS_URL =
    "https://books.apple.com/us/book/the-swedish-art-of-aging-exuberantly/id1590874798";

  const CANONGATE_URL =
    "https://canongate.co.uk/books/4833-the-swedish-art-of-ageing-well-life-wisdom-from-someone-who-will-probably-die-before-you/";

  return (
    <div className={styles.container}>
      <Head>
        <title>The Swedish Art of Aging Exuberantly- Margareta Magnusson</title>
      </Head>
      <section className={styles.main__section}>
        <div className={styles.cover__container}>
          <Image
            src={ArtOfAgingCover}
            placeholder="blur"
            alt="3d-cover-aging"
          />
        </div>
        <div className={styles.book__info__container}>
          <p className={styles.book__title__art__aging}>
            The Swedish Art of Aging Exuberantly
          </p>
          <p className={styles.subtitle}>
            Life Wisdom from Someone Who Will (Probably) Die Before You
            <br />
            Rights sold in 7 territories
          </p>
          <p className={styles.description}>
            Margareta Magnusson shared with the world her practical Swedish
            tradition of döstädning , or “death cleaning” — clearing out
            unnecessary belongings before others must do it for you — in her
            international bestseller The Gentle Art of Swedish Death Cleaning.
            Now, unburdened by baggage (emotional and actual) she is able to
            focus on what makes each day worth living, and reveals her
            discoveries about growing older — some difficult to accept, many
            rather wondrous. She reflects on her early days growing up in Sweden
            and raising her family around the world, offering tips and w isdom
            on how to age gracefully, such as: don’t be afraid to wear stripes,
            don’t resist new technology, let go of what doesn’t matter, and much
            more. As with death - cleaning, it’s never too early to begin and
            The Swedish Art of Aging Well shows us how to pr epare for and
            understand the aging process, and the joys and sorrows it can bring.
            While Margareta still recommends ongoing downsizing and decluttering
            (your loved ones will thank you!) her ultimate message is that we
            should all be less afraid of the idea of death. Wise, funny, and
            practical, The Swedish Art of Aging Well is a gentle and welcome
            reminder that, no matter your age, there are always fresh
            discoveries ahead, and pleasures both new and familiar to be enjoyed
            every day.
          </p>
        </div>

        <div className={styles.buylinks__container}>
          <div
            className={styles.logo__container}
            onClick={() => redirect(AMAZON_URL)}
          >
            <Image src={AmazonBL} alt="amazon-logo" />
          </div>

          <div
            className={styles.logo__container}
            onClick={() => redirect(BARNESNOBLE_URL)}
          >
            <Image src={BarnesNobleBL} alt="barnesnoble-logo" />
          </div>

          <div
            className={styles.logo__container}
            onClick={() => redirect(BOOKSHOP_URL)}
          >
            <Image src={BookshopBL} alt="bookshop-logo" />
          </div>

          <div
            className={styles.logo__container}
            onClick={() => redirect(SIMONSCHUSTER_URL)}
          >
            <Image src={SimonSchusterBL} alt="simonschuster-logo" />
          </div>

          <div
            className={styles.logo__container}
            onClick={() => redirect(APPLEBOOKS_URL)}
          >
            <Image src={AppleBL} alt="applebooks-logo" />
          </div>
        </div>
      </section>

      <section className={styles.praise__section}>
        <p className={styles.title}>Praise</p>
        <div className={styles.quotes__container}>
          {quotes.map((quote, index) => {
            return (
              <Quote quote={quote.quote} source={quote.source} key={index} />
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default ArtOfAging;
