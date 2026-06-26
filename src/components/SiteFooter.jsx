import { Icons } from './Icons.jsx';

export function SiteFooter({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container footer-cta">
        <div>
          <h3 className="footer-cta-title">Bring order to your application season.</h3>
          <p className="footer-cta-copy">Your future self will thank you.</p>
        </div>
        <a href="https://mastermentor.academy/portal" className="btn-cream btn-large">
          Get started <span className="arrow-icon"><Icons.ArrowRight /></span>
        </a>
      </div>

      <div className="container footer-grid">
        <div className="footer-brand-col">
          <div className="footer-brand">
            <Icons.Logo />
            <span>Master Mentor</span>
          </div>
          <p className="body-base footer-description">
            A structured hub engineered to guide students through critical academic transitions —
            calm, deliberate, and built by people who lived the chaos.
          </p>
          <div className="footer-social" aria-hidden="true">
            <span className="footer-social-dot" />
            <span className="footer-social-text">Built for the Fall 2026 cohort</span>
          </div>
        </div>

        <div>
          <h4>Platform</h4>
          <div className="footer-link-stack">
            <a href="/" className="footer-link" onClick={(event) => onNavigate(event, 'platform')}>
              Features
            </a>
            <a href="/our-story" className="footer-link" onClick={(event) => onNavigate(event, 'our-story')}>
              Our Story
            </a>
            <a href="https://mastermentor.academy/portal" className="footer-link">
              Sign In to Portal
            </a>
          </div>
        </div>

        <div>
          <h4>Connect</h4>
          <div className="footer-link-stack">
            <a href="/contact" className="footer-link" onClick={(event) => onNavigate(event, 'contact')}>
              Support &amp; FAQ
            </a>
            <a href="mailto:official.mastermentor@gmail.com" className="footer-link">
              official.mastermentor@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom-wrap">
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Master Mentor. All rights reserved.</span>
          <span className="footer-bottom-tag">Made with care for students who refuse to wing it.</span>
        </div>
      </div>
    </footer>
  );
}
