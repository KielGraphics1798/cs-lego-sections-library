import { useId, useState, type JSX } from "react";

/**
 * Figma: centered FAQ + bottom CTA. Vite + React. For **Next.js App Router** add `"use client"`.
 */
const ICON_OPEN =
  "https://www.figma.com/api/mcp/asset/0e01fc56-21cd-4b3a-92be-8da199c425b3";
const ICON_CLOSED =
  "https://www.figma.com/api/mcp/asset/5132754a-9bbc-447b-b672-d759bc560ac4";
const IMG_CTA_ARROW =
  "https://www.figma.com/api/mcp/asset/d460319d-eb64-47e7-8157-be40f4a7409b";

export interface FAQSection2Item {
  id: string;
  question: string;
  /** Use `\n` for line breaks. */
  answer: string;
}

export interface FAQSection2Props {
  heading?: string;
  items?: FAQSection2Item[];
  defaultOpenIndex?: number;
  ctaText?: string;
  ctaHref?: string;
}

const defaultItems: FAQSection2Item[] = [
  {
    id: "1",
    question: "Do you handle permits and zoning?",
    answer:
      "Yes. As a full-service design-build firm, we manage the entire permitting process, including zoning\nreviews, committee of adjustment applications, and building permits.",
  },
  {
    id: "2",
    question: "How long does a custom home build take?",
    answer:
      "Timelines vary by scope, permits, and site. We outline a clear schedule during planning and keep you updated through each phase.",
  },
  {
    id: "3",
    question: "Do you offer fixed-price contracts?",
    answer:
      "We will review contract options in your consultation so you can choose the structure that fits your project and comfort with variable scope.",
  },
  {
    id: "4",
    question: "Can I live in my home during a major renovation?",
    answer:
      "It depends on the scope. We assess safety and logistics with you up front and recommend the best approach for your household during construction.",
  },
];

export default function FAQSection2(
  rawProps: FAQSection2Props = {},
): JSX.Element {
  const {
    heading = "Frequently Asked Questions",
    items = defaultItems,
    defaultOpenIndex = 0,
    ctaText = "More Questions",
    ctaHref = "#",
  } = rawProps;

  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const baseId = useId();

  return (
    <section
      className="faq-section-2 w-full bg-white font-['Inter',sans-serif] text-[#1c1917] antialiased"
      aria-label="Frequently asked questions"
    >
      <div className="mx-auto w-full max-w-[min(100%,820px)] px-4 py-10 sm:px-5 sm:py-12 lg:py-16">
        <h2 className="mx-auto text-center text-[2rem] font-bold capitalize leading-[1.1] text-[#131212] sm:text-4xl lg:text-[48px] lg:leading-[45px]">
          {heading}
        </h2>

        <div className="mt-8 w-full min-w-0 sm:mt-9 lg:mt-10">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${item.id}`;
            const labelId = `${baseId}-label-${item.id}`;

            return (
              <div
                key={item.id}
                className="border-b border-[#e7e5e4] bg-white"
              >
                <h3 className="m-0 text-[20px] font-semibold leading-7 sm:text-lg">
                  <button
                    type="button"
                    id={labelId}
                    className="flex min-h-[5.75rem] w-full items-center justify-between gap-4 py-2 text-left"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => {
                      setOpenIndex((prev) => (prev === index ? null : index));
                    }}
                  >
                    <span
                      className={isOpen ? "text-[#1c1917]" : "text-[#57534e]"}
                    >
                      {item.question}
                    </span>
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center"
                      aria-hidden
                    >
                      <img
                        alt=""
                        className="h-5 w-5"
                        src={isOpen ? ICON_OPEN : ICON_CLOSED}
                      />
                    </span>
                  </button>
                </h3>
                {isOpen ? (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={labelId}
                    className="pb-6 sm:pb-7"
                  >
                    <div className="pt-0 text-base font-light leading-[26px] text-[#78716c]">
                      {item.answer.split("\n").map((p, j) => (
                        <p key={`${item.id}-a-${j}`} className="mb-0 last:mb-0">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10 lg:mt-12">
          <a
            className="group/cta inline-flex h-[3rem] min-w-[12rem] items-center justify-center gap-2 rounded-[4.25px] border border-black bg-white px-6 text-[13.2px] font-bold leading-tight text-black shadow-[0px_2.5px_0.85px_0.85px_rgba(0,0,0,0.16)] transition-colors font-['Arimo',sans-serif] hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            href={ctaHref}
          >
            <span className="tracking-tight">{ctaText}</span>
            <span
              className="flex h-3.5 w-3.5 shrink-0 items-center justify-center group-hover/cta:invert"
              aria-hidden
            >
              <img alt="" className="h-full w-full" src={IMG_CTA_ARROW} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
