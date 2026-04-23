import type { JSX } from "react";

type WhyChooseFeature = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  iconVariant?: "image" | "shield";
};

export interface WhyChooseUsSection3Props {
  title?: string;
  description?: string;
  image?: string;
  features?: WhyChooseFeature[];
}

const HERO_IMAGE = "https://www.figma.com/api/mcp/asset/4a6c88b1-598c-4463-a423-af120cff98e7";
const FEATURE_ICON_1 = "https://www.figma.com/api/mcp/asset/2b34af74-eeb7-4db5-8823-58b5bb2394d7";
const FEATURE_ICON_2 = "https://www.figma.com/api/mcp/asset/59aa4e20-6b35-4622-a437-26a01c9a3f7c";
const FEATURE_ICON_3 = "https://www.figma.com/api/mcp/asset/bce0a362-2075-4521-add0-daee5ab8d622";

const defaultTitle = "Why homeownwers Choose Us";
const defaultDescription =
  "Founded by Kevin Smith back in 2000, Renovate has established itself as one of the greatest and prestigious providers of construction focused interior renovation services and building.";
const defaultFeatures: WhyChooseFeature[] = [
  {
    title: "Over 15 Years Experience",
    description: "We start with transparency. Our online tool provides a realistic budget range instantly",
    icon: FEATURE_ICON_1,
    iconAlt: "Years experience icon",
    iconVariant: "image",
  },
  {
    title: "Quality Craftsmanship",
    description: "We start with transparency. Our online tool provides a realistic budget range instantly",
    icon: FEATURE_ICON_2,
    iconAlt: "Craftsmanship icon",
    iconVariant: "image",
  },
  {
    title: "Professional Standards",
    description: "We start with transparency. Our online tool provides a realistic budget range instantly",
    icon: FEATURE_ICON_3,
    iconAlt: "Professional standards icon",
    iconVariant: "shield",
  },
];

