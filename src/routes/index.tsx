import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { AuditCTA } from "@/components/site/AuditCTA";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { CursorGlow } from "@/components/site/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumora — Shopify Growth Studio That Converts" },
      {
        name: "description",
        content:
          "Lumora is a Shopify growth studio building conversion-led storefronts, CRO systems and full-funnel marketing for ambitious ecommerce brands.",
      },
      { property: "og:title", content: "Lumora — Shopify Growth Studio" },
      {
        property: "og:description",
        content:
          "Conversion-led Shopify design, CRO and marketing. Turn visitors into customers.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <Process />
        <WhyUs />
        <Testimonials />
        <AuditCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
