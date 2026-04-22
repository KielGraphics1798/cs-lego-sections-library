import { useState, type JSX } from "react";

export interface AboveTheFoldSection2Props {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  image?: string;
}

type NavItem = {
  label: string;
  links: { label: string; href: string }[];
};

const HERO_IMAGE = "https://www.figma.com/api/mcp/asset/3a844713-05e9-4080-9f6b-2975f4c884dd";
const LOGO_IMAGE = "https://www.figma.com/api/mcp/asset/e1fd0706-08d9-4b2e-afef-4c61bf061e68";
const GUIDE_IMAGE = "https://www.figma.com/api/mcp/asset/c1b77bf2-24af-4a72-b0b8-6b65251760dd";

const LICENSE_BADGE_1 = "/src/assets/logos/image%2015%20(3).png";
const LICENSE_BADGE_2 = "/src/assets/logos/MB-logo%201%20(2).png";
const LICENSE_BADGE_3 = "/src/assets/logos/nzcb-logo%201%20(2).png";

const CLIENT1_LOGO = "https://www.figma.com/api/mcp/asset/a856f84a-61de-4b52-ab25-62484a08f9bf";
const CLIENT2_LOGO = "https://www.figma.com/api/mcp/asset/83dbff4b-c7be-4667-a6cc-0f73b081e2b9";
const CLIENT3_LOGO = "https://www.figma.com/api/mcp/asset/461bde60-c0ac-4b30-a972-08b5e3b539e3";
const CLIENT4_LOGO = "https://www.figma.com/api/mcp/asset/bbc62079-78ed-4298-a4be-bbf9b53995ca";
const CLIENT5_LOGO = "https://www.figma.com/api/mcp/asset/15663aa1-f84f-4ca2-8559-ac92775b3d43";

const defaultTitle = "The Architect-Led Home Builder\nin Toronto";
const defaultSubtitle = "Offering the best (service provided) in (City or location) and the surrounding area (how and what customer will get out of it).";
const navItems: NavItem[] = [
  {
    label: "Home",
    links: [
      { label: "Hero", href: "#hero2" },
      { label: "Guide", href: "#hero2-guide" },
      { label: "Trust", href: "#hero2-trust" },
    ],
  },
  {
    label: "About Us",
    links: [
      { label: "Our Story", href: "#about-story" },
      { label: "Our Team", href: "#about-team" },
      { label: "Values", href: "#about-values" },
    ],
  },
  {
    label: "Services",
    links: [
      { label: "Custom Homes", href: "#services-custom" },
      { label: "Renovations", href: "#services-renovations" },
      { label: "Design Build", href: "#services-design-build" },
    ],
  },
  {
    label: "Projects",
    links: [
      { label: "Portfolio", href: "#projects-portfolio" },
      { label: "Case Studies", href: "#projects-case-studies" },
      { label: "Gallery", href: "#projects-gallery" },
    ],
  },
  {
    label: "FAQs",
    links: [
      { label: "General", href: "#faq-general" },
      { label: "Process", href: "#faq-process" },
      { label: "Pricing", href: "#faq-pricing" },
    ],
  },
  {
    label: "Contact Us",
    links: [
      { label: "Call", href: "tel:+14168566959" },
      { label: "Email", href: "mailto:hello@example.com" },
      { label: "Consultation", href: "#contact-consultation" },
    ],
  },
];

