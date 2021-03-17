// Components
import Parallax from "../components/resp-image/BackgroundImageParallax3";
import SecondScreen from "../components/page_pieces/SecondScreen";
import markdownToHtml from "../lib/blog/markdownToHtml";
import Hero from "../components/page_pieces/Hero";
import { getPostBySlug } from "../lib/blog/api";
import TextLast from "../components/TextLast";
import Layout from "../components/layout";
import Video from "../components/Video";
import Text from "../components/Text";
import SEO from "../components/seo";

export default function Index({ data, seo, one, two, three, four, five }) {
  return (
    <Layout>
      <SEO title="Главная" seo={seo} />
      <Hero data={data} />
      <SecondScreen data={data} />
      <Video data={data} />
      <Parallax image={data.parallaxOne} />
      <Text content={one} image={data.phycologyTextCoverTwo} />
      <Parallax image={data.parallaxTwo} />
      <Text content={two} image={data.phycologyTextCoverThree} />
      <Parallax image={data.parallaxTwo} />
      <Text content={three} image={data.phycologyTextCoverFour} />
      <Parallax image={data.parallaxTwo} />
      <Text content={four} image={data.phycologyTextCoverTwo} />
      <Parallax image={data.parallaxFour} />
      <Text content={five} image={data.phycologyTextCoverThree} />
      <Parallax image={data.parallaxThree} />
      <TextLast data={data} image={data.phycologyTextCoverFour} />
    </Layout>
  );
}

export async function getStaticProps() {
  const content = await import(`../cms/content/pages/home.md`);
  const seo = await import(`../cms/content/config/seo.md`);

  const postOne = await markdownToHtml(getPostBySlug("one.md") || "");
  const postTwo = await markdownToHtml(getPostBySlug("two.md") || "");
  const postThree = await markdownToHtml(getPostBySlug("three.md") || "");
  const postFour = await markdownToHtml(getPostBySlug("four.md") || "");
  const postFive = await markdownToHtml(getPostBySlug("five.md") || "");
  return {
    props: {
      data: content.default.attributes,
      seo: seo.default.attributes,
      one: postOne,
      two: postTwo,
      three: postThree,
      four: postFour,
      five: postFive,
    },
  };
}
