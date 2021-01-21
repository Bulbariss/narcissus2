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
      <Parallax image="/images/parallax/ParallaxOne.jpg" />
      <TextBlock
        image={bgOne}
        heading="Мнение Психолога"
        text={textOne}
        name="Ирина Лернер"
        img="/images/psychologist.jpg"
      />
      <Parallax image="/images/parallax/ParallaxTwo.jpg" />
      <Text text={textTwo} image={bgTwo} />
      <Parallax image="/images/parallax/ParallaxThree.jpg" />
      <Text text={textThree} image={bgThree} />
      <Parallax image="/images/parallax/ParallaxFour.jpg" />
      <TextLast text={textFour} image={bgFour} />
    </Layout>
  );
}

export async function getStaticProps() {
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

  return {
    props: {
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
