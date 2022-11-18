import { StaticImageData } from "next/image";

export type ClickableImage = {
  url: string;
  imageSrc: StaticImageData;
};

type BuylinksObject = {
  amazon: ClickableImage;
  barnesnobles: ClickableImage;
  bookshop: ClickableImage;
  simonschuster: ClickableImage;
  apple: ClickableImage;
};

export default BuylinksObject;
