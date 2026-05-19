import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  "Conversion-focused design system",
  "Data-driven hypothesis testing",
  "Built-in sales psychology",
  "Mobile-first PDP optimization",
  "Premium, brand-led user experience",
  "Strategic full-funnel marketing",
  "Senior team — no juniors on accounts",
];

export function WhyUs() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Why AD AGENCY</p>
          <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Most agencies design.{" "}
            <span className="text-gradient-primary">We engineer revenue.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 glass-strong rounded-3xl glow-border overflow-hidden"
        >
          <div className="grid grid-cols-[1.5fr_1fr_1fr] text-sm">
            <div className="p-5 sm:p-7 font-display font-semibold text-base">Capability</div>
            <div className="p-5 sm:p-7 font-display font-semibold text-base bg-gradient-primary text-white text-center">
              AD AGENCY
            </div>
            <div className="p-5 sm:p-7 font-display font-semibold text-base text-muted-foreground text-center">
              Typical agency
            </div>

            {rows.map((r, i) => (
              <motion.div
                key={r}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="contents"
              >
                <div className="px-5 sm:px-7 py-4 border-t border-white/5">{r}</div>
                <div className="px-5 sm:px-7 py-4 border-t border-white/5 grid place-items-center bg-primary/5">
                  <Check className="h-5 w-5 text-accent" />
                </div>
                <div className="px-5 sm:px-7 py-4 border-t border-white/5 grid place-items-center">
                  <X className="h-4 w-4 text-muted-foreground/50" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
