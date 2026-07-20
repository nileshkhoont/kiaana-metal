import { Box, Recycle, ShieldCheck, Truck } from "lucide-react";

export const servicesData = {
  title: "Our Services",
  subtitle: "Industrial Metal Supply & Global Trade Logistics",
  description: "Kiaana Metal Trading Inc. provides high-volume physical metal supply, scrap recovery services, import facilitation, and end-to-end global trade logistics for manufacturers and industrial clients.",
  
  services: [
    {
      id: "bulk-metal-supply",
      title: "Bulk Metal Sourcing & Supply",
      tagline: "Primary & secondary industrial metals",
      description: "We supply high-grade raw metals and processed alloys to manufacturers worldwide. Sourcing from accredited smelting hubs and refineries, we deliver bulk orders of aluminium ingots, copper cathodes, zinc slabs, and structural steel.",
      features: [
        "Primary aluminium ingots (99.7%)",
        "High-purity copper cathodes",
        "Zinc ingots (99.99%) & lead alloys",
        "Structural steel beams and sheets"
      ],
      icon: Box,
    },
    {
      id: "scrap-metal-recovery",
      title: "Industrial Scrap Metal Recovery",
      tagline: "Toll processing & eco-efficient reclamation",
      description: "We partner with local manufacturing industries, demolition contractors, and municipal collection hubs to retrieve, sort, and process non-ferrous and ferrous scraps, preparing materials for export and domestic recycling loops.",
      features: [
        "Heavy Melting Steel (HMS 1 & 2) collection",
        "Shredded aluminium and copper scrap recovery",
        "On-site scrap bins & custom containment bins",
        "Toll-processing and material sorting"
      ],
      icon: Recycle,
    },
    {
      id: "import-facilitation",
      title: "Customs Brokerage & Import Facilitation",
      tagline: "Importing industrial machinery & structural steel",
      description: "We assist Canadian businesses in importing industrial production machinery, heavy construction materials, and structural equipment from emerging global markets, handling all regulatory paperwork and local duty compliance.",
      features: [
        "Factory-direct machine inspections",
        "DDP (Delivered Duty Paid) trade services",
        "Import tariff & tax classification audit",
        "Compliance with Canadian trade standards"
      ],
      icon: ShieldCheck,
    },
    {
      id: "global-logistics-freight",
      title: "Global Freight & Logistics",
      tagline: "Ocean freight brokerage & cargo inspection",
      description: "We coordinate end-to-end supply chain logistics, including quality certifications (SGS audits), customs clearances at destination ports, container cargo securing, and marine transport insurance for safe shipping routes.",
      features: [
        "FCL (Full Container Load) ocean shipping",
        "Pre-shipment grade verification & SGS report",
        "Bilateral trade document management",
        "Export Development Canada (EDC) trade coverage"
      ],
      icon: Truck,
    }
  ]
};
