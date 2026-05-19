import { Instagram, Twitter, Linkedin, Github } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[300px] w-[700px] rounded-full bg-primary/20 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="#top" className="flex items-center gap-2.5 group">
              <div className="h-10 w-10 rounded-lg overflow-hidden shadow-glow ring-1 ring-accent/30">
                <img src={logo} alt="AD AGENCY logo" className="h-full w-full object-cover" />
              </div>
              <span className="font-display font-semibold text-lg tracking-tight">AD AGENCY</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              A Shopify growth studio building conversion-led storefronts and the
              marketing systems that scale them.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full glass grid place-items-center hover:bg-gradient-primary transition-colors"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Studio</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["Services", "Work", "Process", "About", "Journal"].map((l) => (
                <li key={l}><a href="#" className="hover:text-foreground text-muted-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Get Free Store Advice</div>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><a href="tel:+2347052635517" className="hover:text-foreground transition-colors">+234 705 263 5517</a></li>
              <li><a href="mailto:akindurodeorah@gmail.com" className="hover:text-foreground transition-colors break-all">akindurodeorah@gmail.com</a></li>
              <li><a href="#audit" className="hover:text-foreground transition-colors">Get free store advice →</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} AD AGENCY Studio. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
