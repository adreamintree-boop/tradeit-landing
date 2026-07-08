import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, lazy, Suspense } from "react";
const ThreeGlobe = lazy(() => import("@/components/OrbitalGlobe"));
import { cn } from "@/lib/utils";
import {
  Search,
  ArrowRight,
  Check,
  Sparkles,
  Ship,
  Building2,
  Brain,
  ClipboardList,
  Send,
  TrendingUp,
  Users,
  Workflow,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Wand2,
  Target,
  MapPin,
  Package,
  Mail,
  Star,
  Factory,
  Handshake,
  Briefcase,
  Network,
  Truck,
} from "lucide-react";
import workflowTradeData from "@/assets/trade-data.png.asset.json";
import workflowEnrich from "@/assets/enrich.png.asset.json";
import workflowAIAnalysis from "@/assets/ai-analysis.png.asset.json";
import workflowCRM from "@/assets/crm.png.asset.json";
import workflowOutreach from "@/assets/outreach.png.asset.json";
import tradeItLogo from "@/assets/tradeit-logo.png.asset.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import nimeshAvatar from "@/assets/nimesh.png.asset.json";
import philemonAvatar from "@/assets/philemon.png.asset.json";
import marianAvatar from "@/assets/marian.png.asset.json";
import abdulAvatar from "@/assets/abdul.png.asset.json";
import usecaseExport from "@/assets/usecase-export.png.asset.json";
import usecaseManufacturer from "@/assets/usecase-manufacturer.png.asset.json";
import usecaseTrading from "@/assets/usecase-trading.png.asset.json";
import usecaseAgencies from "@/assets/usecase-agencies.png.asset.json";
import usecaseSourcing from "@/assets/usecase-sourcing.png.asset.json";
import usecaseLogistics from "@/assets/usecase-logistics.png.asset.json";
import planFreeIcon from "@/assets/plan-free.png.asset.json";
import planPlusIcon from "@/assets/plan-plus.png.asset.json";
import planProIcon from "@/assets/plan-pro.png.asset.json";
import planPremiumIcon from "@/assets/plan-premium.png.asset.json";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=630&fit=crop",
      },
      {
        name: "twitter:image",
        content:
          "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=630&fit=crop",
      },
    ],
  }),
});

/* ---------------------------------------------------------------- */
/*  Small primitives                                                */
/* ---------------------------------------------------------------- */

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand shadow-brand">
        <Ship className="h-4 w-4 text-white" strokeWidth={2.5} />
      </div>
      <span className="text-lg font-semibold tracking-tight text-ink" style={{ fontFamily: "var(--font-sans)" }}>
        Trade<span className="text-brand">It</span>
      </span>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-ink-soft backdrop-blur-sm">
      {children}
    </span>
  );
}

function PrimaryCTA({ children }: { children: React.ReactNode }) {
  return (
    <button className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition-all hover:bg-brand hover:shadow-brand">
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

function SecondaryLink({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink">
      {children}
      <ArrowRight className="h-3.5 w-3.5" />
    </button>
  );
}

/* ---------------------------------------------------------------- */
/*  Nav                                                             */
/* ---------------------------------------------------------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Product", "Solutions", "Pricing", "Data", "Customers"];

  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      {/* Header bar */}
      <div
        className={cn(
          "border-b border-border/60 bg-white/70 backdrop-blur-xl transition-all duration-300 ease-out",
          scrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center">
            <img
              src={tradeItLogo.url}
              alt="TradeIt"
              className="h-[17px] w-auto object-contain sm:h-[20px]"
            />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {l}
              </a>
            ))}
          </nav>
          <div className="hidden w-28 md:block" />
        </div>
      </div>

      {/* Always-visible floating Login / Sign Up button */}
      <div className="pointer-events-none absolute right-0 top-0 p-4 sm:px-6 lg:px-8">
        <button className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand">
          Login / Sign Up
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Hero                                                            */
/* ---------------------------------------------------------------- */

const KEYWORDS_ROW_1 = [
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
];

const KEYWORDS_ROW_2 = [
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
];

