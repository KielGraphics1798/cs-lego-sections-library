import { useEffect, useMemo, useState, type JSX } from "react";

import type { SectionComponent, SectionMeta } from "./sectionRegistry";

/**
 * Full-viewport preview of a single section.
 *
 * - **Desktop** renders the component inline at the actual browser width — closest to a
 *   real production page.
 * - **Tablet / Mobile** render the component inside a fixed-width `<iframe>` (768 / 375)
 *   pointed at `?bare=1&cat=...&v=...` so Tailwind responsive classes resolve against the
 *   iframe's own viewport instead of the parent's. This is the only way to *actually*
 *   simulate a smaller breakpoint without resizing the browser.
 *
 * The overlay is a fixed full-screen layer. Pressing `Escape` or clicking the Back button
 * closes it. Body scroll is locked while the overlay is open.
 */
type Device = "desktop" | "tablet" | "mobile";

const deviceWidths: Record<Exclude<Device, "desktop">, number> = {
  tablet: 768,
  mobile: 375,
};

const deviceOptions: { value: Device; label: string; sub: string }[] = [
  { value: "desktop", label: "Desktop", sub: "full width" },
  { value: "tablet", label: "Tablet", sub: "768px" },
  { value: "mobile", label: "Mobile", sub: "375px" },
];

export interface SectionPreviewProps {
  meta: SectionMeta;
  onClose: () => void;
}

export default function SectionPreview({ meta, onClose }: SectionPreviewProps): JSX.Element {
  const [device, setDevice] = useState<Device>("desktop");
  const [mounted, setMounted] = useState(false);

  // Animate in on mount.
  useEffect(() => {
    const id = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  // Esc closes the preview; body scroll is locked while open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const bareUrl = useMemo(
    () => `${window.location.pathname}?bare=1&cat=${meta.category}&v=${meta.variantIndex}`,
    [meta.category, meta.variantIndex],
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${meta.name} full preview`}
      className={`fixed inset-0 z-50 flex flex-col bg-[#0c0d0f] text-white transition-opacity duration-200 ease-out ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <header className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#0c0d0f]/95 px-4 py-3 backdrop-blur-md sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 rounded-[8px] border border-white/15 bg-white/5 px-3 py-1.5 text-[12.5px] font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
          >
            <span aria-hidden>←</span>
            <span>Back to Gallery</span>
          </button>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-[14px] font-semibold tracking-[-0.2px]">{meta.name}</span>
            <span className="text-[11px] uppercase tracking-[0.08em] text-white/55">
              {meta.categoryLabel} · Variant {meta.variantNumber}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] uppercase tracking-[0.08em] text-white/55">Device</span>
          {deviceOptions.map((opt) => {
            const isActive = device === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setDevice(opt.value)}
                className={`flex flex-col items-start rounded-[8px] border px-3 py-1 text-left text-[12.5px] font-semibold leading-tight transition ${
                  isActive
                    ? "border-[#0e6cf6] bg-[#0e6cf6] text-white shadow-[0px_4px_10px_rgba(14,108,246,0.45)]"
                    : "border-white/15 bg-white/5 text-white/85 hover:border-white/40 hover:bg-white/10"
                }`}
              >
                <span>{opt.label}</span>
                <span
                  className={`text-[10px] font-normal ${
                    isActive ? "text-white/85" : "text-white/55"
                  }`}
                >
                  {opt.sub}
                </span>
              </button>
            );
          })}
          <a
            className="ml-1 inline-flex items-center gap-1 rounded-[8px] border border-white/15 bg-white/5 px-3 py-1.5 text-[12px] font-medium text-white/85 hover:border-white/40 hover:text-white"
            href={bareUrl}
            target="_blank"
            rel="noreferrer"
            title="Open this section bare in a new browser tab"
          >
            Open in new tab ↗
          </a>
        </div>
      </header>

      <div className="flex-1 overflow-auto bg-[#1a1c20]">
        <SectionStage device={device} bareUrl={bareUrl} Component={meta.Component} />
      </div>
    </div>
  );
}

function SectionStage({
  device,
  bareUrl,
  Component,
}: {
  device: Device;
  bareUrl: string;
  Component: SectionComponent;
}): JSX.Element {
  if (device === "desktop") {
    return (
      <div className="w-full bg-white">
        <Component />
      </div>
    );
  }

  return <DeviceFrame width={deviceWidths[device]} src={bareUrl} />;
}

function DeviceFrame({ width, src }: { width: number; src: string }): JSX.Element {
  const [stageHeight, setStageHeight] = useState<number>(900);

  useEffect(() => {
    const compute = () =>
      setStageHeight(
        Math.max(700, (typeof window !== "undefined" ? window.innerHeight : 1080) - 160),
      );
    compute();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", compute);
      return () => window.removeEventListener("resize", compute);
    }
    return undefined;
  }, []);

  return (
    <div className="flex w-full justify-center px-4 py-8">
      <div className="flex flex-col items-center gap-3">
        <div className="text-[11px] uppercase tracking-[0.08em] text-white/55">
          Simulated viewport · <span className="font-semibold text-white">{width}px</span>
        </div>
        <iframe
          key={`${src}-${width}`}
          title={`Section preview at ${width}px`}
          src={src}
          className="block rounded-[14px] border border-white/15 bg-white shadow-[0px_30px_70px_rgba(0,0,0,0.45)]"
          style={{ width, height: stageHeight, maxWidth: "100%" }}
        />
      </div>
    </div>
  );
}
