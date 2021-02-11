import React from "react";

import BackgroundImage from "../../components/resp-image/BackgroundImage";
import { useMedia } from "react-use";

const Hero = ({ data }) => {
  const isLandscape = useMedia("(orientation: landscape)");
  return (
    <>
      <BackgroundImage
        className="min-h-screen"
        alt="Обложка"
        image={!isLandscape ? data.heroVertical : data.heroHorizontal}
      >
        <div className="relative flex flex-col items-center justify-between w-full h-full min-h-screen">
          <div
            className="absolute w-screen h-full min-h-screen bg-black"
            style={{ opacity: "0.4" }}
          />
          <div
            className="absolute bottom-0 w-screen h-48 pt-16"
            style={{ background: "linear-gradient( transparent, #212121)" }}
          />
          <div
            className="absolute top-0 w-screen h-48 pb-16"
            style={{ background: "linear-gradient(#000, transparent)" }}
          ></div>
          <div className="top-0 z-10 w-screen h-auto">
            <p className="py-6 text-4xl text-center bbb">{data.smi}</p>
            <div
              className="flex justify-around max-w-80"
              style={{ color: "#cf0" }}
            >
              {data.linksToPublications.map((item) => (
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
          </div>
          <div className="z-10 flex flex-col max-w-2xl px-4 text-white md:px-0 hero-main">
            <h1 className="invisible">Narcissus</h1>
            <img
              className="w-full h-auto select-none"
              src={data.narcissusLogo}
              alt="Narcissus"
            />

            <p className="text-xl text-white P font-base md:text-center">
              {data.heroText}
            </p>
          </div>
          <div className=""></div>
        </div>
      </BackgroundImage>
    </>
  );
};

export default Hero;
