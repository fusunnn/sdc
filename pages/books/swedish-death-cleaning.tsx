import React from "react";
import Image from "next/image";
import styles from "../../styles/books/DeathCleaning.module.css";

import { Nav } from "../../components/Nav";

import DeathCleaningCover from "../../public/assets/covers/death-cleaning.png";
import UKCover from "../../public/assets/covers/sdc-uk-cover.jpg";

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

const SwedishDeathCleaning = () => {
  const redirect = (url: string) => {
    window.open(url, "_blank");
    return;
  };

  const quotes: quote[] = [
    {
      quote:
        "A fond and wise little book....I jettison advice books after I’ve flipped through them. This oneI will keep.",
      source: "Dwight Garner,The New York Times",
    },
    {
      quote:
        "A slim yet sage volume. . . . While Marie Kondo gave us strict instructions to only keep things that spark joy, Magnusson’s book is straightforward and unsentimental (with a bit of humor). The main message from this mother of five is: Take responsibility for your items and don’t leave them as a burden for family and friends.",
      source: "The Washington Post",
    },
    {
      quote: "Witty, useful and oddly profound.",
      source: "Entertainment Weekly",
    },
    {
      quote:
        "Proustian. . . . A primer on how to winnow your belongings before you die, so you don’t burden your family. . . . Ms. Magnusson is the anti-Kondo, who takes us on a charming and discursive tour of her own stuff.",
      source: "Penelope Green, The New York Times",
    },
    {
      quote:
        "Magnusson shares solid guiding principles for organizing your home, no matter your age or life circumstance.",
      source: "Business Insider",
    },
    {
      quote:
        "One of the most charming, funny, and motivating books I've read in some time.... Magnusson is an absolute delight. This book is so much more than lifestyle tips. It's full of life. Magnusson's candid humor and unassailable spirit comes through on each page... The best way to prepare for death is to live a good life, which Magnusson has done. We're lucky that she shares so much of it — in stories of gratitude, family, work, and love.",
      source: "Buzzfeed",
    },
    {
      quote:
        "Magnusson uses a dry, unsentimental and sometimes dark Scandinavian sense of humor, and writes with an older set (and their younger relatives) in mind.... like a conversation over tea with a friend.",
      source: "Associated Press",
    },
    {
      quote:
        "'Death Cleaning' is the answer to clutter you've been looking for. . . . Magnusson instructs readers on how to gently and joyously put your affairs in order while you’re still alive, rather than leaving it for others to do.",
      source: "Reader's Digest",
    },
    {
      quote:
        "Smart… death cleaning isn't about getting rid of all your stuff, but rather streamlining your life so you're only holding onto what makes you happy . . . it's about so much more than dusting and sorting.",
      source: "Elle Décor",
    },
    {
      quote:
        "Reading her book is much like having a sensible, cheerful aunt sit you down to tell you hard truths that your mother is too nice to say.",
      source: "Laurie Hertzel, Minneapolis Star Tribune",
    },
    {
      quote:
        "Keep only what you love and what makes you happy in the moment. It’s like Marie Kondo, but with an added sense of the transience and futility of this mortal existence.",
      source: "The New York Post",
    },
    {
      quote:
        "The philosophy isn’t all austerity and estate planning. Margareta Magnusson advocates for giving away those possessions you and your family don’t want while you’re alive. Much like attending your own wake, passing things on (to those who actually want them) to friends and acquaintances while you are around to see it adds a layer of life to death cleaning.",
      source: "Apartment Therapy.com",
    },
    {
      quote:
        "Has benefits you can enjoy while you’re still very much alive. . . . could be a good way for families to discuss sensitive issues that might otherwise be hard to bring up.",
      source: "TIME",
    },
    {
      quote:
        "Pragmatic. . . . the idea in this system is that we should leave behind as little as possible, or at least, not the many thousands of items of junk that Americans often accumulate.",
      source: "W Magazine",
    },
    {
      quote:
        "Even millennials will enjoy this non-militant approach to decluttering.",
      source: "PEOPLE Magazine",
    },
    {
      quote:
        "A mindful way to sort through your belongings throughout your life, so that your loved ones aren’t burdened by a plethora of personal items after you die. . . . Magnusson advises that the earlier we start the process of ‘death cleaning’, the better, so we’re not overwhelmed with a lifetime of objects by the time we’re elderly people.",
      source: "Better Homes and Gardens",
    },
    {
      quote:
        "I far prefer the charming, empathetic technique of Margareta Magnusson, whose book is a game-changer. I highly recommend it for anyone wrestling with a lifetime of wonderful — and not so wonderful — stuff.",
      source: 'Amy Dickinson, "Ask Amy"',
    },
    {
      quote:
        "Packed with positive and practical suggestions, this slim volume could change your life.",
      source: "Juliet Stevenson, Actress & Narrator of the Audio Edition",
    },
    {
      quote:
        "A mindful way to sort through your belongings throughout your life.",
      source: "Better Homes and Gardens Australia",
    },
    {
      quote:
        "Lovers of Scandinavian culture who are already tired of hygge, Denmark’s cosy way of relaxing, can give the latest Scandi-trend a try with döstädning, or Swedish ‘death-cleaning’. Sweden's concept of 'death-cleaning' is spreading around the world.",
      source: "The Lonely Planet",
    },
    {
      quote:
        "Marie Kondo found worldwide fame with her book The Life-Changing Magic Of Tidying Up, which espoused the theory you should get rid of anything that doesn't spark joy. Now a forthcoming book theorises that rather than considering your own feelings about your belongings, you should ask yourself: “Will anyone I know be happier if I save this?",
      source: "The Daily Mail",
    },
    {
      quote:
        "You don't need to be elderly or middle aged to subscribe to [Magnusson’s] ethos.",
      source: "Huffington Post Australia",
    },
    {
      quote:
        "Margareta Magnusson’s death-cleaning is charming, wise and subtle.",
      source: "Barometern",
    },
    {
      quote: "Clean now – tomorrow you could be dead!",
      source: "Magasinet FILTER",
    },
  ];

  return (
    <div className={styles.container}>
      <Nav />
      <section className={styles.main__section}>
        <div className={styles.buylinks__container}>
          <div
            className={styles.logo__container}
            onClick={() =>
              redirect(
                "https://www.amazon.com/Gentle-Art-Swedish-Death-Cleaning/dp/1501173243"
              )
            }
          >
            <Image src={AmazonBL} alt="amazon-logo" />
          </div>

          <div
            className={styles.logo__container}
            onClick={() =>
              redirect(
                "https://www.barnesandnoble.com/w/the-gentle-art-of-swedish-death-cleaning-margareta-magnusson/1126697434?ean=9781501173240"
              )
            }
          >
            <Image src={BarnesNobleBL} alt="barnesnoble-logo" />
          </div>

          <div
            className={styles.logo__container}
            onClick={() =>
              redirect(
                "https://bookshop.org/books/the-gentle-art-of-swedish-death-cleaning-how-to-free-yourself-and-your-family-from-a-lifetime-of-clutter/9781501173240"
              )
            }
          >
            <Image src={BookshopBL} alt="bookshop-logo" />
          </div>

          <div
            className={styles.logo__container}
            onClick={() =>
              redirect(
                "https://www.simonandschuster.com/books/The-Gentle-Art-of-Swedish-Death-Cleaning/Margareta-Magnusson/9781501173240"
              )
            }
          >
            <Image src={SimonSchusterBL} alt="simonschuster-logo" />
          </div>

          <div
            className={styles.logo__container}
            onClick={() =>
              redirect(
                "https://books.apple.com/us/book/the-gentle-art-of-swedish-death-cleaning/id1273757668"
              )
            }
          >
            <Image src={AppleBL} alt="applebooks-logo" />
          </div>
        </div>

        <div className={styles.cover__container}>
          <Image
            src={DeathCleaningCover}
            placeholder="blur"
            alt="3d-cover-sdc"
          />
        </div>

        <div className={styles.uk__info__container}>
          <p className={styles.uk__info}>UK Edition From Canongate:</p>
          <div
            className={styles.uk__cover__container}
            onClick={() =>
              redirect(
                "https://canongate.co.uk/books/3192-dostadning-the-gentle-art-of-swedish-death-cleaning/"
              )
            }
          >
            <Image src={UKCover} alt="sdc-uk-cover" />
          </div>
        </div>
      </section>
      <section className={styles.praise__section}>
        <p className={styles.praise__title}>Praise</p>
        <div className={styles.quotes__container}>
          {quotes.map((quote) => {
            return <Quote quote={quote.quote} source={quote.source} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default SwedishDeathCleaning;
