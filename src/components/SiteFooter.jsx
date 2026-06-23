import { Icons } from './Icons.jsx';

export function SiteFooter({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <Icons.Logo />
            <span>Master Mentor</span>
          </div>
          <p className="body-base footer-description">
            A structured hub engineered to guide students through critical academic transitions.
          </p>
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
        </div>
      </div>
    </footer>
  );
}
