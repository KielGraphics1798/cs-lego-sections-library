import { useEffect, useRef, useState, type JSX } from "react";

/**
 * Figma: dark "Project Gallery" with hero image + 3 project cards. React + Tailwind.
 * For **Next.js App Router** add `"use client"` (carousel state + touch).
 */
const BG_IMAGE =
  "https://www.figma.com/api/mcp/asset/068b6d46-f2f4-4bab-931e-2d72d9513ffb";
const IMG_LEFT =
  "https://www.figma.com/api/mcp/asset/4d825127-ebf1-409d-8559-647d95f4f7b4";
const IMG_CENTER =
  "https://www.figma.com/api/mcp/asset/ce7a5666-1909-4851-9f86-d4a9fd7caa7e";
const IMG_RIGHT =
  "https://www.figma.com/api/mcp/asset/461d777b-8eab-450d-b266-79cab73098c8";

const SWIPE_PX = 45;

const IMG_CTA_ARROW =
  "https://www.figma.com/api/mcp/asset/d94106ee-1e4f-4494-8579-f5ee6c0d32c4";

export interface ProjectsSection4Item {
  id: string;
  image: string;
  title: string;
  /** Use `\n` for a second line of metadata. */
  meta: string;
  href?: string;
}

export interface ProjectsSection4Props {
  introLine?: string;
  heading?: string;
  description?: string;
  items?: ProjectsSection4Item[];
  backgroundImage?: string;
  ctaText?: string;
  ctaHref?: string;
}

const defaultItems: ProjectsSection4Item[] = [
  {
    id: "1",
    image: IMG_LEFT,
    title: "Jacks Point, McKellar",
    meta: "Jacks Point, McKellar, Ben Hudson Architects\nResidential luxury details.",
    href: "#",
  },
  {
    id: "2",
    image: IMG_CENTER,
    title: "Hackett Road, Jacks Point",
    meta: "Ben Hudson Architects — Residential",
    href: "#",
  },
  {
    id: "3",
    image: IMG_RIGHT,
    title: "Stockyard Lane",
    meta: "Jacks Point Residential",
    href: "#",
  },
];

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

