import type { ImageKey } from "./images";

export type Product = {
  slug: string;
  name: string;
  category: string;
  blurb: string;
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
        name: "Hybrid inverters",
        category: "inverters",
        blurb: "For sites that combine solar, battery storage and the grid.",
        uses: ["Homes and small businesses", "Backup with solar self-use", "Systems that may grow over time"],
        image: "inverter",
      },
      {
        slug: "off-grid-inverters",
        name: "Off-grid inverters",
        category: "inverters",
        blurb: "For sites where grid supply is weak, unreliable or absent.",
        uses: ["Rural homes and enterprises", "Standalone solar and storage", "Decentralized power"],
        image: "offGrid",
      },
      {
        slug: "three-phase-inverters",
        name: "Three-phase inverters",
        category: "inverters",
        blurb: "For larger commercial and institutional loads.",
        uses: ["Businesses and workshops", "Institutions", "Higher-capacity systems"],
        image: "energyTech",
      },
    ],
  },
  {
    slug: "lithium-batteries",
    title: "Lithium batteries",
    short: "Lithium energy storage for backup, solar self-use and productive hours.",
    intro:
      "Helum supplies lithium battery storage as part of designed systems — wall, rack and residential modules — working with partners including SVC Energy and Hithium. We do not treat batteries as catalogue add-ons; they are sized to the load.",
    image: "lithium",
    products: [
      {
        slug: "wall-lithium-batteries",
        name: "Wall-mounted lithium batteries",
        category: "lithium-batteries",
        blurb: "Compact storage for homes and small commercial sites.",
        uses: ["Household backup", "Solar self-use", "Essential circuits"],
        image: "lithium",
      },
      {
        slug: "rack-lithium-batteries",
        name: "Rack lithium batteries",
        category: "lithium-batteries",
        blurb: "Modular storage that can be expanded with the site.",
        uses: ["Businesses", "Institutions", "Larger backup systems"],
        image: "battery",
      },
      {
        slug: "residential-battery-modules",
        name: "Residential battery modules",
        category: "lithium-batteries",
        blurb: "Home storage designed to sit with hybrid inverters and solar PV.",
        uses: ["Homes", "Small offices", "Evening and outage cover"],
        image: "homes",
      },
    ],
  },
  {
    slug: "power-stations",
    title: "Power stations",
    short: "Portable and all-in-one solar generators for backup and off-grid use.",
    intro:
      "Helum supplies power stations and all-in-one solar generators for customers who need compact, deployable power — including technologies from partners such as SVC Energy and Meco Energy.",
    image: "powerStation",
    products: [
      {
        slug: "portable-power-stations",
        name: "Portable power stations",
        category: "power-stations",
        blurb: "Moveable backup power for homes, sites and small loads.",
        uses: ["Household backup", "Field and site work", "Small appliances and charging"],
        image: "powerStation",
      },
      {
        slug: "all-in-one-solar-generators",
        name: "All-in-one solar generators",
        category: "power-stations",
        blurb: "Integrated inverter, storage and solar charging in one system.",
        uses: ["Off-grid homes", "SMEs", "Rapid deployment"],
        image: "backup",
      },
    ],
  },
  {
    slug: "solar-panels",
    title: "Solar panels",
    short: "PV modules for rooftop, ground-mount and productive-use systems.",
    intro:
      "Solar PV is the generation layer of many Helum solutions. We supply panels as part of designed systems for homes, businesses, institutions and farms — not as a standalone catalogue sale.",
    image: "solarPv",
    products: [
      {
        slug: "rooftop-solar-panels",
        name: "Rooftop solar panels",
        category: "solar-panels",
        blurb: "Modules for residential and commercial roofs.",
        uses: ["Homes", "Shops and offices", "Institutions"],
        image: "solarPv",
      },
      {
        slug: "ground-mount-solar-panels",
        name: "Ground-mount solar arrays",
        category: "solar-panels",
        blurb: "Larger arrays where roof space is limited or loads are higher.",
        uses: ["Farms", "Businesses", "Institutions"],
        image: "renewable",
      },
    ],
  },
  {
    slug: "solar-water-pumps",
    title: "Solar water pumps",
    short: "Solar-powered pumping and irrigation for farms and rural water supply.",
    intro:
      "Solar water pumps turn energy into water for irrigation, livestock and rural supply. Helum sizes pumping systems around source, head and crop or livestock need — as part of productive-use solutions.",
    image: "water",
    products: [
      {
        slug: "surface-solar-pumps",
        name: "Surface solar pumps",
        category: "solar-water-pumps",
        blurb: "For rivers, tanks and relatively shallow sources.",
        uses: ["Irrigation", "Livestock water", "Farm operations"],
        image: "water",
      },
      {
        slug: "submersible-solar-pumps",
        name: "Submersible solar pumps",
        category: "solar-water-pumps",
        blurb: "For boreholes and deeper water sources.",
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
