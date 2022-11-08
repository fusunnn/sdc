export const generateUrls = (
  internationalEndpoints: string[],
  base: string
): string[] => {
  var returnValue = [];
  for (var i in internationalEndpoints) {
    returnValue.push(base + internationalEndpoints[i]);
  }

  return returnValue;
};

export const generateUrlList = (urls: string[]) => {
  var returnValue: string[][] = [[]];
  for (let i = 0; i < urls.length; i++) {
    if (i >= 2) {
      let j = i + 1;
      if (j % 3 == 0) {
        returnValue.push([urls[i]]);
      } else {
        returnValue[Math.floor(j / 3)] = [
          ...returnValue[Math.floor(j / 3)],
          urls[i],
        ];
      }
    } else {
      returnValue[Math.floor(i / 3)] = [
        ...returnValue[Math.floor(i / 3)],
        urls[i],
      ];
    }
  }
  return returnValue;
};
