import type { JSX } from "react";

/**
 * Figma: portfolio — full-width row + 3-up + 2-up image grid. React + Tailwind.
 * In **Next.js**, use `next/link` and `next/image` as needed.
 */
const IMG_HERO =
  "https://www.figma.com/api/mcp/asset/4041b494-83e7-4400-82bb-f8eeb48e1b4e";
const IMG_A =
  "https://www.figma.com/api/mcp/asset/6353ea75-78e6-4084-8619-df8ec991dcd9";
const IMG_B =
  "https://www.figma.com/api/mcp/asset/01a381d7-b3ad-4b81-9257-046a2633b0ed";
const IMG_C =
  "https://www.figma.com/api/mcp/asset/68b82aff-3379-4b3f-bb64-c4319232b3e9";
const IMG_D =
  "https://www.figma.com/api/mcp/asset/4162285f-ff25-4a4b-8db3-c67483fc210c";
const IMG_E =
  "https://www.figma.com/api/mcp/asset/b871c195-ffd0-4bf2-bc6e-405753507071";
const IMG_CTA_ARROW =
  "https://www.figma.com/api/mcp/asset/fbf712d4-63a4-4fb9-be13-26562a8f8e65";

export interface ProjectsSection2Item {
  id: string;
  image: string;
  href: string;
}

export interface ProjectsSection2Props {
  eyebrow?: string;
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  /**
   * Six images in order: (1) full-width top, (2–4) second row L→R, (5–6) third row L→R.
   */
  items?: [
    ProjectsSection2Item,
    ProjectsSection2Item,
    ProjectsSection2Item,
    ProjectsSection2Item,
    ProjectsSection2Item,
    ProjectsSection2Item,
  ];
}

const defaultItems: [
  ProjectsSection2Item,
  ProjectsSection2Item,
  ProjectsSection2Item,
  ProjectsSection2Item,
  ProjectsSection2Item,
  ProjectsSection2Item,
] = [
  { id: "1", image: IMG_HERO, href: "#" },
  { id: "2", image: IMG_A, href: "#" },
  { id: "3", image: IMG_B, href: "#" },
  { id: "4", image: IMG_C, href: "#" },
  { id: "5", image: IMG_D, href: "#" },
  { id: "6", image: IMG_E, href: "#" },
];

export default function ProjectsSection2(
  rawProps: ProjectsSection2Props = {},
): JSX.Element {
  const {
    eyebrow = "Our Portfolio",
    heading = "We Provide you the Highest Quality Work",
    description = "From custom homes to remodels and additions, we deliver inspector-backed construction that ensures quality, safety, and lasting value for your family.",
    ctaText = "see All Projects",
    ctaHref = "#",
    items = defaultItems,
  } = rawProps;

  const [hero, r2a, r2b, r2c, r3a, r3b] = items;
  const row2 = [r2a, r2b, r2c];
  const row3 = [r3a, r3b];

  return (
    <section
      className="projects-section-2 w-full bg-white font-['Inter',sans-serif] text-[#131212] antialiased"
      aria-label="Our portfolio"
    >
      <div className="mx-auto w-full max-w-[1128px] px-4 py-10 sm:px-5 sm:py-12 lg:px-6 lg:py-16">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
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
            className="group/cta inline-flex h-[50px] min-w-[12rem] shrink-0 items-center justify-center gap-2 self-start rounded-[3.75px] border border-black bg-[#ffb717] px-5 text-[11.7px] font-bold uppercase leading-[15.6px] text-black shadow-[0px_2.25px_0.75px_0.75px_rgba(0,0,0,0.16)] transition-colors hover:bg-[#e5a514] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:min-w-[191px] lg:mt-2"
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

        <div className="mt-8 w-full min-w-0 sm:mt-10 lg:mt-14">
          <div className="mx-auto flex max-w-[1076px] flex-col gap-4 sm:gap-5 lg:gap-[31px]">
            <a
              className="group relative -mx-0 block w-full min-h-[200px] overflow-hidden sm:min-h-[300px] lg:aspect-[1076/380] lg:min-h-0"
              href={hero.href}
            >
              <img
                alt=""
                className="h-full w-full min-h-[200px] object-cover transition-transform duration-500 group-hover:scale-[1.02] sm:min-h-[300px] lg:min-h-0 lg:object-cover"
                src={hero.image}
                loading="lazy"
              />
            </a>

            <div className="grid w-full auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-[13px]">
              {row2.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="group relative -mx-0 block min-h-[220px] overflow-hidden sm:min-h-[260px] lg:aspect-[350/359] lg:min-h-0"
                >
                  <img
                    alt=""
                    className="h-full w-full min-h-[220px] object-cover transition-transform duration-500 group-hover:scale-[1.02] sm:min-h-[260px] lg:min-h-0"
                    src={item.image}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>

            <div className="grid w-full auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:gap-5">
              {row3.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="group relative -mx-0 block min-h-[220px] overflow-hidden sm:min-h-[280px] lg:aspect-[528/359] lg:min-h-0"
                >
                  <img
                    alt=""
                    className="h-full w-full min-h-[220px] object-cover transition-transform duration-500 group-hover:scale-[1.02] sm:min-h-[280px] lg:min-h-0"
                    src={item.image}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
