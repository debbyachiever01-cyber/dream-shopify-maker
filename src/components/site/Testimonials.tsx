import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  {
    quote: "Within 90 days our CVR more than doubled. The new storefront feels like our brand finally caught up to our product.",
    name: "Elena Marsh", role: "Founder, Aurelia Skincare",
  },
  {
    quote: "They rebuilt our PDPs, funnels and email — and our blended ROAS jumped from 1.8 to 4.3. Strategic, fast, accountable.",
    name: "Daniel Okafor", role: "CEO, Obsidian Audio",
  },
  {
    quote: "The most senior, sales-obsessed team we've worked with. Every decision tied back to revenue.",
    name: "Sofia Ren", role: "Head of Growth, North & Co",
  },
];

export function Testimonials() {
  return (
    <section className="section-brown relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Client voices</p>
          <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Founders we've{" "}
            <span className="text-gradient-primary">helped scale.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative glass-strong rounded-3xl p-7 glow-border ${
                i === 1 ? "md:mt-8" : ""
              }`}
            >
              <Quote className="h-7 w-7 text-accent/60" />
              <blockquote className="mt-4 text-lg leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-white/5">
                <div className="h-10 w-10 rounded-full bg-gradient-primary grid place-items-center font-display font-semibold">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
