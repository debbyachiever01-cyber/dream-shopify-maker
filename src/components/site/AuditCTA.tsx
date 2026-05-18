import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AuditCTA() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="audit" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-strong rounded-[2rem] overflow-hidden glow-border p-8 sm:p-14 lg:p-20"
        >
          {/* background glow */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-primary/40 blur-[140px]" />
          <div className="absolute -bottom-40 right-0 h-[300px] w-[400px] rounded-full bg-accent/30 blur-[120px]" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
                <Sparkles className="h-3 w-3 text-accent" />
                Free Shopify audit
              </div>
              <h2 className="mt-5 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                Your Shopify store might be{" "}
                <span className="text-gradient-primary">losing sales every day.</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground max-w-lg">
                Get a free conversion audit and discover exactly what's stopping
                your visitors from buying.
              </p>
              <ul className="mt-7 space-y-2.5 text-sm text-muted-foreground">
                {[
                  "20-minute Loom video audit",
                  "3 highest-impact opportunities",
                  "No-pitch — actionable takeaways only",
                ].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="glass rounded-2xl p-6 sm:p-8 space-y-4"
            >
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="mx-auto h-14 w-14 rounded-full bg-gradient-primary grid place-items-center shadow-glow">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-xl font-display font-semibold">You're in.</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We'll send your audit within 2 business days.
                  </p>
                </div>
              ) : (
                <>
                  <div>
                    <label className="text-xs text-muted-foreground">Your name</label>
                    <Input required placeholder="Jamie Reyes" className="mt-1 h-11 bg-white/5 border-white/10" />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground">Work email</label>
                    <Input required type="email" placeholder="jamie@brand.com" className="mt-1 h-11 bg-white/5 border-white/10" />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground">Shopify store URL</label>
                    <Input required placeholder="brand.myshopify.com" className="mt-1 h-11 bg-white/5 border-white/10" />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 rounded-full bg-gradient-primary text-white border-0 shadow-glow hover:opacity-95"
                  >
                    Get Free Shopify Audit <ArrowRight className="h-4 w-4" />
                  </Button>
                  <p className="text-[11px] text-muted-foreground text-center">
                    No spam. Audit delivered within 48 hours.
                  </p>
                </>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
