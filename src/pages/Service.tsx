import { useParams, Link, Navigate } from "react-router-dom";
import { CheckCircle2, ArrowRight, Clock, Shield, Award } from "lucide-react";
import PageHero from "@/components/PageHero";
import ceramic from "@/assets/service-ceramic.jpg";
import ppf from "@/assets/service-ppf.jpg";
import detailing from "@/assets/service-detailing.jpg";
import paint from "@/assets/service-paint.jpg";

const data: Record<string, {
  eyebrow: string; title: string; subtitle: string; img: string;
  intro: string; features: string[]; durability: string; time: string; from: string;
}> = {
  "ceramic-coating": {
    eyebrow: "9H Ceramic Protection",
    title: "Ceramic Coating",
    subtitle: "Liquid glass that bonds to your clear-coat — for years of effortless gloss and self-cleaning hydrophobicity.",
    img: ceramic,
    intro: "Our flagship 9H ceramic coatings form a permanent semi-rigid layer over your paint, sealing in clarity and locking out swirl marks, bird droppings, tree sap and UV oxidation. Water beads, dust slides off, and weekly washes go from chore to ritual.",
    features: [
      "9H surface hardness rating",
      "Up to 5 years of certified protection",
      "Hydrophobic water-beading effect",
      "UV and chemical resistance",
      "Mirror-deep gloss enhancement",
      "Easier weekly maintenance",
    ],
    durability: "3 – 5 years",
    time: "3 – 5 days",
    from: "₹ 28,000",
  },
  "ppf": {
    eyebrow: "Self-Healing Armor",
    title: "Paint Protection Film",
    subtitle: "An invisible TPU shield that absorbs stone-chips, scratches and minor abrasion — and heals itself in the sun.",
    img: ppf,
    intro: "PPF is the only true physical barrier against stone-chips on highways, parking-lot dings and abrasion from car covers. Our XPEL & STEK films are optically clear, self-healing under heat, and warrantied against yellowing for 10 years.",
    features: [
      "Genuine XPEL Ultimate Plus / STEK",
      "Self-healing top-coat",
      "Stone-chip & scratch protection",
      "10-year yellowing warranty",
      "Full body, front-end or hi-impact kits",
      "Hand-cut + plotter precision install",
    ],
    durability: "8 – 10 years",
    time: "4 – 7 days",
    from: "₹ 45,000",
  },
  "car-detailing": {
    eyebrow: "Concours-Level Care",
    title: "Car Detailing",
    subtitle: "Engine bay to under-body. Door jambs to exhaust tips. Every micron, by hand.",
    img: detailing,
    intro: "A true detail isn't a wash — it's a complete reset. We strip every contaminant, shampoo every fibre, condition every leather panel, and treat every plastic. Walk back in to a car that smells, looks and feels new again.",
    features: [
      "Two-bucket pH-neutral foam wash",
      "Iron decontamination + clay",
      "Interior steam + extraction",
      "Leather pH cleaning & conditioning",
      "Engine bay degrease + dressing",
      "Tyre & trim long-life dressing",
    ],
    durability: "3 – 4 months",
    time: "1 – 2 days",
    from: "₹ 6,500",
  },
  "paint-correction": {
    eyebrow: "Mirror Restoration",
    title: "Paint Correction",
    subtitle: "Multi-stage machine polishing to remove swirls, holograms and oxidation — restoring factory clarity.",
    img: paint,
    intro: "Years of automated washes leave your paint covered in fine swirls and holograms that dull the finish. Our paint-correction process uses calibrated rotary and DA polishers with progressively finer compounds to permanently remove defects — not hide them.",
    features: [
      "1-stage / 2-stage / 3-stage options",
      "Defect removal up to 95%",
      "Paint-thickness measured throughout",
      "Swirls, holograms, RIDS removed",
      "Gloss-meter readings shared",
      "Best paired with ceramic coating",
    ],
    durability: "Permanent (until next abuse)",
    time: "1 – 3 days",
    from: "₹ 12,000",
  },
};

const Service = () => {
  const { slug = "" } = useParams();
  const s = data[slug];
  if (!s) return <Navigate to="/" replace />;

  return (
    <div>
      <PageHero eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />

      <section className="py-20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-elegant">
            <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <h2 className="font-display text-4xl">What's included</h2>
            <div className="mt-4 h-px w-20 gold-divider" />
            <p className="mt-6 text-muted-foreground leading-relaxed">{s.intro}</p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {s.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-gold shrink-0" /> {f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-border bg-secondary/20">
        <div className="container mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {[
            { i: Shield, l: "Durability", v: s.durability },
            { i: Clock, l: "Studio Time", v: s.time },
            { i: Award, l: "Starting From", v: s.from },
          ].map((b) => (
            <div key={b.l}>
              <b.i className="h-7 w-7 text-gold mx-auto" />
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{b.l}</p>
              <p className="mt-2 font-display text-2xl">{b.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 text-center">
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground rounded-sm text-sm tracking-[0.2em] uppercase hover:shadow-gold transition-smooth">
          Book this service <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
};

export default Service;