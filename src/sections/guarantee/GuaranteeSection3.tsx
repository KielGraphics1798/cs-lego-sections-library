import type { JSX } from "react";

/**
 * Figma: [Guarantee 3 / 425:857](https://www.figma.com/design/RInqwZgOuH2RI1VPEq6ZtH/Lego-Blocks-Elementor-Section-Library?node-id=425-857)
 *
 * Desktop (≥ xl): 1440 × 750 artboard — centered “Our Promise” pill, two-line title,
 * description, then a row (gap ~149px) with checklist + CTA and the seal image.
 * Below xl: same content stacks — badge → title → copy → list + CTA → seal.
 */
export interface GuaranteeItem3 {
  text: string;
  /** Optional per-item check icon; defaults to the Figma check assets in order. */
  checkIconUrl?: string;
}

export interface GuaranteeSection3Props {
  badgeText?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  guarantees?: GuaranteeItem3[];
  ctaText?: string;
  ctaHref?: string;
  sealImage?: string;
  sealAlt?: string;
}

/** Same seal asset as {@link GuaranteeSection1} / Figma `image 5` (node 425:837). */
const DEFAULT_SEAL = "/src/assets/images/image%205%20%282%29.png";
const DEFAULT_CHECK_ICONS = [
  "https://www.figma.com/api/mcp/asset/0236e564-a324-4a56-b909-7994a7c79531",
  "https://www.figma.com/api/mcp/asset/f856efc3-6a02-46b6-ae4d-1142443952e6",
  "https://www.figma.com/api/mcp/asset/1f095e99-4792-4854-b629-b14054783a52",
] as const;

const defaultDescription =
  "Starting a major renovation or custom build involves significant financial commitment. You need confidence that your builder respects your vision and budget. We established the Altevita Certainty Promise to replace construction stress with security. As a luxury home builder in Toronto, we deliver results you rely on.";

const defaultGuarantees: GuaranteeItem3[] = [
  { text: "Fixed Price Contracts" },
  { text: "Guaranteed Timelines" },
  { text: "2-Year Workmanship Warranty" },
];

const ctaClassName =
  "inline-flex h-[43.413px] w-full max-w-[259.307px] shrink-0 items-center justify-center rounded-[4.693px] border-0 bg-[#ffb717] font-['Arimo',sans-serif] text-[14.741px] font-bold leading-[19.655px] tracking-[-0.3024px] text-black shadow-[0px_2.835px_0.945px_0.945px_rgba(0,0,0,0.16)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c99710] no-underline sm:w-[259.307px]";

function CheckRow({
  text,
  iconUrl,
  layout = "default",
}: {
  text: string;
  iconUrl: string;
  layout?: "default" | "stacked";
}): JSX.Element {
  const rowClass =
    layout === "stacked"
      ? "flex w-full max-w-sm items-start justify-start gap-[14.08px] sm:max-w-md"
      : "flex items-center gap-[14.08px]";

  return (
    <div className={rowClass}>
      <div className="flex h-[23.467px] w-[23.467px] shrink-0 items-center justify-center rounded-full bg-[#e7e5e4]">
        <img alt="" className="h-[14.08px] w-[14.08px] object-contain" src={iconUrl} loading="lazy" />
      </div>
      <p className="m-0 min-w-0 max-w-[260px] text-left font-['Inter',sans-serif] text-[16.427px] font-medium leading-[1.45] text-[#44403c] sm:max-w-none sm:leading-[23.467px]">
        {text}
      </p>
    </div>
  );
}

function ListAndCtaBlock({
  guarantees,
  cta,
  align = "default",
}: {
  guarantees: GuaranteeItem3[];
  cta: JSX.Element;
  /** `stacked` = centered block for mobile / tablet; `default` = Figma width + md+ start align */
  align?: "default" | "stacked";
}): JSX.Element {
  if (align === "stacked") {
    return (
      <div className="flex w-full max-w-md flex-col items-center gap-7 sm:max-w-lg sm:gap-8">
        <div className="flex w-full flex-col gap-6 sm:gap-[25.813px]">
          {guarantees.map((g, i) => (
            <CheckRow
              key={`${g.text}-${i}`}
              text={g.text}
              iconUrl={g.checkIconUrl ?? DEFAULT_CHECK_ICONS[i % DEFAULT_CHECK_ICONS.length]}
              layout="stacked"
            />
          ))}
        </div>
        <div className="flex w-full justify-center">{cta}</div>
      </div>
    );
  }
  return (
    <div className="flex w-full min-w-0 max-w-[288.64px] flex-col items-center gap-[25.813px] md:items-start">
      <div className="flex w-full flex-col gap-[25.813px]">
        {guarantees.map((g, i) => (
          <CheckRow
            key={`${g.text}-${i}`}
            text={g.text}
            iconUrl={g.checkIconUrl ?? DEFAULT_CHECK_ICONS[i % DEFAULT_CHECK_ICONS.length]}
          />
        ))}
      </div>
      {cta}
    </div>
  );
}

