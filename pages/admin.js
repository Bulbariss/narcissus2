import dynamic from "next/dynamic";
import Head from "next/head";
import config from "../cms/config";
const CMS = dynamic(
  () =>
    import("netlify-cms-app").then((cms) => {
      cms.init({ config });
    }),
  // eslint-disable-next-line react/display-name
  { ssr: false, loading: () => <p>Loading...</p> }
);
const AdminPage = () => {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        ></script>
      </Head>
      <div data-netlify-identity-menu></div>
      <div data-netlify-identity-button>Login with Netlify Identity</div>
      <CMS />
    </>
  );
};
export default AdminPage;
