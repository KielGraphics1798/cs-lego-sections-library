import { useState, type FormEvent, type JSX } from "react";

import type { NavItemConfig } from "./AboveTheFoldSection1";
import {
  AboveTheFoldFreeGuideBookDesktop,
  AboveTheFoldFreeGuideBookMobile,
} from "./AboveTheFoldFreeGuideBook";

/**
 * Figma: [ATF2 / 415:696](https://www.figma.com/design/RInqwZgOuH2RI1VPEq6ZtH/Lego-Blocks-Elementor-Section-Library?node-id=415-696) — dark top nav + hero, free-guide strip, trust.\
 * Desktop: dropdowns (About, Services). Mobile/tablet: burger with **contact + social** inside the panel.\
 * Add `"use client"` in **Next.js App Router** (menus use state).
 */
export interface AboveTheFoldSection2Props {
  title?: string;
  description?: string;
  ctaText?: string;
  secondaryCtaText?: string;
  image?: string;
  logoImage?: string;
  ebookImage?: string;
  phoneDisplay?: string;
  phoneTelHref?: string;
  estimateCtaText?: string;
  guideTitle?: string;
  guideLine1?: string;
  guideLine2?: string;
  navItems?: NavItemConfig[];
  topPhoneText?: string;
  topEmailText?: string;
  topLocationText?: string;
  topEmailHref?: string;
  facebookHref?: string;
  googleHref?: string;
  instagramHref?: string;
  linkedinHref?: string;
  clientLogos?: [string, string, string, string, string];
  licenseLabel?: string;
  /** Three badge images, left to right (Figma: NZCB, Master Builders, Halo). */
  licenseBadges?: [string, string, string];
  trustHeading?: string;
  /** @default "atf2-free-guide" — set unique ids if multiple heroes on one page. */
  freeGuideDesktopId?: string;
  freeGuideMobileId?: string;
  trustSectionId?: string;
}

/* ——— Figma 415:696 ——— */
const HERO_IMAGE =
  "https://www.figma.com/api/mcp/asset/70933bc0-4d9d-4d37-b1c7-aa25c5aadde1";
const LOGO_ATF2 =
  "https://www.figma.com/api/mcp/asset/57af53ea-91df-4c6b-95ed-19f3e8f98a8e";
const EBOOK_ATF2 =
  "https://www.figma.com/api/mcp/asset/e9627ab7-a89b-4a7f-acbc-40054dd01173";
const LICENSE_BADGE_1 =
  "https://www.figma.com/api/mcp/asset/7dea5214-4461-4081-bae6-8add097a516e";
const LICENSE_BADGE_2 =
  "https://www.figma.com/api/mcp/asset/c95458a4-8ed2-4bf8-8ece-e31ebaf1d420";
const LICENSE_BADGE_3 =
  "https://www.figma.com/api/mcp/asset/0ff46b5c-18f1-481b-b870-02f2a3dbff47";
const TRUST1 =
  "https://www.figma.com/api/mcp/asset/6645e874-51cf-45bc-b51e-5b17f4801608";
const TRUST2 =
  "https://www.figma.com/api/mcp/asset/011924f5-0d79-4260-91b9-137cb8058a51";
const TRUST3 =
  "https://www.figma.com/api/mcp/asset/c5bb1c8d-2367-466a-a9a9-512c8012eb37";
const TRUST4 =
  "https://www.figma.com/api/mcp/asset/f79fa678-66fc-47dd-94e6-de7425f7eedb";
const TRUST5 =
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

const defaultTitle = "The Architect-Led Home Builder in Toronto";
const defaultDescription =
  "Offering the best (service provided) in (City or location) and the surrounding area (how and what customer will get out of it).";
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
  { label: "FAQs", href: "#" },
  { label: "Contact Us", href: "#" },
];

const defaultClientLogos: [string, string, string, string, string] = [
  TRUST1,
  TRUST2,
  TRUST3,
  TRUST4,
  TRUST5,
];
const defaultLicenseBadges: [string, string, string] = [
  LICENSE_BADGE_1,
  LICENSE_BADGE_2,
  LICENSE_BADGE_3,
];

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

