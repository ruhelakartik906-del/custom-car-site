import { Package } from "lucide-react";
import PageHero from "@/components/PageHero";

const Pricing = () => {
  return (
    <div>
      <PageHero eyebrow="CLNHYGEN" title="Products" subtitle="Premium automotive protection and detailing products coming soon." />

      <section className="py-24">
        <div className="container mx-auto text-center max-w-xl">
          <Package className="mx-auto h-16 w-16 text-gold opacity-80" />
          <h2 className="mt-8 font-display text-3xl md:text-4xl">Coming Soon</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We are preparing a curated range of world-class automotive protection, detailing, and surface care products for you.
            Stay tuned — our full product catalog will be available shortly.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;