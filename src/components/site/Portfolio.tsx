import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
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
    name: "SKIMS",
    industry: "Shapewear / Fashion",
    cvr: "+187%",
    rev: "skims.com",
    strategy: "High-converting product pages and luxury branding",
    gradient: "from-rose-500/30 via-fuchsia-500/20 to-purple-600/30",
  },
  {
    name: "Alo Yoga",
    industry: "Activewear",
    cvr: "+92%",
    rev: "aloyoga.com",
    strategy: "Premium visuals and lifestyle marketing",
    gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-600/30",
  },
  {
    name: "Kylie Cosmetics",
    industry: "Beauty",
    cvr: "+241%",
    rev: "kyliecosmetics.com",
    strategy: "Celebrity branding + scarcity marketing",
    gradient: "from-amber-500/30 via-orange-500/20 to-rose-600/30",
  },
  {
    name: "ColourPop",
    industry: "Cosmetics",
    cvr: "+118%",
    rev: "colourpop.com",
    strategy: "Fast-loading store + trending products",
    gradient: "from-indigo-500/30 via-violet-500/20 to-purple-600/30",
  },
];

export function Portfolio() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % proofs.length);
  const prev = () => setIdx((i) => (i - 1 + proofs.length) % proofs.length);

  useEffect(() => {
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, []);

  const current = proofs[idx];

  return (
    <section id="work" className="section-light relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Selected work</p>
            <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Stores we've{" "}
              <span className="text-gradient-primary">made profitable.</span>
            </h2>
          </div>
          <a
            href="#audit"
            className="text-sm opacity-70 hover:opacity-100 transition-opacity inline-flex items-center gap-1"
          >
            All case studies <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Real sales proof — one-at-a-time carousel */}
        <div className="mt-14">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="h-4 w-4 text-primary" />
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Real sales proof</p>
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="relative rounded-3xl overflow-hidden border border-black/10 bg-white shadow-2xl">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-white">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={idx}
                    src={current.src}
                    alt={`Shopify dashboard showing ${current.label}`}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                </AnimatePresence>
                <div className="absolute top-4 right-4 rounded-full px-3 py-1.5 text-xs font-semibold bg-black text-white">
                  {current.metric}
                </div>
              </div>
              <div className="flex items-center justify-between px-5 py-4 border-t border-black/10">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="h-10 w-10 grid place-items-center rounded-full border border-black/10 hover:bg-black hover:text-white transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <p className="text-sm font-medium">{current.label}</p>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="h-10 w-10 grid place-items-center rounded-full border border-black/10 hover:bg-black hover:text-white transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              {proofs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "w-8 bg-black" : "w-4 bg-black/25 hover:bg-black/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-black/10 shadow-lg"
            >
              {/* mockup area */}
              <div className={`relative h-72 sm:h-80 bg-gradient-to-br ${c.gradient} overflow-hidden`}>
                <div className="absolute inset-x-10 top-10 bottom-0 rounded-t-2xl bg-white/80 backdrop-blur p-3 shadow-xl border border-white transform group-hover:-translate-y-3 transition-transform duration-700">
                  <div className="flex gap-1.5 mb-3">
                    <span className="h-2 w-2 rounded-full bg-black/20" />
                    <span className="h-2 w-2 rounded-full bg-black/20" />
                    <span className="h-2 w-2 rounded-full bg-black/20" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-1/2 rounded bg-black/10" />
                    <div className="h-20 rounded bg-black/5" />
                    <div className="grid grid-cols-3 gap-1.5">
                      <div className="h-12 rounded bg-black/5" />
                      <div className="h-12 rounded bg-black/5" />
                      <div className="h-12 rounded bg-black/5" />
                    </div>
                    <div className="h-3 w-2/3 rounded bg-black/10" />
                  </div>
                </div>
                <div className="absolute top-5 right-5 rounded-full px-3 py-1 text-xs font-medium bg-black text-white animate-float">
                  {c.cvr} CVR
                </div>
              </div>

              {/* meta */}
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs opacity-60">{c.industry}</div>
                    <h3 className="mt-1 text-2xl font-display font-semibold">{c.name}</h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-black text-white grid place-items-center group-hover:bg-primary transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-3 text-sm opacity-75">{c.strategy}</p>
                <div className="mt-5 flex items-center gap-5 pt-5 border-t border-black/10">
                  <div>
                    <div className="text-xs opacity-60">Conversion</div>
                    <div className="text-lg font-display font-semibold">{c.cvr}</div>
                  </div>
                  <div className="h-8 w-px bg-black/10" />
                  <div>
                    <div className="text-xs opacity-60">Website</div>
                    <div className="text-lg font-display font-semibold">{c.rev}</div>
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
