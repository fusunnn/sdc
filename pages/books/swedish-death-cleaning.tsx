import React from "react";
import Image from "next/image";
import Head from "next/head";

import styles from "../../styles/books/BookPage.module.css";

import DeathCleaningCover from "../../public/assets/covers/sdc/3dcover.png";
import UK from "../../public/assets/covers/sdc/international/uk.jpg";
import Aus from "../../public/assets/covers/sdc/international/aus.png";
import Catalan from "../../public/assets/covers/sdc/international/catalan.png";
import Chinese from "../../public/assets/covers/sdc/international/chinese.png";
import Dutch from "../../public/assets/covers/sdc/international/dutch.png";
import French from "../../public/assets/covers/sdc/international/french.jpg";
import German from "../../public/assets/covers/sdc/international/german.png";
import Hindi from "../../public/assets/covers/sdc/international/hindi.png";
import Hungarian from "../../public/assets/covers/sdc/international/hungarian.png";
import Japanese from "../../public/assets/covers/sdc/international/japanese.png";
import NZ from "../../public/assets/covers/sdc/international/nz.png";
import Polish from "../../public/assets/covers/sdc/international/polish.png";
import Portuguese from "../../public/assets/covers/sdc/international/portuguese.png";
import Russian from "../../public/assets/covers/sdc/international/russian.png";
import Spanish from "../../public/assets/covers/sdc/international/spanish.png";

import AmazonBL from "../../public/assets/buy-logos/amazon-bl.png";
import BarnesNobleBL from "../../public/assets/buy-logos/barnesnoble-bl.png";
import BookshopBL from "../../public/assets/buy-logos/bookshop-bl.png";
import SimonSchusterBL from "../../public/assets/buy-logos/simonschuster-bl.png";
import AppleBL from "../../public/assets/buy-logos/apple-bl.svg";

import { Quote } from "../../components/Quote";
import { quotes } from "../../public/assets/quotes/sdc-quotes";

import carousel__styles from "../../styles/components/Carousel.module.css";
import Carousel from "../../components/Carousel";

