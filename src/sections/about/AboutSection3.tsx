import type { JSX } from "react";

/**
 * Figma: [About / 40:47](https://www.figma.com/design/RInqwZgOuH2RI1VPEq6ZtH/Lego-Blocks-Elementor-Section-Library?node-id=40-47).
 *
 * Desktop (≥ xl) — fluid layout that **caps at 1440** and scales gracefully below:
 * - Gray band 40:61 — full-width `#f2f2f2`, top 83 / h 458
 * - Row 364:366 — gap 32, max-w 1334, centered
 * - Image 364:365 — left col, image 40:71 with **left bleed** (≈-178/734 ≈ -24.25%)
 * - Badge 364:363 — `≈82.5% / 73.3%` of its column (matches Figma 606,408 within 734×556)
 * - Content 364:364 — right col, gap 21, items center
 *
 * Below xl: image stacks above content; badge floats bottom-right of the image.
 */
export interface AboutSection3Props {
  title?: string;
  subtitle?: string;
  /** Two paragraphs separated by `\n\n` (rendered with a blank line between them). */
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  image?: string;
  yearsExperience?: string;
  yearsLabel?: string;
  imageAlt?: string;
}

const DEFAULT_IMAGE =
  "https://www.figma.com/api/mcp/asset/850f8993-2ae1-4b83-8a3b-055fa57a1c13";

const defaultSubtitle = "About Us";
const defaultTitle = "A Trusted Home Builder in Toronto";
const defaultDescription =
  "When you work with us, you are not just hiring a luxury home builder in Toronto; you are gaining a partner who understands custom residential building from the first sketch to the final coat of paint.\n\nWe bridge the gap that other companies create. As a unified design build firm in Toronto, we ensure that your aesthetic vision is technically feasible and financially realistic from day one. You get premium craftsmanship without the friction of managing separate teams.";
const defaultCtaText = "Read More About Us";

const ctaClass =
  "flex h-[49px] w-[176px] shrink-0 items-center justify-center rounded-[4px] border-0 bg-[#ffb717] text-[12.564px] font-bold leading-[16.752px] tracking-[-0.2577px] text-black shadow-[0px_2.416px_0.805px_0.805px_rgba(0,0,0,0.16)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c99710] no-underline";

function ExperienceBadge({
  number,
  label,
}: {
  number: string;
  label: string;
}): JSX.Element {
  return (
    <div className="box-border flex h-[148px] w-[154px] items-center justify-center bg-black pl-[18px] pr-[7px] pt-[22px] pb-[17px]">
      <div className="flex w-[129px] flex-col gap-[10px] text-[#ffb717]">
        <span
          className="font-['Syne',sans-serif] text-[52.923px] font-bold leading-none tracking-[-1.7401px]"
          aria-hidden="true"
        >
          {number}
        </span>
        <span className="font-['Syne',sans-serif] text-[22.051px] font-bold leading-[1.05] tracking-[-0.04em]">
          {label}
        </span>
      </div>
    </div>
  );
}

function Description({ text }: { text: string }): JSX.Element {
  const stanzas = text.split("\n\n");
  return (
    <div className="flex w-full flex-col gap-3 text-center font-['Inter',sans-serif] text-[16px] font-normal leading-[18px] tracking-[-0.36px] text-[#363636]">
      {stanzas.map((stanza, i) => (
        <p key={i} className="m-0">
          {stanza.trim()}
        </p>
      ))}
    </div>
  );
}

