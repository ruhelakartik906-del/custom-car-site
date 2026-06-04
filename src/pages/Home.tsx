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
  Layers,
  Sun,
  Lightbulb,
  Target,
  Eye,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import heroCar from "@/assets/hero-car.jpg";
import ceramic from "@/assets/service-ceramic.jpg";
import ppf from "@/assets/service-ppf.jpg";
import detailing from "@/assets/service-detailing.jpg";
import paint from "@/assets/service-paint.jpg";

const brands = [
  "Luxury Vehicles",
  "Sports Cars",
  "Supercars",
  "SUVs",
  "Electric Vehicles",
  "Performance Cars",
  "Motorcycles",
  "Commercial Fleets",
  "Collector Vehicles",
];

const services = [
  { title: "Paint Protection Film (PPF)", desc: "Self-healing transparent armor against stone chips, scratches, road debris and environmental damage.", img: ppf, to: "/services/ppf", Icon: Shield },
  { title: "Ceramic Coating", desc: "Nano-protective layer delivering deep gloss, hydrophobic beading and long-term paint preservation.", img: ceramic, to: "/services/ceramic-coating", Icon: Sparkles },
  { title: "Paint Correction", desc: "Multi-stage correction removing swirls, holograms and oxidation to restore depth and clarity.", img: paint, to: "/services/paint-correction", Icon: Award },
  { title: "Interior Detailing", desc: "Deep cleaning, sanitization, leather care and fabric protection for a cleaner cabin.", img: detailing, to: "/services/car-detailing", Icon: Droplets },
  { title: "Surface Protection Solutions", desc: "Specialized protection for glass, headlights, wheels, trim and other high-impact surfaces.", img: paint, to: "/services/ppf", Icon: Layers },
  { title: "Alloy Wheel Detailing", desc: "Brake-dust removal, polishing and premium wheel coating for a lasting factory finish.", img: paint, to: "/services/alloy-wheel-detailing", Icon: Disc3 },
];

const ppfPrevents = ["Stone Chips", "Scratches", "Bug Stains", "Bird Droppings", "Road Debris", "UV Damage"];
const ppfBenefits = ["Self-Healing Technology", "High-Gloss & Matte Options", "UV Resistance", "Exceptional Clarity", "Long-Lasting Durability", "Easy Maintenance"];
const ceramicBenefits = ["Deep Gloss Enhancement", "Hydrophobic Water Beading", "UV Protection", "Chemical Resistance", "Easier Vehicle Cleaning", "Long-Term Paint Preservation"];
const correctionRemoves = ["Swirl Marks", "Light Scratches", "Holograms", "Oxidation", "Paint Imperfections", "Surface Hazing"];
const interiorIncludes = ["Leather Treatment", "Fabric Cleaning", "Dashboard Restoration", "Interior Sanitization", "Odor Removal", "Surface Conditioning"];

const whyUs = [
  { Icon: Gem, t: "Industry-Leading Products", d: "Globally recognized products and technologies built for superior protection, performance and durability." },
  { Icon: Users, t: "Skilled Professionals", d: "Specialists who follow proven installation and detailing procedures for consistent, exceptional results." },
  { Icon: Cog, t: "Advanced Technology", d: "We continuously adopt the latest innovations in automotive protection and detailing." },
  { Icon: Award, t: "Quality Assurance", d: "Strict quality standards on every vehicle and every product for total customer satisfaction." },
  { Icon: Heart, t: "Customer-Focused Approach", d: "Long-term relationships built on transparency, professionalism and attention to detail." },
  { Icon: Globe, t: "Global Standards", d: "International best practices in automotive detailing, paint protection and vehicle preservation." },
];

const partners = [
  { name: "STEK", desc: "World leader in Paint Protection Film with advanced self-healing technology and superior optical clarity." },
  { name: "CARPRO", desc: "Globally respected leader in ceramic coating technology — long-lasting protection and outstanding gloss." },
  { name: "AUTOKROM", desc: "Advanced automotive protection technologies for enhanced durability and long-term vehicle preservation." },
  { name: "Saint-Gobain", desc: "Internationally recognized expertise in advanced materials and automotive protection technologies." },
];

const lakeCountryProducts = [
  "HDO Pads",
  "CCS Pads",
  "Foam Cutting Pads",
  "Foam Polishing Pads",
  "Finishing Pads",
  "Microfiber Cutting Pads",
  "Microfiber Polishing Pads",
  "Wool Pads",
  "Hybrid Wool Pads",
  "Detailing Accessories",
];

