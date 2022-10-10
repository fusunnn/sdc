import React from "react";
import styles from "../styles/Home.module.css";

import { HoverDropDown } from "./HoverDropDown";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <p className={styles.title}>
        <a href="/">
          Margareta <br /> Magnusson
        </a>
      </p>
      <ul>
        <li>
          <HoverDropDown />
        </li>
        <li>
          <a>Press</a>
        </li>
        <li>
          <a>TV and Social Media</a>
        </li>
        <li>
          <a href="https://www.susannalea.com/contact/" target="_blank">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