function ProjectCardContent({
  item,
  featured,
}: {
  item: ProjectsSection4Item;
  featured?: boolean;
}): JSX.Element {
  const lines = item.meta.split("\n").map((l) => l.trim()).filter(Boolean);
  return (
    <>
      <div
        className={
          featured
            ? "relative w-full min-h-[240px] overflow-hidden rounded-md sm:min-h-[320px] sm:rounded-lg lg:min-h-0 lg:aspect-[430/468] lg:rounded-md"
            : "relative w-full min-h-[200px] overflow-hidden rounded-md sm:min-h-[260px] sm:rounded-lg lg:aspect-[433/312] lg:rounded-md"
        }
      >
        <img
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
          src={item.image}
          loading="lazy"
        />
      </div>
      <div className="mt-3 pr-1 sm:mt-3.5 lg:mt-4">
        <h3
          className="text-lg font-bold leading-tight text-white sm:text-[19px] sm:leading-[25.35px] sm:tracking-[-0.39px] font-['Arimo',sans-serif]"
        >
          {item.title}
        </h3>
        <div className="mt-1.5 text-xs font-normal leading-[15.6px] tracking-[-0.12px] text-[#a6a4a2] sm:mt-2 font-['Arimo',sans-serif]">
          {lines.map((line, j) => (
            <p key={`${item.id}-meta-${j}`} className="mb-0 last:mb-0">
              {line}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default function ProjectsSection4(
  rawProps: ProjectsSection4Props = {},
): JSX.Element {
  const {
    introLine = "Architectural New Builds from our Queenstown build team",
    heading = "Project Gallery.",
    description = `We’re proud to have worked on a range of architectural residential builds throughout the Queenstown region and have enjoyed bringing each project and vision to life. Explore our work below.`,
    items = defaultItems,
    backgroundImage = BG_IMAGE,
    ctaText = "View All Projects",
    ctaHref = "#",
  } = rawProps;

  const n = items.length;
  const desktopItems = items.slice(0, 3);
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

  return (
    <section
      className="projects-section-4 relative w-full min-h-[min(100vh,880px)] overflow-hidden font-['Arimo',sans-serif] text-white antialiased"
      aria-label="Project gallery"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          alt=""
          className="absolute h-full w-full min-h-full object-cover"
          src={backgroundImage}
        />
        <div
          className="absolute inset-0 bg-[#131212]/[0.99]"
          style={{ minHeight: "100%" }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16 xl:px-11">
        <div className="flex flex-col gap-6 pb-2 lg:flex-row lg:items-end lg:justify-between lg:gap-8 lg:pb-4">
          <div className="max-w-xl shrink-0">
            <p className="text-xs font-bold uppercase leading-snug tracking-[-0.12px] text-white sm:text-[12px] sm:leading-[14.4px]">
              {introLine}
            </p>
            <h2 className="mt-3 text-[2rem] font-bold leading-[1.05] text-white sm:mt-4 sm:text-4xl sm:leading-[1.1] lg:text-[51.9px] lg:leading-[54px] lg:tracking-[-2.16px]">
              {heading}
            </h2>
          </div>
          <p className="max-w-md self-start text-left text-sm font-normal leading-relaxed text-[#e4e4e3] sm:max-w-lg sm:text-[13.5px] sm:leading-[17.55px] sm:tracking-[-0.27px] lg:max-w-[24rem] lg:pb-1 lg:text-right">
            {description}
          </p>
        </div>

        {/* Mobile / tablet: one column carousel (track width = n×viewport for correct % math) */}
        <div className="mt-8 w-full min-w-0 sm:mt-10 lg:mt-14 lg:hidden">
          <div className="relative w-full min-w-0 max-w-full">
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
              <div
                className="w-full min-w-0 max-w-full overflow-hidden rounded-md sm:rounded-lg"
                style={{ maxWidth: "100%" }}
              >
                <div
                  className="flex transition-transform duration-500 ease-out will-change-transform"
                  style={{
                    width: n > 0 ? `${n * 100}%` : "100%",
                    transform: `translateX(-${n > 0 ? (index * 100) / n : 0}%)`,
                  }}
                >
                  {items.map((item) => {
                    const href = item.href ?? "#";
                    return (
                      <div
                        key={item.id}
                        className="box-border min-w-0 flex-none px-0.5"
                        style={{
                          width: n > 0 ? `${100 / n}%` : "100%",
                        }}
                      >
                        <a
                          className="block text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fcedc5]"
                          href={href}
                          draggable={false}
                        >
                          <ProjectCardContent item={item} featured={false} />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {n > 1 ? (
            <div
              className="mt-5 flex items-center justify-center gap-3 sm:mt-6 sm:gap-4"
            >
              <button
                type="button"
                onClick={() => {
                  go(-1);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
                {items.map((item, i) => (
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
                        ? "h-2.5 min-w-6 rounded-full bg-[#fcedc5] px-1.5 sm:min-w-7"
                        : "h-1.5 w-1.5 rounded-full bg-[#545250] sm:h-[6px] sm:w-[6px]"
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Next project"
              >
                <span className="text-lg leading-none" aria-hidden>
                  →
                </span>
              </button>
            </div>
          ) : null}
        </div>

        {/* Desktop: three columns, center image taller (when 3+ items) */}
        <div
          className={
            desktopItems.length === 1
              ? "mt-8 hidden w-full min-w-0 sm:mt-10 lg:mt-14 lg:block lg:max-w-xl lg:mx-auto"
              : desktopItems.length === 2
                ? "mt-8 hidden w-full min-w-0 items-end gap-4 sm:mt-10 lg:mt-14 lg:grid lg:grid-cols-2 lg:gap-6"
                : "mt-8 hidden w-full min-w-0 items-end gap-4 sm:mt-10 lg:mt-14 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)_minmax(0,1.05fr)] lg:gap-4 xl:gap-6"
          }
        >
          {desktopItems.map((item, i) => {
            const href = item.href ?? "#";
            const count = desktopItems.length;
            const featured =
              count >= 3 ? i === 1 : count === 1 ? true : i === 0;
            return (
              <a
                key={item.id}
                className={
                  featured
                    ? "group -mb-0 block w-full min-w-0 self-end text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fcedc5] lg:mb-2 lg:scale-[1.02]"
                    : "group block h-full w-full min-w-0 self-end text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fcedc5]"
                }
                href={href}
              >
                <ProjectCardContent item={item} featured={featured} />
              </a>
            );
          })}
        </div>

        <div className="mt-6 flex w-full min-w-0 flex-wrap items-center justify-end gap-2 sm:mt-8">
          <a
            className="inline-flex items-center gap-1.5 font-['Inter',sans-serif] text-base font-semibold capitalize leading-snug text-[#ffb717] transition-colors hover:text-[#ffc84d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffb717] sm:text-[16.3px] sm:leading-[21.7px]"
            href={ctaHref}
          >
            {ctaText}
            <img
              alt=""
              className="h-3.5 w-4"
              src={IMG_CTA_ARROW}
              aria-hidden
            />
          </a>
        </div>
      </div>
    </section>
  );
}
