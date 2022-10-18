import React from "react";
import Link from "next/link";
import styles from "../styles/components/Dropdown.module.css";

import { CgChevronDown } from "react-icons/cg";

interface Props {
  label: string;
  children?: React.ReactNode;
  width?: string;
}

export const DropDown = ({ children, label, width }: Props) => {
  return (
    <div className={styles.dropdown__container}>
      <div className={styles.dropdown__button}>
        {label} <CgChevronDown />
      </div>

      <div
        className={styles.dropdown__content}
        style={{ width: width ? width : "20rem" }}
      >
        {children}
      </div>
    </div>
  );
};