export default function AboutSection3({
  title = defaultTitle,
  subtitle = defaultSubtitle,
  description = defaultDescription,
  ctaText = defaultCtaText,
  ctaHref,
  image = DEFAULT_IMAGE,
  yearsExperience = "28",
  yearsLabel = "Years of Experience",
  imageAlt = "Builder in a modern kitchen",
}: AboutSection3Props): JSX.Element {
  const cta = ctaHref ? (
    <a className={ctaClass} href={ctaHref}>
      {ctaText}
    </a>
  ) : (
    <button className={ctaClass} type="button">
      {ctaText}
    </button>
  );

  return (
    <section className="relative w-full overflow-x-clip bg-white font-['Inter',sans-serif] text-[#131212]">
      {/* ─────────── Desktop (xl+) — fluid up to 1440 ─────────── */}
      <div className="hidden xl:block">
        <div className="relative mx-auto w-full max-w-[1440px]">
          {/* 40:61 — full-width #f2f2f2 band, top 83, h 458 */}
          <div
            className="absolute left-0 top-[83px] h-[458px] w-full bg-[#f2f2f2]"
            aria-hidden
          />

          {/* 364:366 — centered row, gap 32, max-w 1334, vertical inset ~34px to give 624 total */}
          <div className="relative mx-auto flex h-[556px] w-full max-w-[1334px] items-center gap-[clamp(20px,2.4vw,32px)] px-4 py-[34px]">
            {/* 364:365 — left column (≈55%, max 734) */}
            <div className="relative h-full w-[55%] min-w-0 max-w-[734px] shrink-0 overflow-visible">
              {/* 40:71 — image 849×551 (≈115.6%) with -178px / -24.25% bleed */}
              <div className="absolute top-1/2 h-[551px] -translate-y-1/2 overflow-hidden left-[-24.25%] w-[115.67%] max-w-[849px]">
                <img
                  alt={imageAlt}
                  className="absolute left-0 top-0 h-[116.7%] w-[100.01%] max-w-none object-cover"
                  src={image}
                  loading="lazy"
                  sizes="(min-width: 1440px) 849px, 60vw"
                />
              </div>

              {/* 364:363 — badge ≈ 82.5%/73.3% (Figma left:606 top:408 inside 734×556) */}
              <div className="absolute left-[82.56%] top-[73.38%]">
                <ExperienceBadge label={yearsLabel} number={yearsExperience} />
              </div>
            </div>

            {/* 364:364 — right column (≈45%, max 568) */}
            <div className="flex w-[45%] min-w-0 max-w-[568px] shrink-0 flex-col items-center gap-[21px]">
              <p className="m-0 text-[16px] font-bold leading-[38px] text-[#131212]">
                {subtitle}
              </p>
              <h2 className="m-0 w-full max-w-[413px] text-center text-[clamp(2rem,3.4vw,48px)] font-bold capitalize leading-[1.05] tracking-[-2px] text-[#131212] xl:leading-[45px]">
                {title}
              </h2>
              <Description text={description} />
              {cta}
            </div>
          </div>
        </div>
      </div>

      {/* ─────────── Tablet / Mobile (< xl) ─────────── */}
      <div className="xl:hidden">
        {/* image w/ floating badge */}
        <div className="relative w-full overflow-hidden">
          <div className="relative h-[58vw] max-h-[460px] min-h-[280px] w-full">
            <img
              alt={imageAlt}
              className="absolute inset-0 h-full w-full object-cover"
              src={image}
              loading="lazy"
              sizes="100vw"
            />
            <div className="absolute bottom-0 right-0 z-10 origin-bottom-right scale-[0.78] sm:scale-[0.92] md:scale-100">
              <ExperienceBadge label={yearsLabel} number={yearsExperience} />
            </div>
          </div>
        </div>

        {/* content */}
        <div className="bg-[#f2f2f2] px-6 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto flex w-full max-w-[568px] flex-col items-center gap-[21px]">
            <p className="m-0 text-[16px] font-bold leading-[38px] text-[#131212]">
              {subtitle}
            </p>
            <h2 className="m-0 w-full max-w-[413px] text-center text-[2rem] font-bold capitalize leading-[1.05] tracking-[-0.04em] text-[#131212] sm:text-[2.4rem] sm:leading-[1.05] md:text-[44px] md:leading-[42px] md:tracking-[-2px]">
              {title}
            </h2>
            <Description text={description} />
            {cta}
          </div>
        </div>
      </div>
    </section>
  );
}
