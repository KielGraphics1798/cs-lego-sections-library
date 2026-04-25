import { useState, type JSX } from "react";

/**
 * Hero variant 5. Uses `useState` for mobile nav; in **Next.js App Router** add `"use client"`.
 */
export interface AboveTheFoldSection5Props {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  image?: string;
}

type NavItem = {
  label: string;
  href: string;
};

const HERO_IMAGE = "https://www.figma.com/api/mcp/asset/7bad0819-336b-4af6-9a1c-6bfc71811215";
const LOGO_IMAGE = "https://www.figma.com/api/mcp/asset/9928c408-2ee7-4608-9e25-02335fd63651";
const PHONE_ICON = "https://www.figma.com/api/mcp/asset/50ca8928-2ce7-4400-8091-2aaca46bfbab";
const EMAIL_ICON = "https://www.figma.com/api/mcp/asset/3e77d839-9030-428e-85e8-d52a8746a72c";
const LOCATION_ICON = "https://www.figma.com/api/mcp/asset/68600032-ba1b-41cf-88be-d9be8a203b15";
const PHONE_CALL_ICON = "https://www.figma.com/api/mcp/asset/5d5930a2-2024-4939-9487-09671843dcc7";
const TOP_SOCIAL_1 = "https://www.figma.com/api/mcp/asset/7e08c359-3ab4-48b5-a227-4a1d8d708843";
const TOP_SOCIAL_2 = "https://www.figma.com/api/mcp/asset/38dfbe15-bb2f-4b16-a534-5c2ea772a210";
const TOP_SOCIAL_3 = "https://www.figma.com/api/mcp/asset/479c84b7-3a4d-4f77-bfed-3dbef1a8cbf4";
const TOP_SOCIAL_4 = "https://www.figma.com/api/mcp/asset/69f3337a-5eea-4cd5-acf4-ae5307bcf59b";

const defaultTitle = "The Architect-Led\nHome Builder.";
const defaultSubtitle = "Custom Homes & Renovation";
const defaultDescription =
  "Altevita is a full-service design-build firm specializing in luxury renovations and custom homes. We bring 28 years of architectural expertise and precision construction to every project as your dedicated home builder in Toronto.";
const callText = "CALL US (416) 856-6959";

const navItems: NavItem[] = [
  { label: "Home", href: "#hero5" },
  { label: "About Us", href: "#hero5-about" },
  { label: "Services", href: "#hero5-services" },
  { label: "Projects", href: "#hero5-projects" },
  { label: "Process", href: "#hero5-process" },
  { label: "Contact", href: "#hero5-contact" },
];

function renderTitle(text: string): JSX.Element {
  return (
    <>
      {text.split("\n").map((line, index) => (
        <span className="block" key={`${line}-${index}`}>
          {line}
        </span>
      ))}
    </>
  );
}

