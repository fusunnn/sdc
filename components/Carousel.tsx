import React, { useCallback, useState, useEffect } from "react";
import styles from "../styles/components/Carousel.module.css";

import useEmblaCarousel from "embla-carousel-react";

import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

interface Props {
  children?: React.ReactNode;
}
export const Carousel = ({ children }: Props) => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
    onSelect();
  }, [embla, onSelect]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={viewportRef}>
        <div className={styles.embla__container}>{children}</div>
      </div>
      <div className={styles.embla__prev} onClick={scrollPrev}>
        <ChevronLeftRoundedIcon
          fontSize="inherit"
          sx={{
            color: "var(--accent)",
            opacity: prevBtnEnabled ? 1 : 0.3,
            cursor: prevBtnEnabled ? "pointer" : "default",
          }}
        />
      </div>
      <div className={styles.embla__next} onClick={scrollNext}>
        <ChevronRightRoundedIcon
          fontSize="inherit"
          sx={{
            color: "var(--accent)",
            opacity: nextBtnEnabled ? 1 : 0.3,
            cursor: nextBtnEnabled ? "pointer" : "default",
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;
