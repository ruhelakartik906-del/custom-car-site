import { useParams, Link, Navigate } from "react-router-dom";
import { CheckCircle2, ArrowRight, Phone, MessageCircle, MapPin, BadgeCheck, Sparkles } from "lucide-react";
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
};

const data: Record<string, ServiceData> = {
  "ppf": {
    eyebrow: "Premium Paint Protection",
    title: "Paint Protection Film (PPF) in Meerut",
    subtitle: "Premium PPF that protects your vehicle's original paint from scratches, stone chips, road debris, swirl marks and UV damage.",
    img: ppf,
    intro:
      "Our Paint Protection Film (PPF) services in Meerut help protect your vehicle's original paint from scratches, stone chips, road debris, swirl marks, and UV damage. We use premium-quality PPF materials and precision installation techniques to deliver seamless protection for luxury cars, SUVs, and daily-driven vehicles.",
    benefits: [
      "Self-Healing Technology",
      "High Gloss Finish",
      "Scratch Resistance",
      "UV Protection",
      "Hydrophobic Surface",
      "Non-Yellowing Film",
      "Long-Term Paint Protection",
    ],
    removes: {
      heading: "PPF Protects Against",
      items: ["Stone Chips", "Minor Scratches", "Swirl Marks", "UV Damage", "Paint Fading", "Road Debris Damage"],
    },
    whyUs: [
      "Expert PPF Installation Team",
      "Bubble-Free Finish",
      "Edge-to-Edge Coverage",
      "Premium Imported Films",
      "Long Lasting Protection",
    ],
  },
  "ceramic-coating": {
    eyebrow: "Long Lasting Shine & Protection",
    title: "Ceramic Coating in Meerut",
    subtitle: "A durable nano-protective layer over your paint that enhances gloss and protects against environmental contaminants.",
    img: ceramic,
    intro:
      "Our ceramic coating services create a durable nano-protective layer over your vehicle's paint that enhances gloss and protects against environmental contaminants. We provide professional ceramic and graphene coating services in Meerut using high-performance coating products for maximum durability and shine.",
    benefits: [
      "Deep Mirror Gloss Finish",
      "Water Repellent Hydrophobic Effect",
      "UV & Oxidation Protection",
      "Easier Vehicle Cleaning",
      "Enhanced Paint Depth",
      "Long-Term Surface Protection",
    ],
    whyUs: [
      "High-Performance Ceramic & Graphene Products",
      "Trained Coating Specialists",
      "Dust-Controlled Application Bay",
      "Long-Lasting Hydrophobic Finish",
      "Maintenance Guidance Included",
    ],
    vehicles: ["Luxury Cars", "SUVs", "Sports Cars", "Daily Driven Vehicles", "Premium Bikes"],
  },
  "paint-correction": {
    eyebrow: "Professional Rubbing & Polishing",
    title: "Paint Correction Services in Meerut",
    subtitle: "Multi-stage machine polishing that restores gloss, clarity and smoothness to dull, swirled or oxidized paint.",
    img: paint,
    intro:
      "Over time, vehicle paint develops swirl marks, scratches, oxidation, and dullness. Our paint correction services restore gloss, clarity, and smoothness using advanced machine polishing techniques. If you're looking for professional car polishing in Meerut, CLNHYGEN offers multi-stage paint correction solutions for flawless results.",
    benefits: [
      "Restores Factory Finish",
      "Enhances Paint Clarity",
      "Deep Gloss Enhancement",
      "Improves Surface Smoothness",
      "Prepares Surface for PPF & Ceramic Coating",
    ],
    removes: {
      heading: "Paint Correction Removes",
      items: ["Swirl Marks", "Minor Scratches", "Water Spots", "Paint Oxidation", "Holograms", "Surface Imperfections"],
    },
    whyUs: [
      "Calibrated Rotary & DA Polishers",
      "Progressively Finer Compounds",
      "Paint-Thickness Monitoring",
      "Defect Removal up to 95%",
      "Best Paired with Ceramic / PPF",
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
};

const allServices = [
  { name: "Paint Protection Film (PPF)", to: "/services/ppf" },
  { name: "Ceramic Coating", to: "/services/ceramic-coating" },
  { name: "Graphene Coating", to: "/services/ceramic-coating" },
  { name: "Paint Correction", to: "/services/paint-correction" },
  { name: "Interior Detailing", to: "/services/car-detailing" },
  { name: "Exterior Detailing", to: "/services/car-detailing" },
  { name: "Car Spa & Foam Wash", to: "/services/car-detailing" },
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
        </div>
      </section>

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