import { Link } from "react-router-dom";
import { MapPin, ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Car, Gem, BookOpen } from "lucide-react";
import PageHero from "@/components/PageHero";
import detailing from "@/assets/service-detailing.jpg";
import ppfImage from "@/assets/service-ppf.jpg";

type Section = { title: string; items: string[] };
type Post = {
  slug: string;
  city: string;
  title: string;
  intro: string[];
  services: Section[];
  whyChoose: string[];
  benefits: string[];
  closing: { search: string; book: string };
};

type Article = {
  slug: string;
  category: string;
  title: string;
  intro: string[];
};

const commonServices = (city: string): Section[] => [
  {
    title: `Ceramic Coating in ${city}`,
    items: [
      "Deep glossy shine",
      "Water-repellent protection",
      "UV and dirt resistance",
      "Easy maintenance",
    ],
  },
  {
    title: `Paint Protection Film (PPF) in ${city}`,
    items: ["Stone chips", "Minor scratches", "Road debris", "Paint fading"],
  },
  {
    title: "Interior Car Detailing",
    items: [
      "Seat shampooing",
      "Leather conditioning",
      "Dashboard polishing",
      "Carpet cleaning",
      "AC vent sanitization",
      "Odor removal",
    ],
  },
];

const cityPosts: Post[] = [
  {
    slug: "premium-car-detailing-studio-meerut",
    city: "Meerut",
    title: "Premium Car Detailing Studio in Meerut",
    intro: [
      "Looking for the best Premium Car Detailing Studio in Meerut? Give your car the professional care it deserves with advanced detailing services designed to restore shine, protect paint, and maintain your vehicle's luxury appearance.",
      "At a trusted Premium Car Detailing Studio in Meerut, expert professionals use high-quality products and modern techniques to deliver complete car care solutions for hatchbacks, sedans, SUVs, and luxury vehicles.",
    ],
    services: commonServices("Meerut"),
    whyChoose: [
      "Experienced detailing experts",
      "Premium imported products",
      "Advanced detailing equipment",
      "Long-lasting paint protection",
      "Affordable premium packages",
      "Customer satisfaction focused",
    ],
    benefits: [
      "Restores showroom-like finish",
      "Protects against dust and pollution",
      "Removes swirl marks and dullness",
      "Enhances driving experience",
      "Improves vehicle lifespan",
    ],
    closing: {
      search:
        "If you want the best car detailing in Meerut, ceramic coating in Meerut, or PPF installation in Meerut, choose a premium detailing studio that delivers professional results with complete vehicle protection.",
      book:
        "Give your car a luxury finish with expert detailing services in Meerut. Whether you need ceramic coating, PPF, paint correction, or complete interior detailing, professional car care ensures your vehicle always looks its best.",
    },
  },
  {
    slug: "premium-car-detailing-studio-dehradun",
    city: "Dehradun",
    title: "Premium Car Detailing Studio in Dehradun",
    intro: [
      "Looking for the best Premium Car Detailing Studio in Dehradun? Give your car complete luxury care with advanced detailing services designed to protect paint, restore shine, and maintain a showroom-like finish.",
      "A professional Premium Car Detailing Studio in Dehradun offers expert solutions like ceramic coating, paint protection film (PPF), paint correction, interior detailing, and exterior polishing using modern equipment and premium products.",
    ],
    services: commonServices("Dehradun"),
    whyChoose: [
      "Experienced detailing professionals",
      "Premium imported products",
      "Advanced detailing technology",
      "Safe paint protection methods",
      "Long-lasting vehicle shine",
      "Better resale value",
    ],
    benefits: [
      "Restores showroom-like finish",
      "Protects original paint quality",
      "Removes swirl marks and dullness",
      "Enhances interior hygiene",
      "Improves driving experience",
      "Maintains vehicle value",
    ],
    closing: {
      search:
        "If you are searching for the best car detailing in Dehradun, ceramic coating in Dehradun, or PPF installation in Dehradun, choose a trusted premium detailing studio for complete car care and protection.",
      book:
        "Keep your car looking new with expert detailing services in Dehradun. From ceramic coating and PPF to paint correction and interior detailing, premium car care ensures long-lasting shine, protection, and luxury appearance for your vehicle.",
    },
  },
  {
    slug: "premium-car-detailing-studio-ghaziabad",
    city: "Ghaziabad",
    title: "Premium Car Detailing Studio in Ghaziabad",
    intro: [
      "Looking for the best Premium Car Detailing Studio in Ghaziabad? Keep your car protected, glossy, and showroom-ready with advanced detailing services designed for long-lasting shine and paint protection.",
      "A trusted Premium Car Detailing Studio in Ghaziabad offers complete car care solutions including ceramic coating, Paint Protection Film (PPF), paint correction, interior detailing, and exterior polishing using premium products and modern detailing technology.",
    ],
    services: commonServices("Ghaziabad").map((s, i) =>
      i === 0
        ? {
            ...s,
            items: [
              "Deep glossy finish",
              "Water and dust resistance",
              "UV protection",
              "Easy maintenance",
              "Long-lasting paint protection",
            ],
          }
        : i === 1
        ? { ...s, items: [...s.items, "Daily wear and tear"] }
        : s
    ),
    whyChoose: [
      "Experienced detailing experts",
      "Advanced detailing equipment",
      "Premium imported products",
      "Safe paint protection methods",
      "Long-lasting vehicle shine",
      "Better resale value",
    ],
    benefits: [
      "Restores showroom-like finish",
      "Removes swirl marks and dullness",
      "Protects original paint quality",
      "Improves interior hygiene",
      "Enhances driving comfort",
      "Maintains vehicle value",
    ],
    closing: {
      search:
        "If you are searching for the best car detailing in Ghaziabad, ceramic coating in Ghaziabad, or PPF installation in Ghaziabad, choose a professional detailing studio for premium vehicle care and protection.",
      book:
        "Give your car the luxury care it deserves with expert detailing services in Ghaziabad. From ceramic coating and PPF to paint correction and interior detailing, professional car care helps maintain long-lasting shine, protection, and premium appearance for your vehicle.",
    },
  },
];

