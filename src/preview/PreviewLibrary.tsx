import { useEffect, useMemo, useState, type JSX } from "react";
import {
  AboveTheFoldSection1,
  AboveTheFoldSection2,
  AboveTheFoldSection3,
  AboveTheFoldSection4,
  AboveTheFoldSection5,
} from "../sections/above-the-fold";
import {
  AboutSection1,
  AboutSection2,
  AboutSection3,
  AboutSection4,
  AboutSection5,
} from "../sections/about";
import {
  WhyChooseUsSection1,
  WhyChooseUsSection2,
  WhyChooseUsSection3,
  WhyChooseUsSection4,
  WhyChooseUsSection5,
} from "../sections/why-choose-us";
import {
  ServicesSection1,
  ServicesSection2,
  ServicesSection3,
  ServicesSection4,
  ServicesSection5,
} from "../sections/services";
import {
  ProcessSection1,
  ProcessSection2,
  ProcessSection3,
  ProcessSection4,
  ProcessSection5,
} from "../sections/process";
import {
  PreConsultationSection1,
  PreConsultationSection2,
  PreConsultationSection3,
  PreConsultationSection4,
  PreConsultationSection5,
} from "../sections/pre-consultation";
import {
  GuaranteeSection1,
  GuaranteeSection2,
  GuaranteeSection3,
  GuaranteeSection4,
  GuaranteeSection5,
} from "../sections/guarantee";
import {
  ProjectsSection1,
  ProjectsSection2,
  ProjectsSection3,
  ProjectsSection4,
  ProjectsSection5,
} from "../sections/projects";
import {
  TestimonialsSection1,
  TestimonialsSection2,
  TestimonialsSection3,
  TestimonialsSection4,
  TestimonialsSection5,
} from "../sections/testimonials";
import {
  FAQSection1,
  FAQSection2,
  FAQSection3,
  FAQSection4,
  FAQSection5,
} from "../sections/faq";
import {
  BlogSection1,
  BlogSection2,
  BlogSection3,
  BlogSection4,
  BlogSection5,
} from "../sections/blog";
import {
  FinalCTASection1,
  FinalCTASection2,
  FinalCTASection3,
  FinalCTASection4,
  FinalCTASection5,
} from "../sections/final-cta";
import {
  FooterSection1,
  FooterSection2,
  FooterSection3,
  FooterSection4,
  FooterSection5,
} from "../sections/footer";

type SectionComponent = () => JSX.Element;

const sectionComponents = {
  "above-the-fold": [
    AboveTheFoldSection1,
    AboveTheFoldSection2,
    AboveTheFoldSection3,
    AboveTheFoldSection4,
    AboveTheFoldSection5,
  ],
  about: [AboutSection1, AboutSection2, AboutSection3, AboutSection4, AboutSection5],
  "why-choose-us": [
    WhyChooseUsSection1,
    WhyChooseUsSection2,
    WhyChooseUsSection3,
    WhyChooseUsSection4,
    WhyChooseUsSection5,
  ],
  services: [ServicesSection1, ServicesSection2, ServicesSection3, ServicesSection4, ServicesSection5],
  process: [ProcessSection1, ProcessSection2, ProcessSection3, ProcessSection4, ProcessSection5],
  "pre-consultation": [
    PreConsultationSection1,
    PreConsultationSection2,
    PreConsultationSection3,
    PreConsultationSection4,
    PreConsultationSection5,
  ],
  guarantee: [GuaranteeSection1, GuaranteeSection2, GuaranteeSection3, GuaranteeSection4, GuaranteeSection5],
  projects: [ProjectsSection1, ProjectsSection2, ProjectsSection3, ProjectsSection4, ProjectsSection5],
  testimonials: [
    TestimonialsSection1,
    TestimonialsSection2,
    TestimonialsSection3,
    TestimonialsSection4,
    TestimonialsSection5,
  ],
  faq: [FAQSection1, FAQSection2, FAQSection3, FAQSection4, FAQSection5],
  blog: [BlogSection1, BlogSection2, BlogSection3, BlogSection4, BlogSection5],
  "final-cta": [FinalCTASection1, FinalCTASection2, FinalCTASection3, FinalCTASection4, FinalCTASection5],
  footer: [FooterSection1, FooterSection2, FooterSection3, FooterSection4, FooterSection5],
} satisfies Record<string, SectionComponent[]>;

type CategoryKey = keyof typeof sectionComponents;

