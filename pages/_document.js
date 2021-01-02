import Document, { Html, Head, Main, NextScript } from "next/document";
import Favicon57 from "../public/favicon/favicon-57x57.png";
import Favicon60 from "../public/favicon/favicon-60x60.png";
import Favicon72 from "../public/favicon/favicon-72x72.png";
import Favicon76 from "../public/favicon/favicon-76x76.png";
import Favicon114 from "../public/favicon/favicon-114x114.png";
import Favicon120 from "../public/favicon/favicon-120x120.png";
import Favicon144 from "../public/favicon/favicon-144x144.png";
import Favicon152 from "../public/favicon/favicon-152x152.png";
import Favicon180 from "../public/favicon/favicon-180x180.png";
import Favicon16 from "../public/favicon/favicon-16x16.png";
import Favicon32 from "../public/favicon/favicon-32x32.png";
import Favicon96 from "../public/favicon/favicon-96x96.png";
import Favicon192 from "../public/favicon/favicon-192x192.png";
import FaviconIco from "../public/favicon/favicon.ico";
import Browserconfig from "../public/favicon/browserconfig.xml";
import Manifest from "../public/favicon/manifest.json";
import FaviconSafari from "../public/favicon/safari-pinned-tab.svg";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="57x57" href={Favicon57} />
          <link rel="apple-touch-icon" sizes="60x60" href={Favicon60} />
          <link rel="apple-touch-icon" sizes="72x72" href={Favicon72} />
          <link rel="apple-touch-icon" sizes="76x76" href={Favicon76} />
          <link rel="apple-touch-icon" sizes="114x114" href={Favicon114} />
          <link rel="apple-touch-icon" sizes="120x120" href={Favicon120} />
          <link rel="apple-touch-icon" sizes="144x144" href={Favicon144} />
          <link rel="apple-touch-icon" sizes="152x152" href={Favicon152} />
          <link rel="apple-touch-icon" sizes="180x180" href={Favicon180} />
          <link rel="icon" type="image/png" sizes="16x16" href={Favicon16} />
          <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
          <link rel="icon" type="image/png" sizes="96x96" href={Favicon96} />
          <link rel="icon" type="image/png" sizes="192x192" href={Favicon192} />
          <link rel="shortcut icon" type="image/x-icon" href={FaviconIco} />
          <link rel="icon" type="image/x-icon" href={FaviconIco} />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content={Favicon144} />
          <meta name="msapplication-config" content={Browserconfig} />
          <link rel="manifest" href={Manifest} />
          <meta name="theme-color" content="#ffffff" />
          <link rel="mask-icon" href={FaviconSafari} color="#000000" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
