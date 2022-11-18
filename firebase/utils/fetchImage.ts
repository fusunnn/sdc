import { ref, getDownloadURL } from "firebase/storage";
import { ClickableImage } from "../../types/BuylinksObject";
import { InternationalCover } from "../../types/InternationalCover";
import { storage } from "../storage";

export async function fetchImage(refPath: string) {
  return getDownloadURL(ref(storage, refPath));
}

export async function fetchMultipleImages(urls: InternationalCover[]) {
  let images: InternationalCover[] = [];
  for (var i in urls) {
    const newImage = await fetchImage(urls[i].imageSrc).then((res) => {
      images.push({
        imageSrc: res,
        url: urls[i].url,
      });
    });
  }

  return images;
}
