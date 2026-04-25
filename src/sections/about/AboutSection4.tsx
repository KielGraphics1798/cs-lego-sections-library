import type { JSX } from "react";

/**
 * Figma: [About / 54:73](https://www.figma.com/design/RInqwZgOuH2RI1VPEq6ZtH/Lego-Blocks-Elementor-Section-Library?node-id=54-73).
 *
 * Desktop ≥ xl (1280): pixel-perfect at the **1440 × 730** artboard via absolute positioning.
 * - Left column (white): eyebrow, title, description, stats row, CTA
 * - Right column: gray panel `#f2f2f2` (`left:826 w:447 h:730`) with 4 overlapping gallery photos
 *
 * Below xl: stacks to copy → stats grid → CTA → gallery (2×2 on a contained gray panel).
 */
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutSection4Gallery {
  /** Square interior photo (Figma 54:69 P2 — top-left of the gallery) */
  square?: string;
  /** Wide landscape photo (Figma 54:67 P4 — top-right of the gallery) */
  wide?: string;
  /** Mid-size landscape photo (Figma 54:63 P3 — bottom-left of the gallery) */
  landscape?: string;
  /** Tall portrait photo (Figma 54:65 P1 — bottom-right of the gallery) */
  portrait?: string;
}

export interface AboutSection4Props {
  eyebrow?: string;
  title?: string;
  /** Body copy. Use `\n\n` between paragraphs. */
  description?: string;
  stats?: AboutStat[];
  ctaText?: string;
  ctaHref?: string;
  galleryImages?: AboutSection4Gallery;
  /** Backwards-compat aliases — older callers may pass these. */
  subtitle?: string;
}

const DEFAULT_GALLERY = {
  /** 54:69 P2 1 — square interior */
  square:
    "https://www.figma.com/api/mcp/asset/cb21b707-1a3e-4e9e-a066-254245d0fa52",
  /** 54:67 P4-1024x576 1 — wide modern home */
  wide: "https://www.figma.com/api/mcp/asset/f92b22f2-3c20-446d-8010-06d6bc18a5b5",
  /** 54:63 P3-1024x683 1 — landscape mountain home */
  landscape:
    "https://www.figma.com/api/mcp/asset/5772d426-69e2-40a9-85ce-b271a529f069",
  /** 54:65 P1 1 — portrait stone facade */
  portrait:
    "https://www.figma.com/api/mcp/asset/fdbfc104-3583-452a-aabe-b667794849ce",
} as const;

const DEFAULT_EYEBROW = "About Us";
const DEFAULT_TITLE = "A Trusted Home Builder in Toronto";
const DEFAULT_DESCRIPTION =
  "When you work with us, you are not just hiring a luxury home builder in Toronto; you are gaining a partner who understands custom residential building from the first sketch to the final coat of paint.\n\nWe bridge the gap that other companies create. As a unified design build firm in Toronto, we ensure that your aesthetic vision is technically feasible and financially realistic from day one. You get premium craftsmanship without the friction of managing separate teams.";
const DEFAULT_CTA_TEXT = "Read More About Us";
const DEFAULT_STATS: AboutStat[] = [
  { value: "28+", label: "Years Experience" },
  { value: "894+", label: "Project Completed" },
  { value: "42+", label: "Best Partners" },
];

const ctaClass =
  "inline-flex h-[49px] w-[176px] items-center justify-center rounded-[4px] border-0 bg-[#ffb717] font-['Arimo',sans-serif] text-[12.564px] font-bold leading-[16.752px] tracking-[-0.2577px] text-black no-underline shadow-[0px_2.416px_0.805px_0.805px_rgba(0,0,0,0.16)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c99710] cursor-pointer";

/** Splits on `\n\n` into separate `<p>` elements (Figma 54:75 uses `<br/><br/>` between paragraphs). */
function Description({ text }: { text: string }): JSX.Element {
  const stanzas = text.split("\n\n");
  return (
    <div className="flex flex-col gap-[18px]">
      {stanzas.map((stanza, i) => (
        <p key={i} className="m-0">
          {stanza}
        </p>
      ))}
    </div>
  );
}

