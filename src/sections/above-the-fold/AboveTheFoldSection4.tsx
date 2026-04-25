import { useEffect, useState, type JSX } from "react";

/**
 * Hero variant 4 + gallery slider on small viewports. Uses `useState` / `useEffect`; in **Next.js App
 * Router** add `"use client"`.
 */
export interface AboveTheFoldSection4Props {
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

const HERO_IMAGE = "https://www.figma.com/api/mcp/asset/710e8d63-0a30-467d-b84c-4d5255a66d50";
const GALLERY_IMAGE_1 = "https://www.figma.com/api/mcp/asset/710e8d63-0a30-467d-b84c-4d5255a66d50";
const GALLERY_IMAGE_2 = "https://www.figma.com/api/mcp/asset/2045badd-4f36-4032-8eb1-0746a92d8e95";
const GALLERY_IMAGE_3 = "https://www.figma.com/api/mcp/asset/670c45ee-aff3-486a-b1d8-eea93f695502";
const FACEBOOK_ICON = "https://www.figma.com/api/mcp/asset/d5d95aaa-ed1d-417a-86b2-9cec2574f68b";
const INSTAGRAM_ICON = "https://www.figma.com/api/mcp/asset/1dc1170e-f8d5-4abd-9d94-460b61ac9769";
const TWITTER_ICON = "https://www.figma.com/api/mcp/asset/f681654e-8c59-41d5-9195-4bac98946914";
const YOUTUBE_ICON = "https://www.figma.com/api/mcp/asset/f802fe88-1247-4dc4-a0e5-93cd05a5b4ef";
const NAV_CHEVRON = "https://www.figma.com/api/mcp/asset/017ce227-9eb2-4b76-884f-4adeb83e2b7e";
const LOGO_IMAGE = "https://www.figma.com/api/mcp/asset/7ecb686a-8c59-463a-af9a-ccbedeedaa5f";

const PHONE_ICON = "https://www.figma.com/api/mcp/asset/d329aed9-ccc6-4e7a-9a3d-a8e255da4191";
const EMAIL_ICON = "https://www.figma.com/api/mcp/asset/016cbf6c-208e-43a8-af8c-379e1fb38531";
const LOCATION_ICON = "https://www.figma.com/api/mcp/asset/e51b85bf-5b1b-4396-972c-fc60a967dd5d";

const TOP_SOCIAL_1 = "https://www.figma.com/api/mcp/asset/ccb476e1-c36f-4255-bc53-08109455797f";
const TOP_SOCIAL_2 = "https://www.figma.com/api/mcp/asset/fcf0279e-a48b-488a-b558-53db8c92059b";
const TOP_SOCIAL_3 = "https://www.figma.com/api/mcp/asset/de88513f-9ca8-49a2-a5ed-f6cb0ea142bf";
const TOP_SOCIAL_4 = "https://www.figma.com/api/mcp/asset/9e93561b-dfcf-4c09-8338-1a3c89097c73";

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
    href: "#hero4",
    links: [
      { label: "Hero", href: "#hero4" },
      { label: "Highlights", href: "#hero4-highlights" },
      { label: "Gallery", href: "#hero4-gallery" },
    ],
  },
  {
    label: "About Us",
    href: "#hero4-about",
    links: [
      { label: "Our Story", href: "#hero4-about" },
      { label: "Team", href: "#hero4-team" },
      { label: "Approach", href: "#hero4-approach" },
    ],
  },
  {
    label: "Services",
    href: "#hero4-services",
    links: [
      { label: "Custom Homes", href: "#hero4-services" },
      { label: "Renovations", href: "#hero4-renovations" },
      { label: "Design Build", href: "#hero4-design-build" },
    ],
  },
  { label: "Projects", href: "#hero4-projects" },
  { label: "FAQs", href: "#hero4-faqs" },
  { label: "Contact Us", href: "#hero4-contact" },
];

const galleryImages = [GALLERY_IMAGE_1, GALLERY_IMAGE_2, GALLERY_IMAGE_3];

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

