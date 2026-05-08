import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30 mt-24">
      <div className="container mx-auto py-16 grid gap-12 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 -mt-8 mb-2">
            <img src={logo} alt="CLNHYGEN" className="h-40 w-auto object-contain" />
          </Link>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            Premium car detailing studio in Meerut — PPF, ceramic coating, paint correction & luxury car care.
          </p>
          <div className="flex gap-3 mt-5">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-sm border border-border hover:border-gold hover:text-gold transition-smooth">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services/ceramic-coating" className="hover:text-gold">Ceramic Coating</Link></li>
            <li><Link to="/services/ppf" className="hover:text-gold">Paint Protection Film</Link></li>
            <li><Link to="/services/car-detailing" className="hover:text-gold">Car Detailing</Link></li>
            <li><Link to="/services/paint-correction" className="hover:text-gold">Paint Correction</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Blog</Link></li>
            <li><Link to="/pricing" className="hover:text-gold">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Visit Studio</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" /> Mohkampur Industrial Area, Meerut, Uttar Pradesh</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" /> +91 84499 00095</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-gold mt-0.5 shrink-0" /> hello@clnhygen.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container mx-auto py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} CLNHYGEN. All rights reserved.</p>
          <p>Crafted with precision in Meerut, India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;