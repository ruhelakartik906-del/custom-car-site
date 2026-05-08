import { Link } from "react-router-dom";
import { CheckCircle2, MapPin, Phone, MessageCircle, ArrowRight, Car, Crown, Truck, Zap, Mountain, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";

type Category = {
  icon: typeof Car;
  eyebrow: string;
  title: string;
  intro: string;
  vehicles: string[];
  services: string[];
};

const categories: Category[] = [
  {
    icon: Truck,
    eyebrow: "SUV Detailing",
    title: "SUVs & Compact SUVs",
    intro:
      "SUVs dominate Indian roads, and they require advanced protection against dust, scratches, road debris, and harsh weather conditions.",
    vehicles: [
      "Tata Nexon",
      "Tata Punch",
      "Tata Punch EV",
      "Hyundai Creta",
      "Maruti Suzuki Brezza",
      "Mahindra XUV 3XO",
      "Mahindra Thar",
      "Mahindra Scorpio N",
      "Mahindra XUV700",
      "Kia Seltos",
      "Toyota Fortuner",
    ],
    services: [
      "Paint Protection Film (PPF)",
      "Ceramic & Graphene Coating",
      "Paint Correction",
      "Interior Deep Cleaning",
      "Alloy Wheel Detailing",
      "Anti Rust Coating",
    ],
  },
  {
    icon: Crown,
    eyebrow: "Luxury Detailing",
    title: "Premium & Luxury Cars",
    intro:
      "Luxury vehicles require specialized detailing techniques, safe washing methods, and premium-grade protection products.",
    vehicles: [
      "BMW 3 Series LWB",
      "Mercedes-Benz",
      "Audi",
      "Toyota Fortuner Legender",
      "Kia Seltos X-Line",
      "Mahindra XUV700",
      "Defender",
      "Jaguar",
      "Porsche",
    ],
    services: [
      "Self-Healing PPF",
      "Multi-Stage Paint Correction",
      "Luxury Interior Detailing",
      "Ceramic & Graphene Coating",
      "Windshield Protection Film",
    ],
  },
  {
    icon: Car,
    eyebrow: "Sedan Detailing",
    title: "Sedan Detailing Services",
    intro:
      "Sedans require regular detailing to maintain gloss, smoothness, and showroom finish.",
    vehicles: [
      "Maruti Suzuki Dzire",
      "Hyundai Verna",
      "Honda City",
      "BMW 3 Series LWB",
      "Skoda Slavia",
      "Volkswagen Virtus",
    ],
    services: [
      "Ceramic Coating",
      "Paint Polishing",
      "Interior Detailing",
      "Headlight Restoration",
      "PPF Installation",
    ],
  },
  {
    icon: Sparkles,
    eyebrow: "Hatchback Detailing",
    title: "Hatchback Detailing Services",
    intro:
      "Daily-driven hatchbacks face constant exposure to dust, sunlight, scratches, and pollution.",
    vehicles: [
      "Maruti Baleno",
      "Maruti Swift",
      "Hyundai i20",
      "Tata Altroz",
      "Tata Tiago",
    ],
    services: [
      "Foam Wash & Detailing",
      "Paint Protection Coating",
      "Interior Sanitization",
      "Paint Enhancement",
      "Alloy Cleaning",
    ],
  },
  {
    icon: Zap,
    eyebrow: "EV Detailing",
    title: "Electric Vehicle (EV) Detailing",
    intro:
      "Electric vehicles require advanced surface protection to maintain their modern design and premium finish.",
    vehicles: [
      "Tata Punch EV",
      "Tata Nexon EV",
      "Maruti Suzuki e Vitara",
      "MG ZS EV",
      "BYD Seal",
    ],
    services: [
      "Ceramic Coating",
      "Graphene Coating",
      "Paint Protection Film",
      "Interior Deep Cleaning",
      "Glass Protection",
    ],
  },
  {
    icon: Mountain,
    eyebrow: "Off-Road Detailing",
    title: "Off-Road & Adventure Vehicles",
    intro:
      "Adventure vehicles require stronger paint protection and underbody care because of rough road exposure.",
    vehicles: [
      "Mahindra Thar",
      "Scorpio N",
      "Toyota Fortuner",
      "Defender",
      "Isuzu V-Cross",
    ],
    services: [
      "Full Body PPF",
      "Underbody Anti Rust Coating",
      "Graphene Coating",
      "Engine Bay Detailing",
      "Mud & Dirt Deep Cleaning",
    ],
  },
];

const whyChoose = [
  "Professional Detailing Experts",
  "Premium Imported Products",
  "Advanced Paint Protection Solutions",
  "Luxury Finishing Standards",
  "Safe Detailing Techniques",
  "Customized Vehicle Care Packages",
  "Attention to Detail",
];

const faqs = [
  { q: "Do you provide detailing services for SUVs?", a: "Yes, CLNHYGEN specializes in SUV detailing, ceramic coating, and PPF installation." },
  { q: "Which vehicles are best suited for PPF?", a: "Luxury cars, SUVs, sports cars, and off-road vehicles benefit the most from Paint Protection Film." },
  { q: "Do you detail electric vehicles?", a: "Yes, we provide premium detailing and paint protection services for EVs." },
  { q: "Which is the best coating for daily-driven cars?", a: "Ceramic and graphene coating are excellent options for maintaining shine and protection." },
  { q: "Do you detail premium luxury vehicles?", a: "Yes, we specialize in detailing BMW, Audi, Mercedes-Benz, Defender, Fortuner, and other premium vehicles." },
];

const Vehicles = () => {
  return (
    <div>
      <PageHero
        eyebrow="Vehicles We Detail"
        title="Premium Detailing for Every Vehicle"
        subtitle="Professional car detailing, ceramic coating, PPF, paint correction, interior detailing, and premium protection for all cars, SUVs, luxury vehicles, and EVs in Meerut."
      />

      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">CLNHYGEN · Meerut</p>
          <h2 className="font-display text-3xl md:text-4xl">Premium Car Detailing Services for Every Vehicle Type</h2>
          <div className="mt-5 mx-auto h-px w-20 gold-divider" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            From daily-driven hatchbacks to premium luxury SUVs, our detailing experts deliver showroom-quality finish and long-lasting protection using advanced detailing techniques and premium products. CLNHYGEN is trusted by car enthusiasts and luxury vehicle owners across Meerut.
          </p>
        </div>
      </section>

      {/* Categories */}
      {categories.map((c, idx) => (
        <section
          key={c.title}
          className={`py-16 ${idx % 2 === 0 ? "border-y border-border bg-secondary/20" : ""}`}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col items-center text-center mb-10">
              <div className="h-14 w-14 rounded-2xl bg-gold/10 grid place-items-center mb-4">
                <c.icon className="h-7 w-7 text-gold" />
              </div>
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-2">{c.eyebrow}</p>
              <h3 className="font-display text-3xl md:text-4xl">{c.title}</h3>
              <p className="mt-4 text-muted-foreground max-w-2xl">{c.intro}</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-card p-7">
                <h4 className="font-display text-xl mb-5">Vehicles We Detail</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {c.vehicles.map((v) => (
                    <li key={v} className="flex items-start gap-2 text-sm">
                      <Sparkles className="h-4 w-4 text-gold mt-0.5 shrink-0" /> {v}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-7">
                <h4 className="font-display text-xl mb-5">Recommended Services</h4>
                <ul className="space-y-3">
                  {c.services.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-gold shrink-0" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Vehicle-Specific */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Customized Care</p>
          <h3 className="font-display text-3xl md:text-4xl">Why Vehicle-Specific Detailing Matters</h3>
          <div className="mt-5 mx-auto h-px w-20 gold-divider" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Every vehicle has different paint quality, surface design, usage conditions, and protection requirements. At CLNHYGEN, we customize detailing and protection solutions according to your vehicle type and driving conditions.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 border-y border-border bg-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Why CLNHYGEN</p>
            <h3 className="font-display text-3xl md:text-4xl">Trusted Premium Car Detailing Studio in Meerut</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((w) => (
              <div key={w} className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 hover:border-gold transition-smooth">
                <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                <span className="text-sm">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">FAQ</p>
            <h3 className="font-display text-3xl md:text-4xl">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
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

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="rounded-2xl bg-gradient-to-br from-card to-secondary/40 border border-border p-10 text-center shadow-elegant">
            <h3 className="font-display text-2xl md:text-3xl">Book Premium Vehicle Detailing in Meerut</h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Protect and enhance your vehicle with premium detailing services at CLNHYGEN.
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

export default Vehicles;