import { Icons } from './Icons.jsx';

export function AnnouncementBar() {
  return (
    <div className="announcement-bar" role="region" aria-label="Announcement">
      <div className="container announcement-inner">
        <span className="announcement-pulse" aria-hidden="true" />
        <span className="announcement-text">
          <span className="announcement-spark"><Icons.Sparkle /></span>
          Now welcoming the <strong>Fall 2026 cohort</strong> — early access is open.
        </span>
        <a href="https://mastermentor.academy/portal" className="announcement-link">
          Claim your seat <Icons.ArrowUpRight />
        </a>
      </div>
    </div>
  );
}
