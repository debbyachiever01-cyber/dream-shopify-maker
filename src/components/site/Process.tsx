import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Brand Discovery", d: "Deep-dive into your brand, customers and category." },
  { n: "02", t: "Store Audit", d: "Forensic UX, tech and analytics audit of your storefront." },
  { n: "03", t: "Conversion Strategy", d: "Hypothesis-led roadmap prioritized by revenue impact." },
  { n: "04", t: "Store Design", d: "Editorial, conversion-driven UI tailored to your audience." },
  { n: "05", t: "Funnel Optimization", d: "Upsell, downsell and post-purchase systems wired in." },
  { n: "06", t: "Marketing Launch", d: "Paid, owned and earned channels activated in concert." },
  { n: "07", t: "Scale & Growth", d: "Iterative testing and creative refresh to compound returns." },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">How we work</p>
          <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            A repeatable system,{" "}
            <span className="text-gradient-primary">engineered to scale.</span>
          </h2>
        </div>

        <div className="mt-16 relative">
          {/* vertical line */}
          <div className="absolute left-[27px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className={`relative flex sm:items-center gap-6 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* dot */}
                <div className="relative shrink-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2 z-10">
                  <div className="h-14 w-14 rounded-full bg-gradient-primary grid place-items-center shadow-glow font-display font-bold">
                    {s.n}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-primary/40 blur-xl animate-glow-pulse -z-10" />
                </div>

                <div className={`flex-1 sm:max-w-[calc(50%-3rem)] ${i % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:text-left sm:pl-12"}`}>
                  <div className="glass rounded-2xl p-6 glow-border">
                    <h3 className="text-xl font-display font-semibold">{s.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </div>
                <div className="hidden sm:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
