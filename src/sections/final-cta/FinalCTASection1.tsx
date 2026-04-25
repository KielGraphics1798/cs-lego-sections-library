import type { JSX } from "react";

/**
 * Figma: Final CTA — [Lego-Blocks-Elementor-Section-Library / 410:548](https://www.figma.com/design/RInqwZgOuH2RI1VPEq6ZtH/Lego-Blocks-Elementor-Section-Library?node-id=410-548).
 * Diagonal backdrop + framed hero card, gradient overlay, primary + phone CTAs. Vite + React + Tailwind.
 * In **Next.js App Router** use `next/image` for the photos and `next/link` for button links; add
 * `fill` + `className` + `priority` on the background image as needed.
 */
const BG_FRAME =
  "https://www.figma.com/api/mcp/asset/7d4c991f-a959-4aa2-9b02-2b678ceed849";
const BG_DIAGONAL =
  "https://www.figma.com/api/mcp/asset/a51ce505-f03d-4b95-9892-b1355470b6ed";

export interface FinalCTASection1Props {
  /** Main line; use `\n` for a second line on small screens if needed. */
  heading?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  phoneCtaText?: string;
  phoneCtaHref?: string;
  backgroundImage?: string;
}

export default function FinalCTASection1(
  rawProps: FinalCTASection1Props = {},
): JSX.Element {
  const {
    heading = "Work with The Architect-Led Home Builder in Toronto",
    primaryCtaText = "Free consultation",
    primaryCtaHref = "#",
    phoneCtaText = "Call us (416) 856-6959",
    phoneCtaHref = "tel:+14168566959",
    backgroundImage = BG_FRAME,
  } = rawProps;

  return (
    <section
      className="final-cta-section-1 relative w-full overflow-hidden bg-white font-['Inter',sans-serif] text-[#1c1c1c] antialiased"
      aria-label="Get in touch"
    >
      <div
        className="pointer-events-none absolute left-0 top-[min(5rem,8vw)] h-[min(100%,22rem)] w-full min-h-[12rem] max-md:top-8 md:top-[4.5rem] lg:top-[5.5rem] xl:top-[5.75rem]"
        aria-hidden
      >
        <img
          alt=""
          className="h-full w-full object-cover object-center"
          src={BG_DIAGONAL}
        />
      </div>

      <div className="relative z-[1] mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-[4.5rem] xl:px-10">
        <div className="mx-auto w-full max-w-[1228px]">
          <div className="overflow-hidden rounded-[12px] border-2 border-[#c8c8c8] bg-black shadow-sm lg:min-h-[min(454px,70vh)]">
            <div className="relative flex min-h-[min(100vw*0.55,28rem)] flex-col justify-end sm:min-h-[min(100vw*0.45,26rem)] lg:min-h-[454px]">
              <img
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                src={backgroundImage}
                loading="lazy"
                decoding="async"
              />
              <div
                className="absolute inset-0 rounded-[10px] sm:rounded-[12px]"
                style={{
                  background:
                    "linear-gradient(188deg, rgba(0,0,0,0.2) 4.85%, #000 87.7%)",
                }}
                aria-hidden
              />
              <div className="relative z-[1] flex w-full max-w-[34rem] flex-col gap-5 px-5 pb-6 pt-12 sm:gap-6 sm:px-8 sm:pb-8 sm:pt-16 md:pl-12 lg:pl-16">
                <h2 className="text-2xl font-semibold leading-[1.1] text-white sm:text-3xl sm:leading-tight sm:tracking-[-0.04em] lg:text-[36px] lg:leading-none lg:tracking-[-2.16px]">
                  {heading}
                </h2>
                <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-3.5 sm:pt-0">
                  <a
                    className="inline-flex h-[38px] min-w-0 items-center justify-center rounded-[2.67px] border-[0.667px] border-[#d2ac6e] bg-[#ffb717] px-5 text-center text-[10.5px] font-bold uppercase leading-none tracking-wide text-black transition-colors hover:bg-[#ffc12e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-h-[33.75px] sm:w-auto sm:min-w-[10.25rem] sm:px-5 sm:text-[10.67px] md:px-6"
                    href={primaryCtaHref}
                  >
                    {primaryCtaText}
                  </a>
                  <a
                    className="inline-flex h-[38px] min-w-0 items-center justify-center rounded-[2.67px] border-[0.667px] border-[#ffb717] px-5 text-center text-[10.5px] font-bold uppercase leading-none tracking-wide text-white transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-h-[33.75px] sm:w-auto sm:min-w-[11.75rem] sm:px-5 sm:text-[10.67px] md:px-6"
                    href={phoneCtaHref}
                  >
                    {phoneCtaText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
