import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import PageHero from "@/components/PageHero";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", vehicle: "", service: "Ceramic Coating", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Request received", description: "Our team will reach out within 24 hours. Thank you!" });
    setForm({ name: "", email: "", phone: "", vehicle: "", service: "Ceramic Coating", message: "" });
  };

  const f = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <div>
      <PageHero eyebrow="Get In Touch" title="Visit the Studio" subtitle="Walk-ins welcome for free inspections. Booking ahead is recommended for full-day services." />

      <section className="py-20">
        <div className="container mx-auto grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {[
              { i: MapPin, t: "Studio", v: "Plot 24, Industrial Area Phase II,\nPune, Maharashtra 411019" },
              { i: Phone, t: "Call / WhatsApp", v: "+91 98765 43210" },
              { i: Mail, t: "Email", v: "hello@aurodetail.in" },
              { i: Clock, t: "Hours", v: "Mon – Sat · 9:30 AM – 7:30 PM\nSunday by appointment" },
            ].map((b) => (
              <div key={b.t} className="flex gap-4">
                <div className="h-11 w-11 grid place-items-center rounded-sm bg-gradient-gold shrink-0">
                  <b.i className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">{b.t}</p>
                  <p className="mt-1 text-foreground whitespace-pre-line leading-relaxed">{b.v}</p>
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
                <option>Ceramic Coating</option>
                <option>Paint Protection Film (PPF)</option>
                <option>Car Detailing</option>
                <option>Paint Correction</option>
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
    </div>
  );
};

export default Contact;