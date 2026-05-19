import { motion } from "framer-motion";
import {
  Palette, RefreshCw, MousePointerClick, PackageOpen, Megaphone,
  Target, Mail, GitBranch, LayoutTemplate, Sparkles,
} from "lucide-react";

const services = [
  { icon: Palette, title: "Shopify Store Design", desc: "Conversion-led storefronts crafted around your brand voice." },
  { icon: RefreshCw, title: "Shopify Redesign", desc: "Modernize legacy stores into high-performing experiences." },
  { icon: MousePointerClick, title: "Conversion Optimization", desc: "Data-driven CRO sprints that raise revenue per visitor." },
  { icon: PackageOpen, title: "Product Page Optimization", desc: "PDPs engineered to remove friction and drive add-to-cart." },
  { icon: Megaphone, title: "Marketing Strategy", desc: "Full-funnel growth plans tied to revenue goals." },
  { icon: Target, title: "Facebook & TikTok Ads", desc: "Creative-led paid social that scales profitably." },
  { icon: Mail, title: "Email & SMS Marketing", desc: "Lifecycle flows that turn one-time buyers into fans." },
  { icon: GitBranch, title: "Sales Funnel Development", desc: "Upsell, downsell and post-purchase systems that compound AOV." },
  { icon: LayoutTemplate, title: "Landing Page Design", desc: "High-intent pages built for paid traffic and launches." },
  { icon: Sparkles, title: "Branding & Identity", desc: "Distinct visual systems that command premium pricing." },
];

export function Services() {
  return (
    <section id="services" className="section-brown relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">What we do</p>
          <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            A full growth engine for{" "}
            <span className="text-gradient-primary">ambitious brands.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            From storefront to scaling — everything you need to turn your Shopify
            store into a compounding revenue machine.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-2xl p-7 glow-border overflow-hidden transition-shadow hover:shadow-glow"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                  <s.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-display font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 text-xs text-accent opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
                  Explore service →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
