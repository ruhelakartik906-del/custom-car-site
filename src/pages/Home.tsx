import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Sparkles,
  Droplets,
  Award,
  CheckCircle2,
  Car,
  SprayCan,
  Phone,
  MessageCircle,
  MapPin,
  Globe,
  Gem,
  Wrench,
  Disc3,
  Cog,
  Users,
  Heart,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import heroCar from "@/assets/hero-car.jpg";
import ceramic from "@/assets/service-ceramic.jpg";
import ppf from "@/assets/service-ppf.jpg";
import detailing from "@/assets/service-detailing.jpg";
import paint from "@/assets/service-paint.jpg";

const brands = [
  "Fortuner",
  "Thar",
  "Scorpio N",
  "BMW",
  "Mercedes",
  "Audi",
  "Safari",
  "Creta",
  "Defender",
  "Range Rover",
];

const services = [
  { title: "Paint Protection Film", desc: "Self-healing transparent armor against stone-chips, swirls and abrasion.", img: ppf, to: "/services/ppf", Icon: Shield },
  { title: "Ceramic Coating", desc: "9H hydrophobic glass shield with deep mirror gloss and long-term protection.", img: ceramic, to: "/services/ceramic-coating", Icon: Sparkles },
  { title: "Graphene Coating", desc: "Next-gen graphene-infused coating for superior hardness and slickness.", img: ceramic, to: "/services/graphene-coating", Icon: Gem },
  { title: "Paint Correction", desc: "Multi-stage compounding to remove swirls, holograms and oxidation.", img: paint, to: "/services/paint-correction", Icon: Award },
  { title: "Interior Detailing", desc: "Steam sanitization, leather conditioning and deep cabin restoration.", img: detailing, to: "/services/interior-detailing", Icon: Droplets },
  { title: "Alloy Wheel Detailing", desc: "Brake-dust removal, polishing and premium wheel protection.", img: paint, to: "/services/alloy-wheel-detailing", Icon: Disc3 },
];

const ppfPrevents = ["Stone Chips", "Minor Scratches", "Swirl Marks", "UV Damage", "Paint Fading", "Road Debris Damage"];
const ppfBenefits = ["Self-Healing Technology", "High Gloss Finish", "Hydrophobic Surface", "Non-Yellowing Material", "Long-Term Paint Protection", "Enhanced Resale Value"];
const ceramicBenefits = ["Deep Mirror Gloss Finish", "Hydrophobic Water Beading", "UV & Oxidation Protection", "Easy Car Maintenance", "Enhanced Paint Depth & Shine", "Long-Lasting Protection"];
const correctionRemoves = ["Swirl Marks", "Minor Scratches", "Holograms", "Water Spot Marks", "Paint Oxidation", "Surface Imperfections"];
const interiorIncludes = ["Deep Vacuum Cleaning", "Seat Shampooing", "Leather Conditioning", "Dashboard Polishing", "Steam Sanitization", "Odor Removal"];

const whyUs = [
  { Icon: Gem, t: "Premium Quality Products", d: "Trusted professional-grade detailing products and advanced coating technologies." },
  { Icon: Users, t: "Skilled Professionals", d: "Trained detailing experts who handle every vehicle with precision and care." },
  { Icon: Award, t: "Luxury Car Care Experience", d: "From hatchbacks to luxury SUVs and sports cars — premium service for every car." },
  { Icon: Heart, t: "Customer Satisfaction Focused", d: "Quality workmanship, long-lasting protection and exceptional customer experience." },
  { Icon: Shield, t: "Advanced Protection", d: "Industry-leading PPF, ceramic and graphene solutions for maximum defence." },
  { Icon: Sparkles, t: "Showroom Finish", d: "Meticulous attention to detail that delivers mirror-like gloss every time." },
];

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-sm">
    <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />
    <span>{children}</span>
  </li>
);

