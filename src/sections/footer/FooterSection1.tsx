import type { JSX } from "react";

/**
 * Figma: Footer — [Lego-Blocks-Elementor-Section-Library / 410:549](https://www.figma.com/design/RInqwZgOuH2RI1VPEq6ZtH/Lego-Blocks-Elementor-Section-Library?node-id=410-549).
 * Four-column + bottom bar, dark theme. Vite + React + Tailwind. For **Next.js**, use
 * `next/link` for internal links; static footer — no `"use client"` required unless you add state.
 */
const ICON_FACEBOOK =
  "https://www.figma.com/api/mcp/asset/bc5dba7d-3e68-4a17-8773-ef54177f15d9";
const ICON_GOOGLE =
  "https://www.figma.com/api/mcp/asset/bd1eeb70-7235-4edb-a69e-6da9f2861c3c";
const ICON_ADDRESS =
  "https://www.figma.com/api/mcp/asset/218d1c8a-045f-4004-9d6d-bf89dda0b53d";
const ICON_PHONE =
  "https://www.figma.com/api/mcp/asset/3aea2cbc-46c0-41a9-8f53-255df6921eb5";
const ICON_CLOCK =
  "https://www.figma.com/api/mcp/asset/f95b090b-d9df-4946-9b18-6708bf17a576";
const ICON_EMAIL =
  "https://www.figma.com/api/mcp/asset/a7a23773-08f1-47ed-9533-19d49fa9266f";
/** Altevita mark — matches other sections; override via `logoImage`. */
const DEFAULT_LOGO =
  "https://www.figma.com/api/mcp/asset/e4e090c8-fa67-4cbc-b2c2-c56eb5efed38";

const muted = "text-[rgba(241,241,241,0.65)]";
const linkHover =
  "transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffb717]";

export type FooterSection1Link = { label: string; href: string };

export interface FooterSection1Props {
  logoImage?: string;
  logoAlt?: string;
  /** Plain text; line breaks from `\n` are rendered as separate paragraphs. */
  description?: string;
  facebookHref?: string;
  googleHref?: string;
  services?: FooterSection1Link[];
  usefulLinks?: FooterSection1Link[];
  address?: string;
  phoneLabel?: string;
  phoneHref?: string;
  hours?: string;
  emailLabel?: string;
  emailHref?: string;
  /** Default: "© Copyright" */
  copyrightPrefix?: string;
  companyName?: string;
  year?: number;
  creditText?: string;
  creditHref?: string;
}

const defaultDescription = `[COMPANY NAME] is a professional [INSERT
SERVICES], providing high-quality services in
[INSERT LOCATION] area and surrounding
communities.`;

const defaultServices: FooterSection1Link[] = [
  { label: "Custom Home", href: "#" },
  { label: "Home Remodels", href: "#" },
  { label: "Home Additions", href: "#" },
];

