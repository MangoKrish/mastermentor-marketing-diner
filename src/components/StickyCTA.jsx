import { useEffect, useState } from 'react';
import { Icons } from './Icons.jsx';

/**
 * Compact call-to-action that slides in once the hero scrolls out of view.
 * Watches a #hero-sentinel element placed at the bottom of the hero.
 */
export function StickyCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById('hero-sentinel');
    if (!sentinel || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setShow(!entry.isIntersecting)),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  if (dismissed) return null;

  return (
    <div className={`sticky-cta ${show ? 'is-visible' : ''}`} role="complementary">
      <div className="sticky-cta-text">
        <Icons.Sparkle />
        <span>Your calmer application season starts here.</span>
      </div>
      <div className="sticky-cta-actions">
        <a href="https://mastermentor.academy/portal" className="btn-primary btn-nav">
          Get started
        </a>
        <button
          type="button"
          className="sticky-cta-close"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
        >
          <Icons.X />
        </button>
      </div>
    </div>
  );
}
