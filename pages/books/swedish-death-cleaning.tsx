import React, { useEffect, useState } from "react";
import BookPage from "../../components/BookPage";

import DeathCleaningCover from "../../public/assets/covers/sdc/3dcover.png";
import UK from "../../public/assets/covers/sdc/international/uk.jpg";

import AmazonBL from "../../public/assets/buy-logos/amazon-bl.png";
import BarnesNobleBL from "../../public/assets/buy-logos/barnesnoble-bl.png";
import BookshopBL from "../../public/assets/buy-logos/bookshop-bl.png";
import SimonSchusterBL from "../../public/assets/buy-logos/simonschuster-bl.png";
import AppleBL from "../../public/assets/buy-logos/apple-bl.svg";

import { Loading } from "../../components/Loading";

import { fetchMetadata } from "../../firebase/utils/fetchMetadata";
import { db } from "../../firebase/firestore";
import {
  fetchImage,
  fetchMultipleImages,
} from "../../firebase/utils/fetchImage";
import { generateUrlList, generateUrls } from "../../utils/generate";

const SwedishDeathCleaning = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [bookTitle, setBookTitle] = useState("");
  const [subtitles, setSubtitles] = useState([]);
  const [bookDescription, setBookDescription] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [internationalCoversUrls, setInternationalCoversUrls] = useState<
    string[][]
  >([[]]);

  useEffect(() => {
    fetchMetadata(db, "sdc")
      .then((doc) => {
        setBookTitle(doc!.title);
        setSubtitles(doc!.subtitles);
        setBookDescription(doc!.book__description);
        setQuotes(doc!.quotes);
        return doc!.international__covers;
      })
      .then((endpoints) => {
        const fullUrls = generateUrls(endpoints, "covers/sdc/international/");
        return fetchMultipleImages(fullUrls);
      })
      .then((images) => {
        const imageList = generateUrlList(images);
        setInternationalCoversUrls(imageList);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <BookPage
        pageTitle="The Gentle Art of Swedish Death Cleaning - Margareta Magnusson"
        mainCoverSrc={DeathCleaningCover}
        bookTitle={bookTitle}
        subTitles={subtitles}
        bookDescription={bookDescription}
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
        internationalCovers={internationalCoversUrls}
        ukInfo={{
          imageSrc: UK,
          url: "https://canongate.co.uk/books/3192-dostadning-the-gentle-art-of-swedish-death-cleaning/",
        }}
        quotes={quotes}
        accentColor="var(--main)"
      />
    </>
  );
};

export default SwedishDeathCleaning;
