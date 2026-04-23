import { useRef, useState, type JSX } from "react";

/**
 * Figma: centered portfolio + 3-up carousel. Vite + React. For **Next.js App
 * Router** add `"use client"` (uses `useState`).
 */
const IMG_MAIN =
  "https://www.figma.com/api/mcp/asset/80605b5c-5b84-421c-8f4c-31ad11b49b8b";
const IMG_SIDE_A =
  "https://www.figma.com/api/mcp/asset/58e12c0b-428e-4b32-ae73-2488b8186364";
const IMG_SIDE_B =
  "https://www.figma.com/api/mcp/asset/e2aa38e3-7274-45e1-b9b7-c099141bc87d";
const IMG_CIRCLE =
  "https://www.figma.com/api/mcp/asset/13570e5f-6242-44c0-9c20-179493cdae13";
const IMG_ARROW_L =
  "https://www.figma.com/api/mcp/asset/41939ffc-be4f-4db3-8934-5077618d9622";
const IMG_ARROW_R =
  "https://www.figma.com/api/mcp/asset/7f91ffad-df5e-4633-83dd-81d3f6814fea";
const IMG_LINK_ARROW =
  "https://www.figma.com/api/mcp/asset/befb8d85-ac99-418e-86da-46b24d017169";

const SWIPE_MIN_PX = 40;

export interface ProjectsSection3Slide {
  id: string;
  image: string;
  label: string;
}

export interface ProjectsSection3Props {
  eyebrow?: string;
  heading?: string;
  description?: string;
  /** At least 3 items recommended for the side/center/side treatment. */
  slides?: ProjectsSection3Slide[];
  viewAllText?: string;
  viewAllHref?: string;
}

const defaultSlides: ProjectsSection3Slide[] = [
  {
    id: "1",
    image: IMG_MAIN,
    label: "Full Home Renovation Kemano",
  },
  {
    id: "2",
    image: IMG_SIDE_A,
    label: "Custom Homes & Additions",
  },
  {
    id: "3",
    image: IMG_SIDE_B,
    label: "Design Build",
  },
];

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

