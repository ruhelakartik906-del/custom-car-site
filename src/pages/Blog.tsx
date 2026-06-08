import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles, ShieldCheck, Gem, BookOpen, Car, Timer, AlertTriangle, Wrench, HelpCircle, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ppfHero from "@/assets/blog-ppf.jpg";
import ppfVsCeramicHero from "@/assets/blog-ppf-vs-ceramic.jpg";
import ppfLifespanHero from "@/assets/blog-ppf-lifespan.jpg";
import ppfMythsHero from "@/assets/blog-ppf-myths.jpg";
import dehradunHero from "@/assets/blog-dehradun.jpg";
import meerutHero from "@/assets/blog-meerut.jpg";
import ghaziabadHero from "@/assets/blog-ghaziabad.jpg";
import gurgaonHero from "@/assets/blog-gurgaon.jpg";


type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
};

const articles: Article[] = [
  {
    slug: "what-is-paint-protection-film-ppf-worth-it-2026",
    category: "Paint Protection",
    title: "What Is Paint Protection Film (PPF) and Is It Worth It in 2026?",
    excerpt:
      "In 2026, car owners are becoming more conscious than ever about maintaining their vehicle's appearance and resale value. Discover why PPF has become essential.",
    image: ppfHero,
  },
  {
    slug: "ppf-vs-ceramic-coating-which-is-better",
    category: "Paint Protection",
    title: "PPF vs Ceramic Coating: Which Protection Is Better for Your Car?",
    excerpt:
      "Two solutions dominate the automotive detailing industry. Compare features, benefits and find the best paint protection for your vehicle.",
    image: ppfVsCeramicHero,
  },
  {
    slug: "how-long-does-paint-protection-film-last",
    category: "Paint Protection",
    title: "How Long Does Paint Protection Film Last?",
    excerpt:
      "One of the most common questions car owners ask before investing in PPF is: How long does Paint Protection Film last? Explore lifespan, factors, and care tips.",
    image: ppfLifespanHero,
  },
  {
    slug: "common-myths-about-paint-protection-film",
    category: "Paint Protection",
    title: "Common Myths About Paint Protection Film You Should Know",
    excerpt:
      "Despite its growing popularity, many misconceptions surround PPF. In this article, we separate fact from fiction and uncover the truth behind the most common PPF myths.",
    image: ppfMythsHero,
  },
  {
    slug: "clnhygen-dehradun-ppf-detailing-guide",
    category: "Dehradun",
    title: "Best Car Detailing & Paint Protection Film by CLNHYGEN in Dehradun: Complete Guide",
    excerpt:
      "Premium PPF, ceramic coating and full detailing built for Dehradun's roads, dust and Himalayan climate — services, benefits, pricing and process explained.",
    image: dehradunHero,
  },
  {
    slug: "clnhygen-meerut-ppf-complete-guide",
    category: "Meerut",
    title: "Why Car Owners in Meerut Are Choosing CLNHYGEN PPF: Complete Guide",
    excerpt:
      "From Mohkampur Industrial Area, CLNHYGEN delivers premium self-healing PPF, ceramic & graphene coatings and full detailing tailored to Meerut's roads.",
    image: meerutHero,
  },
  {
    slug: "clnhygen-ghaziabad-ppf-installation",
    category: "Ghaziabad",
    title: "Best PPF Installation Services in Ghaziabad by CLNHYGEN: Complete Guide",
    excerpt:
      "Expert PPF installation in Ghaziabad for NCR drivers — premium self-healing films, ceramic coatings and full detailing built for tough city and highway use.",
    image: ghaziabadHero,
  },
  {
    slug: "clnhygen-gurgaon-luxury-car-paint-protection",
    category: "Gurgaon",
    title: "Luxury Car Paint Protection in Gurgaon by CLNHYGEN: Everything You Need to Know",
    excerpt:
      "Tailored PPF, ceramic and graphene protection for BMW, Mercedes, Audi, Porsche and Range Rover — premium luxury car care for Gurgaon and NCR.",
    image: gurgaonHero,
  },
];

type CityData = {
  city: string;
  hero: string;
  title: string;
  intro: string[];
  about: string[];
  whyTitle: string;
  whyIntro: string;
  whyPoints: string[];
  services: { t: string; d: string }[];
  benefits: { t: string; d: string }[];
  pricingTitle: string;
  pricingIntro: string;
  pricing: { t: string; p: string }[];
  pricingFooter?: string;
  process: { t: string; d: string }[];
  maintenance: string[];
  faqs: { q: string; a: string }[];
  conclusion: string[];
  contact: string;
  keywords: string;
};

