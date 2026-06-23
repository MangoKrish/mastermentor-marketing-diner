import { Icons } from '../components/Icons.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { Marquee } from '../components/Marquee.jsx';
import {
  HeroDashboard,
  ScholarshipBoard,
  ReviewPanel,
  ResourceLibrary
} from '../components/ProductMocks.jsx';

const STATS = [
  { value: '2,400+', label: 'students guided' },
  { value: '$18M', label: 'scholarships tracked' },
  { value: '4.9★', label: 'average rating' },
  { value: '12 hrs', label: 'saved every week' }
];

const STEPS = [
  {
    n: '01',
    title: 'Build your profile',
    body: 'Tell us your programs, year, and goals once. Master Mentor maps the entire road ahead.'
  },
  {
    n: '02',
    title: 'Work the plan',
    body: 'Matched scholarships, deadlines, and drafts land in one calm workspace — never a lost tab again.'
  },
  {
    n: '03',
    title: 'Get real feedback',
    body: 'Send essays to mentors, collect structured notes, and walk into every deadline ahead of schedule.'
  }
];

const TESTIMONIALS = [
  {
    quote:
      'I went from forty open tabs to one workspace. I submitted three scholarship apps a week early — and won two.',
    name: 'Aanya P.',
    detail: 'Engineering · Waterloo ’28',
    initials: 'AP',
    tone: 'amber'
  },
  {
    quote:
      'The Review Dropbox is the part I tell everyone about. Getting line-by-line feedback without the email chaos changed my essays.',
    name: 'Marcus L.',
    detail: 'CS · Georgia Tech ’27',
    initials: 'ML',
    tone: 'green'
  },
  {
    quote:
      'It feels less like software and more like a mentor who is organized for you. Application season finally felt calm.',
    name: 'Sofia R.',
    detail: 'Biology · McGill ’28',
    initials: 'SR',
    tone: 'clay'
  }
];

