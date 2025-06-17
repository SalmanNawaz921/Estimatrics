import { notFound } from "next/navigation";
import { serviceDetails } from "@/data/services";
import Layout from "@/components/Layout";
import ServiceDetail from "@/components/ServiceDetail";
import CTA from "@/components/CTA";
import OtherHero from "@/components/OtherHero";

export async function generateStaticParams() {
  return serviceDetails.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }) {
  const service = serviceDetails.find((s) => s.slug === params.slug);

  if (!service) {
    return notFound();
  }

  return (
    <Layout>
      <OtherHero />
      <ServiceDetail service={service} />
      <CTA />
    </Layout>
  );
}
