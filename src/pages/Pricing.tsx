import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

import blueFinishing from "@/assets/products/blue-finishing-pad.jpg";
import yellowBacking from "@/assets/products/yellow-backing-plate.jpg";
import blackCcs from "@/assets/products/black-ccs-pad.jpg";
import orangeCcs from "@/assets/products/orange-ccs-pad.jpg";
import orangeCutting from "@/assets/products/orange-cutting-pad.jpg";
import blueHd from "@/assets/products/blue-hd-pad.jpg";
import orangeLight from "@/assets/products/orange-light-pad.jpg";
import blueMicrofiber from "@/assets/products/blue-microfiber-pad.jpg";
import orangeWhiteStripe from "@/assets/products/orange-white-stripe-pad.jpg";
import blueWhiteStripe from "@/assets/products/blue-white-stripe-pad.jpg";
import blueMini from "@/assets/products/blue-mini-pad.jpg";
import blackCcsDimple from "@/assets/products/black-ccs-dimple-pad.jpg";
import orangeSoftFinishing from "@/assets/products/orange-soft-finishing-pad.jpg";
import detailingApplicator from "@/assets/products/detailing-foam-applicator.png";
import polishingKit from "@/assets/products/premium-polishing-kit.png";
import microfiberCloth from "@/assets/products/microfiber-cleaning-cloth.png";
import orangeMicrofiberCutting from "@/assets/products/orange-microfiber-cutting-pad.jpg";
import purpleWool from "@/assets/products/purple-wool-polishing-pad.jpg";
import blueMicrofiberFinishing from "@/assets/products/blue-microfiber-finishing-pad.jpg";
import blueHybridMicrofiber from "@/assets/products/blue-hybrid-microfiber-pad.jpg";

const products = [
  { title: "Blue Soft Finishing Foam Pad", image: blueFinishing },
  { title: "Yellow Hook & Loop Backing Plate", image: yellowBacking },
  { title: "Black CCS Heavy Cutting Foam Pad", image: blackCcs },
  { title: "Orange CCS Medium Polishing Pad", image: orangeCcs },
  { title: "Orange HD Cutting Foam Pad", image: orangeCutting },
  { title: "Blue HD Polishing Foam Pad", image: blueHd },
  { title: "Orange Light Finishing Foam Pad", image: orangeLight },
  { title: "Blue Microfiber Cutting & Polishing Pad", image: blueMicrofiber },
  { title: "Orange Medium Cutting Foam Pad", image: orangeWhiteStripe },
  { title: "Blue Soft Polishing Foam Pad", image: blueWhiteStripe },
  { title: "Blue Mini Detailing Foam Pad", image: blueMini },
  { title: "Black CCS Dimple Cutting Foam Pad", image: blackCcsDimple },
  { title: "Orange Soft Finishing Foam Pad", image: orangeSoftFinishing },
  { title: "Premium Detailing Foam Applicator", image: detailingApplicator },
  { title: "Professional Polishing & Buffing Kit", image: polishingKit },
  { title: "Premium Microfiber Cleaning Cloth", image: microfiberCloth },
  { title: "Orange Microfiber Hybrid Cutting Pad", image: orangeMicrofiberCutting },
  { title: "Purple Wool Polishing & Finishing Pad", image: purpleWool },
  { title: "Blue Microfiber Soft Finishing Pad", image: blueMicrofiberFinishing },
  { title: "Blue Hybrid Microfiber Cutting Pad", image: blueHybridMicrofiber },
];

const Pricing = () => {
  return (
    <div>
      <PageHero
        eyebrow="CLNHYGEN"
        title="Products"
        subtitle="Premium automotive protection and detailing products engineered for a flawless finish."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <Card
                key={p.title}
                className="group overflow-hidden border-border/60 bg-card transition-all hover:border-gold/60 hover:shadow-xl"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-lg md:text-xl min-h-[3.5rem] flex items-center justify-center">
                    {p.title}
                  </h3>
                  <Button className="mt-5 w-full" variant="default">
                    <ShoppingCart className="h-4 w-4" />
                    Shop Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;