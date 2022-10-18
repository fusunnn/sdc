import React from "react";
import Link from "next/link";

import styles from "../styles/components/Nav.module.css";
import dropdown__styles from "../styles/components/Dropdown.module.css";

import { DropDown } from "./DropDown";

export const Nav = () => {
  const redirect = (url: string) => {
    window.open(url, "_blank");
    return;
  };
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <p className={styles.title}>Margareta Magnusson</p>
      </Link>
      <ul>
        <li>
          <DropDown label="Books">
            <Link href="/books/swedish-death-cleaning">
              <div
                className={dropdown__styles.dropdown__element}
                style={{ color: "var(--accent)" }}
              >
                The Gentle Art of Swedish Death Cleaning
              </div>
            </Link>
            <Link href="/books/art-of-aging">
              <div
                className={dropdown__styles.dropdown__element}
                style={{ color: "var(--aging-color)" }}
              >
                The Swedish Art of Aging Exhuberantly
              </div>
            </Link>
          </DropDown>
        </li>
        <Link href="/press">
          <li>
            <a>Press</a>
          </li>
        </Link>
        <Link href="/tv-sm">
          <li>
            <DropDown label="TV & Social Media" labelHref="/tv-sm">
              <div
                className={dropdown__styles.dropdown__element}
                onClick={() =>
                  redirect("https://www.instagram.com/swedishdeathcleaning/")
                }
              >
                Instagram
              </div>
              <div
                className={dropdown__styles.dropdown__element}
                onClick={() =>
                  redirect("https://www.facebook.com/deathcleaning/")
                }
              >
                Facebook
              </div>
              <div
                className={dropdown__styles.dropdown__element}
                onClick={() =>
                  redirect(
                    "https://www.goodreads.com/author/show/16917867.Margareta_Magnusson"
                  )
                }
              >
                Goodreads
              </div>
            </DropDown>
          </li>
        </Link>
        <li>
          <a
            href="https://www.susannalea.com/contact/"
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
