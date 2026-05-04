import { useMemo, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ceramic from "@/assets/service-ceramic.jpg";
import ppf from "@/assets/service-ppf.jpg";
import detailing from "@/assets/service-detailing.jpg";
import paint from "@/assets/service-paint.jpg";
import scorpio from "@/assets/vehicle-scorpio.jpg";
import fortuner from "@/assets/vehicle-fortuner.jpg";
import hero from "@/assets/hero-car.jpg";

type Item = { id: number; title: string; category: string; img: string };

const categories = ["All", "Ceramic Coating", "PPF", "Car Detailing", "Paint Correction", "Scorpio", "Fortuner"] as const;

const sources: Record<Exclude<typeof categories[number], "All">, string> = {
  "Ceramic Coating": ceramic,
  "PPF": ppf,
  "Car Detailing": detailing,
  "Paint Correction": paint,
  "Scorpio": scorpio,
  "Fortuner": fortuner,
};

const projectTitles = [
  "Mirror Black Reflection", "Hydrophobic Beading", "Showroom Restored",
  "Highway-Ready Shield", "Stone-Chip Defense", "Invisible Armor",
  "Concours Detail", "Leather Revival", "Cabin Refresh",
  "Swirl-Free Finish", "Gloss Restoration", "Holograms Removed",
  "Black Edition Glow", "Off-Road Warrior", "Z8L Showcase",
  "Legender Brilliance", "GR-Sport Polish", "Attitude Black Coat",
];

// Generate 60 items so pagination is meaningful (4 pages of 15)
const items: Item[] = Array.from({ length: 60 }).map((_, i) => {
  const catKeys = Object.keys(sources) as (keyof typeof sources)[];
  const cat = catKeys[i % catKeys.length];
  return {
    id: i + 1,
    title: `${projectTitles[i % projectTitles.length]} #${String(i + 1).padStart(3, "0")}`,
    category: cat,
    img: sources[cat],
  };
});

const PER_PAGE = 15; // 3 columns × 5 rows

const Gallery = () => {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState<typeof categories[number]>("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return items.filter((it) => {
      const catOk = activeCat === "All" || it.category === activeCat;
      const q = search.trim().toLowerCase();
      const searchOk = !q || it.title.toLowerCase().includes(q) || it.category.toLowerCase().includes(q);
      return catOk && searchOk;
    });
  }, [activeCat, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PER_PAGE;
  const visible = filtered.slice(start, start + PER_PAGE);

  const handleSearch = (v: string) => { setSearch(v); setPage(1); };
  const handleCat = (c: typeof categories[number]) => { setActiveCat(c); setPage(1); };

  const heroImg = hero;

  return (
    <div>
      <PageHero eyebrow="Our Portfolio" title="Gallery" subtitle="A curated showcase of cars that have left our studio gleaming." />

      {/* Search + Categories */}
      <section className="py-12 border-b border-border bg-secondary/20">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search projects, categories, vehicles..."
              className="w-full pl-12 pr-4 py-3.5 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-smooth"
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => handleCat(c)}
                className={`px-5 py-2 text-xs uppercase tracking-[0.2em] rounded-sm border transition-smooth ${
                  activeCat === c
                    ? "border-gold bg-gold text-primary-foreground"
                    : "border-border text-foreground/80 hover:border-gold hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Showing {visible.length} of {filtered.length} {filtered.length === 1 ? "result" : "results"}
            {activeCat !== "All" && <span className="text-gold"> — {activeCat}</span>}
          </p>

          {visible.length === 0 ? (
            <div className="py-24 text-center text-muted-foreground">
              <p className="font-display text-3xl text-foreground mb-2">No projects found</p>
              <p>Try a different search term or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {visible.map((it) => (
                <div key={it.id} className="group relative overflow-hidden rounded-sm border border-border bg-card cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={it.img} alt={it.title} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-smooth">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{it.category}</p>
                    <h3 className="mt-1 font-display text-xl text-foreground">{it.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={safePage === 1}
                className="h-10 w-10 grid place-items-center rounded-sm border border-border text-foreground hover:border-gold hover:text-gold transition-smooth disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }).map((_, i) => {
                const n = i + 1;
                return (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={`h-10 w-10 grid place-items-center rounded-sm border text-sm transition-smooth ${
                      safePage === n
                        ? "border-gold bg-gold text-primary-foreground"
                        : "border-border text-foreground hover:border-gold hover:text-gold"
                    }`}
                  >
                    {n}
                  </button>
                );
              })}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage === totalPages}
                className="h-10 w-10 grid place-items-center rounded-sm border border-border text-foreground hover:border-gold hover:text-gold transition-smooth disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* hidden ref to silence unused import in some builds */}
      <img src={heroImg} alt="" className="hidden" />
    </div>
  );
};

export default Gallery;