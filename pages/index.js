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

export default function Index({
  bgOne,
  bgTwo,
  bgThree,
  bgFour,
  videoCover,
  Test2,
  Test,
}) {

  return (
    <Layout>
      <SEO />
      <Hero Test2={Test2} Test={Test}  />
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
