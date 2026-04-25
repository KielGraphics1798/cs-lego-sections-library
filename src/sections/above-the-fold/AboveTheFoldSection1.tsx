import { useState, type JSX } from "react";

import {
  ABOVE_THE_FOLD_DEFAULT_EBOOK_IMAGE,
  AboveTheFoldFreeGuideBookDesktop,
  AboveTheFoldFreeGuideBookMobile,
} from "./AboveTheFoldFreeGuideBook";

/**
 * Figma: [Hero 1 / 328:9](https://www.figma.com/design/RInqwZgOuH2RI1VPEq6ZtH/Lego-Blocks-Elementor-Section-Library?node-id=328-9) — top bar, nav, hero, trust.
 * Free guide: [328:56](https://www.figma.com/design/RInqwZgOuH2RI1VPEq6ZtH/Lego-Blocks-Elementor-Section-Library?node-id=328-56) — see `AboveTheFoldFreeGuideBook.tsx`.
 * Client state for menus. In **Next.js App Router** add `"use client"`.
 */
export interface AboveTheFoldSection1Props {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  image?: string;
  logoImage?: string;
  ebookImage?: string;
  /** Five client logos, left to right. */
  clientLogos?: [string, string, string, string, string];
  phoneDisplay?: string;
  phoneTelHref?: string;
  estimateCtaText?: string;
  secondaryCtaText?: string;
  guideTitle?: string;
  guideLine1?: string;
  guideLine2?: string;
  /** Top bar placeholders (or real values). */
  topPhoneText?: string;
  topEmailText?: string;
  topLocationText?: string;
  topEmailHref?: string;
  /** Nav: flat links, or add `sublinks` for desktop dropdowns + mobile accordions. */
  navItems?: NavItemConfig[];
  trustHeading?: string;
  facebookHref?: string;
  googleHref?: string;
  instagramHref?: string;
  linkedinHref?: string;
}

export type NavSublink = { label: string; href: string };
export type NavItemConfig = {
  label: string;
  href: string;
  /** When set, desktop shows a flyout; tablet/mobile an accordion. */
  sublinks?: NavSublink[];
};

const HERO_IMAGE =
  "https://www.figma.com/api/mcp/asset/15692e54-8abd-4a5a-aef1-d5024221c1db";
const CLIENT1_LOGO =
  "https://www.figma.com/api/mcp/asset/6645e874-51cf-45bc-b51e-5b17f4801608";
const CLIENT2_LOGO =
  "https://www.figma.com/api/mcp/asset/011924f5-0d79-4260-91b9-137cb8058a51";
const CLIENT3_LOGO =
  "https://www.figma.com/api/mcp/asset/c5bb1c8d-2367-466a-a9a9-512c8012eb37";
const CLIENT4_LOGO =
  "https://www.figma.com/api/mcp/asset/f79fa678-66fc-47dd-94e6-de7425f7eedb";
const CLIENT5_LOGO =
  "https://www.figma.com/api/mcp/asset/223ec18b-a704-4784-b869-dc5e5389e9fb";
const PHONE_SMALL_ICON =
  "https://www.figma.com/api/mcp/asset/89fe1e96-492a-420b-a380-13f3208be9b4";
const EMAIL_SMALL_ICON =
  "https://www.figma.com/api/mcp/asset/7b0b7959-1f06-43c4-a1a0-17bb0a26750f";
const LOCATION_SMALL_ICON =
  "https://www.figma.com/api/mcp/asset/65def15b-585c-44e6-9f16-467c0b344bcd";
const FACEBOOK_ICON =
  "https://www.figma.com/api/mcp/asset/df599159-e273-4fb6-be85-51ab08c66e36";
const GOOGLE_ICON =
  "https://www.figma.com/api/mcp/asset/0fbe8c82-26ff-41c1-92c3-1037e0b67d9f";
const INSTAGRAM_ICON =
  "https://www.figma.com/api/mcp/asset/5b0409be-af19-4917-894c-7be45cea9fc5";
const LINKEDIN_ICON =
  "https://www.figma.com/api/mcp/asset/a7b7df37-52de-404f-a066-91d53bfba7db";
const NAV_PHONE_ICON =
  "https://www.figma.com/api/mcp/asset/99fb9d12-5cb3-41ec-a4b8-2a83779dd0f2";