function StatItem({
  stat,
  variant,
}: {
  stat: AboutStat;
  variant: "desktop" | "stacked";
}): JSX.Element {
  if (variant === "desktop") {
    return (
      <div className="flex w-[168.298px] flex-col items-center gap-[12px] text-center">
        <p className="m-0 font-['Inter',sans-serif] text-[38.468px] font-semibold leading-none text-[#fd9a00]">
          {stat.value}
        </p>
        <p className="m-0 font-['Inter',sans-serif] text-[12.823px] font-normal leading-[20.035px] text-[#212121]">
          {stat.label}
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-[8px] text-center">
      <p className="m-0 font-['Inter',sans-serif] text-[clamp(28px,5.4vw,38.468px)] font-semibold leading-none text-[#fd9a00]">
        {stat.value}
      </p>
      <p className="m-0 font-['Inter',sans-serif] text-[clamp(12px,1.4vw,12.823px)] font-normal leading-[20.035px] text-[#212121]">
        {stat.label}
      </p>
    </div>
  );
}

export default function AboutSection4({
  eyebrow,
  subtitle,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  stats = DEFAULT_STATS,
  ctaText = DEFAULT_CTA_TEXT,
  ctaHref,
  galleryImages,
}: AboutSection4Props): JSX.Element {
  const eyebrowText = eyebrow ?? subtitle ?? DEFAULT_EYEBROW;
  const gallery = { ...DEFAULT_GALLERY, ...(galleryImages ?? {}) };

  const ctaButton = ctaHref ? (
    <a className={ctaClass} href={ctaHref}>
      {ctaText}
    </a>
  ) : (
    <button className={ctaClass} type="button">
      {ctaText}
    </button>
  );

  return (
    <section className="relative w-full overflow-x-clip bg-white font-['Inter',sans-serif] text-[#363636]">
      {/* ─────────── Desktop ≥ xl — 1440 × 730 artboard, pixel-precise ─────────── */}
      <div className="hidden xl:block">
        <div className="relative mx-auto h-[730px] w-[1440px] max-w-[1440px]">
          {/* 54:83 — gray background panel on the right */}
          <div
            className="absolute left-[826px] top-0 h-[730px] w-[447px] bg-[#f2f2f2]"
            aria-hidden
          />

          {/* 54:74 — eyebrow ABOUT US */}
          <p className="absolute left-[155px] top-[127px] m-0 h-[21px] w-[123px] font-['Inter',sans-serif] text-[16px] font-bold uppercase leading-[38px] tracking-[4px] text-[#fd9a00]">
            {eyebrowText}
          </p>

          {/* 54:76 — title */}
          <h2 className="absolute left-[155px] top-[167px] m-0 w-[413px] font-['Inter',sans-serif] text-[48px] font-bold capitalize leading-[45px] tracking-[-2px] text-[#131212]">
            {title}
          </h2>

          {/* 54:75 — description */}
          <div className="absolute left-[155px] top-[295px] w-[518px] font-['Inter',sans-serif] text-[16px] font-normal leading-[18px] tracking-[-0.36px] text-[#363636]">
            <Description text={description} />
          </div>

          {/* 54:39 — stats row */}
          <div className="absolute left-[120px] top-[471px] flex w-[552.98px] items-start justify-between">
            {stats.slice(0, 3).map((stat) => (
              <StatItem key={stat.label} stat={stat} variant="desktop" />
            ))}
          </div>

          {/* 54:77 — CTA button */}
          <div className="absolute left-[155px] top-[572px]">{ctaButton}</div>

          {/* ─── 54:61 Gallery (4 photos overlapping the gray panel) ─── */}
          {/* 54:69 P2 — square interior (top-left of gallery) */}
          <div className="absolute left-[720px] top-[157.26px] h-[182.602px] w-[182.602px] overflow-hidden">
            <img
              alt=""
              aria-hidden
              src={gallery.square}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          {/* 54:67 P4 — wide modern home (top-right of gallery) */}
          <div className="absolute left-[928.69px] top-[119px] h-[220.862px] w-[391.29px] overflow-hidden">
            <img
              alt=""
              aria-hidden
              src={gallery.wide}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          {/* 54:63 P3 — landscape mountain home (bottom-left of gallery) */}
          <div className="absolute left-[720px] top-[360.73px] h-[192.167px] w-[286.946px] overflow-hidden">
            <img
              alt=""
              aria-hidden
              src={gallery.landscape}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          {/* 54:65 P1 — portrait stone facade (bottom-right of gallery) */}
          <div className="absolute left-[1033.03px] top-[360.73px] h-[273.034px] w-[182.602px] overflow-hidden">
            <img
              alt=""
              aria-hidden
              src={gallery.portrait}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* ─────────── Tablet / Mobile (< xl) — stacked responsive ─────────── */}
      <div className="xl:hidden">
        {/* Copy block */}
        <div className="mx-auto w-full max-w-[640px] px-6 pt-12 pb-10 sm:px-8 sm:pt-16 sm:pb-12">
          <p className="m-0 font-['Inter',sans-serif] text-[14px] font-bold uppercase leading-[1.2] tracking-[4px] text-[#fd9a00] sm:text-[16px]">
            {eyebrowText}
          </p>
          <h2 className="mt-4 font-['Inter',sans-serif] text-[clamp(2rem,5.6vw,48px)] font-bold capitalize leading-[1.05] tracking-[-1.4px] text-[#131212] sm:tracking-[-2px]">
            {title}
          </h2>
          <div className="mt-6 font-['Inter',sans-serif] text-[15px] font-normal leading-[1.55] tracking-[-0.36px] text-[#363636] sm:text-[16px] sm:leading-[1.5]">
            <Description text={description} />
          </div>

          {/* Stats grid */}
          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
            {stats.slice(0, 3).map((stat) => (
              <StatItem key={stat.label} stat={stat} variant="stacked" />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-start">{ctaButton}</div>
        </div>

        {/* Gallery on a contained gray panel */}
        <div className="bg-[#f2f2f2] py-10 sm:py-12">
          <div className="mx-auto grid w-full max-w-[640px] grid-cols-2 gap-3 px-6 sm:gap-4 sm:px-8">
            {/* Top-left — square */}
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
              <img
                alt=""
                aria-hidden
                src={gallery.square}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Top-right — wide */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "391.29 / 220.862" }}
            >
              <img
                alt=""
                aria-hidden
                src={gallery.wide}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Bottom-left — landscape */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "286.946 / 192.167" }}
            >
              <img
                alt=""
                aria-hidden
                src={gallery.landscape}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Bottom-right — portrait */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "182.602 / 273.034" }}
            >
              <img
                alt=""
                aria-hidden
                src={gallery.portrait}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
