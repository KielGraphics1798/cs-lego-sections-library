import type { JSX } from "react";

type SelectOption = {
  value: string;
  label: string;
};

export interface PreConsultationSection2Props {
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

const DEFAULT_BACKGROUND = "https://www.figma.com/api/mcp/asset/cd9f1fa8-69e3-4e1c-b137-b8b135888514";
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

export default function PreConsultationSection2({
  title = "Let's Get Your Dream Started Schedule Your Design Consultation",
  subtitle = "Our comprehensive consultation provides you with:",
  benefits = defaultBenefits,
  formTitle = "Ready to Build Something Remarkable? Let's Connect",
  formSubtitle = "Fill out the short form, it only takes 2 minutes!",
  submitLabel = "Submit",
  backgroundImage = DEFAULT_BACKGROUND,
  workTypeOptions = defaultWorkTypeOptions,
  startTimeOptions = defaultStartTimeOptions,
}: PreConsultationSection2Props): JSX.Element {
  return (
    <section className="pre-consultation-section-2">
      <style>{`
        .pre-consultation-section-2 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .pre-consultation-section-2 {
          width: 100%;
          min-height: 665px;
          font-family: "Inter", sans-serif;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .pre-consultation-section-2 .bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
        }

        .pre-consultation-section-2 .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.77);
        }

        .pre-consultation-section-2 .container {
          position: relative;
          z-index: 1;
          max-width: 1120px;
          margin: 0 auto;
          min-height: 665px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 352px;
          align-items: center;
          gap: 40px;
          padding: 48px 20px;
        }

        .pre-consultation-section-2 .content {
          max-width: 610px;
        }

        .pre-consultation-section-2 .title {
          font-size: 48px;
          line-height: 1.02;
          letter-spacing: -1.4px;
          font-weight: 700;
          color: #ffffff;
        }

        .pre-consultation-section-2 .subtitle {
          margin-top: 22px;
          font-size: 16px;
          line-height: 1.45;
          font-weight: 400;
          color: #ffffff;
        }

        .pre-consultation-section-2 .benefits {
          margin-top: 12px;
          list-style: none;
          display: grid;
          gap: 4px;
        }

        .pre-consultation-section-2 .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .pre-consultation-section-2 .benefit-icon {
          width: 16px;
          height: 16px;
          margin-top: 4px;
          flex-shrink: 0;
        }

        .pre-consultation-section-2 .benefit-icon img {
          width: 16px;
          height: 16px;
          display: block;
        }

        .pre-consultation-section-2 .benefit-text {
          font-size: 16px;
          line-height: 1.45;
          font-weight: 400;
          color: #ffffff;
        }

        .pre-consultation-section-2 .form-card {
          width: 100%;
          background: #ffffff;
          border: 1px solid #d5d5d5;
          border-radius: 15px;
          padding: 22px 18px 18px;
          color: #111827;
        }

        .pre-consultation-section-2 .form-head {
          text-align: center;
          margin-bottom: 12px;
        }

        .pre-consultation-section-2 .form-title {
          color: #111827;
          font-size: 20px;
          line-height: 1.2;
          font-weight: 700;
        }

        .pre-consultation-section-2 .form-subtitle {
          margin-top: 6px;
          color: #6b7280;
          font-size: 13px;
          line-height: 1.45;
          font-weight: 500;
        }

        .pre-consultation-section-2 .form {
          display: grid;
          gap: 10px;
        }

        .pre-consultation-section-2 .field,
        .pre-consultation-section-2 .textarea,
        .pre-consultation-section-2 .select {
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

        .pre-consultation-section-2 .field,
        .pre-consultation-section-2 .select {
          height: 44px;
          padding: 0 14px;
        }

        .pre-consultation-section-2 .field::placeholder,
        .pre-consultation-section-2 .textarea::placeholder {
          color: #9ca3af;
        }

        .pre-consultation-section-2 .textarea {
          resize: none;
          min-height: 96px;
          padding: 12px 14px;
        }

        .pre-consultation-section-2 .field:focus,
        .pre-consultation-section-2 .textarea:focus,
        .pre-consultation-section-2 .select:focus {
          border-color: #9ca3af;
        }

        .pre-consultation-section-2 .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .pre-consultation-section-2 .select-wrap {
          position: relative;
        }

        .pre-consultation-section-2 .select {
          appearance: none;
          color: #6b7280;
          cursor: pointer;
        }

        .pre-consultation-section-2 .select-icon {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 16px;
          height: 16px;
          color: #9ca3af;
          pointer-events: none;
        }

        .pre-consultation-section-2 .consent {
          margin-top: 2px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .pre-consultation-section-2 .consent input {
          margin-top: 2px;
          width: 16px;
          height: 16px;
          cursor: pointer;
          accent-color: #111111;
          flex-shrink: 0;
        }

        .pre-consultation-section-2 .consent p {
          color: #6b7280;
          font-size: 10px;
          line-height: 1.4;
          font-weight: 500;
        }

        .pre-consultation-section-2 .submit {
          margin-top: 8px;
          width: 100%;
          height: 48px;
          border: none;
          border-radius: 4px;
          background: #000000;
          color: #ffffff;
          font-family: inherit;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .pre-consultation-section-2 .submit:hover {
          background: #1f1f1f;
        }

        @media (max-width: 1200px) {
          .pre-consultation-section-2 .container {
            max-width: 960px;
            grid-template-columns: minmax(0, 1fr) 340px;
            gap: 26px;
            padding: 42px 20px;
          }

          .pre-consultation-section-2 .title {
            font-size: 52px;
            letter-spacing: -1.6px;
          }

          .pre-consultation-section-2 .subtitle {
            font-size: 16px;
            margin-top: 18px;
          }

          .pre-consultation-section-2 .benefit-text {
            font-size: 16px;
            line-height: 1.45;
          }

          .pre-consultation-section-2 .form-title {
            font-size: 20px;
          }
        }

        @media (max-width: 900px) {
          .pre-consultation-section-2 {
            min-height: auto;
          }

          .pre-consultation-section-2 .container {
            min-height: auto;
            grid-template-columns: 1fr;
            gap: 26px;
            padding: 38px 18px;
          }

          .pre-consultation-section-2 .content {
            max-width: none;
          }

          .pre-consultation-section-2 .title {
            font-size: 42px;
            line-height: 1.02;
          }

          .pre-consultation-section-2 .benefit-text {
            font-size: 16px;
            line-height: 1.45;
          }

          .pre-consultation-section-2 .form-card {
            max-width: 460px;
            justify-self: center;
          }

          .pre-consultation-section-2 .form-title {
            font-size: 19px;
          }
        }

        @media (max-width: 560px) {
          .pre-consultation-section-2 .container {
            padding: 32px 12px;
            gap: 22px;
          }

          .pre-consultation-section-2 .title {
            font-size: 36px;
            line-height: 1.06;
            letter-spacing: -1px;
          }

          .pre-consultation-section-2 .subtitle {
            font-size: 16px;
            margin-top: 14px;
          }

          .pre-consultation-section-2 .benefits {
            gap: 8px;
          }

          .pre-consultation-section-2 .benefit-text {
            font-size: 15px;
            line-height: 1.44;
          }

          .pre-consultation-section-2 .form-card {
            border-radius: 12px;
            padding: 18px 14px 14px;
          }

          .pre-consultation-section-2 .form-title {
            font-size: 18px;
          }

          .pre-consultation-section-2 .row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="bg" style={{ backgroundImage: `url("${backgroundImage}")` }} />
      <div className="overlay" />

      <div className="container">
        <div className="content">
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
    </section>
  );
}
