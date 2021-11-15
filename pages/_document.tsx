import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="no" className="h-full w-screen overflow-x-hidden">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          <link rel="canonical" href="https://ordbok.lesesalen.com" />
          <meta
            name="description"
            content="Informatics is confusing, use this"
          />
          <meta
            property="og:description"
            content="Informatics is confusing, use this"
          />
        </Head>
        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
