import { Award, Sparkles, Users, Wrench, ShieldCheck, Gem, Car, MapPin, Phone, Globe, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import detailing from "@/assets/service-detailing.jpg";

const services = [
  "Paint Protection Film (PPF)",
  "Ceramic Coating",
  "Graphene Coating",
  "Paint Correction",
  "Interior Detailing",
  "Exterior Detailing",
  "Car Spa & Foam Wash",
  "Dent Paint Services",
  "Headlight Restoration",
  "Engine Bay Detailing",
  "Windshield Protection Film",
  "Sun Control Film",
  "Anti Rust Coating",
  "Alloy Wheel Detailing",
  "Bike Detailing Services",
];

const whyTrust = [
  "Premium Imported Products",
  "Self-Healing PPF Technology",
  "Advanced Machine Polishing",
  "Luxury Car Handling Experience",
  "High Gloss Finishing Standards",
  "Professional Installation Techniques",
  "Attention to Every Detail",
];

const vehicles = [
  "Thar", "Scorpio N", "Fortuner", "BMW", "Audi", "Mercedes-Benz",
  "Defender", "Creta", "Safari", "XUV700", "Nexon", "Punch EV",
  "Superbikes & Premium Motorcycles",
];

const commitment = [
  "Premium TPU Paint Protection Films",
  "Advanced Ceramic & Graphene Coatings",
  "Professional Detailing Equipment",
  "Safe Cleaning Techniques",
  "Luxury-Grade Detailing Products",
];

const promises = [
  "Better Protection",
  "Deeper Gloss",
  "Long Lasting Finish",
  "Enhanced Vehicle Appearance",
  "Premium Customer Experience",
];

const studio = [
  "Clean Working Environment",
  "Safe Vehicle Handling",
  "Professional Service Standards",
  "Detail-Focused Workflow",
];

const matters = [
  "Protect Original Paint",
  "Maintain Vehicle Value",
  "Improve Appearance",
  "Reduce Paint Damage",
  "Enhance Driving Experience",
  "Preserve Luxury Finish",
];

const philosophy = ["Precision", "Protection", "Perfection", "Passion for Automobiles"];

const faqs = [
  {
    q: "What makes CLNHYGEN different from regular car washing centers?",
    a: "CLNHYGEN focuses on premium detailing, paint protection, luxury finishing, and advanced vehicle care solutions rather than basic washing services.",
  },
  {
    q: "Do you handle luxury vehicles?",
    a: "Yes, we specialize in detailing luxury cars, SUVs, sports cars, EVs, and premium motorcycles.",
  },
  {
    q: "Which products do you use?",
    a: "We use premium imported detailing products, TPU PPF films, ceramic coatings, and advanced detailing equipment.",
  },
  {
    q: "Do you provide paint protection services?",
    a: "Yes, we provide Paint Protection Film (PPF), ceramic coating, graphene coating, and windshield protection solutions.",
  },
  {
    q: "Where is CLNHYGEN located?",
    a: "CLNHYGEN is located in Mohkampur Industrial Area, Meerut, Uttar Pradesh.",
  },
];

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-muted-foreground">
    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
    <span>{children}</span>
  </li>
);