function Burger({ open }: { open: boolean }): JSX.Element {
  if (open) {
    return (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 20 20">
        <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 20 20">
      <path d="M3.5 5H16.5M3.5 10H16.5M3.5 15H16.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

export default function AboveTheFoldSection5({
  title = defaultTitle,
  subtitle = defaultSubtitle,
  description = defaultDescription,
  ctaText = "FREE CONSULTATION",
  image = HERO_IMAGE,
}: AboveTheFoldSection5Props): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="w-full bg-[#022336] font-['Inter',sans-serif] text-white">
      <div className="relative mx-auto max-w-[1424px] overflow-hidden" id="hero5">
        <div className="hidden h-[56px] border-b border-[rgba(124,124,124,0.25)] bg-[#022336] text-white lg:block">
          <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6 font-['Kumbh_Sans',sans-serif] text-[16px] leading-[25.6px]">
            <div className="flex items-center gap-6">
              <a className="flex items-center gap-2" href="tel:+14168566959">
                <img alt="Phone" className="h-[14px] w-[14px]" src={PHONE_ICON} />
                <span>[Phone Number]</span>
              </a>
              <a className="flex items-center gap-2" href="mailto:hello@example.com">
                <img alt="Email" className="h-[14px] w-[14px]" src={EMAIL_ICON} />
                <span>[Email Address]</span>
              </a>
              <span className="flex items-center gap-2">
                <img alt="Location" className="h-[14px] w-[14px]" src={LOCATION_ICON} />
                <span>[Target Location]</span>
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span>Follow Us On:</span>
              <div className="flex items-center gap-[5px]">
                <a href="#"><img alt="Facebook" className="h-6 w-6" src={TOP_SOCIAL_1} /></a>
                <a href="#"><img alt="Social" className="h-6 w-6" src={TOP_SOCIAL_2} /></a>
                <a href="#"><img alt="Social" className="h-6 w-6" src={TOP_SOCIAL_3} /></a>
                <a href="#"><img alt="LinkedIn" className="h-6 w-6" src={TOP_SOCIAL_4} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[777px]">
          <img alt="Hero background" className="absolute inset-0 h-full w-full object-cover" src={image} />

          <div className="absolute left-1/2 top-[46px] w-full max-w-[1280px] -translate-x-1/2 px-4 lg:px-0">
            <div className="relative flex items-center justify-between">
              <img alt="Altevita logo" className="h-[88px] w-[82px] lg:h-[103px] lg:w-[95px]" src={LOGO_IMAGE} />

              <nav className="hidden items-center gap-[19px] text-[14px] font-medium tracking-[-0.65px] lg:flex">
                {navItems.map((item) => (
                  <a className="whitespace-nowrap" href={item.href} key={item.label}>
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="hidden items-center gap-2 lg:flex">
                <img alt="" className="h-[27px] w-[27px]" src={PHONE_CALL_ICON} />
                <span className="text-[14px] font-medium tracking-[0.35px] uppercase">{callText}</span>
              </div>

              <button className="hidden h-[38px] w-[174px] rounded-[3px] border-[0.75px] border-[#d2ac6e] bg-[#ffb717] text-[12px] font-bold text-black lg:inline-flex lg:items-center lg:justify-center" type="button">
                {ctaText}
              </button>

              <div className="flex items-center gap-3 lg:hidden">
                <button className="h-[34px] rounded-[3px] bg-[#ffb717] px-3 text-[11px] font-bold text-[#1c1c1c]" type="button">
                  {ctaText}
                </button>
                <button
                  aria-expanded={mobileMenuOpen}
                  aria-label="Toggle mobile navigation"
                  className="grid h-9 w-9 place-items-center rounded border border-white/20 text-white"
                  onClick={() => setMobileMenuOpen((value) => !value)}
                  type="button"
                >
                  <Burger open={mobileMenuOpen} />
                </button>
              </div>
            </div>

            {mobileMenuOpen ? (
              <div className="mt-4 rounded-lg border border-white/15 bg-[#022336]/95 p-4 text-center lg:hidden">
                <div className="mb-3 flex items-center justify-center gap-2 text-[12px] uppercase tracking-[0.35px] text-white/80">
                  <img alt="" className="h-[20px] w-[20px]" src={PHONE_CALL_ICON} />
                  <span>{callText}</span>
                </div>
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <a
                      className="block text-[14px] font-medium"
                      href={item.href}
                      key={item.label}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="relative z-10 px-4 pt-[220px] text-center lg:px-[162px] lg:pt-[268px] lg:text-left">
            <div className="flex items-center justify-center gap-4 text-[12px] font-bold uppercase tracking-[2.4px] text-white/80 lg:justify-start">
              <span className="h-px w-[48px] bg-white/60" />
              <span>{subtitle}</span>
            </div>

            <h1 className="mt-[14px] text-[40px] font-semibold leading-[1.05] tracking-[-2px] text-white sm:text-[48px] lg:mt-[20px] lg:text-[64px] lg:leading-[64px] lg:tracking-[-4px]">
              {renderTitle(title)}
            </h1>

            <p className="mx-auto mt-[16px] max-w-[565px] text-[15px] leading-[22px] text-white lg:mx-0 lg:mt-[20px] lg:text-[16px]">
              {description}
            </p>

            <div className="mt-[24px] flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <button
                className="h-[38px] w-[174px] rounded-[3px] border-[0.75px] border-[#d2ac6e] bg-[#ffb717] text-[12px] font-bold text-black"
                type="button"
              >
                {ctaText}
              </button>
              <a
                className="flex h-[38px] w-[185px] items-center justify-center rounded-[3px] border-[0.75px] border-[#ffb717] text-[12px] text-white"
                href="tel:+14168566959"
              >
                {callText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}