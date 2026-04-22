import type { JSX } from "react";

export interface AboutSection3Props {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  image?: string;
}

const DEFAULT_IMAGE =
  "https://www.figma.com/api/mcp/asset/e100b090-4cc9-4a24-84e4-66bef12af5e1";

const defaultSubtitle = "About Us";
const defaultTitle = "A Trusted Home Builder in Toronto";
const defaultDescription =
  "When you work with us, you are not just hiring a luxury home builder in Toronto; you are gaining a partner who understands custom residential building from the first sketch to the final coat of paint.\n\nWe bridge the gap that other companies create. As a unified design build firm in Toronto, we ensure that your aesthetic vision is technically feasible and financially realistic from day one. You get premium craftsmanship without the friction of managing separate teams.";
const defaultCtaText = "Read More About Us";

export default function AboutSection3({
  title = defaultTitle,
  subtitle = defaultSubtitle,
  description = defaultDescription,
  ctaText = defaultCtaText,
  image = DEFAULT_IMAGE,
}: AboutSection3Props): JSX.Element {
  return (
    <section className="w-full bg-white font-['Inter',sans-serif] text-[#131212]">
      <div className="mx-auto max-w-[1440px] px-6 pb-[108px] pt-[102px] lg:pl-[223px] lg:pr-[169px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-[68px]">
          <div className="flex w-full max-w-[413px] flex-col gap-[23px]">
            <p className="text-[16px] font-bold leading-[38px] text-[#131212]">{subtitle}</p>
            <h2 className="text-[48px] font-bold leading-[45px] tracking-[-2px]">{title}</h2>
            <p className="text-[16px] leading-[18px] tracking-[-0.36px] text-[#363636] whitespace-pre-line">
              {description}
            </p>
            <button
              className="h-[49px] w-[176px] rounded-[4px] bg-[#ffb717] text-[12.564px] font-bold tracking-[-0.2577px] text-black shadow-[0px_2.416px_0.805px_0.805px_rgba(0,0,0,0.16)]"
              type="button"
            >
              {ctaText}
            </button>
          </div>

          <div className="relative mb-[20px] h-[401.01px] w-full max-w-[567px] self-center px-[10px] lg:mb-0 lg:mt-[21px] lg:self-auto lg:px-0">
            <div className="absolute left-0 top-[190.645px] h-[210.365px] w-[541.526px] bg-[#fbb040]" />
            <div className="absolute left-[16.435px] top-0 h-[380.465px] w-[550.565px] overflow-hidden">
              <img alt="About section" className="h-full w-full object-cover" src={image} />
            </div>
            <div className="pointer-events-none absolute inset-0 border border-transparent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