const articles: Article[] = [
  {
    slug: "what-is-paint-protection-film-ppf-worth-it-2026",
    category: "Paint Protection",
    title: "What Is Paint Protection Film (PPF) and Is It Worth It in 2026?",
    intro: [
      "In 2026, car owners are becoming more conscious than ever about maintaining their vehicle's appearance and resale value. With increasing road traffic, harsh weather conditions, stone chips, bird droppings, and UV exposure, protecting your car's paint has become a necessity rather than a luxury. This is where Paint Protection Film (PPF) comes into the picture.",
      "But what exactly is PPF, and is it worth investing in during 2026? Let's find out.",
    ],
  },
];

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-muted-foreground">
    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
    <span>{children}</span>
  </li>
);

const Blog = () => (
  <div>
    <PageHero
      eyebrow="CLNHYGEN Blog"
      title="Premium Detailing Insights"
      subtitle="City guides, paint protection know-how and luxury car care tips from the CLNHYGEN studio."
    />

    {/* Index */}
    <section className="py-16 border-b border-border bg-secondary/20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {cityPosts.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="group bg-card border border-border p-7 rounded-sm hover:border-gold transition"
            >
              <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold">
                <MapPin className="h-4 w-4" /> {p.city}
              </div>
              <h3 className="mt-4 font-display text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{p.intro[0]}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm text-gold group-hover:gap-3 transition-all">
                Read article <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
          {articles.map((a) => (
            <a
              key={a.slug}
              href={`#${a.slug}`}
              className="group bg-card border border-border p-7 rounded-sm hover:border-gold transition"
            >
              <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold">
                <BookOpen className="h-4 w-4" /> {a.category}
              </div>
              <h3 className="mt-4 font-display text-2xl">{a.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{a.intro[0]}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm text-gold group-hover:gap-3 transition-all">
                Read article <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* City Guide Posts */}
    {cityPosts.map((p, idx) => (
      <article
        id={p.slug}
        key={p.slug}
        className={`py-20 border-b border-border ${idx % 2 === 1 ? "bg-secondary/20" : ""}`}
      >
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-2 text-xs tracking-[0.4em] uppercase text-gold mb-4">
            <MapPin className="h-4 w-4" /> {p.city}
          </div>
          <h2 className="font-display text-4xl md:text-5xl">{p.title}</h2>
          <div className="mt-4 h-px w-20 gold-divider" />

          <div className="mt-8 grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-5">
              {p.intro.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
              ))}
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-elegant">
              <img src={detailing} alt={`${p.title} — CLNHYGEN`} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Services */}
          <div className="mt-14">
            <h3 className="font-display text-3xl flex items-center gap-3">
              <Gem className="h-6 w-6 text-gold" /> Premium Car Detailing Services in {p.city}
            </h3>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {p.services.map((s) => (
                <div key={s.title} className="bg-card border border-border p-6 rounded-sm">
                  <h4 className="font-display text-xl">{s.title}</h4>
                  <ul className="mt-4 grid gap-2.5">
                    {s.items.map((it) => <Bullet key={it}>{it}</Bullet>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose */}
          <div className="mt-14 grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="font-display text-3xl flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-gold" /> Why Choose Our Studio in {p.city}?
              </h3>
              <ul className="mt-6 grid gap-3">
                {p.whyChoose.map((b) => <Bullet key={b}>{b}</Bullet>)}
              </ul>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Professional car detailing not only improves your vehicle's appearance but also helps maintain resale value and protects the original paint for years.
              </p>
            </div>
            <div>
              <h3 className="font-display text-3xl flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-gold" /> Benefits of Professional Detailing
              </h3>
              <ul className="mt-6 grid gap-3">
                {p.benefits.map((b) => <Bullet key={b}>{b}</Bullet>)}
              </ul>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-14 bg-card border border-border p-8 rounded-sm">
            <p className="text-muted-foreground leading-relaxed">{p.closing.search}</p>
            <h3 className="mt-8 font-display text-2xl flex items-center gap-3">
              <Car className="h-6 w-6 text-gold" /> Book Premium Car Detailing in {p.city}
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{p.closing.book}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-background px-7 py-3 rounded-sm font-medium hover:opacity-90 transition">
                Book Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 border border-border px-7 py-3 rounded-sm font-medium hover:border-gold transition">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </article>
    ))}

    {/* PPF Article */}
    <article
      id="what-is-paint-protection-film-ppf-worth-it-2026"
      className="py-20 border-b border-border bg-secondary/20"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-2 text-xs tracking-[0.4em] uppercase text-gold mb-4">
          <BookOpen className="h-4 w-4" /> Paint Protection
        </div>
        <h2 className="font-display text-4xl md:text-5xl">
          What Is Paint Protection Film (PPF) and Is It Worth It in 2026?
        </h2>
        <div className="mt-4 h-px w-20 gold-divider" />

        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              In 2026, car owners are becoming more conscious than ever about maintaining their vehicle's appearance and resale value. With increasing road traffic, harsh weather conditions, stone chips, bird droppings, and UV exposure, protecting your car's paint has become a necessity rather than a luxury. This is where Paint Protection Film (PPF) comes into the picture.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              But what exactly is PPF, and is it worth investing in during 2026? Let's find out.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-elegant">
            <img src={ppfImage} alt="Paint Protection Film — CLNHYGEN" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* What Is PPF */}
        <div className="mt-14">
          <h3 className="font-display text-3xl flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-gold" /> What Is Paint Protection Film (PPF)?
          </h3>
          <div className="mt-6 space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              Paint Protection Film (PPF) is a transparent, high-performance polyurethane film applied to a vehicle's painted surfaces. It acts as an invisible shield that protects the paint from scratches, stone chips, road debris, bug splatter, bird droppings, and environmental contaminants.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Modern PPF technology has evolved significantly over the years. The latest films available in 2026 feature self-healing properties, hydrophobic coatings, UV resistance, and enhanced clarity, ensuring your car looks brand new for years.
            </p>
          </div>
        </div>

        {/* How Does PPF Work */}
        <div className="mt-14">
          <h3 className="font-display text-3xl flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-gold" /> How Does PPF Work?
          </h3>
          <div className="mt-6 space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              PPF creates a protective barrier between your car's paint and external damage. When minor scratches or swirl marks occur, the film's self-healing top layer can repair itself when exposed to heat from sunlight or warm water.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The film absorbs impacts from small stones, road debris, and daily wear and tear, preventing permanent damage to the original paint underneath.
            </p>
          </div>
        </div>

        {/* Top Benefits */}
        <div className="mt-14">
          <h3 className="font-display text-3xl flex items-center gap-3">
            <Gem className="h-6 w-6 text-gold" /> Top PPF Benefits in 2026
          </h3>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border p-6 rounded-sm">
              <h4 className="font-display text-xl">1. Superior Scratch Protection</h4>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Daily driving exposes your vehicle to countless risks such as keys, shopping carts, bushes, and improper washing techniques. PPF helps prevent these minor scratches from reaching the original paint.
              </p>
            </div>
            <div className="bg-card border border-border p-6 rounded-sm">
              <h4 className="font-display text-xl">2. Protection Against Stone Chips</h4>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Highway driving often leads to paint damage from flying stones and road debris. Paint Protection Film acts as a sacrificial layer that absorbs impacts and protects your vehicle's paintwork.
              </p>
            </div>
            <div className="bg-card border border-border p-6 rounded-sm">
              <h4 className="font-display text-xl">3. Self-Healing Technology</h4>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                One of the biggest PPF benefits is its self-healing capability. Minor scratches and swirl marks disappear automatically when exposed to heat, keeping the surface smooth and flawless.
              </p>
            </div>
            <div className="bg-card border border-border p-6 rounded-sm">
              <h4 className="font-display text-xl">4. UV and Oxidation Resistance</h4>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Continuous exposure to sunlight can fade your car's paint over time. Modern PPF blocks harmful UV rays and prevents oxidation, helping maintain the vehicle's original color and shine.
              </p>
            </div>
            <div className="bg-card border border-border p-6 rounded-sm">
              <h4 className="font-display text-xl">5. Easy Maintenance</h4>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Most premium PPFs feature hydrophobic properties that repel water, dirt, and contaminants. This makes cleaning easier and keeps your vehicle looking cleaner for longer periods.
              </p>
            </div>
            <div className="bg-card border border-border p-6 rounded-sm">
              <h4 className="font-display text-xl">6. Preserves Resale Value</h4>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                A well-maintained exterior significantly improves a vehicle's resale value. Since PPF protects the original factory paint, potential buyers often view protected vehicles as better-maintained investments.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-14">
          <h3 className="font-display text-3xl flex items-center gap-3">
            <Car className="h-6 w-6 text-gold" /> PPF vs Ceramic Coating
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Many car owners confuse PPF with ceramic coating, but they serve different purposes.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border border-border">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left p-4 font-display text-foreground">Feature</th>
                  <th className="text-left p-4 font-display text-foreground">Paint Protection Film</th>
                  <th className="text-left p-4 font-display text-foreground">Ceramic Coating</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 text-muted-foreground font-medium">Scratch Protection</td>
                  <td className="p-4 text-muted-foreground">Excellent</td>
                  <td className="p-4 text-muted-foreground">Limited</td>
                </tr>
                <tr className="border-b border-border bg-muted/30">
                  <td className="p-4 text-muted-foreground font-medium">Stone Chip Protection</td>
                  <td className="p-4 text-muted-foreground">Excellent</td>
                  <td className="p-4 text-muted-foreground">Minimal</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-muted-foreground font-medium">Self-Healing</td>
                  <td className="p-4 text-muted-foreground">Yes</td>
                  <td className="p-4 text-muted-foreground">No</td>
                </tr>
                <tr className="border-b border-border bg-muted/30">
                  <td className="p-4 text-muted-foreground font-medium">Gloss Enhancement</td>
                  <td className="p-4 text-muted-foreground">Good</td>
                  <td className="p-4 text-muted-foreground">Excellent</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-muted-foreground font-medium">Hydrophobic Effect</td>
                  <td className="p-4 text-muted-foreground">Good</td>
                  <td className="p-4 text-muted-foreground">Excellent</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground font-medium">Paint Preservation</td>
                  <td className="p-4 text-muted-foreground">Best</td>
                  <td className="p-4 text-muted-foreground">Good</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            For maximum car paint protection, many vehicle owners now combine PPF and ceramic coating for the ultimate defense package.
          </p>
        </div>

        {/* Is PPF Worth It */}
        <div className="mt-14">
          <h3 className="font-display text-3xl flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-gold" /> Is PPF Worth It in 2026?
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The answer is a strong yes, especially if:
          </p>
          <ul className="mt-6 grid gap-3">
            <Bullet>You own a new car.</Bullet>
            <Bullet>You frequently drive on highways.</Bullet>
            <Bullet>You want to maintain showroom-like paint quality.</Bullet>
            <Bullet>You plan to keep the vehicle for several years.</Bullet>
            <Bullet>You care about long-term resale value.</Bullet>
          </ul>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            With the cost of repainting panels increasing every year, investing in Paint Protection Film often proves more economical in the long run.
          </p>
        </div>

        {/* Areas to Protect */}
        <div className="mt-14">
          <h3 className="font-display text-3xl flex items-center gap-3">
            <Car className="h-6 w-6 text-gold" /> Which Areas Should Be Protected?
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            While full-body PPF offers maximum protection, many vehicle owners choose coverage for high-impact areas such as:
          </p>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Front bumper",
              "Hood",
              "Fenders",
              "Side mirrors",
              "Headlights",
              "Door edges",
              "Door handle cups",
              "Rear bumper loading area",
            ].map((area) => (
              <div key={area} className="flex items-center gap-3 bg-card border border-border p-4 rounded-sm">
                <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                <span className="text-muted-foreground text-sm">{area}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            These areas are most vulnerable to scratches and stone chips during daily use.
          </p>
        </div>

        {/* How Long Does PPF Last */}
        <div className="mt-14">
          <h3 className="font-display text-3xl flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-gold" /> How Long Does PPF Last?
          </h3>
          <div className="mt-6 space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              Premium Paint Protection Films installed professionally can last between 5 to 10 years, depending on the brand, maintenance, and environmental conditions. Most high-quality films also come with manufacturer warranties.
            </p>
          </div>
        </div>

        {/* Final Thoughts */}
        <div className="mt-14 bg-card border border-border p-8 rounded-sm">
          <h3 className="font-display text-2xl">Final Thoughts</h3>
          <div className="mt-6 space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              As vehicles become more expensive and paint technologies more advanced, protecting your investment is increasingly important. Paint Protection Film (PPF) remains one of the most effective solutions for long-term car paint protection in 2026.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From preventing scratches and stone chips to preserving resale value and maintaining a showroom finish, the numerous PPF benefits make it a worthwhile investment for car owners who want the best protection available.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you want your car to look newer for longer and avoid costly paint repairs, Paint Protection Film is undoubtedly worth considering in 2026.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-background px-7 py-3 rounded-sm font-medium hover:opacity-90 transition">
              Book PPF Installation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 border border-border px-7 py-3 rounded-sm font-medium hover:border-gold transition">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </article>
  </div>
);

export default Blog;
