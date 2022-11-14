import { type NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CarboxyDev</title>
        <meta name="description" content="Personal website for CarboxyDev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero></Hero>
      </main>
    </>
  );
};

export default Home;
