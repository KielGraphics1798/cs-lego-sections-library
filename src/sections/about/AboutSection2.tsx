import type { JSX } from "react";

export interface AboutSection2Props {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  image?: string;
}

const DEFAULT_IMAGE =
  "https://www.figma.com/api/mcp/asset/4bcb1d95-0f7b-4d1d-b2d9-e3e4ed8492e1";

const defaultSubtitle = "About Us";
const defaultTitle = "A Trusted Home Builder in Toronto";
const defaultDescription =
  "Hi, I'm Kash. I founded Altevita because I saw a fundamental flaw in how homes are built. Too often, homeowners are caught in a tug-of-war between a designer's vision and a contractor's reality. This disconnect leads to delays, budget overruns, and compromised designs.\n\nI believe you deserve better. I am a licensed architect and a builder with 28 years of experience. This means I view your project through two lenses: creative potential and constructability. When you work with us, you are not just hiring a luxury home builder in Toronto; you are gaining a partner who understands custom residential building from the first sketch to the final coat of paint.";
const defaultCtaText = "Read More About Us";

export default function AboutSection2({
  title = defaultTitle,
  subtitle = defaultSubtitle,
  description = defaultDescription,
  ctaText = defaultCtaText,
  image = DEFAULT_IMAGE,
}: AboutSection2Props): JSX.Element {
  return (
    <section className="about-section-2">
      <style>{`
        .about-section-2 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .about-section-2 {
          font-family: "Inter", sans-serif;
          background-color: #ffffff;
          color: #363636;
          overflow-x: hidden;
        }

        .about-section-2 .section-container {
          position: relative;
          width: 100%;
          min-height: 730px;
          max-width: 1440px;
          margin: 0 auto;
          overflow: hidden;
        }

        .about-section-2 .section-content {
          position: relative;
          display: flex;
          gap: 80px;
          padding: 95px 120px;
          align-items: center;
        }

        .about-section-2 .image-section {
          position: relative;
          flex: 0 0 505px;
          height: 505px;
        }

        .about-section-2 .circular-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
        }

        .about-section-2 .circular-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-section-2 .experience-badge {
          position: absolute;
          bottom: 0;
          right: 0;
          background-color: #000000;
          padding: 25px 18px;
          width: 161px;
          text-align: center;
          z-index: 2;
        }

        .about-section-2 .badge-number {
          font-family: "Syne", sans-serif;
          font-weight: 700;
          font-size: 52.923px;
          line-height: 17.641px;
          color: #ffb717;
          margin-bottom: 8px;
        }

        .about-section-2 .badge-text {
          font-family: "Syne", sans-serif;
          font-weight: 700;
          font-size: 22.051px;
          line-height: 17.641px;
          color: #ffb717;
        }

        .about-section-2 .content-section {
          flex: 1;
          max-width: 536px;
        }

        .about-section-2 .label {
          font-weight: 700;
          font-size: 16px;
          line-height: 38px;
          color: #131212;
          margin-bottom: 18px;
        }

        .about-section-2 .main-title {
          font-weight: 700;
          font-size: 48px;
          line-height: 45px;
          letter-spacing: -2px;
          color: #131212;
          text-transform: capitalize;
          margin-bottom: 18px;
          max-width: 413px;
        }

        .about-section-2 .description {
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: -0.36px;
          color: #363636;
          margin-bottom: 18px;
        }

        .about-section-2 .features-list {
          display: flex;
          flex-direction: column;
          gap: 17px;
          margin-bottom: 18px;
        }

        .about-section-2 .feature-item {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .about-section-2 .feature-icon {
          width: 43px;
          height: 43px;
          border: 1.87px solid #fdbc61;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #fdbc61;
        }

        .about-section-2 .feature-icon svg {
          width: 20px;
          height: 20px;
          stroke: currentColor;
        }

        .about-section-2 .feature-text {
          font-weight: 700;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: -0.36px;
          color: #363636;
        }

        .about-section-2 .cta-button {
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
          padding: 13px 20px;
          border-radius: 4px;
          box-shadow: 0px 2.416px 0.805px 0.805px rgba(0, 0, 0, 0.16);
          transition: background-color 0.3s ease;
          width: 176px;
          height: 42px;
          border: none;
          cursor: pointer;
        }

        .about-section-2 .cta-button:hover {
          background-color: #e6a615;
        }

        @media (max-width: 1200px) {
          .about-section-2 .section-content {
            padding: 60px 40px;
            gap: 60px;
          }

          .about-section-2 .image-section {
            flex: 0 0 420px;
            height: 420px;
          }

          .about-section-2 .experience-badge {
            width: 140px;
            padding: 20px 15px;
          }

          .about-section-2 .badge-number {
            font-size: 44px;
          }

          .about-section-2 .badge-text {
            font-size: 18px;
          }

          .about-section-2 .main-title {
            font-size: 40px;
            line-height: 38px;
          }
        }

        @media (max-width: 992px) {
          .about-section-2 .section-content {
            flex-direction: column;
            align-items: center;
            padding: 50px 20px;
            gap: 40px;
          }

          .about-section-2 .image-section {
            flex: none;
            width: 100%;
            max-width: 420px;
            height: 420px;
          }

          .about-section-2 .content-section {
            max-width: 100%;
            text-align: center;
          }

          .about-section-2 .features-list {
            align-items: center;
          }

          .about-section-2 .feature-item {
            justify-content: center;
            max-width: 350px;
          }
        }

        @media (max-width: 768px) {
          .about-section-2 .section-content {
            padding: 40px 16px;
          }

          .about-section-2 .image-section {
            max-width: 350px;
            height: 350px;
          }

          .about-section-2 .experience-badge {
            width: 120px;
            padding: 18px 12px;
          }

          .about-section-2 .badge-number {
            font-size: 38px;
            line-height: 14px;
          }

          .about-section-2 .badge-text {
            font-size: 15px;
            line-height: 14px;
          }

          .about-section-2 .label {
            font-size: 14px;
            margin-bottom: 14px;
          }

          .about-section-2 .main-title {
            font-size: 32px;
            line-height: 30px;
            margin-bottom: 14px;
          }

          .about-section-2 .description {
            font-size: 14px;
            line-height: 16px;
            margin-bottom: 14px;
          }

          .about-section-2 .feature-icon {
            width: 38px;
            height: 38px;
          }

          .about-section-2 .feature-icon svg {
            width: 18px;
            height: 18px;
          }

          .about-section-2 .feature-text {
            font-size: 14px;
          }
        }

        @media (max-width: 576px) {
          .about-section-2 .image-section {
            max-width: 300px;
            height: 300px;
          }

          .about-section-2 .experience-badge {
            width: 110px;
            padding: 15px 10px;
          }

          .about-section-2 .badge-number {
            font-size: 32px;
            line-height: 12px;
          }

          .about-section-2 .badge-text {
            font-size: 13px;
            line-height: 12px;
          }

          .about-section-2 .main-title {
            font-size: 28px;
            line-height: 26px;
          }

          .about-section-2 .feature-item {
            max-width: 100%;
          }

          .about-section-2 .cta-button {
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
      <div className="section-container">
        <section className="section-content">
          <div className="image-section">
            <div className="circular-image">
              <img src={image} alt="Kash - Founder of Altevita" />
            </div>
            <div className="experience-badge">
              <div className="badge-number">28</div>
              <div className="badge-text">Years of Experience</div>
            </div>
          </div>

          <div className="content-section">
            <div className="label">{subtitle}</div>
            <h1 className="main-title">{title}</h1>
            <p className="description">
              {description.split("\n\n").map((paragraph, index) => (
                <span key={`${paragraph}-${index}`}>
                  {paragraph}
                  {index < description.split("\n\n").length - 1 ? (
                    <>
                      <br />
                      <br />
                    </>
                  ) : null}
                </span>
              ))}
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 11L12 14L22 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="feature-text">Premium Quality Craftsmanship</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="feature-text">Design Build Integration</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="feature-text">On-Time Project Delivery</span>
              </div>
            </div>

            <button className="cta-button" type="button">
              {ctaText}
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
