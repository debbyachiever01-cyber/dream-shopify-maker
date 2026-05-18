import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How long does a Shopify redesign take?", a: "Most full redesigns ship in 6–10 weeks depending on scope. Quick CRO sprints can ship in as little as 3 weeks." },
  { q: "Can you improve my conversion rate?", a: "Yes — every engagement is anchored to a measurable revenue or CVR target. We back the work with hypothesis-led testing." },
  { q: "Do you help with ads and marketing?", a: "We run full-funnel paid social, email/SMS lifecycle, and creative production for ecommerce brands ready to scale." },
  { q: "Can you redesign existing Shopify stores?", a: "Absolutely. We work with stores on Shopify, Shopify Plus and Headless setups — refactoring without breaking SEO or analytics." },
  { q: "What industries do you work with?", a: "Beauty, apparel, lifestyle, consumer electronics, home and food brands doing $50k–$5M/mo. We're picky about fit." },
  { q: "Do you offer ongoing support?", a: "Yes — most clients move into a monthly growth retainer covering CRO, creative, and lifecycle marketing." },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">FAQ</p>
          <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Questions, <span className="text-gradient-primary">answered.</span>
          </h2>
        </div>

        <div className="mt-14 glass-strong rounded-3xl glow-border p-2 sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/5 last:border-0 px-4 sm:px-6">
                <AccordionTrigger className="text-left text-base sm:text-lg font-display font-medium hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
