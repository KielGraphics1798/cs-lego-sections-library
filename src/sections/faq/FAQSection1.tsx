import { useId, useState, type JSX } from "react";

/**
 * Figma: FAQ (two columns + accordion). Vite + React.
 * In **Next.js App Router** add `"use client"` at the top of this file (interactive state).
 */
const ICON_OPEN =
  "https://www.figma.com/api/mcp/asset/fe1e096d-38fb-4f03-86db-30eb187add86";
const ICON_CLOSED =
  "https://www.figma.com/api/mcp/asset/13534af8-891a-4b10-9ffb-c471f968fd00";

export interface FAQSection1Item {
  id: string;
  question: string;
  /** Use `\n` for multiple paragraphs. */
  answer: string;
}

export interface FAQSection1Props {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  items?: FAQSection1Item[];
  /** Accordion item opened by default. */
  defaultOpenIndex?: number;
}

const defaultDescription = `Building a home is complex. We make it simple.
Here are answers to the most frequent question
we receive.`;

const defaultItems: FAQSection1Item[] = [
  {
    id: "1",
    question: "Do you handle permits and zoning?",
    answer:
      "Yes. As a full-service design-build firm, we manage the entire permitting process, including zoning\nreviews, committee of adjustment applications, and building permits.",
  },
  {
    id: "2",
    question: "How long does a custom home build take?",
    answer: "Timelines vary by scope, permits, and site. We outline a clear schedule during planning and keep you updated through each phase.",
  },
  {
    id: "3",
    question: "Do you offer fixed-price contracts?",
    answer: "We will review contract options in your consultation so you can choose the structure that fits your project and comfort with variable scope.",
  },
  {
    id: "4",
    question: "Can I live in my home during a major renovation?",
    answer: "It depends on the scope. We assess safety and logistics with you up front and recommend the best approach for your household during construction.",
  },
];

function splitDescription(text: string): string[] {
  return text
    .trim()
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
}

export default function FAQSection1(
  rawProps: FAQSection1Props = {},
): JSX.Element {
  const {
    eyebrow = "Common Questions",
    titleLine1 = "Everything You",
    titleLine2 = "Need To Know",
    description = defaultDescription,
    ctaText = "more questions",
    ctaHref = "#",
    items = defaultItems,
    defaultOpenIndex = 0,
  } = rawProps;

  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const baseId = useId();

  const descLines = splitDescription(description);

  return (
    <section
      className="faq-section-1 w-full bg-white font-['Inter',sans-serif] text-[#1c1917] antialiased"
      aria-label="Frequently asked questions"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-6 sm:py-12 lg:grid lg:grid-cols-[minmax(0,400px)_1fr] lg:items-start lg:gap-x-12 lg:gap-y-0 lg:px-[120px] lg:py-16">
        <div className="mb-10 max-w-md lg:mb-0 lg:pt-1">
          <span className="block text-xs font-bold uppercase leading-4 tracking-[2.4px] text-[#78716c]">
            {eyebrow}
          </span>
          <h2 className="mt-5 text-[32px] font-bold leading-tight tracking-tight sm:text-4xl lg:mt-6 lg:leading-10">
            <span className="block">{titleLine1}</span>
            <span className="block">{titleLine2}</span>
          </h2>
          <div className="mt-4 text-base font-normal leading-6 text-[#57534e] sm:mt-5">
            {descLines.map((line, i) => (
              <p key={`faq-desc-${i}`} className="mb-0 last:mb-0">
                {line}
              </p>
            ))}
          </div>
          <a
            className="mt-5 inline-block border-b border-[#1c1917] pb-0.5 text-xs font-bold uppercase leading-4 tracking-[1.2px] text-[#1c1917] transition-opacity hover:opacity-70"
            href={ctaHref}
          >
            {ctaText}
          </a>
        </div>

        <div className="min-w-0 bg-white">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${item.id}`;
            const labelId = `${baseId}-label-${item.id}`;

            return (
              <div
                key={item.id}
                className="border-b border-[#e7e5e4] bg-white last:border-b-0"
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
      </div>
    </section>
  );
}
