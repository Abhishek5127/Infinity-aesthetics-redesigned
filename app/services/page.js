import PageHero from "../../components/PageHero";
import JsonLd from "../../components/JsonLd";
import { clinicServices } from "../../lib/services";
import { breadcrumbSchema, createMetadata, serviceSeo } from "../../lib/seo";
import ServicesList from "./ServicesList";

export const metadata = createMetadata({
  title: "Skin Clinic Services Ajmer | Infinity Aesthetics",
  description:
    "Explore acne treatment, PRP hair therapy, HydraFacial, chemical peels, pigmentation care, carbon laser, IPL, and advanced skin lifting in Ajmer.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <PageHero
        kicker="Treatments"
        title="Clinical Treatments in Ajmer"
        text="Evidence-informed treatments for glow, clarity, texture, acne care, hair support, pigmentation, and long-term skin health. Each plan is shaped around your barrier health, Ajmer's climate, and your goals."
      />

      <ServicesList clinicServices={clinicServices} serviceSeo={serviceSeo} />
    </>
  );
}
