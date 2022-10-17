import React from "react";
import styles from "../styles/components/Quote.module.css";

interface Props {
  quote: string;
  source: string;
}

export const Quote = (props: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.quote}>
        &lsquo;{props.quote}&rsquo; <br />
        <span className={styles.source}>{"- " + props.source}</span>
      </p>
    </div>
  );
};