function Chevron({ open }: { open: boolean }): JSX.Element {
  return (
    <svg className={`h-3 w-3 transition-transform ${open ? "rotate-180" : "rotate-0"}`} viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.25 4.5L6 8.25L9.75 4.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Burger({ open }: { open: boolean }): JSX.Element {
  if (open) {
    return (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
        <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 5H16.5M3.5 10H16.5M3.5 15H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function renderTitle(title: string): JSX.Element {
  return (
    <>
      {title.split("\n").map((line, index) => (
        <span key={`${line}-${index}`} className="block">
          {line}
        </span>
      ))}
    </>
  );
}

export default function AboveTheFoldSection2({
  title = defaultTitle,
  subtitle = defaultSubtitle,
  description = "Download Our FREE Custom Home Guide no Guesswork, Just a Process that works",
  ctaText = "FREE CONSULTATION",
  image = HERO_IMAGE,
}: AboveTheFoldSection2Props): JSX.Element {
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <section className="w-full bg-white font-['Inter',sans-serif]">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden" id="hero2">
        <div className="absolute inset-0">
          <img alt="Hero background" className="h-full w-full object-cover" src={image} />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <header className="relative z-20 bg-[rgba(28,28,28,0.52)]">
          <div className="mx-auto hidden h-[120px] max-w-[1192px] items-center justify-between px-4 lg:flex">
            <img alt="Altevita logo" className="h-[78px] w-[72px]" src={LOGO_IMAGE} />

            <nav className="relative" onMouseLeave={() => setDesktopMenu(null)}>
              <ul className="flex items-center">
                {navItems.map((item) => {
                  const isOpen = desktopMenu === item.label;
                  return (
                    <li key={item.label} className="relative">
                      <button
                        aria-expanded={isOpen}
                        className="flex h-[42.5px] items-center gap-2 px-5 text-[14px] font-medium text-white transition-colors hover:text-[#ffb717]"
                        type="button"
                        onClick={() => setDesktopMenu((current) => (current === item.label ? null : item.label))}
                      >
                        <span>{item.label}</span>
                        <Chevron open={isOpen} />
                      </button>
                      <div className={`absolute left-1/2 top-[44px] z-30 w-[200px] -translate-x-1/2 rounded-[8px] border border-[rgba(210,172,110,0.4)] bg-[rgba(22,22,22,0.95)] p-2 shadow-2xl ${isOpen ? "block" : "hidden"}`}>
                        {item.links.map((link) => (
                          <a
                            key={link.label}
                            className="block rounded-[6px] px-3 py-2 text-[13px] text-white transition-colors hover:bg-[rgba(255,183,23,0.14)] hover:text-[#ffb717]"
                            href={link.href}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <button className="h-[38px] w-[155px] rounded-[3px] bg-[#ffb717] font-['Syne',sans-serif] text-[12px] font-bold text-[#1c1c1c]" type="button">
              FREE ESTIMATE
            </button>
          </div>

          <div className="mx-auto flex h-[98px] max-w-[720px] items-center justify-between px-4 lg:hidden">
            <img alt="Altevita logo" className="h-[68px] w-[62px]" src={LOGO_IMAGE} />
            <div className="flex items-center gap-2">
              <button className="h-[38px] rounded-[3px] bg-[#ffb717] px-4 font-['Syne',sans-serif] text-[12px] font-bold text-[#1c1c1c]" type="button">
                FREE ESTIMATE
              </button>
              <button
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-[3px] border border-[rgba(255,255,255,0.25)] bg-[rgba(0,0,0,0.28)] text-white"
                type="button"
                onClick={() => {
                  setMobileMenuOpen((open) => !open);
                  setMobileDropdown(null);
                }}
              >
                <Burger open={mobileMenuOpen} />
              </button>
            </div>
          </div>

          {mobileMenuOpen ? (
            <div className="mx-auto max-w-[720px] px-4 pb-4 lg:hidden">
              <div className="rounded-[10px] border border-[rgba(255,255,255,0.15)] bg-[rgba(20,20,20,0.92)] p-3">
                <ul className="space-y-2">
                  {navItems.map((item) => {
                    const isOpen = mobileDropdown === item.label;
                    return (
                      <li key={item.label} className="rounded-[8px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
                        <button
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between px-4 py-3 text-left text-[15px] font-medium text-white"
                          type="button"
                          onClick={() => setMobileDropdown((current) => (current === item.label ? null : item.label))}
                        >
                          <span>{item.label}</span>
                          <Chevron open={isOpen} />
                        </button>
                        {isOpen ? (
                          <div className="space-y-1 px-2 pb-3">
                            {item.links.map((link) => (
                              <a
                                key={link.label}
                                className="block rounded-[6px] px-3 py-2 text-[13px] text-[rgba(255,255,255,0.88)] transition-colors hover:bg-[rgba(255,183,23,0.14)] hover:text-[#ffb717]"
                                href={link.href}
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : null}
        </header>

        <div className="relative z-10 px-4 pb-[90px] pt-[54px] lg:pb-[142px] lg:pt-[142px]">
          <div className="mx-auto max-w-[1192px]">
            <div className="max-w-[686px]">
              <h1 className="font-['Syne',sans-serif] text-[44px] font-extrabold leading-[0.95] tracking-[-1.44px] text-white sm:text-[48px]">
                {renderTitle(title)}
              </h1>

              <p className="mt-[29px] max-w-[565px] text-[16px] leading-[22px] text-white">{subtitle}</p>

              <div className="mt-[29px] flex max-w-[413px] flex-col gap-3 sm:flex-row">
                <button
                  className="h-[38px] rounded-[3px] border-[0.75px] border-[#d2ac6e] bg-[#ffb717] font-['Syne',sans-serif] text-[12px] font-bold text-black sm:w-[186px]"
                  type="button"
                >
                  {ctaText}
                </button>
                <a
                  className="flex h-[38px] items-center justify-center rounded-[3px] border-[0.75px] border-[#ffb717] font-['Syne',sans-serif] text-[12px] font-bold text-white sm:w-[210px]"
                  href="tel:+14168566959"
                >
                  CALL US (416) 856-6959
                </a>
              </div>

              <div className="mt-[60px] flex flex-wrap items-center gap-4">
                <p className="font-['Syne',sans-serif] text-[15.29px] font-extrabold tracking-[-0.4587px] text-white">License & Warranty</p>
                <div className="flex items-center gap-[30.83px]">
                  <img alt="License badge" className="h-[63.115px] w-[63.115px]" src={LICENSE_BADGE_1} />
                  <img alt="Master builder badge" className="h-[68.638px] w-[51.095px]" src={LICENSE_BADGE_2} />
                  <img alt="Halo badge" className="h-[59.89px] w-[52.131px]" src={LICENSE_BADGE_3} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="relative z-20 overflow-visible bg-[rgba(0,0,0,0.82)]" id="hero2-guide">
          <div className="mx-auto grid max-w-[951px] items-center gap-8 px-4 py-[15px] md:grid-cols-[438px_513px]">
            <div className="order-2 w-full max-w-[360px] text-left md:order-1 md:max-w-[350px] md:py-[15px]">
              <h2 className="font-['Syne',sans-serif] text-[30px] font-bold tracking-[-0.9px] text-white">Not Sure Where to Start?</h2>
              <p className="mt-[10px] max-w-[335px] text-[14px] leading-[20px] text-white">{description}</p>
              <form className="mt-[12px] flex w-full flex-wrap items-center justify-start gap-2" onSubmit={(event) => event.preventDefault()}>
                <input
                  className="h-[38px] w-[120px] rounded-[3px] border border-transparent bg-white px-3 text-[12px] text-[#1c1c1c] outline-none placeholder:text-[#1c1c1c]/70"
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                />
                <input
                  className="h-[38px] w-[120px] rounded-[3px] border border-transparent bg-white px-3 text-[12px] text-[#1c1c1c] outline-none placeholder:text-[#1c1c1c]/70"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <button className="h-[38px] w-[108px] rounded-[3px] bg-[#ffb717] font-['Syne',sans-serif] text-[12px] font-bold text-[#1c1c1c]" type="submit">
                  Get It Here
                </button>
              </form>
            </div>

            <img alt="Guide 3D" className="order-1 mx-auto h-auto w-full max-w-[513px] md:order-2 md:-mt-[95px] md:-mb-[125px]" src={GUIDE_IMAGE} />
          </div>
        </section>

        <section className="relative z-10 bg-white px-4 py-[84px] md:pt-[140px]" id="hero2-trust">
          <div className="mx-auto max-w-[1170px]">
            <div className="relative h-4">
              <div className="absolute left-0 top-1/2 h-px w-[43%] -translate-y-1/2 bg-[#e6e6e6]" />
              <div className="absolute right-0 top-1/2 h-px w-[43%] -translate-y-1/2 bg-[#e6e6e6]" />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] font-medium text-[#1e1e2a]">Who Trust Us</p>
            </div>

            <ul className="mt-[38px] flex flex-wrap items-center justify-center gap-8 md:gap-10">
              <li><img alt="Client logo 1" className="w-[189px] max-w-full" src={CLIENT1_LOGO} /></li>
              <li><img alt="Client logo 2" className="w-[189px] max-w-full" src={CLIENT2_LOGO} /></li>
              <li><img alt="Client logo 3" className="w-[189px] max-w-full" src={CLIENT3_LOGO} /></li>
              <li><img alt="Client logo 4" className="w-[189px] max-w-full" src={CLIENT4_LOGO} /></li>
              <li><img alt="Client logo 5" className="w-[189px] max-w-full" src={CLIENT5_LOGO} /></li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}