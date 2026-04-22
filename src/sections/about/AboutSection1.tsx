import type { JSX } from "react";

export interface AboutSection1Props {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  image?: string;
}

const DEFAULT_IMAGE =
  "https://www.figma.com/api/mcp/asset/4bcb1d95-0f7b-4d1d-b2d9-e3e4ed8492e1";

const defaultTitle = "A Trusted Home Builder in Toronto";
const defaultSubtitle = "About Us";
const defaultDescription =
  "Hi, I’m Kash. I founded Altevita because I saw a fundamental flaw in how homes are built. Too often, homeowners are caught in a tug-of-war between a designer’s vision and a contractor’s reality. This disconnect leads to delays, budget overruns, and compromised designs.\n\nI believe you deserve better. I am a licensed architect and a builder with 28 years of experience. This means I view your project through two lenses: creative potential and constructability. When you work with us, you are not just hiring a luxury home builder in Toronto; you are gaining a partner who understands custom residential building from the first sketch to the final coat of paint.\n\nWe bridge the gap that other companies create. As a unified design build firm in Toronto, we ensure that your aesthetic vision is technically feasible and financially realistic from day one. You get premium craftsmanship without the friction of managing separate teams.\nIf you’re looking for someone you can trust with your project from plans through to completion, reach out and book a FREE Consultation so we can get to know you and your project. CONTACT US to get started.";
const defaultCtaText = "Read More About Us";

export default function AboutSection1({
  title = defaultTitle,
  subtitle = defaultSubtitle,
  description = defaultDescription,
  ctaText = defaultCtaText,
  image = DEFAULT_IMAGE,
}: AboutSection1Props): JSX.Element {
  return (
    <section className="w-full bg-white font-['Inter',sans-serif] text-[#131212]">
      <div className="mx-auto max-w-[1440px] px-6 pb-[111.5px] pt-[85px] lg:pl-[158px] lg:pr-[133px]">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-[83px]">
          <div className="relative w-full max-w-[531px]">
            <img alt="Terrace Edge" className="w-full object-cover lg:h-[585px]" src={image} />
            <div className="absolute bottom-0 right-0 h-[120px] w-[125px] bg-black lg:left-[410px] lg:top-[473px] lg:h-[148px] lg:w-[154px]" />
            <div className="absolute bottom-[12px] right-[14px] text-[#ffb717] lg:left-[428px] lg:top-[494.923px] lg:bottom-auto lg:right-auto">
              <p className="font-['Syne',sans-serif] text-[52.923px] font-bold leading-[17.641px]">28</p>
              <p className="font-['Syne',sans-serif] text-[22.051px] font-bold leading-[17.641px]">Years of Experience</p>
            </div>
          </div>

          <div className="w-full max-w-[535px] text-left">
            <p className="text-[16px] font-bold leading-[38px] text-[#131212]">{subtitle}</p>
            <h2 className="mt-[18px] max-w-[413px] text-[48px] font-bold leading-[45px] tracking-[-2px]">
              {title}
            </h2>
            <p className="mt-[10px] whitespace-pre-line text-[16px] leading-[18px] tracking-[-0.36px] text-[#363636]">
              {description}
            </p>
            <button
              className="mt-[20px] h-[49px] w-[176px] rounded-[4px] bg-[#ffb717] text-[12.564px] font-bold tracking-[-0.2577px] text-black shadow-[0px_2.416px_0.805px_0.805px_rgba(0,0,0,0.16)]"
              type="button"
            >
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
