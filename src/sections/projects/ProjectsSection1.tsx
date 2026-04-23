import type { JSX } from "react";

/**
 * Figma: portfolio bento grid + CTA. React + Tailwind. For **Next.js**, use
 * `next/link` / `next/image` where appropriate.
 */
const IMG_1 =
  "https://www.figma.com/api/mcp/asset/14145c7f-0d38-4cee-a58f-138949f02242";
const IMG_2 =
  "https://www.figma.com/api/mcp/asset/e82c230a-95cb-4cf7-a2ab-2c35c06e5d03";
const IMG_3 =
  "https://www.figma.com/api/mcp/asset/e1ad27a3-3489-46e0-829c-0e0a53b0a7e9";
const IMG_4 =
  "https://www.figma.com/api/mcp/asset/1fdbed61-91c5-4676-9dd8-84f1c06b2c88";
const IMG_EXPLORE_ARROW =
  "https://www.figma.com/api/mcp/asset/99254966-5c1b-4c06-b13c-c6e81c8e19dc";
const IMG_CTA_ARROW =
  "https://www.figma.com/api/mcp/asset/52d1b3a6-b4ac-4ce6-8381-b28b285b22ef";

export interface ProjectsSection1Item {
  id: string;
  image: string;
  title: string;
  href: string;
}

export interface ProjectsSection1Props {
  eyebrow?: string;
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  /** Four cards: wide–narrow on row 1, narrow–wide on row 2 (Figma bento). */
  items?: [ProjectsSection1Item, ProjectsSection1Item, ProjectsSection1Item, ProjectsSection1Item];
}

const defaultItems: [
  ProjectsSection1Item,
  ProjectsSection1Item,
  ProjectsSection1Item,
  ProjectsSection1Item,
] = [
  { id: "1", image: IMG_1, title: "Custom Homes", href: "#" },
  { id: "2", image: IMG_2, title: "Full Home Renovations", href: "#" },
  { id: "3", image: IMG_3, title: "Home Additions", href: "#" },
  { id: "4", image: IMG_4, title: "Design Build", href: "#" },
];

function itemCellClass(index: number): string {
  switch (index) {
    case 0:
      return "lg:col-span-2 lg:row-start-1 min-h-[280px] sm:min-h-[360px] lg:min-h-[500px]";
    case 1:
      return "lg:col-span-1 lg:row-start-1 min-h-[240px] sm:min-h-[300px] lg:min-h-[500px]";
    case 2:
      return "lg:col-span-1 lg:row-start-2 min-h-[240px] sm:min-h-[300px] lg:min-h-[400px]";
    case 3:
    default:
      return "lg:col-span-2 lg:row-start-2 min-h-[280px] sm:min-h-[320px] lg:min-h-[400px]";
  }
}

export default function ProjectsSection1(
  rawProps: ProjectsSection1Props = {},
): JSX.Element {
  const {
    eyebrow = "Our Portfolio",
    heading = "We Provide you the Highest Quality Work",
    description = "From custom homes to remodels and additions, we deliver inspector-backed construction that ensures quality, safety, and lasting value for your family.",
    ctaText = "see All Projects",
    ctaHref = "#",
    items = defaultItems,
  } = rawProps;

  return (
    <section
      className="projects-section-1 w-full bg-[#fafaf9] font-['Inter',sans-serif] text-[#131212] antialiased"
      aria-label="Our portfolio"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-6 sm:py-12 lg:px-[72px] lg:py-16">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="min-w-0 max-w-2xl">
            <p className="text-base font-bold leading-[1.2] text-[#131212]">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-[1.9rem] font-bold capitalize leading-[1.1] sm:text-4xl lg:mt-4 lg:text-[48px] lg:leading-[45px]">
              {heading}
            </h2>
            <p className="mt-4 text-base font-normal leading-[1.2] text-[#363636] sm:mt-5 lg:max-w-[36rem] lg:leading-[18px]">
              {description}
            </p>
          </div>
          <a
            className="group/cta inline-flex h-[50px] min-w-[12rem] shrink-0 items-center justify-center gap-2 self-start rounded-[3.75px] border border-black bg-[#ffb717] px-5 text-[11.7px] font-bold uppercase leading-[15.6px] text-black shadow-[0px_2.25px_0.75px_0.75px_rgba(0,0,0,0.16)] transition-colors hover:bg-[#e5a514] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:min-w-[191px]"
            href={ctaHref}
          >
            <span className="tracking-[-0.24px]">{ctaText}</span>
            <span
              className="flex h-3.5 w-3.5 shrink-0 items-center justify-center"
              aria-hidden
            >
              <img alt="" className="h-full w-full" src={IMG_CTA_ARROW} />
            </span>
          </a>
        </div>

        <div className="mt-8 grid auto-rows-auto grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:gap-6 lg:mt-[72px] lg:grid-cols-3">
          {items.map((item, index) => (
            <a
              key={item.id}
              href={item.href}
              className={`group relative block overflow-hidden bg-[#e7e5e4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#131212] ${itemCellClass(index)}`}
            >
              <img
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                src={item.image}
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.2)] to-transparent opacity-90"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 z-[1] flex flex-col justify-end p-5 sm:p-6 lg:pb-8 lg:pl-[40px]">
                <h3 className="text-lg font-semibold text-white sm:text-[20px] sm:leading-9 sm:tracking-tight">
                  {item.title}
                </h3>
                <div className="mt-1 flex items-center gap-1.5 sm:mt-2">
                  <span className="text-xs font-bold uppercase leading-4 tracking-[1.2px] text-white">
                    Explore
                  </span>
                  <span
                    className="flex h-4 w-4 shrink-0 items-center justify-center"
                    aria-hidden
                  >
                    <img
                      alt=""
                      className="h-4 w-4"
                      src={IMG_EXPLORE_ARROW}
                    />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