function KeywordMarquee({
  items,
  direction,
  onPick,
  paused,
}: {
  items: string[];
  direction: "left" | "right";
  onPick: (kw: string) => void;
  paused: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max gap-2 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {doubled.map((kw, i) => (
          <button
            key={`${kw}-${i}`}
            type="button"
            onClick={() => onPick(kw)}
            className="shrink-0 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink-soft shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand hover:shadow-card"
          >
            {kw}
          </button>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const [query, setQuery] = useState("");
  const [paused, setPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden text-white">
      {/* Base atmospheric gradient — near-black → deep navy → cobalt → icy blue → white */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #000000 0%, #030510 12%, #060b2e 30%, #0a1a6b 52%, #1e46c4 72%, #4a7fe6 88%, #9fc5f9 96%, #ffffff 100%)",
        }}
      />

      {/* Rich cobalt center glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 52% at 50% 46%, rgba(60,120,255,0.32), transparent 65%)",
        }}
      />

      {/* Three.js orbital globe — full-bleed within hero, kept visible */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-full w-full scale-[0.95]">
          {mounted && (
            <Suspense fallback={null}>
              <ThreeGlobe className="absolute inset-0 h-full w-full" />
            </Suspense>
          )}
        </div>
      </div>

      {/* Soft grain — stronger toward bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: "240px 240px",
          opacity: 0.32,
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.65) 78%, rgba(0,0,0,0.95) 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.65) 78%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      {/* Scattered floating particle speckles — concentrated in lower half */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><filter id='p' x='0' y='0' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' seed='8' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 0 1 0 0 0'/></feComponentTransfer><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23p)'/></svg>\")",
          backgroundSize: "320px 320px",
          opacity: 0.45,
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0,0,0,0.35) 68%, rgba(0,0,0,0.85) 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0,0,0,0.35) 68%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Soft white fade at bottom for seamless page transition — starts lower */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0.85) 80%, #ffffff 100%)",
        }}
      />

      {/* Text-readability overlay behind headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 45% 38% at 50% 40%, rgba(4,6,26,0.55), transparent 70%)",
        }}
      />


      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Now with AI Buyer Fit scoring
          </span>
          <h1 className="mt-6 text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Find real buyers through
            <br />
            <span className="italic text-white/60">global trade data.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Search billions of shipment records to discover companies already importing products like yours.
          </p>
        </div>

        {/* Search module */}
        <div className="mx-auto mt-10 max-w-4xl">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-stretch gap-2 rounded-full border border-white/10 bg-white p-2 shadow-card transition-all focus-within:border-brand focus-within:shadow-brand sm:flex-row sm:items-center"
          >
            <button
              type="button"
              className="flex items-center justify-between gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-ink hover:bg-muted sm:justify-start sm:border-r sm:border-border sm:rounded-none sm:rounded-l-full"
            >
              <span>Product &amp; Item</span>
              <ChevronDown className="h-4 w-4 text-ink-soft" />
            </button>
            <div className="flex flex-1 items-center gap-2 px-2">
              <Search className="h-4 w-4 shrink-0 text-ink-soft" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter a product name to find real buyers."
                className="min-w-0 flex-1 bg-transparent py-2 text-sm text-ink outline-none placeholder:text-ink-soft/60 sm:text-base"
              />
            </div>
            <button
              type="submit"
              className="shrink-0 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-brand transition-all hover:brightness-110 sm:px-8"
            >
              Search
            </button>
          </form>

          {/* Keyword marquees */}
          <div
            className="mt-6 space-y-3"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <KeywordMarquee
              items={KEYWORDS_ROW_1}
              direction="left"
              onPick={setQuery}
              paused={paused}
            />
            <KeywordMarquee
              items={KEYWORDS_ROW_2}
              direction="right"
              onPick={setQuery}
              paused={paused}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <button className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-primary-foreground shadow-brand transition-all hover:brightness-110">
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white">
            Explore Trade Data
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Floating UI cards */}
        <div className="relative mt-16 grid gap-4 sm:mt-20 sm:grid-cols-3">
          <MiniShipmentCard />
          <MiniBuyerCard />
          <MiniAIScoreCard />
        </div>
      </div>
    </section>
  );
}


function MiniShipmentCard() {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-card transition-transform hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-medium text-ink-soft">
          <Ship className="h-3.5 w-3.5 text-brand" /> Shipment record
        </div>
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
          Active
        </span>
      </div>
      <div className="mt-4 text-sm font-semibold text-ink">Lithium-ion battery packs</div>
      <div className="mt-1 text-xs text-ink-soft">HS 8507.60 • 24 shipments / 90d</div>
      <div className="mt-4 flex items-center gap-2 text-xs text-ink-soft">
        <MapPin className="h-3 w-3" />
        Shenzhen, CN
        <ArrowRight className="h-3 w-3" />
        Rotterdam, NL
      </div>
      <div className="mt-4 flex h-10 items-end gap-1">
        {[40, 60, 45, 80, 55, 90, 70, 100, 65, 85, 75, 95].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-brand opacity-80"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function MiniBuyerCard() {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-card transition-transform hover:-translate-y-1 sm:translate-y-6">
      <div className="flex items-center gap-2 text-xs font-medium text-ink-soft">
        <Building2 className="h-3.5 w-3.5 text-brand" /> Verified buyer
      </div>
      <div className="mt-4 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-card-blue text-sm font-semibold text-ink">
          NV
        </div>
        <div>
          <div className="text-sm font-semibold text-ink">Nordvolt Import BV</div>
          <div className="text-xs text-ink-soft">Netherlands • 82 employees</div>
        </div>
      </div>
      <div className="mt-4 space-y-1.5 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-ink-soft">Import frequency</span>
          <span className="font-medium text-ink">Weekly</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-ink-soft">Decision-maker</span>
          <span className="font-medium text-brand">3 found</span>
        </div>
      </div>
      <button className="mt-4 w-full rounded-lg bg-ink py-2 text-xs font-medium text-white">
        Enrich contact
      </button>
    </div>
  );
}

