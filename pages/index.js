import Layout from "../components/layout";
import { getSiteMetadata } from "../lib/api";
import SEO from "../components/seo";

export default function Index({ seo }) {
  return (
    <>
      <Layout>
        <SEO
          title={seo.title}
          description={seo.description}
          pathname="test"
          post={seo}
        />
        <h2>Home</h2>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await getSiteMetadata();
  return {
    props: {
      seo: data.siteConfig.getContent,
    },
  };
}