const LOGO_IMAGE =
  "https://www.figma.com/api/mcp/asset/483e47f4-b941-449a-9be9-04650024d2cc";

const defaultTitle = "The Architect-Led\nHome Builder.";

const defaultNavItems: NavItemConfig[] = [
  { label: "Home", href: "#" },
  {
    label: "About Us",
    href: "#about",
    sublinks: [
      { label: "Testimonial", href: "#" },
      { label: "Guarantee", href: "#" },
      { label: "Our Process", href: "#" },
      { label: "Why Choose Us", href: "#" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    sublinks: [
      { label: "Renovation", href: "#" },
      { label: "Custom Home", href: "#" },
      { label: "Extension", href: "#" },
      { label: "Granny Flats", href: "#" },
      { label: "Home Addition", href: "#" },
    ],
  },
  { label: "Projects", href: "#" },
  { label: "Process", href: "#" },
  { label: "Contact", href: "#" },
];

const defaultClientLogos: [string, string, string, string, string] = [
  CLIENT1_LOGO,
  CLIENT2_LOGO,
  CLIENT3_LOGO,
  CLIENT4_LOGO,
  CLIENT5_LOGO,
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

function ChevronIcon({ open }: { open: boolean }): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      className={`h-3 w-3 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 12 12"
      fill="none"
    >
      <path d="M2.25 4.5L6 8.25L9.75 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
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

function TopSocialList({
  facebookHref,
  googleHref,
  instagramHref,
  linkedinHref,
  iconClass = "h-3 w-3",
  wrapClass = "h-6 w-6",
}: {
  facebookHref: string;
  googleHref: string;
  instagramHref: string;
  linkedinHref: string;
  iconClass?: string;
  wrapClass?: string;
}): JSX.Element {
  return (
    <ul className="flex flex-wrap items-center gap-1.5">
      <li>
        <a
          className={`flex ${wrapClass} items-center justify-center rounded bg-[#3b5998] transition-opacity hover:opacity-90`}
          href={facebookHref}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Facebook"
        >
          <img alt="" className={iconClass} src={FACEBOOK_ICON} />
        </a>
      </li>
      <li>
        <a
          className={`flex ${wrapClass} items-center justify-center rounded bg-[#69727d] transition-opacity hover:opacity-90`}
          href={googleHref}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Google"
        >
          <img alt="" className={iconClass} src={GOOGLE_ICON} />
        </a>
      </li>
      <li>
        <a
          className={`flex ${wrapClass} items-center justify-center rounded bg-[#262626] transition-opacity hover:opacity-90`}
          href={instagramHref}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Instagram"
        >
          <img alt="" className={iconClass} src={INSTAGRAM_ICON} />
        </a>
      </li>
      <li>
        <a
          className={`flex ${wrapClass} items-center justify-center rounded bg-[#0077b5] transition-opacity hover:opacity-90`}
          href={linkedinHref}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="LinkedIn"
        >
          <img alt="" className={iconClass} src={LINKEDIN_ICON} />
        </a>
      </li>
    </ul>
  );
}

export default function AboveTheFoldSection1(
  rawProps: AboveTheFoldSection1Props = {},
): JSX.Element {
  const {
    title = defaultTitle,
    subtitle = "Custom Homes & Renovation",
    description =
      "Altevita is a full-service design-build firm specializing in luxury renovations and custom homes. We bring 28 years of architectural expertise and precision construction to every project as your dedicated home builder in Toronto.",
    ctaText = "FREE CONSULTATION",
    image = HERO_IMAGE,
    logoImage = LOGO_IMAGE,
    ebookImage = ABOVE_THE_FOLD_DEFAULT_EBOOK_IMAGE,
    clientLogos = defaultClientLogos,
    phoneDisplay = "(416) 856-6959",
    phoneTelHref = "tel:+14168566959",
    estimateCtaText = "FREE ESTIMATE",
    secondaryCtaText = "CALL US (416) 856-6959",
    guideTitle = "Not Sure Where to Start?",
    guideLine1 = "Download Our FREE Custom Home Guide",
    guideLine2 = "no Guesswork, Just a Process that works",
    navItems = defaultNavItems,
    trustHeading = "Who Trust Us",
    topPhoneText = "[Phone Number]",
    topEmailText = "[Email Address]",
    topLocationText = "[Target Location]",
    topEmailHref = "mailto:hello@example.com",
    facebookHref = "https://facebook.com",
    googleHref = "https://google.com",
    instagramHref = "https://instagram.com",
    linkedinHref = "https://linkedin.com",
  } = rawProps;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setMobileSubOpen(null);
  };

  const topPhoneDigits = topPhoneText.replace(/[^\d+]/g, "");

  return (
    <section className="w-full bg-white font-['Inter',sans-serif] text-white">
      {/* Desktop: Figma 1440px artboard */}
      <div className="mx-auto hidden w-full max-w-[1440px] xl:block">
        <div className="relative min-h-[1202px] w-[1440px] overflow-x-hidden [overflow-y:visible] bg-white">
          <header className="absolute left-0 top-0 h-[56px] w-full border-b-[0.8px] border-[rgba(124,124,124,0.25)] bg-[#2b2b2b]">
            <div className="relative flex h-full items-center justify-between px-[72px] pr-20">
              <ul className="flex h-[25.6px] flex-wrap items-center gap-6 font-['Kumbh_Sans',sans-serif] text-[16px] font-normal leading-[25.6px] text-white sm:gap-8">
                <li className="flex items-center gap-2.5">
                  <img alt="" className="h-3.5 w-3.5 shrink-0" src={PHONE_SMALL_ICON} />
                  {topPhoneDigits ? (
                    <a className="text-white no-underline hover:underline" href={`tel:${topPhoneDigits}`}>
                      {topPhoneText}
                    </a>
                  ) : (
                    <span>{topPhoneText}</span>
                  )}
                </li>
                <li className="flex min-w-0 items-center gap-2.5">
                  <img alt="" className="h-3.5 w-3.5 shrink-0" src={EMAIL_SMALL_ICON} />
                  <a className="min-w-0 break-words text-white no-underline hover:underline" href={topEmailHref}>
                    {topEmailText}
                  </a>
                </li>
                <li className="flex min-w-0 max-w-[280px] items-center gap-2.5 sm:max-w-none">
                  <img alt="" className="h-3.5 w-3.5 shrink-0" src={LOCATION_SMALL_ICON} />
                  <span className="min-w-0 break-words">{topLocationText}</span>
                </li>
              </ul>
              <div className="flex items-center gap-4">
                <div className="whitespace-nowrap font-['Kumbh_Sans',sans-serif] text-[16px] font-normal capitalize leading-[25.6px] text-white">
                  Follow Us On:
                </div>
                <TopSocialList
                  facebookHref={facebookHref}
                  googleHref={googleHref}
                  instagramHref={instagramHref}
                  linkedinHref={linkedinHref}
                />
              </div>
            </div>
          </header>

          <div className="absolute left-0 top-[56px] h-[644px] w-[1440px] overflow-x-hidden [overflow-y:visible]">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt=""
                className="absolute left-0 top-1/2 h-[143%] w-full min-w-full max-w-none -translate-y-[40%] object-cover"
                src={image}
              />
            </div>
            <div className="absolute inset-0 bg-black/20" />

            <nav
              className="absolute left-1/2 top-[53px] z-10 flex w-[min(100%,1280px)] -translate-x-1/2 items-center gap-4 px-4 pl-[4.3%] pr-6"
              aria-label="Primary"
            >
              <div className="relative h-[83px] w-[95px] shrink-0 sm:h-[103px]">
                <img alt="Altevita logo" className="h-full w-full object-contain object-left" src={logoImage} />
              </div>
              <div className="mx-auto flex min-w-0 flex-1 items-center justify-center gap-x-[10px] gap-y-1 px-2 max-lg:ml-0 max-lg:justify-end sm:gap-x-[14px] lg:gap-x-[19px]">
                {navItems.map((item) => {
                  const hasSub = Boolean(item.sublinks?.length);
                  const open = desktopOpen === item.label;
                  if (!hasSub) {
                    return (
                      <a
                        key={item.label}
                        className="shrink-0 whitespace-nowrap text-[14px] font-medium capitalize leading-5 text-white tracking-[-0.65px] transition-colors hover:text-[#ffb717]"
                        href={item.href}
                      >
                        {item.label}
                      </a>
                    );
                  }
                  return (
                    <div
                      key={item.label}
                      className="relative shrink-0"
                      onMouseEnter={() => {
                        setDesktopOpen(item.label);
                      }}
                      onMouseLeave={() => {
                        setDesktopOpen(null);
                      }}
                    >
                      <div className="flex items-center gap-0.5">
                        <a
                          className="whitespace-nowrap text-[14px] font-medium capitalize leading-5 text-white tracking-[-0.65px] transition-colors hover:text-[#ffb717]"
                          href={item.href}
                        >
                          {item.label}
                        </a>
                        <button
                          type="button"
                          className="flex h-6 w-5 items-center justify-center text-white transition-transform hover:text-[#ffb717]"
                          aria-expanded={open}
                          aria-label={`${item.label} menu`}
                          onClick={() => {
                            setDesktopOpen((cur) => (cur === item.label ? null : item.label));
                          }}
                        >
                          <ChevronIcon open={open} />
                        </button>
                      </div>
                      {open ? (
                        <ul
                          className="absolute left-0 top-full z-30 min-w-[220px] rounded-b-[4px] rounded-t-none border border-t-0 border-white/20 bg-[#1a1a1a]/95 py-1.5 text-left shadow-lg backdrop-blur"
                          role="list"
                        >
                          {item.sublinks?.map((sub) => (
                            <li key={sub.label} role="none">
                              <a
                                className="block px-3.5 py-2 text-[13px] font-medium leading-5 text-white/95 transition-colors hover:bg-white/10 hover:text-[#ffb717]"
                                href={sub.href}
                                role="menuitem"
                                onClick={() => {
                                  setDesktopOpen(null);
                                }}
                              >
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  );
                })}
              </div>
              <div className="ml-auto flex shrink-0 items-center gap-2.5 pr-1">
                <img alt="" className="h-[27px] w-[27px] shrink-0" src={NAV_PHONE_ICON} />
                <a
                  className="whitespace-nowrap text-[14px] font-medium uppercase leading-5 tracking-[0.35px] text-white transition-colors hover:text-[#ffb717]"
                  href={phoneTelHref}
                >
                  {phoneDisplay}
                </a>
              </div>
              <button
                className="ml-2 h-[38px] w-[161px] shrink-0 rounded-[3px] border-[0.75px] border-[#d2ac6e] bg-[#ffb717] text-center text-[12px] font-bold leading-[15px] text-black transition-colors hover:bg-[#ffc12e]"
                type="button"
              >
                {estimateCtaText}
              </button>
            </nav>

            <div className="absolute left-1/2 top-[188px] flex w-[min(100%,672px)] max-w-full -translate-x-1/2 flex-col items-center gap-[25px] px-4 text-center">
              <p className="w-full text-[12px] font-bold uppercase leading-4 tracking-[2.4px] text-[rgba(255,255,255,0.8)]">
                {subtitle}
              </p>
              <h1 className="w-full text-[64px] font-semibold leading-[64px] tracking-[-4px] text-white">
                {renderTitle(title)}
              </h1>
              <p className="w-full max-w-[621px] text-[16px] font-medium capitalize leading-normal text-white">
                {description}
              </p>
              <div className="mx-auto flex w-full max-w-[400px] flex-col items-stretch justify-center gap-3 sm:max-w-[375px] sm:flex-row sm:items-center sm:gap-4 sm:px-0">
                <button
                  className="h-[38px] w-full rounded-[3px] border-[0.75px] border-[#d2ac6e] bg-[#ffb717] text-[12px] font-bold leading-[15px] text-black sm:w-[174px]"
                  type="button"
                >
                  {ctaText}
                </button>
                <a
                  className="flex h-[38px] w-full items-center justify-center rounded-[3px] border-[0.75px] border-[#ffb717] text-[12px] font-normal leading-[15px] text-white sm:w-[185px]"
                  href={phoneTelHref}
                >
                  {secondaryCtaText}
                </a>
              </div>
            </div>
          </div>

          <AboveTheFoldFreeGuideBookDesktop
            guideLine1={guideLine1}
            guideLine2={guideLine2}
            guideTitle={guideTitle}
            ebookImage={ebookImage}
            sectionId="free-guide"
          />

          <section
            className="absolute left-0 top-[1024px] h-[178px] w-full bg-white"
            id="trusted-by"
          >
            <div className="absolute left-1/2 top-[37px] w-[min(100%,1170px)] max-w-full -translate-x-1/2 px-4">
              <div className="relative h-4 w-full">
                <div className="absolute left-0 right-[57%] top-1/2 h-px -translate-y-1/2 bg-[#e6e6e6]" />
                <div className="absolute left-[57%] right-0 top-1/2 h-px -translate-y-1/2 bg-[#e6e6e6]" />
                <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-['Roboto',sans-serif] text-[16px] font-medium leading-4 text-[#1e1e2a]">
                  {trustHeading}
                </p>
              </div>
              <ul className="mt-10 flex flex-wrap items-center justify-center gap-6 md:justify-between">
                {clientLogos.map((src, i) => (
                  <li key={`client-${i}`} className="shrink-0">
                    <img
                      alt={i === 0 ? "Client logo" : `Client logo ${i + 1}`}
                      className="h-auto w-[min(100%,189px)] object-contain"
                      src={src}
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>

      {/* Mobile / tablet */}
      <div className="xl:hidden">
        <div className="relative overflow-hidden bg-black">
          <img alt="Hero background" className="absolute inset-0 h-full w-full object-cover" src={image} />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 mx-auto max-w-[720px] px-4 pb-16 pt-6 sm:pb-20 sm:pt-8">
            <div className="flex items-center justify-between gap-3">
              <img alt="Altevita logo" className="h-[82px] w-[76px] object-contain sm:h-[92px] sm:w-[85px]" src={logoImage} />
              <div className="flex items-center gap-2">
                <button
                  className="h-[38px] rounded-[3px] border-[0.75px] border-[#d2ac6e] bg-[#ffb717] px-4 text-[12px] font-bold leading-[15px] text-black sm:px-5"
                  type="button"
                >
                  {estimateCtaText}
                </button>
                <button
                  aria-expanded={mobileMenuOpen}
                  aria-label="Toggle navigation menu"
                  className="flex h-[38px] w-[38px] items-center justify-center rounded-[3px] border border-[rgba(255,255,255,0.25)] bg-[rgba(0,0,0,0.28)] text-white"
                  type="button"
                  onClick={() => setMobileMenuOpen((o) => !o)}
                >
                  <BurgerIcon open={mobileMenuOpen} />
                </button>
              </div>
            </div>
            {mobileMenuOpen ? (
              <div className="mt-4 max-h-[min(70vh,520px)] overflow-y-auto rounded-[12px] border border-[rgba(255,255,255,0.12)] bg-[rgba(17,17,17,0.94)] p-3 shadow-2xl backdrop-blur sm:p-4">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Contact</p>
                <ul className="mb-1 space-y-0.5 border-b border-white/10 pb-3">
                  <li>
                    <a
                      className="flex min-h-[44px] items-center gap-2.5 rounded-[8px] px-1 py-2 text-[15px] font-medium text-white transition-colors hover:bg-[rgba(255,183,23,0.1)]"
                      href={topPhoneDigits ? `tel:${topPhoneDigits}` : phoneTelHref}
                      onClick={closeMobile}
                    >
                      <img alt="" className="h-4 w-4 shrink-0" src={PHONE_SMALL_ICON} />
                      <span>{topPhoneText}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex min-h-[44px] items-center gap-2.5 rounded-[8px] px-1 py-2 text-[15px] font-medium text-white transition-colors hover:bg-[rgba(255,183,23,0.1)]"
                      href={topEmailHref}
                      onClick={closeMobile}
                    >
                      <img alt="" className="h-4 w-4 shrink-0" src={EMAIL_SMALL_ICON} />
                      <span className="min-w-0 break-all">{topEmailText}</span>
                    </a>
                  </li>
                  <li className="flex min-h-[44px] items-center gap-2.5 rounded-[8px] px-1 py-2 text-[15px] text-white/95">
                    <img alt="" className="h-4 w-4 shrink-0" src={LOCATION_SMALL_ICON} />
                    <span className="min-w-0 break-words">{topLocationText}</span>
                  </li>
                </ul>
                <p className="mb-1.5 mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Follow us</p>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 sm:justify-start">
                  <div className="whitespace-nowrap text-[12px] font-medium capitalize text-white/80 sm:text-[14px]">Follow Us On</div>
                  <TopSocialList
                    facebookHref={facebookHref}
                    googleHref={googleHref}
                    instagramHref={instagramHref}
                    linkedinHref={linkedinHref}
                    iconClass="h-3.5 w-3.5"
                    wrapClass="h-7 w-7"
                  />
                </div>
                <div className="mb-3 flex items-center gap-3 rounded-[8px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-3 py-2.5 text-[14px] font-medium uppercase tracking-[0.35px] text-white">
                  <img alt="" className="h-[24px] w-[24px] shrink-0" src={NAV_PHONE_ICON} />
                  <a className="text-white" href={phoneTelHref} onClick={closeMobile}>
                    {phoneDisplay}
                  </a>
                </div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Menu</p>
                <ul className="space-y-0.5">
                  {navItems.map((item) => {
                    const hasSub = Boolean(item.sublinks?.length);
                    const accOpen = mobileSubOpen === item.label;
                    if (!hasSub) {
                      return (
                        <li key={item.label}>
                          <a
                            className="block rounded-[6px] px-2 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-[rgba(255,183,23,0.14)]"
                            href={item.href}
                            onClick={closeMobile}
                          >
                            {item.label}
                          </a>
                        </li>
                      );
                    }
                    return (
                      <li key={item.label}>
                        <div className="overflow-hidden rounded-[6px]">
                          <button
                            type="button"
                            className="flex w-full items-center justify-between gap-2 rounded-[6px] px-2 py-2.5 text-left text-[15px] font-medium text-white transition-colors hover:bg-[rgba(255,183,23,0.1)]"
                            aria-expanded={accOpen}
                            onClick={() => {
                              setMobileSubOpen((cur) => (cur === item.label ? null : item.label));
                            }}
                          >
                            <span>{item.label}</span>
                            <ChevronIcon open={accOpen} />
                          </button>
                          {accOpen ? (
                            <ul className="border-t border-white/5 bg-black/25 py-1 pl-2">
                              {item.sublinks?.map((sub) => (
                                <li key={sub.label}>
                                  <a
                                    className="block rounded-[4px] px-2 py-2 text-[14px] text-white/90 hover:bg-white/5"
                                    href={sub.href}
                                    onClick={closeMobile}
                                  >
                                    {sub.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
            <div className="pt-8 text-center sm:pt-10">
              <p className="text-[12px] font-bold uppercase leading-4 tracking-[2.4px] text-[rgba(255,255,255,0.8)]">
                {subtitle}
              </p>
              <h1 className="mt-[25px] text-[42px] font-semibold leading-[1.02] tracking-[-2px] text-white sm:text-[54px] sm:tracking-[-3px]">
                {renderTitle(title)}
              </h1>
              <p className="mx-auto mt-[25px] max-w-[621px] text-[16px] font-medium leading-6 text-white sm:leading-normal sm:capitalize">
                {description}
              </p>
              <div className="mx-auto mt-[25px] flex max-w-[375px] flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  className="h-[38px] rounded-[3px] border-[0.75px] border-[#d2ac6e] bg-[#ffb717] text-[12px] font-bold leading-[15px] text-black sm:w-[174px]"
                  type="button"
                >
                  {ctaText}
                </button>
                <a
                  className="flex h-[38px] items-center justify-center rounded-[3px] border-[0.75px] border-[#ffb717] text-[12px] leading-[15px] text-white sm:w-[185px]"
                  href={phoneTelHref}
                >
                  {secondaryCtaText}
                </a>
              </div>
            </div>
          </div>
        </div>
        <AboveTheFoldFreeGuideBookMobile
          guideLine1={guideLine1}
          guideLine2={guideLine2}
          guideTitle={guideTitle}
          ebookImage={ebookImage}
          sectionId="free-guide-mobile"
        />
        <section className="bg-white px-4 py-16" id="trusted-by-mobile">
          <div className="mx-auto max-w-[1170px]">
            <div className="relative h-4">
              <div className="absolute left-0 top-1/2 h-px w-[38%] -translate-y-1/2 bg-[#e6e6e6] sm:w-[43%]" />
              <div className="absolute right-0 top-1/2 h-px w-[38%] -translate-y-1/2 bg-[#e6e6e6] sm:w-[43%]" />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Roboto',sans-serif] text-[16px] font-medium leading-4 text-[#1e1e2a]">
                {trustHeading}
              </p>
            </div>
            <ul className="mt-[38px] grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-5">
              {clientLogos.map((src, i) => (
                <li key={`m-client-${i}`}>
                  <img
                    alt={i === 0 ? "Client logo" : `Client logo ${i + 1}`}
                    className="w-[189px] max-w-full"
                    src={src}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}
