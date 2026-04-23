import type { JSX } from "react";

/**
 * Blog section (Figma: Blogs / card grid + footer CTA).
 * Stack: Vite + React + Tailwind (matches this repo). For **Next.js App Router**:
 * replace `<a href={...}>` with `import Link from "next/link"` where routes are internal,
 * and optionally use `next/image` for post thumbnails.
 */
const IMG_BLOG_1 =
  "https://www.figma.com/api/mcp/asset/307735f0-d654-412d-9071-2dae7ed902b7";
const IMG_BLOG_2 =
  "https://www.figma.com/api/mcp/asset/664f2a6a-9eb2-4516-a68e-a8f8dcb833b6";
const IMG_BLOG_3 =
  "https://www.figma.com/api/mcp/asset/2a814f03-54ab-4860-a0a8-e035b3b1a2bf";
const IMG_CALENDAR =
  "https://www.figma.com/api/mcp/asset/c24c0c31-6d7c-4a54-a007-2b6341f1b30a";
const IMG_DOUBLE_ARROW =
  "https://www.figma.com/api/mcp/asset/0f3d66fb-b6b4-4b45-893e-83123a324693";
const IMG_CTA_ARROW =
  "https://www.figma.com/api/mcp/asset/faa99f64-d679-4e23-889a-0998de2bc50c";

const CATEGORY_BADGE = "bg-[#fd9a00]";

export interface BlogSection2Post {
  id: string;
  image: string;
  /** Short label, e.g. "Renovation" — shown on the orange badge. */
  category: string;
  date: string;
  /** Use `\n` for a line break between lines (matches Figma two-line title). */
  title: string;
  excerpt: string;
  href: string;
}

export interface BlogSection2Props {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  /** Up to three cards are shown. */
  posts?: BlogSection2Post[];
}

const defaultExcerpt = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis dui ante. `;

const defaultPosts: BlogSection2Post[] = [
  {
    id: "1",
    image: IMG_BLOG_1,
    category: "Renovation",
    date: "Mar 23, 2020",
    title: "You may not think about your\nroof every day. In fact",
    excerpt: defaultExcerpt,
    href: "#",
  },
  {
    id: "2",
    image: IMG_BLOG_2,
    category: "Custom Home",
    date: "Mar 23, 2020",
    title: "You may not think about your\nroof every day. In fact",
    excerpt: defaultExcerpt,
    href: "#",
  },
  {
    id: "3",
    image: IMG_BLOG_3,
    category: "Roofing",
    date: "Mar 23, 2020",
    title: "You may not think about your\nroof every day. In fact",
    excerpt: defaultExcerpt,
    href: "#",
  },
];

function titleLines(title: string): string[] {
  return title.split("\n").map((l) => l.trim());
}

export default function BlogSection2(
  rawProps: BlogSection2Props = {},
): JSX.Element {
  const {
    heading = "Get Reading: Our Blog Articles",
    subheading = "Read our latest project updates and insights from the world of architectural building.",
    ctaText = "Read More Blogs",
    ctaHref = "#",
    posts = defaultPosts,
  } = rawProps;

  const list = posts.slice(0, 3);

  return (
    <section
      className="blog-section-2 w-full bg-white font-['Inter',sans-serif] text-[#131212] antialiased"
      aria-label="Blog articles"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 py-10 sm:px-5 sm:py-12 lg:px-4 lg:py-16">
        <header className="mb-8 text-center sm:mb-10 lg:mb-12">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[48px] lg:leading-[54px]">
            {heading}
          </h2>
          <p className="mx-auto mt-3 max-w-[21.5rem] text-base font-normal leading-relaxed text-[#191919] sm:mt-4 lg:leading-[17.55px]">
            {subheading}
          </p>
        </header>

        <ul className="grid list-none grid-cols-1 gap-6 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-5">
          {list.map((post) => (
            <li key={post.id} className="min-w-0">
              <article className="flex h-full flex-col overflow-hidden rounded-sm bg-white shadow-[0_1px_0_0_#f0f0f0]">
                <a
                  className="group relative -mt-px -mx-px block aspect-[370/220] w-full min-h-[200px] overflow-hidden"
                  href={post.href}
                >
                  <img
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    src={post.image}
                    loading="lazy"
                  />
                  <span
                    className={`absolute bottom-0 right-0 z-[1] min-h-[33px] min-w-[90px] px-3 py-1.5 text-center text-[14px] font-bold leading-[27px] text-white sm:px-4 ${CATEGORY_BADGE} font-['Roboto',sans-serif]`}
                  >
                    {post.category}
                  </span>
                </a>

                <div className="flex flex-1 flex-col border border-[#f7f7f7] border-t-0 bg-white p-4 pb-5 sm:px-6 sm:py-5">
                  <div className="mb-3 flex items-center gap-2 sm:mb-3.5">
                    <img
                      alt=""
                      className="h-[14px] w-[12px] shrink-0"
                      src={IMG_CALENDAR}
                      aria-hidden
                    />
                    <time
                      className="text-[14px] font-bold leading-[27px] text-[#1e1e2a] font-['Roboto',sans-serif]"
                      dateTime={post.date}
                    >
                      {post.date}
                    </time>
                  </div>

                  <h3 className="mb-2 min-h-0 text-[20px] font-bold leading-[30px] text-[#1e1e2a] font-['Roboto',sans-serif]">
                    {titleLines(post.title).map((line, i) => (
                      <span key={`${post.id}-t-${i}`} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>

                  <p className="line-clamp-3 flex-1 text-[14.6px] font-normal leading-[1.4] text-[#616161] sm:leading-[22.8px]">
                    {post.excerpt}
                  </p>

                  <a
                    className="mt-3 inline-flex items-center gap-2 self-start text-[11.24px] font-semibold uppercase leading-normal tracking-tight text-black transition-opacity hover:opacity-75"
                    href={post.href}
                  >
                    <span>READ MORE</span>
                    <img
                      alt=""
                      className="h-[10.5px] w-[10.5px]"
                      src={IMG_DOUBLE_ARROW}
                      aria-hidden
                    />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
          <a
            className="inline-flex h-[43px] min-w-[171px] items-center justify-center gap-2 rounded-[3.75px] border border-black bg-[#fbb040] px-6 text-[11.7px] font-bold leading-[15.6px] text-black shadow-[0px_2.25px_0.75px_0.75px_rgba(0,0,0,0.16)] transition-colors hover:bg-[#f5a62d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fbb040]"
            href={ctaHref}
          >
            <span className="font-['Arimo',sans-serif] font-bold tracking-normal">
              {ctaText}
            </span>
            <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center" aria-hidden>
              <img alt="" className="h-full w-full" src={IMG_CTA_ARROW} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
