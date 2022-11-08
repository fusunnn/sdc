import { StaticImageData } from "next/image";

export type Buylink = {
  url: string;
  imageSrc: StaticImageData;
};

type BuylinksObject = {
  amazon: Buylink;
  barnesnobles: Buylink;
  bookshop: Buylink;
  simonschuster: Buylink;
  apple: Buylink;
};

export default BuylinksObject;