const sectionCategories = [
  { key: "above-the-fold", label: "Above the Fold" },
  { key: "about", label: "About" },
  { key: "why-choose-us", label: "Why Choose Us" },
  { key: "services", label: "Services" },
  { key: "process", label: "Process" },
  { key: "pre-consultation", label: "Pre-Consultation" },
  { key: "guarantee", label: "Guarantee" },
  { key: "projects", label: "Projects" },
  { key: "testimonials", label: "Testimonials" },
  { key: "faq", label: "FAQ" },
  { key: "blog", label: "Blog" },
  { key: "final-cta", label: "Final CTA" },
  { key: "footer", label: "Footer" },
] as const satisfies readonly { key: CategoryKey; label: string }[];

const variantLabels = ["Section1", "Section2", "Section3", "Section4", "Section5"];

/**
 * Viewport modes drive the stage:
 * - `fluid`: render section inline at the actual browser viewport width (no chrome).
 *   This is closest to how the section will appear on a real production page.
 * - `card`: legacy chrome wrapper (`max-w-[1400px]` + padding). Useful for thumbnails / context.
 * - `1920..375`: render section inside an `<iframe>` whose width is fixed.
 *   Tailwind responsive classes respect the iframe's own viewport, so this *actually* simulates
 *   real screen breakpoints (a plain `width: 1024px` div would not).
 */
type ViewportMode = "fluid" | "card" | 1920 | 1440 | 1280 | 1024 | 768 | 375;

const viewportModes: { value: ViewportMode; label: string; sub?: string }[] = [
  { value: "fluid", label: "Fluid", sub: "real viewport" },
  { value: 1920, label: "1920", sub: "desktop XL" },
  { value: 1440, label: "1440", sub: "desktop" },
  { value: 1280, label: "1280", sub: "laptop" },
  { value: 1024, label: "1024", sub: "tablet ↔" },
  { value: 768, label: "768", sub: "tablet" },
  { value: 375, label: "375", sub: "mobile" },
  { value: "card", label: "Card", sub: "framed" },
];

function isCategoryKey(value: string | null): value is CategoryKey {
  return value != null && value in sectionComponents;
}

function readBareParams(): { category: CategoryKey; variant: number } | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  if (params.get("bare") !== "1") return null;
  const cat = params.get("cat");
  const variant = Number.parseInt(params.get("v") ?? "0", 10);
  if (!isCategoryKey(cat)) return null;
  if (Number.isNaN(variant)) return null;
  return { category: cat, variant };
}

export default function PreviewLibrary(): JSX.Element {
  const bare = useMemo(readBareParams, []);

  if (bare) {
    const variants = sectionComponents[bare.category];
    const Component = variants[bare.variant] ?? variants[0];
    return (
      <div className="w-full">
        <Component />
      </div>
    );
  }

  return <PreviewLibraryShell />;
}

