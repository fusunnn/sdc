import React from "react";
import BookPage from "../../components/BookPage";

import DeathCleaningCover from "../../public/assets/covers/sdc/3dcover.png";
import UK from "../../public/assets/covers/sdc/international/uk.jpg";

import AmazonBL from "../../public/assets/buy-logos/amazon-bl.png";
import BarnesNobleBL from "../../public/assets/buy-logos/barnesnoble-bl.png";
import BookshopBL from "../../public/assets/buy-logos/bookshop-bl.png";
import SimonSchusterBL from "../../public/assets/buy-logos/simonschuster-bl.png";
import AppleBL from "../../public/assets/buy-logos/apple-bl.svg";

import { fetchMetadata } from "../../firebase/utils/fetchMetadata";
import { db } from "../../firebase/firestore";
import { fetchMultipleImages } from "../../firebase/utils/fetchImage";
import { generateCoversList, generateUrls } from "../../utils/generate";
import Quote from "../../types/Quote";
import { ClickableImage } from "../../types/BuylinksObject";

export async function getStaticProps() {
  const pageMetadata = await fetchMetadata(db, "sdc");

  const bookTitle = pageMetadata!.title;
  const subtitles = pageMetadata!.subtitles;
  const bookDescription = pageMetadata!.book__description;
  const quotes = pageMetadata!.quotes;

  const internationalCoversEndpoints = pageMetadata!.international__covers;
  const fullUrls = generateUrls(
    internationalCoversEndpoints,
    "covers/sdc/international/"
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
            url: "https://www.amazon.com/Gentle-Art-Swedish-Death-Cleaning/dp/1501173243",
            imageSrc: AmazonBL,
          },
          barnesnobles: {
            url: "https://www.barnesandnoble.com/w/the-gentle-art-of-swedish-death-cleaning-margareta-magnusson/1126697434?ean=9781501173240",
            imageSrc: BarnesNobleBL,
          },
          bookshop: {
            url: "https://bookshop.org/books/the-gentle-art-of-swedish-death-cleaning-how-to-free-yourself-and-your-family-from-a-lifetime-of-clutter/9781501173240",
            imageSrc: BookshopBL,
          },
          simonschuster: {
            url: "https://www.simonandschuster.com/books/The-Gentle-Art-of-Swedish-Death-Cleaning/Margareta-Magnusson/9781501173240",
            imageSrc: SimonSchusterBL,
          },
          apple: {
            url: "https://books.apple.com/us/book/the-gentle-art-of-swedish-death-cleaning/id1273757668",
            imageSrc: AppleBL,
          },
        }}
        internationalCovers={props.internationalCovers}
        quotes={props.quotes}
        accentColor="var(--main)"
      />
    </>
  );
};

export default SwedishDeathCleaning;
