import type { JSX } from "react";

export interface AboutSection2Props {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  image?: string;
}

const DEFAULT_MAIN_IMAGE =
  "https://www.figma.com/api/mcp/asset/a17a1428-ca6a-4b60-8389-3d970566b00c";
const DEFAULT_BG_IMAGE =
  "https://www.figma.com/api/mcp/asset/74c2fc4c-91e1-4213-ad2b-415dd63d3e53";
const DEFAULT_SIGNATURE =
  "https://www.figma.com/api/mcp/asset/55103d8b-602c-44c3-8996-0c28522abb51";

const defaultSubtitle = "About Us";
const defaultDescription =
  "When you work with us, you are not just hiring a luxury home builder in Toronto; you are gaining a partner who understands custom residential building from the first sketch to the final coat of paint.\nWe bridge the gap that other companies create. As a unified design build firm in Toronto, we ensure that your aesthetic vision is technically feasible and financially realistic from day one. You get premium craftsmanship without the friction of managing separate teams.";
const defaultTitle = "A Trusted Home Builder in Toronto";
const defaultBody =
  "Hi, I’m Kash. I founded Altevita because I saw a fundamental flaw in how homes are built. Too often, homeowners are caught in a tug-of-war between a designer’s vision and a contractor’s reality. This disconnect leads to delays, budget overruns, and compromised designs.\n\nI believe you deserve better. I am a licensed architect and a builder with 28 years of experience. This means I view your project through two lenses: creative potential and constructability.\nIf you’re looking for someone you can trust with your project from plans through to completion, reach out and book a FREE Consultation so we can get to know you and your project. CONTACT US to get started.";
const defaultCtaText = "Read More About Us";

export default function AboutSection2({
  title = defaultTitle,
  subtitle = defaultSubtitle,
  description = defaultDescription,
  ctaText = defaultCtaText,
  image = DEFAULT_MAIN_IMAGE,
}: AboutSection2Props): JSX.Element {
  return (
    <section className="relative w-full bg-white font-['Inter',sans-serif] text-[#131212]">
      <div className="mx-auto max-w-[1440px] px-4 pb-[120px] pt-[84px] sm:px-6 lg:px-[133px]">
        <div className="mx-auto flex max-w-[715px] flex-col items-center gap-[16px] text-center">
          <h2 className="text-[48px] font-bold leading-[38px] text-[#131212]">{subtitle}</h2>
          <p className="text-[16px] leading-[18px] tracking-[-0.36px] text-[#363636] whitespace-pre-line">
            {description}
          </p>
        </div>

        <div className="mt-[108px] flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[52px]">
          <div className="relative w-full max-w-[796px] lg:-ml-[76px]">
            <div className="absolute left-0 top-[82px] h-[399px] w-[764px] opacity-25 lg:block hidden">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  alt=""
                  className="absolute h-[145.08%] left-[-0.01%] top-0 w-[100.03%] max-w-none"
                  src={DEFAULT_BG_IMAGE}
                />
              </div>
            </div>
            <div className="relative h-[428px] w-full max-w-[565px] lg:ml-[231px]">
              <img alt="About" className="absolute inset-0 h-full w-full object-cover" src={image} />
            </div>
          </div>

          <div className="flex w-full max-w-[535px] flex-col gap-[28px] text-left">
            <h3 className="max-w-[413px] text-[48px] font-bold leading-[45px] tracking-[-2px]">{title}</h3>
            <p className="text-[16px] leading-[18px] tracking-[-0.36px] text-[#363636] whitespace-pre-line">
              {defaultBody}
            </p>
            <div className="flex flex-wrap items-center gap-[16px]">
              <button
                className="h-[49px] w-[176px] rounded-[4px] bg-[#ffb717] text-[12.564px] font-bold tracking-[-0.2577px] text-black shadow-[0px_2.416px_0.805px_0.805px_rgba(0,0,0,0.16)]"
                type="button"
              >
                {ctaText}
              </button>
              <img alt="Signature" className="h-[41px] w-[214.995px] object-cover" src={DEFAULT_SIGNATURE} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
