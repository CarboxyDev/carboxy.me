import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CarboxyDev</title>
        <meta name="description" content="Personal website for CarboxyDev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-blue-600 text-4xl">Welcome to my website!</h1>
      </div>
    </>
  );
};

export default Home;
