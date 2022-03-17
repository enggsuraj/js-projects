import Head from "next/head";

import Landing from "../components/landing";
import Projects from "../components/projects";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>js-projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Landing />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