function NavButton({
  direction,
  onClick,
  label,
  size = "md",
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
  size?: "md" | "sm";
}): JSX.Element {
  const dim = size === "sm" ? "h-10 w-10" : "h-12 w-12 sm:h-14 sm:w-14";
  const icon = direction === "prev" ? IMG_ARROW_L : IMG_ARROW_R;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex ${dim} shrink-0 items-center justify-center rounded-full text-white shadow-sm ring-1 ring-white/20 transition-transform active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fea600]`}
      aria-label={label}
    >
      <img alt="" className="absolute inset-0 h-full w-full" src={IMG_CIRCLE} />
      <img
        alt=""
        className="relative z-[1] h-3.5 w-3.5 sm:h-4 sm:w-4"
        src={icon}
        aria-hidden
      />
    </button>
  );
}

export default function ProjectsSection3(
  rawProps: ProjectsSection3Props = {},
): JSX.Element {
  const {
    eyebrow = "our portfolio",
    heading = "Remarkable Craftsmanship You Can See.",
    description = "Bendigo home and business owners love working with our team because of our detail-oriented solutions and intentional customer care.",
    slides = defaultSlides,
    viewAllText = "View All Projects",
    viewAllHref = "#",
  } = rawProps;

  const list = slides.length > 0 ? slides : defaultSlides;
  const n = list.length;
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const go = (dir: -1 | 1) => {
    setIndex((i) => mod(i + dir, n));
  };

  const center = list[mod(index, n)]!;
  const left = list[mod(index - 1, n)]!;
  const right = list[mod(index + 1, n)]!;

  return (
    <section
      className="projects-section-3 w-full bg-white font-['Inter',sans-serif] text-black antialiased"
      aria-label="Our portfolio"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 py-10 sm:px-5 sm:py-12 lg:px-6 lg:py-16">
        <header className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase leading-tight tracking-[-0.28px] text-[#fea600]">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold capitalize leading-tight tracking-tight sm:mt-4 sm:text-4xl lg:mt-5 lg:text-[48px] lg:leading-[52.8px]">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[38.5rem] text-base font-normal leading-relaxed text-[#424242] sm:mt-5 sm:leading-[22px]">
            {description}
          </p>
        </header>

        <div className="mt-8 w-full min-w-0 sm:mt-10 lg:mt-16">
          {/* Mobile + tablet: single featured card, in-frame controls, dots, swipe */}
          <div className="lg:hidden">
            <div
              className="relative w-full touch-pan-y"
              onTouchStart={(e) => {
                touchStartX.current = e.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(e) => {
                const start = touchStartX.current;
                touchStartX.current = null;
                if (start == null || n < 2) {
                  return;
                }
                const end = e.changedTouches[0]?.clientX;
                if (end == null) {
                  return;
                }
                const dx = end - start;
                if (dx > SWIPE_MIN_PX) {
                  go(-1);
                } else if (dx < -SWIPE_MIN_PX) {
                  go(1);
                }
              }}
            >
              <div className="relative w-full overflow-hidden rounded-xl border border-stone-200/80 bg-[#e7e5e4] shadow-md sm:rounded-2xl">
                <div className="relative aspect-[4/3] w-full min-h-[220px] sm:aspect-[16/10] sm:min-h-[280px] md:min-h-[320px]">
                  <img
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    src={center.image}
                    sizes="(max-width: 1023px) 100vw, 100vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.35)] to-transparent to-50%"
                    aria-hidden
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 z-[2]"
                    style={{
                      background:
                        "linear-gradient(182deg, #ffa700 12.2%, #4a4a4a 100%)",
                    }}
                  >
                    <p className="px-3 py-2.5 text-left text-[11px] font-medium uppercase leading-snug tracking-wide text-white sm:px-4 sm:py-3 sm:text-xs sm:tracking-[-0.2px] md:text-sm">
                      {center.label}
                    </p>
                  </div>
                  {n > 1 ? (
                    <>
                      <div className="absolute left-1.5 top-1/2 z-[3] -translate-y-1/2 sm:left-3 md:left-4">
                        <NavButton
                          direction="prev"
                          label="Previous project"
                          onClick={() => {
                            go(-1);
                          }}
                          size="sm"
                        />
                      </div>
                      <div className="absolute right-1.5 top-1/2 z-[3] -translate-y-1/2 sm:right-3 md:right-4">
                        <NavButton
                          direction="next"
                          label="Next project"
                          onClick={() => {
                            go(1);
                          }}
                          size="sm"
                        />
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>

            {n > 1 ? (
              <div
                className="mt-4 flex flex-col items-center gap-3 sm:mt-5 sm:gap-4"
                role="tablist"
                aria-label="Project slides"
              >
                <div className="flex max-w-full flex-wrap items-center justify-center gap-1.5 px-1 sm:gap-2">
                  {list.map((slide, i) => {
                    const selected = i === index;
                    return (
                      <button
                        key={slide.id}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        onClick={() => {
                          setIndex(i);
                        }}
                        className={
                          selected
                            ? "h-2.5 w-6 rounded-full bg-[#fea600] transition-all sm:w-8"
                            : "h-2.5 w-2.5 rounded-full bg-stone-300 transition-colors hover:bg-stone-400"
                        }
                        aria-label={`Show slide ${i + 1}`}
                      />
                    );
                  })}
                </div>
                <p className="text-center text-xs text-stone-500 sm:text-sm">
                  <span className="sr-only">Current slide: </span>
                  {index + 1} / {n}
                </p>
              </div>
            ) : null}
          </div>

          {/* Desktop: three-up with side peeks + circular controls */}
          <div className="mt-0 hidden w-full min-w-0 items-end justify-center gap-2 lg:mt-0 lg:flex lg:gap-3">
            <div className="relative min-h-0 w-full min-w-0 max-w-[200px] flex-1 scale-[0.97] overflow-hidden bg-[#e7e5e4] shadow-sm lg:max-w-[220px] xl:scale-95">
              <div className="relative aspect-[3/4] w-full min-h-0 max-h-[min(60vh,520px)]">
                <img
                  alt=""
                  className="h-full w-full object-cover"
                  src={left.image}
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-black/35"
                  aria-hidden
                />
                <div className="absolute inset-0 flex items-center justify-center p-1">
                  <NavButton
                    direction="prev"
                    label="Previous project"
                    onClick={() => {
                      go(-1);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="relative z-[1] min-h-0 w-full min-w-0 flex-[1.4] overflow-hidden bg-[#e7e5e4] shadow-lg ring-1 ring-stone-200/60">
              <div className="relative w-full min-h-0">
                <div className="relative aspect-[686/470] w-full min-h-[280px] max-h-[min(70vh,520px)]">
                  <img
                    alt=""
                    className="h-full w-full object-cover"
                    src={center.image}
                    sizes="(min-width: 1280px) 720px, 50vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] from-20% via-[rgba(0,0,0,0.2)] to-transparent to-70% opacity-90"
                    aria-hidden
                  />
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    background:
                      "linear-gradient(182deg, #ffa700 12.2%, #4a4a4a 100%)",
                  }}
                >
                  <p className="px-4 py-2.5 text-left text-xs font-medium uppercase leading-relaxed tracking-wide text-white sm:px-5 sm:text-sm sm:tracking-[-0.38px]">
                    {center.label}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-h-0 w-full min-w-0 max-w-[200px] flex-1 scale-[0.97] overflow-hidden bg-[#e7e5e4] shadow-sm lg:max-w-[220px] xl:scale-95">
              <div className="relative aspect-[3/4] w-full min-h-0 max-h-[min(60vh,520px)]">
                <img
                  alt=""
                  className="h-full w-full object-cover"
                  src={right.image}
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-black/35"
                  aria-hidden
                />
                <div className="absolute inset-0 flex items-center justify-center p-1">
                  <NavButton
                    direction="next"
                    label="Next project"
                    onClick={() => {
                      go(1);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center sm:mt-8 md:mt-9 lg:mt-10 lg:justify-end">
          <a
            className="inline-flex items-center gap-1.5 text-base font-semibold capitalize leading-snug text-[#686868] transition-colors hover:text-[#1c1917] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            href={viewAllHref}
          >
            {viewAllText}
            <img
              alt=""
              className="h-3.5 w-4"
              src={IMG_LINK_ARROW}
              aria-hidden
            />
          </a>
        </div>
      </div>
    </section>
  );
}
