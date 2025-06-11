"use client";
import Head from "next/head";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>
          Estimatrics | Professional Construction Estimation Services
        </title>
        <meta
          name="description"
          content="Accurate construction cost estimation services for residential, commercial, and industrial projects."
        />
      </Head>
      {/* Order of components for optimal UX flow */}
      <Hero /> {/* Hero section grabs attention first */}
      <Services /> {/* Then show what services you offer */}
      <WhyChooseUs /> {/* Build trust by explaining why you stand out */}
      <Industries /> {/* Show where those services are applied */}
      <Process /> {/* Show real examples / social proof */}
      <Testimonials />
      <Projects /> {/* Show real examples / social proof */}
      <CTA /> {/* Finally, a strong call to action */}
    </Layout>
  );
}
