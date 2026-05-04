import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
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
      "text-sm tracking-wide uppercase transition-smooth hover:text-gold",
      isActive ? "text-gold" : "text-foreground/80"
    );

  const isServicesActive = location.pathname.startsWith("/services");
  const isVehiclesActive = location.pathname.startsWith("/vehicles");

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gradient-gold shadow-gold">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-2xl text-foreground">Auro<span className="text-gold">.</span></div>
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Detail Studio</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink to="/" end className={linkClass}>Home</NavLink>

          {/* Services dropdown */}
          <div className="relative group">
            <button
              className={cn(
                "flex items-center gap-1 text-sm tracking-wide uppercase transition-smooth hover:text-gold",
                isServicesActive ? "text-gold" : "text-foreground/80"
              )}
            >
              Services <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth">
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
          <div className="relative group">
            <button
              className={cn(
                "flex items-center gap-1 text-sm tracking-wide uppercase transition-smooth hover:text-gold",
                isVehiclesActive ? "text-gold" : "text-foreground/80"
              )}
            >
              Vehicles <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth">
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

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 text-xs tracking-[0.2em] uppercase bg-gradient-gold text-primary-foreground rounded-sm hover:shadow-gold transition-smooth"
        >
          Book Now
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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