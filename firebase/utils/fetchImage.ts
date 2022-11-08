import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../storage";

export async function fetchImage(refPath: string) {
  return getDownloadURL(ref(storage, refPath));
}

export async function fetchMultipleImages(urls: string[]) {
  let images: string[] = [];
  for (var i in urls) {
    let newImage = await fetchImage(urls[i]).then((res) => {
      images.push(res);
    });
  }
  return images;
}
