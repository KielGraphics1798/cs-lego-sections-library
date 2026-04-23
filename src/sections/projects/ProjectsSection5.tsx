import { useEffect, useRef, useState, type JSX } from "react";

/**
 * Figma: "Recent Projects" — [Lego-Blocks-Elementor-Section-Library / 125:527](https://www.figma.com/design/RInqwZgOuH2RI1VPEq6ZtH/Lego-Blocks-Elementor-Section-Library?node-id=125-527).
 * Four-up image row (flush), hover overlay, dark CTA bar. Vite + React + Tailwind.
 * For **Next.js App Router**: add `"use client"`; replace `<a>` with `next/link` and `<img>` with
 * `next/image` (fill + sizes) for production.
 */
const imgImage07Jpg =
  "https://www.figma.com/api/mcp/asset/42e3a7c5-3119-4b44-9a81-e03e8cd23d0c";
const imgImage04Jpg =
  "https://www.figma.com/api/mcp/asset/52c6aa5e-2639-4f0a-84e5-4857c1b644f5";
const imgImage05Jpg =
  "https://www.figma.com/api/mcp/asset/b044a5c3-a013-4278-92a6-84a52083e979";
const imgImage06Jpg =
  "https://www.figma.com/api/mcp/asset/f17bab29-726d-4ad7-8fea-3dfb941fda97";

const SWIPE_PX = 45;

export interface ProjectsSection5Item {
  id: string;
  image: string;
  /** Shown on hover overlay (e.g. Design and Build). */
  title: string;
  href: string;
}