function PreviewLibraryShell(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>(sectionCategories[0].key);
  const [activeVariant, setActiveVariant] = useState(0);
  const [viewport, setViewport] = useState<ViewportMode>("fluid");

  const CurrentSection = useMemo(() => {
    const variants = sectionComponents[activeCategory] ?? [];
    return variants[activeVariant] ?? variants[0];
  }, [activeCategory, activeVariant]);

  const bareUrl = useMemo(
    () => `${window.location.pathname}?bare=1&cat=${activeCategory}&v=${activeVariant}`,
    [activeCategory, activeVariant],
  );

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-[#141414]">
      <header className="sticky top-0 z-30 border-b border-[#e3e3e3] bg-white/95 px-4 py-4 backdrop-blur-md shadow-[0px_4px_14px_rgba(0,0,0,0.04)]">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h1 className="text-[18px] font-semibold tracking-[-0.3px]">Section Library Preview</h1>
              <p className="mt-0.5 text-[12px] text-[#5a5a5a]">
                Pick a category &amp; variant, then choose a viewport to preview at real screen width.
              </p>
            </div>
            <a
              className="hidden shrink-0 items-center gap-1 rounded-[8px] border border-[#dedede] bg-white px-3 py-1.5 text-[12px] font-medium text-[#2b2b2b] hover:border-[#141414] hover:text-[#141414] sm:inline-flex"
              href={bareUrl}
              target="_blank"
              rel="noreferrer"
              title="Open this section bare in a new tab — uses the actual browser viewport width."
            >
              Open in new tab ↗
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {sectionCategories.map((category) => {
              const isActive = activeCategory === category.key;
              return (
                <button
                  key={category.key}
                  className={`rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition ${
                    isActive
                      ? "border-[#141414] bg-[#141414] text-white shadow-[0px_4px_12px_rgba(0,0,0,0.16)]"
                      : "border-[#d6d6d6] bg-white text-[#2b2b2b] hover:border-[#141414] hover:text-[#141414]"
                  }`}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category.key);
                    setActiveVariant(0);
                  }}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.08em] text-[#7a7a7a]">Variant</span>
            {variantLabels.map((label, index) => {
              const isActive = activeVariant === index;
              return (
                <button
                  key={label}
                  className={`rounded-[8px] border px-3 py-1.5 text-[12.5px] font-semibold transition ${
                    isActive
                      ? "border-[#ffb717] bg-[#ffb717] text-[#141414] shadow-[0px_4px_10px_rgba(255,183,23,0.35)]"
                      : "border-[#dedede] bg-white text-[#3a3a3a] hover:border-[#ffb717]"
                  }`}
                  type="button"
                  onClick={() => setActiveVariant(index)}
                >
                  {label}
                </button>
              );
            })}

            <span className="ml-2 text-[11px] uppercase tracking-[0.08em] text-[#7a7a7a]">Viewport</span>
            {viewportModes.map((mode) => {
              const isActive = viewport === mode.value;
              return (
                <button
                  key={String(mode.value)}
                  className={`group flex flex-col items-start rounded-[8px] border px-3 py-1 text-left text-[12.5px] font-semibold leading-tight transition ${
                    isActive
                      ? "border-[#0e6cf6] bg-[#0e6cf6] text-white shadow-[0px_4px_10px_rgba(14,108,246,0.32)]"
                      : "border-[#dedede] bg-white text-[#3a3a3a] hover:border-[#0e6cf6]"
                  }`}
                  type="button"
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
      </header>

      <main className="w-full">
        <Stage viewport={viewport} bareUrl={bareUrl} CurrentSection={CurrentSection} />
      </main>
    </div>
  );
}

function Stage({
  viewport,
  bareUrl,
  CurrentSection,
}: {
  viewport: ViewportMode;
  bareUrl: string;
  CurrentSection: SectionComponent | undefined;
}): JSX.Element {
  if (viewport === "fluid") {
    return (
      <section aria-label="Live preview at real viewport width" className="w-full bg-white">
        {CurrentSection ? <CurrentSection /> : <EmptyState />}
      </section>
    );
  }

  if (viewport === "card") {
    return (
      <div className="mx-auto w-full max-w-[1400px] px-4 py-6">
        <div className="rounded-[18px] border border-[#e3e3e3] bg-white p-4 shadow-[0px_18px_40px_rgba(15,15,15,0.08)]">
          <div className="overflow-hidden rounded-[14px] border border-[#ededed] bg-white">
            {CurrentSection ? <CurrentSection /> : <EmptyState />}
          </div>
        </div>
      </div>
    );
  }

  return <IframeStage width={viewport} src={bareUrl} />;
}

function IframeStage({ width, src }: { width: number; src: string }): JSX.Element {
  const [stageHeight, setStageHeight] = useState<number>(900);

  useEffect(() => {
    const compute = () =>
      setStageHeight(Math.max(600, (typeof window !== "undefined" ? window.innerHeight : 1080) - 240));
    compute();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", compute);
      return () => window.removeEventListener("resize", compute);
    }
    return undefined;
  }, []);

  return (
    <div className="w-full overflow-x-auto bg-[#eef0f3]">
      <div className="mx-auto flex flex-col items-center gap-2 px-4 py-6" style={{ width: Math.max(width + 32, 0) }}>
        <div className="flex w-full items-center justify-between text-[11px] uppercase tracking-[0.08em] text-[#5a5a5a]">
          <span>Simulated viewport</span>
          <span className="font-semibold text-[#141414]">{width}px wide</span>
        </div>
        <iframe
          key={`${src}-${width}`}
          title={`Section preview at ${width}px`}
          src={src}
          className="block rounded-[10px] border border-[#dcdfe4] bg-white shadow-[0px_18px_40px_rgba(15,15,15,0.08)]"
          style={{ width, height: stageHeight, maxWidth: "100%" }}
        />
      </div>
    </div>
  );
}

function EmptyState(): JSX.Element {
  return <div className="p-10 text-center text-[#888]">Section not available.</div>;
}