export function HomePage() {
  return (
    <div className="home" key="platform">
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy-col animate-in">
            <span className="eyebrow-badge">
              <Icons.Sparkle /> Your academic command center
            </span>
            <h1 className="display hero-headline">
              The academic system is chaotic. <br />
              <em>Your workflow shouldn&apos;t be.</em>
            </h1>
            <p className="lede hero-lede">
              Master Mentor turns scattered tabs, lost essays, and missed deadlines into one calm,
              structured workspace — so you can claim every opportunity you&apos;ve actually earned.
            </p>
            <div className="hero-actions">
              <a href="https://mastermentor.academy/portal" className="btn-primary btn-large">
                Start free <span className="arrow-icon"><Icons.ArrowRight /></span>
              </a>
              <a href="#how" className="btn-ghost btn-large">
                See how it works
              </a>
            </div>
            <div className="social-proof">
              <div className="avatar-stack" aria-hidden="true">
                <span className="avatar avatar-amber">AP</span>
                <span className="avatar avatar-green">ML</span>
                <span className="avatar avatar-clay">SR</span>
                <span className="avatar avatar-ink">+2k</span>
              </div>
              <div className="social-proof-copy">
                <span className="stars" aria-hidden="true">
                  <Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star />
                </span>
                <span className="body-sm">Loved by <strong>2,400+</strong> students</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-col">
            <HeroDashboard />
          </div>
        </div>

        <div className="container stat-pills">
          {STATS.map((s) => (
            <div className="stat-pill" key={s.label}>
              <span className="stat-pill-value">{s.value}</span>
              <span className="stat-pill-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <Marquee />

      {/* PROBLEM → SOLUTION */}
      <section className="container section comparison-section">
        <Reveal className="text-center mx-auto section-intro">
          <span className="eyebrow">The problem</span>
          <h2 className="h2 mt-4">Application season shouldn&apos;t feel like damage control.</h2>
          <p className="body-lg mt-4">
            Ten browser tabs, three cloud folders, and a spreadsheet you forgot to open.
            We engineered the calm, deliberate alternative.
          </p>
        </Reveal>

        <div className="comparison-wrapper">
          <Reveal className="card chaos-card">
            <h3 className="comparison-heading muted-heading">
              <Icons.XCircle /> The scattered way
            </h3>
            <ul className="comp-list">
              {[
                'Scholarships buried in unread email threads.',
                'Draft essays lost across disorganized folders.',
                'Deadline anxiety with no single source of truth.',
                'Reactionary planning that costs you opportunities.'
              ].map((item) => (
                <li key={item}>
                  <span className="list-icon muted"><Icons.ArrowRight /></span>
                  <span className="body-base muted-copy">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="card clarity-card" delay={120}>
            <span className="card-stamp">The calm way</span>
            <h3 className="comparison-heading primary-heading">
              <Icons.CheckCircle /> With Master Mentor
            </h3>
            <ul className="comp-list">
              {[
                'Every scholarship centralized in one dashboard.',
                'A Review Dropbox for focused, async feedback.',
                'Curated resources for demanding programs.',
                'A logical workflow that builds real momentum.'
              ].map((item) => (
                <li key={item}>
                  <span className="list-icon primary"><Icons.CheckCircle /></span>
                  <span className="body-base strong-copy">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container feature-section">
        <FeatureRow
          eyebrow="Pillar 01"
          icon={<Icons.Target />}
          title="Intelligent scholarship discovery."
          accent="Money you’ve already earned."
          body="Stop hunting across portals. Master Mentor curates opportunities, deadlines, and requirements matched to your academic profile — then tracks every one to the wire."
          bullets={['Centralized, filterable opportunity board', 'Match scores by year, program & strengths']}
          visual={<ScholarshipBoard />}
        />
        <FeatureRow
          eyebrow="Pillar 02"
          icon={<Icons.Upload />}
          title="A frictionless review dropbox."
          accent="Feedback without the chaos."
          body="Your supplements decide your admission. Share secure links to resumes and essays, and collect structured, line-by-line notes from mentors — no messy email chains."
          bullets={['Async, structured review tracking', 'Inline notes on resumes & supplements']}
          visual={<ReviewPanel />}
        />
        <FeatureRow
          eyebrow="Pillar 03"
          icon={<Icons.Database />}
          title="A curated resource library."
          accent="Vetted, never generic."
          body="A neatly categorized library of study guides, essay teardowns, and prerequisite checklists — built for the rigorous transitions that generic advice ignores."
          bullets={['240+ vetted guides & playbooks', 'Organized by program and stage']}
          visual={<ResourceLibrary />}
        />
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="how-section">
        <div className="container">
          <Reveal className="text-center mx-auto section-intro">
            <span className="eyebrow">How it works</span>
            <h2 className="h2 mt-4">Order in three deliberate steps.</h2>
          </Reveal>
          <div className="steps-grid">
            {STEPS.map((step, i) => (
              <Reveal className="step-card" key={step.n} delay={i * 110}>
                <span className="step-number">{step.n}</span>
                <h3 className="h3 step-title">{step.title}</h3>
                <p className="body-base step-body">{step.body}</p>
              </Reveal>
            ))}
            <div className="steps-line" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container section testimonial-section">
        <Reveal className="text-center mx-auto section-intro">
          <span className="eyebrow">From the students</span>
          <h2 className="h2 mt-4">What a calmer season sounds like.</h2>
        </Reveal>
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal className="testimonial-card" key={t.name} delay={i * 110}>
              <span className="testimonial-quote-mark" aria-hidden="true"><Icons.Quote /></span>
              <span className="stars" aria-hidden="true">
                <Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star />
              </span>
              <p className="testimonial-text">{t.quote}</p>
              <div className="testimonial-person">
                <span className={`avatar avatar-${t.tone}`}>{t.initials}</span>
                <div>
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-detail">{t.detail}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="container cta-band-inner">
          <Reveal className="cta-band-content">
            <span className="eyebrow eyebrow-light">Ready when you are</span>
            <h2 className="display cta-band-title">
              Establish order. <em>Reclaim your season.</em>
            </h2>
            <p className="cta-band-copy">
              Join thousands of students who turned a scattered scramble into a structured,
              reliable workflow — and started winning back their time.
            </p>
            <div className="hero-actions cta-band-actions">
              <a href="https://mastermentor.academy/portal" className="btn-cream btn-large">
                Start free <span className="arrow-icon"><Icons.ArrowRight /></span>
              </a>
              <a href="/contact" className="btn-ghost-light btn-large">Talk to us</a>
            </div>
            <p className="cta-reassure">No credit card · Free to start · Cancel anytime</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function FeatureRow({ icon, eyebrow, title, accent, body, bullets = [], visual }) {
  return (
    <Reveal className="feature-row">
      <div className="feature-content">
        <div className="feature-eyebrow-row">
          <div className="icon-box">{icon}</div>
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h2 className="h2 feature-title">
          {title} <em className="feature-accent">{accent}</em>
        </h2>
        <p className="body-lg mt-4 mb-6">{body}</p>
        {bullets.length > 0 && (
          <ul className="comp-list feature-list">
            {bullets.map((bullet) => (
              <li key={bullet}>
                <span className="list-icon primary"><Icons.Check /></span>
                <span className="body-base bullet-copy">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="feature-visual">{visual}</div>
    </Reveal>
  );
}
