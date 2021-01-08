import Link from "next/link";
import Layout from "../components/layout";
import { getTestingPage, getSiteMetadata } from "../lib/api";
import SEO from "../components/seo";
import BackgroundImage from "../components/BackgroundImage3";
import downloadImage from "../components/getImage";
import { getFluidImage } from "../components/sharpFunctions";

export default function Index({ seo, post, test }) {
  return (
    <>
      <Layout>
        <SEO title={post.title} seo={seo} />
        <BackgroundImage image={test}>
          <h1 className="z-10 text-5xl font-black text-gray-100">
            {post.heroText}
          </h1>
          <Link href="/">
            <a className="z-10 px-10 py-4 mt-4 font-bold text-white bg-indigo-700 rounded-2xl">
              Home
            </a>
          </Link>
        </BackgroundImage>
        <section className="max-w-2xl px-4 py-12 mx-auto">
          <p>{post.text}</p>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await getTestingPage();
  const data2 = await getSiteMetadata();
  // eslint-disable-next-line no-undef
  await Promise.all(
    Object.values(data.testing.getContent).map(async (value) => {
      if (typeof value === "object" && "sourceUrl" in value) {
        value.path = await downloadImage(value.sourceUrl);
      }
    })
  );
  const data3 = await getFluidImage(data.testing.getContent.heroImage.path);
  return {
    props: {
      post: data.testing.getContent,
      seo: data2.siteConfig.getContent,
      test: data3,
    },
  };
}
