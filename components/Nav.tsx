import React, { useState } from "react";
import Link from "next/link";

import styles from "../styles/components/Nav.module.css";
import dropdown__styles from "../styles/components/Dropdown.module.css";

import { DropDown } from "./DropDown";

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

export const Nav = () => {
  const [mobileMenuClassList, setMobileMenuClassList] = useState(
    `${styles.mobile__nav}`
  );

  const handleMobileMenuClick = () => {
    return mobileMenuClassList === `${styles.mobile__nav}`
      ? setMobileMenuClassList(
          `${styles.mobile__nav} ${styles.mobile__nav__active}`
        )
      : setMobileMenuClassList(`${styles.mobile__nav}`);
  };

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <p className={styles.title}>Margareta Magnusson</p>
      </Link>
      <FiMenu
        className={styles.hamburger}
        size={32}
        onClick={handleMobileMenuClick}
      />
      <div className={mobileMenuClassList}>
        <MdClose
          className={styles.mobile__menu__close__icon}
          size={32}
          onClick={handleMobileMenuClick}
        />
        <DropDown label="Books" width="14rem">
          <Link href="/books/swedish-death-cleaning">
            <div
              className={dropdown__styles.dropdown__element}
              style={{ color: "var(--accent)" }}
              onClick={handleMobileMenuClick}
            >
              The Gentle Art of Swedish Death Cleaning
            </div>
          </Link>
          <Link href="/books/art-of-aging">
            <div
              className={dropdown__styles.dropdown__element}
              style={{ color: "var(--aging-color)" }}
              onClick={handleMobileMenuClick}
            >
              The Swedish Art of Aging Exhuberantly
            </div>
          </Link>
        </DropDown>
        <Link href="/press">
          <p
            className={styles.mobile__menu__element}
            onClick={handleMobileMenuClick}
          >
            Press
          </p>
        </Link>
        <Link href="/tv-sm">
          <p
            className={styles.mobile__menu__element}
            onClick={handleMobileMenuClick}
          >
            TV & Social Media
          </p>
        </Link>
        <a
          href="https://www.susannalea.com/contact/"
          target="_blank"
          rel="noreferrer"
          className={styles.mobile__menu__element}
          onClick={handleMobileMenuClick}
        >
          Contact
        </a>
      </div>
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
            <p className={styles.nav__text__element}>Press</p>
          </li>
        </Link>
        <Link href="/tv-sm">
          <li>
            <p className={styles.nav__text__element}>TV & Social Media</p>
          </li>
        </Link>
        <li>
          <a
            href="https://www.susannalea.com/contact/"
            target="_blank"
            rel="noreferrer"
            className={styles.nav__text__element}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
