import { Icons } from '../components/Icons.jsx';
import { WireframeDropbox, WireframeResources, WireframeScholarship } from '../components/Wireframes.jsx';

export function HomePage() {
  return (
    <div className="animate-in" key="platform">
      <section className="container hero-section">
        <h1 className="h1 mx-auto hero-title">
          The academic system is chaotic. <br />
          <span>Your workflow shouldn&apos;t be.</span>
        </h1>

        <p className="body-lg mx-auto hero-copy">
          From understanding the flow of your applications to utilizing core tools to claim the opportunities being offered, Master Mentor gives you a single, highly structured workspace to control your academic progression.
        </p>

        <div className="hero-actions">
          <a href="https://mastermentor.academy/portal" className="btn-primary">
            Access Platform <span className="arrow-icon"><Icons.ArrowRight /></span>
          </a>
        </div>
      </section>

      <section className="container comparison-section">
        <div className="text-center mx-auto section-intro">
          <h2 className="h2 mt-4">Why we built a better system.</h2>
          <p className="body-lg mt-4">
            We understand the cognitive load of application season. Ten browser tabs open, disorganized files, and scattered notes. We engineered a localized solution to completely remove the friction.
          </p>
        </div>

        <div className="comparison-wrapper">
          <div className="card card-hover chaos-card">
            <h3 className="h3 comparison-heading muted-heading">
              <Icons.XCircle /> Without a structured system
            </h3>
            <ul className="comp-list">
              <li>
                <span className="list-icon muted"><Icons.ArrowRight /></span>
                <span className="body-base muted-copy">Scholarships buried in long, unread email threads.</span>
              </li>
              <li>
                <span className="list-icon muted"><Icons.ArrowRight /></span>
                <span className="body-base muted-copy">Draft essays scattered across disorganized cloud folders.</span>
              </li>
              <li>
                <span className="list-icon muted"><Icons.ArrowRight /></span>
                <span className="body-base muted-copy">High anxiety regarding crucial application deadlines.</span>
              </li>
              <li>
                <span className="list-icon muted"><Icons.ArrowRight /></span>
                <span className="body-base muted-copy">Reactionary planning that causes missed opportunities.</span>
              </li>
            </ul>
          </div>

          <div className="card card-hover clarity-card">
            <h3 className="h3 comparison-heading primary-heading">
              <Icons.CheckCircle /> With Master Mentor
            </h3>
            <ul className="comp-list">
              <li>
                <span className="list-icon primary"><Icons.CheckCircle /></span>
                <span className="body-base strong-copy">All scholarship opportunities centralized in one dashboard.</span>
              </li>
              <li>
                <span className="list-icon primary"><Icons.CheckCircle /></span>
                <span className="body-base strong-copy">Dedicated Review Dropbox for focused, asynchronous essay feedback.</span>
              </li>
              <li>
                <span className="list-icon primary"><Icons.CheckCircle /></span>
                <span className="body-base strong-copy">Curated resources specifically for demanding undergraduate programs.</span>
              </li>
              <li>
                <span className="list-icon primary"><Icons.CheckCircle /></span>
                <span className="body-base strong-copy">A calm, logical workflow that builds actual momentum.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container feature-section">
        <FeatureRow
          icon={<Icons.Target />}
          eyebrow="Pillar One"
          title="Intelligent Scholarship Discovery."
          body="Understand the flow of your applications. The platform curates opportunities, deadlines, and requirements specific to your academic profile so you can claim the opportunities being offered."
          bullets={["Centralized tracking workspace", "Filter by academic year and program"]}
          visual={<WireframeScholarship />}
        />

        <FeatureRow
          icon={<Icons.Upload />}
          eyebrow="Pillar Two"
          title="Frictionless Review Dropbox."
          body="Your supplementary applications dictate your admission. Submit secure, shareable links of your documents directly to mentors for targeted, actionable feedback without messy email chains."
          bullets={["Support for Resumes and Supplementary Essays", "Asynchronous, structured review tracking"]}
          visual={<WireframeDropbox />}
        />

        <FeatureRow
          icon={<Icons.Database />}
          eyebrow="Pillar Three"
          title="Curated Academic Resources."
          body="Gain access to a vetted, neatly categorized library of study guides, course breakdowns, and prerequisite checklists utilizing our core tools designed for rigorous transitions."
          visual={<WireframeResources />}
        />
      </section>

      <section className="container bottom-cta-section">
        <div className="card text-center mx-auto card-hover bottom-cta-card">
          <h2 className="h2">Ready to establish order?</h2>
          <p className="body-lg mx-auto mt-4 mb-8">
            Join the students who have transformed their scattered application processes into a structured, reliable workflow.
          </p>
          <a href="https://mastermentor.academy/portal" className="btn-primary btn-large">
            Access Platform Now
          </a>
        </div>
      </section>
    </div>
  );
}

function FeatureRow({ icon, eyebrow, title, body, bullets = [], visual }) {
  return (
    <div className="feature-row">
      <div className="feature-content">
        <div className="icon-box">{icon}</div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="h2 mb-4">{title}</h2>
        <p className="body-lg mt-4 mb-6">{body}</p>

        {bullets.length > 0 && (
          <ul className="comp-list feature-list">
            {bullets.map((bullet) => (
              <li key={bullet}>
                <span className="checkmark">✓</span>
                <span className="body-base bullet-copy">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="feature-visual">{visual}</div>
    </div>
  );
}
