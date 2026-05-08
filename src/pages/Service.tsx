import { useParams, Link, Navigate } from "react-router-dom";
import { CheckCircle2, ArrowRight, Phone, MessageCircle, MapPin, BadgeCheck, Sparkles, Shield, Droplets } from "lucide-react";
import PageHero from "@/components/PageHero";
import ceramic from "@/assets/service-ceramic.jpg";
import ppf from "@/assets/service-ppf.jpg";
import detailing from "@/assets/service-detailing.jpg";
import paint from "@/assets/service-paint.jpg";

type ServiceData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  img: string;
  intro: string;
  benefits: string[];
  removes?: { heading: string; items: string[] };
  whyUs: string[];
  vehicles?: string[];
  whatIs?: { heading: string; body: string };
  finishes?: { name: string; desc: string }[];
  coverage?: { heading: string; items: string[] };
  models?: string[];
  maintenance?: string[];
  comparison?: { heading: string; intro: string; items: string[] };
  faqs?: { q: string; a: string }[];
};

const data: Record<string, ServiceData> = {
  "ppf": {
    eyebrow: "Premium Paint Protection",
    title: "Paint Protection Film (PPF) in Meerut",
    subtitle: "Premium PPF that protects your vehicle's original paint from scratches, stone chips, road debris, swirl marks and UV damage.",
    img: ppf,
    intro:
      "Welcome to CLNHYGEN — your trusted destination for premium Paint Protection Film (PPF) installation in Meerut. We provide high-quality PPF solutions designed to protect your car's original paint from scratches, stone chips, swirl marks, road debris, and UV damage while maintaining a flawless showroom finish. Whether you own a Fortuner, Thar, Scorpio N, BMW, Mercedes, Audi, Safari, Creta or any luxury or daily-driven vehicle — our expert team ensures precision protection with premium finishing.",
    benefits: [
      "Self-Healing Technology",
      "Hydrophobic Surface",
      "High Gloss Finish",
      "Matte Finish Options",
      "Non-Yellowing Material",
      "UV Resistant Protection",
      "Scratch Resistance",
      "Long-Term Paint Protection",
      "Enhanced Resale Value",
    ],
    removes: {
      heading: "PPF Protects Against",
      items: ["Stone Chips", "Minor Scratches", "Road Debris", "Swirl Marks", "Bird Droppings", "UV Damage", "Paint Fading", "Hard Water Spots"],
    },
    whyUs: [
      "Experienced PPF Installation Experts",
      "Computer Precision Cutting",
      "Bubble-Free Finish",
      "Seamless Edge Finishing",
      "Premium Imported Films",
      "Dust-Controlled Installation Environment",
      "Long Lasting Protection",
    ],
    whatIs: {
      heading: "What is Paint Protection Film (PPF)?",
      body: "Paint Protection Film (PPF) is a transparent polyurethane film applied over your vehicle's painted surfaces to protect them from external damage. It acts as a strong protective layer while preserving your car's original paint quality and shine — one of the best long-term investments for maintaining your vehicle's appearance and resale value.",
    },
    finishes: [
      { name: "Gloss PPF", desc: "Enhances your vehicle's shine with a deep glossy finish while providing maximum paint protection." },
      { name: "Matte PPF", desc: "Transforms your vehicle with a premium satin matte appearance while protecting the original paint underneath." },
    ],
    coverage: {
      heading: "Full Body & Partial PPF Coverage",
      items: [
        "Full Body PPF",
        "Front Bumper PPF",
        "Hood Protection Film",
        "Door Edge Protection",
        "Headlight PPF",
        "Side Mirror PPF",
        "Piano Black Interior PPF",
      ],
    },
    models: ["Thar", "Fortuner", "Scorpio N", "BMW", "Mercedes-Benz", "Audi", "Defender", "Safari", "Creta", "Verna"],
    maintenance: [
      "Avoid harsh chemicals",
      "Use pH-neutral car shampoo",
      "Wash with microfiber cloths",
      "Avoid pressure washing edges closely",
      "Get regular detailing maintenance",
    ],
    comparison: {
      heading: "Why PPF is Better than Wax or Polish",
      intro: "Unlike traditional wax or polishing methods, Paint Protection Film provides physical impact resistance and long-term paint safety.",
      items: [
        "Better Scratch Protection",
        "Long-Term Durability",
        "UV & Chemical Resistance",
        "Better Resale Value",
        "Permanent Surface Protection",
      ],
    },
    faqs: [
      { q: "How long does PPF last?", a: "Premium Paint Protection Film can last several years depending on maintenance and usage conditions." },
      { q: "Does PPF protect against scratches?", a: "Yes, PPF protects against minor scratches, swirl marks, stone chips and road debris damage." },
      { q: "Is PPF worth it for new cars?", a: "Yes, PPF helps preserve original paint quality and protects your vehicle from daily wear and tear." },
      { q: "Which is better — Ceramic Coating or PPF?", a: "PPF provides physical impact protection, while ceramic coating mainly enhances gloss and hydrophobic performance. Many customers combine both for maximum protection." },
      { q: "Do you provide matte and gloss PPF?", a: "Yes, CLNHYGEN offers both matte PPF and gloss PPF installation services in Meerut." },
    ],
  },
  "ceramic-coating": {
    eyebrow: "Long Lasting Shine & Protection",
    title: "Ceramic Coating in Meerut",
    subtitle: "A durable nano-protective layer over your paint that enhances gloss and protects against environmental contaminants.",
    img: ceramic,
    intro:
      "Welcome to CLNHYGEN — your trusted destination for premium ceramic coating services in Meerut. Our professional ceramic coating process creates a durable protective layer over your vehicle's paint that helps protect against UV rays, dirt, water spots, oxidation, bird droppings and environmental contaminants — while enhancing gloss, smoothness and long-term shine.",
    benefits: [
      "Deep Mirror Gloss Finish",
      "Hydrophobic Water Beading",
      "UV & Oxidation Protection",
      "Easier Vehicle Cleaning",
      "Enhanced Paint Depth",
      "Smooth & Slick Finish",
      "Long-Term Surface Protection",
    ],
    removes: {
      heading: "Ceramic Coating Protects Against",
      items: ["UV Rays", "Paint Oxidation", "Dirt & Dust", "Water Spots", "Bird Droppings", "Chemical Contaminants", "Minor Surface Damage"],
    },
    whyUs: [
      "Premium Quality Coating Products",
      "Skilled Detailing Professionals",
      "Multi-Stage Paint Preparation",
      "Machine Paint Correction Before Coating",
      "Advanced Application Techniques",
      "Luxury Finish Standards",
    ],
    vehicles: ["Luxury Cars", "SUVs", "Sports Cars", "Daily Driven Vehicles", "Premium Bikes"],
    whatIs: {
      heading: "What is Ceramic Coating?",
      body: "Ceramic coating is a liquid polymer coating applied to your vehicle's paint surface that chemically bonds with the paint to create a long-lasting protective layer. Unlike regular wax or polish, ceramic coating provides durable paint protection with enhanced gloss, hydrophobic properties and easier maintenance.",
    },
    finishes: [
      { name: "Hydrophobic Ceramic Coating", desc: "Creates a hydrophobic layer that repels water, dirt and contaminants — keeping your vehicle cleaner with minimal maintenance and a long-lasting shine." },
      { name: "Graphene Coating", desc: "Advanced protection beyond traditional coatings — improved heat resistance, enhanced water repellency, reduced water-spot formation and a deeper gloss finish." },
    ],
    coverage: {
      heading: "Paint Preparation Before Ceramic Coating",
      items: [
        "Deep Exterior Cleaning",
        "Surface Decontamination",
        "Clay Bar Treatment",
        "Paint Correction & Polishing",
        "Removal of Swirl Marks & Imperfections",
      ],
    },
    models: ["Thar", "Fortuner", "Scorpio N", "BMW", "Audi", "Mercedes-Benz", "Defender", "Creta", "Verna", "Safari"],
    maintenance: [
      "Use pH-neutral shampoo",
      "Avoid harsh chemicals",
      "Wash with microfiber cloths",
      "Follow proper detailing methods",
      "Schedule periodic maintenance washes",
    ],
    comparison: {
      heading: "Ceramic Coating vs Wax",
      intro: "A modern long-term paint protection solution — far ahead of traditional wax for maintaining your vehicle's appearance.",
      items: [
        "Longer Durability",
        "Better Paint Protection",
        "Strong Hydrophobic Performance",
        "UV Resistance",
        "Enhanced Surface Hardness",
        "Superior Gloss Finish",
      ],
    },
    faqs: [
      { q: "How long does ceramic coating last?", a: "Premium ceramic coating typically lasts 2–5 years depending on the product, application and aftercare." },
      { q: "Does ceramic coating prevent scratches?", a: "It protects against swirl marks, light scratches, chemical stains and water spots, but it is not a substitute for PPF for stone-chip protection." },
      { q: "What is graphene coating?", a: "Graphene coating is an advanced evolution of ceramic coating offering better heat resistance, fewer water spots and a deeper gloss." },
      { q: "Do I need paint correction before coating?", a: "Yes — paint correction removes swirl marks and imperfections so the coating bonds to a flawless surface for the best gloss and durability." },
    ],
  },
  "paint-correction": {
    eyebrow: "Professional Rubbing & Polishing",
    title: "Paint Correction Services in Meerut",
    subtitle: "Multi-stage machine polishing that restores gloss, clarity and smoothness to dull, swirled or oxidized paint.",
    img: paint,
    intro:
      "Welcome to CLNHYGEN — your trusted destination for professional paint correction services in Meerut. We specialize in removing swirl marks, minor scratches, oxidation, holograms, water spots and paint imperfections using advanced machine polishing techniques. Our process restores your vehicle's original shine, depth, clarity and smoothness while preparing the surface for ceramic coating or Paint Protection Film (PPF).",
    benefits: [
      "Restores Factory Finish",
      "Enhances Paint Clarity",
      "Deep Gloss Enhancement",
      "Improves Surface Smoothness",
      "Revives Faded Paint",
      "Increases Vehicle Appearance",
      "Prepares Surface for PPF & Ceramic Coating",
    ],
    removes: {
      heading: "Common Paint Problems We Fix",
      items: ["Swirl Marks", "Minor Scratches", "Holograms", "Water Spots", "Paint Oxidation", "Surface Dullness", "Improper Wash Marks", "Light Paint Defects"],
    },
    whyUs: [
      "Experienced Detailing Specialists",
      "Professional Machine Polishing",
      "Premium Compounds & Pads",
      "Safe Paint Correction Techniques",
      "Luxury Detailing Standards",
      "Showroom Finish Results",
    ],
    vehicles: ["Luxury Cars", "SUVs", "Sports Cars", "Daily Driven Vehicles", "Premium Bikes"],
    whatIs: {
      heading: "What is Paint Correction?",
      body: "Paint correction is a professional detailing process that removes surface imperfections from your vehicle's paint using machine polishing compounds and polishing pads. Unlike regular polishing or waxing, paint correction permanently removes defects instead of temporarily hiding them.",
    },
    coverage: {
      heading: "Multi-Stage Paint Correction Process",
      items: [
        "Deep Exterior Wash",
        "Surface Decontamination",
        "Clay Bar Treatment",
        "Paint Inspection Under Proper Lighting",
        "Compounding Stage",
        "Polishing Stage",
        "Finishing Refinement",
        "Paint Protection Application",
      ],
    },
    finishes: [
      { name: "Paint Correction", desc: "Permanently removes paint defects using machine polishing — multi-stage process that improves clarity, reflection and long-term finish quality." },
      { name: "Normal Polish", desc: "Temporary gloss enhancement with minimal defect removal and short-term results — surface-level only." },
    ],
    models: ["Thar", "Fortuner", "Scorpio N", "BMW", "Audi", "Mercedes-Benz", "Defender", "Safari", "Creta", "Verna"],
    maintenance: [
      "Use microfiber wash techniques",
      "Avoid harsh detergents",
      "Wash regularly with pH-neutral shampoo",
      "Apply ceramic coating for added protection",
      "Avoid improper washing methods",
    ],
    comparison: {
      heading: "Why Paint Correction is Important",
      intro: "Paint correction is one of the most important preparation steps before Ceramic Coating, Graphene Coating or PPF — ensuring better gloss, smoother finish and maximum coating performance.",
      items: [
        "Restores Deep Gloss Finish",
        "Removes Swirl Marks & Scratches",
        "Enhances Paint Clarity",
        "Improves Surface Smoothness",
        "Revives Faded Paint",
        "Prepares Surface for Ceramic Coating or PPF",
      ],
    },
    faqs: [
      { q: "Does paint correction remove scratches?", a: "Paint correction removes minor scratches, swirl marks, holograms and paint imperfections. Deep scratches may require additional repair work." },
      { q: "Is paint correction safe for car paint?", a: "Yes, professional paint correction performed by trained experts is safe and enhances paint appearance." },
      { q: "How long does paint correction take?", a: "The time depends on vehicle condition, paint quality and correction stages required." },
      { q: "Should I get ceramic coating after paint correction?", a: "Yes, ceramic coating helps protect the corrected paint and maintain gloss for longer." },
      { q: "What is the difference between polishing and paint correction?", a: "Paint correction permanently removes defects using machine polishing, while basic polishing mainly enhances temporary shine." },
    ],
  },
  "car-detailing": {
    eyebrow: "Deep Interior & Exterior Care",
    title: "Car Detailing Services in Meerut",
    subtitle: "Complete interior and exterior detailing that restores freshness, hygiene and showroom shine to your vehicle.",
    img: detailing,
    intro:
      "Our interior car detailing services restore freshness, hygiene, and luxury comfort inside your vehicle, while our exterior detailing improves appearance with deep cleaning, paint enhancement, and gloss restoration. From luxury SUVs to daily-driven cars — get showroom-level results with CLNHYGEN.",
    benefits: [
      "Deep Vacuum Cleaning",
      "Seat Shampooing",
      "Leather Conditioning",
      "Dashboard Polishing",
      "Steam Sanitization",
      "Odor Removal",
      "Carpet & Floor Cleaning",
      "Interior Surface Protection",
    ],
    removes: {
      heading: "Exterior Detailing Includes",
      items: ["Foam Wash", "Clay Bar Treatment", "Wax & Sealant Protection", "Alloy Wheel Cleaning", "Tire Dressing", "Plastic Trim Restoration", "Water Spot Removal"],
    },
    whyUs: [
      "Removes Dust & Bacteria",
      "Eliminates Bad Odor",
      "Improves Cabin Hygiene",
      "Restores Premium Interior Feel",
      "Protects Interior Surfaces",
    ],
  },
  "exterior-detailing": {
    eyebrow: "Premium Shine & Paint Care",
    title: "Exterior Car Detailing in Meerut",
    subtitle: "Deep exterior cleaning, paint decontamination, polishing and protection — for a true showroom finish.",
    img: detailing,
    intro:
      "Welcome to CLNHYGEN — your trusted destination for premium exterior car detailing in Meerut. Our process safely removes dirt, road contamination, water spots, oxidation and surface impurities while restoring shine, smoothness and paint clarity. From luxury cars to daily drivers — we deliver showroom-finish exterior detailing.",
    benefits: [
      "Restores Deep Gloss & Shine",
      "Removes Surface Contamination",
      "Improves Paint Smoothness",
      "Enhances Vehicle Appearance",
      "Protects Exterior Surfaces",
      "Removes Water Spots & Dirt",
      "Improves Paint Clarity",
      "Maintains Vehicle Value",
    ],
    removes: {
      heading: "Our Exterior Detailing Services Include",
      items: [
        "Foam Wash",
        "Deep Exterior Cleaning",
        "Paint Decontamination",
        "Clay Bar Treatment",
        "Water Spot Removal",
        "Car Polishing",
        "Wax & Sealant Protection",
        "Tire Dressing",
        "Alloy Wheel Cleaning",
        "Exterior Plastic Restoration",
        "Glass Cleaning & Treatment",
      ],
    },
    whyUs: [
      "Experienced Detailing Professionals",
      "Premium Detailing Products",
      "Safe Wash Techniques",
      "Advanced Surface Cleaning",
      "Luxury Finishing Standards",
      "Showroom-Quality Results",
    ],
    vehicles: ["Luxury Cars", "SUVs", "Sports Cars", "Daily Driven Vehicles", "Premium Bikes"],
    whatIs: {
      heading: "What is Exterior Car Detailing?",
      body: "Exterior car detailing is a professional cleaning and restoration process focused on improving and protecting your vehicle's outer surfaces — paint, glass, alloys, tires, trims and exterior plastics. Unlike a regular car wash, exterior detailing removes deep contamination while restoring gloss, smoothness and paint clarity using advanced detailing techniques.",
    },
    finishes: [
      { name: "Paint Decontamination", desc: "Safely removes embedded impurities — industrial fallout, road tar, brake dust, hard water deposits, tree sap and pollution particles — restoring paint smoothness." },
      { name: "Clay Bar Treatment", desc: "Removes bonded contaminants regular washing can't — for a smoother surface, better gloss and a perfect base for wax, ceramic coating or PPF." },
    ],
    coverage: {
      heading: "Tire, Alloy, Trim & Glass Detailing",
      items: [
        "Alloy Wheels",
        "Tires",
        "Exterior Plastic Trims",
        "Chrome Surfaces",
        "Window Glass",
        "Headlights",
      ],
    },
    models: ["Thar", "Fortuner", "Scorpio N", "BMW", "Audi", "Mercedes-Benz", "Defender", "Safari", "Creta", "Verna"],
    maintenance: [
      "Wash regularly with pH-neutral shampoo",
      "Use microfiber cloths only",
      "Avoid automated brush car washes",
      "Apply wax or ceramic coating for added protection",
      "Park in shaded areas when possible",
    ],
    comparison: {
      heading: "Why Regular Exterior Detailing Matters",
      intro: "Professional detailing keeps your car looking showroom-fresh for longer and protects your investment.",
      items: [
        "Maintains Paint Quality",
        "Reduces Surface Damage",
        "Improves Vehicle Appearance",
        "Protects Exterior Surfaces",
        "Preserves Paint Gloss",
        "Enhances Resale Value",
      ],
    },
    faqs: [
      { q: "What is included in exterior car detailing?", a: "Exterior detailing includes foam wash, paint decontamination, polishing, clay bar treatment, tire dressing, alloy cleaning and surface protection." },
      { q: "How often should I get exterior detailing done?", a: "Regular detailing helps maintain paint quality, gloss and protection depending on driving conditions and vehicle usage." },
      { q: "Does exterior detailing remove scratches?", a: "Exterior detailing can reduce minor surface defects and swirl marks. Deeper scratches may require paint correction." },
      { q: "Is exterior detailing better than a normal car wash?", a: "Yes, professional detailing provides deep cleaning, paint enhancement and surface protection beyond a regular wash." },
      { q: "Do you provide polishing services?", a: "Yes, CLNHYGEN offers professional car polishing and gloss enhancement services in Meerut." },
    ],
  },
  "car-spa": {
    eyebrow: "Premium Cleaning Experience",
    title: "Car Spa & Foam Wash in Meerut",
    subtitle: "Safe, professional snow-foam wash and detailing-grade cleaning that protects your paint while delivering premium shine.",
    img: detailing,
    intro:
      "Welcome to CLNHYGEN — your trusted destination for premium car spa and foam wash services in Meerut. Our advanced foam wash and car spa process safely removes dirt, mud, road contaminants and surface buildup while protecting your vehicle's paint and enhancing overall shine.",
    benefits: [
      "Reduces Surface Scratches",
      "Safely Removes Dirt & Dust",
      "Protects Paint Finish",
      "Improves Vehicle Shine",
      "Better Cleaning Coverage",
      "Gentle on Ceramic Coating & PPF",
    ],
    removes: {
      heading: "Our Car Spa Services Include",
      items: [
        "Snow Foam Wash",
        "Deep Exterior Cleaning",
        "Tire & Alloy Cleaning",
        "Interior Vacuum Cleaning",
        "Dashboard Wiping",
        "Glass Cleaning",
        "Surface Drying with Microfiber",
        "Tire Dressing",
        "Spray Wax Application",
      ],
    },
    whyUs: [
      "Premium Foam Wash Process",
      "Safe Washing Techniques",
      "Scratch-Free Cleaning Methods",
      "High-Quality Detailing Products",
      "Luxury Finishing Standards",
      "Skilled Car Care Professionals",
    ],
    vehicles: ["Luxury Cars", "SUVs", "Sports Cars", "Daily Driven Vehicles", "Premium Bikes"],
    whatIs: {
      heading: "What is a Car Spa Service?",
      body: "Car spa is an advanced vehicle cleaning and detailing process that safely cleans, refreshes and enhances both the exterior and interior of your vehicle. Unlike traditional washing methods, professional car spa uses safe cleaning techniques, premium products and detailing equipment to maintain paint quality and surface finish.",
    },
    finishes: [
      { name: "Snow Foam Wash", desc: "Thick foam safely breaks down dust, mud, road grime, oil residue and surface contaminants — a safer, more effective wash that prevents swirl marks." },
      { name: "Interior Refresh", desc: "Vacuum cleaning, dashboard wipe, door-panel cleaning, floor-mat care and dust removal for a cleaner, more comfortable cabin." },
    ],
    coverage: {
      heading: "Tire, Alloy & Glass Cleaning",
      items: [
        "Alloy Wheels",
        "Tires",
        "Exterior Glass",
        "Side Mirrors",
        "Exterior Trims",
      ],
    },
    models: ["Thar", "Fortuner", "Scorpio N", "BMW", "Audi", "Mercedes-Benz", "Defender", "Safari", "Creta", "Verna"],
    maintenance: [
      "Schedule a foam wash every 1–2 weeks",
      "Avoid automated brush car washes",
      "Use microfiber towels for drying",
      "Apply spray wax between detailing sessions",
      "Park in shaded areas when possible",
    ],
    comparison: {
      heading: "Why Regular Car Spa Service Matters",
      intro: "Routine car spa keeps your vehicle cleaner, shinier and better maintained.",
      items: [
        "Maintains Paint Cleanliness",
        "Protects Exterior Finish",
        "Reduces Dirt Build-Up",
        "Improves Vehicle Appearance",
        "Preserves Paint Gloss",
        "Maintains Premium Look",
      ],
    },
    faqs: [
      { q: "What is included in a car spa service?", a: "Snow foam wash, deep exterior cleaning, tire & alloy cleaning, interior vacuum, dashboard wipe, glass cleaning, microfiber drying, tire dressing and spray wax." },
      { q: "How is foam wash better than a regular wash?", a: "Foam wash loosens dirt before contact, reducing swirl marks and protecting your paint, ceramic coating or PPF." },
      { q: "Is car spa safe for ceramic coated cars?", a: "Yes — our pH-neutral foam and microfiber techniques are completely safe for ceramic coatings and PPF." },
      { q: "How often should I get a car spa?", a: "Every 1–2 weeks for daily drivers and every 3–4 weeks for occasional-use vehicles is ideal for best paint condition." },
      { q: "Do you also clean the interior in a car spa?", a: "Yes — basic interior vacuum, dashboard wipe and floor-mat cleaning are included. For deep interior, choose our Interior Detailing service." },
    ],
  },
};

