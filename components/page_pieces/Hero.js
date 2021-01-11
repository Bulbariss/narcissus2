import React from "react";

import BackgroundImage from "../../components/resp-image/BackgroundImage";

const Hero = ({ isLandscape, Test2, Test }) => {
  return (
    <>
      <BackgroundImage
        // className="flex flex-col items-center justify-between min-h-screen"
        // loading="eager"
        // Tag="section"
        alt="Обложка"
        image={isLandscape ? Test2 : Test}
      >
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
          <p className="py-6 text-4xl text-center bbb">СМИ О ПРОЕКТЕ</p>
          <div
            className="flex justify-around max-w-80"
            style={{ color: "#cf0" }}
          >
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.vogue.ru/lifestyle/nasilie-eto-ne-pro-lyubov-chto-posmotret-i-prochest-ob-abyuze"
            >
              VOGUE
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://srsly.ru/article/show/4481/"
            >
              SRSLY
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://flacon-magazine.com/rubric/people/sabrina-bagirova-diskomfort-cast-moej-zizni"
            >
              FLACON
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.buro247.ru/culture/music/30-sep-2020-sabrina-interview.html"
            >
              BURO24/7
            </a>
          </div>
        </div>
        <div className="z-10 flex flex-col max-w-2xl px-4 text-white md:px-0 hero-main">
          <h1 className="invisible">Narcissus</h1>
          <img
            src="/images/2.png"
            alt="Narcissus"
            rel="preload"
            className="w-full h-auto select-none"
          />
          <p className="text-xl text-white P font-base md:text-center">
            Арт-проект, в котором Koshka Neon вместе с певицей Сабриной и
            певицей Mirele поднимают проблему абьюзивных отношений.
          </p>
        </div>
        <div className=""></div>
      </BackgroundImage>
    </>
  );
};

export default Hero;
