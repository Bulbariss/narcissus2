import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Header from "../../components/header";
import Layout from "../../components/layout";
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
  getSiteMetadata,
} from "../../lib/api";
import SEO from "../../components/seo";
import Image from "next/image";

export default function Post({ post, seo }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <SEO
        title={post.getContent.title}
        description={post.getContent.title}
        pathname={post.getContent.title}
        post={seo}
      />
      <Header />
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <h1>{post.getContent.title}</h1>
          <div className="relative h-64 max-w-3xl">
            <Image
              layout="fill"
              quality={75}
              objectFit="contain"
              src={post.getContent.image.sourceUrl}
              alt=""
            />
          </div>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const data = await getPostAndMorePosts(params.slug);
  const data2 = await getSiteMetadata();
  return {
    props: {
      post: data.testPage,
      seo: data2.siteConfig.getContent,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
}