function SealImage({
  src,
  alt,
  variant = "default",
}: {
  src: string;
  alt: string;
  /** `stacked` = scale with viewport, centered (mobile / tablet) */
  variant?: "default" | "stacked";
}): JSX.Element {
  if (variant === "stacked") {
    return (
      <div className="relative mx-auto w-full max-w-[min(280px,85vw)] shrink-0 sm:max-w-[min(300px,80vw)] md:max-w-[min(320px,75vw)]">
        <div className="relative w-full" style={{ aspectRatio: "266.764 / 271.788" }}>
          <img
            alt={alt}
            className="absolute inset-0 h-full w-full object-contain object-center"
            src={src}
            loading="lazy"
            sizes="(min-width: 1280px) 267px, 85vw"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="relative h-[200px] w-[196px] shrink-0 sm:h-[240px] sm:w-[236px] md:h-[271.788px] md:w-[266.764px]">
      <img
        alt={alt}
        className="h-full w-full object-contain object-center"
        src={src}
        loading="lazy"
        sizes="(min-width: 1280px) 267px, 70vw"
      />
    </div>
  );
}

export default function GuaranteeSection3({
  badgeText = "Our Promise",
  titleLine1 = "Architectural Precision",
  titleLine2 = "In Every Detail.",
  description = defaultDescription,
  guarantees = defaultGuarantees,
  ctaText = "Learn More About Guarantee",
  ctaHref,
  sealImage = DEFAULT_SEAL,
  sealAlt = "Altevita Certainty Promise seal",
}: GuaranteeSection3Props): JSX.Element {
  const cta = ctaHref ? (
    <a className={ctaClassName} href={ctaHref}>
      {ctaText}
    </a>
  ) : (
    <button className={ctaClassName} type="button">
      {ctaText}
    </button>
  );

  return (
    <section className="relative w-full overflow-x-clip bg-white font-['Inter',sans-serif] text-[#131212]">
      {/* Desktop — Figma 425:857. Flow layout (not absolute) so a 2- or 3-line title can never overlap the body copy. */}
      <div className="hidden xl:block">
        <div className="mx-auto flex w-full min-h-[750px] max-w-[1440px] flex-col items-center px-8 pt-[77px] pb-10">
          <div
            className="flex h-[39.732px] shrink-0 items-center justify-center overflow-hidden rounded-[53.691px] px-4 shadow-sm"
            style={{
              width: 170.932,
              minWidth: 170.932,
              background: "linear-gradient(166.9145053698017deg, rgb(255, 183, 23) 0%, rgb(245, 158, 11) 100%)",
            }}
          >
            <span
              className="font-['Inter',sans-serif] text-[15.034px] font-bold leading-[22.55px] tracking-[1.6107px] text-black"
              aria-hidden
            >
              ★
            </span>
            <span className="ml-2.5 font-['Inter',sans-serif] text-[12.886px] font-bold uppercase leading-[19.329px] tracking-[1.6107px] text-black">
              {badgeText}
            </span>
          </div>

          <h2 className="m-0 mt-[38.3px] w-full max-w-[675px] text-center text-[64px] font-bold capitalize leading-[64px] tracking-[-2px] text-[#131212]">
            {titleLine1}
            <br />
            {titleLine2}
          </h2>

          <p className="m-0 mt-[38px] w-full max-w-[633px] text-center font-['Inter',sans-serif] text-[16px] font-normal leading-[18px] tracking-[-0.36px] text-[#363636]">
            {description}
          </p>

          <div className="mt-[43px] flex w-full max-w-[704.42px] items-center justify-center gap-[149px]">
            <ListAndCtaBlock guarantees={guarantees} cta={cta} />
            <SealImage src={sealImage} alt={sealAlt} />
          </div>
        </div>
      </div>

      {/* Tablet & mobile — single column, generous padding; no side-by-side row (avoids crowding) */}
      <div className="xl:hidden">
        <div className="mx-auto w-full max-w-[min(100%,40rem)] px-4 pb-16 pt-10 sm:max-w-3xl sm:px-6 sm:pb-20 sm:pt-12 md:max-w-4xl md:px-10 md:pb-24 md:pt-16 lg:px-12">
          <div className="flex w-full flex-col items-center gap-8 sm:gap-10 md:gap-12">
            <div
              className="inline-flex h-10 min-h-10 shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full px-5"
              style={{
                background: "linear-gradient(166.91deg, rgb(255, 183, 23) 0%, rgb(245, 158, 11) 100%)",
              }}
            >
              <span className="text-[15px] font-bold leading-none tracking-[1.6px] text-black" aria-hidden>
                ★
              </span>
              <span className="font-['Inter',sans-serif] text-[12.5px] font-bold uppercase leading-none tracking-[1.6px] text-black">
                {badgeText}
              </span>
            </div>

            <h2 className="m-0 w-full max-w-[min(100%,36rem)] text-center text-[clamp(1.75rem,5.2vw,2.75rem)] font-bold capitalize text-[#131212] sm:max-w-2xl sm:text-[clamp(2rem,4.2vw,3.25rem)] md:max-w-4xl md:text-[clamp(2.25rem,3.4vw,3.5rem)]">
              <span className="block leading-[1.2] tracking-[-0.04em] sm:leading-[1.2] md:leading-[1.18]">
                {titleLine1}
              </span>
              <span className="mt-2 block leading-[1.2] tracking-[-0.04em] sm:mt-2.5 sm:leading-[1.2] md:leading-[1.18]">
                {titleLine2}
              </span>
            </h2>

            <p className="m-0 w-full max-w-2xl text-center text-[15px] font-normal leading-[1.6] tracking-[-0.36px] text-[#363636] sm:text-base sm:leading-[1.55] md:max-w-3xl">
              {description}
            </p>

            <div className="flex w-full flex-col items-center gap-12 pt-1 sm:gap-14 md:gap-16">
              <ListAndCtaBlock align="stacked" guarantees={guarantees} cta={cta} />
              <SealImage variant="stacked" src={sealImage} alt={sealAlt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