function ChevronIcon({ open }: { open: boolean }): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      className={`h-3.5 w-3.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M2.25 4.5L6 8.25L9.75 4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  );
}

function BurgerIcon({ open }: { open: boolean }): JSX.Element {
  if (open) {
    return (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
        <path
          d="M5 5L15 15M15 5L5 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
      <path
        d="M3.5 5H16.5M3.5 10H16.5M3.5 15H16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TopSocialList({
  facebookHref,
  googleHref,
  instagramHref,
  linkedinHref,
}: {
  facebookHref: string;
  googleHref: string;
  instagramHref: string;
  linkedinHref: string;
}): JSX.Element {
  return (
    <ul className="flex flex-wrap items-center gap-1.5">
      <li>
        <a
          className="flex h-7 w-7 items-center justify-center rounded bg-[#3b5998] transition-opacity hover:opacity-90"
          href={facebookHref}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Facebook"
        >
          <img alt="" className="h-3.5 w-3.5" src={FACEBOOK_ICON} />
        </a>
      </li>
      <li>
        <a
          className="flex h-7 w-7 items-center justify-center rounded bg-[#69727d] transition-opacity hover:opacity-90"
          href={googleHref}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Google"
        >
          <img alt="" className="h-3.5 w-3.5" src={GOOGLE_ICON} />
        </a>
      </li>
      <li>
        <a
          className="flex h-7 w-7 items-center justify-center rounded bg-[#262626] transition-opacity hover:opacity-90"
          href={instagramHref}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Instagram"
        >
          <img alt="" className="h-3.5 w-3.5" src={INSTAGRAM_ICON} />
        </a>
      </li>
      <li>
        <a
          className="flex h-7 w-7 items-center justify-center rounded bg-[#0077b5] transition-opacity hover:opacity-90"
          href={linkedinHref}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="LinkedIn"
        >
          <img alt="" className="h-3.5 w-3.5" src={LINKEDIN_ICON} />
        </a>
      </li>
    </ul>
  );
}

function HeroCtas({
  ctaText,
  secondaryCtaText,
  phoneTelHref,
}: {
  ctaText: string;
  secondaryCtaText: string;
  phoneTelHref: string;
}): JSX.Element {
  return (
    <div className="mt-8 flex max-w-[430px] flex-col gap-3 min-[400px]:flex-row min-[400px]:items-stretch min-[400px]:gap-4">
      <button
        className="h-10 min-h-10 w-full min-w-0 rounded-[3px] border-[0.75px] border-[#d2ac6e] bg-[#ffb717] text-center text-[12.5px] font-bold text-[#1c1c1c] min-[400px]:h-[40px] min-[400px]:w-[194px] min-[400px]:min-h-0"
        type="button"
      >
        {ctaText}
      </button>
      <a
        className="flex h-10 w-full min-w-0 items-center justify-center rounded-[3px] border-[0.75px] border-[#ffb717] text-center text-[12.5px] font-bold text-white min-[400px]:h-[40px] min-[400px]:w-[219px] min-[400px]:min-h-0"
        href={phoneTelHref}
      >
        {secondaryCtaText}
      </a>
    </div>
  );
}

function LicenseBlock({
  label,
  badgeSrc,
  badgeLabel,
}: {
  label: string;
  badgeSrc: [string, string, string];
  badgeLabel: [string, string, string];
}): JSX.Element {
  return (
    <div className="mt-10 flex max-w-full flex-col gap-4 min-[500px]:mt-14 min-[500px]:flex-row min-[500px]:items-center min-[500px]:gap-9">
      <p className="shrink-0 font-['Inter',sans-serif] text-base font-extrabold leading-none tracking-[-0.48px] text-white min-[500px]:text-[16px]">
        {label}
      </p>
      <div className="flex flex-wrap items-center gap-6 min-[500px]:gap-9">
        {badgeSrc.map((src, i) => (
          <img
            key={`badge-${i}`}
            alt={badgeLabel[i] ?? "License badge"}
            className="h-[60px] w-auto object-contain min-[500px]:h-[72px] lg:h-[75px]"
            src={src}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default function AboveTheFoldSection2(
  rawProps: AboveTheFoldSection2Props = {},
): JSX.Element {
  const {
    title = defaultTitle,
    description = defaultDescription,
    ctaText = "FREE CONSULTATION",
    secondaryCtaText = "CALL US (416) 856-6959",
    image = HERO_IMAGE,
    logoImage = LOGO_ATF2,
    ebookImage = EBOOK_ATF2,
    phoneDisplay = "(416) 856-6959",
    phoneTelHref = "tel:+14168566959",
    estimateCtaText = "FREE ESTIMATE",
    guideTitle = "Not Sure Where to Start?",
    guideLine1 = "Download Our FREE Custom Home Guide",
    guideLine2 = "no Guesswork, Just a Process that works",
    navItems = defaultNavItems,
    topPhoneText = "[Phone Number]",
    topEmailText = "[Email Address]",
    topLocationText = "[Target Location]",
    topEmailHref = "mailto:hello@example.com",
    facebookHref = "https://facebook.com",
    googleHref = "https://google.com",
    instagramHref = "https://instagram.com",
    linkedinHref = "https://linkedin.com",
    clientLogos = defaultClientLogos,
    licenseLabel = "License & Warranty",
    licenseBadges = defaultLicenseBadges,
    trustHeading = "Who Trust Us",
    freeGuideDesktopId = "atf2-free-guide",
    freeGuideMobileId = "atf2-free-guide-mobile",
    trustSectionId = "atf2-trust",
  } = rawProps;

  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const topPhoneDigits = topPhoneText.replace(/[^\d+]/g, "");

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setMobileSubOpen(null);
  };

  const onGuideSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const licenseAlt: [string, string, string] = [
    "NZCB",
    "Master Builders",
    "Halo",
  ];

  return (
    <section className="w-full bg-white font-['Inter',sans-serif] text-white">
      {/* 1440px artboard (Figma 415:696) */}
      <div className="mx-auto hidden w-full max-w-[1440px] xl:block">
        <div className="relative w-[1440px] min-h-[1026px] overflow-x-hidden [overflow-y:visible]">
          <div className="relative h-[802px] w-full overflow-x-hidden [overflow-y:visible]">
            <img
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              src={image}
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.68)]" />

            <header className="absolute left-0 top-0 z-30 w-full bg-[rgba(28,28,28,0.52)]">
              <div className="flex h-[125px] items-center justify-between pl-[7.5%] pr-[4.5%]">
                <div className="relative h-[78px] w-[72px] shrink-0">
                  <img alt="Altevita logo" className="h-full w-full object-contain object-left" src={logoImage} />
                </div>

                <nav
                  className="mx-4 flex min-w-0 flex-1 items-center justify-center"
                  aria-label="Primary"
                  onMouseLeave={() => {
                    setDesktopOpen(null);
                  }}
                >
                  <ul className="flex min-w-0 items-center justify-center gap-x-2 gap-y-1 lg:gap-x-4">
                    {navItems.map((item) => {
                      const hasSub = Boolean(item.sublinks?.length);
                      const open = desktopOpen === item.label;
                      if (!hasSub) {
                        return (
                          <li key={item.label} className="shrink-0">
                            <a
                              className="whitespace-nowrap text-[14.5px] font-medium capitalize leading-5 text-white transition-colors hover:text-[#ffb717]"
                              href={item.href}
                            >
                              {item.label}
                            </a>
                          </li>
                        );
                      }
                      return (
                        <li
                          key={item.label}
                          className="relative shrink-0"
                          onMouseEnter={() => {
                            setDesktopOpen(item.label);
                          }}
                        >
                          <div className="flex items-center gap-0.5">
                            <a
                              className="whitespace-nowrap text-[14.5px] font-medium capitalize leading-5 text-white transition-colors hover:text-[#ffb717]"
                              href={item.href}
                            >
                              {item.label}
                            </a>
                            <button
                              type="button"
                              className="flex h-7 w-5 items-center justify-center text-white transition-colors hover:text-[#ffb717]"
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
                              className="absolute left-0 top-full z-40 min-w-[220px] rounded-b-[4px] rounded-t-none border border-t-0 border-white/20 bg-[#1a1a1a]/95 py-1.5 text-left shadow-lg backdrop-blur"
                              role="list"
                            >
                              {item.sublinks?.map((sub) => (
                                <li key={sub.label} role="none">
                                  <a
                                    className="block px-3.5 py-2 text-[13px] font-medium text-white/95 transition-colors hover:bg-white/10 hover:text-[#ffb717]"
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
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <button
                  className="h-10 w-[162px] shrink-0 rounded-[3px] bg-[#ffb717] text-center text-[12.5px] font-bold text-[#1c1c1c] transition-colors hover:bg-[#ffc12e]"
                  type="button"
                >
                  {estimateCtaText}
                </button>
              </div>
            </header>

            <div className="absolute left-[12.5%] right-[8%] top-[200px] z-10 min-w-0 max-w-[720px] xl:left-[200px] xl:right-auto">
              <h1 className="font-['Inter',sans-serif] text-[40px] font-semibold leading-[1.0] tracking-[-0.05em] text-white lg:text-[56px] xl:text-[66px] xl:leading-[0.99]">
                {renderTitle(title)}
              </h1>
              <p className="mt-6 max-w-[590px] text-[16px] font-normal capitalize leading-normal text-white lg:mt-8">
                {description}
              </p>
              <HeroCtas
                ctaText={ctaText}
                phoneTelHref={phoneTelHref}
                secondaryCtaText={secondaryCtaText}
              />
              <LicenseBlock
                badgeLabel={licenseAlt}
                badgeSrc={licenseBadges}
                label={licenseLabel}
              />
            </div>
          </div>

          <AboveTheFoldFreeGuideBookDesktop
            bookRowAlign="center"
            contentClassName="mt-0"
            guideLine1={guideLine1}
            guideLine2={guideLine2}
            guideTitle={guideTitle}
            ebookImage={ebookImage}
            sectionId={freeGuideDesktopId}
            stripTopClassName="top-[802px]"
            onSubmit={onGuideSubmit}
          />
        </div>

        <section className="relative z-20 bg-white px-4 py-12 lg:px-6 lg:py-16" id={trustSectionId}>
          <div className="mx-auto max-w-[1170px]">
            <div className="relative h-4 w-full">
              <div className="absolute left-0 top-1/2 h-px w-[38%] -translate-y-1/2 bg-[#e6e6e6] sm:w-[43%]" />
              <div className="absolute right-0 top-1/2 h-px w-[38%] -translate-y-1/2 bg-[#e6e6e6] sm:w-[43%]" />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[16px] font-medium text-[#1e1e2a]">
                {trustHeading}
              </p>
            </div>
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-6 md:mt-10 md:justify-between">
              {clientLogos.map((src, i) => (
                <li key={`atf2-client-${i}`} className="shrink-0">
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

      {/* Tablet + mobile */}
      <div className="xl:hidden">
        <div className="relative min-h-[560px] w-full">
          <img alt="Hero" className="absolute inset-0 h-full w-full object-cover" src={image} />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.68)]" />

          <header className="relative z-30 bg-[rgba(28,28,28,0.52)]">
            <div className="mx-auto flex h-[100px] max-w-[720px] items-center justify-between px-4 sm:h-[110px]">
              <div className="relative h-16 w-[58px] shrink-0 sm:h-[72px] sm:w-[66px]">
                <img alt="Altevita logo" className="h-full w-full object-contain" src={logoImage} />
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="h-10 min-h-10 rounded-[3px] bg-[#ffb717] px-4 text-center text-xs font-bold text-[#1c1c1c] sm:px-5"
                  type="button"
                >
                  {estimateCtaText}
                </button>
                <button
                  aria-expanded={mobileMenuOpen}
                  aria-label="Toggle navigation menu"
                  className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-[rgba(255,255,255,0.25)] bg-[rgba(0,0,0,0.28)] text-white"
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen((o) => {
                      if (o) {
                        setMobileSubOpen(null);
                      }
                      return !o;
                    });
                  }}
                >
                  <BurgerIcon open={mobileMenuOpen} />
                </button>
              </div>
            </div>

            {mobileMenuOpen ? (
              <div className="border-t border-white/10 bg-[rgba(18,18,18,0.97)] px-4 py-3">
                <div className="mx-auto max-h-[min(75vh,560px)] max-w-[720px] space-y-3 overflow-y-auto">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Contact</p>
                  <ul className="space-y-0.5 border-b border-white/10 pb-3">
                    <li>
                      <a
                        className="flex min-h-[44px] items-center gap-2.5 rounded-lg px-1 py-2 text-[15px] font-medium text-white hover:bg-white/5"
                        href={topPhoneDigits ? `tel:${topPhoneDigits}` : phoneTelHref}
                        onClick={closeMobile}
                      >
                        <img alt="" className="h-4 w-4 shrink-0" src={PHONE_SMALL_ICON} />
                        <span>{topPhoneText}</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex min-h-[44px] items-center gap-2.5 rounded-lg px-1 py-2 text-[15px] font-medium text-white hover:bg-white/5"
                        href={topEmailHref}
                        onClick={closeMobile}
                      >
                        <img alt="" className="h-4 w-4 shrink-0" src={EMAIL_SMALL_ICON} />
                        <span className="min-w-0 break-all">{topEmailText}</span>
                      </a>
                    </li>
                    <li className="flex min-h-[44px] items-center gap-2.5 rounded-lg px-1 py-2 text-[15px] text-white/95">
                      <img alt="" className="h-4 w-4 shrink-0" src={LOCATION_SMALL_ICON} />
                      <span className="min-w-0 break-words">{topLocationText}</span>
                    </li>
                  </ul>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Follow us</p>
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 sm:justify-start">
                    <span className="text-xs font-medium capitalize text-white/80 sm:text-sm">Follow Us On</span>
                    <TopSocialList
                      facebookHref={facebookHref}
                      googleHref={googleHref}
                      instagramHref={instagramHref}
                      linkedinHref={linkedinHref}
                    />
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-medium uppercase tracking-wide text-white">
                    <img alt="" className="h-6 w-6 shrink-0" src={NAV_PHONE_ICON} />
                    <a className="text-white" href={phoneTelHref} onClick={closeMobile}>
                      {phoneDisplay}
                    </a>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Menu</p>
                  <ul className="space-y-1">
                    {navItems.map((item) => {
                      const hasSub = Boolean(item.sublinks?.length);
                      const acc = mobileSubOpen === item.label;
                      if (!hasSub) {
                        return (
                          <li key={item.label}>
                            <a
                              className="block rounded-lg px-2 py-2.5 text-[15px] font-medium text-white hover:bg-white/10"
                              href={item.href}
                              onClick={closeMobile}
                            >
                              {item.label}
                            </a>
                          </li>
                        );
                      }
                      return (
                        <li key={item.label} className="overflow-hidden rounded-lg border border-white/5">
                          <button
                            type="button"
                            className="flex w-full items-center justify-between gap-2 px-2 py-2.5 text-left text-[15px] font-medium text-white"
                            aria-expanded={acc}
                            onClick={() => {
                              setMobileSubOpen((c) => (c === item.label ? null : item.label));
                            }}
                          >
                            <span>{item.label}</span>
                            <ChevronIcon open={acc} />
                          </button>
                          {acc ? (
                            <ul className="border-t border-white/5 bg-black/30 py-1 pl-2">
                              {item.sublinks?.map((sub) => (
                                <li key={sub.label}>
                                  <a
                                    className="block rounded-md px-2 py-2 text-[14px] text-white/90 hover:bg-white/5"
                                    href={sub.href}
                                    onClick={closeMobile}
                                  >
                                    {sub.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : null}
          </header>

          <div className="relative z-10 px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-12">
            <h1 className="max-w-[720px] font-['Inter',sans-serif] text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-white sm:text-[2.5rem] md:text-5xl">
              {renderTitle(title)}
            </h1>
            <p className="mt-5 max-w-[600px] text-[15px] font-normal capitalize leading-relaxed text-white sm:text-base">
              {description}
            </p>
            <HeroCtas
              ctaText={ctaText}
              phoneTelHref={phoneTelHref}
              secondaryCtaText={secondaryCtaText}
            />
            <LicenseBlock badgeLabel={licenseAlt} badgeSrc={licenseBadges} label={licenseLabel} />
          </div>
        </div>

        <AboveTheFoldFreeGuideBookMobile
          guideLine1={guideLine1}
          guideLine2={guideLine2}
          guideTitle={guideTitle}
          ebookImage={ebookImage}
          sectionId={freeGuideMobileId}
          onSubmit={onGuideSubmit}
        />

        <section className="bg-white px-4 py-12 sm:px-6" id={`${trustSectionId}-m`}>
          <div className="mx-auto max-w-[1170px]">
            <div className="relative h-4">
              <div className="absolute left-0 top-1/2 h-px w-[38%] -translate-y-1/2 bg-[#e6e6e6] sm:w-[43%]" />
              <div className="absolute right-0 top-1/2 h-px w-[38%] -translate-y-1/2 bg-[#e6e6e6] sm:w-[43%]" />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] font-medium text-[#1e1e2a]">
                {trustHeading}
              </p>
            </div>
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:mt-10 md:gap-10">
              {clientLogos.map((src, i) => (
                <li key={`m-atf2-${i}`} className="shrink-0">
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
    </section>
  );
}
