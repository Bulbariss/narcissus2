import Link from "next/link";
import Layout from "../components/layout";
import { getTestingPage, getSiteMetadata } from "../lib/api";
import SEO from "../components/seo";
import BackgroundImage from "../components/BackgroundImage2";
// import Image from "next/image";

export default function Index({ seo, post }) {
  return (
    <>
      <Layout>
        <SEO
          title={post.title}
          description={seo.description}
          pathname="test"
          post={seo}
        />
        <BackgroundImage image={post.heroImage.sourceUrl}>
          <h1 className="z-10 text-5xl font-black text-gray-100">
            {post.heroText}
          </h1>
          <Link href="/">
            <a className="z-10 px-10 py-4 font-bold text-white bg-indigo-700">
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
  return {
    props: {
      post: data.testing.getContent,
      seo: data2.siteConfig.getContent,
    },
  };
}
