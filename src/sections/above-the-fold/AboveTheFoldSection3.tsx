import { useState, type JSX } from "react";

/**
 * Hero variant 3. Uses `useState` for nav; in **Next.js App Router** add `"use client"`.
 */
export interface AboveTheFoldSection3Props {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  image?: string;
}

type NavItem = {
  label: string;
  href: string;
  links?: { label: string; href: string }[];
};

const HERO_IMAGE = "https://www.figma.com/api/mcp/asset/20436f65-8b49-4d05-80b7-10d9851b5c79";
const GALLERY_IMAGE_1 = "https://www.figma.com/api/mcp/asset/e8900a6c-247e-4c2f-a5b8-d413ad213bb8";
const GALLERY_IMAGE_2 = "https://www.figma.com/api/mcp/asset/04096ed5-fe02-4cc9-bb70-6a5dc3e3fce9";
const GALLERY_IMAGE_3 = "https://www.figma.com/api/mcp/asset/78dcdf97-efcb-4fe7-b962-9097a5ce2acc";
const FACEBOOK_ICON = "https://www.figma.com/api/mcp/asset/480fe43b-8086-42d4-b452-c0de061e3bd3";
const INSTAGRAM_ICON = "https://www.figma.com/api/mcp/asset/6b1e8d01-5733-4f7f-8d2e-e62df57ccdc5";
const TWITTER_ICON = "https://www.figma.com/api/mcp/asset/21841800-e828-494d-8031-ebe5f3765975";
const YOUTUBE_ICON = "https://www.figma.com/api/mcp/asset/36bbc9fa-389e-40d8-a013-f11729f12e44";
const LOGO_IMAGE = "https://www.figma.com/api/mcp/asset/7fb3956c-9f4f-428a-b188-b917d91e735d";

const defaultTitle = "The Architect-Led Home Builder in Toronto";
const defaultSubtitle =
  "Offering the best (service provided) in (City or location) and the surrounding area (how and what customer will get out of it).";
const defaultDescription =
  "We bring creativity, precision, and passion to every renovation project, transforming spaces into stunning reflections of modern living and comfort.";
const estimateText = "FREE ESTIMATE";
const callText = "CALL US (416) 856-6959";

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "#hero3",
    links: [
      { label: "Hero", href: "#hero3" },
      { label: "Highlights", href: "#hero3-highlights" },
      { label: "Gallery", href: "#hero3-gallery" },
    ],
  },
  {
    label: "About Us",
    href: "#hero3-about",
    links: [
      { label: "Company", href: "#hero3-about" },
      { label: "Team", href: "#hero3-about-team" },
      { label: "Approach", href: "#hero3-about-approach" },
    ],
  },
  {
    label: "Services",
    href: "#hero3-services",
    links: [
      { label: "Custom Homes", href: "#hero3-services" },
      { label: "Renovations", href: "#hero3-services-reno" },
      { label: "Design Build", href: "#hero3-services-design" },
    ],
  },
  { label: "Projects", href: "#hero3-projects" },
  { label: "FAQs", href: "#hero3-faqs" },
  { label: "Contact Us", href: "#hero3-contact" },
];

function Chevron({ open }: { open: boolean }): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 12 12"
    >
      <path d="M2.25 4.5L6 8.25L9.75 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
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

