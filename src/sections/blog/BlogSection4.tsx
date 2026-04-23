import type { JSX } from "react";

/**
 * Figma: two-column “Our Blogs” header + 2 large image cards. React + Tailwind.
 * In **Next.js**, use `next/link` and `next/image` for production routes/optimization.
 */
const IMG_LEFT =
  "https://www.figma.com/api/mcp/asset/0f76bbf1-e259-478c-b44f-91ed5db63d29";
const IMG_RIGHT =
  "https://www.figma.com/api/mcp/asset/4cf4a46c-5ebd-4799-ba84-308050578bf7";
const IMG_CTA_ARROW =
  "https://www.figma.com/api/mcp/asset/4706bc6a-d55e-4b65-ab16-4af154e507be";

export interface BlogSection4Post {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  href: string;
}

export interface BlogSection4Props {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  /** Featured row: exactly two large cards. */
  posts?: [BlogSection4Post, BlogSection4Post];
}

const defaultPosts: [BlogSection4Post, BlogSection4Post] = [
  {
    id: "1",
    image: IMG_LEFT,
    title: "Amplify your Style: The Art of Basement Finishing in the GTA",
    excerpt:
      "Altevita – where decades of mastery meet modern luxury to create spaces that inspire and transform. With over 25 years of industry leadership, we take",
    href: "#",
  },
  {
    id: "2",
    image: IMG_RIGHT,
    title: "Discovering Excellence with Altevita: Richmond Hill’s Best Builders",
    excerpt:
      "Welcome to Altevita, where decades of experience and a passion for innovation converge to create the homes of your dreams. As a leader in the",
    href: "#",
  },
];

export default function BlogSection4(
  rawProps: BlogSection4Props = {},
): JSX.Element {
  const {
    heading = "Our Blogs",
    subheading = "Read our latest project updates and insights from the world of architectural building.",
    ctaText = "Read More Blogs",
    ctaHref = "#",
    posts = defaultPosts,
  } = rawProps;

  return (
    <section
      className="blog-section-4 w-full bg-white font-['Inter',sans-serif] text-[#131212] antialiased"
      aria-label="Our blogs"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-6 sm:py-12 lg:px-[105px] lg:py-14">
        <div className="mb-8 flex flex-col gap-5 lg:mb-10 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[48px] lg:leading-[54px]">
              {heading}
            </h2>
            <p className="mt-3 text-base font-normal leading-relaxed text-[#191919] sm:mt-4 lg:max-w-[22rem] lg:leading-[17.55px]">
              {subheading}
            </p>
          </div>
          <a
            className="group/cta inline-flex h-[43px] min-w-[148px] shrink-0 items-center justify-center gap-2 self-start rounded-[3.75px] border border-black bg-white px-4 text-[11.7px] font-bold leading-[15.6px] text-black shadow-[0px_2.25px_0.75px_0.75px_rgba(0,0,0,0.16)] transition-colors font-['Arimo',sans-serif] hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:mt-1"
            href={ctaHref}
          >
            <span className="tracking-normal">{ctaText}</span>
            <span
              className="flex h-3.5 w-3.5 shrink-0 items-center justify-center group-hover/cta:invert"
              aria-hidden
            >
              <img alt="" className="h-full w-full" src={IMG_CTA_ARROW} />
            </span>
          </a>
        </div>

        <ul className="grid list-none grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-5">
          {posts.map((post) => (
            <li key={post.id} className="min-w-0">
              <a
                className="group relative -mx-0 block min-h-[min(100vw,360px)] overflow-hidden rounded-md sm:min-h-[400px] lg:min-h-[450px] lg:rounded-[6px]"
                href={post.href}
              >
                <img
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  src={post.image}
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 rounded-[6px] bg-gradient-to-b from-[rgba(19,18,18,0)] via-[rgba(19,18,18,0.1)] to-[#131212] opacity-90"
                  aria-hidden
                />
                <div className="relative z-[1] flex h-full min-h-[min(100vw,360px)] flex-col justify-end p-5 sm:min-h-[400px] sm:p-6 lg:min-h-[450px] lg:pl-[29px] lg:pr-6 lg:pb-8">
                  <h3 className="text-lg font-bold leading-snug text-white sm:text-[20px] sm:leading-[23.25px]">
                    {post.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-[1.45] text-white/95 sm:mt-3 sm:max-w-[28rem] sm:text-base sm:leading-[15.6px] font-['Arimo',sans-serif]">
                    {post.excerpt}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