const SwedishDeathCleaning = () => {
  const redirect = (url: string) => {
    window.open(url, "_blank");
    return;
  };

  const AMAZON_URL =
    "https://www.amazon.com/Gentle-Art-Swedish-Death-Cleaning/dp/1501173243";
  const BARNESNOBLE_URL =
    "https://www.barnesandnoble.com/w/the-gentle-art-of-swedish-death-cleaning-margareta-magnusson/1126697434?ean=9781501173240";
  const BOOKSHOP_URL =
    "https://bookshop.org/books/the-gentle-art-of-swedish-death-cleaning-how-to-free-yourself-and-your-family-from-a-lifetime-of-clutter/9781501173240";
  const SIMONSCHUSTER_URL =
    "https://www.simonandschuster.com/books/The-Gentle-Art-of-Swedish-Death-Cleaning/Margareta-Magnusson/9781501173240";
  const APPLEBOOKS_URL =
    "https://books.apple.com/us/book/the-gentle-art-of-swedish-death-cleaning/id1273757668";

  const CANONGATE_URL =
    "https://canongate.co.uk/books/3192-dostadning-the-gentle-art-of-swedish-death-cleaning/";

  return (
    <div className={styles.container}>
      <Head>
        <title>
          The Gentle Art of Swedish Death Cleaning - Margareta Magnusson
        </title>
      </Head>
      <section className={styles.main__section}>
        <div className={styles.cover__container}>
          <Image
            src={DeathCleaningCover}
            placeholder="blur"
            alt="3d-cover-sdc"
          />
        </div>
        <div className={styles.book__info__container}>
          <p className={styles.book__title__sdc}>
            The Gentle Art of Swedish Death Cleaning
          </p>
          <p className={styles.subtitle}>
            A New York Times Bestseller <br />
            Published in 30 Territories
            <br />
            Soon to be a major 8 - episode series on Peacock produced by Scout
            Productions (Queer Eye) and Amy Poehler’s Paper Kite Productions
            (Making It, Russian Doll)
          </p>
          <p className={styles.description}>
            In Sweden there is a kind of decluttering called döstädning, dö
            meaning “death” and städning meaning “cleaning.” This surprising and
            invigorating process of clearing out unnecessary belongings can be
            undertaken at any age or life stage but should be done sooner than
            later, before others have to do it for you. In The Gentle Art of
            Swedish Death Cleaning, artist Margareta Magnusson, with
            Scandinavian humor and wisdom, instructs readers to embrace
            minimalism. Her radical and joyous method for putting things in
            order helps families broach sensitive conversations, and makes the
            process uplifting rather than overwhelming. Margareta suggests which
            possessions you can easily get rid of (unworn clothes, unwanted
            presents, more plates than you’d ever use) and which you might want
            to keep (photographs, love letters, a few of your children’s art
            projects). Digging into her late husband’s tool shed, and her own
            secret drawer of vices, Margareta introduces an element of fun to a
            potentially daunting task. Along the way readers get a glimpse into
            her life in Sweden, and also become more comfortable with the idea
            of letting go.
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
      <section className={styles.international__covers__section}>
        <p className={styles.title}>International Covers</p>
        <div className={styles.title__underline} />
        <Carousel>
          <div className={carousel__styles.embla__slide}>
            <div className={styles.slide__container}>
              <div className={styles.international__cover__container}>
                <Image src={Aus} alt="sdc-aus-cover" />
              </div>

              <div className={styles.uk__container}>
                <p className={styles.uk__info}>UK Edition From Canongate:</p>
                <div
                  className={styles.uk__cover__container}
                  onClick={() => redirect(CANONGATE_URL)}
                >
                  <Image src={UK} alt="sdc-uk-cover" />
                </div>
              </div>

              <div className={styles.international__cover__container}>
                <Image src={Catalan} alt="sdc-catalan-cover" />
              </div>
            </div>
          </div>
          <div className={carousel__styles.embla__slide}>
            <div className={styles.slide__container}>
              <div className={styles.international__cover__container}>
                <Image src={Chinese} alt="sdc-chinese-cover" />
              </div>
              <div className={styles.international__cover__container}>
                <Image src={French} alt="sdc-french-cover" />
              </div>
              <div className={styles.international__cover__container}>
                <Image src={Dutch} alt="sdc-dutch-cover" />
              </div>
            </div>
          </div>
          <div className={carousel__styles.embla__slide}>
            <div className={styles.slide__container}>
              <div className={styles.international__cover__container}>
                <Image src={German} alt="sdc-german-cover" />
              </div>

              <div className={styles.international__cover__container}>
                <Image src={Hindi} alt="sdc-hindi-cover" />
              </div>

              <div className={styles.international__cover__container}>
                <Image src={Hungarian} alt="sdc-hungarian-cover" />
              </div>
            </div>
          </div>
          <div className={carousel__styles.embla__slide}>
            <div className={styles.slide__container}>
              <div className={styles.international__cover__container}>
                <Image src={Japanese} alt="sdc-japanese-cover" />
              </div>

              <div className={styles.international__cover__container}>
                <Image src={NZ} alt="sdc-nz-cover" />
              </div>

              <div className={styles.international__cover__container}>
                <Image src={Polish} alt="sdc-polish-cover" />
              </div>
            </div>
          </div>
          <div className={carousel__styles.embla__slide}>
            <div className={styles.slide__container}>
              <div className={styles.international__cover__container}>
                <Image src={Portuguese} alt="sdc-portuguese-cover" />
              </div>

              <div className={styles.international__cover__container}>
                <Image src={Russian} alt="sdc-russian-cover" />
              </div>

              <div className={styles.international__cover__container}>
                <Image src={Spanish} alt="sdc-spanish-cover" />
              </div>
            </div>
          </div>
        </Carousel>
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

export default SwedishDeathCleaning;
