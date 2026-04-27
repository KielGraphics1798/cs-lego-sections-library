import type { ComponentType } from "react";

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

/**
 * A section component as seen by the gallery / preview.
 *
 * Sections in this codebase declare their props interface as `(props: SectionXProps) => Element`
 * (with all properties optional and Figma-style defaults assigned in the destructuring).
 * For our purposes we only call them with `<Component />`, so we widen the type to
 * `ComponentType<any>` — that accepts both the strictly-typed declarations *and* zero-prop
 * invocations.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SectionComponent = ComponentType<any>;

/** Stable IDs used in URLs and registry keys. */
export type CategoryKey =
  | "above-the-fold"
  | "about"
  | "why-choose-us"
  | "services"
  | "process"
  | "pre-consultation"
  | "guarantee"
  | "projects"
  | "testimonials"
  | "faq"
  | "blog"
  | "final-cta"
  | "footer";

export interface CategoryDescriptor {
  key: CategoryKey;
  label: string;
  /** Extra search keywords (e.g. "Hero" → above-the-fold). */
  aliases: string[];
}

export const categoryDescriptors: readonly CategoryDescriptor[] = [
  { key: "above-the-fold", label: "Above the Fold", aliases: ["Hero", "ATF", "Banner"] },
  { key: "about", label: "About", aliases: ["About Us", "Story"] },
  { key: "why-choose-us", label: "Why Choose Us", aliases: ["Benefits", "Differentiators"] },
  { key: "services", label: "Services", aliases: ["Offerings"] },
  { key: "process", label: "Process", aliases: ["How It Works", "Steps"] },
  { key: "pre-consultation", label: "Pre-Consultation", aliases: ["Lead Form", "Consultation"] },
  { key: "guarantee", label: "Guarantee", aliases: ["Warranty", "Promise"] },
  { key: "projects", label: "Projects", aliases: ["Portfolio", "Work"] },
  { key: "testimonials", label: "Testimonials", aliases: ["Reviews", "Quotes"] },
  { key: "faq", label: "FAQ", aliases: ["Questions"] },
  { key: "blog", label: "Blog", aliases: ["Articles", "Insights"] },
  { key: "final-cta", label: "Final CTA", aliases: ["Closing", "Call To Action"] },
  { key: "footer", label: "Footer", aliases: ["Site Footer"] },
];

export const categoryLabelByKey: Record<CategoryKey, string> = categoryDescriptors.reduce(
  (acc, c) => {
    acc[c.key] = c.label;
    return acc;
  },
  {} as Record<CategoryKey, string>,
);

const variantsByCategory: Record<CategoryKey, SectionComponent[]> = {
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
  services: [
    ServicesSection1,
    ServicesSection2,
    ServicesSection3,
    ServicesSection4,
    ServicesSection5,
  ],
  process: [ProcessSection1, ProcessSection2, ProcessSection3, ProcessSection4, ProcessSection5],
  "pre-consultation": [
    PreConsultationSection1,
    PreConsultationSection2,
    PreConsultationSection3,
    PreConsultationSection4,
    PreConsultationSection5,
  ],
  guarantee: [
    GuaranteeSection1,
    GuaranteeSection2,
    GuaranteeSection3,
    GuaranteeSection4,
    GuaranteeSection5,
  ],
  projects: [
    ProjectsSection1,
    ProjectsSection2,
    ProjectsSection3,
    ProjectsSection4,
    ProjectsSection5,
  ],
  testimonials: [
    TestimonialsSection1,
    TestimonialsSection2,
    TestimonialsSection3,
    TestimonialsSection4,
    TestimonialsSection5,
  ],
  faq: [FAQSection1, FAQSection2, FAQSection3, FAQSection4, FAQSection5],
  blog: [BlogSection1, BlogSection2, BlogSection3, BlogSection4, BlogSection5],
  "final-cta": [
    FinalCTASection1,
    FinalCTASection2,
    FinalCTASection3,
    FinalCTASection4,
    FinalCTASection5,
  ],
  footer: [FooterSection1, FooterSection2, FooterSection3, FooterSection4, FooterSection5],
};

const componentNamePrefix: Record<CategoryKey, string> = {
  "above-the-fold": "AboveTheFoldSection",
  about: "AboutSection",
  "why-choose-us": "WhyChooseUsSection",
  services: "ServicesSection",
  process: "ProcessSection",
  "pre-consultation": "PreConsultationSection",
  guarantee: "GuaranteeSection",
  projects: "ProjectsSection",
  testimonials: "TestimonialsSection",
  faq: "FAQSection",
  blog: "BlogSection",
  "final-cta": "FinalCTASection",
  footer: "FooterSection",
};

export interface SectionMeta {
  /** Stable ID — `${category}/${variantIndex}` */
  id: string;
  /** Category key (matches the URL `cat` param). */
  category: CategoryKey;
  /** Pretty category label, e.g. "Above the Fold". */
  categoryLabel: string;
  /** Component class name, e.g. "AboveTheFoldSection1". */
  name: string;
  /** Variant ordinal (1-based) for display. */
  variantNumber: number;
  /** Variant ordinal (0-based) — matches the `v` URL param. */
  variantIndex: number;
  /** All searchable text concatenated lowercase for cheap `String.includes` matching. */
  searchHaystack: string;
  /** The actual section component (defaults-only invocation). */
  Component: SectionComponent;
}

/**
 * Flat list of every section variant with metadata. The order matches the registry above
 * (above-the-fold → footer, variant 1 → 5).
 */
export const allSections: readonly SectionMeta[] = categoryDescriptors.flatMap((descriptor) => {
  const components = variantsByCategory[descriptor.key];
  const prefix = componentNamePrefix[descriptor.key];
  return components.map((Component, index): SectionMeta => {
    const name = `${prefix}${index + 1}`;
    const haystackParts = [
      name,
      descriptor.label,
      descriptor.key,
      ...descriptor.aliases,
    ];
    return {
      id: `${descriptor.key}/${index}`,
      category: descriptor.key,
      categoryLabel: descriptor.label,
      name,
      variantNumber: index + 1,
      variantIndex: index,
      searchHaystack: haystackParts.join(" ").toLowerCase(),
      Component,
    };
  });
});

/** Look up the component used to render a bare URL `?bare=1&cat=...&v=...`. */
export function getSectionByCategoryAndIndex(
  category: CategoryKey,
  variantIndex: number,
): SectionComponent | undefined {
  const variants = variantsByCategory[category];
  return variants?.[variantIndex] ?? variants?.[0];
}

/** Used by callers that still consume the legacy `sectionComponents[category]` shape. */
export const sectionComponents: Readonly<Record<CategoryKey, readonly SectionComponent[]>> =
  variantsByCategory;

export function isCategoryKey(value: string | null | undefined): value is CategoryKey {
  return value != null && value in variantsByCategory;
}
