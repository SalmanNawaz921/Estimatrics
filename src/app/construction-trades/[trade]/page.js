"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Layout from "@/components/Layout";
import TradeDetail from "@/components/trades/TradeDetail";
import CTA from "@/components/CTA";

function formatSlug(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getTradeData(slug) {
  return {
    slug,
    name: formatSlug(slug),
    description: `Comprehensive cost estimation services for ${slug} projects.`,
    services: [
      `Detailed ${slug} quantity takeoffs`,
      `Material cost estimation`,
      `Labor hour calculations`,
    ],
    projects: [
      {
        title: `${slug} for Downtown Highrise`,
        image: `/images/projects/${slug}-1.jpg`,
      },
    ],
  };
}

export default function TradePage() {
  const params = useParams();
  const [trade, setTrade] = useState(null);

  useEffect(() => {
    if (params?.trade) {
      const tradeData = getTradeData(params.trade);
      setTrade(tradeData);
    }
  }, [params]);

  if (!trade) return <div className="p-10">Loading...</div>;

  return (
    <Layout>
      <div className="container mx-auto px-6 py-20">
        <TradeDetail trade={trade} />
      </div>
      <CTA />
    </Layout>
  );
}
