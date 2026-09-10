import type { ImageKey } from "./images";

export type PageSpec = {
  path: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  image: ImageKey;
  layout: "editorial" | "split-cards" | "timeline" | "mosaic" | "dark-intro" | "checklist" | "faq" | "form";
  intro: string[];
  sections: { heading: string; body: string; points?: string[]; href?: string }[];
  crumbs?: { href: string; label: string }[];
  related?: { href: string; label: string }[];
  cta?: { title: string; body: string; href: string; label: string };
  faqs?: { q: string; a: string }[];
};

const ctaTalk = {
  title: "Ready to discuss a practical energy solution?",
  body: "Tell Helum about the challenge you need to solve — energy access, reliability, productive use or partnership.",
  href: "/contact",
  label: "Talk to Helum",
};

export const pages: Record<string, PageSpec> = {
  about: {
    path: "/about",
    metaTitle: "About Helum Limited",
    description:
      "Helum Limited is a Kenyan technology and renewable-energy company focused on developing, sourcing and delivering solutions to real-world energy and productivity challenges.",
    eyebrow: "About Helum",
    heroTitle: "Technology. Energy. Possibility.",
    heroSubtitle: "Building practical solutions for a sustainable Africa.",
    image: "about",
    layout: "editorial",
    intro: [
      "Helum Limited is a Kenyan technology and renewable-energy company focused on developing, sourcing and delivering innovative solutions that address real-world energy and productivity challenges.",
      "We believe the future of Africa will be shaped by companies that can connect technology, reliable energy, business opportunity and customer value. Helum exists to be one of those companies.",
      "Rather than simply selling products, Helum seeks to build solutions around the customer's problem — from energy access and power reliability to productive use of technology and improved business efficiency.",
    ],
    sections: [
      {
        heading: "Where we work from",
        body: "Helum is based at Darosa Plaza, Karen Road, Nairobi, Kenya. From this Kenyan foundation we combine local market knowledge with access to innovative technologies and international partnerships.",
      },
      {
        heading: "What we exist to do",
        body: "Helum develops and delivers practical technology and energy solutions designed around real customer needs — for homes, businesses, institutions, agriculture and emerging enterprises.",
        points: [
          "Renewable energy solutions",
          "Energy and power technology",
          "Productive-use technology",
          "Strategic technology partnerships",
        ],
      },
    ],
    crumbs: [{ href: "/about", label: "About Helum" }],
    related: [
      { href: "/vision-mission", label: "Vision & Mission" },
      { href: "/about/approach", label: "Our Approach" },
      { href: "/about/story", label: "Our Story" },
    ],
    cta: ctaTalk,
  },
  vision: {
    path: "/vision-mission",
    metaTitle: "Vision & Mission",
    description:
      "Helum's vision is to become a leading African technology and energy solutions company. Our mission is to connect innovative technology, reliable energy and entrepreneurial opportunity.",
    eyebrow: "Vision & Mission",
    heroTitle: "A clearer energy future for Africa",
    heroSubtitle: "How people and businesses access, use and benefit from technology and sustainable energy.",
    image: "vision",
    layout: "split-cards",
    intro: [
      "Helum's direction is deliberate: technology that serves energy, and energy that creates possibility.",
      "Vision and mission are not slogans for us. They describe the kind of company we are building — practical, partnership-led and designed for African operating conditions.",
    ],
    sections: [
      {
        heading: "Our vision",
        body: "To become a leading African technology and energy solutions company, transforming how people and businesses access, use and benefit from technology and sustainable energy.",
      },
      {
        heading: "Our mission",
        body: "To connect innovative technology, reliable energy and entrepreneurial opportunity to create practical solutions that improve lives, strengthen businesses and accelerate sustainable development.",
      },
      {
        heading: "How we hold ourselves to it",
        body: "Every solution is tested against a simple question: what value does this create for the customer in real operating conditions?",
      },
      {
        heading: "Who it is for",
        body: "Households, businesses, institutions, farms and rural enterprises that need reliable energy and productive technology.",
      },
    ],
    crumbs: [
      { href: "/about", label: "About" },
      { href: "/vision-mission", label: "Vision & Mission" },
    ],
    related: [
      { href: "/values", label: "Our Values" },
      { href: "/why-helum", label: "Why Helum" },
    ],
    cta: ctaTalk,
  },
  values: {
    path: "/values",
    metaTitle: "Our Values",
    description:
      "Innovation, integrity, customer value, partnership, excellence and impact — the values that guide Helum Limited.",
    eyebrow: "Our Values",
    heroTitle: "How Helum works",
    heroSubtitle: "Sustainable businesses are built on trust, accountability and customer value.",
    image: "values",
    layout: "mosaic",
    intro: [
      "These six values shape how Helum selects technologies, designs solutions and builds relationships.",
      "They come from the company profile — not from a marketing exercise.",
    ],
    sections: [
      { heading: "Innovation", body: "We continuously look for better ways of solving problems." },
      { heading: "Integrity", body: "We believe sustainable businesses are built on trust and accountability." },
      { heading: "Customer Value", body: "We measure success by the value our solutions create for customers." },
      { heading: "Partnership", body: "We believe great businesses are built through strong relationships." },
      { heading: "Excellence", body: "We pursue quality in our technology, execution and customer experience." },
      { heading: "Impact", body: "Commercial success should go hand in hand with positive social and economic impact." },
    ],
    crumbs: [
      { href: "/about", label: "About" },
      { href: "/values", label: "Our Values" },
    ],
    related: [
      { href: "/why-helum", label: "Why Helum" },
      { href: "/about/approach", label: "Our Approach" },
    ],
    cta: ctaTalk,
  },
  why: {
    path: "/why-helum",
    metaTitle: "Why Helum",
    description:
      "Helum understands African markets, pairs local insight with global technology, and builds solutions around customer problems rather than product catalogues.",
    eyebrow: "Why Helum",
    heroTitle: "Local insight. Global technology.",
    heroSubtitle: "Technology only creates value when it solves a real problem.",
    image: "why",
    layout: "dark-intro",
    intro: [
      "Helum focuses on understanding local customer needs and adapting solutions accordingly.",
      "We are not driven by technology for its own sake. Every solution must answer an important question: what value does this create for the customer?",
    ],
    sections: [
      {
        heading: "We understand the African market",
        body: "Technology only creates value when it solves a real problem. Helum focuses on understanding local customer needs and adapting solutions accordingly.",
      },
      {
        heading: "Technology with commercial purpose",
        body: "We select technologies that can be deployed, supported and scaled in real Kenyan and African operating conditions.",
      },
      {
        heading: "A bridge between markets",
        body: "Our strategy is to combine Kenyan market intelligence with international technology and manufacturing relationships.",
      },
      {
        heading: "Beyond selling products",
        body: "We want customers to see Helum as a solutions partner — from identifying a challenge through deployment, support and future upgrades.",
      },
      {
        heading: "Built for scale",
        body: "Helum is being developed with a long-term view: establishing a strong Kenyan foundation and eventually expanding into selected African markets.",
      },
    ],
    crumbs: [
      { href: "/about", label: "About" },
      { href: "/why-helum", label: "Why Helum" },
    ],
    related: [
      { href: "/about/approach", label: "Our Approach" },
      { href: "/process", label: "Our Process" },
    ],
    cta: ctaTalk,
  },
  approach: {
    path: "/about/approach",
    metaTitle: "Our Approach",
    description:
      "Helum combines local market knowledge with strategic international partnerships and access to innovative technologies, then designs around the customer’s problem.",
    eyebrow: "Our Approach",
    heroTitle: "Start with the customer's problem",
    heroSubtitle: "Then apply technology that can be adapted to Kenyan businesses, households, institutions and farms.",
    image: "approach",
    layout: "timeline",
    intro: [
      "Our approach combines local market knowledge with strategic international partnerships and access to innovative technologies.",
      "That combination lets us identify solutions that can be adapted to the needs of Kenyan businesses, households, institutions, agriculture and emerging enterprises.",
    ],
    sections: [
      { heading: "Listen", body: "Understand the customer's energy, reliability and productivity challenge — not only the product they think they need." },
      { heading: "Adapt", body: "Match technologies to operating conditions, site realities and commercial purpose." },
      { heading: "Partner", body: "Work with manufacturers, technology companies and development partners where it improves quality and access." },
      { heading: "Deliver", body: "Source, supply, install, commission and implement with a view to long-term support." },
      { heading: "Stay", body: "Provide maintenance, support and future upgrades rather than a one-off transaction." },
    ],
    crumbs: [
      { href: "/about", label: "About" },
      { href: "/about/approach", label: "Our Approach" },
    ],
    related: [
      { href: "/process", label: "Our Process" },
      { href: "/about/story", label: "Our Story" },
    ],
    cta: ctaTalk,
  },
  story: {
    path: "/about/story",
    metaTitle: "Our Story",
    description:
      "Helum Limited is a Kenyan company built to connect technology, reliable energy, business opportunity and customer value.",
    eyebrow: "Our Story",
    heroTitle: "A Kenyan company with an African horizon",
    heroSubtitle: "Establishing a strong Kenyan foundation, then expanding into selected African markets.",
    image: "story",
    layout: "editorial",
    intro: [
      "Helum was formed around a simple observation: Africa's energy and productivity challenges will not be solved by product catalogues alone.",
      "They will be solved by companies that can connect technology, reliable energy, business opportunity and customer value — and stay with the customer after commissioning.",
      "From Nairobi, Helum is building that company: a platform that can identify, source, adapt, deploy and scale innovative technologies for African markets.",
    ],
    sections: [
      {
        heading: "A Kenyan foundation",
        body: "We work from Darosa Plaza, Karen Road, Nairobi. Local market knowledge is not a slogan; it is how we judge whether a technology can actually serve homes, businesses, institutions and farms.",
      },
      {
        heading: "A long-term view",
        body: "Helum is being developed with a long-term view. The opportunity is not limited to selling solar panels or batteries. It is about building an integrated technology and energy platform capable of responding to changing customer and market needs.",
      },
    ],
    crumbs: [
      { href: "/about", label: "About" },
      { href: "/about/story", label: "Our Story" },
    ],
    related: [
      { href: "/opportunity", label: "Investment & Growth" },
      { href: "/why-helum", label: "Why Helum" },
    ],
    cta: ctaTalk,
  },
  services: {
    path: "/services",
    metaTitle: "Services",
    description:
      "Helum delivers renewable energy solutions, energy and power technology, productive-use technology and strategic technology partnerships.",
    eyebrow: "Services",
    heroTitle: "Integrated technology and energy solutions",
    heroSubtitle: "From reliable power to productive-use technologies, designed around real customer needs.",
    image: "renewable",
    layout: "mosaic",
    intro: [
      "Helum's work sits in four connected areas. Together they form a practical response to energy access, reliability and productivity.",
    ],
    sections: [
      { heading: "Renewable Energy Solutions", body: "Solar and clean-energy solutions for residential, commercial, institutional and productive-use applications.", href: "/services/renewable-energy" },
      { heading: "Solar PV Systems", body: "Solar power systems designed around site conditions and customer energy requirements.", href: "/services/solar-pv" },
      { heading: "Battery Energy Storage", body: "Storage that makes generated power usable when it is needed.", href: "/services/battery-storage" },
      { heading: "Backup Power Solutions", body: "Continuity of supply when the grid is unreliable.", href: "/services/backup-power" },
      { heading: "Off-Grid & Decentralized Energy", body: "Energy where grid extension is impractical or uneconomic.", href: "/services/off-grid" },
      { heading: "Energy & Power Technology", body: "Technologies that make electricity more reliable, accessible and productive.", href: "/services/energy-power-technology" },
      { heading: "Productive-Use Technology", body: "Energy that creates economic value for farms, SMEs and rural enterprises.", href: "/services/productive-use" },
      { heading: "Strategic Technology Partnerships", body: "Relationships that bring quality technologies into African markets.", href: "/services/strategic-partnerships" },
    ],
    crumbs: [{ href: "/services", label: "Services" }],
    related: [
      { href: "/solutions", label: "Solutions by customer" },
      { href: "/process", label: "How we work" },
    ],
    cta: ctaTalk,
  },
  renewable: {
    path: "/services/renewable-energy",
    metaTitle: "Renewable Energy Solutions",
    description:
      "Helum develops and delivers solar and other clean-energy solutions for residential, commercial, institutional and productive-use applications.",
    eyebrow: "Services",
    heroTitle: "Renewable energy solutions",
    heroSubtitle: "Solar and clean energy designed for real Kenyan operating conditions.",
    image: "renewable",
    layout: "split-cards",
    intro: [
      "Helum develops and delivers solar and other clean-energy solutions for residential, commercial, institutional and productive-use applications.",
      "The focus is practical: systems that can be sourced, installed, commissioned and supported.",
    ],
    sections: [
      {
        heading: "What we focus on",
        body: "Clean energy that improves access, reliability and productive use.",
        points: [
          "Solar power systems",
          "Battery energy storage",
          "Backup power solutions",
          "Solar-powered productive equipment",
          "Energy solutions for businesses and institutions",
          "Off-grid and decentralized energy applications",
        ],
      },
      { heading: "Solar PV", body: "Generation sized to the customer's load and site.", href: "/services/solar-pv" },
      { heading: "Storage", body: "Batteries that turn generation into usable, timed power.", href: "/services/battery-storage" },
      { heading: "Backup", body: "Continuity when grid supply is interrupted.", href: "/services/backup-power" },
    ],
    crumbs: [
      { href: "/services", label: "Services" },
      { href: "/services/renewable-energy", label: "Renewable Energy" },
    ],
    related: [
      { href: "/services/solar-pv", label: "Solar PV Systems" },
      { href: "/services/battery-storage", label: "Battery Storage" },
      { href: "/services/off-grid", label: "Off-Grid Energy" },
    ],
    cta: ctaTalk,
  },
  solar: {
    path: "/services/solar-pv",
    metaTitle: "Solar PV Systems",
    description:
      "Helum designs and delivers solar photovoltaic systems for homes, businesses, institutions and productive-use applications.",
    eyebrow: "Solar PV",
    heroTitle: "Solar power systems",
    heroSubtitle: "Generation designed around load, roof or ground conditions, and how the customer actually uses energy.",
    image: "solarPv",
    layout: "checklist",
    intro: [
      "Solar PV is the generation layer of many Helum solutions. It is not sold as a catalogue item detached from the rest of the system.",
      "We look at energy requirements, operating conditions and the role of storage, backup and productive equipment before we propose a system.",
    ],
    sections: [
      {
        heading: "Where solar PV is applied",
        body: "Residential, commercial, institutional and productive-use sites.",
        points: [
          "Rooftop and ground-mount arrays",
          "Systems paired with battery storage",
          "Hybrid arrangements with backup power",
          "Productive loads such as pumping and processing",
        ],
      },
    ],
    crumbs: [
      { href: "/services", label: "Services" },
      { href: "/services/solar-pv", label: "Solar PV Systems" },
    ],
    related: [
      { href: "/services/battery-storage", label: "Battery Storage" },
      { href: "/solutions/homes", label: "Solutions for Homes" },
      { href: "/engineering/installation", label: "Installation & Commissioning" },
    ],
    cta: ctaTalk,
  },
  battery: {
    path: "/services/battery-storage",
    metaTitle: "Battery Energy Storage",
    description:
      "Helum delivers battery energy storage that makes electricity more reliable, accessible and productive.",
    eyebrow: "Battery storage",
    heroTitle: "Energy when it is needed",
    heroSubtitle: "Storage is how solar and grid power become useful through the evening, outages and peak demand.",
    image: "battery",
    layout: "dark-intro",
    intro: [
      "Helum's work in energy and power technology includes exploring advanced energy-storage technologies and intelligent energy systems.",
      "Battery storage is treated as part of a complete solution — sized to the customer's load, reliability need and productive use — not as a standalone product push.",
    ],
    sections: [
      { heading: "Reliability", body: "Hold power for when the grid drops or solar generation falls." },
      { heading: "Productive hours", body: "Extend energy into irrigation windows, processing shifts and evening trade." },
      { heading: "System design", body: "Match storage to PV, backup and the actual operating profile of the site." },
      { heading: "Support", body: "Storage only creates value if it is commissioned and maintained correctly.", href: "/engineering/maintenance" },
    ],
    crumbs: [
      { href: "/services", label: "Services" },
      { href: "/services/battery-storage", label: "Battery Storage" },
    ],
    related: [
      { href: "/services/solar-pv", label: "Solar PV Systems" },
      { href: "/services/backup-power", label: "Backup Power" },
      { href: "/services/energy-power-technology", label: "Energy & Power Technology" },
    ],
    cta: ctaTalk,
  },
  backup: {
    path: "/services/backup-power",
    metaTitle: "Backup Power Solutions",
    description:
      "Helum provides backup power solutions that keep homes, businesses and institutions operating when supply is interrupted.",
    eyebrow: "Backup power",
    heroTitle: "Continuity of supply",
    heroSubtitle: "Backup power is designed around the loads that cannot stop — not around a generic generator package.",
    image: "backup",
    layout: "checklist",
    intro: [
      "Unreliable electricity is one of the real-world problems Helum is built to address.",
      "Backup power solutions sit alongside solar and storage so that critical loads remain available during interruptions.",
    ],
    sections: [
      {
        heading: "Designed around critical loads",
        body: "We start with what must stay on.",
        points: [
          "Business and institutional continuity",
          "Household backup for essential circuits",
          "Pairing with solar PV and battery storage",
          "Commissioning and ongoing support",
        ],
      },
    ],
    crumbs: [
      { href: "/services", label: "Services" },
      { href: "/services/backup-power", label: "Backup Power" },
    ],
    related: [
      { href: "/solutions/businesses", label: "Solutions for Businesses" },
      { href: "/services/battery-storage", label: "Battery Storage" },
    ],
    cta: ctaTalk,
  },
  offgrid: {
    path: "/services/off-grid",
    metaTitle: "Off-Grid & Decentralized Energy",
    description:
      "Helum delivers off-grid and decentralized energy applications where grid access is limited or unreliable.",
    eyebrow: "Off-grid energy",
    heroTitle: "Energy beyond the grid",
    heroSubtitle: "Decentralized systems for sites where extension of the network is impractical or uneconomic.",
    image: "offGrid",
    layout: "split-cards",
    intro: [
      "Off-grid and decentralized energy is part of Helum's renewable energy focus.",
      "These applications are designed around local load, productive use and the reality of remote or weakly served sites.",
    ],
    sections: [
      {
        heading: "Where decentralized energy is used",
        body: "Homes, farms, rural enterprises and facilities away from reliable grid supply.",
        points: [
          "Standalone solar and storage systems",
          "Productive loads such as pumping",
          "Rural enterprise power",
          "Hybrid arrangements as the grid arrives",
        ],
      },
      { heading: "Agriculture", body: "Power for irrigation, processing and cold chain in rural settings.", href: "/solutions/agriculture" },
      { heading: "Rural enterprises", body: "Energy that supports trade and small-scale manufacturing.", href: "/solutions/smes-rural" },
      { heading: "Homes", body: "Household access where grid service is weak or absent.", href: "/solutions/homes" },
    ],
    crumbs: [
      { href: "/services", label: "Services" },
      { href: "/services/off-grid", label: "Off-Grid Energy" },
    ],
    related: [
      { href: "/services/solar-pv", label: "Solar PV Systems" },
      { href: "/solutions/smes-rural", label: "SMEs & Rural Enterprises" },
    ],
    cta: ctaTalk,
  },
  energyTech: {
    path: "/services/energy-power-technology",
    metaTitle: "Energy & Power Technology",
    description:
      "Helum identifies and brings to market technologies that make electricity more reliable, accessible and productive.",
    eyebrow: "Energy & power",
    heroTitle: "Technologies that make electricity work harder",
    heroSubtitle: "Advanced storage, intelligent energy systems and emerging solutions for Africa's energy needs.",
    image: "energyTech",
    layout: "dark-intro",
    intro: [
      "We identify and bring to market technologies that make electricity more reliable, accessible and productive.",
      "This includes exploring advanced energy-storage technologies, intelligent energy systems and emerging solutions that respond to Africa's evolving energy needs.",
    ],
    sections: [
      { heading: "Advanced energy storage", body: "Storage architectures matched to reliability and productive-use profiles.", href: "/services/battery-storage" },
      { heading: "Intelligent energy systems", body: "Systems that help customers use power more effectively, not only generate it." },
      { heading: "Power reliability", body: "Combinations of generation, storage and backup that keep critical loads available.", href: "/services/backup-power" },
      { heading: "Emerging solutions", body: "A standing brief to source technologies that can be adapted to African markets.", href: "/technology/sourcing" },
    ],
    crumbs: [
      { href: "/services", label: "Services" },
      { href: "/services/energy-power-technology", label: "Energy & Power Technology" },
    ],
    related: [
      { href: "/technology", label: "Technology at Helum" },
      { href: "/technology/sourcing", label: "Technology Sourcing" },
    ],
    cta: ctaTalk,
  },
  productive: {
    path: "/services/productive-use",
    metaTitle: "Productive-Use Technology",
    description:
      "Helum delivers productive-use technology so energy creates economic value for agriculture, water, processing, SMEs and rural enterprises.",
    eyebrow: "Productive use",
    heroTitle: "Energy that creates economic value",
    heroSubtitle: "Our ambition extends beyond simply powering homes.",
    image: "productive",
    layout: "mosaic",
    intro: [
      "Helum wants energy to create economic value — not only lighting and charging.",
      "Solutions can support agriculture, water pumping, irrigation, small-scale manufacturing, food processing, cold-chain and refrigeration, SMEs and rural enterprises.",
    ],
    sections: [
      { heading: "Agriculture", body: "Energy for production, irrigation and rural operations.", href: "/solutions/agriculture" },
      { heading: "Water pumping & irrigation", body: "Solar-powered pumping matched to water and crop needs.", href: "/solutions/water-irrigation" },
      { heading: "Food processing & cold chain", body: "Power for processing, refrigeration and reduced post-harvest loss.", href: "/solutions/food-processing" },
      { heading: "SMEs & rural enterprises", body: "Reliable energy for workshops, trade and small manufacturing.", href: "/solutions/smes-rural" },
    ],
    crumbs: [
      { href: "/services", label: "Services" },
      { href: "/services/productive-use", label: "Productive-Use Technology" },
    ],
    related: [
      { href: "/solutions/agriculture", label: "Agriculture solutions" },
      { href: "/solutions/smes-rural", label: "SME solutions" },
    ],
    cta: ctaTalk,
  },
  stratPartner: {
    path: "/services/strategic-partnerships",
    metaTitle: "Strategic Technology Partnerships",
    description:
      "Helum builds relationships with manufacturers, technology companies, investors and development partners to bring quality technologies into African markets.",
    eyebrow: "Partnerships",
    heroTitle: "Quality technology. African markets.",
    heroSubtitle: "Partnerships that create sustainable commercial opportunities.",
    image: "partnerships",
    layout: "editorial",
    intro: [
      "Helum seeks to build relationships with manufacturers, technology companies, investors and development partners locally and internationally.",
      "Through these partnerships, we aim to bring quality technologies into African markets while creating sustainable commercial opportunities.",
    ],
    sections: [
      {
        heading: "Who we work with",
        body: "Manufacturers, technology companies, investors and development partners who want their solutions adapted and deployed with local insight.",
        points: ["Manufacturer partnerships", "Technology companies", "Investors and development partners", "Market adaptation and deployment"],
      },
      {
        heading: "What partners can expect",
        body: "A Kenyan counterpart that understands customer problems, operating conditions and the work of sourcing, adapting and deploying — not only importing.",
      },
    ],
    crumbs: [
      { href: "/services", label: "Services" },
      { href: "/services/strategic-partnerships", label: "Strategic Partnerships" },
    ],
    related: [
      { href: "/partnerships", label: "Technology Partnerships" },
      { href: "/technology/partner", label: "Partner With Helum" },
      { href: "/technology/market-access", label: "Market Access" },
    ],
    cta: {
      title: "Partner with Helum",
      body: "If you manufacture, finance or develop energy and productive technologies, we would like to hear from you.",
      href: "/technology/partner",
      label: "Start a partnership conversation",
    },
  },
  solutions: {
    path: "/solutions",
    metaTitle: "Solutions",
    description:
      "Helum solutions for homes, businesses, institutions, agriculture, water and irrigation, food processing, SMEs and rural enterprises.",
    eyebrow: "Solutions",
    heroTitle: "Designed around the customer",
    heroSubtitle: "The same energy challenge looks different in a home, a factory, a farm and a school.",
    image: "businesses",
    layout: "mosaic",
    intro: [
      "Helum does not start from a product list. We start from who the customer is and what must improve: access, reliability, productivity or cost of downtime.",
    ],
    sections: [
      { heading: "Homes", body: "Reliable energy and backup for households.", href: "/solutions/homes" },
      { heading: "Businesses", body: "Reliability, efficiency and productivity for commercial operations.", href: "/solutions/businesses" },
      { heading: "Institutions", body: "Practical energy for organizations with sustained demand.", href: "/solutions/institutions" },
      { heading: "Agriculture", body: "Productive-use energy for farms and rural production.", href: "/solutions/agriculture" },
      { heading: "Water & irrigation", body: "Solar pumping and irrigation that turn energy into water where it is needed.", href: "/solutions/water-irrigation" },
      { heading: "Food processing & cold chain", body: "Power for processing and refrigeration.", href: "/solutions/food-processing" },
      { heading: "SMEs & rural enterprises", body: "Energy that keeps small businesses productive.", href: "/solutions/smes-rural" },
    ],
    crumbs: [{ href: "/solutions", label: "Solutions" }],
    related: [
      { href: "/who-we-serve", label: "Who we serve" },
      { href: "/services", label: "Services" },
    ],
    cta: ctaTalk,
  },
  homes: {
    path: "/solutions/homes",
    metaTitle: "Energy Solutions for Homes",
    description: "Reliable energy and backup solutions for households from Helum Limited.",
    eyebrow: "Homes",
    heroTitle: "Reliable energy at home",
    heroSubtitle: "Household solutions for access, backup and everyday use of solar and storage.",
    image: "homes",
    layout: "editorial",
    intro: [
      "Helum delivers reliable energy and backup solutions for households.",
      "A home system is designed around essential loads, roof or site conditions, and whether the customer needs backup, solar generation, or both.",
    ],
    sections: [
      { heading: "Typical household needs", body: "Lighting, charging, refrigeration and continuity when the grid fails — addressed with solar PV, storage and backup as the site requires.", points: ["Solar PV for daytime generation", "Battery storage for evening and outages", "Backup for essential circuits"] },
      { heading: "From survey to support", body: "We follow the same process as for commercial sites: understand, assess, design, deliver and support.", href: "/process" },
    ],
    crumbs: [
      { href: "/solutions", label: "Solutions" },
      { href: "/solutions/homes", label: "Homes" },
    ],
    related: [
      { href: "/services/solar-pv", label: "Solar PV Systems" },
      { href: "/services/backup-power", label: "Backup Power" },
    ],
    cta: ctaTalk,
  },
  businesses: {
    path: "/solutions/businesses",
    metaTitle: "Energy Solutions for Businesses",
    description: "Energy solutions designed to improve reliability, efficiency and productivity for businesses.",
    eyebrow: "Businesses",
    heroTitle: "Keep the business running",
    heroSubtitle: "Reliability, efficiency and productivity — not energy as an afterthought.",
    image: "businesses",
    layout: "dark-intro",
    intro: [
      "Helum designs energy solutions to improve reliability, efficiency and productivity for businesses.",
      "Downtime, diesel dependence and unstable supply are treated as commercial problems, then answered with generation, storage, backup and better use of power.",
    ],
    sections: [
      { heading: "Reliability", body: "Backup and storage for loads that cannot stop.", href: "/services/backup-power" },
      { heading: "Solar for operating cost", body: "PV systems sized to the actual daytime load profile.", href: "/services/solar-pv" },
      { heading: "Productive equipment", body: "Where energy should drive output, not only overhead.", href: "/services/productive-use" },
      { heading: "A solutions partner", body: "From identifying the challenge through deployment, support and upgrades.", href: "/process" },
    ],
    crumbs: [
      { href: "/solutions", label: "Solutions" },
      { href: "/solutions/businesses", label: "Businesses" },
    ],
    related: [
      { href: "/solutions/smes-rural", label: "SMEs & Rural Enterprises" },
      { href: "/contact/consultation", label: "Request a Consultation" },
    ],
    cta: ctaTalk,
  },
  institutions: {
    path: "/solutions/institutions",
    metaTitle: "Energy Solutions for Institutions",
    description: "Practical energy solutions for institutions and organizations from Helum Limited.",
    eyebrow: "Institutions",
    heroTitle: "Practical energy for institutions",
    heroSubtitle: "Sustained demand, public-facing reliability and systems that can be maintained.",
    image: "institutions",
    layout: "split-cards",
    intro: [
      "Institutions need energy that is practical, supportable and sized to sustained demand.",
      "Helum approaches institutional sites the same way it approaches any customer problem: understand the environment, assess requirements, then design a solution that can be commissioned and maintained.",
    ],
    sections: [
      {
        heading: "What institutions typically need",
        body: "Continuity, predictable operating cost and systems that facilities teams can live with.",
        points: ["Solar PV for campus or facility loads", "Storage and backup for critical services", "A documented process from design to support"],
      },
      { heading: "Process", body: "Understand, assess, design, deliver, support.", href: "/process" },
      { heading: "Installation", body: "Engineering, installation and commissioning.", href: "/engineering/installation" },
      { heading: "Maintenance", body: "Ongoing support after handover.", href: "/engineering/maintenance" },
    ],
    crumbs: [
      { href: "/solutions", label: "Solutions" },
      { href: "/solutions/institutions", label: "Institutions" },
    ],
    related: [
      { href: "/services/renewable-energy", label: "Renewable Energy" },
      { href: "/contact", label: "Contact Helum" },
    ],
    cta: ctaTalk,
  },
  agriculture: {
    path: "/solutions/agriculture",
    metaTitle: "Energy Solutions for Agriculture",
    description:
      "Productive-use energy for agriculture — irrigation, pumping, processing and rural operations — from Helum Limited.",
    eyebrow: "Agriculture",
    heroTitle: "Energy that works on the farm",
    heroSubtitle: "Productive-use technologies supporting agriculture, water, processing and rural businesses.",
    image: "agriculture",
    layout: "split-cards",
    intro: [
      "Agriculture is a core productive-use setting for Helum. Energy here is judged by water moved, crop protected and processing hours gained.",
      "We combine solar generation, pumping, storage and, where needed, processing and cold-chain power.",
    ],
    sections: [
      {
        heading: "Farm energy with a purpose",
        body: "Solutions are built around the agricultural task, not a generic solar kit.",
        points: ["Irrigation and water pumping", "Power for rural operations", "Links to processing and cold chain"],
      },
      { heading: "Water & irrigation", body: "Solar pumping matched to water source and irrigation practice.", href: "/solutions/water-irrigation" },
      { heading: "Food processing", body: "Energy for value addition after harvest.", href: "/solutions/food-processing" },
      { heading: "Rural enterprises", body: "Power for the businesses that sit around the farm.", href: "/solutions/smes-rural" },
    ],
    crumbs: [
      { href: "/solutions", label: "Solutions" },
      { href: "/solutions/agriculture", label: "Agriculture" },
    ],
    related: [
      { href: "/services/productive-use", label: "Productive-Use Technology" },
      { href: "/solutions/water-irrigation", label: "Solar Water Pumping" },
    ],
    cta: ctaTalk,
  },
  water: {
    path: "/solutions/water-irrigation",
    metaTitle: "Solar Water Pumping & Irrigation",
    description: "Solar-powered water pumping and irrigation solutions from Helum Limited.",
    eyebrow: "Water & irrigation",
    heroTitle: "Water, powered by the sun",
    heroSubtitle: "Pumping and irrigation designed around source, head, crop and available energy.",
    image: "water",
    layout: "timeline",
    intro: [
      "Water pumping and irrigation are named productive-use applications in Helum's company profile.",
      "A pumping solution is an energy solution: solar generation, the pump, controls and, where needed, storage must fit the water source and the irrigation schedule.",
    ],
    sections: [
      { heading: "Understand the water task", body: "Source, delivery point, seasonal pattern and the crop or livestock need." },
      { heading: "Match energy to pumping", body: "Size generation and, if required, storage to the hydraulic load." },
      { heading: "Deliver a maintainable system", body: "Install, commission and leave a system that can be supported.", href: "/engineering/installation" },
      { heading: "Stay for support", body: "Pumping only creates value if it runs through the season.", href: "/engineering/maintenance" },
    ],
    crumbs: [
      { href: "/solutions", label: "Solutions" },
      { href: "/solutions/water-irrigation", label: "Water & Irrigation" },
    ],
    related: [
      { href: "/solutions/agriculture", label: "Agriculture" },
      { href: "/services/solar-pv", label: "Solar PV Systems" },
    ],
    cta: ctaTalk,
  },
  food: {
    path: "/solutions/food-processing",
    metaTitle: "Food Processing & Cold Chain",
    description:
      "Energy for food processing, cold-chain and refrigeration — productive-use solutions from Helum Limited.",
    eyebrow: "Food processing",
    heroTitle: "Power for processing and cold chain",
    heroSubtitle: "Reliable electricity for value addition, refrigeration and reduced post-harvest loss.",
    image: "food",
    layout: "checklist",
    intro: [
      "Food processing, cold-chain and refrigeration are part of Helum's productive-use brief.",
      "These loads are unforgiving: an interruption is not only inconvenience, it is spoiled product. Solutions therefore emphasise reliability as much as generation.",
    ],
    sections: [
      {
        heading: "What processing sites need",
        body: "Stable power for machines, cooling and working hours.",
        points: [
          "Solar PV aligned to processing hours",
          "Storage and backup for refrigeration",
          "Design that starts from the process, not the panel count",
        ],
      },
    ],
    crumbs: [
      { href: "/solutions", label: "Solutions" },
      { href: "/solutions/food-processing", label: "Food Processing" },
    ],
    related: [
      { href: "/solutions/agriculture", label: "Agriculture" },
      { href: "/services/backup-power", label: "Backup Power" },
    ],
    cta: ctaTalk,
  },
  sme: {
    path: "/solutions/smes-rural",
    metaTitle: "Energy Solutions for SMEs & Rural Enterprises",
    description:
      "Reliable energy for SMEs and rural enterprises — workshops, trade and small-scale manufacturing.",
    eyebrow: "SMEs & rural enterprises",
    heroTitle: "Energy for enterprises that keep towns working",
    heroSubtitle: "Small and rural businesses need power that is reliable enough to plan a working day.",
    image: "sme",
    layout: "dark-intro",
    intro: [
      "SMEs and rural enterprises are named customers in Helum's productive-use work.",
      "The brief is commercial: keep machines, lighting, charging and refrigeration available so a small business can operate.",
    ],
    sections: [
      { heading: "Workshops and small manufacturing", body: "Power for tools and production hours.", href: "/services/productive-use" },
      { heading: "Trade and services", body: "Lighting, charging and backup for shops and local services.", href: "/services/backup-power" },
      { heading: "Rural settings", body: "Decentralized and off-grid options where the grid is weak.", href: "/services/off-grid" },
      { heading: "A partner, not a one-off sale", body: "Support after commissioning so the system stays useful.", href: "/engineering/maintenance" },
    ],
    crumbs: [
      { href: "/solutions", label: "Solutions" },
      { href: "/solutions/smes-rural", label: "SMEs & Rural Enterprises" },
    ],
    related: [
      { href: "/solutions/businesses", label: "Solutions for Businesses" },
      { href: "/solutions/agriculture", label: "Agriculture" },
    ],
    cta: ctaTalk,
  },
  who: {
    path: "/who-we-serve",
    metaTitle: "Who We Serve",
    description: "Helum serves homes, businesses, institutions, agriculture and rural enterprises.",
    eyebrow: "Who we serve",
    heroTitle: "Customers we design for",
    heroSubtitle: "Homes, businesses, institutions, farms and rural enterprises.",
    image: "why",
    layout: "mosaic",
    intro: [
      "Helum's solutions are organised around the people who use energy — not around a single product line.",
    ],
    sections: [
      { heading: "Homes", body: "Household energy and backup.", href: "/solutions/homes" },
      { heading: "Businesses", body: "Commercial reliability and productivity.", href: "/solutions/businesses" },
      { heading: "Institutions", body: "Practical systems for organizations.", href: "/solutions/institutions" },
      { heading: "Agriculture & rural enterprises", body: "Productive-use energy in rural economies.", href: "/solutions/agriculture" },
    ],
    crumbs: [{ href: "/who-we-serve", label: "Who we serve" }],
    related: [{ href: "/solutions", label: "All solutions" }],
    cta: ctaTalk,
  },
  technology: {
    path: "/technology",
    metaTitle: "Technology at Helum",
    description:
      "Helum identifies, sources, adapts and deploys innovative energy and productive technologies for African markets.",
    eyebrow: "Technology",
    heroTitle: "Engineering the intelligence of energy",
    heroSubtitle: "A platform for identifying, sourcing, adapting, deploying and scaling technology.",
    image: "technology",
    layout: "dark-intro",
    intro: [
      "The opportunity is not limited to selling solar panels or batteries. It is about building an integrated technology and energy platform capable of responding to changing customer and market needs.",
      "Helum's technology work covers sourcing, market access, partnerships and the practical work of deployment.",
    ],
    sections: [
      { heading: "Technology sourcing", body: "Find and evaluate technologies that can survive African operating conditions.", href: "/technology/sourcing" },
      { heading: "Market access", body: "A path into Kenyan and selected African markets with local insight.", href: "/technology/market-access" },
      { heading: "Partnerships", body: "Manufacturers, technology companies, investors and development partners.", href: "/partnerships" },
      { heading: "Investment", body: "The long-term opportunity at the convergence of energy, technology and development.", href: "/opportunity" },
    ],
    crumbs: [{ href: "/technology", label: "Technology" }],
    related: [
      { href: "/services/energy-power-technology", label: "Energy & Power Technology" },
      { href: "/technology/partner", label: "Partner With Helum" },
    ],
    cta: ctaTalk,
  },
  sourcing: {
    path: "/technology/sourcing",
    metaTitle: "Technology Sourcing",
    description:
      "Helum sources innovative technologies and adapts them to Kenyan businesses, households, institutions and farms.",
    eyebrow: "Sourcing",
    heroTitle: "Source for the market, not the catalogue",
    heroSubtitle: "We look for technologies that can be adapted to real customer problems.",
    image: "sourcing",
    layout: "timeline",
    intro: [
      "Helum's approach combines local market knowledge with access to innovative technologies.",
      "Sourcing is how that access becomes a solution: identify, evaluate against customer problems, adapt, then deploy.",
    ],
    sections: [
      { heading: "Identify", body: "Find technologies that address energy access, reliability or productive use." },
      { heading: "Evaluate", body: "Ask what value the technology creates for a Kenyan customer in real conditions." },
      { heading: "Adapt", body: "Fit the technology to local operating environments and support requirements." },
      { heading: "Deploy", body: "Bring it to market through Helum's delivery and partnership model.", href: "/technology/market-access" },
    ],
    crumbs: [
      { href: "/technology", label: "Technology" },
      { href: "/technology/sourcing", label: "Technology Sourcing" },
    ],
    related: [
      { href: "/partnerships", label: "Technology Partnerships" },
      { href: "/services/energy-power-technology", label: "Energy & Power Technology" },
    ],
    cta: ctaTalk,
  },
  market: {
    path: "/technology/market-access",
    metaTitle: "African Market Access",
    description:
      "Helum provides a bridge between innovative technology providers and African markets, starting in Kenya.",
    eyebrow: "Market access",
    heroTitle: "A bridge into African markets",
    heroSubtitle: "Kenyan market intelligence plus international technology relationships.",
    image: "nairobi",
    layout: "checklist",
    intro: [
      "Helum's strategy is to combine Kenyan market intelligence with international technology and manufacturing relationships, creating a bridge between innovative technology providers and African markets.",
      "Market access, for us, means more than an import channel. It means a counterpart who understands customers, can adapt technology and can support deployment.",
    ],
    sections: [
      {
        heading: "What market access includes",
        body: "A Kenyan foundation with a longer African horizon.",
        points: [
          "Understanding of local customer problems",
          "Adaptation of technology to operating conditions",
          "Deployment, installation and support",
          "A path to selected African markets over time",
        ],
      },
    ],
    crumbs: [
      { href: "/technology", label: "Technology" },
      { href: "/technology/market-access", label: "Market Access" },
    ],
    related: [
      { href: "/technology/partner", label: "Partner With Helum" },
      { href: "/opportunity", label: "Investment Opportunities" },
    ],
    cta: {
      title: "Bring a technology to market",
      body: "Manufacturers and technology companies can start a conversation about Kenyan and African deployment.",
      href: "/technology/partner",
      label: "Partner With Helum",
    },
  },
  partnerships: {
    path: "/partnerships",
    metaTitle: "Technology Partnerships",
    description:
      "Helum works with manufacturers, technology companies, investors and development partners locally and internationally.",
    eyebrow: "Partnerships",
    heroTitle: "Technology. Partnership. Scale.",
    heroSubtitle: "Relationships that bring quality technologies into African markets.",
    image: "partnerships",
    layout: "editorial",
    intro: [
      "Helum works with manufacturers, technology companies, investors and development partners locally and internationally to identify, adapt and deploy technologies suited to African markets.",
      "Partnership is one of our core values: great businesses are built through strong relationships.",
    ],
    sections: [
      {
        heading: "The partnership we offer",
        body: "A Kenyan company that can interpret the market, source and adapt technology, and stay with customers after installation.",
      },
      {
        heading: "Who should talk to us",
        body: "Manufacturers of solar, storage and productive-use equipment; technology companies with intelligent energy systems; investors and development partners focused on energy and productivity.",
      },
    ],
    crumbs: [
      { href: "/technology", label: "Technology" },
      { href: "/partnerships", label: "Technology Partnerships" },
    ],
    related: [
      { href: "/services/strategic-partnerships", label: "Strategic Partnerships" },
      { href: "/technology/partner", label: "Partner With Helum" },
    ],
    cta: {
      title: "Start a partnership conversation",
      body: "Tell us about the technology you want to bring into African markets.",
      href: "/technology/partner",
      label: "Partner With Helum",
    },
  },
  opportunity: {
    path: "/opportunity",
    metaTitle: "Investment & Growth Opportunities",
    description:
      "Helum Limited is designed to participate in the convergence of energy, technology and economic development in Africa.",
    eyebrow: "Investment & growth",
    heroTitle: "Reliable energy. Smart technology. Real economic impact.",
    heroSubtitle: "Building a company that can identify, source, adapt, deploy and scale innovative technologies.",
    image: "opportunity",
    layout: "dark-intro",
    intro: [
      "Helum Limited is designed to participate in one of Africa's important growth opportunities: the convergence of energy, technology and economic development.",
      "Our long-term opportunity lies in building a company capable of identifying, sourcing, adapting, deploying and scaling innovative technologies for African markets.",
    ],
    sections: [
      { heading: "Not only panels and batteries", body: "The opportunity is an integrated technology and energy platform." },
      { heading: "Kenyan foundation", body: "Establish strength at home, then expand into selected African markets." },
      { heading: "Customer value as the test", body: "Growth is tied to solutions that work in real operating conditions." },
      { heading: "Talk to Helum", body: "Investors and development partners can begin a conversation.", href: "/technology/partner" },
    ],
    crumbs: [
      { href: "/technology", label: "Technology" },
      { href: "/opportunity", label: "Investment Opportunities" },
    ],
    related: [
      { href: "/about/story", label: "Our Story" },
      { href: "/partnerships", label: "Partnerships" },
    ],
    cta: {
      title: "Discuss the Helum platform",
      body: "If you are an investor or development partner, we would like to hear from you.",
      href: "/contact",
      label: "Contact Helum",
    },
  },
  partner: {
    path: "/technology/partner",
    metaTitle: "Partner With Helum",
    description:
      "Partner with Helum Limited to bring quality energy and productive technologies into African markets.",
    eyebrow: "Partner with Helum",
    heroTitle: "Build the market with us",
    heroSubtitle: "Manufacturers, technology companies, investors and development partners.",
    image: "partnerships",
    layout: "form",
    intro: [
      "If you manufacture, finance or develop energy, storage or productive-use technologies, Helum can be your Kenyan counterpart.",
      "Tell us what you offer and the customer problem it solves. We will follow up from Nairobi.",
    ],
    sections: [],
    crumbs: [
      { href: "/technology", label: "Technology" },
      { href: "/technology/partner", label: "Partner With Helum" },
    ],
    related: [
      { href: "/partnerships", label: "Technology Partnerships" },
      { href: "/technology/market-access", label: "Market Access" },
    ],
  },
  process: {
    path: "/process",
    metaTitle: "Our Process",
    description:
      "Helum works from challenge to solution: understand, assess, design, deliver and support.",
    eyebrow: "Our process",
    heroTitle: "From challenge to solution",
    heroSubtitle: "A structured path from the customer's problem to a maintainable system.",
    image: "process",
    layout: "timeline",
    intro: [
      "We begin with the customer's challenge and work through a structured process to deliver practical, reliable and scalable solutions.",
    ],
    sections: [
      { heading: "Understand", body: "Understand the customer's needs, environment and challenges." },
      { heading: "Assess", body: "Assess energy requirements, operating conditions and opportunities for improvement." },
      { heading: "Design", body: "Develop a technology and energy solution suited to the customer's requirements." },
      { heading: "Deliver", body: "Source, supply, install, commission and implement the solution." },
      { heading: "Support", body: "Provide maintenance, support and long-term solution optimization." },
    ],
    crumbs: [{ href: "/process", label: "Our Process" }],
    related: [
      { href: "/engineering/installation", label: "Engineering & Installation" },
      { href: "/engineering/maintenance", label: "Maintenance & Support" },
    ],
    cta: ctaTalk,
  },
  install: {
    path: "/engineering/installation",
    metaTitle: "Engineering, Installation & Commissioning",
    description:
      "Helum sources, supplies, installs, commissions and implements solar PV systems and related energy technologies.",
    eyebrow: "Engineering",
    heroTitle: "Installation and commissioning",
    heroSubtitle: "Delivery is where a design becomes a working system.",
    image: "install",
    layout: "split-cards",
    intro: [
      "Helum's work includes the design, supply, installation, commissioning and maintenance of solar photovoltaic systems and related energy technologies.",
      "Engineering and commissioning are how we protect customer value after the sale.",
    ],
    sections: [
      {
        heading: "What delivery includes",
        body: "The fourth step in our process: source, supply, install, commission and implement.",
        points: ["Site-aware installation", "Commissioning against the agreed design", "Handover into maintenance and support"],
      },
      { heading: "Process", body: "Delivery sits after understand, assess and design.", href: "/process" },
      { heading: "Maintenance", body: "Support after commissioning.", href: "/engineering/maintenance" },
      { heading: "Consultation", body: "Start with the site and the load.", href: "/contact/consultation" },
    ],
    crumbs: [
      { href: "/process", label: "Process" },
      { href: "/engineering/installation", label: "Installation" },
    ],
    related: [
      { href: "/process", label: "Our Process" },
      { href: "/engineering/maintenance", label: "Maintenance & Support" },
    ],
    cta: ctaTalk,
  },
  maintenance: {
    path: "/engineering/maintenance",
    metaTitle: "Maintenance & Support",
    description:
      "Helum provides maintenance, support and long-term optimization of energy and technology solutions.",
    eyebrow: "Maintenance",
    heroTitle: "Support after commissioning",
    heroSubtitle: "A solution only creates value if it keeps working.",
    image: "maintenance",
    layout: "checklist",
    intro: [
      "The fifth step in Helum's process is support: maintenance, support and long-term solution optimization.",
      "This is how we honour the ambition to be a solutions partner rather than a transactional supplier.",
    ],
    sections: [
      {
        heading: "What support covers",
        body: "Keeping systems useful as loads and conditions change.",
        points: [
          "Maintenance of installed systems",
          "Support when operating conditions change",
          "Future upgrades as needs grow",
        ],
      },
    ],
    crumbs: [
      { href: "/process", label: "Process" },
      { href: "/engineering/maintenance", label: "Maintenance" },
    ],
    related: [
      { href: "/engineering/installation", label: "Installation & Commissioning" },
      { href: "/contact", label: "Contact Helum" },
    ],
    cta: ctaTalk,
  },
  contact: {
    path: "/contact",
    metaTitle: "Contact Helum",
    description:
      "Contact Helum Limited in Nairobi — phone 0710125685, email helumlimited@gmail.com, Darosa Plaza, Karen Road.",
    eyebrow: "Contact",
    heroTitle: "Talk to Helum",
    heroSubtitle: "Nairobi-based. Ready to discuss energy, technology and productive solutions.",
    image: "contact",
    layout: "form",
    intro: [
      "Let's discuss how Helum can help you solve energy and technology challenges with practical, reliable and scalable solutions.",
      "Use the form, call, or email. For a structured site discussion, request a consultation.",
    ],
    sections: [],
    crumbs: [{ href: "/contact", label: "Contact Us" }],
    related: [
      { href: "/contact/consultation", label: "Request a Consultation" },
      { href: "/faq", label: "FAQs" },
    ],
  },
  consultation: {
    path: "/contact/consultation",
    metaTitle: "Request a Consultation",
    description:
      "Request a Helum consultation — tell us about your site, energy challenge and the outcome you need.",
    eyebrow: "Consultation",
    heroTitle: "Request a consultation",
    heroSubtitle: "Share the challenge. We will follow the Helum process from there.",
    image: "approach",
    layout: "form",
    intro: [
      "A consultation starts with understand and assess: who you are, what must stay powered, and the conditions on site.",
      "There is no obligation attached to an enquiry. We use it to decide whether we can design a useful solution.",
    ],
    sections: [],
    crumbs: [
      { href: "/contact", label: "Contact" },
      { href: "/contact/consultation", label: "Consultation" },
    ],
    related: [
      { href: "/process", label: "Our Process" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  faq: {
    path: "/faq",
    metaTitle: "Frequently Asked Questions",
    description:
      "Questions about Helum Limited — who we are, what we deliver, how we work, and how to get in touch.",
    eyebrow: "FAQs",
    heroTitle: "Questions we are asked",
    heroSubtitle: "Straight answers from the Helum company profile.",
    image: "faq",
    layout: "faq",
    intro: [
      "If your question is not listed, contact Helum in Nairobi. We will answer from the same facts we publish here — we do not invent certifications, clients or figures.",
    ],
    sections: [],
    faqs: [
      {
        q: "What does Helum Limited do?",
        a: "Helum is a Kenyan technology and renewable-energy company focused on developing, sourcing and delivering innovative solutions that address real-world energy and productivity challenges.",
      },
      {
        q: "Where is Helum based?",
        a: "P.O. Box 1017-00502, Darosa Plaza, Karen Road, Nairobi, Kenya.",
      },
      {
        q: "What services do you offer?",
        a: "Renewable energy solutions, energy and power technology, productive-use technology, and strategic technology partnerships — including solar PV, storage, backup, off-grid systems and productive equipment.",
      },
      {
        q: "Do you only sell solar panels?",
        a: "No. The opportunity Helum is building is not limited to selling solar panels or batteries. We design around the customer's problem and can include storage, backup, productive-use equipment and long-term support.",
      },
      {
        q: "Who do you serve?",
        a: "Homes, businesses, institutions, agriculture, SMEs and rural enterprises.",
      },
      {
        q: "How do you work?",
        a: "Understand, assess, design, deliver, support.",
      },
      {
        q: "Can manufacturers partner with Helum?",
        a: "Yes. Helum seeks relationships with manufacturers, technology companies, investors and development partners locally and internationally.",
      },
      {
        q: "How do I start?",
        a: "Call 0710125685, email helumlimited@gmail.com, or use the contact or consultation form.",
      },
    ],
    crumbs: [
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQs" },
    ],
    related: [
      { href: "/contact", label: "Contact Us" },
      { href: "/contact/consultation", label: "Request a Consultation" },
    ],
    cta: ctaTalk,
  },
};

export function specByPath(path: string): PageSpec | undefined {
  return Object.values(pages).find((p) => p.path === path);
}
