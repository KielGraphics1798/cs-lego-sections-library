import type { JSX } from "react";

type TestimonialItem = {
  initials: string;
  quote: string;
  name: string;
};

export interface TestimonialsSection1Props {
  title?: string;
  description?: string;
  testimonials?: TestimonialItem[];
}

const GOOGLE_REVIEW_ICON = "/src/assets/icons/Google%20Review%20Star.svg";
const CARD_LINE = "https://www.figma.com/api/mcp/asset/ae842751-5b28-4b59-8eeb-c13482603e05";
const BADGE_BG = "https://www.figma.com/api/mcp/asset/b6b73c0a-43d2-4621-9910-5c730660f51e";

const defaultTestimonials: TestimonialItem[] = [
  {
    initials: "TC",
    quote:
      "We built our dream home with Rob from Ferguson Builders. We found Rob so easy to work with and the whole process really smooth and stress free. Rob was happy to work together to allow us to organise some of the build which we were really grateful...",
    name: "Tracey Cron",
  },
  {
    initials: "NC",
    quote:
      "We built our dream home with Rob from Ferguson Builders. We found Rob so easy to work with and the whole process really smooth and stress free. Rob was happy to work together to allow us to organise some of the build which we were really grateful...",
    name: "Tracey Cron",
  },
  {
    initials: "JK",
    quote:
      "We built our dream home with Rob from Ferguson Builders. We found Rob so easy to work with and the whole process really smooth and stress free. Rob was happy to work together to allow us to organise some of the build which we were really grateful...",
    name: "Tracey Cron",
  },
];

export default function TestimonialsSection1({
  title = "WHAT OTHER HAPPY CLIENTS ARE SAYING.",
  description = "Bendigo home and business owners love working with our team because of our detail-oriented solutions and intentional customer care.",
  testimonials = defaultTestimonials,
}: TestimonialsSection1Props): JSX.Element {
  return (
    <section className="testimonials-section-1">
      <style>{`
        .testimonials-section-1 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .testimonials-section-1 {
          width: 100%;
          background: #f6f6f6;
          font-family: "Inter", sans-serif;
          padding: 96px 20px 64px;
        }

        .testimonials-section-1 .container {
          max-width: 1286px;
          margin: 0 auto;
        }

        .testimonials-section-1 .heading-wrap {
          text-align: center;
          margin: 0 auto 86px;
          max-width: 1036px;
        }

        .testimonials-section-1 .title {
          color: #1a1a1a;
          font-size: 48px;
          line-height: 1.1;
          letter-spacing: -0.96px;
          font-weight: 300;
          text-transform: uppercase;
        }

        .testimonials-section-1 .description {
          margin: 28px auto 0;
          max-width: 616px;
          color: #424242;
          font-size: 16px;
          line-height: 1.375;
          letter-spacing: -0.32px;
          font-weight: 400;
        }

        .testimonials-section-1 .cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 32px;
        }

        .testimonials-section-1 .card {
          position: relative;
          background: #f6f6f6;
          box-shadow: 0 11.611px 17.416px rgba(0, 0, 0, 0.1), 0 4.644px 6.966px rgba(0, 0, 0, 0.1);
          min-height: 327px;
          padding: 56px 28px 24px;
        }

        .testimonials-section-1 .badge {
          position: absolute;
          left: 17px;
          top: -42px;
          width: 71px;
          height: 71px;
        }

        .testimonials-section-1 .badge-bg {
          width: 71px;
          height: 71px;
          display: block;
        }

        .testimonials-section-1 .badge-initials {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 24.546px;
          line-height: 1;
          font-weight: 600;
        }

        .testimonials-section-1 .quote {
          color: #425466;
          font-family: "Roboto", "Inter", sans-serif;
          font-style: italic;
          font-size: 18.577px;
          line-height: 20.899px;
        }

        .testimonials-section-1 .name {
          margin-top: 30px;
          color: #313131;
          font-size: 30px;
          line-height: 1.5;
          font-weight: 600;
        }

        .testimonials-section-1 .rating-row {
          margin-top: 4px;
          display: flex;
          align-items: center;
        }

        .testimonials-section-1 .review-icon {
          width: 79px;
          height: 12px;
          display: block;
          object-fit: contain;
        }

        .testimonials-section-1 .card-line {
          position: absolute;
          right: 0;
          bottom: 65px;
          width: 66px;
          height: 3px;
          object-fit: cover;
        }

        @media (max-width: 1200px) {
          .testimonials-section-1 {
            padding: 80px 20px 58px;
          }

          .testimonials-section-1 .heading-wrap {
            margin-bottom: 74px;
          }

          .testimonials-section-1 .title {
            font-size: 40px;
            letter-spacing: -0.8px;
          }

          .testimonials-section-1 .cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 860px) {
          .testimonials-section-1 {
            padding: 64px 14px 44px;
          }

          .testimonials-section-1 .heading-wrap {
            margin-bottom: 58px;
          }

          .testimonials-section-1 .title {
            font-size: 32px;
            line-height: 1.15;
            letter-spacing: -0.4px;
          }

          .testimonials-section-1 .description {
            margin-top: 18px;
            font-size: 15px;
          }

          .testimonials-section-1 .cards {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .testimonials-section-1 .card {
            min-height: 0;
            margin-bottom: 10px;
          }

          .testimonials-section-1 .quote {
            font-size: 17px;
            line-height: 1.36;
          }

          .testimonials-section-1 .name {
            font-size: 28px;
          }

          .testimonials-section-1 .review-icon {
            width: 72px;
            height: 11px;
          }
        }

        @media (max-width: 560px) {
          .testimonials-section-1 .review-icon {
            width: 68px;
            height: 10px;
          }
        }
      `}</style>

      <div className="container">
        <div className="heading-wrap">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
        </div>

        <div className="cards">
          {testimonials.map((item, index) => (
            <article className="card" key={`${item.initials}-${index}`}>
              <div className="badge">
                <img className="badge-bg" src={BADGE_BG} alt="" aria-hidden="true" />
                <span className="badge-initials">{item.initials}</span>
              </div>

              <p className="quote">{item.quote}</p>

              <p className="name">{item.name}</p>

              <div className="rating-row">
                <img className="review-icon" src={GOOGLE_REVIEW_ICON} alt="" aria-hidden="true" />
              </div>

              <img className="card-line" src={CARD_LINE} alt="" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
