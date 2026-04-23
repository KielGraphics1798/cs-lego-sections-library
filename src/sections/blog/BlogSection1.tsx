import type { JSX } from "react";

const IMG_FEATURED =
  "https://www.figma.com/api/mcp/asset/0e16c569-3332-49d7-a136-fb0669e0f3bd";
const IMG_RIGHT_A =
  "https://www.figma.com/api/mcp/asset/85fc7d36-6103-40eb-bfde-63ef756430dd";
const IMG_RIGHT_B =
  "https://www.figma.com/api/mcp/asset/ae83df97-3dbf-44bb-a3b0-7b613a4f91e5";
const IMG_CTA_ARROW =
  "https://www.figma.com/api/mcp/asset/37539920-cdf8-4e7d-a250-a0e24aa67b50";

export interface BlogSection1Post {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  href: string;
}

export interface BlogSection1Props {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  /** First item is the large left featured card; next two are the smaller cards. */
  posts?: [BlogSection1Post, BlogSection1Post, BlogSection1Post];
}

const defaultExcerpt =
  "Altevita – where decades of mastery meet modern luxury to create spaces that inspire and transform. With over 25 years of industry leadership, we take";

const defaultPosts: [BlogSection1Post, BlogSection1Post, BlogSection1Post] = [
  {
    id: "1",
    image: IMG_FEATURED,
    title: "Amplify your Style: The Art of Basement Finishing in the GTA",
    excerpt: defaultExcerpt,
    href: "#",
  },
  {
    id: "2",
    image: IMG_RIGHT_A,
    title: "Discovering Excellence with Altevita: Richmond Hill’s Best Builders",
    excerpt: defaultExcerpt,
    href: "#",
  },
  {
    id: "3",
    image: IMG_RIGHT_B,
    title: "Amplify your Style: The Art of Basement Finishing in the GTA",
    excerpt: defaultExcerpt,
    href: "#",
  },
];

export default function BlogSection1(
  rawProps: BlogSection1Props = {},
): JSX.Element {
  const {
    heading = "Get Reading: Our Blog Articles",
    subheading = "Read our latest project updates and insights from the world of architectural building.",
    ctaText = "Read More Blogs",
    ctaHref = "#",
    posts = defaultPosts,
  } = rawProps;
  const [featured, ...rest] = posts;
  const [smallA, smallB] = rest;

  return (
    <section
      className="blog-section-1 w-full bg-white font-['Inter',sans-serif] text-[#131212] antialiased"
      aria-label="Blog articles"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:px-[68px] lg:pb-20 lg:pt-16">
        <header className="mb-8 max-w-[720px] lg:mb-10">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[48px] lg:leading-[54px]">
            {heading}
          </h2>
          <p className="mt-3 text-base font-normal leading-[1.1] text-[#191919] sm:mt-4 lg:max-w-[400px] lg:leading-[17.55px]">
            {subheading}
          </p>
          <a
            className="mt-6 inline-flex h-[43px] min-w-[148px] items-center justify-center gap-2 rounded-[3.75px] border border-black bg-[#fbb040] px-5 text-[11.7px] font-bold leading-[15.6px] text-black shadow-[0px_2.25px_0.75px_0.75px_rgba(0,0,0,0.16)] transition-colors hover:bg-[#f5a62d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fbb040] sm:mt-7"
            href={ctaHref}
          >
            <span className="font-['Arimo',sans-serif] font-bold tracking-normal">{ctaText}</span>
            <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center" aria-hidden>
              <img alt="" className="h-full w-full" src={IMG_CTA_ARROW} />
            </span>
          </a>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-x-5 lg:gap-y-0">
          {/* Featured — spans ~5 columns at 1440 */}
          <article className="group relative flex min-h-[min(100vw,450px)] flex-col justify-end overflow-hidden rounded-md lg:col-span-5 lg:min-h-[450px]">
            <img
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              src={featured.image}
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-md bg-gradient-to-b from-[rgba(19,18,18,0)] via-[rgba(19,18,18,0.2)] to-[#131212] opacity-95"
              aria-hidden
            />
            <div className="relative z-[1] flex flex-col gap-3 p-5 sm:p-6 sm:pb-7 lg:pb-8 lg:pl-[29px] lg:pr-6">
              <h3 className="text-lg font-bold leading-snug text-white sm:text-[20px] sm:leading-[23.25px]">
                {featured.title}
              </h3>
              <p className="line-clamp-3 text-sm leading-relaxed text-white/95 sm:text-base sm:leading-[15.6px] lg:max-w-[28rem]">
                {featured.excerpt}
              </p>
              <a
                className="w-fit text-xs font-bold text-white underline decoration-solid underline-offset-2 sm:text-[12px] sm:leading-[23.25px] hover:text-white/90"
                href={featured.href}
              >
                Read More
              </a>
            </div>
          </article>

          {/* Two compact cards — share remaining 7 columns */}
          <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-5 lg:col-span-7 lg:grid-cols-2">
            {[smallA, smallB].map((post) => (
              <article key={post.id} className="flex min-w-0 flex-1 flex-col">
                <a
                  className="relative block aspect-[336/253] w-full overflow-hidden rounded-md sm:aspect-auto sm:min-h-[200px] sm:max-h-[280px] lg:aspect-[336/253] lg:max-h-[253px] lg:min-h-[253px]"
                  href={post.href}
                >
                  <img
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    src={post.image}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-md bg-gradient-to-b from-[rgba(19,18,18,0)] to-[#131212]/90 opacity-80"
                    aria-hidden
                  />
                </a>
                <div className="mt-3 flex min-h-0 flex-1 flex-col gap-2 sm:mt-3 lg:mt-3">
                  <h3 className="line-clamp-2 text-base font-bold leading-snug text-black sm:text-lg sm:leading-tight lg:text-[20px] lg:leading-[23.25px]">
                    {post.title}
                  </h3>
                  <p className="line-clamp-3 flex-1 text-sm leading-[15.6px] text-black sm:text-base">
                    {post.excerpt}
                  </p>
                  <a
                    className="mt-auto w-fit text-xs font-bold leading-[23.25px] text-[#fd9a00] underline decoration-solid underline-offset-2 hover:text-[#e28a00]"
                    href={post.href}
                  >
                    Read More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
