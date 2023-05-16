import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { getCssText, reset } from '../styles/styles';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    try {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
    } catch (e: any) {
      console.error(e.message);
      throw e;
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preload critical CSS */}
          <link rel="preload" href="/path/to/critical.css" as="style" />
          <link rel="stylesheet" href="/path/to/critical.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap" rel="stylesheet" />

          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;