export default function AboveTheFoldSection4({
  title = defaultTitle,
  subtitle = defaultSubtitle,
  description = defaultDescription,
  ctaText = "FREE CONSULTATION",
  image = HERO_IMAGE,
}: AboveTheFoldSection4Props): JSX.Element {
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    let intervalId: number | undefined;

    const clear = () => {
      if (intervalId != null) {
        window.clearInterval(intervalId);
        intervalId = undefined;
      }
    };

    const start = () => {
      clear();
      if (!mq.matches) {
        return;
      }
      intervalId = window.setInterval(() => {
        setSliderIndex((prev) => (prev + 1) % galleryImages.length);
      }, 3000);
    };

    start();
    mq.addEventListener("change", start);
    return () => {
      mq.removeEventListener("change", start);
      clear();
    };
  }, []);

  const nextSlide = (): void => {
    setSliderIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = (): void => {
    setSliderIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="w-full bg-white font-['Inter',sans-serif] text-white">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden" id="hero4">
        <div className="hidden h-[56px] border-b-[0.8px] border-black bg-white text-black lg:block">
          <div className="mx-auto flex h-full max-w-[1296px] items-center justify-between px-6">
            <div className="flex items-center gap-6 text-[16px] leading-[25.6px] text-black">
              <a className="flex items-center gap-2" href="tel:+14168566959">
                <img alt="Phone icon" className="h-[14px] w-[14px]" src={PHONE_ICON} />
                <span>[Phone Number]</span>
              </a>
              <a className="flex items-center gap-2" href="mailto:hello@example.com">
                <img alt="Email icon" className="h-[14px] w-[14px]" src={EMAIL_ICON} />
                <span>[Email Address]</span>
              </a>
              <span className="flex items-center gap-2">
                <img alt="Location icon" className="h-[14px] w-[14px]" src={LOCATION_ICON} />
                <span>[Target Location]</span>
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[16px] leading-[25.6px] text-black">Follow Us On:</span>
              <div className="flex items-center gap-[5px]">
                <a href="#"><img alt="Social icon 1" className="h-6 w-6" src={TOP_SOCIAL_1} /></a>
                <a href="#"><img alt="Social icon 2" className="h-6 w-6" src={TOP_SOCIAL_2} /></a>
                <a href="#"><img alt="Social icon 3" className="h-6 w-6" src={TOP_SOCIAL_3} /></a>
                <a href="#"><img alt="Social icon 4" className="h-6 w-6" src={TOP_SOCIAL_4} /></a>
              </div>
            </div>
          </div>
        </div>

        <header className="relative z-30 bg-[#1c1c1c]">
          <div className="mx-auto hidden h-[120px] max-w-[1060px] items-center justify-between px-4 lg:flex">
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
                      {hasDropdown ? <img alt="" className="ml-[10px] h-[15px] w-[15px]" src={NAV_CHEVRON} /> : null}
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
                        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
                          <img alt="" className="h-[15px] w-[15px]" src={NAV_CHEVRON} />
                        </span>
                        {item.label}
                      </button>
                    ) : (
                      <a className="block w-full text-[14px] font-medium text-white" href={item.href} onClick={() => setMobileMenuOpen(false)}>
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

        <div className="relative h-[808px]">
          <img alt="Hero background" className="absolute inset-0 h-full w-full object-cover" src={image} />
          <div className="absolute inset-0 bg-black/[0.68]" />

          <div className="relative z-20 px-4 pt-[92px] text-center lg:px-0 lg:pt-[96px] lg:text-left">
            <div className="mx-auto max-w-[1060px]">
              <div className="max-w-[579px]">
                <h1 className="text-[40px] font-semibold leading-[1.08] tracking-[-0.8px] text-white sm:text-[44px] lg:text-[48px] lg:tracking-[-0.96px]">
                  {title}
                </h1>
                <p className="mx-auto mt-[29px] max-w-[565px] text-[16px] leading-[22px] text-white lg:mx-0 lg:leading-normal">{subtitle}</p>

                <div className="mt-[22px] flex flex-wrap items-center justify-center gap-4 lg:justify-start">
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
          </div>

          <section className="absolute inset-x-0 bottom-[11px] z-20 bg-black/60" id="hero4-highlights">
            <div className="mx-auto flex max-w-[1060px] flex-col items-center gap-8 px-4 py-6 text-center lg:flex-row lg:items-start lg:justify-between lg:gap-6 lg:px-0 lg:py-[60px] lg:text-left">
              <div className="w-full max-w-[337.5px]">
                <div className="flex items-center justify-center gap-[22.5px] lg:justify-start">
                  <a aria-label="Facebook" href="#"><img alt="Facebook" className="h-[21.63px] w-[22.5px]" src={FACEBOOK_ICON} /></a>
                  <a aria-label="Instagram" href="#"><img alt="Instagram" className="h-[21.63px] w-[22.5px]" src={INSTAGRAM_ICON} /></a>
                  <a aria-label="Twitter" href="#"><img alt="Twitter" className="h-[21.63px] w-[22.5px]" src={TWITTER_ICON} /></a>
                  <a aria-label="YouTube" href="#"><img alt="YouTube" className="h-[21.63px] w-[22.5px]" src={YOUTUBE_ICON} /></a>
                </div>
                <p className="mt-[15px] text-[12px] leading-[18.75px] text-white">{description}</p>
              </div>

              <div className="w-full max-w-[697.5px]" id="hero4-gallery">
                <div className="hidden items-center gap-[30.75px] lg:flex">
                  <img alt="Gallery image 1" className="h-[135.55px] w-[212.25px] object-cover" src={GALLERY_IMAGE_1} />
                  <img alt="Gallery image 2" className="h-[135.55px] w-[213px] object-cover" src={GALLERY_IMAGE_2} />
                  <img alt="Gallery image 3" className="h-[135.55px] w-[212.25px] object-cover" src={GALLERY_IMAGE_3} />
                </div>

                <div className="relative lg:hidden">
                  <div className="overflow-hidden rounded-[3px]">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${sliderIndex * 100}%)` }}>
                      {galleryImages.map((galleryImage, index) => (
                        <div className="w-full shrink-0" key={`${galleryImage}-${index}`}>
                          <img alt={`Gallery image ${index + 1}`} className="h-[170px] w-full object-cover sm:h-[200px]" src={galleryImage} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    aria-label="Previous gallery image"
                    className="absolute left-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white"
                    onClick={prevSlide}
                    type="button"
                  >
                    {"<"}
                  </button>
                  <button
                    aria-label="Next gallery image"
                    className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white"
                    onClick={nextSlide}
                    type="button"
                  >
                    {">"}
                  </button>

                  <div className="mt-3 flex items-center justify-center gap-2">
                    {galleryImages.map((_, index) => (
                      <button
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-2.5 w-2.5 rounded-full ${sliderIndex === index ? "bg-[#ffb717]" : "bg-white/50"}`}
                        key={`dot-${index}`}
                        onClick={() => setSliderIndex(index)}
                        type="button"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}