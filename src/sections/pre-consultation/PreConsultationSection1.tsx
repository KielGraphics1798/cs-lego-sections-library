import type { JSX } from "react";

type SelectOption = {
  value: string;
  label: string;
};

export interface PreConsultationSection1Props {
  title?: string;
  subtitle?: string;
  benefits?: string[];
  formTitle?: string;
  formSubtitle?: string;
  submitLabel?: string;
  backgroundImage?: string;
  workTypeOptions?: SelectOption[];
  startTimeOptions?: SelectOption[];
}

const DEFAULT_BACKGROUND =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop";
const CHECK_ICON_PATH = "/src/assets/icons/Icon%20(4).svg";

const defaultBenefits = [
  "One-on-one vision assessment with Kash",
  "Evaluation of your structural and design requirements",
  "Practical architectural feedback for your GTA property",
  "Transparent discussion of renovation costs in Toronto",
  "Overview of our integrated 3-stage pricing process",
  "Guidance on design feasibility and zoning considerations",
  "Explanation of our post-project care commitment",
  "Clear next steps for your custom build home or renovation",
];

const defaultWorkTypeOptions: SelectOption[] = [
  { value: "", label: "Type of Work" },
  { value: "reno", label: "Renovation" },
  { value: "custom", label: "Custom Build" },
  { value: "design", label: "Design Only" },
];

const defaultStartTimeOptions: SelectOption[] = [
  { value: "", label: "When are you looking to get started?" },
  { value: "asap", label: "ASAP" },
  { value: "3months", label: "Within 3 months" },
  { value: "6months", label: "Within 6 months" },
];

