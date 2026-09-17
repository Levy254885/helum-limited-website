import type { ImageKey } from "./images";

export type Product = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  blurb: string;
  specs: { label: string; value: string }[];
  uses: string[];
  image: ImageKey;
};

export type ProductCategory = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  image: ImageKey;
  products: Product[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "inverters",
    title: "Inverters",
    short: "Hybrid, off-grid and three-phase inverters for homes, businesses and institutions.",
    intro:
      "Helum supplies solar and hybrid inverters as part of complete energy systems. We match inverter type to load, grid conditions and storage — working with technology partners including SVC Energy and Deye.",
    image: "inverter",
    products: [
      {
        slug: "hybrid-inverters",
        name: "Hybrid Inverters",
        category: "inverters",
        headline: "ENERGY HARVEST ABOVE EXPECTATION",
        blurb:
          "Hybrid inverters for sites that combine solar, battery storage and the grid — designed for reliable self-use and seamless backup.",
        specs: [
          { label: "Application", value: "Hybrid / Grid-tied" },
          { label: "Use", value: "Homes & SMEs" },
          { label: "Partners", value: "SVC · Deye" },
        ],
        uses: ["Homes and small businesses", "Backup with solar self-use", "Systems that may grow over time"],
        image: "inverter",
      },
      {
        slug: "off-grid-inverters",
        name: "Off-Grid Inverters",
        category: "inverters",
        headline: "POWER WITHOUT COMPROMISE",
        blurb:
          "Off-grid inverters for sites where grid supply is weak, unreliable or absent — built for standalone solar and storage systems.",
        specs: [
          { label: "Application", value: "Off-grid" },
          { label: "Use", value: "Rural & remote" },
          { label: "Partners", value: "SVC · Deye" },
        ],
        uses: ["Rural homes and enterprises", "Standalone solar and storage", "Decentralized power"],
        image: "offGrid",
      },
      {
        slug: "three-phase-inverters",
        name: "Three-Phase Inverters",
        category: "inverters",
        headline: "BUILT FOR COMMERCIAL LOADS",
        blurb:
          "Three-phase inverters for larger commercial and institutional loads that demand stable, high-capacity power conversion.",
        specs: [
          { label: "Application", value: "Three-phase" },
          { label: "Use", value: "Business & institutions" },
          { label: "Partners", value: "SVC · Deye" },
        ],
        uses: ["Businesses and workshops", "Institutions", "Higher-capacity systems"],
        image: "energyTech",
      },
    ],
  },
  {
    slug: "lithium-batteries",
    title: "Lithium Batteries",
    short: "Lithium energy storage for backup, solar self-use and productive hours.",
    intro:
      "Helum supplies lithium battery storage as part of designed systems — wall, rack and residential modules — working with partners including SVC Energy and Hithium. We do not treat batteries as catalogue add-ons; they are sized to the load.",
    image: "lithium",
    products: [
      {
        slug: "wall-lithium-batteries",
        name: "Wall-Mounted Lithium Batteries",
        category: "lithium-batteries",
        headline: "SMART STORAGE, READY WHEN YOU ARE",
        blurb:
          "Compact wall-mounted lithium storage for homes and small commercial sites — clean install, reliable cycles, sized to the circuit.",
        specs: [
          { label: "Form", value: "Wall-mounted" },
          { label: "Chemistry", value: "LiFePO₄" },
          { label: "Partners", value: "SVC · Hithium" },
        ],
        uses: ["Household backup", "Solar self-use", "Essential circuits"],
        image: "lithium",
      },
      {
        slug: "rack-lithium-batteries",
        name: "Rack Lithium Batteries",
        category: "lithium-batteries",
        headline: "SMART STORAGE, MADE TO SCALE",
        blurb:
          "Modular rack lithium batteries that expand with the site — for businesses and institutions that need more than a single pack.",
        specs: [
          { label: "Form", value: "Rack / modular" },
          { label: "Chemistry", value: "LiFePO₄" },
          { label: "Partners", value: "SVC · Hithium" },
        ],
        uses: ["Businesses", "Institutions", "Larger backup systems"],
        image: "battery",
      },
      {
        slug: "residential-battery-modules",
        name: "Residential Battery Modules",
        category: "lithium-batteries",
        headline: "HOME STORAGE THAT WORKS HARDER",
        blurb:
          "Residential battery modules designed to sit with hybrid inverters and solar PV — evening cover and outage resilience for homes.",
        specs: [
          { label: "Form", value: "Residential module" },
          { label: "Chemistry", value: "LiFePO₄" },
          { label: "Partners", value: "SVC · Hithium" },
        ],
        uses: ["Homes", "Small offices", "Evening and outage cover"],
        image: "homes",
      },
    ],
  },
  {
    slug: "power-stations",
    title: "Power Stations",
    short: "Portable and all-in-one solar generators for backup and off-grid use.",
    intro:
      "Helum supplies power stations and all-in-one solar generators for customers who need compact, deployable power — including technologies from partners such as SVC Energy and Meco Energy.",
    image: "powerStation",
    products: [
      {
        slug: "portable-power-stations",
        name: "Portable Power Stations",
        category: "power-stations",
        headline: "POWER ON THE MOVE",
        blurb:
          "Portable power stations for homes, sites and small loads — moveable backup when the grid drops or the site is temporary.",
        specs: [
          { label: "Type", value: "Portable" },
          { label: "Use", value: "Backup & field" },
          { label: "Partners", value: "SVC · Meco" },
        ],
        uses: ["Household backup", "Field and site work", "Small appliances and charging"],
        image: "powerStation",
      },
      {
        slug: "all-in-one-solar-generators",
        name: "All-in-One Solar Generators",
        category: "power-stations",
        headline: "INTEGRATED POWER, READY TO DEPLOY",
        blurb:
          "Integrated inverter, storage and solar charging in one system — for off-grid homes, SMEs and rapid deployment.",
        specs: [
          { label: "Type", value: "All-in-one" },
          { label: "Use", value: "Off-grid & SME" },
          { label: "Partners", value: "SVC · Meco" },
        ],
        uses: ["Off-grid homes", "SMEs", "Rapid deployment"],
        image: "backup",
      },
    ],
  },
  {
    slug: "solar-panels",
    title: "Solar Panels",
    short: "PV modules for rooftop, ground-mount and productive-use systems.",
    intro:
      "Solar PV is the generation layer of many Helum solutions. We supply panels as part of designed systems for homes, businesses, institutions and farms — not as a standalone catalogue sale.",
    image: "solarPv",
    products: [
      {
        slug: "rooftop-solar-panels",
        name: "Rooftop Solar Panels",
        category: "solar-panels",
        headline: "CLEAN GENERATION ON EVERY ROOF",
        blurb:
          "PV modules for residential and commercial roofs — specified as part of a complete Helum system, not a one-off panel sale.",
        specs: [
          { label: "Mount", value: "Rooftop" },
          { label: "Use", value: "Homes & commercial" },
          { label: "System", value: "Designed with Helum" },
        ],
        uses: ["Homes", "Shops and offices", "Institutions"],
        image: "solarPv",
      },
      {
        slug: "ground-mount-solar-panels",
        name: "Ground-Mount Solar Arrays",
        category: "solar-panels",
        headline: "SCALE WHERE THE ROOF CANNOT",
        blurb:
          "Ground-mount arrays where roof space is limited or loads are higher — for farms, businesses and institutions.",
        specs: [
          { label: "Mount", value: "Ground" },
          { label: "Use", value: "Farms & institutions" },
          { label: "System", value: "Designed with Helum" },
        ],
        uses: ["Farms", "Businesses", "Institutions"],
        image: "renewable",
      },
    ],
  },
  {
    slug: "solar-water-pumps",
    title: "Solar Water Pumps",
    short: "Solar-powered pumping and irrigation for farms and rural water supply.",
    intro:
      "Solar water pumps turn energy into water for irrigation, livestock and rural supply. Helum sizes pumping systems around source, head and crop or livestock need — as part of productive-use solutions.",
    image: "water",
    products: [
      {
        slug: "surface-solar-pumps",
        name: "Surface Solar Pumps",
        category: "solar-water-pumps",
        headline: "WATER FROM SUNLIGHT",
        blurb:
          "Surface solar pumps for rivers, tanks and relatively shallow sources — irrigation and livestock water without diesel.",
        specs: [
          { label: "Type", value: "Surface" },
          { label: "Use", value: "Irrigation & livestock" },
          { label: "Drive", value: "Solar PV" },
        ],
        uses: ["Irrigation", "Livestock water", "Farm operations"],
        image: "water",
      },
      {
        slug: "submersible-solar-pumps",
        name: "Submersible Solar Pumps",
        category: "solar-water-pumps",
        headline: "DEEP SOURCE, CLEAN POWER",
        blurb:
          "Submersible solar pumps for boreholes and deeper water sources — rural supply and agricultural reliability.",
        specs: [
          { label: "Type", value: "Submersible" },
          { label: "Use", value: "Borehole & rural" },
          { label: "Drive", value: "Solar PV" },
        ],
        uses: ["Borehole irrigation", "Rural water supply", "Agriculture"],
        image: "agriculture",
      },
    ],
  },
];

export function categoryBySlug(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}

export function productBySlug(slug: string) {
  for (const c of productCategories) {
    const p = c.products.find((x) => x.slug === slug);
    if (p) return { product: p, category: c };
  }
  return undefined;
}

export const allProducts = productCategories.flatMap((c) => c.products);
