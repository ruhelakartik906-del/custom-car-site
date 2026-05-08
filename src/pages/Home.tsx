import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Shield, Sparkles, Droplets, Star, Award, Clock, CheckCircle2, Quote, ChevronLeft, ChevronRight, Car, SprayCan, Phone, MessageCircle, CalendarCheck, Headphones, BadgeCheck } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import ceramic from "@/assets/service-ceramic.jpg";
import ppf from "@/assets/service-ppf.jpg";
import detailing from "@/assets/service-detailing.jpg";
import paint from "@/assets/service-paint.jpg";
import scorpio from "@/assets/vehicle-scorpio.jpg";
import fortuner from "@/assets/vehicle-fortuner.jpg";
import HeroSlider from "@/components/HeroSlider";
import dealerHandover from "@/assets/dealer-handover.jpg";

const services = [
  { title: "Ceramic Coating", desc: "9H hydrophobic glass shield with up to 5 years of liquid-glass gloss.", img: ceramic, to: "/services/ceramic-coating", icon: Shield },
  { title: "Paint Protection Film", desc: "Self-healing transparent armor for stone-chips, swirls and abrasion.", img: ppf, to: "/services/ppf", icon: Sparkles },
  { title: "Car Detailing", desc: "From engine bay to under-body — every micron treated by hand.", img: detailing, to: "/services/car-detailing", icon: Droplets },
  { title: "Paint Correction", desc: "Multi-stage compounding to remove swirls, holograms and oxidation.", img: paint, to: "/services/paint-correction", icon: Award },
];

const testimonials = [
  { q: "The Scorpio looks deeper, blacker and shinier than the day I drove it home. Worth every rupee.", n: "Rohan M.", c: "Scorpio-N Z8", img: "https://i.pravatar.cc/150?img=12" },
  { q: "PPF on the front end has already saved me twice on highway runs. Invisible, perfect.", n: "Karan S.", c: "Fortuner Legender", img: "https://i.pravatar.cc/150?img=15" },
  { q: "Five years on, the coating still beads water like day one. Auro is the real deal.", n: "Priya N.", c: "Innova Hycross", img: "https://i.pravatar.cc/150?img=47" },
  { q: "Booked a full detail and ceramic — the car looks brand new. Professional team and on-time delivery.", n: "Aditya R.", c: "Thar LX", img: "https://i.pravatar.cc/150?img=33" },
  { q: "Paint correction wiped years of swirls in a single weekend. The gloss is unreal.", n: "Megha K.", c: "Seltos GTX+", img: "https://i.pravatar.cc/150?img=49" },
];

