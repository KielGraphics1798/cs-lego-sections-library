import { useMemo, useState, type JSX } from "react";
import {
  AboveTheFoldSection1,
  AboveTheFoldSection2,
  AboveTheFoldSection3,
  AboveTheFoldSection4,
  AboveTheFoldSection5,
} from "../sections/above-the-fold";
import {
  AboutSection1,
  AboutSection2,
  AboutSection3,
  AboutSection4,
  AboutSection5,
} from "../sections/about";
import {
  WhyChooseUsSection1,
  WhyChooseUsSection2,
  WhyChooseUsSection3,
  WhyChooseUsSection4,
  WhyChooseUsSection5,
} from "../sections/why-choose-us";
import {
  ServicesSection1,
  ServicesSection2,
  ServicesSection3,
  ServicesSection4,
  ServicesSection5,
} from "../sections/services";
import {
  ProcessSection1,
  ProcessSection2,
  ProcessSection3,
  ProcessSection4,
  ProcessSection5,
} from "../sections/process";
import {
  PreConsultationSection1,
  PreConsultationSection2,
  PreConsultationSection3,
  PreConsultationSection4,
  PreConsultationSection5,
} from "../sections/pre-consultation";
import {
  GuaranteeSection1,
  GuaranteeSection2,
  GuaranteeSection3,
  GuaranteeSection4,
  GuaranteeSection5,
} from "../sections/guarantee";
import {
  ProjectsSection1,
  ProjectsSection2,
  ProjectsSection3,
  ProjectsSection4,
  ProjectsSection5,
} from "../sections/projects";
import {
  TestimonialsSection1,
  TestimonialsSection2,
  TestimonialsSection3,
  TestimonialsSection4,
  TestimonialsSection5,
} from "../sections/testimonials";
import {
  FAQSection1,
  FAQSection2,
  FAQSection3,
  FAQSection4,
  FAQSection5,
} from "../sections/faq";
import {
  BlogSection1,
  BlogSection2,
  BlogSection3,
  BlogSection4,
  BlogSection5,
} from "../sections/blog";
import {
  FinalCTASection1,
  FinalCTASection2,
  FinalCTASection3,
  FinalCTASection4,
  FinalCTASection5,
} from "../sections/final-cta";
import {
  FooterSection1,
  FooterSection2,
  FooterSection3,
  FooterSection4,
  FooterSection5,
} from "../sections/footer";

type SectionComponent = () => JSX.Element;

const sectionComponents = {
  "above-the-fold": [
    AboveTheFoldSection1,
    AboveTheFoldSection2,
    AboveTheFoldSection3,
    AboveTheFoldSection4,
    AboveTheFoldSection5,
  ],
  about: [AboutSection1, AboutSection2, AboutSection3, AboutSection4, AboutSection5],
  "why-choose-us": [
    WhyChooseUsSection1,
    WhyChooseUsSection2,
    WhyChooseUsSection3,
    WhyChooseUsSection4,
    WhyChooseUsSection5,
  ],
  services: [ServicesSection1, ServicesSection2, ServicesSection3, ServicesSection4, ServicesSection5],
  process: [ProcessSection1, ProcessSection2, ProcessSection3, ProcessSection4, ProcessSection5],
  "pre-consultation": [
    PreConsultationSection1,
    PreConsultationSection2,
    PreConsultationSection3,
    PreConsultationSection4,
    PreConsultationSection5,
  ],
  guarantee: [GuaranteeSection1, GuaranteeSection2, GuaranteeSection3, GuaranteeSection4, GuaranteeSection5],
  projects: [ProjectsSection1, ProjectsSection2, ProjectsSection3, ProjectsSection4, ProjectsSection5],
  testimonials: [
    TestimonialsSection1,
    TestimonialsSection2,
    TestimonialsSection3,
    TestimonialsSection4,
    TestimonialsSection5,
  ],
  faq: [FAQSection1, FAQSection2, FAQSection3, FAQSection4, FAQSection5],
  blog: [BlogSection1, BlogSection2, BlogSection3, BlogSection4, BlogSection5],
  "final-cta": [FinalCTASection1, FinalCTASection2, FinalCTASection3, FinalCTASection4, FinalCTASection5],
  footer: [FooterSection1, FooterSection2, FooterSection3, FooterSection4, FooterSection5],
} satisfies Record<string, SectionComponent[]>;

const sectionCategories = [
  { key: "above-the-fold", label: "Above the Fold" },
  { key: "about", label: "About" },
  { key: "why-choose-us", label: "Why Choose Us" },
  { key: "services", label: "Services" },
  { key: "process", label: "Process" },
  { key: "pre-consultation", label: "Pre-Consultation" },
  { key: "guarantee", label: "Guarantee" },
  { key: "projects", label: "Projects" },
  { key: "testimonials", label: "Testimonials" },
  { key: "faq", label: "FAQ" },
  { key: "blog", label: "Blog" },
  { key: "final-cta", label: "Final CTA" },
  { key: "footer", label: "Footer" },
] as const;

const variantLabels = ["Section1", "Section2", "Section3", "Section4", "Section5"];

export default function PreviewLibrary(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState(sectionCategories[0].key);
  const [activeVariant, setActiveVariant] = useState(0);

  const currentComponent = useMemo(() => {
    const variants = sectionComponents[activeCategory] ?? [];
    return variants[activeVariant] ?? variants[0];
  }, [activeCategory, activeVariant]);

  const CurrentSection = currentComponent;

  return (
    <div className="min-h-screen bg-[#f6f6f6] px-4 py-8 text-[#141414]">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6">
        <header className="rounded-[16px] border border-[#e3e3e3] bg-white px-6 py-5 shadow-[0px_10px_30px_rgba(0,0,0,0.06)]">
          <h1 className="text-[20px] font-semibold tracking-[-0.3px]">Section Library Preview</h1>
          <p className="mt-1 text-[13px] text-[#5a5a5a]">
            Switch categories and variants to preview each section.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {sectionCategories.map((category) => {
              const isActive = activeCategory === category.key;
              return (
                <button
                  key={category.key}
                  className={`rounded-full border px-4 py-2 text-[13px] font-medium transition ${
                    isActive
                      ? "border-[#141414] bg-[#141414] text-white shadow-[0px_6px_18px_rgba(0,0,0,0.16)]"
                      : "border-[#d6d6d6] bg-white text-[#2b2b2b] hover:border-[#141414] hover:text-[#141414]"
                  }`}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category.key);
                    setActiveVariant(0);
                  }}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {variantLabels.map((label, index) => {
              const isActive = activeVariant === index;
              return (
                <button
                  key={label}
                  className={`rounded-[10px] border px-4 py-2 text-[13px] font-semibold transition ${
                    isActive
                      ? "border-[#ffb717] bg-[#ffb717] text-[#141414] shadow-[0px_6px_16px_rgba(255,183,23,0.35)]"
                      : "border-[#dedede] bg-white text-[#3a3a3a] hover:border-[#ffb717]"
                  }`}
                  type="button"
                  onClick={() => setActiveVariant(index)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </header>

        <main className="rounded-[18px] border border-[#e3e3e3] bg-white p-4 shadow-[0px_18px_40px_rgba(15,15,15,0.08)]">
          <div className="overflow-hidden rounded-[14px] border border-[#ededed] bg-white">
            {CurrentSection ? <CurrentSection /> : <div className="p-10 text-center">Section not available.</div>}
          </div>
        </main>
      </div>
    </div>
  );
}
