import {
  Award,
  Sparkles,
  ShieldCheck,
  Gem,
  CheckCircle2,
  Layers,
  Sun,
  Target,
  Eye,
  Handshake,
  Globe,
  Users,
  Wrench,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import detailing from "@/assets/service-detailing.jpg";

const timeline = [
  {
    year: "2013",
    title: "The Beginning",
    desc: "Our journey began with a simple goal: to provide better vehicle care solutions using professional techniques and quality products. We started by focusing on detailing and paint enhancement services while building a strong understanding of vehicle protection.",
  },
  {
    year: "2014 – 2017",
    title: "Expansion & Expertise",
    desc: "As customer demand increased, we expanded our services and invested in advanced detailing tools, polishing systems, and surface protection technologies. During this period, we developed expertise in paint correction and professional detailing processes.",
  },
  {
    year: "2018 – 2020",
    title: "Advanced Protection Era",
    desc: "The automotive protection industry continued to evolve, and so did we. CLNHYGEN introduced advanced ceramic coating solutions and expanded its product knowledge to provide customers with longer-lasting protection and better vehicle maintenance options.",
  },
  {
    year: "2021 – 2023",
    title: "Global Partnerships",
    desc: "We strengthened our partnerships with globally recognized brands and focused on bringing premium automotive protection solutions to a wider audience. Our commitment to quality helped us earn the trust of vehicle owners, enthusiasts, and detailing professionals.",
  },
  {
    year: "2024 – 2026",
    title: "A Trusted Global Name",
    desc: "Today, CLNHYGEN continues to grow as a trusted name in automotive protection and detailing. We proudly work with leading international brands and supply professional detailing products while helping customers protect their vehicles with the latest technologies available in the industry.",
  },
];

const whatWeDo = [
  {
    i: ShieldCheck,
    t: "Paint Protection Film (PPF)",
    d: "Protect your vehicle from stone chips, scratches, road debris, bug stains, and daily wear. Our premium PPF solutions help preserve your vehicle's original paint and appearance.",
  },
  {
    i: Sparkles,
    t: "Ceramic Coating",
    d: "Our ceramic coating systems create a protective layer that enhances gloss, improves water repellency, and helps defend against environmental contaminants.",
  },
  {
    i: Wrench,
    t: "Paint Correction",
    d: "Restore the shine and clarity of your vehicle by removing swirl marks, oxidation, light scratches, and paint defects through professional machine polishing.",
  },
  {
    i: Gem,
    t: "Interior Detailing",
    d: "Maintain clean, fresh, and protected interiors through deep cleaning, leather care, fabric treatment, and interior restoration services.",
  },
  {
    i: Layers,
    t: "Surface Protection",
    d: "Additional protection solutions for glass, wheels, headlights, trim, and other exposed vehicle surfaces.",
  },
  {
    i: Sun,
    t: "Professional Detailing Products",
    d: "Trusted professional-grade detailing products supplied to detailers, body shops, and automotive businesses.",
  },
];

const brands = [
  { name: "STEK", desc: "Known worldwide for premium Paint Protection Films, STEK offers advanced self-healing technology and exceptional durability." },
  { name: "CARPRO", desc: "A leading name in ceramic coatings and detailing products, CARPRO is trusted by professionals across the world." },
  { name: "AUTOKROM", desc: "AUTOKROM provides advanced vehicle protection solutions designed to improve durability and appearance." },
  { name: "Saint-Gobain", desc: "A globally recognized manufacturer known for innovation, quality, and advanced material technologies." },
];

const lakeCountry = [
  "Foam Cutting Pads",
  "Foam Polishing Pads",
  "Finishing Pads",
  "Microfiber Cutting Pads",
  "Microfiber Polishing Pads",
  "HDO Pads",
  "CCS Pads",
  "Wool Pads",
  "Hybrid Wool Pads",
  "Professional Detailing Accessories",
];

const whyChoose = [
  { i: Calendar, t: "13+ Years of Industry Experience", d: "Since 2013, we have continuously worked to improve our services, products, and expertise in automotive care." },
  { i: Globe, t: "Premium Global Brands", d: "We partner with internationally recognized manufacturers known for innovation and quality." },
  { i: Award, t: "Professional Knowledge", d: "Our team stays updated with the latest detailing technologies and automotive protection solutions." },
  { i: Users, t: "Customer Satisfaction", d: "We focus on building long-term relationships through honest advice, quality work, and dependable service." },
  { i: ShieldCheck, t: "Trusted Solutions", d: "Whether you need vehicle protection services or professional products, we deliver solutions built for long-term performance." },
  { i: Handshake, t: "Authentic Products", d: "As an authorized distributor, we provide genuine products that deliver consistent and reliable results." },
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
      title="More Than a Decade of Automotive Care Excellence"
      subtitle="Since 2013 — Protecting vehicles, supporting professionals, and delivering quality automotive care solutions worldwide."
    />

    {/* Intro */}
    <section className="py-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
          <img src={detailing} alt="CLNHYGEN automotive detailing and protection" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Who We Are</p>
          <h2 className="font-display text-4xl">A Brand Built on Quality, Trust & Passion</h2>
          <div className="mt-4 h-px w-20 gold-divider" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Since 2013, CLNHYGEN has been dedicated to helping vehicle owners protect, maintain, and enhance their vehicles through premium automotive protection solutions, detailing services, and professional-grade detailing products.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            What started as a passion for vehicle care has grown into a trusted automotive brand serving customers, detailing professionals, and automotive businesses. Over the years, we have continuously expanded our knowledge, adopted new technologies, and partnered with globally recognized brands to deliver better protection and superior results.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Today, CLNHYGEN stands as a complete automotive care solution provider — offering PPF, Ceramic Coating, Paint Correction, Interior Detailing, Surface Protection, and professional detailing products trusted by enthusiasts and professionals alike.
          </p>
        </div>
      </div>
    </section>

    {/* Journey / Timeline */}
    <section className="py-20 border-t border-border bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Our Journey</p>
          <h2 className="font-display text-4xl">From 2013 to 2026</h2>
          <div className="mt-4 h-px w-20 gold-divider mx-auto" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            A timeline of growth, innovation, and continuous improvement in automotive protection and detailing.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="grid gap-10">
            {timeline.map((t, idx) => (
              <div key={t.year} className={`relative md:grid md:grid-cols-2 md:gap-10 ${idx % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                <div className="pl-12 md:pl-0 md:pr-10 md:text-right">
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-2 h-3 w-3 rounded-full bg-gold ring-4 ring-background" />
                  <p className="text-xs tracking-[0.4em] uppercase text-gold">{t.year}</p>
                  <h3 className="mt-2 font-display text-2xl">{t.title}</h3>
                </div>
                <div className="pl-12 md:pl-10 mt-2 md:mt-0">
                  <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* What We Do */}
    <section className="py-20 border-t border-border">
      <div className="container mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">What We Do</p>
          <h2 className="font-display text-4xl">Complete Automotive Protection & Detailing</h2>
          <div className="mt-4 h-px w-20 gold-divider mx-auto" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Solutions designed to keep vehicles looking their best — built around premium products and professional craftsmanship.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatWeDo.map((s) => (
            <div key={s.t} className="bg-card border border-border p-7 rounded-sm hover:border-gold/40 transition">
              <s.i className="h-7 w-7 text-gold" />
              <h3 className="mt-4 font-display text-2xl">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Global Brands */}
    <section className="py-20 border-t border-border bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Trusted Global Brands</p>
          <h2 className="font-display text-4xl">Quality Results Start With Quality Products</h2>
          <div className="mt-4 h-px w-20 gold-divider mx-auto" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We work with some of the most respected brands in the automotive industry.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((b) => (
            <div key={b.name} className="bg-card border border-border p-7 rounded-sm">
              <p className="font-display text-2xl text-gold">{b.name}</p>
              <div className="mt-3 h-px w-12 gold-divider" />
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Lake Country Distributor */}
    <section className="py-20 border-t border-border">
      <div className="container mx-auto grid lg:grid-cols-2 gap-14">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Authorized Distributor</p>
          <h2 className="font-display text-4xl">Lake Country Manufacturing</h2>
          <div className="mt-4 h-px w-20 gold-divider" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            CLNHYGEN is proud to be associated with Lake Country Manufacturing — one of the world's most trusted brands in professional detailing products. Lake Country has been producing innovative polishing solutions for decades and is trusted by professional detailers, body shops, and automotive manufacturers worldwide.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            As a distributor, our goal is to provide professionals and enthusiasts with access to authentic products that deliver consistent and reliable results.
          </p>
        </div>
        <div>
          <h3 className="font-display text-2xl">Genuine Lake Country Products</h3>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {lakeCountry.map((p) => <Bullet key={p}>{p}</Bullet>)}
          </ul>
        </div>
      </div>
    </section>

    {/* Why Choose */}
    <section className="py-20 border-t border-border bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Why Choose CLNHYGEN</p>
          <h2 className="font-display text-4xl">Built on Experience. Driven by Quality.</h2>
          <div className="mt-4 h-px w-20 gold-divider mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoose.map((v) => (
            <div key={v.t} className="bg-card border border-border p-7 rounded-sm">
              <v.i className="h-7 w-7 text-gold" />
              <h3 className="mt-4 font-display text-xl">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 border-t border-border">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-card border border-border p-10 rounded-sm">
          <Target className="h-8 w-8 text-gold" />
          <p className="mt-4 text-xs tracking-[0.4em] uppercase text-gold">Our Mission</p>
          <h3 className="mt-2 font-display text-3xl">Quality You Can Trust</h3>
          <div className="mt-4 h-px w-16 gold-divider" />
          <p className="mt-5 text-muted-foreground leading-relaxed">
            To provide high-quality automotive protection, detailing services, and professional detailing products that help vehicle owners protect and maintain their vehicles with confidence.
          </p>
        </div>
        <div className="bg-card border border-border p-10 rounded-sm">
          <Eye className="h-8 w-8 text-gold" />
          <p className="mt-4 text-xs tracking-[0.4em] uppercase text-gold">Our Vision</p>
          <h3 className="mt-2 font-display text-3xl">A Globally Trusted Name</h3>
          <div className="mt-4 h-px w-16 gold-divider" />
          <p className="mt-5 text-muted-foreground leading-relaxed">
            To become a globally trusted automotive protection and detailing brand by delivering quality, innovation, and customer satisfaction in every product and service we offer.
          </p>
        </div>
      </div>
    </section>

    {/* Looking Ahead / CTA */}
    <section className="py-20 border-t border-border bg-secondary/20">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Looking Ahead</p>
        <h2 className="font-display text-4xl">The Road From 2013 to 2026 — and Beyond</h2>
        <div className="mt-4 h-px w-20 gold-divider mx-auto" />
        <p className="mt-6 text-muted-foreground leading-relaxed">
          CLNHYGEN remains committed to bringing the latest advancements in Paint Protection Film, Ceramic Coating, Surface Protection, and Professional Detailing Products to customers around the world. We look forward to serving vehicle owners, detailing professionals, and automotive businesses for many years to come.
        </p>
        <p className="mt-8 font-display text-2xl text-gold">CLNHYGEN</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Since 2013 — Protecting Vehicles, Supporting Professionals, and Delivering Quality Automotive Care Solutions.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-background px-8 py-3 rounded-sm font-medium hover:opacity-90 transition">
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/pricing" className="inline-flex items-center gap-2 border border-border px-8 py-3 rounded-sm font-medium hover:border-gold transition">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default About;