const Home = () => {
  return (
    <div>
      <HeroSlider />

      {/* INTRO */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">CLNHYGEN · Meerut</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            CLNHYGEN — Premium Car Detailing <span className="text-gold">Services in Meerut</span>
          </h1>
          <div className="mt-6 mx-auto h-px w-24 gold-divider" />
          <p className="mt-7 text-muted-foreground leading-relaxed text-base md:text-lg">
            Welcome to <strong className="text-foreground">CLNHYGEN</strong> — the trusted destination for premium car
            detailing in Meerut. We specialize in <strong className="text-foreground">Paint Protection Film (PPF)</strong>,
            <strong className="text-foreground"> ceramic coating</strong>, paint correction, interior detailing and luxury
            car care solutions designed to keep your vehicle protected, glossy and showroom-ready.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether you own a Fortuner, Thar, Scorpio N, BMW, Mercedes, Audi, Safari, Creta — or any luxury or daily-driven
            vehicle — our expert team delivers unmatched finishing, deep protection and premium detailing results.
          </p>
        </div>

        {/* Brands marquee */}
        <div className="mt-12 relative overflow-hidden border-y border-border bg-secondary/40 py-5">
          <div className="flex gap-12 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
            {[...brands, ...brands, ...brands].map((b, i) => (
              <div key={i} className="flex items-center gap-3 text-foreground/70">
                <Car className="h-4 w-4 text-gold" />
                <span className="font-display text-lg tracking-wider uppercase">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SHOWROOM */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">What We Offer</p>
            <h2 className="font-display text-4xl md:text-5xl">Premium Detailing Services</h2>
            <div className="mt-6 h-px w-20 gold-divider mx-auto" />
            <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
              Professional-grade products, modern equipment and industry-leading techniques — for every vehicle, every finish.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-gold transition-smooth shadow-sm hover:shadow-elegant">
                <div className="aspect-[5/3] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 grid place-items-center rounded-full bg-gold/10">
                      <s.Icon className="h-5 w-5 text-gold" />
                    </div>
                    <h3 className="font-display text-xl">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <Link to={s.to} className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:gap-3 transition-all">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1 — PPF (image left) */}
      <section className="py-24 border-b border-border bg-secondary/20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-[20px] shadow-elegant order-2 lg:order-1">
            <img src={ppf} alt="Paint Protection Film in Meerut" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Section 01 · Invisible Armor</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">Paint Protection Film (PPF) in Meerut</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Protect your car's original paint with premium Paint Protection Film — engineered for long-term defence
              against everyday road hazards and harsh environmental damage.
            </p>

            <h3 className="mt-8 font-display text-lg">What it Prevents</h3>
            <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {ppfPrevents.map((p) => <Bullet key={p}>{p}</Bullet>)}
            </ul>

            <h3 className="mt-8 font-display text-lg">Key Benefits</h3>
            <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {ppfBenefits.map((p) => <Bullet key={p}>{p}</Bullet>)}
            </ul>

            <Link to="/services/ppf" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold tracking-wide uppercase hover:shadow-elegant transition-smooth">
              Explore PPF <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Ceramic (image right) */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Section 02 · Liquid Glass</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">Ceramic Coating Experts in Meerut</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Our premium ceramic coatings deliver a <strong className="text-foreground">deep mirror gloss</strong>,
              superior <strong className="text-foreground">water repellency</strong> and long-lasting protection against
              dirt, UV rays and environmental contamination.
            </p>

            <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {ceramicBenefits.map((p) => <Bullet key={p}>{p}</Bullet>)}
            </ul>

            <p className="mt-6 text-sm text-muted-foreground">
              We use high-quality ceramic and graphene coating products for maximum durability and performance.
            </p>

            <Link to="/services/ceramic-coating" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gold text-primary rounded-full text-sm font-semibold tracking-wide uppercase hover:shadow-gold transition-smooth">
              Explore Ceramic <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-[20px] shadow-elegant">
            <img src={ceramic} alt="Ceramic Coating in Meerut" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 3 — Paint Correction & Interior */}
      <section className="py-24 border-b border-border bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Section 03 · Restoration</p>
            <h2 className="font-display text-4xl md:text-5xl">Paint Correction & Interior Detailing</h2>
            <div className="mt-6 h-px w-20 gold-divider mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
              <img src={paint} alt="Paint Correction Meerut" loading="lazy" className="w-full aspect-[16/9] object-cover" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 grid place-items-center rounded-full bg-gold/10"><Wrench className="h-5 w-5 text-gold" /></div>
                  <h3 className="font-display text-2xl">Paint Correction</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Advanced machine polishing that erases swirl marks and restores a flawless
                  <strong className="text-foreground"> showroom finish</strong> to your paintwork.
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {correctionRemoves.map((p) => <Bullet key={p}>{p}</Bullet>)}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
              <img src={detailing} alt="Interior Detailing Meerut" loading="lazy" className="w-full aspect-[16/9] object-cover" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 grid place-items-center rounded-full bg-gold/10"><SprayCan className="h-5 w-5 text-gold" /></div>
                  <h3 className="font-display text-2xl">Interior Detailing</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Deep <strong className="text-foreground">steam sanitization</strong>, premium
                  <strong className="text-foreground"> leather conditioning</strong> and full cabin restoration for a
                  cleaner, healthier, luxury feel.
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {interiorIncludes.map((p) => <Bullet key={p}>{p}</Bullet>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Why Choose</p>
            <h2 className="font-display text-4xl md:text-5xl">Why Choose CLNHYGEN</h2>
            <div className="mt-6 h-px w-20 gold-divider mx-auto" />
            <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
              One of the most trusted detailing studios in Meerut for PPF, ceramic coating and luxury car care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((f) => (
              <div key={f.t} className="group rounded-2xl border border-border bg-card p-8 text-center hover:border-gold hover:-translate-y-1 transition-all">
                <div className="mx-auto h-14 w-14 grid place-items-center rounded-full bg-gradient-gold mb-5">
                  <f.Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg">{f.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCar} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative container mx-auto py-24">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Book Premium Services</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Best PPF in Meerut · Ceramic Coating in Meerut · Luxury Car Detailing
            </h2>
            <p className="mt-6 text-primary-foreground/80 max-w-2xl mx-auto">
              Protect your investment with professional car detailing and paint protection at CLNHYGEN.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
              <div className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/5 p-5">
                <MapPin className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold mb-1">Address</p>
                  <p className="text-sm">Mohkampur Industrial Area, Meerut, Uttar Pradesh</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/5 p-5">
                <Phone className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold mb-1">Phone</p>
                  <p className="text-sm">+91 84499 00095</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/5 p-5">
                <Globe className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold mb-1">Web</p>
                  <p className="text-sm">www.clnhygen.com</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="tel:+918449900095" className="inline-flex items-center gap-2 bg-gold text-primary text-sm font-semibold px-7 py-3 rounded-full hover:shadow-gold transition-smooth uppercase tracking-wide">
                <Phone className="h-4 w-4" /> Call +91 84499 00095
              </a>
              <a href="https://wa.me/918449900095" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-7 py-3 rounded-full transition-colors uppercase tracking-wide">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-7 py-3 rounded-full hover:bg-white/10 transition-smooth uppercase tracking-wide">
                Book Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;