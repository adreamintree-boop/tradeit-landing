import { useEffect, useRef, useState } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { LANGUAGES, setLang, useLang } from "./i18n";

export function LanguageSelector({
  className = "",
}: {
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const current = useLang();
  const active = LANGUAGES.find((l) => l.code === current) ?? LANGUAGES[0];

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div ref={wrapRef} className={cn("pointer-events-auto relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-2 text-sm font-medium text-ink shadow-sm ring-1 ring-black/5 transition-colors hover:bg-white"
      >
        <Globe className="h-4 w-4 text-ink-soft" />
        <span className="text-xs font-semibold tracking-wide">
          {active.short}
        </span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-ink-soft transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 w-48 overflow-hidden rounded-xl border border-border/60 bg-white/95 py-1 shadow-lg backdrop-blur-xl"
        >
          {LANGUAGES.map((l) => {
            const selected = l.code === current;
            return (
              <li key={l.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-muted",
                    selected ? "text-ink" : "text-ink-soft"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-6 text-xs font-semibold tracking-wide text-ink-soft">
                      {l.short}
                    </span>
                    <span className="font-medium text-ink">{l.label}</span>
                  </span>
                  {selected && <Check className="h-4 w-4 text-brand" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