export default function AboveTheFoldSection3({
  title = defaultTitle,
  subtitle = defaultSubtitle,
  description = defaultDescription,
  ctaText = "FREE CONSULTATION",
  image = HERO_IMAGE,
}: AboveTheFoldSection3Props): JSX.Element {
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <section className="w-full bg-black font-['Inter',sans-serif] text-white">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden" id="hero3">
        <img alt="Hero background" className="absolute inset-0 h-full w-full object-cover" src={image} />
        <div className="absolute inset-0 bg-black/[0.68]" />

        <header className="relative z-30 bg-[#1c1c1c]">
          <div className="mx-auto hidden h-[120px] max-w-[1060px] items-center justify-between gap-8 px-4 lg:flex">
            <img alt="Altevita logo" className="h-[78.14px] w-[72px]" src={LOGO_IMAGE} />

            <nav className="flex items-center" onMouseLeave={() => setDesktopMenu(null)}>
              {navItems.map((item) => {
                const hasDropdown = Boolean(item.links?.length);
                const isOpen = desktopMenu === item.label;
                return (
                  <div className="relative" key={item.label}>
                    <a
                      className={`flex h-[42.5px] items-center px-5 text-[14px] font-medium ${isOpen ? "border-b-[3px] border-white" : ""}`}
                      href={item.href}
                      onMouseEnter={() => setDesktopMenu(hasDropdown ? item.label : null)}
                    >
                      {item.label}
                      {hasDropdown ? (
                        <span className="ml-[10px]">
                          <Chevron open={isOpen} />
                        </span>
                      ) : null}
                    </a>
                    {hasDropdown && isOpen ? (
                      <div className="absolute left-0 top-[44px] z-40 min-w-[200px] rounded-[3px] border border-white/10 bg-[#1c1c1c] p-2 shadow-xl">
                        {item.links?.map((link) => (
                          <a
                            className="block rounded px-3 py-2 text-[13px] text-white hover:bg-white/10"
                            href={link.href}
                            key={link.label}
                            onClick={() => setDesktopMenu(null)}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </nav>

            <button className="h-[38px] w-[141px] rounded-[3px] bg-[#ffb717] text-[12px] font-bold text-[#1c1c1c]" type="button">
              {estimateText}
            </button>
          </div>

          <div className="mx-auto flex h-[84px] max-w-[1060px] items-center justify-between px-4 lg:hidden">
            <img alt="Altevita logo" className="h-[56px] w-[52px]" src={LOGO_IMAGE} />
            <div className="flex items-center gap-3">
              <button className="h-[34px] rounded-[3px] bg-[#ffb717] px-3 text-[11px] font-bold text-[#1c1c1c]" type="button">
                {estimateText}
              </button>
              <button
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle mobile navigation"
                className="grid h-9 w-9 place-items-center rounded border border-white/20 text-white"
                onClick={() => {
                  setMobileMenuOpen((value) => !value);
                  setMobileDropdown(null);
                }}
                type="button"
              >
                <Burger open={mobileMenuOpen} />
              </button>
            </div>
          </div>

          {mobileMenuOpen ? (
            <div className="border-t border-white/10 px-4 pb-4 lg:hidden">
              {navItems.map((item) => {
                const hasDropdown = Boolean(item.links?.length);
                const isOpen = mobileDropdown === item.label;
                return (
                  <div className="border-b border-white/10 py-2 text-center" key={item.label}>
                    {hasDropdown ? (
                      <button
                        className="flex w-full items-center justify-center gap-2 text-[14px] font-medium text-white"
                        onClick={() => setMobileDropdown((value) => (value === item.label ? null : item.label))}
                        type="button"
                      >
                        <Chevron open={isOpen} />
                        {item.label}
                      </button>
                    ) : (
                      <a
                        className="block w-full text-[14px] font-medium text-white"
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )}
                    {hasDropdown && isOpen ? (
                      <div className="mt-2 space-y-2">
                        {item.links?.map((link) => (
                          <a
                            className="block text-[13px] text-white/80"
                            href={link.href}
                            key={link.label}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileDropdown(null);
                            }}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          ) : null}
        </header>

        <div className="relative z-20 px-4 pb-14 pt-16 text-center lg:pb-[241px] lg:pt-[129px] lg:text-left">
          <div className="mx-auto max-w-[579px] lg:ml-auto lg:mr-[159px]">
            <h1 className="text-[38px] font-bold leading-[1.08] tracking-[-1.14px] text-white sm:text-[42px] lg:text-[48px] lg:tracking-[-1.44px]">{title}</h1>
            <p className="mx-auto mt-[26px] max-w-[565px] text-[16px] leading-[22px] text-white lg:mx-0 lg:leading-normal">{subtitle}</p>
            <div className="mt-[26px] flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <button
                className="h-[38px] w-[174px] rounded-[3px] border-[0.75px] border-[#d2ac6e] bg-[#ffb717] text-[12px] font-bold text-black"
                type="button"
              >
                {ctaText}
              </button>
              <a
                className="flex h-[38px] w-[185px] items-center justify-center rounded-[3px] border-[0.75px] border-[#ffb717] text-[12px] font-normal text-white"
                href="tel:+14168566959"
              >
                {callText}
              </a>
            </div>
          </div>
        </div>

        <section className="relative z-20 bg-black/60" id="hero3-highlights">
          <div className="mx-auto flex max-w-[1108px] flex-col items-center gap-10 px-4 py-8 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-[75px] lg:px-0 lg:py-[58px] lg:text-left">
            <div className="max-w-[336.74px] shrink-0">
              <div className="flex items-center justify-center gap-[21px] lg:justify-start">
                <a aria-label="Facebook" href="#">
                  <img alt="Facebook" className="h-[20.03px] w-[21.14px]" src={FACEBOOK_ICON} />
                </a>
                <a aria-label="Instagram" href="#">
                  <img alt="Instagram" className="h-[20.03px] w-[21.14px]" src={INSTAGRAM_ICON} />
                </a>
                <a aria-label="Twitter" href="#">
                  <img alt="Twitter" className="h-[20.03px] w-[21.14px]" src={TWITTER_ICON} />
                </a>
                <a aria-label="YouTube" href="#">
                  <img alt="YouTube" className="h-[20.03px] w-[21.14px]" src={YOUTUBE_ICON} />
                </a>
              </div>
              <p className="mt-[15px] text-[12px] leading-[18.75px] text-white">{description}</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:flex-nowrap lg:gap-[30px]" id="hero3-gallery">
              <img alt="Gallery preview 1" className="h-[125.51px] w-[211.77px] object-cover" src={GALLERY_IMAGE_1} />
              <img alt="Gallery preview 2" className="h-[125.51px] w-[212.52px] object-cover" src={GALLERY_IMAGE_2} />
              <img alt="Gallery preview 3" className="h-[125.51px] w-[211.77px] object-cover" src={GALLERY_IMAGE_3} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}