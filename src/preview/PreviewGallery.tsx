import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type JSX,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";

import SectionPreview from "./SectionPreview";
import {
  allSections,
  categoryDescriptors,
  type CategoryKey,
  type SectionMeta,
} from "./sectionRegistry";

/**
 * Thumbnail layout constants. The card thumbnail is rendered by mounting the actual
 * section component inside a fixed-width sandbox (1440px) and then visually scaling it
 * down with `transform: scale(...)`. This keeps the section's internal layout *exactly*
 * what it is at desktop resolution while showing a small preview.
 */
const THUMB_VIEWPORT_WIDTH = 1440;
/** Visible card thumbnail width (post-scale). 1440 * 0.2 = 288. */
const THUMB_DISPLAY_WIDTH = 288;
const THUMB_SCALE = THUMB_DISPLAY_WIDTH / THUMB_VIEWPORT_WIDTH;
/** Visible card thumbnail height (post-scale). 1100 * 0.2 = 220. */
const THUMB_DISPLAY_HEIGHT = 220;
const THUMB_VIEWPORT_HEIGHT = THUMB_DISPLAY_HEIGHT / THUMB_SCALE;

type CategoryFilter = "all" | CategoryKey;

const filterOptions: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "All" },
  ...categoryDescriptors.map((c) => ({ value: c.key, label: c.label })),
];

