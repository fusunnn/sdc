import React from "react";

type Props = {
  src: string;
  title: string;
};

export const YoutubeVideo = ({ src, title }: Props) => {
  return (
    <iframe
      width="966"
      height="543"
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