const Home = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((p) => (p + 1) % total), 4000);
    return () => clearInterval(id);
  }, [total, paused]);

  return (
    <div>
      {/* HERO SLIDER */}
      <HeroSlider />

      {/* PHILOSOPHY + 4-BOX GRID */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Our Philosophy</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              A finish so deep, it looks <em className="text-gold not-italic">wet</em>.
            </h2>
            <div className="mt-6 h-px w-20 gold-divider mx-auto" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Detailing isn't a wash. It's restoration. Every panel is decontaminated, every micron of clear-coat measured, every swirl chased down under fluorescent inspection lights — long before a drop of coating touches your paint. We don't take more cars than our craftsmen can finish in a day. Patience is part of the price.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Car, title: "Paint Correction", text: "Safely remove swirls, scratches, and oxidation." },
              { Icon: Shield, title: "Ceramic Coating", text: "Long-term hydrophobicity and high-gloss protection." },
              { Icon: SprayCan, title: "Interior Detail", text: "Deep clean, steam sanitization, and conditioning." },
              { Icon: Award, title: "Prestige Service", text: "Comprehensive detailing with fine-attention focus." },
            ].map(({ Icon, title, text }) => (
              <div
                key={title}
                className="group bg-card border border-border rounded-xl p-8 text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 ease-in-out"
              >
                <div className="mx-auto h-16 w-16 grid place-items-center rounded-full bg-gold/10 mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon className="h-8 w-8 text-gold" strokeWidth={1.25} />
                </div>
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE & TRUST */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="overflow-hidden rounded-[20px] shadow-elegant">
              <img
                src={dealerHandover}
                alt="Dealer handing car keys to a happy customer"
                loading="lazy"
                width={1280}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Experience & Trust</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Driving Happiness Since <span className="text-gold">2015</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                At Auro Detail Studio, we don't just sell cars; we deliver dreams. Our commitment is to provide the finest pre-owned luxury vehicles, each undergoing a rigorous 150-point quality check to ensure you drive home with complete peace of mind.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-5">
                {[
                  { num: "1200+", label: "Happy Families Served" },
                  { num: "50+", label: "Luxury Brands in Stock" },
                  { num: "4.9/5", label: "Customer Trust Rating" },
                  { num: "100%", label: "Certified Quality Assurance" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-border bg-card p-6 hover:border-gold transition-smooth"
                  >
                    <div className="font-display text-4xl md:text-5xl font-bold text-gold">{s.num}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM FLEET */}
      <section className="py-24 border-b border-border bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 px-4 py-1.5 text-xs font-semibold tracking-wide mb-5">
              <CalendarCheck className="h-3.5 w-3.5" />
              AVAILABLE IMMEDIATELY
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Explore Our <span className="text-gold">Premium</span> Fleet
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Ready-to-drive luxury SUVs, fully certified and detailed for your lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
            {[
              {
                name: "Mahindra Scorpio-N (Z8 L)",
                img: scorpio,
                specs: [
                  { k: "Model", v: "2024 (New)" },
                  { k: "Engine", v: "2.2L mHawk Diesel" },
                  { k: "Transmission", v: "6-Speed AT" },
                  { k: "Drive", v: "4WD (4XPLOR)" },
                ],
                features: ["Electric Sunroof", "Sony 3D Immersive Audio", "Adrenox Connectivity", "6 Airbags Safety"],
              },
              {
                name: "Toyota Fortuner (Legender)",
                img: fortuner,
                specs: [
                  { k: "Model", v: "2024" },
                  { k: "Engine", v: "2.8L Turbo Diesel" },
                  { k: "Transmission", v: "6-Speed AT" },
                  { k: "Drive", v: "4x4 High/Low Range" },
                ],
                features: ["Ventilated Front Seats", "Power Back Door", "Ambient Lighting", "Tough 4x4 Capabilities"],
              },
            ].map((car) => (
              <div
                key={car.name}
                className="flex flex-col bg-card rounded-2xl shadow-2xl overflow-hidden border border-border"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={car.img} alt={car.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-2xl mb-5">{car.name}</h3>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {car.specs.map((s) => (
                      <div key={s.k} className="rounded-lg border border-border bg-background/40 p-3">
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.k}</p>
                        <p className="text-sm font-medium mt-1">{s.v}</p>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6 flex-1">
                    {car.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <a href="tel:+910000000000" className="inline-flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-3 rounded-lg transition-colors">
                      <Phone className="h-4 w-4" /> Call Now
                    </a>
                    <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-3 rounded-lg transition-colors">
                      <MessageCircle className="h-4 w-4" /> Chat Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FLOATING CONSULTATION CARD */}
          <div className="max-w-3xl mx-auto mt-16">
            <div className="bg-white rounded-2xl shadow-2xl border border-border p-10 text-center">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-black">
                Still Can't Decide? 🤔
              </h3>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Book a free consultation call with our expert car advisors to find the perfect vehicle for your lifestyle and budget.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors">
                  <MessageCircle className="h-4 w-4" /> Chat Now
                </a>
                <a href="tel:+910000000000" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors">
                  <Headphones className="h-4 w-4" /> Talk to Advisor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={heroCar} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative container mx-auto py-24 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Ready when you are</p>
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl mx-auto leading-tight">
            Let's give your car the finish it deserves.
          </h2>
          <Link to="/contact" className="mt-9 inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground rounded-sm text-sm tracking-[0.2em] uppercase hover:shadow-gold transition-smooth">
            Schedule a Visit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">What We Offer</p>
              <h2 className="font-display text-4xl md:text-5xl">Signature Services</h2>
            </div>
            <Link to="/pricing" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gold hover:gap-4 transition-all">
              View Pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.title} to={s.to} className="group relative overflow-hidden rounded-sm border border-border bg-card transition-smooth hover:border-gold">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <s.icon className="h-6 w-6 text-gold mb-3" />
                  <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-gold">Explore <ArrowRight className="h-3 w-3" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="py-24 border-b border-border bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Client Stories</p>
            <h2 className="font-display text-4xl md:text-5xl">What Our Clients Say</h2>
          </div>

          <div
            className="relative group max-w-[1200px] mx-auto"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="overflow-hidden px-2">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${active * (100 / 3)}%)` }}
              >
                {[...testimonials, ...testimonials.slice(0, 3)].map((t, idx) => (
                  <div
                    key={idx}
                    className="w-1/3 shrink-0 px-3"
                  >
                    <div className="relative bg-card border border-border p-8 rounded-[20px] shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out h-full flex flex-col">
                      <Quote className="absolute top-5 left-5 h-9 w-9 text-gold/30" />
                      <div className="flex justify-end gap-0.5 text-gold">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="mt-6 text-foreground/90 italic leading-relaxed flex-1">"{t.q}"</p>
                      <div className="mt-6 pt-6 border-t border-border flex items-center gap-4">
                        <img
                          src={t.img}
                          alt={t.n}
                          loading="lazy"
                          className="h-12 w-12 rounded-full object-cover border-2 border-gold/40"
                        />
                        <div className="flex-1">
                          <p className="font-display text-lg leading-tight">{t.n}</p>
                          <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.c}</p>
                        </div>
                      </div>
                      <div className="mt-4 inline-flex self-start items-center gap-1.5 rounded-full bg-green-100 text-green-700 px-3 py-1 text-[11px] font-semibold">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        Verified
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setActive((p) => (p - 1 + total) % total)}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 h-12 w-12 grid place-items-center rounded-full bg-card border border-border shadow-lg opacity-0 group-hover:opacity-100 hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setActive((p) => (p + 1) % total)}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 h-12 w-12 grid place-items-center rounded-full bg-card border border-border shadow-lg opacity-0 group-hover:opacity-100 hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto grid md:grid-cols-3 gap-10">
          {[
            { i: Award, t: "Certified Detailers", d: "Trained by GYEON, Gtechniq and XPEL — internationally certified installers." },
            { i: Clock, t: "On-time, Every Time", d: "Booked slots, photo updates and committed delivery. No lost weekends." },
            { i: Shield, t: "Real Warranty", d: "Up to 5-year coating warranty with annual inspection — backed in writing." },
          ].map((b) => (
            <div key={b.t} className="text-center">
              <div className="mx-auto h-14 w-14 grid place-items-center rounded-sm bg-gradient-gold mb-5">
                <b.i className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO CONTENT — CLNHYGEN MEERUT */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">CLNHYGEN · Meerut</p>
            <h2 className="font-display text-4xl md:text-5xl">Premium Car Detailing in Meerut</h2>
            <div className="mt-6 h-px w-20 gold-divider mx-auto" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Welcome to <strong className="text-foreground">CLNHYGEN</strong> — the trusted destination for premium
              car detailing in Meerut. We specialize in Paint Protection Film (PPF), ceramic coating, paint correction,
              interior detailing, and luxury car care designed to keep your vehicle protected, glossy and showroom-ready.
              From a Fortuner, Thar or Scorpio-N to BMW, Mercedes and Audi — our team delivers unmatched finishing and deep protection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-16">
            {[
              "Paint Protection Film (PPF)",
              "Ceramic Coating",
              "Graphene Coating",
              "Car Paint Correction",
              "Interior Deep Cleaning",
              "Exterior Car Detailing",
              "Car Rubbing & Polishing",
              "Headlight Restoration",
              "Alloy Wheel Detailing",
              "Car Spa & Foam Wash",
              "Engine Bay Cleaning",
              "Dent Paint & Body Shop",
            ].map((s) => (
              <div key={s} className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 hover:border-gold transition-smooth">
                <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                <span className="text-sm">{s}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl mb-4">Paint Protection Film (PPF) in Meerut</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Protect your car's original paint from stone chips, scratches, swirl marks, UV damage and road debris with our premium PPF.
              </p>
              <ul className="space-y-2 text-sm">
                {["Self-Healing Technology", "High-Gloss Finish", "Hydrophobic Surface", "Non-Yellowing Material", "Long-Term Paint Protection", "Enhanced Resale Value"].map((b) => (
                  <li key={b} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold shrink-0" />{b}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl mb-4">Ceramic Coating in Meerut</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                A nano-protective layer that delivers superior gloss, water repellency and protection against dirt, UV rays and contamination.
              </p>
              <ul className="space-y-2 text-sm">
                {["Deep Mirror Gloss Finish", "Hydrophobic Water Beading", "UV & Oxidation Protection", "Easier Vehicle Cleaning", "Enhanced Paint Depth", "Long-Lasting Surface Protection"].map((b) => (
                  <li key={b} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold shrink-0" />{b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-to-br from-card to-secondary/40 border border-border p-10 text-center">
            <h3 className="font-display text-2xl md:text-3xl">Book Premium Car Detailing in Meerut</h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Mohkampur Industrial Area, Meerut, Uttar Pradesh · +91 84499 00095
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="tel:+918449900095" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors">
                <Phone className="h-4 w-4" /> Call +91 84499 00095
              </a>
              <a href="https://wa.me/918449900095" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;