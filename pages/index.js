import React, { useState, useEffect } from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/page_pieces/Hero";
import TextBlock from "../components/TextBlock";
import Text from "../components/Text";
import TextLast from "../components/TextLast";
import { textOne, textTwo, textThree, textFour } from "../components/Texts";
import SecondScreen from "../components/page_pieces/SecondScreen";
import Parallax from "../components/resp-image/BackgroundImageParallax2";
import Video from "../components/Video";
import { getFluidImage } from "../components/resp-image/sharpFunctions";

// Images

export default function Index({
  parallaxOne,
  parallaxTwo,
  parallaxThree,
  parallaxFour,
  bgOne,
  bgTwo,
  bgThree,
  bgFour,
  videoCover,
  Test2,
  Test,
}) {
  const [isLandscape, setIsLandscape] = useState(false);
  const ori =
    typeof window !== `undefined` &&
    window.matchMedia("(orientation: landscape)");

  if (typeof window !== `undefined`) {
    ori.addListener((e) => {
      const darkModeOn = e.matches;
      setIsLandscape(darkModeOn);
    });
  }

  useEffect(() => {
    setIsLandscape(ori.matches);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <SEO />
      <Hero Test2={Test2} Test={Test} isLandscape={isLandscape} />
      <SecondScreen />
      <Video image={videoCover} />
      <Parallax image={parallaxOne} />
      <TextBlock
        image={bgOne}
        heading="Мнение Психолога"
        text={textOne}
        name="Ирина Лернер"
        img="/images/psychologist.jpg"
      />
      <Parallax image={parallaxTwo} />
      <Text text={textTwo} image={bgTwo} />
      <Parallax image={parallaxThree} />
      <Text text={textThree} image={bgThree} />
      <Parallax image={parallaxFour} />
      <TextLast text={textFour} image={bgFour} />
    </Layout>
  );
}

export async function getStaticProps() {
  const parallaxOne = await getFluidImage(
    "/public/images/parallax/ParallaxOne.jpg"
  );
  const parallaxTwo = await getFluidImage(
    "/public/images/parallax/ParallaxTwo.jpg"
  );
  const parallaxThree = await getFluidImage(
    "/public/images/parallax/ParallaxThree.jpg"
  );
  const parallaxFour = await getFluidImage(
    "/public/images/parallax/ParallaxFour.jpg"
  );
  const bgOne = await getFluidImage(
    "/public/images/backgrounds/TextBlockOne.jpg"
  );
  const bgTwo = await getFluidImage(
    "/public/images/backgrounds/TextBlockTwo.jpg"
  );
  const bgThree = await getFluidImage(
    "/public/images/backgrounds/TextBlockThree.jpg"
  );
  const bgFour = await getFluidImage(
    "/public/images/backgrounds/TextBlockFour.jpg"
  );
  const videoCover = await getFluidImage("/public/images/col.jpg");
  const Test = await getFluidImage("/public/images/hero/Hero-Landscape.jpg");
  const Test2 = await getFluidImage("/public/images/hero/Hero-Portrait.jpg");

  //   const data3 = getFluidImage getFluidImage(data.testing.getContent.heroImage.path);
  return {
    props: {
      parallaxOne,
      parallaxTwo,
      parallaxThree,
      parallaxFour,
      bgOne,
      bgTwo,
      bgThree,
      bgFour,
      videoCover,
      Test2,
      Test,
    },
  };
}
