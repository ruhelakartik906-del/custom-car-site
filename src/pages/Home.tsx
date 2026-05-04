import { Link } from "react-router-dom";
import { ArrowRight, Shield, Sparkles, Droplets, Star, Award, Clock, CheckCircle2 } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import ceramic from "@/assets/service-ceramic.jpg";
import ppf from "@/assets/service-ppf.jpg";
import detailing from "@/assets/service-detailing.jpg";
import paint from "@/assets/service-paint.jpg";
import scorpio from "@/assets/vehicle-scorpio.jpg";
import fortuner from "@/assets/vehicle-fortuner.jpg";

const services = [
  { title: "Ceramic Coating", desc: "9H hydrophobic glass shield with up to 5 years of liquid-glass gloss.", img: ceramic, to: "/services/ceramic-coating", icon: Shield },
  { title: "Paint Protection Film", desc: "Self-healing transparent armor for stone-chips, swirls and abrasion.", img: ppf, to: "/services/ppf", icon: Sparkles },
  { title: "Car Detailing", desc: "From engine bay to under-body — every micron treated by hand.", img: detailing, to: "/services/car-detailing", icon: Droplets },
  { title: "Paint Correction", desc: "Multi-stage compounding to remove swirls, holograms and oxidation.", img: paint, to: "/services/paint-correction", icon: Award },
];

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCar} alt="Luxury SUV with mirror ceramic coating finish" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-overlay" />
          <div className="absolute inset-0 bg-background/40" />
        </div>
        <div className="relative container mx-auto min-h-[88vh] flex items-center">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-5 animate-fade-in">Pune's Premier Detail Studio</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] text-foreground animate-fade-up">
              Liquid Glass.
              <br />
              <span className="italic text-gold">Endless</span> Reflection.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/85 leading-relaxed">
              We treat every Scorpio, Fortuner and luxury machine like a museum piece — ceramic coatings, PPF and paint correction performed in a dust-controlled studio.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-gold text-primary-foreground rounded-sm text-sm tracking-[0.2em] uppercase hover:shadow-gold transition-smooth">
                Book Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/gallery" className="inline-flex items-center gap-2 px-7 py-3.5 border border-foreground/30 text-foreground rounded-sm text-sm tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-smooth">
                View Our Work
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "1200+", l: "Cars Detailed" },
                { n: "10 Yrs", l: "Experience" },
                { n: "4.9★", l: "Avg. Rating" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-gold">{s.n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">The Philosophy</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">A finish so deep, it looks <em className="text-gold not-italic">wet</em>.</h2>
            <div className="mt-6 h-px w-20 gold-divider" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Detailing isn't a wash. It's restoration. Every panel is decontaminated, every micron of clear-coat measured, every swirl chased down under fluorescent inspection lights — long before a drop of coating touches your paint.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We don't take more cars than our craftsmen can finish in a day. Patience is part of the price.
            </p>
            <ul className="mt-8 space-y-3">
              {["Dust-controlled detailing bay", "Calibrated paint-thickness gauges", "Genuine GYEON & Gtechniq products", "5-year warranty on coatings"].map((t) => (
                <li key={t} className="flex gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
              <img src={ceramic} alt="Ceramic coating water beading on hood" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden md:block bg-card border border-border p-6 shadow-elegant max-w-[220px]">
              <Star className="h-5 w-5 text-gold" />
              <p className="mt-3 text-sm italic text-foreground/90">"Best decision I made for my Fortuner. Looks better than showroom."</p>
              <p className="mt-3 text-xs text-muted-foreground">— Aditya R.</p>
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
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: "The Scorpio looks deeper, blacker and shinier than the day I drove it home. Worth every rupee.", n: "Rohan M.", c: "Scorpio-N Z8" },
              { q: "PPF on the front end has already saved me twice on highway runs. Invisible, perfect.", n: "Karan S.", c: "Fortuner Legender" },
              { q: "Five years on, the coating still beads water like day one. Auro is the real deal.", n: "Priya N.", c: "Innova Hycross" },
            ].map((t) => (
              <div key={t.n} className="bg-card border border-border p-8 rounded-sm">
                <div className="flex gap-1 text-gold">{Array.from({length: 5}).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <p className="mt-5 text-foreground/90 italic leading-relaxed">"{t.q}"</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-display text-lg">{t.n}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.c}</p>
                </div>
              </div>
            ))}
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