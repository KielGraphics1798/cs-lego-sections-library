import type { JSX } from "react";

type TestimonialItem = {
  quote: string;
  name: string;
  showMore?: boolean;
};

export interface TestimonialsSection2Props {
  title?: string;
  testimonials?: TestimonialItem[];
}

const GOOGLE_LOGO = "/src/assets/icons/Google%20Star.png";
const GOOGLE_ICON = "/src/assets/icons/Google-Review-Symbol%206%20%282%29.png";

const defaultTestimonials: TestimonialItem[] = [
  {
    quote:
      "The team at Ferguson Builders built our home in Linksgate, Arrowtown in 2020-2021. The reason we chose Ferguson Builders to work with was their reputation for quality workmanship and attention to detail. We absolutely love our home! The team guided us through each step and made the build process enjoyable. We really enjoyed meeting the team on site, they took pride in their work and were excited to show us around our home.",
    name: "Sarah Joblin",
  },
  {
    quote:
      "Ferguson Builders built our lovely new home. We would not hesitate to recommend Rob and his team - great to work with. We particular appreciated Rob's ongoing communication - the use of the building App was invaluable to us as we were not onsite, and were still able to get daily updates and images of the house progress....",
    name: "Cara Mouat",
  },
  {
    quote:
      "We trusted Ferguson builders to build our dream family home in Jacks Point and they did not disappoint. Rob and Mel communicated through every step of the process and passed on their knowledge and experience when we needed it. They delivered our home within the price and time frame they promised. Couldn’t recommend them highly enough!",
    name: "Hope Martin",
  },
  {
    quote:
      "Rob & Mel along with their professional team made our build at Maize street Hanley Farm super easy from our first meeting with our plans to choosing our fixtures it was effortless. With a budget in mind we had the professional team at Ferguson builders build our home. It was on time and on budget, what more can you....",
    name: "Scott McGihon",
    showMore: true,
  },
  {
    quote:
      "We built our dream home with Rob from Ferguson Builders. We found Rob so easy to work with and the whole process really smooth and stress free. Rob was happy to work together to allow us to organise some of the build which we were really grateful...",
    name: "Tracey Cron",
    showMore: true,
  },
  {
    quote: "I was very impressed with the work I got to my deck. Lane was professional and skilled",
    name: "Chris Peters",
  },
];

