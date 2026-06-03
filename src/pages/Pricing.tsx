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
import newBlueFoamPad from "@/assets/products/new-blue-foam-pad.jpg";
import newYellowBacking1 from "@/assets/products/new-yellow-backing-1.jpg";
import newYellowBacking2 from "@/assets/products/new-yellow-backing-2.jpg";
import newPurpleWool from "@/assets/products/new-purple-wool.jpg";
import newOrangeWhiteMicrofiber from "@/assets/products/new-orange-white-microfiber.jpg";
import newBlueWhiteMicrofiber from "@/assets/products/new-blue-white-microfiber.jpg";

// 👇 Add the product URL inside the `link` field for each product below.
// Example: link: "https://your-shop.com/product-page"
const products = [
  { title: "CLNHYGEN SDO Blue Heavy Polishing Pad 1 Inch Mini for Tight Area ", image: blueFinishing, link: "https://www.amazon.in/dp/B0H11XH6G5" },
  { title: "CLNHYGEN 6 Inch Backing Plate for Car Polisher", image: yellowBacking, link: "https://www.amazon.in/dp/B0H11X8QCN" },
  { title: "CLNHYGEN SDO Black Finishing Pad 5.5 Inch for Car Detailing & Final Gloss Finish", image: blackCcs, link: "https://www.amazon.in/dp/B0H11N97JJ" },
  { title: "CLNHYGEN | Lake Country | 0Orange Polishing Pad 5.5 Inch for Car Polishing ", image: orangeCcs, link: "#" },
  { title: "CLNHYGEN | Lake Country | Orange Polishing Pad 5.5 Inch for Car Paint Correction ", image: orangeCutting, link: "#" },
  { title: "CLNHYGEN | Lake Country | Blue Polishing Pad 5.5 Inch for Car Detailing", image: blueHd, link: "https://www.amazon.in/dp/B0H15MRHCS" },
  { title: "CLNHYGEN Orange Heavy Polishing Pad 2 Inch Mini for Precision Car Detailing", image: orangeLight, link: "https://www.amazon.in/dp/B0H15P494F" },
  { title: "CLNHYGEN HDO OSP Microfiber Pad 5.5 Inch for Car Polishing & Paint Correction", image: blueMicrofiber, link: "https://www.amazon.in/dp/B0H11ZYPK3" },
  { title: "CLNHYGEN HDO Orange Polishing Pad with CCS 5.5 Inch for Car Detailing ", image: orangeWhiteStripe, link: "https://www.amazon.in/dp/B0H11MS4VW" },
  { title: "CLNHYGEN HDO Blue Heavy Polishing Pad with CCS 5.5 Inch for Car Paint Correction", image: blueWhiteStripe, link: "https://www.amazon.in/dp/B0H11W6Q3P" },
  { title: "CLNHYGEN SDO Blue Heavy Polishing Pad 5.5 Inch for Car Polishing & Oxidation Removal ", image: blueMini, link: "https://www.amazon.in/dp/B0H11NRY5B" },
  { title: "CLNHYGEN | Lake Country | Black Finishing Pad 5.5 Inch for Car Polishing ", image: blackCcsDimple, link: "https://www.amazon.in/dp/B0H11N97JJ" },
  { title: "CLNHYGEN SDO Blue Heavy Polishing Pad 5.5 Inch for Car ", image: newBlueFoamPad, link: "https://www.amazon.in/dp/B0H11W6Q3P" },
  { title: "CLNHYGEN | Lake Country | 5 Inch Backing Plate for Car Polisher", image: newYellowBacking1, link: "https://www.amazon.in/dp/B0H11X8QCN" },
  { title: "CLNHYGEN | Lake Country | 5.5 Inch Backing Plate for Car Polisher", image: newYellowBacking2, link: "https://www.amazon.in/dp/B0H11P6BPH" },
  { title: "CLNHYGEN Purple Foamed Wool Polishing Pad 5.5 Inch for Car Paint Correction", image: newPurpleWool, link: "https://www.amazon.in/dp/B0H11GKZZY" },
  { title: "CLNHYGEN Microfiber OSP Cutting Pad 5.5 Inch for Car Detailing & Paint Correction", image: newOrangeWhiteMicrofiber, link: "https://www.amazon.in/dp/B0H11GY81F" },
  { title: "CLNHYGEN HDO Heavy Cutting Pad with Blue Interface 5.5 Inch for Car Detailing", image: newBlueWhiteMicrofiber, link: "https://www.amazon.in/dp/B0H11RS193" },
  { title: "CLNHYGEN Microfiber OSP Cutting Pad 5.5 Inch Heavy Cutting Buffing Pad for Car", image: orangeMicrofiberCutting, link: "https://www.amazon.in/dp/B0H11GY81F" },
  { title: "CLNHYGEN Purple Foamed Wool Polishing Pad 5.5 Inch for Car Detailing ", image: purpleWool, link: "https://www.amazon.in/dp/B0H11S9PZR" },
  { title: "CLNHYGEN HDO Heavy Cutting Pad with Blue Interface 5.5 Inch for Car ", image: blueMicrofiberFinishing, link: "https://www.amazon.in/dp/B0H11RS193" },
  { title: "CLNHYGEN HDO Heavy Cutting Pad with Blue Interface 5.5 Inch for Paint Correction", image: blueHybridMicrofiber, link: "https://www.amazon.in/dp/B0H11VMKPH" },
  { title: "CLNHYGEN Microfiber OSP Cutting Pad 5.5 Inch for Car Paint Correction & Heavy ", image: blackOrangeMicrofiber, link: "https://www.amazon.in/dp/B0GY17HRW3" },
  { title: "CLNHYGEN UDO 5.5 Inch Microwool Heavy Cutting Pad for Car Polishing", image: woolCutting, link: "https://www.amazon.in/dp/B0H11H5FHN" },
  { title: "CLNHYGEN Microfiber Cutting Pad No Center Hole 5.5 Inch for Car Polishing", image: blueMicrofiberCombo1, link: "https://www.amazon.in/dp/B0H11XCVCG" },
  { title: "CLNHYGEN Microfiber Cutting Pad No Center Hole 5.5 Inch for Car Detailing", image: blueMicrofiberCombo2, link: "https://www.amazon.in/dp/B0H11W55SZ" },
  { title: "Blue Microfiber Cutting & Finishing SetCLNHYGEN Microfiber Cutting Pad ", image: blueMicrofiberCombo3, link: "https://www.amazon.in/dp/B0H11QW1XY" },
  { title: "CLNHYGEN Microfiber Cutting Pad No Center Hole 5.5 Inch for Car Detailing", image: blueMicrofiberCombo4, link: "https://www.amazon.in/dp/B0H11GXG75" },
  { title: "LC Light Cutting Microfiber Pad 3.5 Inch | One Step Polishing Pad", image: orangeMicrofiberCombo1, link: "https://www.amazon.in/dp/B0H1297XN3" },
  { title: "LC Light Cutting Microfiber Pad 3.5 Inch | One Step Polishing Pad", image: orangeMicrofiberCombo2, link: "https://www.amazon.in/dp/B0H11ZY3GM" },
  { title: "CLNHYGEN | Lake Country | Blue Polishing Pad 5.5 Inch for Car Detailing", image: blueHdCuttingFoam, link: "https://www.amazon.in/dp/B0H15MRHCS" },
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