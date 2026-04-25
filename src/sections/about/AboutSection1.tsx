import type { JSX } from "react";

/**
 * Figma: [About / 40:5](https://www.figma.com/design/RInqwZgOuH2RI1VPEq6ZtH/Lego-Blocks-Elementor-Section-Library?node-id=40-5).
 *
 * Desktop ≥ xl (1280): pixel-perfect against the **1440 × 950** artboard via absolute positioning.
 * The image cluster bleeds **-76px** left of the artboard; section uses `overflow-x-clip` so the
 * bleed is hidden cleanly when the viewport is below 1440.
 *
 * Below xl: hero text → image cluster (contained, no bleed) → content → CTA + signature, all stacked.
 */
export interface AboutSection1Props {
  subtitle?: string;
  /** Hero description — `\n` becomes a soft `<br/>` between sentences (matches Figma 40:15). */
  heroDescription?: string;
  title?: string;
  /** Body copy with `\n\n` between paragraphs. The literal string `CONTACT US` becomes inline emphasis. */
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  imageFront?: string;
  imageBack?: string;
  signatureImage?: string;
  imageAlt?: string;
}

const DEFAULT_IMAGE_FRONT =
  "https://www.figma.com/api/mcp/asset/2dd560ef-5b19-494d-93d7-af92a6770696";
const DEFAULT_IMAGE_BACK =
  "https://www.figma.com/api/mcp/asset/043b199c-11fc-4bc8-96af-a57e0d3a6c8c";
const DEFAULT_SIGNATURE =
  "https://www.figma.com/api/mcp/asset/2235483d-c6ea-4811-9e91-2d290e14e847";

const DEFAULT_SUBTITLE = "About Us";
const DEFAULT_HERO_DESCRIPTION =
  "When you work with us, you are not just hiring a luxury home builder in Toronto; you are gaining a partner who understands custom residential building from the first sketch to the final coat of paint.\nWe bridge the gap that other companies create. As a unified design build firm in Toronto, we ensure that your aesthetic vision is technically feasible and financially realistic from day one. You get premium craftsmanship without the friction of managing separate teams.";
const DEFAULT_TITLE = "A Trusted Home Builder in Toronto";
const DEFAULT_DESCRIPTION =
  "Hi, I\u2019m Kash. I founded Altevita because I saw a fundamental flaw in how homes are built. Too often, homeowners are caught in a tug-of-war between a designer\u2019s vision and a contractor\u2019s reality. This disconnect leads to delays, budget overruns, and compromised designs.\n\nI believe you deserve better. I am a licensed architect and a builder with 28 years of experience. This means I view your project through two lenses: creative potential and constructability.\n\nIf you\u2019re looking for someone you can trust with your project from plans through to completion, reach out and book a FREE Consultation so we can get to know you and your project. CONTACT US to get started.";
const DEFAULT_CTA_TEXT = "Read More About Us";

const ctaClass =
  "inline-flex h-[49px] w-[176px] shrink-0 items-center justify-center rounded-[4px] border-0 bg-[#ffb717] font-['Arimo',sans-serif] text-[12.564px] font-bold leading-[16.752px] tracking-[-0.2577px] text-black no-underline shadow-[0px_2.416px_0.805px_0.805px_rgba(0,0,0,0.16)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c99710] cursor-pointer";

/** Splits `text` on `\n` and intersperses `<br/>` (matches Figma 40:15 which uses a single soft break). */
function HeroParagraph({ text }: { text: string }): JSX.Element {
  const lines = text.split("\n");
  return (
    <p className="m-0">
      {lines.map((line, index) => (
        <span key={index}>
          {line}
          {index < lines.length - 1 ? <br aria-hidden="true" /> : null}
        </span>
      ))}
    </p>
  );
}

