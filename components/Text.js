import React from "react";
import BackgroundImage from "../components/resp-image/BackgroundImage";

const TextBlock = ({ content, image }) => {
  var re = /абьюз/gi;

  var newstr = content.replace(re, "апельсины");
  return (
    <BackgroundImage
      className="w-full px-4 py-16 bg-cover md:px-0"
      // Tag="section"
      // alt="Обложка"
      image={image}
      // fadeIn="soft"
      // durationFadeIn={300}
    >
      <div
        className="max-w-3xl mx-auto leading-7 prose prose-lg text-justify text-white"
        dangerouslySetInnerHTML={{ __html: newstr }}
      />
    </BackgroundImage>
  );
};

export default TextBlock;
