import React from "react";
import BackgroundImage from "../components/resp-image/BackgroundImage";

const TextBlock = ({ text, image }) => {
  return (
    <BackgroundImage
      // className="w-full px-4 py-16 bg-cover md:px-0"
      // Tag="section"
      // alt="Обложка"
      image={image}
      // fadeIn="soft"
      // durationFadeIn={300}
    >
      <p className="max-w-full m-0 mx-auto text-lg text-justify whitespace-pre-wrap P max-w-text">
        {text}
      </p>
    </BackgroundImage>
  );
};

export default TextBlock;