function ChevronDownIcon(): JSX.Element {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3.5 6L8 10.2L12.5 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PreConsultationSection1({
  title = "Let's Get Your Dream Started Schedule Your Design Consultation",
  subtitle = "Our comprehensive consultation provides you with:",
  benefits = defaultBenefits,
  formTitle = "Ready to Build Something Remarkable? Let's Connect",
  formSubtitle = "Fill out the short form, it only takes 2 minutes!",
  submitLabel = "Submit",
  backgroundImage = DEFAULT_BACKGROUND,
  workTypeOptions = defaultWorkTypeOptions,
  startTimeOptions = defaultStartTimeOptions,
}: PreConsultationSection1Props): JSX.Element {
  return (
    <section className="pre-consultation-section-1">
      <style>{`
        .pre-consultation-section-1 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .pre-consultation-section-1 {
          width: 100%;
          background: #ffffff;
          font-family: "Inter", sans-serif;
        }

        .pre-consultation-section-1 .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .pre-consultation-section-1 .left,
        .pre-consultation-section-1 .right {
          width: 100%;
        }

        .pre-consultation-section-1 .left {
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 72px 20px;
        }

        .pre-consultation-section-1 .left-inner {
          width: 100%;
          max-width: 680px;
        }

        .pre-consultation-section-1 .title {
          color: #111111;
          font-size: 44px;
          line-height: 1.05;
          letter-spacing: -1px;
          font-weight: 700;
        }

        .pre-consultation-section-1 .subtitle {
          margin-top: 28px;
          color: #5f6368;
          font-size: 18px;
          line-height: 1.5;
          font-weight: 500;
        }

        .pre-consultation-section-1 .benefits {
          margin-top: 28px;
          list-style: none;
          display: grid;
          gap: 14px;
        }

        .pre-consultation-section-1 .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .pre-consultation-section-1 .benefit-icon {
          margin-top: 2px;
          width: 20px;
          height: 20px;
          border-radius: 999px;
          border: 1px solid #f5d18f;
          background: #fff8e9;
          color: #d07b00;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pre-consultation-section-1 .benefit-icon img {
          width: 16px;
          height: 16px;
          display: block;
        }

        .pre-consultation-section-1 .benefit-text {
          color: #4b5563;
          font-size: 15px;
          line-height: 1.55;
          font-weight: 500;
        }

        .pre-consultation-section-1 .right {
          position: relative;
          min-height: 640px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 54px 16px;
          background: #f3f4f6;
          overflow: hidden;
        }

        .pre-consultation-section-1 .bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: brightness(0.9);
        }

        .pre-consultation-section-1 .form-card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 500px;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 24px 46px rgba(0, 0, 0, 0.24);
          padding: 28px 22px;
        }

        .pre-consultation-section-1 .form-head {
          text-align: center;
          margin-bottom: 22px;
        }

        .pre-consultation-section-1 .form-title {
          color: #111827;
          font-size: 30px;
          line-height: 1.2;
          font-weight: 700;
        }

        .pre-consultation-section-1 .form-subtitle {
          margin-top: 8px;
          color: #6b7280;
          font-size: 13px;
          line-height: 1.45;
          font-weight: 500;
        }

        .pre-consultation-section-1 .form {
          display: grid;
          gap: 10px;
        }

        .pre-consultation-section-1 .field,
        .pre-consultation-section-1 .textarea,
        .pre-consultation-section-1 .select {
          width: 100%;
          border-radius: 8px;
          border: 1px solid #e9ecef;
          background: #f8f9fa;
          font-family: inherit;
          color: #111827;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .pre-consultation-section-1 .field,
        .pre-consultation-section-1 .select {
          height: 44px;
          padding: 0 14px;
        }

        .pre-consultation-section-1 .field::placeholder,
        .pre-consultation-section-1 .textarea::placeholder {
          color: #9ca3af;
        }

        .pre-consultation-section-1 .textarea {
          resize: none;
          min-height: 96px;
          padding: 12px 14px;
        }

        .pre-consultation-section-1 .field:focus,
        .pre-consultation-section-1 .textarea:focus,
        .pre-consultation-section-1 .select:focus {
          border-color: #9ca3af;
        }

        .pre-consultation-section-1 .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .pre-consultation-section-1 .select-wrap {
          position: relative;
        }

        .pre-consultation-section-1 .select {
          appearance: none;
          color: #6b7280;
          cursor: pointer;
        }

        .pre-consultation-section-1 .select-icon {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 16px;
          height: 16px;
          color: #9ca3af;
          pointer-events: none;
        }

        .pre-consultation-section-1 .consent {
          margin-top: 4px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .pre-consultation-section-1 .consent input {
          margin-top: 2px;
          width: 16px;
          height: 16px;
          cursor: pointer;
          accent-color: #111111;
          flex-shrink: 0;
        }

        .pre-consultation-section-1 .consent p {
          color: #6b7280;
          font-size: 10px;
          line-height: 1.4;
          font-weight: 500;
        }

        .pre-consultation-section-1 .submit {
          margin-top: 8px;
          width: 100%;
          height: 48px;
          border: none;
          border-radius: 8px;
          background: #000000;
          color: #ffffff;
          font-family: inherit;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.1s ease;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.28);
        }

        .pre-consultation-section-1 .submit:hover {
          background: #1f1f1f;
        }

        .pre-consultation-section-1 .submit:active {
          transform: scale(0.99);
        }

        @media (min-width: 1024px) {
          .pre-consultation-section-1 .layout {
            flex-direction: row;
          }

          .pre-consultation-section-1 .left,
          .pre-consultation-section-1 .right {
            width: 50%;
            min-height: 100vh;
          }

          .pre-consultation-section-1 .left {
            padding: 72px 52px;
          }

          .pre-consultation-section-1 .right {
            padding: 54px 30px;
          }

          .pre-consultation-section-1 .title {
            font-size: 64px;
            letter-spacing: -1.8px;
            font-weight: 800;
          }

          .pre-consultation-section-1 .form-card {
            padding: 40px 40px;
          }
        }

        @media (max-width: 560px) {
          .pre-consultation-section-1 .title {
            font-size: 36px;
            line-height: 1.08;
            font-weight: 700;
          }

          .pre-consultation-section-1 .subtitle {
            margin-top: 18px;
            font-size: 16px;
          }

          .pre-consultation-section-1 .benefits {
            gap: 12px;
            margin-top: 22px;
          }

          .pre-consultation-section-1 .benefit-text {
            font-size: 14px;
          }

          .pre-consultation-section-1 .right {
            min-height: 560px;
            padding: 42px 12px;
          }

          .pre-consultation-section-1 .form-card {
            padding: 24px 16px;
            border-radius: 12px;
          }

          .pre-consultation-section-1 .form-title {
            font-size: 24px;
          }

          .pre-consultation-section-1 .row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="layout">
        <div className="left">
          <div className="left-inner">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>

            <ul className="benefits">
              {benefits.map((benefit, index) => (
                <li className="benefit-item" key={`${benefit}-${index}`}>
                  <span className="benefit-icon">
                    <img src={CHECK_ICON_PATH} alt="" aria-hidden="true" />
                  </span>
                  <span className="benefit-text">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="right">
          <div className="bg" style={{ backgroundImage: `url("${backgroundImage}")` }} />

          <div className="form-card">
            <div className="form-head">
              <h3 className="form-title">{formTitle}</h3>
              <p className="form-subtitle">{formSubtitle}</p>
            </div>

            <form className="form" onSubmit={(event) => event.preventDefault()}>
              <input className="field" type="text" placeholder="Full Name" />

              <div className="row">
                <input className="field" type="tel" placeholder="Phone*" />
                <input className="field" type="email" placeholder="Email*" />
              </div>

              <div className="select-wrap">
                <select className="select" defaultValue="">
                  {workTypeOptions.map((option) => (
                    <option key={option.label} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <span className="select-icon">
                  <ChevronDownIcon />
                </span>
              </div>

              <div className="select-wrap">
                <select className="select" defaultValue="">
                  {startTimeOptions.map((option) => (
                    <option key={option.label} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <span className="select-icon">
                  <ChevronDownIcon />
                </span>
              </div>

              <input className="field" type="text" placeholder="Property Location?" />
              <textarea className="textarea" placeholder="Details of project (Give as much detail as possible)*" />

              <label className="consent">
                <input type="checkbox" />
                <p>
                  By checking this box, I consent to receive messages regarding my project inquiry, including consultation scheduling and follow-up details.
                </p>
              </label>

              <button className="submit" type="submit">
                {submitLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
