import Layout from "../components/layout";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Layout>
        {/* <SEO title={"index"} seo={seo} /> */}
        <section className="relative flex flex-col items-center justify-center w-screen min-h-screen space-y-12">
          <h1 className="z-10 text-5xl font-black text-black">Home</h1>
          <Link href="/testing">
            <a className="z-10 px-10 py-4 font-bold text-white bg-indigo-700 rounded-2xl">
              Testing
            </a>
          </Link>
        </section>
      </Layout>
    </>
  );
}
