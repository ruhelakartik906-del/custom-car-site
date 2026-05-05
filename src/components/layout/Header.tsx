import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sparkles, Search, MapPin, User } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { label: "Ceramic Coating", to: "/services/ceramic-coating" },
  { label: "Paint Protection Film (PPF)", to: "/services/ppf" },
  { label: "Car Detailing", to: "/services/car-detailing" },
  { label: "Paint Correction", to: "/services/paint-correction" },
];

const vehicles = [
  { label: "Mahindra Scorpio", to: "/vehicles/scorpio" },
  { label: "Toyota Fortuner", to: "/vehicles/fortuner" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "text-sm font-medium tracking-wide uppercase transition-smooth hover:text-gold",
      isActive ? "text-gold" : "text-primary-foreground/90"
    );

  const isServicesActive = location.pathname.startsWith("/services");
  const isVehiclesActive = location.pathname.startsWith("/vehicles");

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top row: logo + search + location/profile */}
      <div className="border-b border-border bg-background">
        <div className="container mx-auto flex h-[70px] items-center gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gradient-gold shadow-gold">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-2xl text-foreground">Auro<span className="text-gold">.</span></div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Detail Studio</div>
            </div>
          </Link>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 justify-center mx-auto">
            <div className="relative w-full max-w-[500px]">
              <input
                type="text"
                placeholder="Search for Services, Vehicles, Eg: Ceramic, or Fortuner"
                className="w-full h-12 pl-5 pr-14 rounded-full border border-border bg-secondary/40 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-smooth"
              />
              <button
                aria-label="Search"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 h-9 w-9 grid place-items-center rounded-full bg-foreground text-background hover:bg-gold transition-smooth"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Location + profile */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button className="flex items-center gap-2 px-4 h-10 rounded-full border border-border hover:border-gold transition-smooth text-sm">
              <MapPin className="h-4 w-4 text-gold" />
              <span>Pune</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <button aria-label="Account" className="h-10 w-10 grid place-items-center rounded-full border border-border hover:border-gold hover:text-gold transition-smooth">
              <User className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden ml-auto text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Bottom dark nav bar */}
      <div className="hidden lg:block bg-nav text-nav-foreground">
        <div className="container mx-auto">
          <nav className="flex items-center justify-center gap-10 h-12">
            <NavLink to="/" end className={linkClass}>Home</NavLink>

            {/* Services dropdown */}
            <div className="relative group h-full flex items-center">
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-smooth hover:text-gold",
                  isServicesActive ? "text-gold" : "text-primary-foreground/90"
                )}
              >
                Services <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth z-50">
                <div className="w-64 rounded-sm border border-border bg-popover shadow-elegant overflow-hidden">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block px-5 py-3 text-sm text-popover-foreground/85 hover:bg-secondary hover:text-gold transition-smooth border-b border-border/40 last:border-0"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Vehicles dropdown */}
            <div className="relative group h-full flex items-center">
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-smooth hover:text-gold",
                  isVehiclesActive ? "text-gold" : "text-primary-foreground/90"
                )}
              >
                Vehicles <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth z-50">
                <div className="w-56 rounded-sm border border-border bg-popover shadow-elegant overflow-hidden">
                  {vehicles.map((v) => (
                    <Link
                      key={v.to}
                      to={v.to}
                      className="block px-5 py-3 text-sm text-popover-foreground/85 hover:bg-secondary hover:text-gold transition-smooth border-b border-border/40 last:border-0"
                    >
                      {v.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
            <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/blog" className={linkClass}>Blog</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="container mx-auto py-6 flex flex-col gap-1">
            {[
              { to: "/", label: "Home" },
              ...services.map((s) => ({ to: s.to, label: `— ${s.label}` })),
              ...vehicles.map((v) => ({ to: v.to, label: `— ${v.label}` })),
              { to: "/pricing", label: "Pricing" },
              { to: "/gallery", label: "Gallery" },
              { to: "/about", label: "About" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.to + item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm uppercase tracking-wide text-foreground/80 hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;