const cityData: Record<string, CityData> = {
  "clnhygen-dehradun-ppf-detailing-guide": {
    city: "Dehradun",
    hero: dehradunHero,
    title: "Best Car Detailing & Paint Protection Film by CLNHYGEN in Dehradun: Complete Guide",
    intro: [
      "Are you looking for the best car detailing in Dehradun or premium CLNHYGEN PPF Dehradun services to protect and restore your vehicle's shine? Whether it's a luxury car, SUV, or everyday commuter, CLNHYGEN delivers professional paint protection film, ceramic coating, graphene coating, and full detailing solutions tailored for Dehradun's challenging roads and climate.",
      "This complete guide covers everything about CLNHYGEN Dehradun — services, benefits, pricing, installation process, and why car owners trust them for superior car care.",
    ],
    about: [
      "CLNHYGEN is a reputed premium car detailing brand offering expert services in Paint Protection Film (PPF), ceramic coatings, paint correction, wraps, and comprehensive interior-exterior detailing. Known for high-quality workmanship and use of top-tier products, CLNHYGEN has built a strong reputation across North India, including operations and services reaching Dehradun.",
      "Their focus on advanced protection makes them a top choice for owners who want long-lasting showroom finish even on tough Himalayan terrain.",
    ],
    whyTitle: "Why Choose CLNHYGEN for Car Detailing & PPF in Dehradun?",
    whyIntro: "Dehradun's dusty roads, monsoons, stone chips on routes like Mussoorie Road, and UV exposure demand robust protection. CLNHYGEN excels because:",
    whyPoints: [
      "Expert application of self-healing PPF that guards against scratches, chips, and contaminants",
      "Premium ceramic and graphene coatings for unmatched hydrophobicity and gloss",
      "Professional paint correction and detailing that revives even neglected paint",
      "Services suitable for luxury cars, bikes, and high-end SUVs",
      "Attention to detail with dust-free studio environment",
    ],
    services: [
      { t: "Paint Protection Film (PPF)", d: "Full body, front kit, or partial protection with self-healing TPU films." },
      { t: "Ceramic & Graphene Coating", d: "Long-lasting shine and chemical resistance." },
      { t: "Paint Correction & Polishing", d: "Remove swirl marks, oxidation, and restore depth." },
      { t: "Car Wrapping & Vinyl Wraps", d: "Matte, gloss, or custom finishes." },
      { t: "Interior Detailing", d: "Deep cleaning of seats, carpets, dashboard, and leather conditioning." },
      { t: "Full Detailing Packages", d: "Complete exterior + interior rejuvenation." },
      { t: "Bike Detailing & Protection", d: "Premium care for premium two-wheelers." },
      { t: "PPF + Ceramic Combos", d: "CLNHYGEN combines PPF Dehradun with ceramic toppers for ultimate protection." },
    ],
    benefits: [
      { t: "Superior Paint Protection", d: "Shields against stone chips, bird droppings, tree sap, and road debris." },
      { t: "Self-Healing Technology", d: "Minor scratches vanish with heat." },
      { t: "Hydrophobic & Easy Maintenance", d: "Water, dirt, and dust repel easily." },
      { t: "UV & Chemical Resistance", d: "Prevents fading in Dehradun's altitude and pollution." },
      { t: "Enhanced Gloss & Aesthetics", d: "Maintains or improves the original finish." },
      { t: "Cost Savings", d: "Reduces frequent repairs and detailing expenses." },
      { t: "Warranty-Backed", d: "Peace of mind with professional installation." },
    ],
    pricingTitle: "CLNHYGEN PPF Cost in Dehradun (2026 Updated)",
    pricingIntro: "Pricing at CLNHYGEN Dehradun is competitive and depends on vehicle size, coverage, and film quality:",
    pricing: [
      { t: "Partial PPF Kit (bonnet, bumper, mirrors)", p: "₹15,000 – ₹45,000" },
      { t: "Full Front Package", p: "₹45,000 – ₹85,000" },
      { t: "Full Body PPF", p: "₹70,000 – ₹3,00,000+ (varies by car model)" },
      { t: "Ceramic Coating", p: "Starts from ₹8,000 – ₹35,000" },
      { t: "Full Detailing Packages", p: "₹5,000 – ₹25,000+" },
    ],
    pricingFooter: "Premium imported films and combined PPF + Ceramic options are available. Factors influencing cost: film thickness, self-healing properties, paint correction needs, and labor expertise.",
    process: [
      { t: "Inspection & Wash", d: "Thorough cleaning and assessment." },
      { t: "Paint Correction", d: "If required, for a flawless base." },
      { t: "Precise Application", d: "In a controlled, dust-free environment." },
      { t: "Curing & Quality Check", d: "Heat curing and final inspection." },
      { t: "Aftercare Guidance", d: "Tips for long-lasting results." },
    ],
    maintenance: [
      "Use pH-neutral car shampoos",
      "Avoid harsh chemicals and automatic brush washes initially",
      "Regular ceramic boosters for extra protection",
      "Park in shade when possible",
      "Annual inspection for edges and coverage",
    ],
    faqs: [
      { q: "Is CLNHYGEN PPF visible on the car?", a: "No — premium films are virtually invisible while providing full protection." },
      { q: "Can I remove PPF later?", a: "Yes, it peels off without damaging the original paint." },
      { q: "Does CLNHYGEN serve doorstep in Dehradun?", a: "They offer studio services and may coordinate doorstep for select packages. Contact for details." },
      { q: "What warranty is offered?", a: "Extensive warranties on PPF, ceramic coatings, and workmanship." },
      { q: "Best time to get services done?", a: "On a new car or after thorough paint correction." },
    ],
    conclusion: [
      "If you want the best paint protection film and car detailing in Dehradun, CLNHYGEN delivers professional results that protect your investment and keep your vehicle looking pristine. From PPF to full detailing, their expertise helps cars withstand Dehradun's demanding conditions.",
      "Contact CLNHYGEN today for a consultation and transform your car's protection and appearance. Drive with confidence and showroom shine!",
    ],
    contact: "Visit our website, Instagram, or call for Dehradun services.",
    keywords: "CLNHYGEN Dehradun, best car detailing Dehradun, CLNHYGEN PPF Dehradun, paint protection film CLNHYGEN, ceramic coating Dehradun, premium car protection Dehradun, car PPF near me Dehradun.",
  },
  "clnhygen-meerut-ppf-complete-guide": {
    city: "Meerut",
    hero: meerutHero,
    title: "Why Car Owners in Meerut Are Choosing CLNHYGEN PPF: Complete Guide",
    intro: [
      "Are you looking for the best PPF in Meerut to safeguard your car's paint from stone chips, road debris, dust, and harsh UV rays? Meerut car owners are increasingly choosing CLNHYGEN PPF for premium protection combined with expert detailing that keeps vehicles looking showroom-new for years.",
      "This guide reveals why CLNHYGEN is the preferred choice in Meerut, covering benefits, services, costs, installation, and real reasons local drivers trust them.",
    ],
    about: [
      "CLNHYGEN is Meerut's premium car detailing studio specializing in Paint Protection Film (PPF), ceramic coating, graphene coating, paint correction, and full interior-exterior detailing. Operating from Mohkampur Industrial Area (near Bajaj and Renault showrooms), we have been delivering professional car care since 2013 with a strong focus on quality and customer satisfaction.",
      "We use high-grade self-healing films and advanced products to provide long-lasting protection and stunning finishes.",
    ],
    whyTitle: "Why Meerut Car Owners Prefer CLNHYGEN PPF",
    whyIntro: "Meerut's busy traffic, construction dust, monsoon conditions, and highway driving (like Delhi-Meerut Expressway) accelerate paint damage. Local enthusiasts choose CLNHYGEN PPF Meerut because:",
    whyPoints: [
      "Expert application protects against stone chips and gravel on regional routes",
      "Self-healing technology repairs minor scratches automatically",
      "Superior hydrophobicity fights dust and water spots common in the area",
      "Professional paint correction revives dull or swirled paint",
      "Comprehensive services that boost resale value for popular models like Fortuner, Creta, Thar, and luxury cars",
    ],
    services: [
      { t: "Premium PPF Installation", d: "Full body, front kit, partial, or custom coverage." },
      { t: "Ceramic & Graphene Coating", d: "Advanced nano-protection for shine and durability." },
      { t: "Paint Correction & Polishing", d: "Remove swirl marks and restore depth." },
      { t: "Interior & Exterior Detailing", d: "Deep cleaning, leather conditioning, and more." },
      { t: "Car Wrapping & Films", d: "Vinyl wraps and specialized protective films." },
      { t: "Luxury & Bike Detailing", d: "Specialist packages for premium vehicles and bikes." },
    ],
    benefits: [
      { t: "Self-Healing Protection", d: "Minor scratches disappear with heat exposure." },
      { t: "Impact & Scratch Resistance", d: "Shields against road debris, bird droppings, and tree sap." },
      { t: "Hydrophobic Surface", d: "Water, dirt, and dust repel easily for easier maintenance." },
      { t: "UV & Chemical Resistance", d: "Prevents fading and oxidation in intense summers." },
      { t: "Invisible & Gloss-Enhancing", d: "Maintains original paint depth and shine." },
      { t: "Long-Term Warranty", d: "Peace of mind with professional workmanship guarantee." },
      { t: "Resale Value Boost", d: "Protected and detailed cars fetch higher prices." },
    ],
    pricingTitle: "CLNHYGEN PPF Cost in Meerut (2026 Updated)",
    pricingIntro: "CLNHYGEN PPF pricing in Meerut offers excellent value for premium quality:",
    pricing: [
      { t: "Partial/Front PPF Kit (bonnet, bumper, mirrors, headlights)", p: "₹25,000 – ₹80,000" },
      { t: "Full Front Package", p: "₹60,000 – ₹1,40,000+" },
      { t: "Full Body PPF", p: "₹1,20,000 – ₹3,50,000+ (depending on vehicle size and options)" },
      { t: "Ceramic Coating Packages", p: "₹10,000 – ₹40,000+" },
      { t: "Full Detailing + Protection Combos", p: "Competitive bundled pricing" },
    ],
    pricingFooter: "Prices include professional application, paint correction (if needed), and warranty. Contact us for a vehicle-specific quote.",
    process: [
      { t: "Detailed Inspection & Wash", d: "Thorough cleaning and paint assessment." },
      { t: "Paint Correction", d: "Restore flawless surface if required." },
      { t: "Precision Application", d: "Expert cutting and installation in controlled conditions." },
      { t: "Curing & Quality Check", d: "Heat curing followed by rigorous inspection." },
      { t: "Aftercare Instructions", d: "Tips to maximize longevity." },
    ],
    maintenance: [
      "Wash regularly with pH-neutral shampoo and microfiber cloths",
      "Avoid automatic brush car washes initially",
      "Use recommended ceramic boosters",
      "Remove bird droppings and contaminants promptly",
      "Schedule annual professional checks",
    ],
    faqs: [
      { q: "Is CLNHYGEN PPF visible?", a: "No — high-quality films are virtually invisible." },
      { q: "Can the PPF be removed?", a: "Yes, without damaging the original paint." },
      { q: "How long does CLNHYGEN PPF last in Meerut?", a: "Typically 7–10+ years with proper maintenance." },
      { q: "Do they offer doorstep service?", a: "Primarily studio-based with possible coordination for select packages." },
      { q: "Is it worth investing in CLNHYGEN PPF?", a: "Absolutely — it protects your investment, reduces maintenance costs, and enhances appearance." },
    ],
    conclusion: [
      "Car owners in Meerut are choosing CLNHYGEN PPF for reliable protection, exceptional detailing, and long-lasting results that withstand local driving conditions. Our expertise in premium paint protection film and car care makes us a top destination for vehicle enthusiasts.",
      "Ready to give your car the protection it deserves? Visit CLNHYGEN in Meerut today for a consultation and personalized quote.",
    ],
    contact: "Mohkampur Industrial Area, Meerut | +91 84499 00095 | +91 90847 24507 | www.clnhygen.com",
    keywords: "CLNHYGEN Meerut, best PPF in Meerut, CLNHYGEN PPF Meerut, car detailing Meerut, paint protection film Meerut, ceramic coating Meerut, premium car protection Meerut, self healing PPF Meerut.",
  },
  "clnhygen-ghaziabad-ppf-installation": {
    city: "Ghaziabad",
    hero: ghaziabadHero,
    title: "Best PPF Installation Services in Ghaziabad by CLNHYGEN: Complete Guide",
    intro: [
      "Are you searching for the best PPF installation services in Ghaziabad to protect your car from stone chips, scratches, dust, and harsh UV rays? Ghaziabad car owners are increasingly trusting CLNHYGEN for premium paint protection film (PPF) and professional detailing that delivers showroom-fresh results even in tough NCR conditions.",
      "This comprehensive guide covers everything about CLNHYGEN PPF installation in Ghaziabad — benefits, services, costs, process, and why we stand out.",
    ],
    about: [
      "CLNHYGEN is a premium car detailing studio renowned for high-quality Paint Protection Film (PPF), ceramic coating, graphene coating, paint correction, and full vehicle detailing. With a strong reputation built since 2013 in the region, we bring expert craftsmanship and top-tier materials to customers in Ghaziabad and surrounding NCR areas.",
      "Our focus on precision installation and long-lasting protection makes us a preferred choice for car enthusiasts who want reliable PPF services in Ghaziabad.",
    ],
    whyTitle: "Why Ghaziabad Car Owners Choose CLNHYGEN",
    whyIntro: "Ghaziabad's heavy traffic, construction dust, monsoon rains, and highway drives (like NH-24 or Delhi-Ghaziabad routes) damage car paint quickly. Local owners prefer CLNHYGEN PPF Ghaziabad because:",
    whyPoints: [
      "Robust protection against stone chips and road debris on busy roads",
      "Self-healing technology that repairs minor scratches automatically",
      "Superior hydrophobicity to fight dust and water spots",
      "Professional paint correction for flawless application",
      "Enhanced resale value for popular models like Creta, Fortuner, Thar, and luxury cars",
    ],
    services: [
      { t: "Premium PPF Installation", d: "Full body, front kit, partial, or custom coverage with self-healing films." },
      { t: "Ceramic & Graphene Coating", d: "Advanced protection and deep gloss." },
      { t: "Paint Correction & Polishing", d: "Remove swirl marks, oxidation, and restore paint depth." },
      { t: "Interior & Exterior Detailing", d: "Deep cleaning, leather conditioning, and complete rejuvenation." },
      { t: "Car Wrapping & Vinyl Wraps", d: "Custom aesthetic upgrades." },
      { t: "Bike Detailing & Protection", d: "Specialised two-wheeler packages." },
    ],
    benefits: [
      { t: "Self-Healing Protection", d: "Minor scratches vanish with heat (sunlight or warm water)." },
      { t: "Impact & Scratch Resistance", d: "Guards against road debris, bird droppings, and tree sap." },
      { t: "Hydrophobic Surface", d: "Water and dirt bead off easily for low-maintenance cleaning." },
      { t: "UV & Chemical Resistance", d: "Prevents fading and staining in Ghaziabad's climate." },
      { t: "Invisible & Gloss-Enhancing", d: "Maintains original paint finish perfectly." },
      { t: "Long-Term Warranty", d: "Professional workmanship and material guarantees." },
      { t: "Resale Value Boost", d: "Protected vehicles command premium prices." },
    ],
    pricingTitle: "CLNHYGEN PPF Cost in Ghaziabad (2026 Updated)",
    pricingIntro: "CLNHYGEN PPF pricing in Ghaziabad offers great value for premium quality:",
    pricing: [
      { t: "Partial/Front PPF Kit (bonnet, bumper, mirrors, headlights)", p: "₹25,000 – ₹85,000" },
      { t: "Full Front Package", p: "₹60,000 – ₹1,50,000+" },
      { t: "Full Body PPF", p: "₹1,20,000 – ₹3,80,000+ (depending on vehicle size and film type)" },
      { t: "Ceramic Coating Add-ons", p: "₹10,000 – ₹45,000+" },
      { t: "Bundled Detailing + PPF Packages", p: "Attractive combo pricing" },
    ],
    pricingFooter: "Costs include expert installation, necessary paint correction, and warranty. Get a vehicle-specific quote for accurate pricing.",
    process: [
      { t: "Vehicle Inspection & Wash", d: "Thorough cleaning and paint assessment." },
      { t: "Paint Correction", d: "Restore flawless surface if needed." },
      { t: "Precision Cutting & Application", d: "Expert fitting in controlled conditions." },
      { t: "Heat Curing & Quality Check", d: "Ensures strong adhesion and seamless finish." },
      { t: "Aftercare Guidance", d: "Personalised tips for longevity." },
    ],
    maintenance: [
      "Wash with pH-neutral shampoo and microfiber towels",
      "Avoid automatic brush washes initially",
      "Apply ceramic boosters periodically",
      "Remove contaminants (bird droppings, sap) promptly",
      "Schedule annual inspections",
    ],
    faqs: [
      { q: "Is CLNHYGEN PPF visible?", a: "No — premium films are virtually invisible." },
      { q: "Can PPF be removed later?", a: "Yes, without damaging the original paint." },
      { q: "How long does PPF last in Ghaziabad?", a: "Typically 7–10+ years with proper care." },
      { q: "Do they offer mobile services in Ghaziabad?", a: "Contact us for studio or coordinated doorstep options." },
      { q: "Is it worth the investment?", a: "Yes — saves on repairs, reduces maintenance, and preserves your car's value." },
    ],
    conclusion: [
      "For reliable best PPF installation in Ghaziabad, CLNHYGEN delivers expert protection, stunning results, and peace of mind. Our premium services help your car withstand local conditions while maintaining showroom shine.",
      "Ready to protect your vehicle? Contact CLNHYGEN today for a consultation and personalized quote.",
    ],
    contact: "+91 84499 00095 | +91 90847 24507 | www.clnhygen.com",
    keywords: "best PPF installation Ghaziabad, CLNHYGEN Ghaziabad, PPF services Ghaziabad, paint protection film Ghaziabad, car detailing Ghaziabad, self healing PPF Ghaziabad, premium PPF Ghaziabad, ceramic coating Ghaziabad.",
  },
  "clnhygen-gurgaon-luxury-car-paint-protection": {
    city: "Gurgaon",
    hero: gurgaonHero,
    title: "Luxury Car Paint Protection in Gurgaon by CLNHYGEN: Everything You Need to Know",
    intro: [
      "Are you searching for premium luxury car paint protection in Gurgaon to shield your high-end vehicle from stone chips, swirl marks, dust, and intense UV rays? Gurgaon's luxury car owners are turning to CLNHYGEN for expert Paint Protection Film (PPF), ceramic coatings, and detailing services that preserve showroom perfection even in the demanding NCR environment.",
      "From BMWs and Mercedes to Audis, Porsches, and Range Rovers — CLNHYGEN delivers tailored protection for luxury vehicles. This complete guide covers everything about luxury car PPF in Gurgaon with CLNHYGEN.",
    ],
    about: [
      "CLNHYGEN is a premium car detailing studio specializing in high-end Paint Protection Film (PPF), ceramic and graphene coatings, paint correction, and full luxury vehicle care. Established since 2013 with a strong reputation in the region, we bring professional expertise and top-tier materials to Gurgaon and NCR clients who demand the best for their luxury cars.",
      "Our focus on precision and quality makes us ideal for protecting expensive paint finishes on premium automobiles.",
    ],
    whyTitle: "Why Gurgaon Luxury Car Owners Choose CLNHYGEN",
    whyIntro: "Gurgaon's fast-paced highways (Delhi-Jaipur Expressway, MG Road), construction dust, monsoon rains, and bird droppings accelerate damage to luxury paint. Owners prefer CLNHYGEN luxury car paint protection in Gurgaon because:",
    whyPoints: [
      "Specialised protection for delicate high-gloss and matte luxury finishes",
      "Self-healing PPF that handles daily wear without compromising aesthetics",
      "Expert paint correction before application for flawless results",
      "Services that significantly boost resale value of premium vehicles",
      "Understanding of Gurgaon's climate and driving conditions",
    ],
    services: [
      { t: "Premium PPF for Luxury Cars", d: "Full body, front-end, or selective coverage with advanced self-healing films." },
      { t: "Ceramic & Graphene Coating", d: "Nano-level protection with exceptional gloss and hydrophobicity." },
      { t: "Multi-Layer Paint Correction", d: "Restore depth and remove imperfections on high-end paint." },
      { t: "Full Interior & Exterior Detailing", d: "Deep cleaning, leather conditioning, and cabin rejuvenation." },
      { t: "Custom Wrapping & Films", d: "For unique aesthetics or extra protection." },
      { t: "Complete Luxury Packages", d: "PPF + Ceramic topper for ultimate defense and shine." },
    ],
    benefits: [
      { t: "Self-Healing Technology", d: "Minor scratches disappear with heat exposure." },
      { t: "Superior Impact Protection", d: "Guards against stone chips, door dings, and road debris." },
      { t: "Hydrophobic & Self-Cleaning", d: "Repels water, dust, and contaminants common in Gurgaon." },
      { t: "UV & Chemical Resistance", d: "Prevents fading, oxidation, and etching." },
      { t: "Invisible & Gloss-Enhancing", d: "Preserves or elevates original factory finish." },
      { t: "Extended Warranty", d: "Manufacturer-backed material and workmanship guarantees." },
      { t: "Higher Resale Value", d: "Well-protected luxury cars attract premium buyers." },
    ],
    pricingTitle: "CLNHYGEN Luxury PPF Cost in Gurgaon (2026 Updated)",
    pricingIntro: "Pricing for luxury car paint protection in Gurgaon reflects premium quality and vehicle specifics:",
    pricing: [
      { t: "Partial/Front Luxury PPF Kit", p: "₹50,000 – ₹1,50,000+" },
      { t: "Full Front Package", p: "₹1,00,000 – ₹2,50,000+" },
      { t: "Full Body PPF for Luxury Cars", p: "₹2,50,000 – ₹6,00,000+ (varies by model)" },
      { t: "Ceramic / Graphene Coating", p: "₹20,000 – ₹80,000+" },
      { t: "Premium Combo (PPF + Coating + Correction)", p: "Customised quotes" },
    ],
    pricingFooter: "Includes expert application, necessary paint correction, and full warranty. Contact CLNHYGEN for a vehicle-specific assessment.",
    process: [
      { t: "Detailed Inspection & Pre-Wash", d: "Assess paint condition." },
      { t: "Multi-Stage Paint Correction", d: "Achieve mirror-like surface." },
      { t: "Precision PPF Application", d: "Custom cutting and fitting in controlled conditions." },
      { t: "Heat Curing & Final Inspection", d: "Ensure flawless adhesion." },
      { t: "Aftercare Consultation", d: "Tailored maintenance plan." },
    ],
    maintenance: [
      "Use pH-neutral, luxury-grade shampoos and microfiber products",
      "Avoid automatic car washes with brushes",
      "Apply recommended boosters for enhanced hydrophobicity",
      "Promptly remove bird droppings, sap, or contaminants",
      "Annual professional inspection recommended",
    ],
    faqs: [
      { q: "Is PPF noticeable on luxury cars?", a: "No — premium films are optically clear and virtually invisible." },
      { q: "Can PPF be applied to matte or special finishes?", a: "Yes, CLNHYGEN offers matte, satin, and gloss-specific films." },
      { q: "How long does installation take?", a: "1–5 days depending on coverage and vehicle size." },
      { q: "Is it suitable for new luxury cars?", a: "Ideal on new or nearly new vehicles for maximum protection." },
      { q: "Do they serve Gurgaon clients?", a: "Yes, CLNHYGEN serves Gurgaon and NCR with studio-level quality." },
    ],
    conclusion: [
      "For unmatched luxury car paint protection in Gurgaon, CLNHYGEN offers the expertise, premium materials, and meticulous care your vehicle deserves. Protect your investment while maintaining that exclusive showroom appeal against Gurgaon's challenging conditions.",
      "Ready to give your luxury car the best protection? Contact CLNHYGEN today for a private consultation and quote.",
    ],
    contact: "+91 84499 00095 | +91 90847 24507 | www.clnhygen.com",
    keywords: "luxury car paint protection Gurgaon, CLNHYGEN Gurgaon, best PPF for luxury cars Gurgaon, premium PPF Gurgaon, ceramic coating luxury cars Gurgaon, car detailing Gurgaon, self healing PPF Gurgaon, luxury car care Gurugram.",
  },
};

