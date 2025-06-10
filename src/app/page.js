import About from "@/components/About";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>NewWave Construction | Quality Building Services</title>
        <meta
          name="description"
          content="Professional construction services for residential and commercial projects"
        />
      </Head>

      <Hero />
      <About />
      <Services />
      <Projects />
    </Layout>
  );
}
