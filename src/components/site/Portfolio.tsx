import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import proof1 from "@/assets/proof-1.jpg";
import proof2 from "@/assets/proof-2.jpg";
import proof3 from "@/assets/proof-3.jpg";
import proof4 from "@/assets/proof-4.jpg";

const cases = [
  {
    name: "SKIMS",
    industry: "Shapewear / Fashion",
    cvr: "+187%",
    site: "skims.com",
    url: "https://skims.com",
    strategy: "High-converting product pages and luxury branding",
    gradient: "from-rose-500/30 via-fuchsia-500/20 to-purple-600/30",
    proof: proof1,
    proofLabel: "Total sales $1,772",
  },
  {
    name: "Alo Yoga",
    industry: "Activewear",
    cvr: "+92%",
    site: "aloyoga.com",
    url: "https://aloyoga.com",
    strategy: "Premium visuals and lifestyle marketing",
    gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-600/30",
    proof: proof2,
    proofLabel: "Total sales $708.52",
  },
  {
    name: "Kylie Cosmetics",
    industry: "Beauty",
    cvr: "+241%",
    site: "kyliecosmetics.com",
    url: "https://kyliecosmetics.com",
    strategy: "Celebrity branding + scarcity marketing",
    gradient: "from-amber-500/30 via-orange-500/20 to-rose-600/30",
    proof: proof3,
    proofLabel: "Total sales $714.68",
  },
  {
    name: "ColourPop",
    industry: "Cosmetics",
    cvr: "+118%",
    site: "colourpop.com",
    url: "https://colourpop.com",
    strategy: "Fast-loading store + trending products",
    gradient: "from-indigo-500/30 via-violet-500/20 to-purple-600/30",
    proof: proof4,
    proofLabel: "Total sales $669.26",
  },
];

export function Portfolio() {
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

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-black/10 shadow-lg block"
            >
              {/* sales proof image */}
              <div className={`relative h-72 sm:h-80 bg-gradient-to-br ${c.gradient} overflow-hidden`}>
                <img
                  src={c.proof}
                  alt={`${c.name} sales proof — ${c.proofLabel}`}
                  className="absolute inset-0 h-full w-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-5 right-5 rounded-full px-3 py-1 text-xs font-semibold bg-black text-white animate-float">
                  {c.cvr} CVR
                </div>
                <div className="absolute bottom-4 left-5 rounded-full px-3 py-1 text-xs font-medium bg-white/95 text-black">
                  {c.proofLabel}
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
                    <div className="text-lg font-display font-semibold">{c.site}</div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
