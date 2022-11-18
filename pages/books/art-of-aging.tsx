import React from "react";
import BookPage from "../../components/BookPage";

import DeathCleaningCover from "../../public/assets/covers/art-aging/3dcover.png";
import UK from "../../public/assets/covers/art-aging/international/uk.jpg";

import AmazonBL from "../../public/assets/buy-logos/amazon-bl.png";
import BarnesNobleBL from "../../public/assets/buy-logos/barnesnoble-bl.png";
import BookshopBL from "../../public/assets/buy-logos/bookshop-bl.png";
import SimonSchusterBL from "../../public/assets/buy-logos/simonschuster-bl.png";
import AppleBL from "../../public/assets/buy-logos/apple-bl.svg";

import { generateUrls, generateCoversList } from "../../utils/generate";
import { fetchMetadata } from "../../firebase/utils/fetchMetadata";
import { db } from "../../firebase/firestore";
import { fetchMultipleImages } from "../../firebase/utils/fetchImage";
import Quote from "../../types/Quote";
import { ClickableImage } from "../../types/BuylinksObject";

export async function getStaticProps() {
  const pageMetadata = await fetchMetadata(db, "art-aging");

  const bookTitle = pageMetadata!.title;
  const subtitles = pageMetadata!.subtitles;
  const bookDescription = pageMetadata!.book__description;
  const quotes = pageMetadata!.quotes;

  const internationalCoversEndpoints = pageMetadata!.international__covers;
  const fullUrls = generateUrls(
    internationalCoversEndpoints,
    "covers/art-aging/international/"
  );
  const images = await fetchMultipleImages(fullUrls);
  const internationalCovers = generateCoversList(images);

  return {
    props: {
      bookTitle,
      subtitles,
      bookDescription,
      quotes,
      internationalCovers,
    },
  };
}

type Props = {
  bookTitle: string;
  subtitles: string[];
  bookDescription: string;
  quotes: Quote[];
  internationalCovers: ClickableImage[][];
};
const SwedishDeathCleaning = (props: Props) => {
  return (
    <>
      <BookPage
        pageTitle="The Gentle Art of Swedish Death Cleaning - Margareta Magnusson"
        mainCoverSrc={DeathCleaningCover}
        bookTitle={props.bookTitle}
        subTitles={props.subtitles}
        bookDescription={props.bookDescription}
        buylinks={{
          amazon: {
            url: "https://www.amazon.com/Swedish-Art-Aging-Well-Probably/dp/1982196629",
            imageSrc: AmazonBL,
          },
          barnesnobles: {
            url: "https://www.barnesandnoble.com/w/the-swedish-art-of-aging-exuberantly-margareta-magnusson/1141621812",
            imageSrc: BarnesNobleBL,
          },
          bookshop: {
            url: "https://bookshop.org/books/the-swedish-art-of-aging-exuberantly-life-wisdom-from-someone-who-will-probably-die-before-you/9781982196622",
            imageSrc: BookshopBL,
          },
          simonschuster: {
            url: "https://www.simonandschuster.com/books/The-Swedish-Art-of-Aging-Exuberantly/Margareta-Magnusson/The-Swedish-Art-of-Living-Dying-Series/9781982196622",
            imageSrc: SimonSchusterBL,
          },
          apple: {
            url: "https://books.apple.com/us/book/the-swedish-art-of-aging-exuberantly/id1590874798",
            imageSrc: AppleBL,
          },
        }}
        internationalCovers={props.internationalCovers}
        quotes={props.quotes}
        accentColor="var(--aging-color)"
      />
    </>
  );
};

export default SwedishDeathCleaning;
