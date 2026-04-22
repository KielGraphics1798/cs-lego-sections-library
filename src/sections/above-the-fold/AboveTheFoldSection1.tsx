import { useState, type JSX } from "react";

export interface AboveTheFoldSection1Props {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  image?: string;
}

type DropdownLink = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  links: DropdownLink[];
};

const HERO_IMAGE =
  "https://www.figma.com/api/mcp/asset/3149139b-df3c-4c80-9f03-8f4832f8239a";
const EBOOK_IMAGE =
  "https://www.figma.com/api/mcp/asset/75848997-90cc-4e23-a0df-297ca9f04d96";
const CLIENT1_LOGO =
  "https://www.figma.com/api/mcp/asset/6f5f2e66-c52f-4d77-9035-7cded9d02ccb";
const CLIENT2_LOGO =
  "https://www.figma.com/api/mcp/asset/b25657cf-dd13-4c0c-8663-dec71e9c4fd5";
const CLIENT3_LOGO =
  "https://www.figma.com/api/mcp/asset/e03acc31-cdc9-4839-8248-80cfa86090ea";
const CLIENT4_LOGO =
  "https://www.figma.com/api/mcp/asset/a0653236-ceb6-4e70-a9ff-127ad97ebf35";
const CLIENT5_LOGO =
  "https://www.figma.com/api/mcp/asset/d78a0223-b155-4024-8edf-4e6d284102b3";
const PHONE_SMALL_ICON =
  "https://www.figma.com/api/mcp/asset/87c6d855-dd84-42f1-8c1a-fa3a401de928";
const EMAIL_SMALL_ICON =
  "https://www.figma.com/api/mcp/asset/c7791845-564f-4153-a2b7-738e77104df8";
const LOCATION_SMALL_ICON =
  "https://www.figma.com/api/mcp/asset/c661f6b7-608a-45f1-9918-cee09b1ab088";
const FACEBOOK_ICON =
  "https://www.figma.com/api/mcp/asset/9a58a519-7bb8-4f86-99d0-5926e7b706cb";
const GOOGLE_ICON =
  "https://www.figma.com/api/mcp/asset/e7707adc-30eb-4dbd-be92-fa9107c0157e";
const INSTAGRAM_ICON =
  "https://www.figma.com/api/mcp/asset/43e12853-8e56-4307-bd61-7ec5922fbd63";
const LINKEDIN_ICON =
  "https://www.figma.com/api/mcp/asset/9b4c7ab4-c2cb-4ae4-b886-37c7c08d8aa5";
const NAV_PHONE_ICON =
  "https://www.figma.com/api/mcp/asset/835abd10-9ece-417c-80c2-037476ba99d9";
const LOGO_IMAGE =
  "https://www.figma.com/api/mcp/asset/e4e090c8-fa67-4cbc-b2c2-c56eb5efed38";

const defaultTitle = "The Architect-Led\nHome Builder.";
const secondaryCtaText = "CALL US (416) 856-6959";
const estimateText = "FREE ESTIMATE";
const guideTitle = "Not Sure Where to Start?";
const guideDescription = "Download Our FREE Custom Home Guide no Guesswork, Just a Process that works";

const navItems: NavItem[] = [
  {
    label: "Home",
    links: [
      { label: "Hero Overview", href: "#hero" },
      { label: "Free Guide", href: "#free-guide" },
      { label: "Trusted By", href: "#trusted-by" },
    ],
  },
  {
    label: "About Us",
    links: [
      { label: "Our Story", href: "#about-story" },
      { label: "Our Team", href: "#about-team" },
      { label: "Why Clients Choose Us", href: "#about-why" },
    ],
  },
  {
    label: "Services",
    links: [
      { label: "Custom Homes", href: "#services-custom-homes" },
      { label: "Luxury Renovations", href: "#services-renovations" },
      { label: "Design Build", href: "#services-design-build" },
    ],
  },
  {
    label: "Projects",
    links: [
      { label: "Featured Projects", href: "#projects-featured" },
      { label: "Case Studies", href: "#projects-case-studies" },
      { label: "Gallery", href: "#projects-gallery" },
    ],
  },
  {
    label: "Process",
    links: [
      { label: "Consultation", href: "#process-consultation" },
      { label: "Planning", href: "#process-planning" },
      { label: "Build", href: "#process-build" },
    ],
  },
  {
    label: "Contact",
    links: [
      { label: "Book Consultation", href: "#contact-consultation" },
      { label: "Call Us", href: "tel:+14168566959" },
      { label: "Email Us", href: "mailto:hello@example.com" },
    ],
  },
];

