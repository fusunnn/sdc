import React, { useCallback } from "react";
import styles from "../styles/components/Carousel.module.css";

import useEmblaCarousel from "embla-carousel-react";

import { CgChevronRight, CgChevronLeft } from "react-icons/cg";

interface Props {
  children?: React.ReactNode;
}
export const Carousel = ({ children }: Props) => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={viewportRef}>
        <div className={styles.embla__container}>{children}</div>
      </div>
      <div className={styles.embla__prev} onClick={scrollPrev}>
        <CgChevronLeft size={40} />
      </div>
      <div className={styles.embla__next} onClick={scrollNext}>
        <CgChevronRight size={40} />
      </div>
    </div>
  );
};

export default Carousel;
