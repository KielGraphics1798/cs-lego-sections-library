import type { JSX } from "react";

export interface AboutSection1Props {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  image?: string;
}

const DEFAULT_IMAGE =
  "https://www.figma.com/api/mcp/asset/5b563956-4bf8-45a3-8ace-57e7d368cb99";
const DEFAULT_IMAGE_BACK =
  "https://www.figma.com/api/mcp/asset/87e7773e-6531-4d03-995c-1b8213bcb47d";
const DEFAULT_SIGNATURE =
  "https://www.figma.com/api/mcp/asset/640f95df-0daa-42fd-ad43-e035223a7b5c";

const defaultSubtitle = "About Us";
const defaultHeroDescription =
  "When you work with us, you are not just hiring a luxury home builder in Toronto; you are gaining a partner who understands custom residential building from the first sketch to the final coat of paint.\nWe bridge the gap that other companies create. As a unified design build firm in Toronto, we ensure that your aesthetic vision is technically feasible and financially realistic from day one. You get premium craftsmanship without the friction of managing separate teams.";
const defaultTitle = "A Trusted Home Builder in Toronto";
const defaultDescription =
  "Hi, I'm Kash. I founded Altevita because I saw a fundamental flaw in how homes are built. Too often, homeowners are caught in a tug-of-war between a designer's vision and a contractor's reality. This disconnect leads to delays, budget overruns, and compromised designs.\n\nI believe you deserve better. I am a licensed architect and a builder with 28 years of experience. This means I view your project through two lenses: creative potential and constructability.\n\nIf you're looking for someone you can trust with your project from plans through to completion, reach out and book a FREE Consultation so we can get to know you and your project. CONTACT US to get started.";
const defaultCtaText = "Read More About Us";

function renderParagraphs(text: string): JSX.Element[] {
  return text.split("\n\n").map((paragraph, index) => {
    const parts = paragraph.split("CONTACT US");
    if (parts.length === 1) {
      return <p key={`${paragraph}-${index}`}>{paragraph}</p>;
    }
    return (
      <p key={`${paragraph}-${index}`}>
        {parts[0]}
        <strong>CONTACT US</strong>
        {parts.slice(1).join("CONTACT US")}
      </p>
    );
  });
}

