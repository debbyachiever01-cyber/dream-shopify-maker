import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import proof1 from "@/assets/proof-1.jpg";
import proof2 from "@/assets/proof-2.jpg";
import proof3 from "@/assets/proof-3.jpg";
import proof4 from "@/assets/proof-4.jpg";

const proofs = [
  { src: proof1, label: "Total sales $1,772", metric: "+52%" },
  { src: proof2, label: "Total sales $708.52", metric: "+119%" },
  { src: proof3, label: "Total sales $714.68", metric: "+74%" },
  { src: proof4, label: "Total sales $669.26", metric: "+2.6K%" },
];

const cases = [
  {
    name: "Aurelia Skincare",
    industry: "Beauty & Wellness",
    cvr: "+187%",
    rev: "$2.4M / yr",
    strategy: "Brand refresh + PDP rebuild + retention flows",
    gradient: "from-rose-500/30 via-fuchsia-500/20 to-purple-600/30",
  },
  {
    name: "North & Co",
    industry: "Outdoor Apparel",
    cvr: "+92%",
    rev: "$5.1M / yr",
    strategy: "Headless Shopify + paid social ramp",
    gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-600/30",
  },
  {
    name: "Maison Roy",
    industry: "Luxury Home",
    cvr: "+241%",
    rev: "$1.8M / yr",
    strategy: "Editorial redesign + email lifecycle",
    gradient: "from-amber-500/30 via-orange-500/20 to-rose-600/30",
  },
  {
    name: "Obsidian Audio",
    industry: "Consumer Electronics",
    cvr: "+118%",
    rev: "$3.7M / yr",
    strategy: "CRO sprint + funnel architecture",
    gradient: "from-indigo-500/30 via-violet-500/20 to-purple-600/30",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Selected work</p>
            <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Stores we've{" "}
              <span className="text-gradient-primary">made profitable.</span>
            </h2>
          </div>
          <a
            href="#audit"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
          >
            All case studies <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative glass-strong rounded-3xl overflow-hidden glow-border cursor-pointer"
            >
              {/* mockup area */}
              <div className={`relative h-72 sm:h-80 bg-gradient-to-br ${c.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                {/* device frame */}
                <div className="absolute inset-x-10 top-10 bottom-0 glass-strong rounded-t-2xl p-3 shadow-glow-lg transform group-hover:-translate-y-3 transition-transform duration-700">
                  <div className="flex gap-1.5 mb-3">
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-1/2 rounded bg-white/15" />
                    <div className="h-20 rounded bg-white/10" />
                    <div className="grid grid-cols-3 gap-1.5">
                      <div className="h-12 rounded bg-white/10" />
                      <div className="h-12 rounded bg-white/10" />
                      <div className="h-12 rounded bg-white/10" />
                    </div>
                    <div className="h-3 w-2/3 rounded bg-white/15" />
                  </div>
                </div>
                {/* floating badge */}
                <div className="absolute top-5 right-5 glass rounded-full px-3 py-1 text-xs font-medium animate-float">
                  {c.cvr} CVR
                </div>
              </div>

              {/* meta */}
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs text-muted-foreground">{c.industry}</div>
                    <h3 className="mt-1 text-2xl font-display font-semibold">{c.name}</h3>
                  </div>
                  <div className="h-10 w-10 rounded-full glass grid place-items-center group-hover:bg-gradient-primary transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{c.strategy}</p>
                <div className="mt-5 flex items-center gap-5 pt-5 border-t border-white/5">
                  <div>
                    <div className="text-xs text-muted-foreground">Conversion</div>
                    <div className="text-lg font-display font-semibold text-gradient">{c.cvr}</div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <div className="text-xs text-muted-foreground">Revenue</div>
                    <div className="text-lg font-display font-semibold text-gradient">{c.rev}</div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
