import { useEffect, useRef, useState } from 'react';
import { Icons } from './Icons.jsx';
import { Reveal } from './Reveal.jsx';

const REASONS = [
  'Same province — shared curriculum & admissions nuance',
  'Intended program & academic stream aligned',
  'Built around your goals and target outcomes'
];

function CompatRing({ value = 100 }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setOn(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setOn(true);
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = on ? circumference * (1 - value / 100) : circumference;

  return (
    <div className="compat-ring" ref={ref}>
      <svg viewBox="0 0 120 120" width="170" height="170" aria-hidden="true">
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C0702E" />
            <stop offset="100%" stopColor="#5E7B3B" />
          </linearGradient>
        </defs>
        <circle className="ring-track" cx="60" cy="60" r={radius} />
        <circle
          className="ring-fill"
          cx="60"
          cy="60"
          r={radius}
          style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
        />
      </svg>
      <div className="compat-center">
        <span className="compat-check"><Icons.Check /></span>
        <span className="compat-label">Top match</span>
      </div>
    </div>
  );
}

export function PairingShowcase() {
  return (
    <section className="pairing-section">
      <div className="container pairing-grid">
        <Reveal className="pairing-copy">
          <span className="eyebrow">The flagship feature</span>
          <h2 className="h2 mt-4">
            Matched to the right mentor — <em>with the math to prove it.</em>
          </h2>
          <p className="body-lg mt-4">
            Behind the scenes, Master Mentor weighs every mentor against your profile across the
            things that actually move the needle — your stream and goals, intended program, and
            province. You don&apos;t see the math; you just see your strongest matches, explained in
            plain language and yours to choose from.
          </p>
          <ul className="comp-list feature-list pairing-reasons">
            {REASONS.map((reason) => (
              <li key={reason}>
                <span className="list-icon primary"><Icons.Check /></span>
                <span className="body-base bullet-copy">{reason}</span>
              </li>
            ))}
          </ul>
          <a href="https://mastermentor.academy/portal" className="btn-primary btn-large pairing-cta">
            Find my mentor <span className="arrow-icon"><Icons.ArrowRight /></span>
          </a>
        </Reveal>

        <Reveal className="pairing-visual" delay={120}>
          <div className="compat-card">
            <div className="compat-card-head">
              <span className="avatar avatar-green">DR</span>
              <div>
                <span className="compat-name">Dr. Reyes</span>
                <span className="compat-meta">CS · Waterloo · Ontario</span>
              </div>
              <span className="status-pill status-pill-green"><span className="status-dot" /> Open</span>
            </div>
            <CompatRing />
            <div className="compat-reasons">
              <span className="chip chip-green">Province match</span>
              <span className="chip chip-amber">CS program</span>
              <span className="chip chip-ghost">Scholarship-focused</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
