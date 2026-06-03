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
import detailingApplicator from "@/assets/products/detailing-foam-applicator.jpg";
import polishingKit from "@/assets/products/premium-polishing-kit.jpg";
import microfiberCloth from "@/assets/products/microfiber-cleaning-cloth.jpg";
import orangeMicrofiberCutting from "@/assets/products/orange-microfiber-cutting-pad.jpg";
import purpleWool from "@/assets/products/purple-wool-polishing-pad.jpg";
import blueMicrofiberFinishing from "@/assets/products/blue-microfiber-finishing-pad.jpg";
import blueHybridMicrofiber from "@/assets/products/blue-hybrid-microfiber-pad.jpg";
import blackOrangeMicrofiber from "@/assets/products/black-orange-microfiber-pad.jpg";
import woolCutting from "@/assets/products/wool-cutting-pad.jpg";
import blueMicrofiberCombo1 from "@/assets/products/blue-microfiber-combo-pad-1.jpg";
import blueMicrofiberCombo2 from "@/assets/products/blue-microfiber-combo-pad-2.jpg";
import blueMicrofiberCombo3 from "@/assets/products/blue-microfiber-combo-pad-3.jpg";
import blueMicrofiberCombo4 from "@/assets/products/blue-microfiber-combo-pad-4.jpg";
import orangeMicrofiberCombo1 from "@/assets/products/orange-microfiber-combo-pad-1.jpg";
import orangeMicrofiberCombo2 from "@/assets/products/orange-microfiber-combo-pad-2.jpg";
import blueHdCuttingFoam from "@/assets/products/blue-hd-cutting-foam-pad.jpg";

// 👇 Add the product URL inside the `link` field for each product below.
// Example: link: "https://your-shop.com/product-page"
const products = [
  { title: "Blue Soft Finishing Foam Pad", image: blueFinishing, link: "#" },
  { title: "Yellow Hook & Loop Backing Plate", image: yellowBacking, link: "#" },
  { title: "Black CCS Heavy Cutting Foam Pad", image: blackCcs, link: "#" },
  { title: "Orange CCS Medium Polishing Pad", image: orangeCcs, link: "#" },
  { title: "Orange HD Cutting Foam Pad", image: orangeCutting, link: "#" },
  { title: "Blue HD Polishing Foam Pad", image: blueHd, link: "#" },
  { title: "Orange Light Finishing Foam Pad", image: orangeLight, link: "#" },
  { title: "Blue Microfiber Cutting & Polishing Pad", image: blueMicrofiber, link: "#" },
  { title: "Orange Medium Cutting Foam Pad", image: orangeWhiteStripe, link: "#" },
  { title: "Blue Soft Polishing Foam Pad", image: blueWhiteStripe, link: "#" },
  { title: "Blue Mini Detailing Foam Pad", image: blueMini, link: "#" },
  { title: "Black CCS Dimple Cutting Foam Pad", image: blackCcsDimple, link: "#" },
  { title: "Orange Soft Finishing Foam Pad", image: orangeSoftFinishing, link: "#" },
  { title: "Premium Detailing Foam Applicator", image: detailingApplicator, link: "#" },
  { title: "Professional Polishing & Buffing Kit", image: polishingKit, link: "#" },
  { title: "Premium Microfiber Cleaning Cloth", image: microfiberCloth, link: "#" },
  { title: "Orange Microfiber Hybrid Cutting Pad", image: orangeMicrofiberCutting, link: "#" },
  { title: "Purple Wool Polishing & Finishing Pad", image: purpleWool, link: "https://www.amazon.in/dp/B0H11S9PZR" },
  { title: "Blue Microfiber Soft Finishing Pad", image: blueMicrofiberFinishing, link: "https://www.amazon.in/dp/B0H11RS193" },
  { title: "Blue Hybrid Microfiber Cutting Pad", image: blueHybridMicrofiber, link: "https://www.amazon.in/dp/B0H11VMKPH" },
  { title: "LC Light Cutting Microfiber Pad 3.5 Inch", image: blackOrangeMicrofiber, link: "https://www.amazon.in/dp/B0GY17HRW3" },
  { title: "Premium Wool Heavy Cutting Pad", image: woolCutting, link: "https://www.amazon.in/dp/B0H11H5FHN" },
  { title: "Blue Microfiber Combo Polishing Pad", image: blueMicrofiberCombo1, link: "https://www.amazon.in/dp/B0H11XCVCG" },
  { title: "Blue Dual-Action Microfiber Pad", image: blueMicrofiberCombo2, link: "https://www.amazon.in/dp/B0H11W55SZ" },
  { title: "Blue Microfiber Cutting & Finishing Set", image: blueMicrofiberCombo3, link: "https://www.amazon.in/dp/B0H11QW1XY" },
  { title: "Blue Hybrid Foam & Microfiber Pad", image: blueMicrofiberCombo4, link: "https://www.amazon.in/dp/B0H11GXG75" },
  { title: "Orange Microfiber Polishing Combo Pad", image: orangeMicrofiberCombo1, link: "https://www.amazon.in/dp/B0H1297XN3" },
  { title: "CLNHYGEN Microfiber OSP Cutting Pad 5.5 Inch", image: orangeMicrofiberCombo2, link: "https://www.amazon.in/dp/B0H11ZY3GM" },
  { title: "CLNHYGEN | Lake Country | Blue Polishing Pad 5.5 Inch", image: blueHdCuttingFoam, link: "https://www.amazon.in/dp/B0H15MRHCS" },
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
                  <Button className="mt-5 w-full" variant="default" asChild>
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      <ShoppingCart className="h-4 w-4" />
                      Shop Now
                    </a>
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