const faqs = [
  {
    q: "What is Paint Protection Film (PPF)?",
    a: "Paint Protection Film is a transparent protective layer applied to painted surfaces to help prevent scratches, stone chips, stains and environmental damage.",
  },
  {
    q: "How long does ceramic coating last?",
    a: "The lifespan depends on maintenance, environmental conditions and the coating system used. Professional-grade coatings can provide protection for several years.",
  },
  {
    q: "Is paint correction necessary before ceramic coating?",
    a: "Yes. Paint correction removes imperfections and prepares the surface for optimal coating performance and durability.",
  },
  {
    q: "Can PPF and ceramic coating be installed together?",
    a: "Absolutely. Combining PPF and ceramic coating provides maximum protection, gloss enhancement and easier maintenance.",
  },
  {
    q: "Why choose Lake Country pads?",
    a: "Lake Country pads are trusted worldwide for their durability, cutting efficiency, polishing performance and consistent results across all detailing applications.",
  },
];

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-sm">
    <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />
    <span>{children}</span>
  </li>
);

const BookCTA = () => (
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
);

const Home = () => {
  return (
    <div>
      <HeroSlider />

      {/* INTRO */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">CLNHYGEN · Protect · Enhance · Preserve</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            Global Automotive Protection, Detailing & <span className="text-gold">Surface Care Solutions</span>
          </h1>
          <div className="mt-6 mx-auto h-px w-24 gold-divider" />
          <p className="mt-7 text-muted-foreground leading-relaxed text-base md:text-lg">
            At <strong className="text-foreground">CLNHYGEN</strong>, we deliver world-class automotive protection and
            detailing solutions that help vehicle owners maintain the beauty, performance and value of their investments.
            Built on quality, innovation and precision craftsmanship, CLNHYGEN is a trusted name for premium vehicle
            protection, paint enhancement and professional automotive care products.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From luxury car owners and collectors to detailing professionals and businesses worldwide — we combine advanced
            technology, industry-leading products and expert workmanship to deliver excellence without compromise.
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
            <img src={ppf} alt="Paint Protection Film" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Section 01 · Invisible Armor</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">Paint Protection Film (PPF)</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              An advanced protective barrier against stone chips, scratches, road debris, bug stains, bird droppings and
              environmental damage. With self-healing technology and exceptional clarity, PPF maintains your vehicle's
              original appearance while reducing long-term paint damage.
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

      {/* BOOK CTA — moved right after PPF section */}
      <BookCTA />

      {/* SECTION 2 — Ceramic (image right) */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Section 02 · Liquid Glass</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">Professional Ceramic Coating</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              A durable <strong className="text-foreground">nano-protective layer</strong> that bonds with your vehicle's
              paintwork — enhancing gloss, improving <strong className="text-foreground">hydrophobic</strong> properties,
              resisting contaminants and simplifying maintenance while preserving appearance.
            </p>

            <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {ceramicBenefits.map((p) => <Bullet key={p}>{p}</Bullet>)}
            </ul>

            <p className="mt-6 text-sm text-muted-foreground">
              Powered by globally trusted ceramic and graphene products for maximum durability and performance.
            </p>

            <Link to="/services/ceramic-coating" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gold text-primary rounded-full text-sm font-semibold tracking-wide uppercase hover:shadow-gold transition-smooth">
              Explore Ceramic <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-[20px] shadow-elegant">
            <img src={ceramic} alt="Ceramic Coating" loading="lazy" className="h-full w-full object-cover" />
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
              <img src={paint} alt="Paint Correction" loading="lazy" className="w-full aspect-[16/9] object-cover" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 grid place-items-center rounded-full bg-gold/10"><Wrench className="h-5 w-5 text-gold" /></div>
                  <h3 className="font-display text-2xl">Paint Correction</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Multi-stage correction that eliminates swirl marks, oxidation, light scratches and holograms — reviving
                  the finish and preparing the surface for <strong className="text-foreground">optimal coating performance</strong>.
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {correctionRemoves.map((p) => <Bullet key={p}>{p}</Bullet>)}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
              <img src={detailing} alt="Interior Detailing" loading="lazy" className="w-full aspect-[16/9] object-cover" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 grid place-items-center rounded-full bg-gold/10"><SprayCan className="h-5 w-5 text-gold" /></div>
                  <h3 className="font-display text-2xl">Interior Detailing</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Deep cleaning, sanitization, <strong className="text-foreground">leather care</strong> and fabric
                  protection — a cleaner, healthier, more comfortable driving environment.
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {interiorIncludes.map((p) => <Bullet key={p}>{p}</Bullet>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SURFACE PROTECTION */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Section 04 · Surface Care</p>
            <h2 className="font-display text-4xl md:text-5xl">Surface Protection Solutions</h2>
            <div className="mt-6 h-px w-20 gold-divider mx-auto" />
            <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
              Specialized protection systems for every critical surface — designed for glass, trim, wheels, headlights
              and other high-impact areas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: Eye, t: "Windshield Protection" },
              { Icon: Lightbulb, t: "Headlight Protection" },
              { Icon: Disc3, t: "Wheel Protection" },
              { Icon: Layers, t: "Trim Protection" },
              { Icon: Sun, t: "Glass Coating" },
              { Icon: Shield, t: "Surface Preservation" },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-border bg-card p-7 flex items-start gap-4 hover:border-gold transition-smooth">
                <div className="h-12 w-12 shrink-0 grid place-items-center rounded-full bg-gold/10">
                  <s.Icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Engineered protection for long-term preservation.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL BRANDS */}
      <section className="py-24 border-b border-border bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Trusted Partners</p>
            <h2 className="font-display text-4xl md:text-5xl">Global Brands We Trust</h2>
            <div className="mt-6 h-px w-20 gold-divider mx-auto" />
            <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
              Exceptional results require exceptional products. CLNHYGEN partners with globally recognized manufacturers
              known for quality, innovation and performance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((p) => (
              <div key={p.name} className="rounded-2xl border border-border bg-card p-7 hover:border-gold hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 grid place-items-center rounded-full bg-gradient-gold mb-5">
                  <Award className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAKE COUNTRY DISTRIBUTOR */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Authorized Distributor</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Lake Country <span className="text-gold">Manufacturing</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              CLNHYGEN proudly serves as a distributor of <strong className="text-foreground">Lake Country
              Manufacturing</strong> — one of the most respected names in professional automotive detailing. For
              decades, Lake Country has supplied innovative polishing solutions to detailers, body shops and
              manufacturers worldwide.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              We provide genuine Lake Country products supported by expert guidance and professional industry knowledge.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold tracking-wide uppercase hover:shadow-elegant transition-smooth">
              Enquire Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-elegant">
            <h3 className="font-display text-xl mb-5">Available Product Range</h3>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {lakeCountryProducts.map((p) => <Bullet key={p}>Lake Country {p}</Bullet>)}
            </ul>
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
              Trusted by automotive enthusiasts, luxury vehicle owners, collectors and professionals — worldwide.
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

      {/* MISSION / VISION */}
      <section className="py-24 border-b border-border bg-secondary/20">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-border bg-card p-10 shadow-sm">
            <div className="h-12 w-12 grid place-items-center rounded-full bg-gradient-gold mb-5">
              <Target className="h-5 w-5 text-primary-foreground" />
            </div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-2">Our Mission</p>
            <h3 className="font-display text-3xl">Protect. Enhance. Preserve.</h3>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              To provide premium automotive protection, detailing solutions and professional-grade detailing products
              that help preserve the beauty, performance and value of vehicles — while delivering exceptional customer
              experiences.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-10 shadow-sm">
            <div className="h-12 w-12 grid place-items-center rounded-full bg-gradient-gold mb-5">
              <Eye className="h-5 w-5 text-primary-foreground" />
            </div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-2">Our Vision</p>
            <h3 className="font-display text-3xl">A Globally Recognized Leader.</h3>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              To become a globally recognized leader in automotive protection, detailing innovation and professional
              detailing product distribution — continuously setting new standards of quality, reliability and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Answers</p>
            <h2 className="font-display text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <div className="mt-6 h-px w-20 gold-divider mx-auto" />
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-card p-6 hover:border-gold transition-smooth">
                <summary className="flex items-center justify-between cursor-pointer list-none font-display text-lg">
                  {f.q}
                  <ArrowRight className="h-4 w-4 text-gold transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING TAGLINE */}
      <section className="py-20">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">CLNHYGEN</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            Protecting Vehicles. <span className="text-gold">Delivering Excellence.</span> Driving Innovation.
          </h2>
          <p className="mt-5 text-muted-foreground">
            From advanced PPF and ceramic coating solutions to premium detailing products and Lake Country polishing
            systems — CLNHYGEN represents the future of automotive protection and professional vehicle care.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
