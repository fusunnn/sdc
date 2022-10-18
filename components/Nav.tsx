import React from "react";
import Link from "next/link";

import styles from "../styles/components/Nav.module.css";

import { DropDown } from "./DropDown";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <p className={styles.title}>Margareta Magnusson</p>
      </Link>
      <ul>
        <li>
          <DropDown />
        </li>
        <Link href="/press">
          <li>
            <a>Press</a>
          </li>
        </Link>
        <Link href="/tv-sm">
          <li>
            <a>TV & Social Media</a>
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
