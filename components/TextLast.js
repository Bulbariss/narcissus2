import React from "react";
import BackgroundImage from "../components/resp-image/BackgroundImage";

const TextLast = ({ data, image }) => {
  return (
    <BackgroundImage
      className="flex flex-col justify-center w-full pt-16 pb-6 bg-cover"
      image={image}
    >
      <p className="relative max-w-full px-4 m-0 mx-auto text-lg text-justify text-white whitespace-pre-wrap md:px-0 P max-w-text">
        {data.phycologyTextFour}
      </p>
      <div className="relative top-0 z-10 flex flex-col w-screen h-auto pt-20">
        <div
          className="flex justify-around w-full max-w-80"
          style={{ color: "#cf0" }}
        >
          <p>{data.copyright}</p>
          {data.socials.map((item) => (
            <a
              key={item.title}
              rel="noreferrer"
              target="_blank"
              href={item.link}
            >
              {item.title}
            </a>
          ))}
        </div>
        <a
          rel="noreferrer"
          target="_blank"
          href={data.koshkaNeon.link}
          className="pt-6 text-4xl text-center bbb"
        >
          {data.koshkaNeon.title}
        </a>
      </div>
    </BackgroundImage>
  );
};

export default TextLast;
