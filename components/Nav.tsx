import React from "react";
import Link from "next/link";

import styles from "../styles/Nav.module.css";

import { DropDown } from "./DropDown";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <p className={styles.title}>
          Margareta <br /> Magnusson
        </p>
      </Link>
      <ul>
        <li>
          <DropDown />
        </li>
        <li>
          <a>Press</a>
        </li>
        <li>
          <a>TV and Social Media</a>
        </li>
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