/** Renders body description: `\n\n` → separate `<p>`. The literal `CONTACT US` is wrapped to allow styling/href. */
function BodyDescription({ text }: { text: string }): JSX.Element {
  const stanzas = text.split("\n\n");
  return (
    <div className="flex flex-col gap-[18px]">
      {stanzas.map((stanza, i) => {
        const parts = stanza.split("CONTACT US");
        return (
          <p key={i} className="m-0">
            {parts.map((part, j) => (
              <span key={j}>
                {part}
                {j < parts.length - 1 ? (
                  <span className="font-semibold tracking-[0.02em] text-[#131212]">
                    CONTACT US
                  </span>
                ) : null}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default function AboutSection1({
  subtitle = DEFAULT_SUBTITLE,
  heroDescription = DEFAULT_HERO_DESCRIPTION,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  ctaText = DEFAULT_CTA_TEXT,
  ctaHref,
  imageFront = DEFAULT_IMAGE_FRONT,
  imageBack = DEFAULT_IMAGE_BACK,
  signatureImage = DEFAULT_SIGNATURE,
  imageAlt = "Founder in a custom home kitchen",
}: AboutSection1Props): JSX.Element {
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
      {/* ─────────── Desktop ≥ xl — 1440 artboard, pixel-precise ─────────── */}
      <div className="hidden xl:block">
        <div className="relative mx-auto h-[950px] w-[1440px] max-w-[1440px]">
          {/* 331:125 — Hero centered at top (left 362 / w 715 → centered on 1440 artboard) */}
          <div className="absolute left-[362px] top-[84px] flex w-[715px] flex-col items-center gap-[16px] text-center">
            <h2 className="m-0 text-[48px] font-bold leading-[38px] text-[#131212]">
              {subtitle}
            </h2>
            <div className="text-[16px] font-normal leading-[18px] tracking-[-0.36px] text-[#363636]">
              <HeroParagraph text={heroDescription} />
            </div>
          </div>

          {/* 331:122 — Image cluster, bleeds -76 left of artboard */}
          <div className="pointer-events-none absolute left-[-76px] top-[354px] h-[481px] w-[796px]">
            {/* 40:22 — back image, translucent */}
            <div className="absolute left-0 top-[82px] h-[399px] w-[764px] overflow-hidden opacity-[0.23]">
              <img
                alt=""
                aria-hidden
                src={imageBack}
                className="absolute left-0 top-0 h-[145.08%] w-[100.03%] max-w-none object-cover object-top"
                loading="lazy"
              />
            </div>
            {/* 40:17 — front image */}
            <div className="absolute left-[231px] top-0 h-[428px] w-[565px] overflow-hidden">
              <img
                alt={imageAlt}
                src={imageFront}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                sizes="565px"
              />
            </div>
          </div>

          {/* 331:124 — Right content column */}
          <div className="absolute left-[772px] top-[364px] flex w-[535px] flex-col items-start gap-[28px]">
            {/* 40:9 — capitalize title, tracking -2 */}
            <h3 className="m-0 w-[413px] text-[48px] font-bold capitalize leading-[45px] tracking-[-2px] text-[#131212]">
              {title}
            </h3>
            <div className="w-full text-[16px] font-normal leading-[18px] tracking-[-0.36px] text-[#363636]">
              <BodyDescription text={description} />
            </div>
            {/* 331:123 — CTA + signature row, fixed 454 wide */}
            <div className="relative h-[49px] w-[454px]">
              <div className="absolute left-0 top-0">{ctaButton}</div>
              <div className="absolute left-[239px] top-[6px] h-[41px] w-[214.995px]">
                <img
                  alt=""
                  aria-hidden
                  src={signatureImage}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────── Tablet & Mobile (< xl) — stacked responsive ─────────── */}
      <div className="xl:hidden">
        {/* Hero */}
        <div className="mx-auto w-full max-w-[715px] px-6 pt-12 pb-10 text-center sm:px-8 sm:pt-16 sm:pb-12">
          <h2 className="m-0 text-[clamp(2rem,5.6vw,48px)] font-bold leading-[1.05] text-[#131212]">
            {subtitle}
          </h2>
          <div className="mt-4 text-[15px] font-normal leading-[1.45] tracking-[-0.36px] text-[#363636] sm:mt-5 sm:text-[16px]">
            <HeroParagraph text={heroDescription} />
          </div>
        </div>

        {/* Image cluster — kept in proportion (796 × 481), no negative bleed */}
        <div className="mx-auto w-full max-w-[720px] px-6 sm:px-8">
          <div
            className="relative w-full"
            style={{ aspectRatio: "796 / 481" }}
            aria-hidden={false}
          >
            <div className="absolute left-0 top-[17.05%] h-[82.95%] w-[96%] overflow-hidden opacity-[0.23]">
              <img
                alt=""
                aria-hidden
                src={imageBack}
                className="absolute left-0 top-0 h-[145.08%] w-[100.03%] max-w-none object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="absolute left-[29.02%] top-0 h-[88.98%] w-[70.98%] overflow-hidden">
              <img
                alt={imageAlt}
                src={imageFront}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                sizes="(min-width: 720px) 510px, 70vw"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto w-full max-w-[640px] px-6 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-12">
          <div className="flex flex-col gap-[28px]">
            <h3 className="m-0 text-center text-[clamp(2rem,5.4vw,40px)] font-bold capitalize leading-[1.05] tracking-[-1.4px] text-[#131212] sm:text-left sm:tracking-[-2px]">
              {title}
            </h3>
            <div className="text-center text-[15px] font-normal leading-[1.55] tracking-[-0.36px] text-[#363636] sm:text-left sm:text-[16px] sm:leading-[1.5]">
              <BodyDescription text={description} />
            </div>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-[63px]">
              {ctaButton}
              <img
                alt=""
                aria-hidden
                src={signatureImage}
                className="h-[41px] w-[214.995px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
