// English dictionary for the main TradeIt landing page.
// Structure mirrors the sections in src/routes/index.tsx.
// Do not translate here — this file is the English source.

export const mainEn = {
  nav: {
    features: "Features",
    useCases: "Use Cases",
    pricing: "Pricing",
    data: "Data",
    customers: "Customers",
    loginSignup: "Login / Sign Up",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  brand: {
    name: "TradeIt",
    logoAlt: "TradeIt",
  },

  hero: {
    badge: "Trade data updating in real time",
    headline: "Find your target buyers",
    subcopyLine1: "Search billions of shipment records to discover",
    subcopyLine2: "companies already importing products like yours.",
    searchTypes: {
      productItem: "Product & Item",
      hsCode: "HS Code",
      importer: "Importer",
      exporter: "Exporter",
    },
    placeholders: {
      productItem: "Enter a product name to find real buyers.",
      hsCode: "Enter HS Code to find precise trade records.",
      importer: "Enter a company name to view import history.",
      exporter:
        "Enter an exporter or competitor name to analyze shipment records.",
    },
    searchButton: "Search",
    keywordsRow1: [
      "smartphone", "computer", "led tv", "air conditioner", "electronic circuit",
      "usb cable", "sound processor", "printed circuit board", "resistor",
      "cnc machine", "molding machine", "excavator", "industrial robot",
      "packaging machine", "electric vehicle", "door latch", "padlock", "switch fuse",
      "sulfuric acid", "ethylene oxide", "solvent", "plastic resin",
      "polypropylene resin", "acrylic polymer", "Polyethylene resin", "Butyl rubber",
      "Nitrile rubber", "Steel Coil", "Galvanized steel", "Stainless pipe",
      "Steel Pipe", "Cold rolled steel", "iron ore", "ferrous steel",
      "copper cathode", "aluminum ingot", "nickel ore", "cotton yarn",
      "polyester yarn", "cotton fabric", "denim fabric", "knit fabric",
      "t-shirt", "denim jeans", "sportswear", "dress shirt", "sweater",
      "running shoes", "canvas sneakers", "leather shoes", "casual shoes",
    ],
    keywordsRow2: [
      "refrigerator", "washing machine", "microwave oven", "vaccum cleaner",
      "office chair", "dining table", "sofa set", "bed frame", "kitchen cabinet",
      "kitchenware", "household cleaning tools", "toilet paper", "garbage bags",
      "tableware set", "soybean", "corn grain", "wheat", "coffee beans",
      "frozen shrimp", "soybean meal", "gluten feed", "feed premix",
      "frozen chicken", "pork belly", "corrugated cardboard box",
      "plastic packaging film", "PET preform", "FIBC", "adhesive label",
      "wooden pallet", "plastic pallet", "steel drum", "aluminum can",
      "metal container", "Pharmaceutical tablets", "injectable solution",
      "antibiotics", "vitamin", "medical devices", "syringe", "surgical mask",
      "diagnostic test", "patient monitor", "ultrasound system", "solar panel",
      "power transformer", "diesel generator", "wind turbine",
      "energy storage system", "hydraulic excavator", "wheel loader",
      "tower crane", "concrete pump truck", "industrial truck forklift",
      "skincare", "facial cleanser", "body lotion", "shampoo", "sunscreen",
      "sheet mask", "lipstick", "eye shadow palette",
    ],
    floatingCards: {
      tradeValue: { label: "Total Trade Value", value: "$78.6B", trend: "18.4%" },
      shipments: { label: "Total Shipments", value: "256,430", trend: "12.7%" },
      weight: { label: "Total Weight", value: "4.8M tons", trend: "9.6%" },
    },
  },

  problems: {
    eyebrow: "PROBLEMS",
    headline: "Finding real buyers shouldn't take months",
    body:
      "Most export teams still rely on Google searches, exhibitions, outdated directories, and guesswork to find overseas buyers. TradeIt helps you start from real shipment data instead.",
    items: [
      {
        title: "Buyer search takes too long",
        body:
          "Export teams spend too much time searching across Google, directories, and exhibition lists.",
      },
      {
        title: "Buyer quality is unclear",
        body:
          "A company may look relevant, but you don't know if they actually buy products like yours.",
      },
      {
        title: "Static lists go outdated fast",
        body:
          "Traditional buyer lists quickly become outdated and often miss recent trade activity.",
      },
      {
        title: "Purchase signals are hard to see",
        body:
          "Without shipment data, it's difficult to know who is actively importing and from where.",
      },
      {
        title: "Sales teams start from guesswork",
        body:
          "Without real trade records, outreach often begins with assumptions instead of evidence.",
      },
    ],
  },

  workflow: {
    eyebrow: "One connected workspace",
    headline: "From trade data to buyer outreach in one workflow",
    body:
      "TradeIt connects buyer discovery, company enrichment, AI analysis, CRM and email outreach in one connected workspace.",
    steps: [
      {
        tab: "Trade Data",
        label: "STEP 1 — TRADE DATA",
        headline: "Find real buyers through shipment data",
        body:
          "Search products, HS codes, or company names to discover real importers and exporters through global shipment data.",
        bullets: [
          "Search by product, HS code, or company name",
          "Discover active importers and exporters",
          "Review shipment history and trade activity",
        ],
        imageAlt: "TradeIt B/L Trade Data Search interface showing shipment records",
      },
      {
        tab: "Enrich",
        label: "STEP 2 — ENRICH",
        headline: "Turn company names into buyer profiles",
        body:
          "Enrich buyer records with company websites, business details, and available decision-maker contact information.",
        bullets: [
          "Add company website and basic business details",
          "Find available contact information",
          "Build more complete buyer profiles",
        ],
        imageAlt: "TradeIt Buyer Enrichment interface showing company overview and contacts",
      },
      {
        tab: "AI Analysis",
        label: "STEP 3 — AI ANALYSIS",
        headline: "Understand which buyers are worth your time",
        body:
          "Use AI to analyze buyer relevance, market potential, shipment history, and fit before starting outreach.",
        bullets: [
          "Analyze buyer fit and sales potential",
          "Review trade activity and sourcing patterns",
          "Prioritize buyers with stronger signals",
        ],
        imageAlt: "TradeIt AI Buyer Analysis interface showing buyer insights",
      },
      {
        tab: "CRM",
        label: "STEP 4 — CRM",
        headline: "Manage buyers in one sales workspace",
        body:
          "Save buyers, organize lists, track stages, write notes, and manage follow-up activities inside Sales Note CRM.",
        bullets: [
          "Save qualified buyers into Sales Note CRM",
          "Track sales stages and follow-up tasks",
          "Keep buyer notes and communication history organized",
        ],
        imageAlt: "TradeIt CRM interface showing sales pipeline with buyers on a world map",
      },
      {
        tab: "Outreach",
        label: "STEP 5 — OUTREACH",
        headline: "Reach the right buyers with better context",
        body:
          "Create personalized outreach using buyer context and manage email communication from one connected workflow.",
        bullets: [
          "Create personalized outreach messages",
          "Use buyer context from trade data and enrichment",
          "Track email activity and follow-ups",
        ],
        imageAlt: "TradeIt Compose Email interface showing buyer and contact selection",
      },
    ],
  },

  aiFeatures: {
    eyebrow: "TradeIt AI",
    headline: "Turn AI buyer analysis into actionable sales decisions",
    body:
      "From filling buyer information to market analysis and buyer fit evaluation, TradeIt AI helps you understand which buyers are worth your time.",
    cards: [
      {
        title: "AI Fill",
        body:
          "Fill missing buyer company information in real time, including website, address, products, phone number, official email, and headquarters.",
      },
      {
        title: "AI CORE",
        body:
          "Analyze your company, product, and target market to identify key product keywords, HS codes, competitors, and market opportunities.",
      },
      {
        title: "AI Buyer Fit",
        body:
          "Evaluate buyer relevance, product overlap, proposal potential, and outreach angles before starting sales conversations.",
      },
    ],
  },

  useCases: {
    eyebrow: "Use Cases",
    headlineLine1: "Built for teams",
    headlineLine2: "that sell across borders",
    items: [
      {
        title: "Export Teams",
        subtext:
          "Find verified overseas buyers and build stronger prospect lists with real import data.",
        bullets: [
          "Build buyer lists from real import activity",
          "Prioritize prospects with stronger sales potential",
        ],
      },
      {
        title: "Manufacturers",
        subtext:
          "Discover overseas demand and identify importers already buying products like yours.",
        bullets: [
          "Find new overseas markets for your products",
          "Discover importers before investing in exhibitions",
        ],
      },
      {
        title: "Trading Companies",
        subtext:
          "Track buyers, suppliers, and competitors to uncover new trade opportunities.",
        bullets: [
          "See who buys, sells, and supplies",
          "Monitor competitors and supplier relationships",
        ],
      },
      {
        title: "Agencies & Consultants",
        subtext:
          "Support clients with data-backed market research, buyer discovery, and outreach planning.",
        bullets: [
          "Deliver better export research for clients",
          "Support buyer discovery with real trade data",
        ],
      },
      {
        title: "Sourcing Teams",
        subtext:
          "Discover verified suppliers and sourcing markets using real shipment data.",
        bullets: [
          "Find suppliers with proven export activity",
          "Compare sourcing routes and supplier relationships",
        ],
      },
      {
        title: "Logistics",
        subtext:
          "Uncover logistics opportunities by tracking shipment flows and recurring trade activity.",
        bullets: [
          "Identify companies with active shipment volume",
          "Analyze trade routes, ports, and market movement",
        ],
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    headlinePart1: "Stop searching.",
    headlinePart2: "Start selling.",
    subcopy: "No more Googling. Just subscribe and start reaching out.",
    iconAltSuffix: "icon",
    plans: [
      {
        name: "Free Plan",
        price: "$0",
        priceCaption: "",
        credits: "1,000 Credits (one-time)",
        description: "Trade Intelligence, risk-free",
        features: [
          "Buyer Search",
          "AI CORE (Market Analysis)",
          "Buyer Enrich",
          "Buyer Fit",
          "CRM",
        ],
        cta: "Start for free",
      },
      {
        name: "Plus Plan",
        price: "$20",
        priceCaption: "per month (excl. tax)",
        credits: "3,000 Credits / month",
        description: "For individual export managers",
        features: [
          "All Free features",
          "1 Email account sync",
          "Buyer email log",
          "Credit rollover",
        ],
        cta: "Continue with Plus",
      },
      {
        name: "Pro Plan",
        price: "$50",
        priceCaption: "per month (excl. tax)",
        credits: "9,000 Credits / month",
        description: "For teams scaling exports",
        features: [
          "All Plus features",
          "2 Emails account sync",
          "shared buyer email log",
        ],
        cta: "Continue with Pro",
      },
      {
        name: "Premium Plan",
        price: "$100",
        priceCaption: "per month (excl. tax)",
        credits: "30,000 Credits / month",
        description: "For full scale export teams",
        features: [
          "All Pro features",
          "3 Emails account sync",
          "priority support",
        ],
        cta: "Continue with Premium",
      },
    ],
  },

  dataTrust: {
    eyebrow: "Data you can trust",
    headlineLine1: "Built on global trade data",
    headlineLine2: "you can trust.",
    subcopyLine1: "TradeIt helps sales teams discover real buyers using billions of shipment records,",
    subcopyLine2: "global market coverage, and verified business contact data.",
    metrics: [
      {
        value: "8B+",
        label: "TRADE RECORDS",
        desc:
          "Understand real import and export activity through global shipment records.",
      },
      {
        value: "200+",
        label: "COUNTRIES & REGIONS",
        desc: "Explore trade data across countries and regions worldwide.",
      },
      {
        value: "230M+",
        label: "COMPANIES & CONTACTS",
        desc:
          "Access company and contact data to reach the right business decision-makers.",
      },
      {
        value: "1 Tool",
        label: "SALES WORKFLOW",
        desc:
          "Turn scattered buyer research, CRM, and outreach into one integrated sales workflow.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Our customers",
    headlineLine1: "What trade professionals",
    headlineLine2: "say about TradeIt",
    body:
      "From export sales teams to sourcing agents, users around the world use TradeIt to find active importers and exporters, understand buying patterns, and connect with genuine buyers.",
    prev: "Previous",
    next: "Next",
    globalCard: {
      title: "Global trade professionals using TradeIt",
      body:
        "Thousands of exporters, manufacturers, importers, agents & consultants in 60+ countries.",
    },
    items: [
      {
        name: "Nimesh Solanki",
        country: "India",
        countryFlag: "🇮🇳",
        title: "Founder & Trade Agent",
        company: "Anki's Global Trade",
        quote:
          "Having access to real shipment records instead of generic company databases helps exporters like me identifying active importers and make better data-driven decisions.",
        tag: "Trade Data / Sourcing",
        proof: {
          large: "8B+",
          label: "Trade records",
          description: "Real shipment data for better buyer discovery.",
        },
      },
      {
        name: "Philemon Oy",
        country: "Uganda / Congo",
        countryFlag: "🇺🇬",
        title: "Founder & Managing Director",
        company: "Phil Pro Motors",
        quote:
          "TradeIt helped me tracking active importers based on real shipment data and connect suppliers with qualified buyers more efficiently.",
        tag: "Supply Chain / Automotive",
        proof: {
          large: "Supply Chain",
          label: "Automotive trade",
          description:
            "Track active importers and connect suppliers with qualified buyers.",
        },
      },
      {
        name: "Marian Mourice",
        country: "Egypt",
        countryFlag: "🇪🇬",
        title: "Export Sales Executive",
        company: "Jesco Import and Export",
        quote:
          "TradeIt is based on real trade data, helping me discovering active buyers, understand sourcing patterns, and verify opportunities with more confidence.",
        tag: "Export Sales / Food Supplies",
        proof: {
          large: "Food Export",
          label: "Buyer verification",
          description:
            "Understand sourcing patterns and verify real opportunities.",
        },
      },
      {
        name: "Abdulhafeez Yahya Mogauri",
        country: "Nigeria",
        countryFlag: "🇳🇬",
        title: "Founder & CEO",
        company: "AYM CARS ZARIA LTD",
        quote:
          "TradeIt is a valuable way to understand international trade and connect verified suppliers with genuine buyers.",
        tag: "Automotive / Importers",
        proof: {
          large: "Verified Buyers",
          label: "Global trade network",
          description: "Connect genuine buyers and suppliers across markets.",
        },
      },
    ],
  },

  fewerTools: {
    eyebrow: "One workflow. Fewer tools.",
    headline: "Replace scattered export tools with one workflow.",
    body:
      "Instead of paying for separate CRM, trade data, enrichment, and research tools, TradeIt gives export teams one connected workflow for finding and reaching real buyers.",
    pills: [
      { label: "Trade Data", price: "$300+" },
      { label: "CRM", price: "$50" },
      { label: "Enrichment", price: "$49+" },
      { label: "AI Research", price: "$20+" },
      { label: "Buyer Lists", price: "$200+" },
      { label: "Email Tools", price: "$15+" },
    ],
    before: {
      title: "Typical export stack",
      caption: "Multiple tools + manual research",
      price: "$634+",
      per: "/mo",
    },
    after: {
      title: "TradeIt",
      caption: "One connected workflow",
      price: "$50",
      per: "/mo",
    },
  },

  cta: {
    headline: "Find verified buyers right now.",
    subcopy: "Turn trade data into real sales opportunities",
    button: "Get Started",
  },

  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        q: "What is TradeIt?",
        a: "TradeIt is a global sales platform that helps companies discover potential buyers through global trade data, analyze buyer opportunities with AI, and manage overseas sales activities in one workflow. Instead of relying only on Google searches, exhibitions, or static company lists, TradeIt helps you start from real trade activity.",
      },
      {
        q: "How does TradeIt help me find buyers?",
        a: "TradeIt helps you find importers that are already buying products similar to yours. By searching product names, items, HS codes, or company names, you can discover companies with actual import records. These companies may have a higher possibility of becoming potential buyers because they have already shown demand for similar product categories.",
      },
      {
        q: "What kind of trade data can I see?",
        a: "TradeIt provides shipment data based on B/L, also known as Bill of Lading records. You can review trade information such as importer, exporter, product description, origin and destination countries, shipment date, quantity, weight, and other available transaction details. This helps you understand not only what products were imported or exported, but also how much was traded and how frequently the buyer is purchasing.",
      },
      {
        q: "How can trade data help me understand buyer demand?",
        a: "Trade data can show shipment volume, quantity, weight, and import frequency. If a company imports similar products repeatedly or in large quantities, it may indicate stronger purchasing power or consistent demand. These signals can help your team prioritize which buyers are worth researching or contacting first.",
      },
      {
        q: "Can I find buyer contact information in TradeIt?",
        a: "Yes. TradeIt provides buyer enrichment features that allow you to view available company details and contact information. If email addresses, personal contact details, or decision-maker information are available in our dataset, you can access them within the platform. Availability may vary depending on the company and data coverage.",
      },
      {
        q: "What do TradeIt's AI features do?",
        a: "TradeIt's AI features help you move faster from buyer discovery to decision-making. AI Fill helps complete basic buyer company information such as website, address, and official contact details. AI CORE analyzes your company, product, and target market context to assess market potential. AI Buyer Fit helps evaluate whether a specific buyer is relevant to your business and worth prioritizing.",
      },
      {
        q: "What are credits, and when are they used?",
        a: "Credits are the usage units used inside TradeIt. They are deducted when you use certain data or AI-powered features, such as viewing B/L trade data, enriching buyer information, running AI analysis, or using other credit-based actions. The amount of credits used may vary depending on the feature and the type of data requested.",
      },
      {
        q: "Can TradeIt help me manage buyers after I find them?",
        a: "Yes. TradeIt includes a CRM feature called Sales Note, where you can save buyers, organize buyer lists, manage sales stages, write notes, and track follow-up activities. Sales Note helps your team move from buyer research to actual sales management without relying only on spreadsheets or scattered tools.",
      },
      {
        q: "Can I start using TradeIt for free?",
        a: "Yes. TradeIt offers a free plan with credits so you can try buyer search and key features before upgrading. This allows you to explore whether TradeIt can help your company find relevant buyers and understand market opportunities.",
      },
    ],
  },

  footer: {
    copyright: "© 2026 TradeIt. All rights reserved.",
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    social: {
      linkedin: "LinkedIn",
      facebook: "Facebook",
      youtube: "YouTube",
    },
  },
} as const;

export type MainDict = typeof mainEn;
