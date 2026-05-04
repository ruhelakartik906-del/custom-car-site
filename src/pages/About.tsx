import { Award, Sparkles, Users, Wrench } from "lucide-react";
import PageHero from "@/components/PageHero";
import detailing from "@/assets/service-detailing.jpg";

const About = () => (
  <div>
    <PageHero eyebrow="Our Story" title="About Auro" subtitle="A studio built by enthusiasts, for enthusiasts. Founded in 2015, refined every day since." />
    <section className="py-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
          <img src={detailing} alt="Inside the Auro detailing studio" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="font-display text-4xl">Obsessed with the details others miss.</h2>
          <div className="mt-4 h-px w-20 gold-divider" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Auro started in a single-bay garage with a borrowed polisher and one rule: never hand back a car we wouldn't drive ourselves. Ten years later, that rule still runs the studio.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We've grown to a 4,000 sq.ft dust-controlled facility with two dedicated PPF bays, a coating cure room, and a team of seven internationally certified detailers — but we still book only four cars a day.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6">
            {[{ n: "1200+", l: "Cars Detailed" }, { n: "10 Yrs", l: "In Business" }, { n: "7", l: "Certified Pros" }, { n: "4.9★", l: "Customer Rating" }].map((s) => (
              <div key={s.l} className="border border-border p-5 rounded-sm">
                <div className="font-display text-3xl text-gold">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 border-t border-border bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">What we stand for</p>
          <h2 className="font-display text-4xl">Our Values</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { i: Sparkles, t: "Craft Over Speed", d: "We'd rather book one car less than rush a finish." },
            { i: Award, t: "Honest Pricing", d: "What we quote is what you pay. Always." },
            { i: Wrench, t: "Right Tools", d: "Calibrated equipment, genuine consumables, no shortcuts." },
            { i: Users, t: "People First", d: "Your car is your second home. We treat it like one." },
          ].map((v) => (
            <div key={v.t} className="bg-card border border-border p-7 rounded-sm">
              <v.i className="h-7 w-7 text-gold" />
              <h3 className="mt-4 font-display text-2xl">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;