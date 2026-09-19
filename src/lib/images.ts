/** Helum-owned product and site photography in /public/photos */
const p = (file: string) => `/photos/${file}`;

export const images = {
  hero: {
    src: p("school-solar.jpg"),
    alt: "Solar photovoltaic array on an institutional building in Kenya",
  },
  about: {
    src: p("rooftop-install.jpg"),
    alt: "Helum team installing solar panels on a residential rooftop",
  },
  vision: {
    src: p("school-solar.jpg"),
    alt: "Solar-powered institution under East African sky",
  },
  values: {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
    alt: "Professional handshake representing partnership and integrity",
  },
  why: {
    src: p("battery-room.jpg"),
    alt: "Installed inverter and lithium battery bank at a Kenyan site",
  },
  approach: {
    src: p("ess-cabinet.jpg"),
    alt: "Integrated energy storage cabinet specified as a complete system",
  },
  story: {
    src: p("farm-solar.jpg"),
    alt: "Ground-mount solar array serving a Kenyan farm and homestead",
  },
  renewable: {
    src: p("panel-array.jpg"),
    alt: "Solar photovoltaic modules installed in rows",
  },
  solarPv: {
    src: p("panel-array.jpg"),
    alt: "Close view of a solar PV array",
  },
  battery: {
    src: p("battery-room.jpg"),
    alt: "Wall of lithium battery modules with hybrid inverters",
  },
  backup: {
    src: p("battery-cabinet.jpg"),
    alt: "All-in-one inverter and battery cabinet for backup power",
  },
  offGrid: {
    src: p("street-light.jpg"),
    alt: "Solar street lighting for off-grid and public spaces",
  },
  energyTech: {
    src: p("ess-cabinet.jpg"),
    alt: "Commercial energy storage cabinet with battery modules",
  },
  inverter: {
    src: p("inverter-wall.jpg"),
    alt: "Hybrid solar inverter installed on site",
  },
  lithium: {
    src: p("wall-battery.jpg"),
    alt: "Wall-mounted lithium battery energy storage unit",
  },
  powerStation: {
    src: p("power-station-front.jpg"),
    alt: "Portable solar power station with AC outlets",
  },
  powerStationSide: {
    src: p("power-station-side.jpg"),
    alt: "Portable power station showing DC input and carry handle",
  },
  waterHeater: {
    src: p("water-heater.jpg"),
    alt: "Evacuated-tube solar water heater",
  },
  productive: {
    src: p("farm-solar.jpg"),
    alt: "Solar array over a productive farm plot",
  },
  partnerships: {
    src: p("factory.jpg"),
    alt: "Power-station assembly and partner manufacturing",
  },
  homes: {
    src: p("rooftop-install.jpg"),
    alt: "Residential rooftop solar installation in Kenya",
  },
  businesses: {
    src: p("ess-cabinet.jpg"),
    alt: "Commercial battery energy storage system",
  },
  institutions: {
    src: p("school-solar.jpg"),
    alt: "Institutional building with a rooftop solar array",
  },
  agriculture: {
    src: p("farm-solar.jpg"),
    alt: "Agricultural solar installation over crops",
  },
  water: {
    src: p("pump-install.jpg"),
    alt: "Solar water-pumping installation at a Kenyan borehole",
  },
  food: {
    src: p("farm-solar.jpg"),
    alt: "Farm energy supporting food production",
  },
  sme: {
    src: p("battery-room.jpg"),
    alt: "Backup power and storage for a working site",
  },
  rural: {
    src: p("street-light.jpg"),
    alt: "Solar street light serving a rural community",
  },
  sourcing: {
    src: p("factory.jpg"),
    alt: "Technology sourcing and power-station production",
  },
  market: {
    src: p("school-solar.jpg"),
    alt: "Deployed solar serving a Kenyan institution",
  },
  opportunity: {
    src: p("panel-array.jpg"),
    alt: "Solar generation infrastructure",
  },
  process: {
    src: p("rooftop-install.jpg"),
    alt: "Installation team working on a solar rooftop",
  },
  install: {
    src: p("pump-install.jpg"),
    alt: "Technicians commissioning a solar pumping system",
  },
  maintenance: {
    src: p("battery-room.jpg"),
    alt: "Installed inverters and batteries ready for ongoing support",
  },
  contact: {
    src: p("rooftop-install.jpg"),
    alt: "Helum field work — talk to the team about a site",
  },
  faq: {
    src: p("inverter-wall.jpg"),
    alt: "Installed hybrid inverter",
  },
  technology: {
    src: p("ess-cabinet.jpg"),
    alt: "Integrated energy-storage technology",
  },
  students: {
    src: p("school-solar.jpg"),
    alt: "School building powered with rooftop solar",
  },
  studyLight: {
    src: p("street-light.jpg"),
    alt: "Solar lighting for public and community spaces",
  },
  homeLight: {
    src: p("rooftop-install.jpg"),
    alt: "Home solar installation for reliable household power",
  },
  nairobi: {
    src: "https://images.unsplash.com/photo-1611348522141-347294daac38?auto=format&fit=crop&w=1600&q=80",
    alt: "Nairobi at dusk, Helum's Kenyan market base",
  },
  batteryHuayite: {
    src: p("battery-huayite.jpg"),
    alt: "Floor-standing pure sine-wave inverter and charger",
  },
  serviceRenewable: {
    src: p("panel-array.jpg"),
    alt: "Solar PV system installation",
  },
  serviceEnergyTech: {
    src: p("ess-cabinet.jpg"),
    alt: "Advanced energy storage infrastructure",
  },
  serviceProductive: {
    src: p("farm-solar.jpg"),
    alt: "Agriculture and productive-use solar applications",
  },
  servicePartnerships: {
    src: p("factory.jpg"),
    alt: "Technology partnerships and product supply",
  },
} as const;

export type ImageKey = keyof typeof images;
