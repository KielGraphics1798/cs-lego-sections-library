import { useEffect, useMemo, useState, type JSX } from "react";

type TestimonialItem = {
  quote: string;
  name: string;
};

export interface TestimonialsSection3Props {
  title?: string;
  description?: string;
  testimonials?: TestimonialItem[];
}

const GOOGLE_REVIEW_ICON = "/src/assets/icons/Google%20Review%20Star.svg";

const baseTestimonial: TestimonialItem = {
  quote:
    "We built our dream home with Rob from Ferguson Builders. We found Rob so easy to work with and the whole process really smooth and stress free. Rob was happy to work together to allow us to organise some of the build which we were really grateful...",
  name: "Tracey Cron",
};

const defaultTestimonials: TestimonialItem[] = [
  baseTestimonial,
  baseTestimonial,
  baseTestimonial,
  baseTestimonial,
  baseTestimonial,
  baseTestimonial,
  baseTestimonial,
  baseTestimonial,
];

export default function TestimonialsSection3({
  title = "What Other Happy Clients Are Saying.",
  description = "Bendigo home and business owners love working with our team because of our detail-oriented solutions and intentional customer care.",
  testimonials = defaultTestimonials,
}: TestimonialsSection3Props): JSX.Element {
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const [displayIndex, setDisplayIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);

  useEffect(() => {
    const updateCardsPerSlide = (): void => {
      if (window.innerWidth <= 560) {
        setCardsPerSlide(1);
        return;
      }

      if (window.innerWidth <= 980) {
        setCardsPerSlide(2);
        return;
      }

      setCardsPerSlide(3);
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const slides = useMemo(() => {
    const result: TestimonialItem[][] = [];
    for (let index = 0; index < testimonials.length; index += cardsPerSlide) {
      result.push(testimonials.slice(index, index + cardsPerSlide));
    }
    return result;
  }, [cardsPerSlide, testimonials]);

  const hasLoop = slides.length > 1;
  const renderedSlides = useMemo(() => {
    if (!hasLoop) {
      return slides;
    }

    return [slides[slides.length - 1], ...slides, slides[0]];
  }, [hasLoop, slides]);

  useEffect(() => {
    if (slides.length === 0) {
      setDisplayIndex(0);
      return;
    }

    setWithTransition(false);
    setDisplayIndex(hasLoop ? 1 : 0);
    window.requestAnimationFrame(() => setWithTransition(true));
  }, [cardsPerSlide, hasLoop, slides.length]);

  useEffect(() => {
    if (!hasLoop) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setDisplayIndex((current) => current + 1);
    }, 10000);

    return () => window.clearInterval(intervalId);
  }, [hasLoop]);

  return (
    <section className="testimonials-section-3">
      <style>{`
        .testimonials-section-3 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .testimonials-section-3 {
          width: 100%;
          background: #f0f0f0;
          font-family: "Inter", sans-serif;
          padding: 62px 0 70px;
        }

        .testimonials-section-3 .head {
          max-width: 922px;
          margin: 0 auto;
          text-align: center;
          padding: 0 20px;
        }

        .testimonials-section-3 .title {
          color: #000000;
          font-size: 55px;
          line-height: 1.1;
          letter-spacing: -0.96px;
          font-weight: 700;
          text-transform: capitalize;
        }

        .testimonials-section-3 .description {
          margin-top: 22px;
          color: #424242;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: -0.32px;
          font-weight: 400;
          max-width: 616px;
          margin-left: auto;
          margin-right: auto;
        }

        .testimonials-section-3 .slider {
          margin-top: 72px;
          padding: 0 102px;
        }

        .testimonials-section-3 .slider-window {
          overflow: hidden;
          width: 100%;
        }

        .testimonials-section-3 .slider-track {
          display: flex;
          width: 100%;
        }

        .testimonials-section-3 .slide {
          min-width: 100%;
          display: grid;
          gap: 24px;
          align-items: stretch;
        }

        .testimonials-section-3 .slide.three {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .testimonials-section-3 .slide.two {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .testimonials-section-3 .slide.one {
          grid-template-columns: 1fr;
        }

        .testimonials-section-3 .card {
          min-height: 327px;
          background: #f6f6f6;
          box-shadow: 0 11.611px 17.416px rgba(0, 0, 0, 0.1), 0 4.644px 6.966px rgba(0, 0, 0, 0.1);
          padding: 60px 28px 34px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .testimonials-section-3 .quote {
          color: #425466;
          font-family: "Roboto", "Inter", sans-serif;
          font-size: 18.577px;
          line-height: 20.899px;
          font-style: italic;
        }

        .testimonials-section-3 .footer {
          margin-top: 18px;
        }

        .testimonials-section-3 .name {
          color: #313131;
          font-size: 30px;
          line-height: 1.5;
          font-weight: 600;
        }

        .testimonials-section-3 .review {
          margin-top: 2px;
          width: 79px;
          height: 12px;
          object-fit: contain;
          display: block;
        }

        @media (max-width: 1200px) {
          .testimonials-section-3 .title {
            font-size: 44px;
          }

          .testimonials-section-3 .slider {
            padding: 0 32px;
          }
        }

        @media (max-width: 860px) {
          .testimonials-section-3 {
            padding: 52px 0 56px;
          }

          .testimonials-section-3 .title {
            font-size: 34px;
            line-height: 1.15;
          }

          .testimonials-section-3 .description {
            font-size: 15px;
            line-height: 21px;
          }

          .testimonials-section-3 .slider {
            margin-top: 48px;
            padding: 0 14px;
          }

          .testimonials-section-3 .card {
            min-height: 302px;
            padding: 42px 20px 24px;
          }

          .testimonials-section-3 .quote {
            font-size: 17px;
            line-height: 1.32;
          }

          .testimonials-section-3 .name {
            font-size: 28px;
          }
        }

        @media (max-width: 560px) {
          .testimonials-section-3 .title {
            font-size: 29px;
          }

          .testimonials-section-3 .slide {
            gap: 14px;
          }

          .testimonials-section-3 .card {
            min-height: 286px;
            padding: 36px 16px 18px;
          }

          .testimonials-section-3 .name {
            font-size: 25px;
          }

          .testimonials-section-3 .review {
            width: 73px;
            height: 11px;
          }
        }
      `}</style>

      <div className="head">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>

      <div className="slider">
        <div className="slider-window">
          <div
            className="slider-track"
            onTransitionEnd={() => {
              if (!hasLoop) {
                return;
              }

              if (displayIndex === 0) {
                setWithTransition(false);
                setDisplayIndex(slides.length);
                window.requestAnimationFrame(() => setWithTransition(true));
                return;
              }

              if (displayIndex === slides.length + 1) {
                setWithTransition(false);
                setDisplayIndex(1);
                window.requestAnimationFrame(() => setWithTransition(true));
              }
            }}
            style={{
              transform: `translateX(-${displayIndex * 100}%)`,
              transition: withTransition ? "transform 1.2s ease-in-out" : "none",
            }}
          >
            {renderedSlides.map((slideItems, slideIndex) => (
              <div
                className={`slide ${cardsPerSlide === 1 ? "one" : cardsPerSlide === 2 ? "two" : "three"}`}
                key={`slide-${slideIndex}`}
              >
                {slideItems.map((item, index) => (
                  <article className="card" key={`${item.name}-${slideIndex}-${index}`}>
                    <p className="quote">{item.quote}</p>
                    <div className="footer">
                      <p className="name">{item.name}</p>
                      <img className="review" src={GOOGLE_REVIEW_ICON} alt="" aria-hidden="true" />
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
