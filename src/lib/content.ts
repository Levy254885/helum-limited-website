/** Authoritative content from Helum Limited Company Profile & Letterhead */

export const company = {
  name: "HELUM LIMITED",
  tagline: "Technology. Energy. Possibility.",
  secondary: "Engineering the Intelligence of Energy",
  phone: "0710125685",
  phoneHref: "tel:+254710125685",
  email: "helumlimited@gmail.com",
  address: {
    line1: "P.O. Box 1017-00502",
    line2: "Darosa Plaza, Karen Road",
    city: "Nairobi, Kenya",
  },
  footerNote:
    "Design, supply, installation, commissioning and maintenance of solar PV systems and related energy technologies.",
};

export const about = {
  lead:
    "Helum Limited is a Kenyan company that develops, sources and delivers technology and renewable energy solutions for homes, businesses, institutions and farms.",
  belief:
    "Africa's future will be shaped by companies that link technology, reliable power and real commercial value. Helum is built to be one of those companies.",
  approach:
    "We combine knowledge of the Kenyan market with international technology partners so solutions fit local conditions: grid quality, load profiles, climate and cost.",
  beyond:
    "We do not only sell equipment. We design around the problem: power that stays on, water that can be pumped, and systems that pay for themselves through use.",
};

export const vision =
  "To be a leading African technology and energy company, changing how people and businesses get and use reliable power.";

export const mission =
  "To connect technology, reliable energy and opportunity into practical solutions that improve lives, strengthen businesses and support lasting development.";

export const services = [
  {
    slug: "renewable-energy",
    num: "01",
    title: "Renewable Energy Solutions",
    short:
      "Solar power, battery storage and backup systems for homes, businesses, institutions and farms.",
    body: "Helum designs and delivers solar and related clean energy systems for residential, commercial, institutional and farm use. This includes solar PV, battery storage, backup power, solar powered equipment, and systems for sites with weak or no grid.",
    points: [
      "Solar power systems",
      "Battery energy storage",
      "Backup power solutions",
      "Solar powered productive equipment",
      "Business and institutional energy systems",
      "Off grid and decentralized applications",
    ],
  },
  {
    slug: "energy-power-technology",
    num: "02",
    title: "Energy & Power Technology",
    short: "Technologies that make electricity more reliable, accessible and useful.",
    body: "We bring to market technologies that improve how power is stored, managed and used. That includes advanced storage, smarter energy systems and solutions suited to African grid and off grid conditions.",
    points: [
      "Advanced energy storage",
      "Intelligent energy systems",
      "Power reliability solutions",
      "Emerging African energy technologies",
    ],
  },
  {
    slug: "productive-use",
    num: "03",
    title: "Productive Use Technology",
    short: "Energy that creates value in agriculture, processing, SMEs and rural enterprise.",
    body: "Power should do more than light a room. Our work supports irrigation, water pumping, small manufacturing, food processing, cold chain, refrigeration and rural businesses that need reliable energy to earn.",
    points: [
      "Agriculture and irrigation",
      "Water pumping",
      "Small scale manufacturing",
      "Food processing",
      "Cold chain and refrigeration",
      "SMEs and rural enterprises",
    ],
  },
  {
    slug: "strategic-partnerships",
    num: "04",
    title: "Strategic Technology Partnerships",
    short: "Relationships with manufacturers, technology companies, investors and development partners.",
    body: "Helum works with manufacturers, technology firms, investors and development partners in Kenya and abroad. Through these relationships we bring quality equipment into African markets and build lasting commercial routes.",
    points: [
      "Manufacturer partnerships",
      "Technology companies",
      "Investors and development partners",
      "Market adaptation and deployment",
    ],
  },
] as const;

export const whyHelum = [
  {
    title: "We understand the African market",
    body: "Technology only matters when it solves a real problem. Helum starts with local needs and adapts solutions to how power is actually used here.",
  },
  {
    title: "Technology with a commercial purpose",
    body: "We do not chase technology for its own sake. Every solution must answer a simple question: what value does this create for the customer?",
  },
  {
    title: "Local insight and global technology",
    body: "We pair Kenyan market knowledge with international manufacturing and technology partners, so good equipment reaches the right sites.",
  },
  {
    title: "Beyond selling products",
    body: "We aim to be a solutions partner: from defining the problem through design, supply, installation and ongoing support.",
  },
  {
    title: "Built for scale",
    body: "Helum is building a strong base in Kenya first, with a clear path to selected African markets over time.",
  },
] as const;

export const values = [
  { num: "01", title: "Innovation", body: "We keep looking for better ways to solve energy and productivity problems." },
  { num: "02", title: "Integrity", body: "Sustainable businesses are built on trust and accountability." },
  { num: "03", title: "Customer value", body: "We measure success by the value our solutions create for the customer." },
  { num: "04", title: "Partnership", body: "Strong relationships with customers, suppliers and partners sit at the centre of our work." },
  { num: "05", title: "Excellence", body: "We pursue quality in technology, delivery and customer experience." },
  { num: "06", title: "Impact", body: "Commercial success should go together with positive social and economic outcomes." },
] as const;

export const processSteps = [
  { num: "01", title: "Understand", body: "Understand the customer's needs, site and constraints." },
  { num: "02", title: "Assess", body: "Assess energy demand, operating conditions and where improvement is possible." },
  { num: "03", title: "Design", body: "Design a technology and energy solution that fits the requirement." },
  { num: "04", title: "Deliver", body: "Source, supply, install and commission the system." },
  { num: "05", title: "Support", body: "Provide maintenance, support and ongoing optimisation." },
] as const;

export const markets = [
  { slug: "homes", title: "Homes", body: "Reliable energy and backup for households." },
  { slug: "businesses", title: "Businesses", body: "Energy systems that improve reliability, efficiency and output." },
  { slug: "institutions", title: "Institutions", body: "Practical energy solutions for schools, clinics and organisations." },
  { slug: "agriculture", title: "Agriculture & Rural Enterprises", body: "Power for irrigation, water, processing and rural businesses." },
] as const;

export const investment = {
  intro:
    "Helum is built around one of Africa's clearest growth areas: the meeting of energy, technology and economic development.",
  opportunity:
    "Our opportunity is to build a company that can identify, source, adapt and deploy useful technologies for African markets at scale.",
  platform:
    "This is not only about selling solar panels or batteries. It is about a platform that can respond as customer and market needs change.",
  ambitionTitle: "Reliable Energy. Smart Technology. Real Economic Impact.",
  ambition:
    "We want Helum to be known across Africa for practical technology and energy solutions: powering a home, running a farm, supporting an SME, or helping an institution cut energy risk. Technology should work harder for people and businesses.",
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/why-helum", label: "Why Helum" },
  { href: "/process", label: "Process" },
  { href: "/opportunity", label: "Opportunity" },
  { href: "/contact", label: "Contact" },
] as const;
