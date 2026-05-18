const brands = [
  "AURELIA", "NORTH&CO", "MAISON ROY", "VERVE", "KINFOLK", "ATELIER 9",
  "HALCYON", "FÆR", "OBSIDIAN", "LUMEN", "STÖR", "PARALLEL",
];

export function Marquee() {
  return (
    <section className="relative py-14 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by ambitious ecommerce teams
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-16 animate-marquee w-max">
          {[...brands, ...brands].map((b, i) => (
            <div
              key={i}
              className="text-2xl font-display font-semibold tracking-[0.2em] text-muted-foreground/70 hover:text-foreground transition-colors whitespace-nowrap"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
