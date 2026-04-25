import type { FormEvent, JSX } from "react";

/**
 * Shared “Free guide / book” lead-magnet strip for Above-the-Fold section variants.\
 * Figma: [Free guide 328:56](https://www.figma.com/design/RInqwZgOuH2RI1VPEq6ZtH/Lego-Blocks-Elementor-Section-Library?node-id=328-56) — use {@link ABOVE_THE_FOLD_DEFAULT_EBOOK_IMAGE} or pass `ebookImage`.
 * In **Next.js App Router**, prefer leaf forms in a client parent if you add submit handlers; `onSubmit` here only prevents default.
 */

export const ABOVE_THE_FOLD_DEFAULT_EBOOK_IMAGE =
  "https://www.figma.com/api/mcp/asset/42d998fd-315b-4033-a622-9a3631061b3a";

const freeGuideFieldBase =
  "box-border rounded-[3px] border-0 bg-white px-[13px] py-[6px] font-['Syne',sans-serif] text-[12px] font-bold text-[#1c1c1c] outline-none placeholder:font-['Syne',sans-serif] placeholder:text-[#1c1c1c] placeholder:opacity-60";
const freeGuideInputClass = `h-8 min-h-8 ${freeGuideFieldBase}`;
const freeGuideInputClassStacked = `h-10 min-h-10 ${freeGuideFieldBase} md:h-8 md:min-h-8`;

export type AboveTheFoldFreeGuideBookBaseProps = {
  guideTitle: string;
  guideLine1: string;
  guideLine2: string;
  ebookImage: string;
  /** CTA button label. @default "Get it Here" */
  ctaLabel?: string;
  /** Fired before default prevention if you need analytics or routing. */
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
};

export type AboveTheFoldFreeGuideBookDesktopProps = AboveTheFoldFreeGuideBookBaseProps & {
  /** `section` id for anchor links. @default "free-guide" */
  sectionId?: string;
  /**
   * Tailwind / classes for the right column (headline, copy, form).\
   * Default: `mt-[100px]` (vertical alignment in 1440 artboard).\
   * Example override: `mt-0` with {@link bookRowAlign} `center` (ATF2 / Figma 415).
   */
  contentClassName?: string;
  /** Absolute `top` of the dark strip in the 1440 artboard. @default `top-[700px]` (ATF1) */
  stripTopClassName?: string;
  /**
   * Vertical alignment of the overlapping ebook + form row.\
   * Figma 415: `center` + `contentClassName="mt-0"`.
   * @default "start"
   */
  bookRowAlign?: "start" | "center";
  /** Ebook row offset from the strip (overlap). @default `top-[-60px]` */
  bookOverlapTopClassName?: string;
};

export type AboveTheFoldFreeGuideBookMobileProps = AboveTheFoldFreeGuideBookBaseProps & {
  sectionId?: string;
};

