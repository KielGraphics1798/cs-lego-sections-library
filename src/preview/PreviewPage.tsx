import {
  AboveTheFoldSection1,
  AboveTheFoldSection2,
  AboveTheFoldSection3,
  AboveTheFoldSection4,
  AboveTheFoldSection5,
} from "../sections/above-the-fold";
import SectionTabsPreview, { type SectionVariant } from "./components/SectionTabsPreview";

const aboveTheFoldVariants: SectionVariant[] = [
  { id: "section-1", label: "Section1", Component: AboveTheFoldSection1 },
  { id: "section-2", label: "Section2", Component: AboveTheFoldSection2 },
  { id: "section-3", label: "Section3", Component: AboveTheFoldSection3 },
  { id: "section-4", label: "Section4", Component: AboveTheFoldSection4 },
  { id: "section-5", label: "Section5", Component: AboveTheFoldSection5 },
];

export default function PreviewPage() {
  return <SectionTabsPreview title="Above The Fold Variants" variants={aboveTheFoldVariants} />;
}