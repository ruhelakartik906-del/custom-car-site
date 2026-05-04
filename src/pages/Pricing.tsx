import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";

const tiers = [
  {
    name: "Essential Detail",
    price: "₹ 6,500",
    desc: "A complete refresh — interior, exterior and wheels.",
    features: ["Two-bucket foam wash", "Clay decontamination", "Interior vacuum + dressing", "Tyre shine + glass polish", "Light wax sealant"],
    cta: "Book Essential",
  },
  {
    name: "Ceramic Signature",
    price: "₹ 32,000",
    desc: "Our most-loved package — paint correction + 3-year ceramic coating.",
    features: ["1-stage paint correction", "9H GYEON / Gtechniq coating", "Wheel-face coating", "Glass hydrophobic coating", "3-year warranty"],
    cta: "Book Signature",
    featured: true,
  },
  {
    name: "PPF + Ceramic",
    price: "₹ 1,25,000",
    desc: "Full-body XPEL paint protection film with ceramic top-coat.",
    features: ["XPEL Ultimate Plus PPF (full body)", "9H ceramic over PPF", "Headlight PPF", "10-year yellowing warranty", "Annual inspection"],
    cta: "Book Ultimate",
  },
];

const Pricing = () => {
  return (
    <div>
      <PageHero eyebrow="Transparent Pricing" title="Packages & Pricing" subtitle="Honest, all-inclusive packages — no upsells, no surprises. Final quotes confirmed after a free in-studio inspection." />

      <section className="py-20">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {tiers.map((t) => (
            <div key={t.name} className={`relative bg-card border rounded-sm p-8 transition-smooth ${t.featured ? "border-gold shadow-gold" : "border-border"}`}>
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-sm">Most Popular</span>
              )}
              <h3 className="font-display text-3xl">{t.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              <div className="mt-6 pb-6 border-b border-border">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Starting from</p>
                <p className="mt-1 font-display text-4xl text-gold">{t.price}</p>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-gold shrink-0" /> {f}</li>
                ))}
              </ul>
              <Link to="/contact" className={`mt-8 inline-flex w-full items-center justify-center gap-2 px-6 py-3 rounded-sm text-xs uppercase tracking-[0.2em] transition-smooth ${t.featured ? "bg-gradient-gold text-primary-foreground hover:shadow-gold" : "border border-foreground/30 text-foreground hover:border-gold hover:text-gold"}`}>
                {t.cta} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-border bg-secondary/20">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-4xl text-center">Add-Ons</h2>
          <div className="mt-4 mx-auto h-px w-20 gold-divider" />
          <div className="mt-10 divide-y divide-border border border-border rounded-sm">
            {[
              ["Headlight PPF (pair)", "₹ 4,500"],
              ["Alloy wheel ceramic coating (set of 4)", "₹ 7,500"],
              ["Interior leather coating", "₹ 8,500"],
              ["Engine bay detail + dressing", "₹ 3,500"],
              ["Underbody anti-rust coating", "₹ 9,500"],
              ["Glass hydrophobic coating", "₹ 4,000"],
            ].map(([n, p]) => (
              <div key={n} className="flex justify-between items-center px-6 py-4 hover:bg-secondary/40 transition-smooth">
                <span className="text-sm">{n}</span>
                <span className="font-display text-xl text-gold">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;