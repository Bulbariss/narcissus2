// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/page_pieces/Hero";
import TextBlock from "../components/TextBlock";
import Text from "../components/Text";
import TextLast from "../components/TextLast";
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
  data,
}) {
  return (
    <Layout>
      <SEO />
      <Hero data={data} Test2={Test2} Test={Test} />
      <SecondScreen data={data} />
      <Video videoCover={videoCover} data={data} />
      <Parallax image={data.parallaxOne} />
      <TextBlock
        image={bgOne}
        heading={data.phycologyHeading}
        text={data.phycologyTextOne}
        name={data.phycologyName}
        img={data.phycologyImage}
      />
      <Parallax image={data.parallaxTwo} />
      <Text text={data.phycologyTextTwo} image={bgTwo} />
      <Parallax image={data.parallaxThree} />
      <Text text={data.phycologyTextThree} image={bgThree} />
      <Parallax image={data.parallaxFour} />
      <TextLast data={data} image={bgFour} />
    </Layout>
  );
}

export async function getStaticProps() {
  const content = await import(`../cms/content/pages/home.md`);

  const bgOne = await getFluidImage(
    content.default.attributes.phycologyTextCoverOne
  );
  const bgTwo = await getFluidImage(
    content.default.attributes.phycologyTextCoverTwo
  );
  const bgThree = await getFluidImage(
    content.default.attributes.phycologyTextCoverThree
  );
  const bgFour = await getFluidImage(
    content.default.attributes.phycologyTextCoverFour
  );
  const videoCover = await getFluidImage(content.default.attributes.videoCover);
  const Test = await getFluidImage(content.default.attributes.heroVertical);
  const Test2 = await getFluidImage(content.default.attributes.heroHorizontal);

  return {
    props: {
      bgOne,
      bgTwo,
      bgThree,
      bgFour,
      videoCover,
      Test2,
      Test,
      data: content.default.attributes,
    },
  };
}
