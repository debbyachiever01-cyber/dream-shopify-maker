import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles, TrendingUp, ShoppingBag, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const tiltX = useTransform(sy, [-1, 1], [8, -8]);
  const tiltY = useTransform(sx, [-1, 1], [-8, 8]);
  const glowX = useTransform(sx, [-1, 1], ["30%", "70%"]);
  const glowY = useTransform(sy, [-1, 1], ["30%", "70%"]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
      my.set(((e.clientY - r.top) / r.height) * 2 - 1);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen pt-32 pb-20 overflow-hidden"
    >
      {/* mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-70 pointer-events-none" />
      <motion.div
        style={{ left: glowX, top: glowY }}
        className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[120px] pointer-events-none"
      />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 30%, black, transparent)",
        }}
      />

      {/* floating particles */}
      {[...Array(14)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-accent/60"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 37) % 90 + 5}%`,
            width: 3 + (i % 3),
            height: 3 + (i % 3),
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{
            duration: 6 + (i % 4),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-center">
        {/* left copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
              <span className="relative rounded-full bg-accent h-2 w-2" />
            </span>
            Shopify Growth Studio — booking Q3
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight"
          >
            Building Shopify stores that{" "}
            <span className="text-gradient-primary">convert visitors</span>{" "}
            into customers.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            We help ecommerce brands scale with high-converting Shopify design,
            conversion optimization, and sales-focused marketing strategy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-gradient-primary text-white border-0 shadow-glow hover:opacity-95 px-6"
            >
              <a href="#audit">
                Book Free Strategy Call <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 rounded-full glass px-6 hover:bg-white/10"
            >
              <a href="#work">View Portfolio</a>
            </Button>
          </motion.div>

          {/* trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { v: "120+", l: "Stores scaled" },
              { v: "3.4×", l: "Avg CVR lift" },
              { v: "$48M", l: "Revenue driven" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl sm:text-3xl font-display font-bold text-gradient">
                  {s.v}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* right: 3D dashboard scene */}
        <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
          <motion.div
            style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1200 }}
            className="absolute inset-0"
          >
            {/* main dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="absolute top-6 right-0 w-[380px] glass-strong rounded-2xl p-5 shadow-glow-lg glow-border animate-float-slow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center">
                    <ShoppingBag className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Revenue</div>
                    <div className="text-sm font-semibold">Last 30 days</div>
                  </div>
                </div>
                <span className="text-xs text-accent">+42.8%</span>
              </div>
              <div className="mt-3 text-3xl font-display font-bold text-gradient">
                $284,920
              </div>
              {/* chart */}
              <div className="mt-4 h-24 relative">
                <svg viewBox="0 0 300 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="ga" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.78 0.18 310)" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="oklch(0.78 0.18 310)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M0,80 C40,60 70,70 100,50 C140,25 180,55 220,30 C250,15 280,25 300,10 L300,100 L0,100 Z"
                    fill="url(#ga)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.4, delay: 0.6 }}
                  />
                  <motion.path
                    d="M0,80 C40,60 70,70 100,50 C140,25 180,55 220,30 C250,15 280,25 300,10"
                    fill="none"
                    stroke="oklch(0.78 0.18 310)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.4, delay: 0.6 }}
                  />
                </svg>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-2 text-[10px] text-muted-foreground">
                {["Mon", "Wed", "Fri"].map((d) => (
                  <div key={d}>{d}</div>
                ))}
              </div>
            </motion.div>

            {/* conversion card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="absolute top-48 -left-4 w-[230px] glass-strong rounded-2xl p-4 shadow-glow glow-border animate-float"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <BarChart3 className="h-3.5 w-3.5 text-accent" /> Conversion rate
              </div>
              <div className="mt-1 text-2xl font-display font-bold">4.82%</div>
              <div className="mt-3 flex items-end gap-1.5 h-12">
                {[40, 65, 50, 80, 70, 95, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: 0.7 + i * 0.06 }}
                    className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent"
                  />
                ))}
              </div>
            </motion.div>

            {/* live sale toast */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-4 right-8 w-[260px] glass-strong rounded-2xl p-3.5 shadow-glow glow-border"
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-primary grid place-items-center animate-glow-pulse">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted-foreground">New sale · Brooklyn</div>
                  <div className="text-sm font-semibold truncate">
                    Sienna Linen Set — $189
                  </div>
                </div>
              </div>
            </motion.div>

            {/* badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute top-0 left-8 glass rounded-full px-3 py-1.5 text-xs flex items-center gap-1.5 animate-float"
            >
              <Sparkles className="h-3 w-3 text-accent" />
              Shopify Plus Partner
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute bottom-32 -left-2 glass rounded-full px-3 py-1.5 text-xs flex items-center gap-1.5 animate-float-slow"
            >
              <TrendingUp className="h-3 w-3 text-accent" />
              CRO Certified
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
