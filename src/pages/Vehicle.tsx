import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import scorpio from "@/assets/vehicle-scorpio.jpg";
import fortuner from "@/assets/vehicle-fortuner.jpg";

const data: Record<string, { name: string; eyebrow: string; tagline: string; img: string; about: string; recommended: string[]; bullets: string[] }> = {
  scorpio: {
    name: "Mahindra Scorpio",
    eyebrow: "Made for the Beast",
    tagline: "Specialist detailing for the Scorpio Classic, Scorpio-N and Scorpio Z8L.",
    img: scorpio,
    about: "The Scorpio's bold cladding, large alloy faces and high-impact bonnet make it a stone-chip magnet on Indian highways. Our PPF kits are pre-cut for every Scorpio variant, and our coatings are tuned for matte, gloss and dual-tone finishes.",
    recommended: ["Front-end PPF (bonnet, fenders, bumper)", "9H Ceramic Coating (full body)", "Alloy wheel coating", "Interior leather & fabric protection", "Underbody anti-rust treatment"],
    bullets: ["Pre-cut PPF templates for every variant", "Matte-safe coatings for Scorpio Black Edition", "Roof-rail and ladder protection", "Gloss-deepening polish for Napoli Black"],
  },
  fortuner: {
    name: "Toyota Fortuner",
    eyebrow: "King of the Highway",
    tagline: "Concours-grade detailing for the Fortuner, Legender and GR-Sport.",
    img: fortuner,
    about: "The Fortuner deserves a finish as imposing as its stance. We specialize in mirror-deep gloss for Attitude Black and Super White, with full-body PPF for owners who tour the country and refuse to compromise.",
    recommended: ["Full-body PPF kit", "10H Diamond Ceramic Coating", "Interior leather & wood-trim restoration", "Headlight PPF + clarity restoration", "Chrome-grille protection film"],
    bullets: ["Specialist polish on Toyota's hard clear-coat", "Tailored kits for Legender front-end", "Chrome trim sealants to prevent pitting", "Long-haul-ready underbody coating"],
  },
};

const Vehicle = () => {
  const { slug = "" } = useParams();
  const v = data[slug];
  if (!v) return <Navigate to="/" replace />;

  return (
    <div>
      <PageHero eyebrow={v.eyebrow} title={v.name} subtitle={v.tagline} />

      <section className="py-20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="aspect-[16/10] overflow-hidden rounded-sm shadow-elegant order-2 lg:order-1">
            <img src={v.img} alt={v.name} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-4xl">Why owners choose us</h2>
            <div className="mt-4 h-px w-20 gold-divider" />
            <p className="mt-6 text-muted-foreground leading-relaxed">{v.about}</p>
            <ul className="mt-8 space-y-3">
              {v.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-gold shrink-0" /> {b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="font-display text-4xl text-center">Recommended Packages</h2>
          <div className="mt-4 mx-auto h-px w-20 gold-divider" />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {v.recommended.map((r, i) => (
              <div key={r} className="bg-card border border-border p-7 rounded-sm">
                <div className="font-display text-3xl text-gold/40">{String(i + 1).padStart(2, "0")}</div>
                <p className="mt-3 text-foreground">{r}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground rounded-sm text-sm tracking-[0.2em] uppercase hover:shadow-gold transition-smooth">
              Get a quote for your {v.name} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vehicle;