import { type DocumentType } from "next/dist/shared/lib/utils";
import { Html, Head, Main, NextScript } from "next/document";

const Document: DocumentType = () => {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-base-300 text-base-content">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