const About = () => (
  <div>
    <PageHero
      eyebrow="About CLNHYGEN"
      title="Perfection in Every Detail"
      subtitle="Premium Car Detailing Studio in Meerut — trusted by car enthusiasts, luxury vehicle owners, and daily drivers."
    />

    {/* Intro */}
    <section className="py-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
          <img src={detailing} alt="Inside the CLNHYGEN detailing studio in Meerut" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Who We Are</p>
          <h2 className="font-display text-4xl">Premium Automotive Detailing Experts</h2>
          <div className="mt-4 h-px w-20 gold-divider" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Welcome to CLNHYGEN — one of the fastest-growing premium car detailing studios in Meerut. We specialize in advanced automotive detailing, Paint Protection Film (PPF), ceramic coating, graphene coating, paint correction, interior detailing, and luxury vehicle protection solutions designed to preserve your vehicle's appearance, value, and long-term condition.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our mission is simple — deliver world-class car care services with premium finishing, advanced protection, and unmatched attention to detail.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {["Advanced Detailing Technology", "Premium Imported Products", "Skilled Professionals", "Luxury Finishing Standards", "Customized Vehicle Care Solutions"].map((b) => (
              <Bullet key={b}>{b}</Bullet>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 border-t border-border bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">What We Specialize In</p>
          <h2 className="font-display text-4xl">Complete Premium Car Care Solutions</h2>
          <div className="mt-4 h-px w-20 gold-divider mx-auto" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            A wide range of professional detailing and protection services — every job performed with precision, care, and premium-quality products.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s} className="bg-card border border-border p-5 rounded-sm flex items-center gap-3">
              <Gem className="h-5 w-5 text-gold shrink-0" />
              <span className="font-medium">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Different */}
    <section className="py-20 border-t border-border">
      <div className="container mx-auto grid lg:grid-cols-2 gap-14">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Why CLNHYGEN is Different</p>
          <h2 className="font-display text-4xl">Premium Quality. Professional Results.</h2>
          <div className="mt-4 h-px w-20 gold-divider" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            At CLNHYGEN, we focus on quality over shortcuts. Every vehicle receives detailed attention using safe detailing techniques and advanced equipment. True detailing is not just cleaning — it is restoration, protection, and perfection.
          </p>
        </div>
        <ul className="grid gap-3">
          {whyTrust.map((b) => <Bullet key={b}>{b}</Bullet>)}
        </ul>
      </div>
    </section>

    {/* Vehicles */}
    <section className="py-20 border-t border-border bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Trusted by Enthusiasts & Luxury Owners</p>
          <h2 className="font-display text-4xl">Vehicles We Frequently Work On</h2>
          <div className="mt-4 h-px w-20 gold-divider mx-auto" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            From luxury cars and SUVs to EVs, sports bikes, and daily-driven vehicles — we deliver showroom-level results every time.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {vehicles.map((v) => (
            <span key={v} className="border border-border bg-card px-5 py-2 rounded-sm text-sm flex items-center gap-2">
              <Car className="h-4 w-4 text-gold" /> {v}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Vision */}
    <section className="py-20 border-t border-border">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Our Vision</p>
        <h2 className="font-display text-4xl">To Become Meerut's Most Trusted Premium Detailing Brand</h2>
        <div className="mt-4 h-px w-20 gold-divider mx-auto" />
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Our goal is to redefine car care standards by offering premium automotive protection, long-lasting paint preservation, a luxury detailing experience, and advanced vehicle enhancement solutions — becoming the first choice for premium car detailing and paint protection in Meerut and surrounding regions.
        </p>
      </div>
    </section>

    {/* Commitment */}
    <section className="py-20 border-t border-border bg-secondary/20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-14">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Our Commitment to Quality</p>
          <h2 className="font-display text-4xl">Premium Products + Skilled Craftsmanship</h2>
          <div className="mt-4 h-px w-20 gold-divider" />
          <p className="mt-6 text-muted-foreground leading-relaxed">At CLNHYGEN, we use:</p>
          <ul className="mt-4 grid gap-3">
            {commitment.map((b) => <Bullet key={b}>{b}</Bullet>)}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-2xl">Every service is designed to provide</h3>
          <ul className="mt-6 grid gap-3">
            {promises.map((b) => <Bullet key={b}>{b}</Bullet>)}
          </ul>
        </div>
      </div>
    </section>

    {/* Studio */}
    <section className="py-20 border-t border-border">
      <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Our Facility</p>
          <h2 className="font-display text-4xl">State-of-the-Art Detailing Studio in Meerut</h2>
          <div className="mt-4 h-px w-20 gold-divider" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Our detailing studio is equipped with advanced tools and professional infrastructure to deliver high-quality automotive detailing services with precision and consistency.
          </p>
          <ul className="mt-6 grid gap-3">
            {studio.map((b) => <Bullet key={b}>{b}</Bullet>)}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-2xl">Why Professional Detailing Matters</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">Professional detailing helps:</p>
          <ul className="mt-4 grid gap-3">
            {matters.map((b) => <Bullet key={b}>{b}</Bullet>)}
          </ul>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Regular detailing and paint protection are essential for maintaining your vehicle's long-term condition and premium look.
          </p>
        </div>
      </div>
    </section>

    {/* Philosophy / Values */}
    <section className="py-20 border-t border-border bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">More Than Just Car Cleaning</p>
          <h2 className="font-display text-4xl">Restore. Enhance. Protect.</h2>
          <div className="mt-4 h-px w-20 gold-divider mx-auto" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Our detailing philosophy — every vehicle leaving our studio reflects our commitment to excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { i: Sparkles, t: "Precision", d: "Calibrated processes, consistent results, every single time." },
            { i: ShieldCheck, t: "Protection", d: "Advanced PPF, ceramic and graphene systems that truly defend your paint." },
            { i: Award, t: "Perfection", d: "We'd rather book one car less than rush a finish." },
            { i: Wrench, t: "Passion for Automobiles", d: "Built by enthusiasts who treat your car as their own." },
          ].map((v) => (
            <div key={v.t} className="bg-card border border-border p-7 rounded-sm">
              <v.i className="h-7 w-7 text-gold" />
              <h3 className="mt-4 font-display text-2xl">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {philosophy.map((p) => (
            <span key={p} className="text-xs tracking-[0.4em] uppercase text-gold border border-gold/40 px-5 py-2 rounded-sm">{p}</span>
          ))}
        </div>
      </div>
    </section>

    {/* Visit / Contact */}
    <section className="py-20 border-t border-border">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Visit Us</p>
        <h2 className="font-display text-4xl">CLNHYGEN — Premium Car Detailing Studio in Meerut</h2>
        <div className="mt-4 h-px w-20 gold-divider mx-auto" />
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Experience premium automotive detailing and paint protection solutions with CLNHYGEN.
        </p>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          <div className="border border-border bg-card p-6 rounded-sm">
            <MapPin className="h-6 w-6 text-gold mx-auto" />
            <p className="mt-3 text-sm text-muted-foreground">Mohkampur Industrial Area, Meerut, Uttar Pradesh</p>
          </div>
          <div className="border border-border bg-card p-6 rounded-sm">
            <Phone className="h-6 w-6 text-gold mx-auto" />
            <a href="tel:+918449900095" className="mt-3 block text-sm text-muted-foreground hover:text-gold">+91 84499 00095</a>
          </div>
          <div className="border border-border bg-card p-6 rounded-sm">
            <Globe className="h-6 w-6 text-gold mx-auto" />
            <a href="https://www.clnhygen.com" className="mt-3 block text-sm text-muted-foreground hover:text-gold">www.clnhygen.com</a>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-background px-8 py-3 rounded-sm font-medium hover:opacity-90 transition">Book Your Vehicle</Link>
          <Link to="/services" className="inline-flex items-center gap-2 border border-border px-8 py-3 rounded-sm font-medium hover:border-gold transition">Explore Services</Link>
        </div>
      </div>
    </section>

    {/* FAQs */}
    <section className="py-20 border-t border-border bg-secondary/20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">FAQs</p>
          <h2 className="font-display text-4xl">Frequently Asked Questions</h2>
          <div className="mt-4 h-px w-20 gold-divider mx-auto" />
        </div>
        <div className="grid gap-5">
          {faqs.map((f) => (
            <div key={f.q} className="bg-card border border-border p-6 rounded-sm">
              <h3 className="font-display text-xl">{f.q}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;