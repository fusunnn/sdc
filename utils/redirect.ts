export const redirect = (url: string, newTab?: boolean) => {
  if (newTab) {
    return window.open(url, "_blank");
  }

  return window.open(url);
};
