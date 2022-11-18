import { InternationalCover } from "../types/InternationalCover";

export const generateUrls = (
  internationalEndpoints: InternationalCover[],
  base: string
): InternationalCover[] => {
  var returnValue = [];
  for (var i in internationalEndpoints) {
    returnValue.push({
      imageSrc: base + internationalEndpoints[i].imageSrc,
      url: internationalEndpoints[i].url,
    });
  }

  return returnValue;
};

export const generateCoversList = (covers: InternationalCover[]) => {
  var returnValue: InternationalCover[][] = [];

  for (let i = 0; i < covers.length; i++) {
    if (i % 3 == 0) {
      returnValue[returnValue.length] = [covers[i]];
    } else {
      returnValue[returnValue.length - 1].push(covers[i]);
    }
  }

  return returnValue;
};
