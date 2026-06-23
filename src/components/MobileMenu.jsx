import { NAV_ITEMS } from '../constants/navigation.js';

export function MobileMenu({ isOpen, currentPage, onNavigate }) {
  return (
    <div id="mobile-menu" className={`mobile-nav-overlay ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
      <div className="mobile-menu-panel">
        {NAV_ITEMS.map((item, index) => (
          <a
            key={item.id}
            href={item.href}
            className={`mobile-nav-link ${currentPage === item.id ? 'active' : ''}`}
            onClick={(event) => onNavigate(event, item.id)}
            style={{ transitionDelay: isOpen ? `${120 + index * 60}ms` : '0ms' }}
            tabIndex={isOpen ? 0 : -1}
          >
            {item.label}
          </a>
        ))}

        <div className="mobile-nav-cta" style={{ transitionDelay: isOpen ? '320ms' : '0ms' }}>
          <a href="https://mastermentor.academy/portal" className="btn-primary full-width" tabIndex={isOpen ? 0 : -1}>
            Access Portal
          </a>
        </div>
      </div>
    </div>
  );
}
