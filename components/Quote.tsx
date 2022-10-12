import React from "react";
import styles from "../styles/components/Quote.module.css";

interface Props {
  quote: string;
  source: string;
}

export const Quote = (props: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.quote}>"{props.quote}"</p>
      <p className={styles.source}>{"- " + props.source}</p>
    </div>
  );
};
