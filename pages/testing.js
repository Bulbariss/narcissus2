import Link from "next/link";
import Layout from "../components/layout";
import { getTestingPage, getSiteMetadata } from "../lib/api";
import SEO from "../components/seo";
import BackgroundImage from "../components/BackgroundImage2";
import getUnsplashImage from "../components/getImage";
// import Image from "next/image";
export default function Index({ seo, post }) {
  // let img2 = require(`../images/${post.heroImage.path}`);
  let img = require(`../images/${post.heroImage.path}?resize`);

  // console.log(img2);
  console.log(img);
  console.log(post.heroImage.path);
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
            <a className="z-10 px-10 py-4 mt-4 font-bold text-white bg-indigo-700 rounded-2xl">
              Home
            </a>
          </Link>
        </BackgroundImage>
        <section className="max-w-2xl px-4 py-12 mx-auto">
          {/* <img src={img.src} alt="" /> */}
          <p>{post.text}</p>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await getTestingPage();
  const data2 = await getSiteMetadata();
  async function downloadImage(url) {
    await getUnsplashImage(url);
  }
  await getUnsplashImage(
    "https://contentpanel.xyz/test/wp-content/uploads/2021/01/pexels-mohamed-sarim-1033729-scaled.jpg"
  );
  Object.values(data.testing.getContent).map((value) => {
    if (typeof value === "object" && "sourceUrl" in value) {
      downloadImage(value.sourceUrl);
      value.path = value.sourceUrl.split("wp-content/")[1].replace(/\//g, "_");
    }
  });

  return {
    props: {
      post: data.testing.getContent,
      seo: data2.siteConfig.getContent,
    },
  };
}
