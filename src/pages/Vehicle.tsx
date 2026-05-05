import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Gauge, Cog, Compass, Star, Shield, Sparkles, Droplets, Sun, Mountain, Wrench, Award, Trophy, Crown, Fuel, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import scorpio from "@/assets/vehicle-scorpio.jpg";
import fortuner from "@/assets/vehicle-fortuner.jpg";

type Spec = { icon: typeof Gauge; label: string; value: string };
type Benefit = { icon: typeof Gauge; title: string; desc: string };
type VehicleData = {
  name: string; eyebrow: string; tagline: string; img: string; about: string;
  benefits: Benefit[]; bullets: string[]; specs: Spec[]; gallery: string[];
  startingPrice: string; ctaQuestion: string;
};

const data: Record<string, VehicleData> = {
  scorpio: {
    name: "Mahindra Scorpio",
    eyebrow: "Made for the Beast",
    tagline: "Specialist detailing for the Scorpio Classic, Scorpio-N and Scorpio Z8L.",
    img: scorpio,
    about: "The Scorpio's bold cladding, large alloy faces and high-impact bonnet make it a stone-chip magnet on Indian highways. Our PPF kits are pre-cut for every Scorpio variant, and our coatings are tuned for matte, gloss and dual-tone finishes.",
    benefits: [
      { icon: Mountain, title: "Built for Tough Terrain", desc: "Body-on-frame chassis aur high ground clearance — kharab roads aur off-road trails dono ke liye perfect." },
      { icon: Shield, title: "Rugged Stone-Chip Defense", desc: "Pre-cut PPF kits bonnet, fenders aur bumper ko highway pe stone-chips se safe rakhte hain." },
      { icon: Sparkles, title: "Deep Mirror Gloss", desc: "9H ceramic coating Napoli Black aur dual-tone finishes par showroom-jaisi gehri shine deti hai." },
      { icon: Sun, title: "UV & Heat Protection", desc: "Coating paint ko sun fade, oxidation aur Indian summer heat se long-term protect karti hai." },
      { icon: Droplets, title: "Easy Wash Hydrophobic", desc: "Pani aur mud beads hoke beh jaate hain — har weekend dhone ki zarurat nahi padti." },
      { icon: Wrench, title: "Long-Term Resale Value", desc: "Interior leather aur underbody anti-rust treatment Scorpio ki resale value high banaye rakhte hain." },
    ],
    bullets: ["Pre-cut PPF templates for every variant", "Matte-safe coatings for Scorpio Black Edition", "Roof-rail and ladder protection", "Gloss-deepening polish for Napoli Black"],
    specs: [
      { icon: Gauge, label: "Engine Options", value: "mHawk Diesel · mStallion Petrol" },
      { icon: Cog, label: "Transmission", value: "6-speed MT / 6-speed AT" },
      { icon: Compass, label: "Drive", value: "2WD / 4WD (4XPLOR)" },
      { icon: Star, label: "Z8 L Highlights", value: "Sunroof · Dual-zone climate · ADAS-ready" },
    ],
    gallery: [scorpio, scorpio, scorpio, scorpio],
    startingPrice: "₹ 24,999",
    ctaQuestion: "Have questions about the Scorpio-N or Classic?",
  },
  fortuner: {
    name: "Toyota Fortuner",
    eyebrow: "King of the Highway",
    tagline: "Concours-grade detailing for the Fortuner, Legender and GR-Sport.",
    img: fortuner,
    about: "The Fortuner deserves a finish as imposing as its stance. We specialize in mirror-deep gloss for Attitude Black and Super White, with full-body PPF for owners who tour the country and refuse to compromise.",
    benefits: [
      { icon: Crown, title: "King-of-Road Presence", desc: "Imposing stance aur premium finish — Fortuner ko sabse alag aur commanding look milta hai." },
      { icon: Shield, title: "Full-Body PPF Armor", desc: "Self-healing transparent film puri body ko scratches, swirls aur stone-chips se bachata hai." },
      { icon: Sparkles, title: "10H Diamond Gloss", desc: "Attitude Black aur Super White par mirror-deep wet look jo barso tak chalti hai." },
      { icon: Fuel, title: "Long-Haul Ready", desc: "Underbody coating aur sealants country tours aur highways ke liye fully prepared rakhte hain." },
      { icon: Award, title: "Concours-Grade Detailing", desc: "Hand-polish aur multi-stage correction Toyota ke hard clear-coat par flawless finish dete hain." },
      { icon: Users, title: "Premium Interior Care", desc: "Leather conditioning aur wood-trim restoration cabin ko brand-new feel deta hai har trip pe." },
    ],
    bullets: ["Specialist polish on Toyota's hard clear-coat", "Tailored kits for Legender front-end", "Chrome trim sealants to prevent pitting", "Long-haul-ready underbody coating"],
    specs: [
      { icon: Gauge, label: "Engine Options", value: "2.8L Diesel · 2.7L Petrol" },
      { icon: Cog, label: "Transmission", value: "6-speed MT / 6-speed AT" },
      { icon: Compass, label: "Drive", value: "2x4 / 4x4 with Diff-Lock" },
      { icon: Star, label: "Legender Highlights", value: "LED DRLs · Powered tailgate · Premium leather" },
    ],
    gallery: [fortuner, fortuner, fortuner, fortuner],
    startingPrice: "₹ 34,999",
    ctaQuestion: "Fortuner variants got you thinking?",
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
          <div className="aspect-[16/10] overflow-hidden rounded-2xl shadow-elegant order-2 lg:order-1">
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

      {/* SPECIFICATIONS */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Specifications</p>
            <h2 className="font-display text-4xl md:text-5xl">Built for serious owners</h2>
            <div className="mt-4 mx-auto h-px w-20 gold-divider" />
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {v.specs.map((s) => (
              <div key={s.label} className="bg-card border border-border p-7 rounded-2xl hover:border-gold transition-smooth">
                <s.icon className="h-7 w-7 text-gold" />
                <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
                <p className="mt-2 text-foreground font-medium leading-snug">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 border-t border-border bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Gallery</p>
            <h2 className="font-display text-4xl md:text-5xl">Every angle, perfected</h2>
            <div className="mt-4 mx-auto h-px w-20 gold-divider" />
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {v.gallery.map((g, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-2xl shadow-sm">
                <img src={g} alt={`${v.name} angle ${i + 1}`} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Why You'll Love It</p>
            <h2 className="font-display text-4xl md:text-5xl">Key Benefits</h2>
            <div className="mt-4 mx-auto h-px w-20 gold-divider" />
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {v.benefits.map((b, i) => (
              <div
                key={b.title}
                className="bg-card border border-border p-7 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-gold"
              >
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-gold/10 grid place-items-center">
                    <b.icon className="h-6 w-6 text-gold" />
                  </div>
                  <span className="font-display text-3xl text-gold/30">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-5 font-display text-xl text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-20 border-t border-border bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white rounded-2xl shadow-2xl border border-border p-10 text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-black">{v.ctaQuestion} 🤔</h3>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Talk to our specialists about the {v.name} and get personalised recommendations for your variant.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-6 py-3 rounded-xl transition-colors">
                <MessageCircle className="h-4 w-4" /> Chat Now
              </a>
              <a href="tel:+910000000000" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-6 py-3 rounded-xl transition-colors">
                <Phone className="h-4 w-4" /> Talk to Counselor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vehicle;