export default function WhyChooseUsSection3({
  title = defaultTitle,
  description = defaultDescription,
  image = HERO_IMAGE,
  features = defaultFeatures,
}: WhyChooseUsSection3Props): JSX.Element {
  return (
    <section className="why-choose-us-section-3">
      <style>{`
        .why-choose-us-section-3 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .why-choose-us-section-3 {
          width: 100%;
          background: #ffffff;
          font-family: "Inter", sans-serif;
        }

        .why-choose-us-section-3 .container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 93px 24px 62px;
        }

        .why-choose-us-section-3 .layout {
          display: flex;
          gap: 56px;
          align-items: flex-start;
          justify-content: center;
        }

        .why-choose-us-section-3 .left {
          position: relative;
          width: 472px;
          height: 585px;
          flex: 0 0 472px;
        }

        .why-choose-us-section-3 .left img.hero {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .why-choose-us-section-3 .experience {
          position: absolute;
          left: 356px;
          top: 468px;
          width: 154px;
          height: 148px;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: left;
          padding-left: 18px;
        }

        .why-choose-us-section-3 .experience-number {
          font-family: "Syne", sans-serif;
          color: #ffb717;
          font-size: 52.923px;
          font-weight: 700;
          line-height: 17.641px;
          margin-bottom: 4px;
        }

        .why-choose-us-section-3 .experience-text {
          font-family: "Syne", sans-serif;
          color: #ffb717;
          font-size: 22.051px;
          font-weight: 700;
          line-height: 17.641px;
        }

        .why-choose-us-section-3 .right {
          width: 589px;
          flex: 0 1 589px;
        }

        .why-choose-us-section-3 .divider-top {
          width: 80px;
          height: 3px;
          background: #f4bc16;
          margin-bottom: 24px;
        }

        .why-choose-us-section-3 .title {
          max-width: 445px;
          color: #000000;
          font-size: 48px;
          font-weight: 700;
          line-height: 54px;
          letter-spacing: -2px;
          margin-bottom: 24px;
          text-transform: capitalize;
        }

        .why-choose-us-section-3 .description {
          color: #444444;
          font-size: 16px;
          line-height: 26px;
          letter-spacing: -0.16px;
          margin-bottom: 32px;
        }

        .why-choose-us-section-3 .feature-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .why-choose-us-section-3 .feature {
          width: 494px;
          min-height: 136px;
          border: 0.35px solid #626262;
          border-radius: 10px;
          background: transparent;
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 19px 21px 20px 37px;
        }

        .why-choose-us-section-3 .feature-icon {
          width: 76px;
          height: 76px;
          flex: 0 0 76px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .why-choose-us-section-3 .feature-icon.image img {
          width: 100%;
          height: 100%;
          display: block;
        }

        .why-choose-us-section-3 .feature-icon.shield {
          border: 0.544px solid #e2e6e7;
          border-radius: 38px;
        }

        .why-choose-us-section-3 .feature-icon.shield img {
          width: 37.02px;
          height: 37.02px;
          display: block;
        }

        .why-choose-us-section-3 .feature-title {
          color: #2b2b2b;
          font-size: 24px;
          font-weight: 700;
          line-height: 30px;
          letter-spacing: -2px;
          text-transform: capitalize;
          margin-bottom: 6px;
        }

        .why-choose-us-section-3 .feature-description {
          color: #2b2b2b;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: -0.36px;
          max-width: 320px;
        }

        @media (max-width: 1200px) {
          .why-choose-us-section-3 .layout {
            gap: 36px;
          }

          .why-choose-us-section-3 .left {
            width: 410px;
            height: 508px;
            flex-basis: 410px;
          }

          .why-choose-us-section-3 .experience {
            left: 286px;
            top: 394px;
          }

          .why-choose-us-section-3 .right {
            width: 520px;
            flex-basis: 520px;
          }

          .why-choose-us-section-3 .feature {
            width: 100%;
          }
        }

        @media (max-width: 992px) {
          .why-choose-us-section-3 .container {
            padding: 56px 20px;
          }

          .why-choose-us-section-3 .layout {
            flex-direction: column;
            align-items: center;
          }

          .why-choose-us-section-3 .left {
            width: min(472px, 100%);
            height: auto;
            aspect-ratio: 472 / 585;
            flex: none;
          }

          .why-choose-us-section-3 .experience {
            left: auto;
            right: 0;
            top: auto;
            bottom: 0;
          }

          .why-choose-us-section-3 .right {
            width: 100%;
            max-width: 589px;
          }
        }

        @media (max-width: 767px) {
          .why-choose-us-section-3 .container {
            padding: 44px 16px;
            padding-left: 20px;
          }

          .why-choose-us-section-3 .title {
            font-size: 36px;
            line-height: 42px;
            letter-spacing: -1.4px;
          }

          .why-choose-us-section-3 .description {
            font-size: 15px;
            line-height: 24px;
          }

          .why-choose-us-section-3 .feature {
            padding: 14px;
            gap: 14px;
          }

          .why-choose-us-section-3 .feature-title {
            font-size: 22px;
            line-height: 28px;
            letter-spacing: -1px;
          }

          .why-choose-us-section-3 .feature-description {
            font-size: 15px;
            line-height: 18px;
          }
        }
      `}</style>

      <div className="container">
        <div className="layout">
          <div className="left">
            <img className="hero" src={image} alt="Why choose us" />
            <div className="experience">
              <div>
                <div className="experience-number">28</div>
                <div className="experience-text">Years of Experience</div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="divider-top" />
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>

            <div className="feature-list">
              {features.map((feature) => (
                <article className="feature" key={feature.title}>
                  <div className={`feature-icon ${feature.iconVariant === "shield" ? "shield" : "image"}`}>
                    <img src={feature.icon} alt={feature.iconAlt} />
                  </div>
                  <div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