function MiniAIScoreCard() {
  return (
    <div className="rounded-2xl border border-border bg-gradient-card-blue p-5 shadow-card transition-transform hover:-translate-y-1">
      <div className="flex items-center gap-2 text-xs font-medium text-ink">
        <Sparkles className="h-3.5 w-3.5 text-brand" /> AI Buyer Fit
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-4xl font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>
          92
        </span>
        <span className="text-sm text-ink-soft">/100</span>
      </div>
      <div className="mt-2 text-xs text-ink-soft">Strong match with your product & market</div>
      <div className="mt-4 space-y-2 text-xs">
        {[
          ["Product overlap", 95],
          ["Volume signal", 88],
          ["Recency", 94],
        ].map(([label, v]) => (
          <div key={label as string}>
            <div className="flex justify-between text-ink-soft">
              <span>{label}</span>
              <span className="font-medium text-ink">{v}%</span>
            </div>
            <div className="mt-1 h-1 rounded-full bg-white/50">
              <div className="h-full rounded-full bg-brand" style={{ width: `${v}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Problems (horizontal cards)                                     */
/* ---------------------------------------------------------------- */

import problemImg1 from "@/assets/problem-search.jpg.asset.json";
import problemImg2 from "@/assets/problem-quality.jpg.asset.json";
import problemImg3 from "@/assets/problem-static.jpg.asset.json";
import problemImg4 from "@/assets/problem-signals.jpg.asset.json";
import problemImg5 from "@/assets/problem-guesswork.jpg.asset.json";

const PROBLEMS = [
  {
    title: "Buyer search takes too long",
    body: "Export teams spend too much time searching across Google, directories, and exhibition lists.",
    icon: Search,
    image: problemImg1.url,
  },
  {
    title: "Buyer quality is unclear",
    body: "A company may look relevant, but you don't know if they actually buy products like yours.",
    icon: Target,
    image: problemImg2.url,
  },
  {
    title: "Static lists go outdated fast",
    body: "Traditional buyer lists quickly become outdated and often miss recent trade activity.",
    icon: ClipboardList,
    image: problemImg3.url,
  },
  {
    title: "Purchase signals are hard to see",
    body: "Without shipment data, it's difficult to know who is actively importing and from where.",
    icon: TrendingUp,
    image: problemImg4.url,
  },
  {
    title: "Sales teams start from guesswork",
    body: "Without real trade records, outreach often begins with assumptions instead of evidence.",
    icon: Brain,
    image: problemImg5.url,
  },
];

function Problems() {
  const [active, setActive] = useState(0);
  const current = PROBLEMS[active];
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <h2 className="text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Finding real buyers shouldn't take weeks
          </h2>
          <p className="max-w-lg self-end text-base leading-relaxed text-ink-soft">
            Most export teams still rely on Google searches, exhibitions, outdated directories, and
            guesswork to find overseas buyers. TradeIt helps you start from real shipment data
            instead.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[32%_1fr] lg:gap-14">
          {/* Left: problem list */}
          <ul className="flex flex-col divide-y divide-border/70">
            {PROBLEMS.map((p, i) => {
              const isActive = i === active;
              return (
                <li key={p.title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="group block w-full py-5 text-left"
                    aria-pressed={isActive}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-1 h-6 w-0.5 shrink-0 rounded-full transition-colors",
                          isActive ? "bg-brand" : "bg-transparent",
                        )}
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <h3
                          className={cn(
                            "text-sm font-semibold transition-colors sm:text-base",
                            isActive ? "text-ink" : "text-ink-soft group-hover:text-ink",
                          )}
                        >
                          {p.title}
                        </h3>
                        <p
                          className={cn(
                            "mt-1.5 text-xs leading-relaxed transition-opacity sm:text-sm",
                            isActive ? "text-ink-soft opacity-100" : "text-ink-soft/80 opacity-90",
                          )}
                        >
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right: visual panel */}
          <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto lg:min-h-[580px]">
            {PROBLEMS.map((p, i) => (
              <img
                key={p.title}
                src={p.image}
                alt={p.title}
                loading="lazy"
                className={cn(
                  "absolute inset-0 h-full w-full object-contain p-1 transition-opacity duration-500 sm:p-2",
                  i === active ? "opacity-100" : "opacity-0",
                )}
                aria-hidden={i === active ? undefined : true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------------------------------------------------------- */
/*  Workflow                                                        */
/* ---------------------------------------------------------------- */

const STEPS = [
  {
    tab: "Trade Data",
    label: "STEP 1 — TRADE DATA",
    headline: "Find real buyers through shipment data",
    body: "Search products, HS codes, or company names to discover real importers and exporters through global shipment data.",
    bullets: [
      "Search by product, HS code, or company name",
      "Discover active importers and exporters",
      "Review shipment history and trade activity",
    ],
    image: workflowTradeData.url,
    imageAlt: "TradeIt B/L Trade Data Search interface showing shipment records",
  },
  {
    tab: "Enrich",
    label: "STEP 2 — ENRICH",
    headline: "Turn company names into buyer profiles",
    body: "Enrich buyer records with company websites, business details, and available decision-maker contact information.",
    bullets: [
      "Add company website and basic business details",
      "Find available contact information",
      "Build more complete buyer profiles",
    ],
    image: workflowEnrich.url,
    imageAlt: "TradeIt Buyer Enrichment interface showing company overview and contacts",
  },
  {
    tab: "AI Analysis",
    label: "STEP 3 — AI ANALYSIS",
    headline: "Understand which buyers are worth your time",
    body: "Use AI to analyze buyer relevance, market potential, shipment history, and fit before starting outreach.",
    bullets: [
      "Analyze buyer fit and sales potential",
      "Review trade activity and sourcing patterns",
      "Prioritize buyers with stronger signals",
    ],
    image: workflowAIAnalysis.url,
    imageAlt: "TradeIt AI Buyer Analysis interface showing buyer insights",
  },
  {
    tab: "CRM",
    label: "STEP 4 — CRM",
    headline: "Manage buyers in one sales workspace",
    body: "Save buyers, organize lists, track stages, write notes, and manage follow-up activities inside Sales Note CRM.",
    bullets: [
      "Save qualified buyers into Sales Note CRM",
      "Track sales stages and follow-up tasks",
      "Keep buyer notes and communication history organized",
    ],
    image: workflowCRM.url,
    imageAlt: "TradeIt CRM interface showing sales pipeline with buyers on a world map",
  },
  {
    tab: "Outreach",
    label: "STEP 5 — OUTREACH",
    headline: "Reach the right buyers with better context",
    body: "Create personalized outreach using buyer context and manage email communication from one connected workflow.",
    bullets: [
      "Create personalized outreach messages",
      "Use buyer context from trade data and enrichment",
      "Track email activity and follow-ups",
    ],
    image: workflowOutreach.url,
    imageAlt: "TradeIt Compose Email interface showing buyer and contact selection",
  },
];

function WorkflowSection() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Pill>
            <Workflow className="h-3 w-3 text-brand" /> One connected workspace
          </Pill>
          <h2 className="mt-6 text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            From trade data to buyer outreach in one workflow
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            TradeIt connects buyer discovery, company enrichment, AI analysis, CRM and email
            outreach in one connected workspace.
          </p>
        </div>

        {/* Pill tabs above container */}
        <div className="mt-10 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <div className="mx-auto flex w-max items-center gap-2 sm:justify-center">
            {STEPS.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.tab}
                  onClick={() => setActive(i)}
                  className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-brand bg-brand-tint text-brand"
                      : "border-border bg-white text-ink-soft hover:text-ink"
                  }`}
                >
                  {s.tab}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="mt-8 rounded-3xl p-6 sm:p-10 lg:p-12"
          style={{ backgroundColor: "#f5f8fb" }}
        >
          <div
            key={active}
            className="grid animate-fade-in-up gap-6 lg:grid-cols-[1fr_2.25fr] lg:items-stretch lg:gap-8"
          >
            <div className="flex flex-col justify-center">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-brand">
                {step.label}
              </div>
              <h3 className="mt-2 text-xl font-semibold leading-tight text-ink sm:text-2xl">
                {step.headline}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
                {step.body}
              </p>
              <ul className="mt-4 space-y-2">
                {step.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[13px] text-ink">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full overflow-hidden rounded-2xl border border-border bg-white p-0.5 shadow-soft">
                <img
                  src={step.image}
                  alt={step.imageAlt}
                  className="h-auto w-full rounded-xl object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowPreview({ step }: { step: number }) {
  if (step === 0) return <PreviewTradeData />;
  if (step === 1) return <PreviewEnrich />;
  if (step === 2) return <PreviewAI />;
  if (step === 3) return <PreviewCRM />;
  return <PreviewOutreach />;
}

function PreviewTradeData() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 rounded-xl border border-border bg-white p-3 text-xs">
        <Search className="h-3.5 w-3.5 text-brand" />
        <span className="text-ink">lithium battery</span>
        <span className="ml-auto rounded-full bg-brand-tint px-2 py-0.5 text-[10px] font-medium text-brand">
          1,284 results
        </span>
      </div>
      {[
        ["Nordvolt Import BV", "Netherlands", "24 shipments"],
        ["Battery House GmbH", "Germany", "18 shipments"],
        ["Voltix Trading Co.", "Vietnam", "12 shipments"],
      ].map(([n, c, s]) => (
        <div key={n} className="flex items-center gap-3 rounded-xl border border-border bg-white p-3">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-card-blue text-[10px] font-semibold text-ink">
            {n.slice(0, 2)}
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium text-ink">{n}</div>
            <div className="text-xs text-ink-soft">{c}</div>
          </div>
          <span className="shrink-0 text-xs font-medium text-brand">{s}</span>
        </div>
      ))}
    </div>
  );
}

function PreviewEnrich() {
  return (
    <div className="rounded-2xl border border-border bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-card-blue font-semibold text-ink">
            NV
          </div>
          <div>
            <div className="font-semibold text-ink">Nordvolt Import BV</div>
            <a className="text-xs text-brand">nordvolt.nl</a>
          </div>
        </div>
        <Wand2 className="h-4 w-4 text-brand" />
      </div>
      <div className="mt-4 space-y-2 text-xs">
        {[
          ["Website", "nordvolt.nl", true],
          ["Headquarters", "Rotterdam, NL", true],
          ["Employees", "82", true],
          ["CEO / Buyer", "Lars van Dijk — l.vandijk@…", true],
        ].map(([k, v, ok]) => (
          <div
            key={k as string}
            className="flex items-center justify-between rounded-lg bg-surface-alt px-3 py-2"
          >
            <span className="text-ink-soft">{k}</span>
            <span className="flex items-center gap-2 font-medium text-ink">
              {v}
              {ok ? <Check className="h-3 w-3 text-emerald-600" /> : null}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PreviewAI() {
  return (
    <div className="rounded-2xl border border-border bg-white p-5">
      <div className="flex items-center gap-2 text-xs font-medium text-ink-soft">
        <Sparkles className="h-3.5 w-3.5 text-brand" /> AI Analysis
      </div>
      <div className="mt-3 rounded-xl bg-gradient-card-blue p-4">
        <div className="text-xs text-ink-soft">Buyer Fit Score</div>
        <div className="mt-1 flex items-baseline gap-1">
          <span className="text-4xl font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>
            92
          </span>
          <span className="text-sm text-ink-soft">/100</span>
        </div>
        <div className="mt-2 text-xs text-ink">Strong match, high recency, growing volume.</div>
      </div>
      <div className="mt-4 space-y-2 text-xs text-ink-soft">
        <div className="flex items-start gap-2">
          <Check className="mt-0.5 h-3 w-3 shrink-0 text-emerald-600" />
          Imports lithium batteries every 12–14 days for the last 6 months
        </div>
        <div className="flex items-start gap-2">
          <Check className="mt-0.5 h-3 w-3 shrink-0 text-emerald-600" />
          Sources from 3 different exporters — open to new supply
        </div>
      </div>
    </div>
  );
}

function PreviewCRM() {
  const cols = [
    { name: "Prospect", items: ["Nordvolt Import BV", "Voltix Trading Co."], color: "text-ink-soft" },
    { name: "Contacted", items: ["Battery House GmbH"], color: "text-brand" },
    { name: "Deal", items: ["Meridian Energy Ltd."], color: "text-emerald-600" },
  ];
  return (
    <div className="grid gap-2 sm:grid-cols-3">
      {cols.map((c) => (
        <div key={c.name} className="rounded-xl border border-border bg-white p-3">
          <div className={`mb-2 text-[10px] font-semibold uppercase tracking-wider ${c.color}`}>
            {c.name}
          </div>
          <div className="space-y-2">
            {c.items.map((i) => (
              <div key={i} className="rounded-lg bg-surface-alt p-2 text-xs text-ink">
                {i}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function PreviewOutreach() {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 text-xs">
      <div className="flex items-center gap-2 border-b border-border pb-3">
        <Mail className="h-3.5 w-3.5 text-brand" />
        <span className="font-medium text-ink">To: l.vandijk@nordvolt.nl</span>
      </div>
      <div className="pt-3 text-ink-soft">
        <div className="text-ink">
          <span className="font-medium">Subject:</span> Reliable supply for your Shenzhen shipments
        </div>
        <div className="mt-3 leading-relaxed">
          Hi Lars, — I noticed Nordvolt has been importing lithium-ion packs from Shenzhen roughly
          every two weeks. We ship from the same port with a shorter lead time. Would a short intro
          call this week make sense?
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <span className="rounded-full bg-brand-tint px-2 py-0.5 text-[10px] font-medium text-brand">
          Personalized with trade data
        </span>
        <button className="rounded-lg bg-ink px-3 py-1.5 font-medium text-white">Send</button>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  AI Buyer Intelligence                                           */
/* ---------------------------------------------------------------- */

function AIFeatures() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-end md:gap-16">
          <div>
            <Pill>
              <Sparkles className="h-3 w-3 text-brand" /> TradeIt AI
            </Pill>
            <h2 className="mt-6 text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
              Turn AI buyer analysis into actionable sales decisions
            </h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-ink-soft">
            From filling buyer information to market analysis and buyer fit evaluation, TradeIt AI
            helps you understand which buyers are worth your time.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <AICard
            title="AI Fill"
            body="Fill missing buyer company information in real time, including website, address, and official contact details."
            icon={Wand2}
          >
            <div className="space-y-1.5 text-xs">
              {[
                ["Website", "acmecorp.com"],
                ["Address", "Rotterdam, NL"],
                ["Contact", "l.vandijk@…"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between rounded-lg bg-surface-alt px-3 py-2">
                  <span className="text-ink-soft">{k}</span>
                  <span className="flex items-center gap-1.5 font-medium text-ink">
                    {v} <Check className="h-3 w-3 text-emerald-600" />
                  </span>
                </div>
              ))}
            </div>
          </AICard>

          <AICard
            title="AI CORE"
            body="Analyze global market potential based on your company, product, and target context."
            icon={Brain}
            highlight
          >
            <div className="rounded-xl bg-white/70 p-4 backdrop-blur">
              <div className="text-xs text-ink-soft">Global market potential</div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-3xl font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>
                  $3.9M
                </span>
                <span className="text-xs text-emerald-600">+18%</span>
              </div>
              <div className="mt-3 flex h-12 items-end gap-1">
                {[30, 45, 40, 60, 55, 70, 65, 85, 75, 90, 80, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-brand"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </AICard>

          <AICard
            title="AI Buyer Fit"
            body="Evaluate buyer relevance and sales potential before starting outreach."
            icon={Target}
          >
            <div className="space-y-2 text-xs">
              {[
                ["Nordvolt", 92, "text-emerald-600"],
                ["Battery House", 78, "text-brand"],
                ["Voltix", 61, "text-amber-600"],
              ].map(([n, v, c]) => (
                <div key={n as string} className="rounded-lg bg-surface-alt p-2.5">
                  <div className="flex justify-between">
                    <span className="text-ink">{n}</span>
                    <span className={`font-semibold ${c}`}>{v}</span>
                  </div>
                  <div className="mt-1 h-1 rounded-full bg-white">
                    <div
                      className="h-full rounded-full bg-brand"
                      style={{ width: `${v as number}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </AICard>
        </div>
      </div>
    </section>
  );
}

function AICard({
  title,
  body,
  icon: Icon,
  highlight = false,
  children,
}: {
  title: string;
  body: string;
  icon: React.ComponentType<{ className?: string }>;
  highlight?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col rounded-3xl border p-6 transition-transform hover:-translate-y-1 ${
        highlight
          ? "border-brand/40 bg-gradient-card-blue shadow-brand"
          : "border-border bg-surface-alt hover:shadow-card"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`grid h-10 w-10 place-items-center rounded-xl ${highlight ? "bg-brand text-white" : "bg-white text-brand shadow-soft"}`}>
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        {highlight && (
          <span className="ml-auto rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-brand">
            Most loved
          </span>
        )}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{body}</p>
      <div className="mt-6 flex-1">{children}</div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Use Cases                                                       */
/* ---------------------------------------------------------------- */


const USE_CASES = [
  {
    title: "Export Teams",
    subtext: "Find verified overseas buyers and build stronger prospect lists with real import data.",
    image: usecaseExport.url,
    bullets: [
      "Build buyer lists from real import activity",
      "Prioritize prospects with stronger sales potential",
    ],
  },
  {
    title: "Manufacturers",
    subtext: "Discover overseas demand and identify importers already buying products like yours.",
    image: usecaseManufacturer.url,
    bullets: [
      "Find new overseas markets for your products",
      "Discover importers before investing in exhibitions",
    ],
  },
  {
    title: "Trading Companies",
    subtext: "Track buyers, suppliers, and competitors to uncover new trade opportunities.",
    image: usecaseTrading.url,
    bullets: [
      "See who buys, sells, and supplies",
      "Monitor competitors and supplier relationships",
    ],
  },
  {
    title: "Agencies & Consultants",
    subtext: "Support clients with data-backed market research, buyer discovery, and outreach planning.",
    image: usecaseAgencies.url,
    bullets: [
      "Deliver better export research for clients",
      "Support buyer discovery with real trade data",
    ],
  },
  {
    title: "Sourcing Teams",
    subtext: "Discover verified suppliers and sourcing markets using real shipment data.",
    image: usecaseSourcing.url,
    bullets: [
      "Find suppliers with proven export activity",
      "Compare sourcing routes and supplier relationships",
    ],
  },
  {
    title: "Logistics",
    subtext: "Uncover logistics opportunities by tracking shipment flows and recurring trade activity.",
    image: usecaseLogistics.url,
    bullets: [
      "Identify companies with active shipment volume",
      "Analyze trade routes, ports, and market movement",
    ],
  },
];

function UseCases() {
  const [active, setActive] = useState(0);
  const current = USE_CASES[active];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Pill>Use Cases</Pill>
          <h2 className="mt-6 max-w-3xl text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Built for teams
            <br />
            that sell across borders
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-10">
          {USE_CASES.map((u, i) => (
            <button
              key={u.title}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative pb-2 text-sm font-medium transition-colors sm:text-base",
                active === i
                  ? "text-brand"
                  : "text-ink-soft hover:text-ink",
              )}
            >
              {u.title}
              {active === i && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          key={active}
          className="mt-12 grid gap-5 animate-in fade-in duration-500 lg:grid-cols-2 lg:gap-6"
        >
          <div className="overflow-hidden rounded-2xl">
            <img
              src={current.image}
              alt={current.title}
              className="h-full w-full object-cover"
              style={{ minHeight: "420px" }}
            />
          </div>
          <div className="flex flex-col justify-center rounded-2xl bg-[#f2f8fc] p-8 sm:p-10 lg:p-12">
            <h3
              className="text-2xl leading-snug tracking-tight text-ink sm:text-3xl lg:text-[1.75rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {current.subtext}
            </h3>
            <ul className="mt-8 divide-y divide-black/10 border-y border-black/10">
              {current.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 py-4">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-ink-soft/40">
                    <Check className="h-3 w-3 text-ink-soft" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-medium text-ink sm:text-base">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------------------------------------------------------- */
/*  Pricing                                                         */
/* ---------------------------------------------------------------- */

const PLANS = [
  {
    name: "Free Plan",
    price: "$0",
    priceCaption: "",
    credits: "1,000 Credits (one-time)",
    description: "Trade Intelligence, risk-free",
    features: ["Buyer Search", "AI CORE (Market Analysis)", "Buyer Enrich", "Buyer Fit", "CRM"],
    cta: "Start for free",
    highlight: false,
    icon: planFreeIcon.url,
    iconScale: 0.92,
  },
  {
    name: "Plus Plan",
    price: "$20",
    priceCaption: "per month (excl. tax)",
    credits: "3,000 Credits / month",
    description: "For individual export managers",
    features: ["All Free features", "1 Email account sync", "Buyer email log", "Credit rollover"],
    cta: "Continue with Plus",
    highlight: false,
    icon: planPlusIcon.url,
    iconScale: 0.98,
  },
  {
    name: "Pro Plan",
    price: "$50",
    priceCaption: "per month (excl. tax)",
    credits: "9,000 Credits / month",
    description: "For teams scaling exports",
    features: ["All Plus features", "2 Emails account sync", "shared buyer email log"],
    cta: "Continue with Pro",
    highlight: true,
    icon: planProIcon.url,
    iconScale: 1.04,
  },
  {
    name: "Premium Plan",
    price: "$100",
    priceCaption: "per month (excl. tax)",
    credits: "30,000 Credits / month",
    description: "For full scale export teams",
    features: ["All Pro features", "3 Emails account sync", "priority support"],
    cta: "Continue with Premium",
    highlight: false,
    icon: planPremiumIcon.url,
    iconScale: 0.98,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Pill>Pricing</Pill>
          <h2 className="mt-6 text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Stop searching. <span className="italic text-brand">Start selling.</span>
          </h2>
          <p className="mt-4 text-base text-ink-soft">
            No more Googling. Just subscribe and start reaching out.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-[20px] border bg-white p-7 pt-6 transition-all hover:-translate-y-1 hover:shadow-card ${
                p.highlight
                  ? "border-brand bg-brand-tint"
                  : "border-border"
              }`}
            >
              {/* Icon area */}
              <div className="flex h-40 items-start justify-center overflow-hidden pt-1">
                <img
                  src={p.icon}
                  alt={`${p.name} icon`}
                  className="h-full w-auto object-contain"
                  style={{ transform: `scale(${p.iconScale})`, transformOrigin: "top center" }}
                  loading="lazy"
                />
              </div>

              {/* Top area */}
              <div className="pb-6">
                <div className="text-sm font-semibold text-ink">{p.name}</div>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span
                    className="text-4xl font-bold text-ink"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.price}
                  </span>
                  {p.priceCaption && (
                    <span className="text-sm text-ink-soft">{p.priceCaption}</span>
                  )}
                </div>
                <div className="mt-2 text-sm font-medium text-ink-soft">{p.credits}</div>
                <p className="mt-2 text-sm font-medium text-ink">{p.description}</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-border" />

              {/* Bottom area */}
              <div className="flex flex-1 flex-col pt-6">
                <ul className="space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ink">
                      <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-muted">
                        <Check className="h-3 w-3 text-ink-soft" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-auto w-full rounded-full py-3.5 text-sm font-semibold transition-colors ${
                    p.highlight
                      ? "bg-brand text-white hover:bg-ink"
                      : "border border-border bg-white text-ink hover:border-ink hover:bg-muted"
                  }`}
                >
                  {p.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Data Trust                                                      */
/* ---------------------------------------------------------------- */

const METRICS = [
  { value: "8B+", label: "TRADE RECORDS", desc: "Understand real import and export activity through global shipment records." },
  { value: "200+", label: "COUNTRIES & REGIONS", desc: "Explore trade data across countries and regions worldwide." },
  { value: "230M+", label: "COMPANIES & CONTACTS", desc: "Access company and contact data to reach the right business decision-makers." },
  { value: "1 Tool", label: "SALES WORKFLOW", desc: "Turn scattered buyer research, CRM, and outreach into one integrated sales workflow." },
];

function DataTrust() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Pill>Data you can trust</Pill>
          <h2 className="mt-6 text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Built on global trade data <span className="italic text-ink-soft">you can trust</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            TradeIt helps sales teams discover real buyers using billions of shipment records,
            global market coverage, and verified business contact data.
          </p>
        </div>

        <div className="mt-16 border-l border-r border-t border-metric-divider rounded-t-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className={`border-metric-divider px-6 py-10 sm:px-9 sm:pt-10 sm:pb-12 ${
                  i < 3 ? "border-b" : ""
                } ${i >= 2 ? "sm:border-b-0" : ""} ${
                  i < 3 ? "lg:border-b-0" : ""
                } ${i % 2 === 0 ? "sm:border-r" : ""} ${
                  i < 3 ? "lg:border-r" : ""
                }`}
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-brand">
                  {m.label}
                </div>
                <div
                  className="mt-5 text-4xl font-semibold text-ink sm:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {m.value}
                </div>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Testimonials                                                    */
/* ---------------------------------------------------------------- */

const TESTIMONIALS = [
  {
    name: "Nimesh Solanki",
    country: "India",
    countryFlag: "🇮🇳",
    title: "Founder & Trade Agent",
    company: "Anki's Global Trade",
    quote:
      "Having access to real shipment records instead of generic company databases helps exporters identify active importers and make better data-driven decisions.",
    tag: "Trade Data / Sourcing",
    avatar: nimeshAvatar.url,
    avatarShape: "circle" as const,
    avatarFit: "cover" as const,
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
      "TradeIt helps us track active importers based on real shipment data and connect suppliers with qualified buyers more efficiently.",
    tag: "Supply Chain / Automotive",
    avatar: philemonAvatar.url,
    avatarShape: "square" as const,
    avatarFit: "cover" as const,
    proof: {
      large: "Supply Chain",
      label: "Automotive trade",
      description: "Track active importers and connect suppliers with qualified buyers.",
    },
  },
  {
    name: "Marian Mourice",
    country: "Egypt",
    countryFlag: "🇪🇬",
    title: "Export Sales Executive",
    company: "Jesco Import and Export",
    quote:
      "TradeIt is based on real trade data, helping users identify active buyers, understand sourcing patterns, and verify opportunities with more confidence.",
    tag: "Export Sales / Food Supplies",
    avatar: marianAvatar.url,
    avatarShape: "circle" as const,
    avatarFit: "cover" as const,
    proof: {
      large: "Food Export",
      label: "Buyer verification",
      description: "Understand sourcing patterns and verify real opportunities.",
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
    avatar: abdulAvatar.url,
    avatarShape: "circle" as const,
    avatarFit: "cover" as const,
    proof: {
      large: "Verified Buyers",
      label: "Global trade network",
      description: "Connect genuine buyers and suppliers across markets.",
    },
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Our customers
          </div>
          <h2 className="mt-4 text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            What trade professionals say about TradeIt
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            From export sales teams to sourcing agents, users around the world use TradeIt to find
            active importers and exporters, understand buying patterns, and connect with genuine
            buyers.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          {/* Dark testimonial */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-ink p-8 text-white shadow-card sm:p-12">
            <div
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-40 blur-3xl"
              style={{ background: "var(--gradient-brand)" }}
              aria-hidden
            />
            <div className="relative">
              <div className="flex gap-1 text-brand-soft">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p
                className="mt-6 text-2xl leading-snug sm:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
            <div className="relative mt-10 flex items-end justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className={`h-12 w-12 shrink-0 ${t.avatarShape === "square" ? "rounded-xl" : "rounded-full"} object-center ring-1 ring-white/20`}
                  style={{ objectFit: t.avatarFit }}
                />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-white/60">
                    {t.title} · {t.company}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] text-white/90">
                      <span className="text-xs leading-none">{t.countryFlag}</span>
                      <span>{t.country}</span>
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/70">
                      {t.tag}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setI((i + 1) % TESTIMONIALS.length)}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                  aria-label="Next"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="relative mt-6 flex gap-1.5">
              {TESTIMONIALS.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-1 rounded-full transition-all ${k === i ? "w-8 bg-white" : "w-4 bg-white/30"}`}
                />
              ))}
            </div>
          </div>

          {/* Proof cards */}
          <div className="grid gap-5">
            <div className="rounded-3xl bg-gradient-card-blue p-8">
              <div
                key={t.proof.large}
                className="animate-fade-in-up"
              >
                <div
                  className="text-6xl font-semibold text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.proof.large}
                </div>
                <div className="mt-2 text-sm font-semibold text-ink">{t.proof.label}</div>
                <p className="mt-2 text-sm text-ink-soft">{t.proof.description}</p>
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-surface-alt p-8">
              <div className="flex -space-x-2">
                {[nimeshAvatar.url, philemonAvatar.url, marianAvatar.url, abdulAvatar.url].map((src, k) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-10 w-10 rounded-full border-2 border-white object-cover object-center"
                    style={{ zIndex: 10 - k }}
                  />
                ))}
              </div>
              <div className="mt-4 text-lg font-semibold text-ink">
                Global trade professionals using TradeIt
              </div>
              <p className="mt-1 text-sm text-ink-soft">
                Exporters, manufacturers, agents & consultants in 60+ countries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Final CTA                                                       */
/* ---------------------------------------------------------------- */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-cta-light py-20 sm:py-28">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Find the verified buyers <span className="italic text-brand">right now.</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
              Try Trade Data search and AI buyer analysis for free.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <PrimaryCTA>Get Started</PrimaryCTA>
              <SecondaryLink>Try for free</SecondaryLink>
            </div>
          </div>

          {/* Collage */}
          <div className="relative h-[420px]">
            <div className="absolute right-0 top-0 w-64">
              <MiniShipmentCard />
            </div>
            <div className="absolute left-4 top-24 w-64">
              <MiniAIScoreCard />
            </div>
            <div className="absolute bottom-0 right-8 w-64">
              <MiniBuyerCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  FAQ                                                             */
/* ---------------------------------------------------------------- */

const FAQ = [
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
];

function FaqSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-surface-alt p-6 sm:p-10 lg:p-14">
          <h2 className="text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="mt-8 w-full">
            {FAQ.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-b border-border/70 last:border-b-0"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium text-ink hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-ink-soft">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Footer                                                          */
/* ---------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-start">
          <div>
            <BrandMark />
            <p className="mt-4 max-w-sm text-sm text-ink-soft">
              Global trade data and AI-powered buyer discovery platform.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-soft md:justify-end">
            {["Terms of Service", "Privacy Policy", "Contact", "LinkedIn"].map((l) => (
              <a key={l} href="#" className="hover:text-ink">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-border pt-6 text-xs text-ink-soft sm:flex-row">
          <div>© 2026 TradeIt. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------- */
/*  Page                                                            */
/* ---------------------------------------------------------------- */

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problems />
        <WorkflowSection />
        <AIFeatures />
        <UseCases />
        <Pricing />
        <DataTrust />
        <Testimonials />
        <FinalCTA />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
