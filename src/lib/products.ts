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
  gallery?: ImageKey[];
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
    short: "Hybrid, off grid and three phase inverters for homes, businesses and institutions.",
    intro:
      "Helum supplies solar and hybrid inverters as part of complete systems. We match the inverter to load, grid conditions and storage, working with partners including SVC Energy and Deye.",
    image: "inverterStudio",
    products: [
      {
        slug: "all-in-one-inverter-battery",
        name: "All-in-One Inverter & Battery",
        category: "inverters",
        headline: "Inverter and storage in one cabinet",
        blurb:
          "An integrated inverter and lithium battery system for homes and small businesses. One unit handles solar charge, backup and daily use — specified as part of a Helum solution, supplied with SVC Energy.",
        specs: [
          { label: "Type", value: "All-in-one ESS" },
          { label: "Use", value: "Homes & SMEs" },
          { label: "Partners", value: "SVC Energy" },
        ],
        uses: ["Household backup", "Solar self use", "Compact sites that need inverter and battery together"],
        image: "allInOneEss",
      },
      {
        slug: "hybrid-inverters",
        name: "Hybrid Inverters",
        category: "inverters",
        headline: "Solar, storage and grid in one system",
        blurb:
          "For sites that run solar with battery storage and the grid. Built for self use by day and backup when the grid drops.",
        specs: [
          { label: "Application", value: "Hybrid / grid tied" },
          { label: "Use", value: "Homes & SMEs" },
          { label: "Partners", value: "SVC · Deye" },
        ],
        uses: ["Homes and small businesses", "Backup with solar self use", "Systems that can grow over time"],
        image: "inverterStudio",
        gallery: ["inverterStudio", "inverterFront", "inverterAngle", "inverterRear"],
      },
      {
        slug: "off-grid-inverters",
        name: "Off Grid Inverters",
        category: "inverters",
        headline: "Power where the grid is weak or missing",
        blurb:
          "For rural and remote sites with weak, unreliable or no grid. Suited to standalone solar and storage systems.",
        specs: [
          { label: "Application", value: "Off grid" },
          { label: "Use", value: "Rural & remote" },
          { label: "Partners", value: "SVC · Deye" },
        ],
        uses: ["Rural homes and enterprises", "Standalone solar and storage", "Decentralized power"],
        image: "batteryHuayite",
      },
      {
        slug: "three-phase-inverters",
        name: "Three Phase Inverters",
        category: "inverters",
        headline: "Stable power for larger loads",
        blurb:
          "For commercial and institutional sites that need three phase conversion and higher capacity.",
        specs: [
          { label: "Application", value: "Three phase" },
          { label: "Use", value: "Business & institutions" },
          { label: "Partners", value: "SVC · Deye" },
        ],
        uses: ["Businesses and workshops", "Institutions", "Higher capacity systems"],
        image: "energyTech",
      },
    ],
  },
  {
    slug: "lithium-batteries",
    title: "Lithium Batteries",
    short: "Lithium storage for backup, solar self use and longer operating hours.",
    intro:
      "Helum supplies lithium batteries as part of designed systems: wall, rack and residential modules. Partners include SVC Energy and Hithium. Batteries are sized to the load, not sold as catalogue extras.",
    image: "lithium",
    products: [
      {
        slug: "wall-lithium-batteries",
        name: "Wall Mounted Lithium Batteries",
        category: "lithium-batteries",
        headline: "Compact storage for homes and small sites",
        blurb:
          "Wall mounted lithium packs for homes and small commercial sites. Clean install, strong cycle life, sized to the circuit you need to protect.",
        specs: [
          { label: "Form", value: "Wall mounted" },
          { label: "Chemistry", value: "LiFePO₄" },
          { label: "Partners", value: "SVC · Hithium" },
        ],
        uses: ["Household backup", "Solar self use", "Essential circuits"],
        image: "lithium",
      },
      {
        slug: "rack-lithium-batteries",
        name: "Rack Lithium Batteries",
        category: "lithium-batteries",
        headline: "Modular storage that grows with the site",
        blurb:
          "Rack lithium modules for businesses and institutions that need more capacity than a single wall pack.",
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
        headline: "Home storage that works with hybrid solar",
        blurb:
          "Residential modules designed to sit with hybrid inverters and solar PV. Cover evening load and outages.",
        specs: [
          { label: "Form", value: "Residential module" },
          { label: "Chemistry", value: "LiFePO₄" },
          { label: "Partners", value: "SVC · Hithium" },
        ],
        uses: ["Homes", "Small offices", "Evening and outage cover"],
        image: "backup",
      },
    ],
  },
  {
    slug: "power-stations",
    title: "Power Stations",
    short: "Portable and integrated solar generators for backup and off grid use.",
    intro:
      "Helum supplies power stations and integrated solar generators for customers who need compact, deployable power. Partners include SVC Energy and Meco Energy.",
    image: "powerStation",
    products: [
      {
        slug: "portable-power-stations",
        name: "Portable Power Stations",
        category: "power-stations",
        headline: "Backup power you can move",
        blurb:
          "Portable units for homes, field sites and small loads when the grid fails or the site is temporary.",
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
        name: "Integrated Solar Generators",
        category: "power-stations",
        headline: "Inverter, storage and solar charge in one unit",
        blurb:
          "Integrated systems for off grid homes, SMEs and sites that need fast deployment without a full custom build.",
        specs: [
          { label: "Type", value: "Integrated" },
          { label: "Use", value: "Off grid & SME" },
          { label: "Partners", value: "SVC · Meco" },
        ],
        uses: ["Off grid homes", "SMEs", "Rapid deployment"],
        image: "powerStationSide",
      },
    ],
  },
  {
    slug: "solar-panels",
    title: "Solar Panels",
    short: "PV modules for rooftop, ground mount and productive use systems.",
    intro:
      "Solar PV is the generation layer of many Helum systems. We supply panels as part of designed solutions for homes, businesses, institutions and farms, not as standalone catalogue sales.",
    image: "solarPv",
    products: [
      {
        slug: "rooftop-solar-panels",
        name: "Rooftop Solar Panels",
        category: "solar-panels",
        headline: "Generation on residential and commercial roofs",
        blurb:
          "Modules for homes, shops and offices, specified as part of a full Helum system.",
        specs: [
          { label: "Mount", value: "Rooftop" },
          { label: "Use", value: "Homes & commercial" },
          { label: "System", value: "Designed with Helum" },
        ],
        uses: ["Homes", "Shops and offices", "Institutions"],
        image: "homes",
      },
      {
        slug: "ground-mount-solar-panels",
        name: "Ground Mount Solar Arrays",
        category: "solar-panels",
        headline: "Larger arrays when roof space is limited",
        blurb:
          "Ground mount arrays for farms, businesses and institutions with higher loads or limited roof area.",
        specs: [
          { label: "Mount", value: "Ground" },
          { label: "Use", value: "Farms & institutions" },
          { label: "System", value: "Designed with Helum" },
        ],
        uses: ["Farms", "Businesses", "Institutions"],
        image: "productive",
      },
    ],
  },
  {
    slug: "solar-water-heaters",
    title: "Solar Water Heaters",
    short: "Evacuated-tube solar water heaters for homes and institutions.",
    intro:
      "Helum supplies solar water heaters so households and institutions can heat water from the sun rather than putting extra load on the grid or on backup generators.",
    image: "waterHeater",
    products: [
      {
        slug: "evacuated-tube-heaters",
        name: "Evacuated Tube Solar Water Heaters",
        category: "solar-water-heaters",
        headline: "Hot water from the sun",
        blurb:
          "Tube collectors with an insulated tank for domestic and institutional hot water. A practical Helum product for sites that need heat without extra electrical load.",
        specs: [
          { label: "Type", value: "Evacuated tube" },
          { label: "Use", value: "Homes & institutions" },
          { label: "Energy", value: "Solar thermal" },
        ],
        uses: ["Homes", "Institutions", "Guest houses and facilities"],
        image: "waterHeater",
      },
    ],
  },
  {
    slug: "solar-water-pumps",
    title: "Solar Water Pumps",
    short: "Solar powered pumping and irrigation for farms and rural water supply.",
    intro:
      "Solar water pumps turn sunlight into water for irrigation, livestock and rural supply. Helum sizes systems around source, head and crop or livestock need.",
    image: "water",
    products: [
      {
        slug: "surface-solar-pumps",
        name: "Surface Solar Pumps",
        category: "solar-water-pumps",
        headline: "Water from rivers, tanks and shallow sources",
        blurb:
          "Surface pumps for irrigation and livestock where the water source is relatively shallow.",
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
        headline: "Borehole and deeper water sources",
        blurb:
          "Submersible pumps for boreholes and deeper sources used in irrigation and rural water supply.",
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