function renderTitle(title: string): JSX.Element {
  const lines = title.split("\n");

  return (
    <>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className="block">
          {line}
        </span>
      ))}
    </>
  );
}

function ChevronDownIcon({ open }: { open: boolean }): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      className={`h-3 w-3 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.25 4.5L6 8.25L9.75 4.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BurgerIcon({ open }: { open: boolean }): JSX.Element {
  if (open) {
    return (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 5H16.5M3.5 10H16.5M3.5 15H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DesktopDropdown({ item, open, onToggle }: { item: NavItem; open: boolean; onToggle: () => void }): JSX.Element {
  return (
    <div className="relative">
      <button
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-1 text-[14px] font-medium leading-5 tracking-[-0.65px] text-white transition-colors hover:text-[#ffb717]"
        type="button"
        onClick={onToggle}
      >
        <span>{item.label}</span>
        <ChevronDownIcon open={open} />
      </button>

      {open ? (
        <div className="absolute left-1/2 top-[32px] z-30 w-[190px] -translate-x-1/2 rounded-[8px] border border-[rgba(210,172,110,0.35)] bg-[rgba(25,25,25,0.96)] p-2 shadow-2xl backdrop-blur">
          <ul className="space-y-1">
            {item.links.map((link) => (
              <li key={link.label}>
                <a
                  className="block rounded-[6px] px-3 py-2 text-left text-[13px] leading-4 text-white transition-colors hover:bg-[rgba(255,183,23,0.14)] hover:text-[#ffb717]"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function MobileDropdown({ item, open, onToggle }: { item: NavItem; open: boolean; onToggle: () => void }): JSX.Element {
  return (
    <li className="rounded-[8px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
      <button
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-[15px] font-medium text-white"
        type="button"
        onClick={onToggle}
      >
        <span>{item.label}</span>
        <ChevronDownIcon open={open} />
      </button>
      {open ? (
        <ul className="space-y-1 px-2 pb-3">
          {item.links.map((link) => (
            <li key={link.label}>
              <a
                className="block rounded-[6px] px-3 py-2 text-[13px] leading-4 text-[rgba(255,255,255,0.88)] transition-colors hover:bg-[rgba(255,183,23,0.14)] hover:text-[#ffb717]"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default function AboveTheFoldSection1({
  title = defaultTitle,
  subtitle = "Custom Homes & Renovation",
  description =
    "Altevita is a full-service design-build firm specializing in luxury renovations and custom homes. We bring 28 years of architectural expertise and precision construction to every project as your dedicated home builder in Toronto.",
  ctaText = "FREE CONSULTATION",
  image = HERO_IMAGE,
}: AboveTheFoldSection1Props): JSX.Element {
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <section className="w-full bg-white font-['Inter',sans-serif] text-white">
      <div className="mx-auto hidden w-full max-w-[1440px] xl:block">
        <div className="relative h-[1264px] w-[1440px] overflow-hidden bg-white">
          <header className="absolute left-0 top-0 h-[56px] w-full border-b-[0.8px] border-[rgba(124,124,124,0.25)] bg-[#2b2b2b]">
            <div className="relative h-full w-full">
              <ul className="absolute left-[80px] top-[15px] flex h-[25.6px] items-center gap-4 font-['Kumbh_Sans',sans-serif] text-[16px] font-normal leading-[25.6px] text-white">
                <li className="flex items-center gap-[8.5px]">
                  <img alt="" className="h-[14px] w-[14px]" src={PHONE_SMALL_ICON} />
                  <span>[Phone Number]</span>
                </li>
                <li className="flex items-center gap-[8.5px]">
                  <img alt="" className="h-[14px] w-[14px]" src={EMAIL_SMALL_ICON} />
                  <span>[Email Address]</span>
                </li>
                <li className="flex items-center gap-[8.5px]">
                  <img alt="" className="h-[14px] w-[14px]" src={LOCATION_SMALL_ICON} />
                  <span>[Target Location]</span>
                </li>
              </ul>

              <div className="absolute left-[1127.99px] top-[15px] font-['Kumbh_Sans',sans-serif] text-[16px] font-normal leading-[25.6px] text-white">
                Follow Us On:
              </div>

              <ul className="absolute left-[1249px] top-[15.8px] flex items-center gap-[5px]">
                <li className="flex h-6 w-6 items-center justify-center rounded-[2.4px] bg-[#3b5998]">
                  <img alt="" className="h-3 w-3" src={FACEBOOK_ICON} />
                </li>
                <li className="flex h-6 w-6 items-center justify-center rounded-[2.4px] bg-[#69727d]">
                  <img alt="" className="h-3 w-3" src={GOOGLE_ICON} />
                </li>
                <li className="flex h-6 w-6 items-center justify-center rounded-[2.4px] bg-[#262626]">
                  <img alt="" className="h-3 w-3" src={INSTAGRAM_ICON} />
                </li>
                <li className="flex h-6 w-6 items-center justify-center rounded-[2.4px] bg-[#0077b5]">
                  <img alt="" className="h-3 w-3" src={LINKEDIN_ICON} />
                </li>
              </ul>
            </div>
          </header>

          <div className="absolute left-0 top-[56px] h-[644px] w-[1440px] overflow-hidden">
            <img alt="Hero background" className="absolute left-0 top-[-153.21px] h-[924.88px] w-[1459px] max-w-none" src={image} />
            <div className="absolute inset-0 bg-black/20" />

            <nav className="absolute left-[80px] top-[53px] h-[83.56px] w-[1280px]">
              <div className="absolute left-[70px] top-[1px] h-[103.1px] w-[95px]">
                <img alt="Altevita logo" className="h-full w-full" src={LOGO_IMAGE} />
              </div>

              <div className="absolute left-[312px] top-[29px] flex items-start gap-[19px]" onMouseLeave={() => setDesktopMenu(null)}>
                {navItems.map((item) => (
                  <DesktopDropdown
                    key={item.label}
                    item={item}
                    open={desktopMenu === item.label}
                    onToggle={() => setDesktopMenu((current) => (current === item.label ? null : item.label))}
                  />
                ))}
              </div>

              <img alt="" className="absolute left-[890px] top-[28px] h-[27px] w-[27px]" src={NAV_PHONE_ICON} />
              <div className="absolute left-[928px] top-[32px] text-[14px] font-medium uppercase leading-5 tracking-[0.35px] text-white">
                (416) 856-6959
              </div>

              <button
                className="absolute left-[1075px] top-[23px] h-[38px] w-[161px] rounded-[3px] border-[0.75px] border-[#d2ac6e] bg-[#ffb717] text-[12px] font-bold leading-[15px] text-black"
                type="button"
              >
                {estimateText}
              </button>
            </nav>

            <div className="absolute left-[384px] top-[188px] flex w-[672px] flex-col items-center gap-[25px] text-center">
              <p className="w-full text-[12px] font-bold uppercase leading-4 tracking-[2.4px] text-[rgba(255,255,255,0.8)]">
                {subtitle}
              </p>

              <h1 className="w-full text-[64px] font-semibold leading-[64px] tracking-[-4px] text-white">
                {renderTitle(title)}
              </h1>

              <p className="w-[621px] text-[16px] font-medium leading-[18.67px] text-white">{description}</p>

              <div className="relative h-[38px] w-[375px]">
                <button
                  className="absolute left-0 top-0 h-[38px] w-[174px] rounded-[3px] border-[0.75px] border-[#d2ac6e] bg-[#ffb717] text-[12px] font-bold leading-[15px] text-black"
                  type="button"
                >
                  {ctaText}
                </button>

                <a
                  className="absolute left-[190px] top-0 flex h-[38px] w-[185px] items-center justify-center rounded-[3px] border-[0.75px] border-[#ffb717] text-[12px] font-normal leading-[15px] text-white"
                  href="tel:+14168566959"
                >
                  {secondaryCtaText}
                </a>
              </div>
            </div>
          </div>

          <section className="absolute left-0 top-[700px] -mt-[20px] h-[284px] w-[1440px] bg-[#1e1e1e]" id="free-guide">
            <div className="absolute left-[156px] top-[-60px] flex h-[375px] w-[997px] items-center gap-[66px]">
              <img alt="Custom home guide ebook" className="h-[375px] w-[446px]" src={EBOOK_IMAGE} />

              <div className="mt-[103px] flex w-[485px] flex-col gap-[14px]">
                <h2 className="font-['Syne',sans-serif] text-[24px] font-bold leading-[38px] tracking-[-0.72px] text-white">{guideTitle}</h2>

                <p className="w-[355px] text-[16px] font-normal leading-[20.5px] text-white">{guideDescription}</p>

                <form className="mb-[60px] flex items-center gap-[13px]">
                  <input
                    aria-label="First Name"
                    className="h-8 w-[172.6px] rounded-[3px] bg-white px-[13px] font-['Syne',sans-serif] text-[12px] font-bold text-[#1c1c1c] outline-none placeholder:text-[#1c1c1c]"
                    placeholder="First Name"
                    type="text"
                  />
                  <input
                    aria-label="Email"
                    className="h-8 w-[172.6px] rounded-[3px] bg-white px-[13px] font-['Syne',sans-serif] text-[12px] font-bold text-[#1c1c1c] outline-none placeholder:text-[#1c1c1c]"
                    placeholder="Email"
                    type="email"
                  />
                  <button
                    className="h-8 w-[114px] rounded-[3px] bg-[#ffb717] font-['Syne',sans-serif] text-[12px] font-bold text-[#1c1c1c]"
                    type="button"
                  >
                    Get it Here
                  </button>
                </form>
              </div>
            </div>
          </section>

          <section className="absolute left-0 top-[1084px] h-[240px] w-[1440px] bg-white" id="trusted-by">
            <div className="absolute left-[135px] top-[68px] w-[1170px]">
              <div className="relative h-4">
                <div className="absolute left-0 top-1/2 h-px w-[503.1px] -translate-y-1/2 bg-[#e6e6e6]" />
                <div className="absolute right-0 top-1/2 h-px w-[503.1px] -translate-y-1/2 bg-[#e6e6e6]" />
                <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Roboto',sans-serif] text-[16px] font-medium leading-4 text-[#1e1e2a]">
                  Who Trust Us
                </p>
              </div>

              <ul className="mt-[38px] flex items-center justify-between">
                <li>
                  <img alt="Client logo 1" className="w-[189px]" src={CLIENT1_LOGO} />
                </li>
                <li>
                  <img alt="Client logo 2" className="w-[189px]" src={CLIENT2_LOGO} />
                </li>
                <li>
                  <img alt="Client logo 3" className="w-[189px]" src={CLIENT3_LOGO} />
                </li>
                <li>
                  <img alt="Client logo 4" className="w-[189px]" src={CLIENT4_LOGO} />
                </li>
                <li>
                  <img alt="Client logo 5" className="w-[189px]" src={CLIENT5_LOGO} />
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <div className="xl:hidden">
        <div className="relative overflow-hidden bg-black">
          <img alt="Hero background" className="absolute inset-0 h-full w-full object-cover" src={image} />
          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 mx-auto max-w-[720px] px-4 pb-16 pt-6 sm:pb-20 sm:pt-8">
            <div className="flex items-center justify-between gap-3">
              <img alt="Altevita logo" className="h-[82px] w-[76px] sm:h-[92px] sm:w-[85px]" src={LOGO_IMAGE} />

              <div className="flex items-center gap-2">
                <button
                  className="h-[38px] rounded-[3px] border-[0.75px] border-[#d2ac6e] bg-[#ffb717] px-4 text-[12px] font-bold leading-[15px] text-black sm:px-5"
                  type="button"
                >
                  {estimateText}
                </button>
                <button
                  aria-expanded={mobileMenuOpen}
                  aria-label="Toggle navigation menu"
                  className="flex h-[38px] w-[38px] items-center justify-center rounded-[3px] border border-[rgba(255,255,255,0.25)] bg-[rgba(0,0,0,0.28)] text-white"
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen((open) => !open);
                    setMobileDropdown(null);
                  }}
                >
                  <BurgerIcon open={mobileMenuOpen} />
                </button>
              </div>
            </div>

            {mobileMenuOpen ? (
              <div className="mt-4 rounded-[12px] border border-[rgba(255,255,255,0.12)] bg-[rgba(17,17,17,0.9)] p-3 shadow-2xl backdrop-blur">
                <div className="mb-3 flex items-center gap-3 rounded-[8px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] px-4 py-3 text-[14px] font-medium uppercase tracking-[0.35px] text-white">
                  <img alt="" className="h-[27px] w-[27px]" src={NAV_PHONE_ICON} />
                  <span>(416) 856-6959</span>
                </div>

                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <MobileDropdown
                      key={item.label}
                      item={item}
                      open={mobileDropdown === item.label}
                      onToggle={() => setMobileDropdown((current) => (current === item.label ? null : item.label))}
                    />
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="pt-8 text-center sm:pt-10">
              <p className="text-[12px] font-bold uppercase leading-4 tracking-[2.4px] text-[rgba(255,255,255,0.8)]">{subtitle}</p>

              <h1 className="mt-[25px] text-[42px] font-semibold leading-[1.02] tracking-[-2px] text-white sm:text-[54px] sm:tracking-[-3px]">
                {renderTitle(title)}
              </h1>

              <p className="mx-auto mt-[25px] max-w-[621px] text-[16px] leading-6 text-white">{description}</p>

              <div className="mx-auto mt-[25px] flex max-w-[375px] flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  className="h-[38px] rounded-[3px] border-[0.75px] border-[#d2ac6e] bg-[#ffb717] text-[12px] font-bold leading-[15px] text-black sm:w-[174px]"
                  type="button"
                >
                  {ctaText}
                </button>
                <a
                  className="flex h-[38px] items-center justify-center rounded-[3px] border-[0.75px] border-[#ffb717] text-[12px] leading-[15px] text-white sm:w-[185px]"
                  href="tel:+14168566959"
                >
                  {secondaryCtaText}
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-[#1e1e1e] px-4 py-[15px]" id="free-guide-mobile">
          <div className="mx-auto grid max-w-[900px] items-center gap-6 md:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
            <img alt="Custom home guide ebook" className="mx-auto w-full max-w-[360px] md:max-w-[446px]" src={EBOOK_IMAGE} />

            <div className="mx-auto w-full max-w-[300px] text-center md:-mt-[20px] md:max-w-[280px] md:justify-self-center">
              <h2 className="font-['Syne',sans-serif] mt-[-20px] text-[26px] font-bold leading-[1.05] tracking-[-0.78px] text-white">{guideTitle}</h2>
              <p className="mt-[6px] max-w-[280px] text-[12px] leading-[17px] text-white">{guideDescription}</p>

              <form className="mt-[8px] flex flex-wrap items-center justify-center gap-2">
                <input
                  aria-label="First Name"
                  className="h-[34px] w-[104px] rounded-[3px] bg-white px-[10px] font-['Syne',sans-serif] text-[11px] font-bold text-[#1c1c1c] outline-none placeholder:text-[#1c1c1c]"
                  placeholder="First Name"
                  type="text"
                />
                <input
                  aria-label="Email"
                  className="h-[34px] w-[104px] rounded-[3px] bg-white px-[10px] font-['Syne',sans-serif] text-[11px] font-bold text-[#1c1c1c] outline-none placeholder:text-[#1c1c1c]"
                  placeholder="Email"
                  type="email"
                />
                <button
                  className="h-[34px] w-[94px] rounded-[3px] bg-[#ffb717] font-['Syne',sans-serif] text-[11px] font-bold text-[#1c1c1c]"
                  type="button"
                >
                  Get it Here
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16" id="trusted-by-mobile">
          <div className="mx-auto max-w-[1170px]">
            <div className="relative h-4">
              <div className="absolute left-0 top-1/2 h-px w-[38%] -translate-y-1/2 bg-[#e6e6e6] sm:w-[43%]" />
              <div className="absolute right-0 top-1/2 h-px w-[38%] -translate-y-1/2 bg-[#e6e6e6] sm:w-[43%]" />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Roboto',sans-serif] text-[16px] font-medium leading-4 text-[#1e1e2a]">
                Who Trust Us
              </p>
            </div>

            <ul className="mt-[38px] grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-5">
              <li>
                <img alt="Client logo 1" className="w-[189px] max-w-full" src={CLIENT1_LOGO} />
              </li>
              <li>
                <img alt="Client logo 2" className="w-[189px] max-w-full" src={CLIENT2_LOGO} />
              </li>
              <li>
                <img alt="Client logo 3" className="w-[189px] max-w-full" src={CLIENT3_LOGO} />
              </li>
              <li>
                <img alt="Client logo 4" className="w-[189px] max-w-full" src={CLIENT4_LOGO} />
              </li>
              <li>
                <img alt="Client logo 5" className="w-[189px] max-w-full" src={CLIENT5_LOGO} />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}