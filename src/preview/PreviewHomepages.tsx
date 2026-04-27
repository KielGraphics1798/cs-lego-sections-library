import { useEffect, useMemo, useState, type JSX } from "react";

import {
  Homepage1,
  Homepage2,
  Homepage3,
  Homepage4,
  Homepage5,
} from "../homepages";

type HomepageComponent = () => JSX.Element;

const homepages: { id: string; label: string; sub: string; Component: HomepageComponent }[] = [
  { id: "1", label: "Homepage 1", sub: "Trusted Architect", Component: Homepage1 },
  { id: "2", label: "Homepage 2", sub: "Studio Modern", Component: Homepage2 },
  { id: "3", label: "Homepage 3", sub: "Visual Showcase", Component: Homepage3 },
  { id: "4", label: "Homepage 4", sub: "Conversion Driven", Component: Homepage4 },
  { id: "5", label: "Homepage 5", sub: "Bespoke Estate", Component: Homepage5 },
];

/**
 * Same viewport modes as the Sections preview: `fluid` renders inline at the actual viewport,
 * fixed widths render inside an iframe pointing at `?bare=1&hp=N` so Tailwind responsive
 * breakpoints simulate accurately.
 */
type ViewportMode = "fluid" | 1920 | 1440 | 1280 | 1024 | 768 | 375;

const viewportModes: { value: ViewportMode; label: string; sub?: string }[] = [
  { value: "fluid", label: "Fluid", sub: "real viewport" },
  { value: 1920, label: "1920", sub: "desktop XL" },
  { value: 1440, label: "1440", sub: "desktop" },
  { value: 1280, label: "1280", sub: "laptop" },
  { value: 1024, label: "1024", sub: "tablet ↔" },
  { value: 768, label: "768", sub: "tablet" },
  { value: 375, label: "375", sub: "mobile" },
];

export default function PreviewHomepages(): JSX.Element {
  const [activeId, setActiveId] = useState<string>(homepages[0].id);
  const [viewport, setViewport] = useState<ViewportMode>("fluid");

  const active = useMemo(
    () => homepages.find((h) => h.id === activeId) ?? homepages[0],
    [activeId],
  );

  const bareUrl = useMemo(
    () => `${window.location.pathname}?bare=1&hp=${active.id}`,
    [active.id],
  );

  return (
    <div className="flex w-full flex-col">
      <div className="border-b border-[#e3e3e3] bg-white px-4 py-3">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {homepages.map((hp) => {
                const isActive = activeId === hp.id;
                return (
                  <button
                    key={hp.id}
                    type="button"
                    className={`flex flex-col items-start rounded-[10px] border px-3.5 py-1.5 text-left text-[13px] font-semibold leading-tight transition ${
                      isActive
                        ? "border-[#141414] bg-[#141414] text-white shadow-[0px_4px_12px_rgba(0,0,0,0.18)]"
                        : "border-[#d6d6d6] bg-white text-[#2b2b2b] hover:border-[#141414] hover:text-[#141414]"
                    }`}
                    onClick={() => setActiveId(hp.id)}
                  >
                    <span>{hp.label}</span>
                    <span
                      className={`text-[10px] font-normal ${
                        isActive ? "text-white/80" : "text-[#7a7a7a]"
                      }`}
                    >
                      {hp.sub}
                    </span>
                  </button>
                );
              })}
            </div>
            <a
              className="hidden shrink-0 items-center gap-1 rounded-[8px] border border-[#dedede] bg-white px-3 py-1.5 text-[12px] font-medium text-[#2b2b2b] hover:border-[#141414] hover:text-[#141414] sm:inline-flex"
              href={bareUrl}
              target="_blank"
              rel="noreferrer"
              title="Open this homepage bare in a new tab — uses the actual browser viewport width."
            >
              Open in new tab ↗
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.08em] text-[#7a7a7a]">
              Viewport
            </span>
            {viewportModes.map((mode) => {
              const isActive = viewport === mode.value;
              return (
                <button
                  key={String(mode.value)}
                  type="button"
                  className={`flex flex-col items-start rounded-[8px] border px-3 py-1 text-left text-[12.5px] font-semibold leading-tight transition ${
                    isActive
                      ? "border-[#0e6cf6] bg-[#0e6cf6] text-white shadow-[0px_4px_10px_rgba(14,108,246,0.32)]"
                      : "border-[#dedede] bg-white text-[#3a3a3a] hover:border-[#0e6cf6]"
                  }`}
                  onClick={() => setViewport(mode.value)}
                >
                  <span>{mode.label}</span>
                  {mode.sub ? (
                    <span
                      className={`text-[10px] font-normal ${
                        isActive ? "text-white/80" : "text-[#7a7a7a]"
                      }`}
                    >
                      {mode.sub}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full">
        {viewport === "fluid" ? (
          <div className="w-full bg-white">
            <active.Component />
          </div>
        ) : (
          <HomepageIframeStage width={viewport} src={bareUrl} />
        )}
      </div>
    </div>
  );
}

function HomepageIframeStage({ width, src }: { width: number; src: string }): JSX.Element {
  const [stageHeight, setStageHeight] = useState<number>(900);

  useEffect(() => {
    const compute = () =>
      setStageHeight(
        Math.max(700, (typeof window !== "undefined" ? window.innerHeight : 1080) - 220),
      );
    compute();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", compute);
      return () => window.removeEventListener("resize", compute);
    }
    return undefined;
  }, []);

  return (
    <div className="w-full overflow-x-auto bg-[#eef0f3]">
      <div
        className="mx-auto flex flex-col items-center gap-2 px-4 py-6"
        style={{ width: Math.max(width + 32, 0) }}
      >
        <div className="flex w-full items-center justify-between text-[11px] uppercase tracking-[0.08em] text-[#5a5a5a]">
          <span>Simulated viewport</span>
          <span className="font-semibold text-[#141414]">{width}px wide</span>
        </div>
        <iframe
          key={`${src}-${width}`}
          title={`Homepage preview at ${width}px`}
          src={src}
          className="block rounded-[10px] border border-[#dcdfe4] bg-white shadow-[0px_18px_40px_rgba(15,15,15,0.08)]"
          style={{ width, height: stageHeight, maxWidth: "100%" }}
        />
      </div>
    </div>
  );
}
