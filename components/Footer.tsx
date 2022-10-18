import React from "react";
import styles from "../styles/components/Footer.module.css";

import Link from "next/link";

export const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__links__container}>
        <div className={styles.link__container}>
          <p className={styles.link__title}>Books</p>
          <Link href="/books/swedish-death-cleaning" className={styles.link}>
            <div className={styles.link}>
              <p className={styles.link__element}>
                The Gentle Art of Swedish Death Cleaning
              </p>
            </div>
          </Link>
          <Link href="/books/art-of-aging" className={styles.link}>
            <div className={styles.link}>
              <p className={styles.link__element}>
                The Swedish Art of Aging Exuberantly
              </p>
            </div>
          </Link>
        </div>
        <div className={styles.link__container}>
          <Link href="/press" className={styles.link}>
            <div className={styles.link}>
              <p className={styles.link__title}>Press</p>
            </div>
          </Link>
        </div>
        <div className={styles.link__container}>
          <Link href="/tv-sm">
            <div className={styles.link}>
              <p className={styles.link__title}>TV & Social Media</p>
            </div>
          </Link>
          <p className={styles.link__element}>
            <a
              className={styles.link}
              href="https://www.instagram.com/swedishdeathcleaning/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram{" "}
            </a>
          </p>
          <p className={styles.link__element}>
            <a
              className={styles.link}
              href="https://www.facebook.com/deathcleaning/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </p>
        </div>
        <div className={styles.link__container}>
          <p className={styles.link__title}>Contact</p>
          <p className={styles.link__element}>
            <a
              className={styles.link}
              href="https://www.susannalea.com/contact/"
              target="_blank"
              rel="noreferrer"
            >
              Susanna Lea Associates
            </a>
          </p>
        </div>
      </div>
      <p className={styles.mm__copyright}>© 2022 Margareta Magnusson</p>
    </div>
  );
};
