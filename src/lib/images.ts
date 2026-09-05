/**
 * Centralized image configuration.
 * Replace Unsplash URLs with Helum Cloudinary (or other CDN) assets when ready.
 */
export const images = {
  hero: {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80",
    alt: "Solar panel array under clear sky with modern energy infrastructure",
  },
  about: {
    src: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",
    alt: "Engineers installing solar panels on a commercial rooftop",
  },
  serviceRenewable: {
    src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80",
    alt: "Solar PV system installation",
  },
  serviceEnergyTech: {
    src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80",
    alt: "Advanced battery energy storage system",
  },
  serviceProductive: {
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80",
    alt: "Solar-powered irrigation and agricultural equipment",
  },
  servicePartnerships: {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    alt: "Business professionals collaborating on technology partnerships",
  },
  marketHomes: {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
    alt: "Modern residential home with solar potential",
  },
  marketBusinesses: {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    alt: "Commercial business district and office buildings",
  },
  marketInstitutions: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    alt: "Institutional and organizational buildings",
  },
  marketAgriculture: {
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80",
    alt: "Agricultural fields and rural enterprise",
  },
  proposition: {
    src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1920&q=80",
    alt: "Modern renewable energy infrastructure under open sky",
  },
} as const;
