import { ArrowRight, Calendar } from "lucide-react";
import PageHero from "@/components/PageHero";
import ceramic from "@/assets/service-ceramic.jpg";
import ppf from "@/assets/service-ppf.jpg";
import detailing from "@/assets/service-detailing.jpg";
import paint from "@/assets/service-paint.jpg";
import scorpio from "@/assets/vehicle-scorpio.jpg";
import fortuner from "@/assets/vehicle-fortuner.jpg";

const posts = [
  { title: "Ceramic Coating vs Wax: Which One Actually Lasts?", cat: "Ceramic Coating", date: "April 22, 2026", img: ceramic, excerpt: "Wax gives a quick shine — ceramic gives years of protection. We break down the real-world differences." },
  { title: "Is PPF Worth It in India? A 5-Year Cost Analysis", cat: "PPF", date: "April 10, 2026", img: ppf, excerpt: "Stone-chips, repaints and resale value — running the numbers on whether PPF pays for itself." },
  { title: "How Often Should You Detail Your Car?", cat: "Detailing", date: "March 28, 2026", img: detailing, excerpt: "From daily drivers to weekend cruisers — a realistic detailing schedule for Indian conditions." },
  { title: "Swirl Marks 101: What Causes Them, How to Fix Them", cat: "Paint Correction", date: "March 14, 2026", img: paint, excerpt: "That cobweb haze under sunlight isn't dirt — it's micro-scratches in your clear-coat. Here's the fix." },
  { title: "Detailing the Mahindra Scorpio-N: Owner's Guide", cat: "Vehicles", date: "February 27, 2026", img: scorpio, excerpt: "Cladding, matte panels, dual-tone roofs — what every Scorpio-N owner should know about care." },
  { title: "Why Toyota Clear-Coat is the Toughest in the Business", cat: "Vehicles", date: "February 12, 2026", img: fortuner, excerpt: "Polishing a Fortuner takes more cuts than a German car. Here's why — and what we use." },
];

const Blog = () => (
  <div>
    <PageHero eyebrow="Journal" title="The Auro Blog" subtitle="Tips, deep-dives and behind-the-scenes from the studio floor." />
    <section className="py-20">
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {posts.map((p) => (
          <article key={p.title} className="group bg-card border border-border rounded-sm overflow-hidden flex flex-col hover:border-gold transition-smooth">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
            </div>
            <div className="p-7 flex flex-col flex-1">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="text-gold uppercase tracking-[0.2em]">{p.cat}</span>
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
              </div>
              <h2 className="mt-3 font-display text-2xl leading-tight group-hover:text-gold transition-smooth">{p.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
              <button className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold self-start">
                Read Article <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default Blog;