const defaultUseful: FooterSection1Link[] = [
  { label: "Blog", href: "#" },
  { label: "Service Areas", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Testimonials", href: "#" },
];

function DescriptionBlock({ text }: { text: string }): JSX.Element {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  return (
    <div className={`space-y-0 text-base font-normal leading-[25.6px] ${muted} font-['Kumbh_Sans',sans-serif]`}>
      {lines.length > 0
        ? lines.map((line, i) => (
            <p key={`${i}-${line.slice(0, 24)}`} className="mb-0">
              {line}
            </p>
          ))
        : (
          <p className="mb-0">{text}</p>
        )}
    </div>
  );
}

export default function FooterSection1(
  rawProps: FooterSection1Props = {},
): JSX.Element {
  const {
    logoImage = DEFAULT_LOGO,
    logoAlt = "Company logo",
    description = defaultDescription,
    facebookHref = "https://facebook.com",
    googleHref = "https://google.com",
    services = defaultServices,
    usefulLinks = defaultUseful,
    address = "[Address]",
    phoneLabel = "[Phone Number]",
    phoneHref = "tel:+14168566959",
    hours = "9AM - 5PM (Mon-Fri)",
    emailLabel = "[Email Address]",
    emailHref = "mailto:hello@example.com",
    companyName = "[COMPANY NAME]",
    year = 2026,
  creditText = "Website & Advertising by ContractorScale.com",
  creditHref = "https://contractorscale.com",
  copyrightPrefix = "© Copyright",
  } = rawProps;

  return (
    <footer
      className="footer-section-1 w-full bg-black font-['Kumbh_Sans',sans-serif] text-white antialiased"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16 xl:px-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-12">
          <div className="flex max-w-sm flex-col gap-5 sm:max-w-none">
            <img
              alt={logoAlt}
              className="h-[100px] w-[95px] object-contain object-left"
              height={100}
              src={logoImage}
              width={95}
            />
            <DescriptionBlock text={description} />
            <ul className="flex items-center gap-[10px]">
              <li>
                <a
                  className="flex h-7 w-7 items-center justify-center rounded bg-[#3b5998] transition-opacity hover:opacity-90"
                  href={facebookHref}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <img alt="" className="h-3.5 w-3.5" src={ICON_FACEBOOK} />
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
                  <img alt="" className="h-3.5 w-3.5" src={ICON_GOOGLE} />
                </a>
              </li>
            </ul>
          </div>

          <nav className="min-w-0" aria-labelledby="footer-services-heading">
            <h2
              id="footer-services-heading"
              className="text-2xl font-semibold capitalize leading-[28.8px] text-white font-['Inter',sans-serif]"
            >
              Services
            </h2>
            <ul className="mt-4 sm:mt-6">
              {services.map((item) => (
                <li
                  key={item.label}
                  className="min-h-[40px] sm:min-h-[51px] sm:pl-5 sm:pr-2"
                >
                  <a
                    className={`block py-2.5 text-base capitalize leading-[25.6px] sm:py-0 sm:leading-[25.6px] ${muted} font-['Kumbh_Sans',sans-serif] ${linkHover} sm:inline-flex sm:min-h-[51px] sm:items-center`}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="min-w-0" aria-labelledby="footer-useful-heading">
            <h2
              id="footer-useful-heading"
              className="text-2xl font-semibold capitalize leading-[28.8px] text-white font-['Inter',sans-serif]"
            >
              Useful Links
            </h2>
            <ul className="mt-4 sm:mt-6">
              {usefulLinks.map((item) => (
                <li
                  key={item.label}
                  className="min-h-[40px] sm:min-h-[51px] sm:pl-5 sm:pr-2"
                >
                  <a
                    className={`block py-2.5 text-base capitalize leading-[25.6px] sm:py-0 sm:leading-[25.6px] ${muted} font-['Kumbh_Sans',sans-serif] ${linkHover} sm:inline-flex sm:min-h-[51px] sm:items-center`}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <h2 className="text-2xl font-semibold capitalize leading-[28.8px] text-white font-['Inter',sans-serif]">
              Contact Us
            </h2>
            <ul className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
              <li className="flex gap-2.5 text-base leading-[25.6px]">
                <img alt="" className="mt-0.5 h-4 w-4 shrink-0" src={ICON_ADDRESS} aria-hidden />
                <span className={muted}>{address}</span>
              </li>
              <li className="flex gap-2.5 text-base leading-[25.6px]">
                <img alt="" className="mt-0.5 h-4 w-4 shrink-0" src={ICON_PHONE} aria-hidden />
                <a className={`${muted} ${linkHover}`} href={phoneHref}>
                  {phoneLabel}
                </a>
              </li>
              <li className="flex gap-2.5 text-base leading-[25.6px]">
                <img alt="" className="mt-0.5 h-4 w-4 shrink-0" src={ICON_CLOCK} aria-hidden />
                <span className={muted}>{hours}</span>
              </li>
              <li className="flex gap-2.5 text-base leading-[25.6px]">
                <img alt="" className="mt-0.5 h-4 w-4 shrink-0" src={ICON_EMAIL} aria-hidden />
                <a className={`${muted} ${linkHover}`} href={emailHref}>
                  {emailLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[rgba(124,124,124,0.41)] pt-6 sm:mt-14 sm:pt-8 lg:mt-16">
          <div className="flex flex-col gap-4 text-base leading-[25.6px] text-[rgba(241,241,241,0.65)] sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="mb-0 capitalize">
              {copyrightPrefix} {companyName} {year}. All right reserved.
            </p>
            <a
              className={`shrink-0 capitalize ${linkHover} ${muted}`}
              href={creditHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              {creditText}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
