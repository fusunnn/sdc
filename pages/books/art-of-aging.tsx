import React from "react";
import Image from "next/image";

import styles from "../../styles/books/BookPage.module.css";

import ArtOfAgingCover from "../../public/assets/covers/art-of-aging.png";
import UKCover from "../../public/assets/covers/art-aging-uk-cover.jpg";

import AmazonBL from "../../public/assets/buy-logos/amazon-bl.png";
import BarnesNobleBL from "../../public/assets/buy-logos/barnesnoble-bl.png";
import BookshopBL from "../../public/assets/buy-logos/bookshop-bl.png";
import SimonSchusterBL from "../../public/assets/buy-logos/simonschuster-bl.png";
import AppleBL from "../../public/assets/buy-logos/apple-bl.svg";

import { Quote } from "../../components/Quote";

interface quote {
  quote: string;
  source: string;
}

const ArtOfAging = () => {
  const redirect = (url: string) => {
    window.open(url, "_blank");
    return;
  };

  const quotes: quote[] = [
    {
      quote:
        "A warm, accessible guide to ageing with grace and art (and chocolate). I loved it.",
      source:
        "Matt Haig, Author of the International Best Seller 'Reasons to Stay Alive'",
    },
    {
      quote:
        "A thought - provoking guide for how to take life in with clear - eyed humor — whatever age we are. Definitely read this funny, very wise book before you die. Afterward, its availability may be severely limited",
      source:
        "Daniel Klein, Bestselling Author of 'Travels with Epicurus: A Journey to a Greek Island in Search of a Fulfilled Life'",
    },
    {
      quote:
        "A thought-provoking guide for how to take life in with clear-eyed humor—whatever age we are. Definitely read this funny, very wise book before you die. Afterward, its availability may be severely limited.",
      source:
        "Daniel Klein, bestselling author of Travels with Epicurus: A Journey to a Greek Island in Search of a Fulfilled Life",
    },
    {
      quote:
        "Here is an 86-year old who refuses to slow down just because she must now use a walker.",
      source: "Jönköpings-Posten (Sweden)",
    },
    { quote: "This Spring’s most hopeful book!", source: "M-Magasin (Sweden)" },
    {
      quote:
        "She delivers insight, wisdom and good advice with humor, edge and warmth.",
      source: "Amelia (Sweden)",
    },
    {
      quote:
        "More than anything, Magnusson’s new book is about cherishing your relationships and allowing yourself pleasure – until your last breath. A philosophy as good as any, and she writes in high spirits and with playfulness, which resolutely removes any danger of her coming across as prudent … Margareta Magnusson is someone who goes against the grain. And loves doing it. I find this comforting and inspiring, anticipating my own presumed old age.",
      source: "Helsingborgs Dagblad (Sweden)",
    },
  ];

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
      <section className={styles.main__section}>
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

        <div className={styles.cover__container}>
          <Image
            src={ArtOfAgingCover}
            placeholder="blur"
            alt="3d-cover-aging"
          />
        </div>
        <div className={styles.uk__info__container}>
          <p className={styles.uk__info}>UK Edition From Canongate:</p>
          <div
            className={styles.uk__cover__container}
            onClick={() => redirect(CANONGATE_URL)}
          >
            <Image src={UKCover} alt="sdc-uk-cover" />
          </div>
        </div>
      </section>
      <section className={styles.praise__section}>
        <p className={styles.praise__title}>Praise</p>
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
