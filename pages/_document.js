import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="../public/favicon/favicon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="../public/favicon/favicon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="../public/favicon/favicon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="../public/favicon/favicon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="../public/favicon/favicon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="../public/favicon/favicon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="../public/favicon/favicon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="../public/favicon/favicon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="../public/favicon/favicon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="../public/favicon/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="../public/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="../public/favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="../public/favicon/favicon-192x192.png"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="../public/favicon/favicon.ico"
          />
          <link
            rel="icon"
            type="image/x-icon"
            href="../public/favicon/favicon.ico"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="static/favicon/../public/favicon/favicon-144x144.png"
          />
          <meta
            name="msapplication-config"
            content="../public/favicon/browserconfig.xml"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="../public/favicon/favicon.svg"
          />
          <link rel="manifest" href="../public/favicon/manifest.json" />
          <meta name="theme-color" content="#ffffff" />

          <link
            rel="mask-icon"
            href="../public/favicon/safari-pinned-tab.svg"
            color="#000000"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
