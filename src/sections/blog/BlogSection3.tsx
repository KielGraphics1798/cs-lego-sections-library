import type { JSX } from "react";

/**
 * Figma: Latest News / blog grid. React + Tailwind (Vite). For **Next.js**, swap
 * `<a href>` with `next/link` and optional `next/image` for thumbnails.
 */
const IMG_P1 =
  "https://www.figma.com/api/mcp/asset/f8245df0-4d81-4b00-8907-8398edee7b11";
const IMG_P2 =
  "https://www.figma.com/api/mcp/asset/9b968fb0-3072-43b3-a8c2-f4012ff232d3";
const IMG_P3 =
  "https://www.figma.com/api/mcp/asset/1726af1d-7310-4032-8988-c62d6c3ffd99";
const IMG_ARROW_1 =
  "https://www.figma.com/api/mcp/asset/7a033f83-5340-48b3-bc06-bf7954ec5187";
const IMG_ARROW_2 =
  "https://www.figma.com/api/mcp/asset/27e9546f-70e2-45bd-b607-93703192b407";
const IMG_ARROW_3 =
  "https://www.figma.com/api/mcp/asset/839687c3-9f30-4b67-9b6c-b778a5977b55";

export interface BlogSection3Post {
  id: string;
  image: string;
  /** Shown in the black label on the image, e.g. "NEWS" or "TIPS 7 TRICK" */
  badge: string;
  title: string;
  excerpt: string;
  /** Human-readable date line */
  date: string;
  /** Optional ISO date for `<time dateTime>` */
  dateIso?: string;
  href: string;
  readMoreIcon?: string;
}

export interface BlogSection3Props {
  eyebrow?: string;
  heading?: string;
  /** One or two paragraphs; use `\\n\\n` to split, or pass `subheadingLine2` */
  subheading?: string;
  subheadingLine2?: string;
  posts?: BlogSection3Post[];
}

const defaultSub1 =
  "How we work tortor vel orci efficitur, in venenatis felis molestie. In lobortis odio augue, id vulputate erat egestas";
const defaultSub2 =
  " sed. Ut euismod ipsum ut dolor hendrerit, non ultricies urna accumsan.";

const defaultExcerpt =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis dui ante. Suspendisse mollis consectetur hendrerit. Proin luctus eros lacus, in sagittis risus porta sed.";

const defaultPosts: BlogSection3Post[] = [
  {
    id: "1",
    image: IMG_P1,
    badge: "NEWS",
    title: "Home, Buildings and Architecture",
    excerpt: defaultExcerpt,
    date: "February 15, 2022",
    dateIso: "2022-02-15",
    href: "#",
    readMoreIcon: IMG_ARROW_1,
  },
  {
    id: "2",
    image: IMG_P2,
    badge: "NEWS",
    title: "7 Decortion Idea to Bring Elegance to Your Bedroom",
    excerpt: defaultExcerpt,
    date: "February 15, 2022",
    dateIso: "2022-02-15",
    href: "#",
    readMoreIcon: IMG_ARROW_2,
  },
  {
    id: "3",
    image: IMG_P3,
    badge: "TIPS 7 TRICK",
    title: "Tips From an Interior Designer: How to Maximize Small Interior",
    excerpt: defaultExcerpt,
    date: "February 15, 2022",
    dateIso: "2022-02-15",
    href: "#",
    readMoreIcon: IMG_ARROW_3,
  },
];

export default function BlogSection3(
  rawProps: BlogSection3Props = {},
): JSX.Element {
  const {
    eyebrow = "LATEST NEWS",
    heading = "Our Blog For You",
    subheading = defaultSub1,
    subheadingLine2 = defaultSub2,
    posts = defaultPosts,
  } = rawProps;

  const subParts = subheadingLine2
    ? [subheading, subheadingLine2]
    : subheading.split("\n\n");
  const list = posts.slice(0, 3);

  return (
    <section
      className="blog-section-3 w-full bg-white font-['Inter',sans-serif] text-[#212121] antialiased"
      aria-label="Latest news and blog"
    >
      <div className="mx-auto w-full max-w-[1320px] px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        <header className="mb-10 text-center sm:mb-12 lg:mb-14">
          <span className="block font-['Montserrat',sans-serif] text-[15px] font-bold uppercase leading-normal tracking-[4.38px] text-black">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-[32px] font-bold leading-tight sm:text-[38px] lg:mt-5 lg:text-[43.813px]">
            {heading}
          </h2>
          <div className="mx-auto mt-4 max-w-[51rem] text-[14.6px] font-normal leading-[22.8px] text-[#616161] sm:mt-5">
            {subParts.length > 1 ? (
              subParts.map((line, i) => (
                <p key={i} className="mb-0 last:mb-0">
                  {line.trim()}
                </p>
              ))
            ) : (
              <p>{subheading}</p>
            )}
          </div>
        </header>

        <ul className="grid list-none grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-5">
          {list.map((post) => {
            const icon = post.readMoreIcon ?? IMG_ARROW_1;
            return (
              <li key={post.id} className="min-w-0">
                <article className="flex h-full min-h-0 flex-col">
                  <a
                    className="group relative -mb-px block aspect-[410.745/272] w-full min-h-[200px] overflow-hidden bg-[#f5f5f5] sm:min-h-[220px] lg:min-h-0"
                    href={post.href}
                  >
                    <img
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      src={post.image}
                      loading="lazy"
                    />
                    <span
                      className="absolute right-3 top-4 z-[1] bg-black px-2.5 py-0.5 text-center text-[14.6px] font-normal leading-[22.8px] text-white font-['Montserrat',sans-serif] sm:px-3 sm:py-1"
                      style={
                        post.badge.length > 5
                          ? { minWidth: "6.5rem" }
                          : { minWidth: "4.2rem" }
                      }
                    >
                      {post.badge}
                    </span>
                  </a>

                  <div className="flex min-h-0 flex-1 flex-col border-b border-l border-r border-black px-4 py-5 text-center sm:px-5 sm:py-6 lg:min-h-[300px] lg:px-4 lg:py-6">
                    <h3 className="text-lg font-semibold leading-snug sm:text-[21.906px]">
                      {post.title}
                    </h3>
                    <p className="mx-auto mt-3 line-clamp-4 max-w-[22rem] flex-1 text-[14.6px] font-normal leading-[22.8px] text-[#616161] sm:line-clamp-5">
                      {post.excerpt}
                    </p>
                    <a
                      className="mt-4 inline-flex items-center justify-center gap-1.5 self-center text-[14.6px] font-semibold text-black sm:mt-5"
                      href={post.href}
                    >
                      <span>READ MORE</span>
                      <img
                        alt=""
                        className="h-[13.7px] w-[13.7px]"
                        src={icon}
                        aria-hidden
                      />
                    </a>
                  </div>

                  <div className="border-b border-l border-r border-black px-2 py-3 text-center sm:py-3.5">
                    <time
                      className="text-[14.6px] font-normal leading-[22.8px] text-[#aaa]"
                      {...(post.dateIso ? { dateTime: post.dateIso } : {})}
                    >
                      {post.date}
                    </time>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
