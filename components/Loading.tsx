import React, { CSSProperties } from "react";
import styles from "../styles/components/Loading.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export const Loading = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon
        icon={faCircleNotch}
        spin
        color="var(--main)"
        size="2x"
      />
    </div>
  );
};
