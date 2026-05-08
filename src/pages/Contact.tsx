import { useState } from "react";
import { MapPin, Phone, Globe, Send, CheckCircle2, Sparkles, Gem, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Ceramic Coating",
  "Paint Protection Film (PPF)",
  "Car Detailing",
  "Interior Cleaning",
  "Car Polishing",
  "Paint Correction",
  "Foam Wash",
  "Deep Cleaning Services",
];

const expect = [
  "Professional car care specialists",
  "Premium detailing products",
  "High-tech detailing equipment",
  "Affordable car care service packages",
  "Durable car paint protection",
  "Prompt customer support",
];

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-muted-foreground">
    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
    <span>{children}</span>
  </li>
);

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", vehicle: "", service: "Ceramic Coating", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Request received", description: "Our team will reach out shortly. Thank you!" });
    setForm({ name: "", email: "", phone: "", vehicle: "", service: "Ceramic Coating", message: "" });
  };

  const f = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <div>
      <PageHero
        eyebrow="Contact Us"
        title="Contact CLNHYGEN Car Detailing"
        subtitle="Book a service, ask about packages, or get expert advice — our team is here to give your car the attention it deserves."
      />

      {/* Intro */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground leading-relaxed">
            Are you looking for the best car detailing, ceramic coating, PPF, or car polishing services? The experts at CLNHYGEN are always here to give your car the best attention it deserves. To book a service, inquire about our packages, or seek professional advice regarding your vehicle, contact us at your convenience.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We endeavor to provide top-quality vehicle care through a professional team, premium products, and total customer satisfaction.
          </p>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="py-16 border-t border-border bg-secondary/20">
        <div className="container mx-auto grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gold">Contact Information</p>
              <h2 className="mt-3 font-display text-3xl">Reach CLNHYGEN</h2>
              <div className="mt-4 h-px w-20 gold-divider" />
            </div>

            {[
              { i: MapPin, t: "Studio", v: "Meerut, Uttar Pradesh", href: undefined },
              { i: Phone, t: "Call / WhatsApp", v: "+91 90847 24507", href: "tel:+919084724507" },
              { i: Phone, t: "Call / WhatsApp", v: "+91 84499 00095", href: "tel:+918449900095" },
              { i: Globe, t: "Website", v: "www.clnhygen.com", href: "https://www.clnhygen.com" },
            ].map((b, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-11 w-11 grid place-items-center rounded-sm bg-gradient-gold shrink-0">
                  <b.i className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">{b.t}</p>
                  {b.href ? (
                    <a href={b.href} className="mt-1 block text-foreground leading-relaxed hover:text-gold transition">{b.v}</a>
                  ) : (
                    <p className="mt-1 text-foreground leading-relaxed">{b.v}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 bg-card border border-border rounded-sm p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Name</label>
                <input required value={form.name} onChange={f("name")} className="mt-2 w-full bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-smooth" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phone</label>
                <input required value={form.phone} onChange={f("phone")} className="mt-2 w-full bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-smooth" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</label>
                <input type="email" required value={form.email} onChange={f("email")} className="mt-2 w-full bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-smooth" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Vehicle</label>
                <input required value={form.vehicle} onChange={f("vehicle")} placeholder="e.g. Fortuner Legender 2024" className="mt-2 w-full bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-smooth" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Service Interested In</label>
              <select value={form.service} onChange={f("service")} className="mt-2 w-full bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-smooth">
                {services.map((s) => <option key={s}>{s}</option>)}
                <option>Not sure — recommend something</option>
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
              <textarea rows={4} value={form.message} onChange={f("message")} placeholder="Tell us a little about your car..." className="mt-2 w-full bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-smooth resize-none" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-gold text-primary-foreground rounded-sm text-xs tracking-[0.2em] uppercase hover:shadow-gold transition-smooth">
              Send Request <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Our Services</p>
            <h2 className="font-display text-4xl">Complete Premium Car Care</h2>
            <div className="mt-4 h-px w-20 gold-divider mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <div key={s} className="bg-card border border-border p-5 rounded-sm flex items-center gap-3">
                <Gem className="h-5 w-5 text-gold shrink-0" />
                <span className="font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 border-t border-border bg-secondary/20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-14">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Why Choose CLNHYGEN?</p>
            <h2 className="font-display text-4xl">Quality. Perfection. Customer Service.</h2>
            <div className="mt-4 h-px w-20 gold-divider" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At CLNHYGEN we emphasize quality, perfection, and customer service. With a professional, knowledgeable, and efficient team using top-of-the-range products and techniques, we aim for the highest level of customer satisfaction — taking the best care of every car.
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-gold" /> What to Expect
            </h3>
            <ul className="mt-6 grid gap-3">
              {expect.map((b) => <Bullet key={b}>{b}</Bullet>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <Sparkles className="h-8 w-8 text-gold mx-auto" />
          <p className="text-xs tracking-[0.4em] uppercase text-gold mt-4">Book an Appointment Today</p>
          <h2 className="mt-3 font-display text-4xl">Treat Your Car With the Luxury It Deserves</h2>
          <div className="mt-4 h-px w-20 gold-divider mx-auto" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Get in touch with CLNHYGEN today to book an appointment for car detailing, polishing, paint protection, or ceramic coating services in Meerut. Our experts will be glad to help you with the finest vehicle care solutions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="tel:+919084724507" className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-3.5 rounded-sm text-xs tracking-[0.2em] uppercase hover:shadow-gold transition-smooth">
              Call +91 90847 24507
            </a>
            <Link to="/services" className="inline-flex items-center gap-2 border border-border px-8 py-3.5 rounded-sm text-xs tracking-[0.2em] uppercase hover:border-gold transition">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;