const CityArticle = ({ data }: { data: CityData }) => (
  <>
    <div className="flex items-center gap-2 text-xs tracking-[0.4em] uppercase text-gold mb-4">
      <MapPin className="h-4 w-4" /> {data.city}
    </div>
    <h2 className="font-display text-4xl md:text-5xl">{data.title}</h2>
    <div className="mt-4 h-px w-20 gold-divider" />

    <div className="mt-8 grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-5">
        {data.intro.map((p, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
        ))}
      </div>
      <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-elegant">
        <img src={data.hero} alt={`CLNHYGEN ${data.city}`} loading="lazy" className="h-full w-full object-cover" />
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <ShieldCheck className="h-6 w-6 text-gold" /> What is CLNHYGEN?
      </h3>
      <div className="mt-6 space-y-5">
        {data.about.map((p, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
        ))}
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Sparkles className="h-6 w-6 text-gold" /> {data.whyTitle}
      </h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">{data.whyIntro}</p>
      <ul className="mt-6 grid gap-3">
        {data.whyPoints.map((p) => <Bullet key={p}>{p}</Bullet>)}
      </ul>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Wrench className="h-6 w-6 text-gold" /> Key Services
      </h3>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {data.services.map((s) => (
          <div key={s.t} className="bg-card border border-border p-6 rounded-sm">
            <h4 className="font-display text-xl">{s.t}</h4>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Gem className="h-6 w-6 text-gold" /> Key Benefits
      </h3>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {data.benefits.map((b) => (
          <div key={b.t} className="bg-card border border-border p-6 rounded-sm">
            <h4 className="font-display text-xl">{b.t}</h4>
            <p className="mt-3 text-muted-foreground leading-relaxed">{b.d}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Timer className="h-6 w-6 text-gold" /> {data.pricingTitle}
      </h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">{data.pricingIntro}</p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm border border-border">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left p-4 font-display text-foreground">Service</th>
              <th className="text-left p-4 font-display text-foreground">Estimated Price</th>
            </tr>
          </thead>
          <tbody>
            {data.pricing.map((row, i) => (
              <tr key={row.t} className={`border-b border-border ${i % 2 ? "bg-muted/30" : ""}`}>
                <td className="p-4 text-muted-foreground font-medium">{row.t}</td>
                <td className="p-4 text-muted-foreground">{row.p}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.pricingFooter && (
        <p className="mt-4 text-sm text-muted-foreground italic">{data.pricingFooter}</p>
      )}
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Car className="h-6 w-6 text-gold" /> Installation Process
      </h3>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {data.process.map((s, i) => (
          <div key={s.t} className="bg-card border border-border p-6 rounded-sm">
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Step {i + 1}</span>
            <h4 className="mt-2 font-display text-xl">{s.t}</h4>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <AlertTriangle className="h-6 w-6 text-gold" /> Maintenance Tips
      </h3>
      <ul className="mt-6 grid gap-3">
        {data.maintenance.map((m) => <Bullet key={m}>{m}</Bullet>)}
      </ul>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <HelpCircle className="h-6 w-6 text-gold" /> Frequently Asked Questions
      </h3>
      <div className="mt-8 space-y-4">
        {data.faqs.map((f) => (
          <div key={f.q} className="bg-card border border-border p-6 rounded-sm">
            <h4 className="font-display text-xl">{f.q}</h4>
            <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-14 bg-card border border-border p-8 rounded-sm">
      <h3 className="font-display text-2xl">Conclusion</h3>
      <div className="mt-4 space-y-4">
        {data.conclusion.map((p, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
        <Phone className="h-4 w-4 text-gold shrink-0" />
        <span>{data.contact}</span>
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-background px-7 py-3 rounded-sm font-medium hover:opacity-90 transition">
          Book a Consultation <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/services" className="inline-flex items-center gap-2 border border-border px-7 py-3 rounded-sm font-medium hover:border-gold transition">
          Explore Services
        </Link>
      </div>
      <p className="mt-6 text-xs text-muted-foreground italic">
        Disclaimer: Prices and services may vary. Confirm directly with CLNHYGEN for latest details.
      </p>
      <p className="mt-3 text-xs text-muted-foreground">
        <span className="text-foreground font-medium">Keywords:</span> {data.keywords}
      </p>
    </div>
  </>
);


const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-muted-foreground">
    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
    <span>{children}</span>
  </li>
);

const PpfArticle = () => (
  <>
    <div className="flex items-center gap-2 text-xs tracking-[0.4em] uppercase text-gold mb-4">
      <BookOpen className="h-4 w-4" /> Paint Protection
    </div>
    <h2 className="font-display text-4xl md:text-5xl">
      What Is Paint Protection Film (PPF) and Is It Worth It in 2026?
    </h2>
    <div className="mt-4 h-px w-20 gold-divider" />

    <div className="mt-8 grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-5">
        <p className="text-muted-foreground leading-relaxed">
          In 2026, car owners are becoming more conscious than ever about maintaining their vehicle's appearance and resale value. With increasing road traffic, harsh weather conditions, stone chips, bird droppings, and UV exposure, protecting your car's paint has become a necessity rather than a luxury. This is where Paint Protection Film (PPF) comes into the picture.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          But what exactly is PPF, and is it worth investing in during 2026? Let's find out.
        </p>
      </div>
      <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-elegant">
        <img src={ppfHero} alt="Paint Protection Film — CLNHYGEN" loading="lazy" className="h-full w-full object-cover" />
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <ShieldCheck className="h-6 w-6 text-gold" /> What Is Paint Protection Film (PPF)?
      </h3>
      <div className="mt-6 space-y-5">
        <p className="text-muted-foreground leading-relaxed">
          Paint Protection Film (PPF) is a transparent, high-performance polyurethane film applied to a vehicle's painted surfaces. It acts as an invisible shield that protects the paint from scratches, stone chips, road debris, bug splatter, bird droppings, and environmental contaminants.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Modern PPF technology has evolved significantly over the years. The latest films available in 2026 feature self-healing properties, hydrophobic coatings, UV resistance, and enhanced clarity, ensuring your car looks brand new for years.
        </p>
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Sparkles className="h-6 w-6 text-gold" /> How Does PPF Work?
      </h3>
      <div className="mt-6 space-y-5">
        <p className="text-muted-foreground leading-relaxed">
          PPF creates a protective barrier between your car's paint and external damage. When minor scratches or swirl marks occur, the film's self-healing top layer can repair itself when exposed to heat from sunlight or warm water.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The film absorbs impacts from small stones, road debris, and daily wear and tear, preventing permanent damage to the original paint underneath.
        </p>
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Gem className="h-6 w-6 text-gold" /> Top PPF Benefits in 2026
      </h3>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {[
          { t: "1. Superior Scratch Protection", d: "Daily driving exposes your vehicle to countless risks such as keys, shopping carts, bushes, and improper washing techniques. PPF helps prevent these minor scratches from reaching the original paint." },
          { t: "2. Protection Against Stone Chips", d: "Highway driving often leads to paint damage from flying stones and road debris. Paint Protection Film acts as a sacrificial layer that absorbs impacts and protects your vehicle's paintwork." },
          { t: "3. Self-Healing Technology", d: "One of the biggest PPF benefits is its self-healing capability. Minor scratches and swirl marks disappear automatically when exposed to heat, keeping the surface smooth and flawless." },
          { t: "4. UV and Oxidation Resistance", d: "Continuous exposure to sunlight can fade your car's paint over time. Modern PPF blocks harmful UV rays and prevents oxidation, helping maintain the vehicle's original color and shine." },
          { t: "5. Easy Maintenance", d: "Most premium PPFs feature hydrophobic properties that repel water, dirt, and contaminants. This makes cleaning easier and keeps your vehicle looking cleaner for longer periods." },
          { t: "6. Preserves Resale Value", d: "A well-maintained exterior significantly improves a vehicle's resale value. Since PPF protects the original factory paint, potential buyers often view protected vehicles as better-maintained investments." },
        ].map((b) => (
          <div key={b.t} className="bg-card border border-border p-6 rounded-sm">
            <h4 className="font-display text-xl">{b.t}</h4>
            <p className="mt-3 text-muted-foreground leading-relaxed">{b.d}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Car className="h-6 w-6 text-gold" /> PPF vs Ceramic Coating
      </h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Many car owners confuse PPF with ceramic coating, but they serve different purposes.
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm border border-border">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left p-4 font-display text-foreground">Feature</th>
              <th className="text-left p-4 font-display text-foreground">Paint Protection Film</th>
              <th className="text-left p-4 font-display text-foreground">Ceramic Coating</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Scratch Protection", "Excellent", "Limited"],
              ["Stone Chip Protection", "Excellent", "Minimal"],
              ["Self-Healing", "Yes", "No"],
              ["Gloss Enhancement", "Good", "Excellent"],
              ["Hydrophobic Effect", "Good", "Excellent"],
              ["Paint Preservation", "Best", "Good"],
            ].map(([f, p, c], i) => (
              <tr key={f} className={`border-b border-border ${i % 2 ? "bg-muted/30" : ""}`}>
                <td className="p-4 text-muted-foreground font-medium">{f}</td>
                <td className="p-4 text-muted-foreground">{p}</td>
                <td className="p-4 text-muted-foreground">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <ShieldCheck className="h-6 w-6 text-gold" /> Is PPF Worth It in 2026?
      </h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">The answer is a strong yes, especially if:</p>
      <ul className="mt-6 grid gap-3">
        <Bullet>You own a new car.</Bullet>
        <Bullet>You frequently drive on highways.</Bullet>
        <Bullet>You want to maintain showroom-like paint quality.</Bullet>
        <Bullet>You plan to keep the vehicle for several years.</Bullet>
        <Bullet>You care about long-term resale value.</Bullet>
      </ul>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Car className="h-6 w-6 text-gold" /> Which Areas Should Be Protected?
      </h3>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {["Front bumper","Hood","Fenders","Side mirrors","Headlights","Door edges","Door handle cups","Rear bumper loading area"].map((area) => (
          <div key={area} className="flex items-center gap-3 bg-card border border-border p-4 rounded-sm">
            <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
            <span className="text-muted-foreground text-sm">{area}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-14 bg-card border border-border p-8 rounded-sm">
      <h3 className="font-display text-2xl">Final Thoughts</h3>
      <p className="mt-6 text-muted-foreground leading-relaxed">
        As vehicles become more expensive and paint technologies more advanced, protecting your investment is increasingly important. Paint Protection Film (PPF) remains one of the most effective solutions for long-term car paint protection in 2026.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-background px-7 py-3 rounded-sm font-medium hover:opacity-90 transition">
          Book PPF Installation <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/services" className="inline-flex items-center gap-2 border border-border px-7 py-3 rounded-sm font-medium hover:border-gold transition">
          Explore Services
        </Link>
      </div>
    </div>
  </>
);

const PpfVsCeramicArticle = () => (
  <>
    <div className="flex items-center gap-2 text-xs tracking-[0.4em] uppercase text-gold mb-4">
      <BookOpen className="h-4 w-4" /> Paint Protection
    </div>
    <h2 className="font-display text-4xl md:text-5xl">
      PPF vs Ceramic Coating: Which Protection Is Better for Your Car?
    </h2>
    <div className="mt-4 h-px w-20 gold-divider" />

    <div className="mt-8 grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-5">
        <p className="text-muted-foreground leading-relaxed">
          When it comes to protecting your car's paint, two solutions dominate the automotive detailing industry: Paint Protection Film (PPF) and Ceramic Coating. Both offer unique advantages, but many car owners struggle to decide which one is the better choice.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          If you're comparing PPF vs Ceramic Coating, this guide will help you understand the differences, benefits, and which option provides the best paint protection for your vehicle.
        </p>
      </div>
      <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-elegant">
        <img src={ppfVsCeramicHero} alt="PPF vs Ceramic Coating — CLNHYGEN" loading="lazy" className="h-full w-full object-cover" />
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <ShieldCheck className="h-6 w-6 text-gold" /> Understanding Paint Protection
      </h3>
      <p className="mt-6 text-muted-foreground leading-relaxed">Your car's paint is constantly exposed to environmental hazards such as:</p>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {["Stone chips","Road debris","Bird droppings","Tree sap","UV rays","Water spots","Scratches and swirl marks"].map((h) => (
          <div key={h} className="flex items-center gap-3 bg-card border border-border p-4 rounded-sm">
            <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
            <span className="text-muted-foreground text-sm">{h}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-muted-foreground leading-relaxed">
        Without proper protection, these factors can damage the paint, reduce gloss, and lower your vehicle's resale value.
      </p>
    </div>

    <div className="mt-14 grid md:grid-cols-2 gap-6">
      <div className="bg-card border border-border p-7 rounded-sm">
        <h3 className="font-display text-2xl flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-gold" /> What Is PPF?</h3>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Paint Protection Film is a transparent polyurethane film applied directly to a vehicle's painted surfaces. It acts as a physical barrier between paint and external damage.
        </p>
        <ul className="mt-4 space-y-2">
          {["Self-healing technology","Scratch resistance","Stone chip protection","UV resistance","High gloss finish","Hydrophobic properties"].map((f) => (
            <Bullet key={f}>{f}</Bullet>
          ))}
        </ul>
      </div>
      <div className="bg-card border border-border p-7 rounded-sm">
        <h3 className="font-display text-2xl flex items-center gap-2"><Sparkles className="h-5 w-5 text-gold" /> What Is Ceramic Coating?</h3>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Ceramic coating is a liquid polymer applied to exterior surfaces. Once cured, it forms a durable protective layer that chemically bonds with the paint.
        </p>
        <ul className="mt-4 space-y-2">
          {["Enhanced gloss and shine","Water repellency","Easier cleaning","UV protection","Chemical resistance","Reduced dirt accumulation"].map((f) => (
            <Bullet key={f}>{f}</Bullet>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Gem className="h-6 w-6 text-gold" /> Key Differences
      </h3>
      <div className="mt-8 space-y-4">
        {[
          { t: "Scratch Protection", ppf: "Excellent protection against scratches, swirl marks, and minor abrasions.", cc: "Limited scratch resistance — cannot prevent deeper scratches.", w: "PPF" },
          { t: "Stone Chip Protection", ppf: "Designed specifically to absorb impacts from stones and debris.", cc: "Cannot stop stone chips from damaging paint.", w: "PPF" },
          { t: "Gloss & Appearance", ppf: "Smooth glossy finish while maintaining original paint look.", cc: "Deeper gloss, richer reflections and enhanced paint depth.", w: "Ceramic Coating" },
          { t: "Self-Healing", ppf: "Premium films heal minor scratches with heat.", cc: "No self-healing properties.", w: "PPF" },
          { t: "Water Repellency", ppf: "Good hydrophobic performance.", cc: "Excellent water beading and self-cleaning effect.", w: "Ceramic Coating" },
          { t: "Maintenance", ppf: "Easier to maintain than bare paint with physical protection.", cc: "Extremely easy to clean due to slick surface.", w: "Ceramic Coating" },
          { t: "Longevity", ppf: "5–10 years depending on film quality and maintenance.", cc: "2–7 years depending on product quality.", w: "PPF" },
        ].map((r) => (
          <div key={r.t} className="bg-card border border-border p-6 rounded-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h4 className="font-display text-xl">{r.t}</h4>
              <span className="text-xs tracking-[0.3em] uppercase text-gold">Winner: {r.w}</span>
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <p><span className="text-foreground font-medium">PPF:</span> {r.ppf}</p>
              <p><span className="text-foreground font-medium">Ceramic:</span> {r.cc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Car className="h-6 w-6 text-gold" /> Quick Comparison Table
      </h3>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm border border-border">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left p-4 font-display text-foreground">Feature</th>
              <th className="text-left p-4 font-display text-foreground">PPF</th>
              <th className="text-left p-4 font-display text-foreground">Ceramic Coating</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Scratch Protection","Excellent","Moderate"],
              ["Stone Chip Protection","Excellent","Poor"],
              ["Self-Healing","Yes","No"],
              ["UV Protection","Excellent","Excellent"],
              ["Gloss Enhancement","Good","Excellent"],
              ["Hydrophobic Effect","Good","Excellent"],
              ["Durability","5–10 Years","2–7 Years"],
              ["Physical Protection","Excellent","Limited"],
              ["Maintenance","Easy","Very Easy"],
            ].map(([f, p, c], i) => (
              <tr key={f} className={`border-b border-border ${i % 2 ? "bg-muted/30" : ""}`}>
                <td className="p-4 text-muted-foreground font-medium">{f}</td>
                <td className="p-4 text-muted-foreground">{p}</td>
                <td className="p-4 text-muted-foreground">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <ShieldCheck className="h-6 w-6 text-gold" /> Which One Is Better?
      </h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        If your primary goal is maximum paint protection, PPF is the clear winner. It protects against scratches, stone chips, road debris, and everyday wear that ceramic coatings simply cannot stop.
      </p>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        However, if your focus is maintaining shine, making the car easier to clean, and achieving a glossy showroom finish, ceramic coating is an excellent option.
      </p>
    </div>

    <div className="mt-14 bg-card border border-border p-8 rounded-sm">
      <h3 className="font-display text-2xl">Why Many Car Owners Choose Both</h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Many premium car owners now combine PPF and ceramic coating — installing PPF first, then applying ceramic coating over it. This combination offers:
      </p>
      <ul className="mt-4 grid md:grid-cols-2 gap-3">
        {["Superior physical protection","Enhanced gloss","Better water repellency","Easier maintenance","Long-term durability"].map((b) => (
          <Bullet key={b}>{b}</Bullet>
        ))}
      </ul>
      <p className="mt-6 text-muted-foreground leading-relaxed">It is often considered the ultimate paint protection package.</p>
    </div>

    <div className="mt-14 grid md:grid-cols-2 gap-6">
      <div className="bg-card border border-border p-7 rounded-sm">
        <h4 className="font-display text-xl">Who Should Choose PPF?</h4>
        <ul className="mt-4 space-y-2">
          <Bullet>You own a new vehicle.</Bullet>
          <Bullet>You drive frequently on highways.</Bullet>
          <Bullet>You want maximum protection against scratches and chips.</Bullet>
          <Bullet>You plan to keep the car for several years.</Bullet>
          <Bullet>You want to preserve resale value.</Bullet>
        </ul>
      </div>
      <div className="bg-card border border-border p-7 rounded-sm">
        <h4 className="font-display text-xl">Who Should Choose Ceramic Coating?</h4>
        <ul className="mt-4 space-y-2">
          <Bullet>You prioritize gloss and aesthetics.</Bullet>
          <Bullet>Your vehicle faces minimal physical hazards.</Bullet>
          <Bullet>You want easier cleaning and maintenance.</Bullet>
          <Bullet>You have a limited budget.</Bullet>
        </ul>
      </div>
    </div>

    <div className="mt-14 bg-card border border-border p-8 rounded-sm">
      <h3 className="font-display text-2xl">Final Verdict</h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        For true paint protection, PPF offers unmatched defense against physical damage. Ceramic coating excels in enhancing appearance and simplifying maintenance but cannot match PPF's impact protection. For the highest level of protection and appearance, combining both delivers the best of both worlds.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-background px-7 py-3 rounded-sm font-medium hover:opacity-90 transition">
          Book a Consultation <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/services" className="inline-flex items-center gap-2 border border-border px-7 py-3 rounded-sm font-medium hover:border-gold transition">
          Explore Services
        </Link>
      </div>
    </div>
  </>
);

const PpfLifespanArticle = () => (
  <>
    <div className="flex items-center gap-2 text-xs tracking-[0.4em] uppercase text-gold mb-4">
      <BookOpen className="h-4 w-4" /> Paint Protection
    </div>
    <h2 className="font-display text-4xl md:text-5xl">
      How Long Does Paint Protection Film Last?
    </h2>
    <div className="mt-4 h-px w-20 gold-divider" />

    <div className="mt-8 grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-5">
        <p className="text-muted-foreground leading-relaxed">
          Paint Protection Film (PPF) has become one of the most popular solutions for protecting a vehicle's paint from scratches, stone chips, road debris, and environmental damage. However, one of the most common questions car owners ask before investing in PPF is: How long does Paint Protection Film last?
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The answer depends on several factors, including film quality, installation standards, driving conditions, and maintenance. In this guide, we'll explore the average PPF lifespan, what affects its durability, and how modern self-healing PPF technology helps extend its performance.
        </p>
      </div>
      <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-elegant">
        <img src={ppfLifespanHero} alt="How Long Does PPF Last — CLNHYGEN" loading="lazy" className="h-full w-full object-cover" />
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Timer className="h-6 w-6 text-gold" /> What Is the Average PPF Lifespan?
      </h3>
      <div className="mt-6 space-y-5">
        <p className="text-muted-foreground leading-relaxed">
          Most premium Paint Protection Films available today last between 5 to 10 years. High-quality films from leading manufacturers are designed to withstand harsh weather conditions, UV exposure, road debris, and everyday wear and tear while maintaining their clarity and protective properties.
        </p>
        <p className="text-muted-foreground leading-relaxed font-medium">General lifespan estimates:</p>
        <div className="grid sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-card border border-border p-6 rounded-sm">
            <h4 className="font-display text-xl">Entry-Level PPF</h4>
            <p className="mt-2 text-muted-foreground">3–5 years</p>
          </div>
          <div className="bg-card border border-border p-6 rounded-sm">
            <h4 className="font-display text-xl">Mid-Range PPF</h4>
            <p className="mt-2 text-muted-foreground">5–7 years</p>
          </div>
          <div className="bg-card border border-border p-6 rounded-sm">
            <h4 className="font-display text-xl">Premium Self-Healing PPF</h4>
            <p className="mt-2 text-muted-foreground">7–10 years or more</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Many premium brands also offer warranties that cover yellowing, cracking, peeling, and other manufacturing defects.
        </p>
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Sparkles className="h-6 w-6 text-gold" /> What Is Self-Healing PPF?
      </h3>
      <div className="mt-6 space-y-5">
        <p className="text-muted-foreground leading-relaxed">
          One of the biggest advancements in Paint Protection Film technology is self-healing PPF.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Self-healing films feature a specialized top layer that can automatically repair minor scratches, swirl marks, and light abrasions when exposed to heat from sunlight, warm water, or engine heat.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          This technology helps keep the film looking smooth and clear for years, significantly improving the overall PPF lifespan.
        </p>
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Gem className="h-6 w-6 text-gold" /> How Self-Healing Technology Works
      </h3>
      <div className="mt-6 space-y-5">
        <p className="text-muted-foreground leading-relaxed">
          When small surface scratches occur, the elastomeric top coat softens under heat and returns to its original shape, effectively making the scratches disappear.
        </p>
        <p className="text-muted-foreground leading-relaxed font-medium">Benefits include:</p>
        <ul className="mt-4 space-y-2">
          <Bullet>Reduced visible swirl marks</Bullet>
          <Bullet>Better long-term appearance</Bullet>
          <Bullet>Lower maintenance requirements</Bullet>
          <Bullet>Extended film life</Bullet>
          <Bullet>Improved resale value</Bullet>
        </ul>
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <ShieldCheck className="h-6 w-6 text-gold" /> Factors That Affect PPF Lifespan
      </h3>
      <div className="mt-8 space-y-6">
        <div className="bg-card border border-border p-6 rounded-sm">
          <h4 className="font-display text-xl">1. Film Quality</h4>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Not all Paint Protection Films are created equal. Premium TPU (Thermoplastic Polyurethane) films generally last much longer than low-cost alternatives.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed font-medium">High-quality films offer:</p>
          <ul className="mt-3 space-y-2">
            <Bullet>Better UV resistance</Bullet>
            <Bullet>Stronger adhesive technology</Bullet>
            <Bullet>Superior self-healing capabilities</Bullet>
            <Bullet>Improved stain resistance</Bullet>
          </ul>
        </div>

        <div className="bg-card border border-border p-6 rounded-sm">
          <h4 className="font-display text-xl">2. Installation Quality</h4>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Professional installation plays a major role in determining how long your PPF lasts.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed font-medium">Poor installation can lead to:</p>
          <ul className="mt-3 space-y-2">
            <Bullet>Edge lifting</Bullet>
            <Bullet>Air bubbles</Bullet>
            <Bullet>Contamination under the film</Bullet>
            <Bullet>Premature peeling</Bullet>
          </ul>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Choosing experienced installers ensures maximum durability and performance.
          </p>
        </div>

        <div className="bg-card border border-border p-6 rounded-sm">
          <h4 className="font-display text-xl">3. Climate and Weather Conditions</h4>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Vehicles exposed to extreme environmental conditions may experience faster wear.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed font-medium">Factors include:</p>
          <ul className="mt-3 space-y-2">
            <Bullet>Intense sunlight and UV exposure</Bullet>
            <Bullet>Heavy rainfall</Bullet>
            <Bullet>Dust storms</Bullet>
            <Bullet>Industrial pollution</Bullet>
            <Bullet>Coastal salt exposure</Bullet>
          </ul>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Fortunately, premium self-healing PPF is specifically engineered to handle these challenges.
          </p>
        </div>

        <div className="bg-card border border-border p-6 rounded-sm">
          <h4 className="font-display text-xl">4. Driving Habits</h4>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Highway driving exposes vehicles to more stone chips and road debris compared to city driving. Frequent long-distance travel can increase wear on the film over time.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            However, PPF is designed to absorb these impacts and protect the original paint underneath.
          </p>
        </div>

        <div className="bg-card border border-border p-6 rounded-sm">
          <h4 className="font-display text-xl">5. Maintenance Practices</h4>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Proper maintenance significantly extends the lifespan of Paint Protection Film.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed font-medium">Recommended practices:</p>
          <ul className="mt-3 space-y-2">
            <Bullet>Regular washing</Bullet>
            <Bullet>Using pH-neutral car shampoos</Bullet>
            <Bullet>Removing bird droppings quickly</Bullet>
            <Bullet>Avoiding harsh chemicals</Bullet>
            <Bullet>Following manufacturer care instructions</Bullet>
          </ul>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Well-maintained PPF often lasts beyond its expected lifespan.
          </p>
        </div>
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <AlertTriangle className="h-6 w-6 text-gold" /> Signs That Your PPF Needs Replacement
      </h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Even the best Paint Protection Film will eventually reach the end of its service life.
      </p>
      <p className="mt-4 text-muted-foreground leading-relaxed font-medium">Common signs include:</p>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {["Yellowing or discoloration","Cracking","Peeling edges","Reduced clarity","Permanent stains","Loss of self-healing performance"].map((sign) => (
          <div key={sign} className="flex items-center gap-3 bg-card border border-border p-4 rounded-sm">
            <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
            <span className="text-muted-foreground text-sm">{sign}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-muted-foreground leading-relaxed">
        When these signs appear, replacing the film ensures continued paint protection.
      </p>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <ShieldCheck className="h-6 w-6 text-gold" /> Can PPF Damage Your Car's Paint?
      </h3>
      <div className="mt-6 space-y-5">
        <p className="text-muted-foreground leading-relaxed">
          A professionally installed and properly removed PPF does not damage factory paint. In fact, it preserves the original finish by shielding it from daily hazards.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Many car owners are surprised to find that after several years, the paint beneath the film often looks nearly identical to the day it was installed.
        </p>
      </div>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Wrench className="h-6 w-6 text-gold" /> How to Maximize PPF Lifespan
      </h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        To get the most out of your investment:
      </p>
      <ul className="mt-6 grid gap-3">
        <Bullet>Choose premium self-healing PPF.</Bullet>
        <Bullet>Have it installed by trained professionals.</Bullet>
        <Bullet>Wash your vehicle regularly.</Bullet>
        <Bullet>Avoid automatic brush car washes.</Bullet>
        <Bullet>Remove contaminants promptly.</Bullet>
        <Bullet>Follow recommended maintenance guidelines.</Bullet>
      </ul>
      <p className="mt-6 text-muted-foreground leading-relaxed">
        These simple steps can help your Paint Protection Film perform at its best for many years.
      </p>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Gem className="h-6 w-6 text-gold" /> Is PPF Worth It for Long-Term Protection?
      </h3>
      <div className="mt-6 space-y-5">
        <p className="text-muted-foreground leading-relaxed">
          Considering the rising costs of paint correction and repainting, Paint Protection Film offers excellent long-term value. A quality PPF installation can protect your vehicle's finish for up to a decade while preserving its appearance and resale value.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          For owners who want maximum paint protection and minimal cosmetic damage, modern self-healing PPF remains one of the most effective solutions available.
        </p>
      </div>
    </div>

    <div className="mt-14 bg-card border border-border p-8 rounded-sm">
      <h3 className="font-display text-2xl">Final Thoughts</h3>
      <p className="mt-6 text-muted-foreground leading-relaxed">
        The average PPF lifespan ranges from 5 to 10 years, depending on the quality of the film, installation, maintenance, and driving conditions. Premium self-healing PPF provides the longest-lasting protection by automatically repairing minor scratches and maintaining a clear, glossy finish.
      </p>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        If you're looking for a reliable way to keep your vehicle's paint protected and looking new for years, Paint Protection Film is a smart investment that continues to deliver value long after installation.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-background px-7 py-3 rounded-sm font-medium hover:opacity-90 transition">
          Book PPF Consultation <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/services" className="inline-flex items-center gap-2 border border-border px-7 py-3 rounded-sm font-medium hover:border-gold transition">
          Explore Services
        </Link>
      </div>
    </div>
  </>
);

const PpfMythsArticle = () => (
  <>
    <div className="flex items-center gap-2 text-xs tracking-[0.4em] uppercase text-gold mb-4">
      <BookOpen className="h-4 w-4" /> Paint Protection
    </div>
    <h2 className="font-display text-4xl md:text-5xl">
      Common Myths About Paint Protection Film You Should Know
    </h2>
    <div className="mt-4 h-px w-20 gold-divider" />

    <div className="mt-8 grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-5">
        <p className="text-muted-foreground leading-relaxed">
          Paint Protection Film (PPF) has become one of the most trusted solutions for protecting vehicle paint from scratches, stone chips, road debris, and environmental damage. However, despite its growing popularity, there are still many misconceptions surrounding this advanced protection technology.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          These myths often prevent car owners from making informed decisions about protecting their vehicles. In this article, we'll separate fact from fiction and uncover the truth behind some of the most common Paint Protection Film myths.
        </p>
      </div>
      <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-elegant">
        <img src={ppfMythsHero} alt="Common PPF Myths — CLNHYGEN" loading="lazy" className="h-full w-full object-cover" />
      </div>
    </div>

    <div className="mt-14 space-y-6">
      {[
        {
          myth: "Myth 1: PPF Is Only for Luxury Cars",
          reality: "PPF is beneficial for any vehicle owner who wants to preserve their car's appearance and resale value. Whether you drive a hatchback, sedan, SUV, sports car, or luxury vehicle, your paint faces the same risks from road debris, scratches, and environmental contaminants. Every vehicle can benefit from paint protection.",
        },
        {
          myth: "Myth 2: PPF Changes the Appearance of the Car",
          reality: "Modern Paint Protection Films are designed to be virtually invisible. High-quality PPF maintains the original color and finish of your vehicle while providing an added layer of protection. Many premium films even enhance the paint's gloss and depth. For those looking for a unique look, matte and satin PPF options are also available.",
        },
        {
          myth: "Myth 3: PPF Turns Yellow Quickly",
          reality: "This myth may have been true with older generations of Paint Protection Film. Today's premium PPF products feature advanced UV-resistant technology that helps prevent yellowing and discoloration. Most reputable manufacturers back their films with warranties covering yellowing and other defects. Properly maintained modern PPF can remain clear and transparent for many years.",
        },
        {
          myth: "Myth 4: PPF Is the Same as Ceramic Coating",
          reality: "Although both are popular paint protection solutions, they serve different purposes. Paint Protection Film provides physical protection against scratches and stone chips, features self-healing properties, and absorbs impacts from road debris. Ceramic Coating enhances gloss and shine, improves water repellency, and makes cleaning easier. Many vehicle owners choose to combine both for maximum protection and appearance.",
        },
        {
          myth: "Myth 5: PPF Prevents All Damage",
          reality: "PPF offers excellent protection, but it is not indestructible. While it significantly reduces the risk of stone chips, scratches, road debris damage, and minor abrasions, very sharp objects, severe impacts, or major accidents can still damage both the film and the underlying paint. PPF is designed to minimize damage, not make a vehicle completely damage-proof.",
        },
        {
          myth: "Myth 6: PPF Requires High Maintenance",
          reality: "Paint Protection Film is actually easier to maintain than unprotected paint. Most premium films feature hydrophobic top layers that help repel water, dirt, and contaminants. Regular washing and basic care are usually enough to keep the film looking great. Maintenance requirements are often lower than many people expect.",
        },
        {
          myth: "Myth 7: PPF Damages Paint When Removed",
          reality: "Professionally installed and properly removed PPF does not damage factory paint. In fact, one of the biggest advantages of Paint Protection Film is that it preserves the original paint underneath. When removed correctly, the paint often looks significantly better than unprotected areas. Problems typically occur only when low-quality films are used or improper removal methods are followed.",
        },
        {
          myth: "Myth 8: PPF Doesn't Last Very Long",
          reality: "Modern Paint Protection Films are built for long-term performance. Premium PPF products commonly last 5 to 10 years, sometimes longer with proper care. Advancements in materials and adhesive technology have significantly improved durability compared to earlier generations.",
        },
        {
          myth: "Myth 9: Scratches on PPF Are Permanent",
          reality: "Most high-quality Paint Protection Films now feature self-healing technology. Minor scratches and swirl marks can disappear when exposed to sunlight, warm water, or engine heat. This self-healing capability helps maintain a smooth and flawless appearance over time.",
        },
        {
          myth: "Myth 10: PPF Is Too Expensive",
          reality: "While PPF involves an upfront investment, it can save money in the long run. It helps reduce paint correction costs, repainting expenses, repair bills, and depreciation caused by cosmetic damage. For many vehicle owners, the long-term protection and preserved resale value justify the investment.",
        },
      ].map((item) => (
        <div key={item.myth} className="bg-card border border-border p-6 rounded-sm">
          <div className="flex items-start gap-3">
            <HelpCircle className="h-5 w-5 text-gold shrink-0 mt-1" />
            <div>
              <h4 className="font-display text-xl">{item.myth}</h4>
              <div className="mt-3">
                <span className="text-sm font-medium text-gold uppercase tracking-wider">Reality:</span>
                <p className="mt-2 text-muted-foreground leading-relaxed">{item.reality}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-14 bg-card border border-border p-8 rounded-sm">
      <h3 className="font-display text-2xl">Why Understanding These Myths Matters</h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Many misconceptions about Paint Protection Film are based on outdated information or experiences with older products. Today's PPF technology is more advanced, durable, and visually appealing than ever before.
      </p>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Understanding the facts helps vehicle owners make informed decisions about protecting their investment and avoiding unnecessary paint repair costs.
      </p>
    </div>

    <div className="mt-14">
      <h3 className="font-display text-3xl flex items-center gap-3">
        <Sparkles className="h-6 w-6 text-gold" /> Final Thoughts
      </h3>
      <div className="mt-6 space-y-5">
        <p className="text-muted-foreground leading-relaxed">
          Paint Protection Film continues to be one of the most effective ways to safeguard a vehicle's exterior. By separating myths from reality, it's clear that modern PPF offers long-lasting protection, self-healing capabilities, improved appearance, and excellent value.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          If you're considering paint protection for your vehicle, don't let outdated myths influence your decision. With professional installation and quality materials, Paint Protection Film can help keep your car looking newer for years while protecting one of its most valuable assets — its paint.
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-background px-7 py-3 rounded-sm font-medium hover:opacity-90 transition">
          Book PPF Consultation <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/services" className="inline-flex items-center gap-2 border border-border px-7 py-3 rounded-sm font-medium hover:border-gold transition">
          Explore Services
        </Link>
      </div>
    </div>
  </>
);

const Blog = () => {
  const [active, setActive] = useState<string | null>(null);
  const current = articles.find((a) => a.slug === active);

  if (current) {
    return (
      <div>
        <PageHero eyebrow="CLNHYGEN Blog" title={current.title} />
        <section className="py-16 border-b border-border bg-secondary/20">
          <div className="container mx-auto max-w-5xl">
            <button
              onClick={() => {
                setActive(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-sm text-gold hover:gap-3 transition-all mb-8"
            >
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </button>
            {current.slug === "what-is-paint-protection-film-ppf-worth-it-2026" && <PpfArticle />}
            {current.slug === "ppf-vs-ceramic-coating-which-is-better" && <PpfVsCeramicArticle />}
            {current.slug === "how-long-does-paint-protection-film-last" && <PpfLifespanArticle />}
            {current.slug === "common-myths-about-paint-protection-film" && <PpfMythsArticle />}
            {cityData[current.slug] && <CityArticle data={cityData[current.slug]} />}

          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <PageHero
        eyebrow="CLNHYGEN Blog"
        title="Premium Detailing Insights"
        subtitle="Paint protection know-how and luxury car care tips from the CLNHYGEN studio."
      />
      <section className="py-16 border-b border-border bg-secondary/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a) => (
              <button
                key={a.slug}
                onClick={() => {
                  setActive(a.slug);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group text-left bg-card border border-border rounded-sm hover:border-gold transition overflow-hidden flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold">
                    <BookOpen className="h-4 w-4" /> {a.category}
                  </div>
                  <h3 className="mt-4 font-display text-2xl">{a.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{a.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-gold group-hover:gap-3 transition-all">
                    Read article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