export default function AboutSection1({
  title = defaultTitle,
  subtitle = defaultSubtitle,
  description = defaultDescription,
  ctaText = defaultCtaText,
  image = DEFAULT_IMAGE,
}: AboutSection1Props): JSX.Element {
  const heroLines = defaultHeroDescription.split("\n");

  return (
    <section className="about-section-1">
      <style>{`
        .about-section-1 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .about-section-1 {
          font-family: "Inter", sans-serif;
          background-color: #ffffff;
          color: #363636;
          overflow-x: hidden;
        }

        .about-section-1 .container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding: 40px 20px;
        }

        .about-section-1 .hero-section {
          position: relative;
          max-width: 1440px;
          margin: 0 auto;
          padding: 84px 0 0;
        }

        .about-section-1 .hero-content {
          text-align: center;
          max-width: 715px;
          margin: 0 auto 100px;
        }

        .about-section-1 .hero-title {
          font-weight: 700;
          font-size: 48px;
          line-height: 38px;
          color: #131212;
          margin-bottom: 16px;
        }

        .about-section-1 .hero-description {
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: -0.36px;
          color: #363636;
        }

        .about-section-1 .images-section {
          position: relative;
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 60px;
          align-items: flex-start;
        }

        .about-section-1 .images-container {
          position: relative;
          width: 796px;
          height: 481px;
          flex-shrink: 0;
        }

        .about-section-1 .image-back {
          position: absolute;
          left: 0;
          top: 82px;
          width: 764px;
          height: 399px;
          opacity: 0.23;
          overflow: hidden;
        }

        .about-section-1 .image-back img {
          width: 100%;
          height: 145%;
          object-fit: cover;
          object-position: top;
        }

        .about-section-1 .image-front {
          position: absolute;
          left: 231px;
          top: 0;
          width: 565px;
          height: 428px;
          overflow: hidden;
        }

        .about-section-1 .image-front img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-section-1 .content-section {
          flex: 1;
          min-width: 320px;
          max-width: 535px;
        }

        .about-section-1 .content-title {
          font-weight: 700;
          font-size: 48px;
          line-height: 45px;
          letter-spacing: -2px;
          color: #131212;
          text-transform: capitalize;
          margin-bottom: 28px;
        }

        .about-section-1 .content-description {
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: -0.36px;
          color: #363636;
          margin-bottom: 28px;
        }

        .about-section-1 .content-description p {
          margin-bottom: 18px;
        }

        .about-section-1 .cta-section {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .about-section-1 .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #ffb717;
          color: #000000;
          font-family: "Arimo", sans-serif;
          font-weight: 700;
          font-size: 12.564px;
          line-height: 16.752px;
          letter-spacing: -0.2577px;
          text-decoration: none;
          padding: 16px 20px;
          border-radius: 4px;
          box-shadow: 0px 2.416px 0.805px 0.805px rgba(0, 0, 0, 0.16);
          transition: background-color 0.3s ease;
          width: 176px;
          height: 49px;
          border: none;
          cursor: pointer;
        }

        .about-section-1 .signature {
          width: 214.995px;
          height: 41px;
        }

        .about-section-1 .signature img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 1400px) {
          .about-section-1 .images-section {
            padding: 0 40px;
          }
        }

        @media (max-width: 1200px) {
          .about-section-1 .hero-title {
            font-size: 40px;
            line-height: 32px;
          }

          .about-section-1 .content-title {
            font-size: 40px;
            line-height: 38px;
          }

          .about-section-1 .images-container {
            width: 600px;
            height: 360px;
          }

          .about-section-1 .image-back {
            width: 574px;
            height: 299px;
            top: 62px;
          }

          .about-section-1 .image-front {
            width: 425px;
            height: 320px;
            left: 175px;
          }
        }

        @media (max-width: 992px) {
          .about-section-1 .images-section {
            flex-direction: column;
            align-items: center;
            padding: 0;
          }

          .about-section-1 .images-container {
            width: 100%;
            max-width: 600px;
            height: 360px;
            margin: 0 auto;
          }

          .about-section-1 .content-section {
            max-width: 100%;
            padding: 0 20px;
            text-align: center;
            margin: 0 auto;
          }

          .about-section-1 .content-description {
            text-align: center;
          }

          .about-section-1 .cta-section {
            justify-content: center;
          }

          .about-section-1 .image-back {
            width: 90%;
            left: 0;
          }

          .about-section-1 .image-front {
            width: 70%;
            left: 25%;
          }
        }

        @media (max-width: 768px) {
          .about-section-1 .container {
            padding: 20px 16px;
          }

          .about-section-1 .hero-section {
            padding: 40px 0 0;
          }

          .about-section-1 .hero-content {
            margin-bottom: 60px;
          }

          .about-section-1 .hero-title {
            font-size: 32px;
            line-height: 28px;
            margin-bottom: 12px;
          }

          .about-section-1 .hero-description {
            font-size: 14px;
            line-height: 16px;
          }

          .about-section-1 .content-title {
            font-size: 32px;
            line-height: 30px;
            margin-bottom: 20px;
          }

          .about-section-1 .content-description {
            font-size: 14px;
            line-height: 16px;
            margin-bottom: 20px;
          }

          .about-section-1 .images-container {
            height: 280px;
          }

          .about-section-1 .image-back {
            height: 230px;
            top: 50px;
          }

          .about-section-1 .image-front {
            height: 250px;
          }

          .about-section-1 .content-section {
            padding: 0 20px;
          }
        }

        @media (max-width: 480px) {
          .about-section-1 .hero-title {
            font-size: 28px;
            line-height: 26px;
          }

          .about-section-1 .content-title {
            font-size: 28px;
            line-height: 26px;
          }

          .about-section-1 .images-container {
            height: 220px;
          }

          .about-section-1 .image-back {
            height: 180px;
            top: 40px;
          }

          .about-section-1 .image-front {
            height: 200px;
          }

          .about-section-1 .cta-button {
            width: 100%;
            max-width: 200px;
          }

          .about-section-1 .signature {
            width: 180px;
            height: 34px;
          }
        }
      `}</style>
      <div className="container">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">{subtitle}</h1>
            <p className="hero-description">
              {heroLines.map((line, index) => (
                <span key={`${line}-${index}`}>
                  {line}
                  {index < heroLines.length - 1 ? (
                    <>
                      <br />
                      <br />
                    </>
                  ) : null}
                </span>
              ))}
            </p>
          </div>
        </section>

        <section className="images-section">
          <div className="images-container">
            <div className="image-back">
              <img src={DEFAULT_IMAGE_BACK} alt="Luxury home interior" />
            </div>
            <div className="image-front">
              <img src={image} alt="Modern home design" />
            </div>
          </div>

          <div className="content-section">
            <h2 className="content-title">{title}</h2>
            <div className="content-description">{renderParagraphs(description)}</div>

            <div className="cta-section">
              <button className="cta-button" type="button">
                {ctaText}
              </button>
              <div className="signature">
                <img src={DEFAULT_SIGNATURE} alt="Signature" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
