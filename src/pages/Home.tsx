import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Shield, Sparkles, Droplets, Star, Award, Clock, CheckCircle2, Quote, ChevronLeft, ChevronRight, Car, SprayCan, Phone, MessageCircle, CalendarCheck, Headphones } from "lucide-react";
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
  { q: "The Scorpio looks deeper, blacker and shinier than the day I drove it home. Worth every rupee.", n: "Rohan M.", c: "Scorpio-N Z8" },
  { q: "PPF on the front end has already saved me twice on highway runs. Invisible, perfect.", n: "Karan S.", c: "Fortuner Legender" },
  { q: "Five years on, the coating still beads water like day one. Auro is the real deal.", n: "Priya N.", c: "Innova Hycross" },
  { q: "Booked a full detail and ceramic — the car looks brand new. Professional team and on-time delivery.", n: "Aditya R.", c: "Thar LX" },
  { q: "Paint correction wiped years of swirls in a single weekend. The gloss is unreal.", n: "Megha K.", c: "Seltos GTX+" },
];

const Home = () => {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % total), 4000);
    return () => clearInterval(id);
  }, [total]);

  const visible = [0, 1, 2].map((i) => testimonials[(active + i) % total]);

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
                className="flex flex-col bg-card rounded-2xl shadow-lg overflow-hidden border border-border hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out"
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

      {/* PROCESS */}
      <section className="py-24 border-b border-border bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">The Process</p>
            <h2 className="font-display text-4xl md:text-5xl">Five days. Zero shortcuts.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { n: "01", t: "Inspection", d: "Paint thickness mapped panel by panel under inspection lights." },
              { n: "02", t: "Decontamination", d: "Iron fall-out, tar and bonded contaminants removed chemically and by clay." },
              { n: "03", t: "Correction", d: "Multi-stage machine polish to remove swirls, holograms and RIDS." },
              { n: "04", t: "Coating", d: "9H ceramic applied in controlled humidity, layered for depth." },
              { n: "05", t: "Cure & QC", d: "48-hour cure, IPA wipe-down, final inspection under LED tunnel." },
            ].map((p) => (
              <div key={p.n} className="relative">
                <div className="font-display text-6xl text-gold/30">{p.n}</div>
                <h3 className="mt-2 font-display text-2xl">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VEHICLES */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">SUV Specialists</p>
            <h2 className="font-display text-4xl md:text-5xl">Built for Indian Roads</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">From the rugged Scorpio to the imposing Fortuner — we know every panel.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[{img: scorpio, name: "Mahindra Scorpio", to: "/vehicles/scorpio"}, {img: fortuner, name: "Toyota Fortuner", to: "/vehicles/fortuner"}].map((v) => (
              <Link key={v.name} to={v.to} className="group relative overflow-hidden rounded-sm border border-border">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={v.img} alt={v.name} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gold">Specialist Care</p>
                    <h3 className="font-display text-3xl mt-1">{v.name}</h3>
                  </div>
                  <ArrowRight className="h-6 w-6 text-gold group-hover:translate-x-1 transition-smooth" />
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
            <h2 className="font-display text-4xl md:text-5xl">Trusted by Enthusiasts</h2>
          </div>
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
              {visible.map((t, idx) => (
                <div key={`${active}-${idx}`} className="bg-card border border-border p-8 rounded-sm animate-fade-up">
                  <Quote className="h-7 w-7 text-gold/60" />
                  <div className="flex gap-1 text-gold mt-3">{Array.from({length: 5}).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                  <p className="mt-5 text-foreground/90 italic leading-relaxed">"{t.q}"</p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="font-display text-lg">{t.n}</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.c}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                onClick={() => setActive((p) => (p - 1 + total) % total)}
                aria-label="Previous testimonial"
                className="h-10 w-10 grid place-items-center rounded-sm border border-border hover:border-gold hover:text-gold transition-smooth"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${i === active ? "w-8 bg-gold" : "w-2 bg-border hover:bg-gold/50"}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActive((p) => (p + 1) % total)}
                aria-label="Next testimonial"
                className="h-10 w-10 grid place-items-center rounded-sm border border-border hover:border-gold hover:text-gold transition-smooth"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
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

      {/* CTA */}
      <section className="relative overflow-hidden">
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
    </div>
  );
};

export default Home;