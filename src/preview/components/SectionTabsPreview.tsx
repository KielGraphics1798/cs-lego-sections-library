import { useMemo, useState, type ComponentType, type JSX } from "react";

export type SectionVariant = {
  id: string;
  label: string;
  Component: ComponentType;
};

export interface SectionTabsPreviewProps {
  title: string;
  variants: SectionVariant[];
}

export default function SectionTabsPreview({ title, variants }: SectionTabsPreviewProps): JSX.Element {
  const initialVariantId = useMemo(() => variants[0]?.id ?? "", [variants]);
  const [activeVariantId, setActiveVariantId] = useState(initialVariantId);

  const activeVariant = variants.find((variant) => variant.id === activeVariantId) ?? variants[0];
  const ActiveComponent = activeVariant?.Component;

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-[#1c1c1c]">
      <div className="mx-auto w-full max-w-[1600px] px-4 py-5 sm:px-6 sm:py-6">
        <div className="rounded-lg border border-black/10 bg-white p-4 shadow-sm sm:p-5">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.08em] text-black/70">{title}</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {variants.map((variant) => {
              const isActive = variant.id === activeVariantId;
              return (
                <button
                  className={`rounded-md border px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "border-[#ffb717] bg-[#ffb717] text-[#1c1c1c]"
                      : "border-black/15 bg-white text-black/75 hover:border-black/25 hover:bg-black/5"
                  }`}
                  key={variant.id}
                  onClick={() => setActiveVariantId(variant.id)}
                  type="button"
                >
                  {variant.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1600px] px-0 pb-8 sm:px-4">
        <div className="overflow-x-auto rounded-none border-y border-black/10 bg-white shadow-sm sm:rounded-lg sm:border">
          {ActiveComponent ? <ActiveComponent /> : null}
        </div>
      </div>
    </main>
  );
}