export interface ProjectsSection5Props {
  heading?: string;
  /** One or two paragraphs; use `\n\n` to split. */
  description?: string;
  items?: ProjectsSection5Item[];
  /** Label on each tile (overlay pill). */
  viewProjectLabel?: string;
  exploreTitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

const defaultItems: ProjectsSection5Item[] = [
  {
    id: "1",
    image: imgImage07Jpg,
    title: "Design and Build",
    href: "#",
  },
  {
    id: "2",
    image: imgImage04Jpg,
    title: "Garden Renovation",
    href: "#",
  },
  {
    id: "3",
    image: imgImage05Jpg,
    title: "Interior Renovation",
    href: "#",
  },
  {
    id: "4",
    image: imgImage06Jpg,
    title: "Solar Systems",
    href: "#",
  },
];

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

function ProjectTile({
  item,
  viewLabel,
}: {
  item: ProjectsSection5Item;
  viewLabel: string;
}): JSX.Element {
  return (
    <a
      href={item.href}
      className="group relative block aspect-[360/240] w-full min-h-[200px] min-w-0 overflow-hidden bg-neutral-200 sm:min-h-[220px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4bc16] lg:min-h-0"
    >
      <img
        alt=""
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
        src={item.image}
        loading="lazy"
        draggable={false}
      />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center bg-[rgba(38,38,40,0.5)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        aria-hidden
      >
        <p className="mb-3 px-2 text-center text-sm font-normal leading-6 text-white font-['Raleway',sans-serif] sm:mb-4">
          {item.title}
        </p>
        <span className="inline-flex min-h-[49px] min-w-[148px] items-center justify-center rounded-full border border-solid border-[#e2e6e7] px-4 text-xs font-bold uppercase leading-none tracking-wide text-white font-['Raleway',sans-serif] sm:tracking-[1px]">
          {viewLabel}
        </span>
      </div>
    </a>
  );
}

export default function ProjectsSection5(
  rawProps: ProjectsSection5Props = {},
): JSX.Element {
  const {
    heading = "Recent Projects",
    description = `Here are a few of many projects we have completed for our customers. We provide a professional service which includes consultation, free estimate, design, supply of materials and installation.`,
    items = defaultItems,
    viewProjectLabel = "View Project",
    exploreTitle = "Explore our projects",
    ctaText = "View all projects",
    ctaHref = "#",
  } = rawProps;

  const list = items.length > 0 ? items : defaultItems;
  const n = list.length;
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const touchY = useRef<number | null>(null);

  const go = (dir: -1 | 1) => {
    setIndex((i) => mod(i + dir, n));
  };

  useEffect(() => {
    if (n > 0) {
      setIndex((i) => (i < n ? i : 0));
    }
  }, [n]);

  const descParts = description
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section
      className="projects-section-5 w-full bg-white font-['Raleway',sans-serif] text-[#131212] antialiased"
      aria-label="Recent projects"
    >
      <div className="mx-auto w-full max-w-[1170px] px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-12 lg:px-8 lg:pb-0 lg:pt-14">
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-9">
          <div className="flex w-full flex-col items-center gap-5 sm:gap-6">
            <h2 className="text-center text-3xl font-semibold uppercase leading-10 text-black sm:text-4xl sm:leading-[40px] md:text-[48px]">
              {heading}
            </h2>
            <div
              className="h-0.5 w-20 shrink-0 bg-[#f4bc16]"
              aria-hidden
            />
          </div>
          <div className="max-w-[48rem] text-center text-base font-normal leading-[26px] text-[#444]">
            {descParts.length > 0
              ? descParts.map((p, j) => (
                  <p key={j} className="mb-0 last:mb-0">
                    {p}
                  </p>
                ))
              : (
                <p>{description}</p>
              )}
          </div>
        </div>
      </div>

      {/* Mobile / tablet: one column carousel */}
      <div className="mt-8 w-full min-w-0 sm:mt-9 lg:mt-12 lg:hidden">
        <div className="w-full min-w-0 max-w-full px-0">
          <div
            className="select-none [touch-action:manipulation]"
            onTouchStart={(e) => {
              touchX.current = e.touches[0]?.clientX ?? null;
              touchY.current = e.touches[0]?.clientY ?? null;
            }}
            onTouchEnd={(e) => {
              const s = touchX.current;
              const sy = touchY.current;
              touchX.current = null;
              touchY.current = null;
              if (s == null || n < 2) {
                return;
              }
              const x = e.changedTouches[0]?.clientX;
              const y = e.changedTouches[0]?.clientY;
              if (x == null) {
                return;
              }
              const dx = x - s;
              const dy = y != null && sy != null ? y - sy : 0;
              if (Math.abs(dx) < SWIPE_PX) {
                return;
              }
              if (Math.abs(dy) > Math.abs(dx) * 1.2) {
                return;
              }
              if (dx > 0) {
                go(-1);
              } else {
                go(1);
              }
            }}
          >
            <div className="w-full min-w-0 max-w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out will-change-transform"
                style={{
                  width: n > 0 ? `${n * 100}%` : "100%",
                  transform: `translateX(-${n > 0 ? (index * 100) / n : 0}%)`,
                }}
              >
                {list.map((item) => (
                  <div
                    key={item.id}
                    className="box-border min-w-0 flex-none px-0"
                    style={{ width: n > 0 ? `${100 / n}%` : "100%" }}
                  >
                    <ProjectTile
                      item={item}
                      viewLabel={viewProjectLabel}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {n > 1 ? (
          <div className="mt-5 flex items-center justify-center gap-3 px-4 sm:mt-6 sm:gap-4">
            <button
              type="button"
              onClick={() => {
                go(-1);
              }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#1e1e1e]/15 bg-white text-sm font-bold text-[#1e1e1e] shadow-sm transition hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4bc16]"
              aria-label="Previous project"
            >
              <span className="text-lg leading-none" aria-hidden>
                ←
              </span>
            </button>
            <div
              className="flex flex-1 items-center justify-center gap-1.5 sm:max-w-md"
              role="tablist"
              aria-label="Slides"
            >
              {list.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  onClick={() => {
                    setIndex(i);
                  }}
                  className={
                    i === index
                      ? "h-2.5 min-w-6 rounded-full bg-[#f4bc16] px-1.5 sm:min-w-7"
                      : "h-1.5 w-1.5 rounded-full bg-[#c4c4c4] sm:h-[6px] sm:w-[6px]"
                  }
                  aria-label={`Project ${i + 1} of ${n}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                go(1);
              }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#1e1e1e]/15 bg-white text-sm font-bold text-[#1e1e1e] shadow-sm transition hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4bc16]"
              aria-label="Next project"
            >
              <span className="text-lg leading-none" aria-hidden>
                →
              </span>
            </button>
          </div>
        ) : null}
      </div>

      {/* Desktop: four flush columns, full width — matches Figma full-bleed strip */}
      <div className="mt-0 hidden w-full min-w-0 lg:mt-12 lg:grid lg:grid-cols-4">
        {list.map((item) => (
          <ProjectTile
            key={item.id}
            item={item}
            viewLabel={viewProjectLabel}
          />
        ))}
      </div>

      <div className="mt-0 w-full bg-[#1e1e1e] py-10 sm:py-11 md:py-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-5 px-4 sm:gap-6 md:flex-row md:gap-8 lg:max-w-5xl lg:px-6">
          <h3 className="text-center text-lg font-semibold uppercase leading-8 text-white sm:text-[20px] sm:leading-9 md:text-left md:text-[22px] md:leading-[34px] md:tracking-wide">
            {exploreTitle}
          </h3>
          <a
            className="inline-flex min-h-[48px] min-w-[min(100%,184px)] shrink-0 items-center justify-center rounded-full border border-[#f4bc16] bg-[#ffb900] px-6 py-2.5 text-center text-xs font-bold uppercase leading-none text-white transition-colors hover:bg-[#e5a800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:tracking-wide md:px-8 md:py-3 md:tracking-[1px]"
            href={ctaHref}
          >
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
