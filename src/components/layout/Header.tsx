import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sparkles, Search, MapPin, User } from "lucide-react";
import { cn } from "@/lib/utils";
import scorpioThumb from "@/assets/vehicle-scorpio.jpg";
import fortunerThumb from "@/assets/vehicle-fortuner.jpg";
import logo from "@/assets/logo.png";

const services = [
  { label: "Ceramic Coating", to: "/services/ceramic-coating" },
  { label: "Graphene Coating", to: "/services/graphene-coating" },
  { label: "Paint Protection Film (PPF)", to: "/services/ppf" },
  { label: "Luxury Car Detailing", to: "/services/luxury-car-detailing" },
  { label: "Car Detailing", to: "/services/car-detailing" },
  { label: "Exterior Detailing", to: "/services/exterior-detailing" },
  { label: "Car Spa & Foam Wash", to: "/services/car-spa" },
  { label: "Car Rubbing & Polishing", to: "/services/car-rubbing-polishing" },
  { label: "Paint Correction", to: "/services/paint-correction" },
  { label: "Dent Paint & Body Shop", to: "/services/dent-paint" },
  { label: "Headlight Restoration", to: "/services/headlight-restoration" },
  { label: "Engine Bay Detailing", to: "/services/engine-bay-detailing" },
  { label: "Anti Rust Coating", to: "/services/anti-rust-coating" },
  { label: "Alloy Wheel Detailing", to: "/services/alloy-wheel-detailing" },
];

const vehicles = [
  { label: "All Vehicles We Detail", to: "/vehicles", img: scorpioThumb, sub: "SUVs · Luxury · Sedans · EVs" },
  { label: "Mahindra Scorpio", to: "/vehicles/scorpio", img: scorpioThumb, sub: "Made for the Beast" },
  { label: "Toyota Fortuner", to: "/vehicles/fortuner", img: fortunerThumb, sub: "King of the Highway" },
];

const indianStates = [
  "Meerut",
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [location_, setLocation_] = useState("Meerut");
  const location = useLocation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
            <img src={logo} alt="CLNHYGEN" className="h-28 w-auto object-contain" />
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
            <div className="relative flex items-center gap-2 px-4 h-10 rounded-full border border-border hover:border-gold transition-smooth text-sm">
              <MapPin className="h-4 w-4 text-gold" />
              <select
                value={location_}
                onChange={(e) => setLocation_(e.target.value)}
                className="bg-transparent outline-none text-sm pr-5 appearance-none cursor-pointer max-w-[140px]"
                aria-label="Select location"
              >
                {indianStates.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <ChevronDown className="h-3.5 w-3.5 pointer-events-none" />
            </div>
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
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth z-50">
                <div className="w-72 rounded-2xl border border-border bg-secondary/95 backdrop-blur shadow-elegant overflow-hidden p-2">
                  {vehicles.map((v) => (
                    <Link
                      key={v.to}
                      to={v.to}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-popover-foreground/85 hover:bg-background hover:text-gold transition-smooth"
                    >
                      <img src={v.img} alt={v.label} className="h-11 w-11 rounded-full object-cover ring-2 ring-border" />
                      <span className="flex flex-col leading-tight text-left">
                        <span className="font-medium">{v.label}</span>
                        <span className="text-[11px] uppercase tracking-widest text-muted-foreground">{v.sub}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink to="/products" className={linkClass}>Products</NavLink>
            <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/blog" className={linkClass}>Blog</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bottom-0 z-40 overflow-y-auto border-t border-border bg-background/95 backdrop-blur">
          <nav className="container mx-auto py-6 flex flex-col gap-1">
            {[
              { to: "/", label: "Home" },
              ...services.map((s) => ({ to: s.to, label: `— ${s.label}` })),
              ...vehicles.map((v) => ({ to: v.to, label: `— ${v.label}` })),
              { to: "/products", label: "Products" },
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