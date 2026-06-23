import { useState } from 'react';
import { Icons } from '../components/Icons.jsx';

const faqs = [
  {
    q: 'Who is this platform strictly designed for?',
    a: 'Master Mentor is engineered for students navigating their university applications, as well as early undergrads looking to structure their academic workflows.'
  },
  {
    q: 'How does the Document Review Dropbox work?',
    a: 'You upload your resumes or supplementary essays via secure shareable links into the Review Dropbox. Our system structurally tracks the submission and notifies you when targeted, actionable feedback is ready.'
  },
  {
    q: 'What is required to access the platform?',
    a: 'Access to the core portal begins simply by creating an account. Any pricing or premium tiers are handled transparently inside the platform based on the level of specialized review required.'
  }
];

export function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="animate-in container section contact-page" key="contact">
      <div className="text-center mx-auto contact-heading">
        <h1 className="h1">Support &amp; Contact</h1>
        <p className="body-lg mt-4">
          Whether you require clarification on institutional partnerships, account access, or how the portal handles document security—we provide direct answers.
        </p>
      </div>

      <div className="grid-2 contact-grid">
        <div>
          <h2 className="h3 mb-6">Frequently Asked Questions</h2>
          <div className="faq-stack">
            {faqs.map((faq, idx) => (
              <button
                key={faq.q}
                type="button"
                className={`card card-hover faq-card ${openFaq === idx ? 'is-active' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                aria-expanded={openFaq === idx}
              >
                <span className="faq-question-row">
                  <span className="body-lg faq-question">{faq.q}</span>
                  <span className="faq-chevron" aria-hidden="true">
                    <Icons.ChevronDown />
                  </span>
                </span>

                <span className={`faq-content-wrapper ${openFaq === idx ? 'is-open' : ''}`}>
                  <span className="faq-content-inner">
                    <span className="body-base faq-text">{faq.a}</span>
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="h3 mb-6">Direct Communication</h2>
          <div className="card card-hover contact-card">
            <div className="icon-box contact-icon">
              <Icons.Mail />
            </div>
            <h3 className="h3 mb-4">Reach out via email</h3>
            <p className="body-base mb-8">
              For support, partnerships, or immediate inquiries, our operations team monitors this inbox daily to ensure rapid resolution.
            </p>
            <a href="mailto:official.mastermentor@gmail.com" className="btn-primary full-width email-button">
              official.mastermentor@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