export default function PreviewGallery(): JSX.Element {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const [openSection, setOpenSection] = useState<SectionMeta | null>(null);

  const filteredSections = useMemo(() => {
    const trimmedSearch = search.trim().toLowerCase();
    return allSections.filter((section) => {
      if (filter !== "all" && section.category !== filter) return false;
      if (trimmedSearch.length === 0) return true;
      return section.searchHaystack.includes(trimmedSearch);
    });
  }, [filter, search]);

  const sectionCount = filteredSections.length;

  return (
    <div className="flex w-full flex-col bg-[#f5f5f6] text-[#141414]">
      <div className="border-b border-[#e3e3e3] bg-white px-4 py-5 sm:px-6">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-4">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h2 className="m-0 text-[18px] font-semibold tracking-[-0.3px]">Component Gallery</h2>
              <p className="mt-0.5 text-[12.5px] text-[#5a5a5a]">
                Browse, search, and preview every section variant. Click a card to open the full-viewport preview.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[12px] text-[#5a5a5a]">
              <span className="font-semibold text-[#141414]">{sectionCount}</span>
              <span>{sectionCount === 1 ? "section" : "sections"}</span>
            </div>
          </div>

          <SearchInput value={search} onChange={setSearch} />

          <FilterPills active={filter} onChange={setFilter} />
        </div>
      </div>

      <div className="px-4 py-6 sm:px-6 sm:py-8">
        <div className="mx-auto w-full max-w-[1400px]">
          {sectionCount === 0 ? (
            <EmptyState search={search} filter={filter} onReset={() => { setSearch(""); setFilter("all"); }} />
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredSections.map((section) => (
                <SectionCard
                  key={section.id}
                  meta={section}
                  onOpen={() => setOpenSection(section)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {openSection ? (
        <SectionPreview meta={openSection} onClose={() => setOpenSection(null)} />
      ) : null}
    </div>
  );
}

function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (next: string) => void;
}): JSX.Element {
  return (
    <label className="relative flex w-full items-center">
      <span className="pointer-events-none absolute left-4 text-[14px] text-[#7a7a7a]" aria-hidden>
        ⌕
      </span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search sections by name or keyword (Hero, FAQ, Footer…)"
        className="w-full rounded-[12px] border border-[#dcdcdc] bg-white py-3 pl-10 pr-10 text-[14px] text-[#141414] placeholder:text-[#7a7a7a] outline-none transition focus:border-[#141414] focus:shadow-[0px_0px_0px_3px_rgba(20,20,20,0.06)]"
        aria-label="Search sections"
      />
      {value ? (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#dcdcdc] bg-white text-[12px] text-[#5a5a5a] hover:border-[#141414] hover:text-[#141414]"
          aria-label="Clear search"
        >
          ×
        </button>
      ) : null}
    </label>
  );
}

function FilterPills({
  active,
  onChange,
}: {
  active: CategoryFilter;
  onChange: (next: CategoryFilter) => void;
}): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
      {filterOptions.map((opt) => {
        const isActive = active === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition ${
              isActive
                ? "border-[#141414] bg-[#141414] text-white shadow-[0px_4px_12px_rgba(0,0,0,0.16)]"
                : "border-[#d6d6d6] bg-white text-[#2b2b2b] hover:border-[#141414] hover:text-[#141414]"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function EmptyState({
  search,
  filter,
  onReset,
}: {
  search: string;
  filter: CategoryFilter;
  onReset: () => void;
}): JSX.Element {
  const hasFilters = search.length > 0 || filter !== "all";
  return (
    <div className="rounded-[16px] border border-dashed border-[#d4d4d4] bg-white p-12 text-center">
      <p className="m-0 text-[16px] font-semibold text-[#141414]">No sections found</p>
      <p className="mx-auto mt-2 max-w-[420px] text-[13px] text-[#5a5a5a]">
        {hasFilters
          ? "Try a different keyword or clear the active filters."
          : "There are no sections available yet."}
      </p>
      {hasFilters ? (
        <button
          type="button"
          onClick={onReset}
          className="mt-5 inline-flex items-center gap-1 rounded-[8px] border border-[#141414] bg-[#141414] px-4 py-2 text-[12.5px] font-semibold text-white hover:bg-[#000]"
        >
          Reset filters
        </button>
      ) : null}
    </div>
  );
}

function SectionCard({
  meta,
  onOpen,
}: {
  meta: SectionMeta;
  onOpen: () => void;
}): JSX.Element {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [thumbnailVisible, setThumbnailVisible] = useState<boolean>(false);

  // Lazy-mount thumbnails as their cards approach the viewport — keeps initial render fast
  // since 65 sections at once would otherwise force a heavy layout pass on first paint.
  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setThumbnailVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setThumbnailVisible(true);
            observer.disconnect();
            return;
          }
        }
      },
      { rootMargin: "300px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <div
      ref={cardRef}
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={handleKeyDown}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-[14px] border border-[#e3e3e3] bg-white shadow-[0px_2px_4px_rgba(20,20,20,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-[#141414] hover:shadow-[0px_18px_32px_rgba(20,20,20,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e6cf6]"
      aria-label={`Open full preview of ${meta.name}`}
    >
      <Thumbnail meta={meta} active={thumbnailVisible} />
      <div className="flex items-start justify-between gap-3 border-t border-[#eee] px-4 py-3">
        <div className="min-w-0">
          <p className="m-0 truncate text-[13.5px] font-semibold text-[#141414]">{meta.name}</p>
          <p className="m-0 mt-0.5 truncate text-[11.5px] uppercase tracking-[0.06em] text-[#7a7a7a]">
            {meta.categoryLabel} · Variant {meta.variantNumber}
          </p>
        </div>
        <span
          aria-hidden
          className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#dcdcdc] text-[11px] text-[#5a5a5a] transition group-hover:border-[#141414] group-hover:bg-[#141414] group-hover:text-white"
        >
          ↗
        </span>
      </div>
    </div>
  );
}

function Thumbnail({ meta, active }: { meta: SectionMeta; active: boolean }): JSX.Element {
  const { Component } = meta;
  return (
    <div
      className="relative w-full overflow-hidden bg-[#f6f6f6]"
      style={{ height: THUMB_DISPLAY_HEIGHT }}
    >
      {active ? (
        <div
          aria-hidden
          className="pointer-events-none select-none"
          style={{
            transform: `scale(${THUMB_SCALE})`,
            transformOrigin: "top left",
            width: THUMB_VIEWPORT_WIDTH,
            height: THUMB_VIEWPORT_HEIGHT,
          }}
        >
          <Component />
        </div>
      ) : (
        <ThumbnailSkeleton />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30" />
    </div>
  );
}

function ThumbnailSkeleton(): JSX.Element {
  return (
    <div
      className="absolute inset-0 animate-pulse"
      style={{
        background:
          "linear-gradient(120deg, #efefef 0%, #f7f7f7 40%, #efefef 60%, #efefef 100%)",
      }}
    />
  );
}
