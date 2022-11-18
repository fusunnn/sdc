import React from "react";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";

import styles from "../styles/books/BookPage.module.css";
import BuylinksObject, { ClickableImage } from "../types/BuylinksObject";

import carousel__styles from "../styles/components/Carousel.module.css";
import Carousel from "./Carousel";

import { Quote } from "../components/Quote";
import QuoteType from "../types/Quote";

import { redirect } from "../utils/redirect";

type Props = {
  pageTitle: string;
  mainCoverSrc: StaticImageData;
  bookTitle: string;
  subTitles: string[];
  bookDescription: string;
  buylinks: BuylinksObject;
  internationalCovers: ClickableImage[][];
  quotes: QuoteType[];
  accentColor: string;
};

const BookPage = ({
  pageTitle,
  mainCoverSrc,
  bookTitle,
  subTitles,
  bookDescription,
  buylinks,
  internationalCovers,
  quotes,
  accentColor,
}: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <section className={styles.main__section}>
        <div className={styles.cover__and__info__container}>
          <div className={styles.cover__container} data-aos="fade-right">
            <Image src={mainCoverSrc} alt="3d-cover-sdc" placeholder="blur" />
          </div>
          <div className={styles.book__info__container}>
            <p className={styles.book__title} style={{ color: accentColor }}>
              {bookTitle}
            </p>
            <p className={styles.subtitle}>
              {subTitles.map((sub, i) => {
                return (
                  <span key={i}>
                    {sub}
                    <br />
                  </span>
                );
              })}
            </p>
            <p className={styles.description}>{bookDescription}</p>
          </div>
        </div>
        <div className={styles.buylinks__container}>
          <div
            className={styles.logo__container}
            onClick={() => redirect(buylinks.amazon.url)}
          >
            <Image src={buylinks.amazon.imageSrc} alt="amazon-logo" />
          </div>
          <div
            className={styles.logo__container}
            onClick={() => redirect(buylinks.barnesnobles.url)}
          >
            <Image
              src={buylinks.barnesnobles.imageSrc}
              alt="barnesnoble-logo"
            />
          </div>
          <div
            className={styles.logo__container}
            onClick={() => redirect(buylinks.bookshop.url)}
          >
            <Image src={buylinks.bookshop.imageSrc} alt="bookshop-logo" />
          </div>
          <div className={styles.buylinks__last__row}>
            <div
              className={styles.logo__container}
              onClick={() => redirect(buylinks.simonschuster.url)}
            >
              <Image
                src={buylinks.simonschuster.imageSrc}
                alt="simonschuster-logo"
              />
            </div>
            <div
              className={styles.logo__container__apple}
              onClick={() => redirect(buylinks.apple.url)}
            >
              <Image src={buylinks.apple.imageSrc} alt="applebooks-logo" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.international__covers__section}>
        <p className={styles.title}>International Covers</p>
        <div className={styles.title__underline} />

        <Carousel>
          {internationalCovers.map((arr, i) => {
            return (
              <div className={carousel__styles.embla__slide} key={i}>
                <div className={styles.slide__container}>
                  {arr.map((coverObject: ClickableImage, j) => {
                    return (
                      <div
                        className={styles.international__cover__container}
                        key={j}
                      >
                        {coverObject.url.length > 0 && (
                          <p className={styles.uk__info}>
                            UK Edition From Canongate:
                          </p>
                        )}
                        <div
                          className={styles.international__cover__container}
                          onClick={() => {
                            if (coverObject.url.length > 0) {
                              redirect(coverObject.url);
                            }
                          }}
                          style={{
                            cursor:
                              coverObject.url.length > 0
                                ? "pointer"
                                : "default",
                          }}
                        >
                          <Image
                            src={coverObject.imageSrc}
                            alt="sdc-uk-cover"
                            width={350}
                            height={500}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Carousel>
      </section>
      <section className={styles.praise__section}>
        <p className={styles.title}>Praise</p>
        <div className={styles.quotes__container}>
          {quotes.map((quote, i) => {
            return <Quote quote={quote.quote} source={quote.source} key={i} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default BookPage;