const allServices = [
  { name: "Paint Protection Film (PPF)", to: "/services/ppf" },
  { name: "Ceramic Coating", to: "/services/ceramic-coating" },
  { name: "Graphene Coating", to: "/services/ceramic-coating" },
  { name: "Paint Correction", to: "/services/paint-correction" },
  { name: "Interior Detailing", to: "/services/car-detailing" },
  { name: "Exterior Detailing", to: "/services/exterior-detailing" },
  { name: "Car Spa & Foam Wash", to: "/services/car-spa" },
  { name: "Headlight Restoration", to: "/services/car-detailing" },
  { name: "Engine Bay Cleaning", to: "/services/car-detailing" },
  { name: "Alloy Wheel Detailing", to: "/services/car-detailing" },
  { name: "Car Rubbing & Polishing", to: "/services/paint-correction" },
  { name: "Dent Paint & Body Shop", to: "/contact" },
];

const Service = () => {
  const { slug = "" } = useParams();
  const s = data[slug];
  if (!s) return <Navigate to="/" replace />;

  return (
    <div>
      <PageHero eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />

      {/* INTRO + IMAGE */}
      <section className="py-20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-elegant">
            <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">CLNHYGEN · Meerut</p>
            <h2 className="font-display text-4xl">Premium {s.title.split(" in ")[0]}</h2>
            <div className="mt-4 h-px w-20 gold-divider" />
            <p className="mt-6 text-muted-foreground leading-relaxed">{s.intro}</p>

            <h3 className="mt-8 font-display text-xl">Key Benefits</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {s.benefits.map((f) => (
                <li key={f} className="flex gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* REMOVES / INCLUDES */}
      {s.removes && (
        <section className="py-16 border-y border-border bg-secondary/20">
          <div className="container mx-auto max-w-5xl text-center">
            <h3 className="font-display text-3xl">{s.removes.heading}</h3>
            <div className="mt-5 h-px w-20 gold-divider mx-auto" />
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {s.removes.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 hover:border-gold transition-smooth"
                >
                  <Sparkles className="h-4 w-4 text-gold shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHAT IS */}
      {s.whatIs && (
        <section className="py-20">
          <div className="container mx-auto max-w-3xl text-center">
            <h3 className="font-display text-3xl md:text-4xl">{s.whatIs.heading}</h3>
            <div className="mt-5 h-px w-20 gold-divider mx-auto" />
            <p className="mt-6 text-muted-foreground leading-relaxed">{s.whatIs.body}</p>
          </div>
        </section>
      )}

      {/* FINISHES (Gloss vs Matte) */}
      {s.finishes && (
        <section className="py-16 border-y border-border bg-secondary/20">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Finish Options</p>
              <h3 className="font-display text-3xl md:text-4xl">Gloss & Matte PPF Installation</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {s.finishes.map((f) => (
                <div key={f.name} className="rounded-2xl border border-border bg-card p-8 hover:border-gold transition-smooth">
                  <div className="h-12 w-12 grid place-items-center rounded-full bg-gold/10 mb-5">
                    <Droplets className="h-6 w-6 text-gold" />
                  </div>
                  <h4 className="font-display text-2xl">{f.name}</h4>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* COVERAGE */}
      {s.coverage && (
        <section className="py-20">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Coverage Options</p>
              <h3 className="font-display text-3xl md:text-4xl">{s.coverage.heading}</h3>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Customized PPF packages based on your protection needs and budget.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {s.coverage.items.map((c) => (
                <div key={c} className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 hover:border-gold transition-smooth">
                  <Shield className="h-4 w-4 text-gold shrink-0" />
                  <span className="text-sm">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY CHOOSE CLNHYGEN */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Why CLNHYGEN</p>
            <h3 className="font-display text-3xl md:text-4xl">Why Choose Us for {s.title.split(" in ")[0]}</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {s.whyUs.map((w) => (
              <div
                key={w}
                className="rounded-xl border border-border bg-card p-6 hover:border-gold hover:-translate-y-1 transition-all"
              >
                <div className="h-10 w-10 grid place-items-center rounded-full bg-gold/10 mb-4">
                  <BadgeCheck className="h-5 w-5 text-gold" />
                </div>
                <p className="text-sm font-medium leading-snug">{w}</p>
              </div>
            ))}
          </div>

          {s.vehicles && (
            <div className="mt-14 rounded-2xl border border-border bg-card p-8 text-center">
              <h4 className="font-display text-2xl">Vehicles We Detail</h4>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                {s.vehicles.map((v) => (
                  <span key={v} className="px-4 py-2 rounded-full bg-secondary text-sm border border-border">{v}</span>
                ))}
              </div>
            </div>
          )}

          {s.models && (
            <div className="mt-10 rounded-2xl border border-border bg-card p-8 text-center">
              <h4 className="font-display text-2xl">Popular Models We Specialize In</h4>
              <div className="mt-5 flex flex-wrap justify-center gap-2.5">
                {s.models.map((m) => (
                  <span key={m} className="px-4 py-1.5 rounded-full bg-gold/10 text-foreground text-sm border border-gold/30">{m}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* MAINTENANCE + COMPARISON */}
      {(s.maintenance || s.comparison) && (
        <section className="py-20 border-y border-border bg-secondary/20">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8">
            {s.maintenance && (
              <div className="rounded-2xl border border-border bg-card p-8">
                <h4 className="font-display text-2xl mb-2">Maintenance Tips</h4>
                <p className="text-sm text-muted-foreground mb-5">Keep your PPF looking new for years with simple care.</p>
                <ul className="space-y-3 text-sm">
                  {s.maintenance.map((m) => (
                    <li key={m} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />{m}</li>
                  ))}
                </ul>
              </div>
            )}
            {s.comparison && (
              <div className="rounded-2xl border border-border bg-card p-8">
                <h4 className="font-display text-2xl mb-2">{s.comparison.heading}</h4>
                <p className="text-sm text-muted-foreground mb-5">{s.comparison.intro}</p>
                <ul className="space-y-3 text-sm">
                  {s.comparison.items.map((c) => (
                    <li key={c} className="flex items-start gap-2"><BadgeCheck className="h-4 w-4 text-gold mt-0.5 shrink-0" />{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ALL SERVICES */}
      <section className="py-20 border-y border-border bg-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Explore More</p>
            <h3 className="font-display text-3xl md:text-4xl">All CLNHYGEN Services in Meerut</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {allServices.map((a) => (
              <Link
                key={a.name}
                to={a.to}
                className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-5 py-4 hover:border-gold hover:text-gold transition-smooth"
              >
                <span className="text-sm font-medium">{a.name}</span>
                <ArrowRight className="h-4 w-4 text-gold" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {s.faqs && (
        <section className="py-20">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">FAQ</p>
              <h3 className="font-display text-3xl md:text-4xl">Frequently Asked Questions</h3>
            </div>
            <div className="space-y-4">
              {s.faqs.map((f, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-border bg-card p-5 hover:border-gold transition-smooth open:border-gold"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-medium text-sm md:text-base pr-4">{f.q}</span>
                    <ArrowRight className="h-4 w-4 text-gold shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTACT CTA */}
      <section className="py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="rounded-2xl bg-gradient-to-br from-card to-secondary/40 border border-border p-10 text-center shadow-elegant">
            <h3 className="font-display text-2xl md:text-3xl">Book {s.title.split(" in ")[0]} in Meerut</h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Protect your investment with professional car detailing and paint protection at CLNHYGEN.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-gold" /> Mohkampur Industrial Area, Meerut, Uttar Pradesh
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/918449900095"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
              <a
                href="tel:+918449900095"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="h-4 w-4" /> Call +91 84499 00095
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;