export default function TestimonialsSection2({
  title = "What Our Clients Say About Us",
  testimonials = defaultTestimonials,
}: TestimonialsSection2Props): JSX.Element {
  const column1 = testimonials.slice(0, 2);
  const column2 = testimonials.slice(2, 4);
  const column3 = testimonials.slice(4, 6);

  return (
    <section className="testimonials-section-2">
      <style>{`
        .testimonials-section-2 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .testimonials-section-2 {
          width: 100%;
          background: #ffffff;
          font-family: "Inter", sans-serif;
          padding: 71px 20px 72px;
        }

        .testimonials-section-2 .wrap {
          max-width: 1152px;
          margin: 0 auto;
          background: #ffffff;
          padding: 64px 32px;
        }

        .testimonials-section-2 .head {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          margin-bottom: 58px;
        }

        .testimonials-section-2 .google-logo {
          width: 195px;
          height: 163px;
          object-fit: contain;
          display: block;
        }

        .testimonials-section-2 .title {
          margin-top: 0;
          color: #000b32;
          font-family: "Arimo", "Inter", sans-serif;
          font-size: 36px;
          line-height: 64px;
          font-weight: 700;
          text-align: center;
          text-transform: capitalize;
        }

        .testimonials-section-2 .masonry {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 32px;
          align-items: start;
        }

        .testimonials-section-2 .column {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .testimonials-section-2 .card {
          background: #ffffff;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 24px;
          min-height: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .testimonials-section-2 .card-stars {
          color: #f7a427;
          font-size: 18px;
          line-height: 1;
          letter-spacing: 2px;
          font-weight: 700;
        }

        .testimonials-section-2 .quote {
          margin-top: 18px;
          color: #425466;
          font-family: "Roboto", "Inter", sans-serif;
          font-style: italic;
          font-size: 16px;
          line-height: 18px;
        }

        .testimonials-section-2 .more {
          color: #0080ff;
        }

        .testimonials-section-2 .footer {
          margin-top: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .testimonials-section-2 .name {
          color: #313131;
          font-size: 16px;
          line-height: 21px;
          font-weight: 700;
        }

        .testimonials-section-2 .google-icon {
          width: 20.661px;
          height: 20.333px;
          object-fit: contain;
          display: block;
        }

        .testimonials-section-2 .card--tall {
          min-height: 361px;
        }

        .testimonials-section-2 .card--medium {
          min-height: 324px;
        }

        .testimonials-section-2 .card--high {
          min-height: 342px;
        }

        .testimonials-section-2 .card--low {
          min-height: 271px;
        }

        .testimonials-section-2 .card--top {
          min-height: 288px;
        }

        .testimonials-section-2 .card--small {
          min-height: 252px;
        }

        @media (max-width: 1180px) {
          .testimonials-section-2 .wrap {
            padding: 52px 18px;
          }

          .testimonials-section-2 .title {
            font-size: 32px;
            line-height: 1.35;
          }
        }

        @media (max-width: 980px) {
          .testimonials-section-2 {
            padding: 48px 14px 56px;
          }

          .testimonials-section-2 .masonry {
            grid-template-columns: 1fr 1fr;
            gap: 18px;
          }

          .testimonials-section-2 .google-logo {
            width: 168px;
            height: 140px;
          }

          .testimonials-section-2 .title {
            font-size: 30px;
            line-height: 1.3;
          }

          .testimonials-section-2 .column {
            gap: 18px;
          }

          .testimonials-section-2 .column-3 {
            grid-column: 1 / -1;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
          }

          .testimonials-section-2 .card {
            min-height: 0;
            padding: 18px;
          }

          .testimonials-section-2 .quote {
            margin-top: 14px;
          }
        }

        @media (max-width: 680px) {
          .testimonials-section-2 .head {
            gap: 12px;
            margin-bottom: 28px;
          }

          .testimonials-section-2 .google-logo {
            width: 132px;
            height: 110px;
          }

          .testimonials-section-2 .title {
            font-size: 24px;
            line-height: 1.25;
            margin-top: 0;
          }

          .testimonials-section-2 .masonry {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .testimonials-section-2 .column {
            gap: 14px;
          }

          .testimonials-section-2 .column-3 {
            grid-column: auto;
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .testimonials-section-2 .card {
            padding: 14px;
          }

          .testimonials-section-2 .google-icon {
            width: 17px;
            height: 17px;
          }
        }

        @media (max-width: 480px) {
          .testimonials-section-2 .wrap {
            padding: 34px 10px;
          }

          .testimonials-section-2 .google-logo {
            width: 116px;
            height: 96px;
          }

          .testimonials-section-2 .google-icon {
            width: 16px;
            height: 16px;
          }

          .testimonials-section-2 .quote {
            font-size: 15px;
            line-height: 1.25;
          }
        }
      `}</style>

      <div className="wrap">
        <div className="head">
          <img className="google-logo" src={GOOGLE_LOGO} alt="" aria-hidden="true" />
          <h2 className="title">{title}</h2>
        </div>

        <div className="masonry">
          <div className="column">
            {column1.map((item, index) => (
              <article className={`card ${index === 0 ? "card--tall" : "card--medium"}`} key={`col1-${item.name}-${index}`}>
                <p className="card-stars">★★★★★</p>
                <p className="quote">
                  {item.quote}
                  {item.showMore ? <span className="more">More</span> : null}
                </p>
                <div className="footer">
                  <p className="name">{item.name}</p>
                  <img className="google-icon" src={GOOGLE_ICON} alt="" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>

          <div className="column">
            {column2.map((item, index) => (
              <article className={`card ${index === 0 ? "card--high" : "card--low"}`} key={`col2-${item.name}-${index}`}>
                <p className="card-stars">★★★★★</p>
                <p className="quote">
                  {item.quote}
                  {item.showMore ? <span className="more">More</span> : null}
                </p>
                <div className="footer">
                  <p className="name">{item.name}</p>
                  <img className="google-icon" src={GOOGLE_ICON} alt="" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>

          <div className="column column-3">
            {column3.map((item, index) => (
              <article className={`card ${index === 0 ? "card--top" : "card--small"}`} key={`col3-${item.name}-${index}`}>
                <p className="card-stars">★★★★★</p>
                <p className="quote">
                  {item.quote}
                  {item.showMore ? <span className="more">More</span> : null}
                </p>
                <div className="footer">
                  <p className="name">{item.name}</p>
                  <img className="google-icon" src={GOOGLE_ICON} alt="" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
