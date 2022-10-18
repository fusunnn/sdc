import React from "react";
import Link from "next/link";
import styles from "../styles/components/Dropdown.module.css";

import { CgChevronDown } from "react-icons/cg";

interface Props {
  label: string;
  labelHref?: string;
  children?: React.ReactNode;
}

export const DropDown = ({ label, children, labelHref }: Props) => {
  return (
    <div className={styles.dropdown__container}>
      {labelHref ? (
        <Link href={labelHref}>
          <div className={styles.dropdown__button__clickable}>
            {label} <CgChevronDown />
          </div>
        </Link>
      ) : (
        <div className={styles.dropdown__button}>
          {label} <CgChevronDown />
        </div>
      )}

      <div className={styles.dropdown__content}>{children}</div>
    </div>
  );
};