/** Figma 328:56 — 446×375 frame, vertical crop for cover art. */
export function FreeGuideEbookFigure({
  src,
  variant,
}: {
  src: string;
  variant: "desktop" | "stacked";
}): JSX.Element {
  if (variant === "desktop") {
    return (
      <div className="relative h-[375px] w-full max-w-[446px] shrink-0">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            alt="Custom home guide ebook"
            className="absolute left-0 top-[-5.52%] h-[105.48%] w-full max-w-none object-contain object-left"
            src={src}
            loading="lazy"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="relative mx-auto h-[260px] w-full max-w-[446px] min-[400px]:h-[300px] sm:h-[340px] md:h-[375px]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          alt="Custom home guide ebook"
          className="absolute left-0 top-[-5.52%] h-[105.48%] w-full max-w-none object-contain object-center"
          src={src}
          loading="lazy"
        />
      </div>
    </div>
  );
}

/**
 * For the 1440px fixed artbook: `absolute` strip under the hero, ebook overlaps `top-[-60px]`.
 */
export function AboveTheFoldFreeGuideBookDesktop({
  guideTitle,
  guideLine1,
  guideLine2,
  ebookImage,
  ctaLabel = "Get it Here",
  sectionId = "free-guide",
  contentClassName = "mt-[100px]",
  stripTopClassName = "top-[700px]",
  bookRowAlign = "start",
  bookOverlapTopClassName = "top-[-60px]",
  onSubmit,
}: AboveTheFoldFreeGuideBookDesktopProps): JSX.Element {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    onSubmit?.(e);
    e.preventDefault();
  };
  const rowAlign = bookRowAlign === "center" ? "items-center" : "items-start";
  const contentSelf = bookRowAlign === "center" ? "self-center" : "self-start";
  return (
    <section
      className={`absolute left-0 min-h-[224px] w-full bg-[#1e1e1e] pb-8 pt-0 ${stripTopClassName}`}
      id={sectionId}
    >
      <div
        className={`absolute left-0 right-0 ${bookOverlapTopClassName} flex w-full min-w-0 flex-row ${rowAlign} justify-center gap-[121px]`}
      >
        <FreeGuideEbookFigure src={ebookImage} variant="desktop" />
        <div
          className={`flex w-full max-w-[485px] shrink-0 flex-col items-start gap-[14px] ${contentSelf} ${contentClassName}`}
        >
          <h2 className="min-h-[38px] w-full min-w-0 text-left font-['Syne',sans-serif] text-[24px] font-bold leading-[normal] tracking-[-0.72px] text-white">
            {guideTitle}
          </h2>
          <div className="w-full max-w-[355px] text-left font-['Inter',sans-serif] text-[16px] font-normal capitalize leading-[normal] text-white">
            <p className="mb-0">{guideLine1}</p>
            <p className="mb-0">{guideLine2}</p>
          </div>
          <form className="w-full max-w-[485px]" onSubmit={handleSubmit}>
            <div className="grid w-full max-w-[485.21px] items-center gap-x-[13px] [grid-template-columns:172.603px_172.603px_114px]">
              <input
                aria-label="First Name"
                className={`w-full min-w-0 ${freeGuideInputClass}`}
                placeholder="First Name"
                type="text"
                name="firstName"
                autoComplete="given-name"
              />
              <input
                aria-label="Email"
                className={`w-full min-w-0 ${freeGuideInputClass}`}
                placeholder="Email"
                type="email"
                name="email"
                autoComplete="email"
              />
              <button
                className="h-8 w-full min-w-0 max-w-[114px] justify-self-stretch rounded-[3px] bg-[#ffb717] font-['Syne',sans-serif] text-[12px] font-bold text-[#1c1c1c] transition-colors hover:bg-[#ffc12e]"
                type="submit"
              >
                {ctaLabel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/**
 * Full-width block for `xl:hidden` layouts: book + copy + stacked form, tablet grid.
 */
export function AboveTheFoldFreeGuideBookMobile({
  guideTitle,
  guideLine1,
  guideLine2,
  ebookImage,
  ctaLabel = "Get it Here",
  sectionId = "free-guide-mobile",
  onSubmit,
}: AboveTheFoldFreeGuideBookMobileProps): JSX.Element {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    onSubmit?.(e);
    e.preventDefault();
  };
  return (
    <section
      className="w-full bg-[#1e1e1e] px-4 py-8 sm:px-6 sm:py-10"
      id={sectionId}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-stretch gap-8 md:grid md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] md:items-center md:gap-10 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-12">
        <div className="flex justify-center md:-mt-6 md:justify-start">
          <FreeGuideEbookFigure src={ebookImage} variant="stacked" />
        </div>
        <div className="mx-auto flex w-full min-w-0 max-w-[485px] flex-col gap-[14px] md:mx-0">
          <h2 className="text-center font-['Syne',sans-serif] text-[24px] font-bold leading-[normal] tracking-[-0.72px] text-white md:text-left">
            {guideTitle}
          </h2>
          <div className="w-full text-center font-['Inter',sans-serif] text-[15px] font-normal capitalize leading-[normal] text-white min-[400px]:text-[16px] md:text-left">
            <p className="mb-0">{guideLine1}</p>
            <p className="mb-0">{guideLine2}</p>
          </div>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex w-full min-w-0 flex-col gap-3">
              <input
                aria-label="First Name"
                className={`w-full ${freeGuideInputClassStacked}`}
                placeholder="First Name"
                type="text"
                name="firstName"
                autoComplete="given-name"
              />
              <input
                aria-label="Email"
                className={`w-full ${freeGuideInputClassStacked}`}
                placeholder="Email"
                type="email"
                name="email"
                autoComplete="email"
              />
              <button
                className="h-10 w-full min-h-10 rounded-[3px] bg-[#ffb717] font-['Syne',sans-serif] text-[12px] font-bold text-[#1c1c1c] transition-colors hover:bg-[#ffc12e] md:h-8 md:min-h-8"
                type="submit"
              >
                {ctaLabel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
