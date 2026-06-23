import { Icons } from './Icons.jsx';
import { NAV_ITEMS } from '../constants/navigation.js';

export function SiteHeader({ currentPage, mobileMenuOpen, onNavigate, onToggleMobileMenu }) {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="container nav-inner">
        <a
          href="/"
          className="brand-link"
          onClick={(event) => onNavigate(event, 'platform')}
          aria-label="Master Mentor home"
        >
          <Icons.Logo />
          <span>Master Mentor</span>
        </a>

        <div className="nav-links" aria-label="Desktop navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
              onClick={(event) => onNavigate(event, item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <div className="desktop-cta">
            <a href="https://mastermentor.academy/portal" className="nav-signin">
              Sign in
            </a>
            <a href="https://mastermentor.academy/portal" className="btn-primary btn-nav">
              Start free
            </a>
          </div>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={onToggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
}
