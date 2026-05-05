import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import ceramic from "@/assets/service-ceramic.jpg";
import ppf from "@/assets/service-ppf.jpg";

const slides = [
  {
    img: heroCar,
    eyebrow: "Pune's Premier Detail Studio",
    title: "LIQUID GLASS.",
    titleAccent: "ENDLESS REFLECTION.",
    desc: "Museum-grade ceramic coatings in a dust-controlled studio.",
    cta: "Book Consultation",
    to: "/contact",
  },
  {
    img: ceramic,
    eyebrow: "9H Ceramic Coating",
    title: "PROTECT YOUR PAINT,",
    titleAccent: "FOR YEARS TO COME.",
    desc: "Up to 5 years of liquid-glass gloss & hydrophobic shield.",
    cta: "Know more",
    to: "/services/ceramic-coating",
  },
  {
    img: ppf,
    eyebrow: "Paint Protection Film",
    title: "INVISIBLE ARMOR,",
    titleAccent: "MAXIMUM PROTECTION.",
    desc: "Self-healing transparent film against stone-chips & scratches.",
    cta: "Know more",
    to: "/services/ppf",
  },
];

const tabs = [
  {
    label: "CERAMIC",
    to: "/services/ceramic-coating",
    heading: "Find Your Perfect Ceramic Coating",
    placeholder1: "Which ceramic package interests you?",
    placeholder2: "Do you have a vehicle in mind?",
  },
  {
    label: "PPF",
    to: "/services/ppf",
    heading: "Find Your Ideal PPF Plan",
    placeholder1: "Which PPF coverage interests you?",
    placeholder2: "Do you have a vehicle in mind?",
  },
  {
    label: "DETAILING",
    to: "/services/car-detailing",
    heading: "Find Your Detailing Service",
    placeholder1: "Which detailing package interests you?",
    placeholder2: "Do you have a vehicle in mind?",
  },
];

const HeroSlider = () => {
  const [idx, setIdx] = useState(0);
  const [tab, setTab] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const id = setInterval(() => setIdx((p) => (p + 1) % total), 5000);
    return () => clearInterval(id);
  }, [total]);

  const next = () => setIdx((p) => (p + 1) % total);
  const prev = () => setIdx((p) => (p - 1 + total) % total);

  return (
    <section className="relative">
      <div className="relative h-[480px] min-h-[450px] max-h-[500px] overflow-hidden bg-primary">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
            <div className="relative container mx-auto h-full flex items-center">
              <div className="max-w-2xl text-white ml-auto md:mr-8 lg:mr-16 text-right md:text-right pr-4">
                <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4 animate-fade-in">{s.eyebrow}</p>
                <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-6xl leading-[1] animate-fade-up">
                  {s.title}
                  <br />
                  <span className="text-gold">{s.titleAccent}</span>
                </h1>
                <p className="mt-5 text-base md:text-lg text-white/85">{s.desc}</p>
                <div className="mt-7 flex justify-end">
                  <Link
                    to={s.to}
                    className="inline-flex items-center gap-3 pl-7 pr-2 py-2 bg-gold text-primary rounded-full text-sm font-semibold tracking-wide uppercase hover:shadow-gold transition-smooth"
                  >
                    {s.cta}
                    <span className="h-9 w-9 grid place-items-center rounded-full bg-primary text-gold">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 h-11 w-11 grid place-items-center rounded-full bg-white/90 text-primary hover:bg-gold hover:text-primary transition-smooth shadow-elegant"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 h-11 w-11 grid place-items-center rounded-full bg-white/90 text-primary hover:bg-gold hover:text-primary transition-smooth shadow-elegant"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-gold" : "w-2 bg-white/50 hover:bg-white"}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom tabs floating */}
      <div className="container mx-auto -mt-6 relative z-20 max-w-[1170px]">
        <div className="flex justify-start gap-1 pl-2">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setTab(i)}
              style={{ padding: "0 30px", fontSize: "14px" }}
              className={`h-12 rounded-t-md font-semibold tracking-widest transition-smooth ${
                i === tab
                  ? "bg-card text-foreground border-t border-x border-border"
                  : "bg-secondary text-foreground/70 hover:bg-card"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Search/finder card */}
        <div className="bg-card border border-border rounded-b-md rounded-tr-md shadow-elegant p-6 md:p-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h2 className="font-display text-xl md:text-2xl">{tabs[tab].heading}</h2>
            <div className="flex gap-2">
              <button className="px-5 h-9 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-widest">BY SERVICE</button>
              <button className="px-5 h-9 rounded-full bg-secondary text-foreground/70 text-xs font-semibold tracking-widest hover:bg-muted">BY VEHICLE</button>
            </div>
          </div>
          <div className="grid md:grid-cols-[1fr_1fr_auto] gap-3">
            <input
              key={`p1-${tab}`}
              type="text"
              placeholder={tabs[tab].placeholder1}
              className="h-12 px-4 rounded-md bg-secondary/50 border border-border text-sm focus:outline-none focus:border-gold transition-smooth"
            />
            <input
              key={`p2-${tab}`}
              type="text"
              placeholder={tabs[tab].placeholder2}
              className="h-12 px-4 rounded-md bg-secondary/50 border border-border text-sm focus:outline-none focus:border-gold transition-smooth"
            />
            <Link
              to={tabs[tab].to}
              className="h-12 px-10 grid place-items-center rounded-md bg-gold text-primary text-sm font-semibold tracking-widest hover:shadow-gold transition-smooth"
            >
              SEARCH
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
