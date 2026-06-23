const stroke = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true
};

export const Icons = {
  Logo: () => (
    <img src="/mnm-logo.png" alt="" className="brand-logo-img" aria-hidden="true" />
  ),
  ArrowRight: () => (
    <svg {...stroke} width="20" height="20">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  ArrowUpRight: () => (
    <svg {...stroke} width="18" height="18">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  ),
  Menu: () => (
    <svg {...stroke}>
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  X: () => (
    <svg {...stroke}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  Target: () => (
    <svg {...stroke}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Upload: () => (
    <svg {...stroke}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  ),
  Database: () => (
    <svg {...stroke}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  XCircle: () => (
    <svg {...stroke}>
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
  CheckCircle: () => (
    <svg {...stroke}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Check: () => (
    <svg {...stroke} width="18" height="18">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  ChevronDown: () => (
    <svg {...stroke} width="20" height="20">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  Mail: () => (
    <svg {...stroke}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Sparkle: () => (
    <svg {...stroke} width="16" height="16">
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17.8 6.1 20.2l1.3-6.6L2.5 9l6.6-.8L12 2z" />
    </svg>
  ),
  Quote: () => (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true">
      <path d="M7.5 5C5 5 3 7 3 9.5S5 14 7.5 14c0 2-1.4 3.4-3.3 3.9-.4.1-.6.5-.5.9.1.4.5.6.9.5C7.7 18.5 10 15.9 10 11.5 10 7.9 8 5 7.5 5zm9 0C14 5 12 7 12 9.5S14 14 16.5 14c0 2-1.4 3.4-3.3 3.9-.4.1-.6.5-.5.9.1.4.5.6.9.5C16.7 18.5 19 15.9 19 11.5 19 7.9 17 5 16.5 5z" />
    </svg>
  ),
  Search: () => (
    <svg {...stroke} width="18" height="18">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  Clock: () => (
    <svg {...stroke} width="16" height="16">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 14" />
    </svg>
  ),
  Bell: () => (
    <svg {...stroke} width="16" height="16">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </svg>
  ),
  FileText: () => (
    <svg {...stroke} width="18" height="18">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  ),
  BookOpen: () => (
    <svg {...stroke} width="18" height="18">
      <path d="M2 5h7a3 3 0 0 1 3 3v11a2.5 2.5 0 0 0-2.5-2.5H2z" />
      <path d="M22 5h-7a3 3 0 0 0-3 3v11a2.5 2.5 0 0 1 2.5-2.5H22z" />
    </svg>
  ),
  Calendar: () => (
    <svg {...stroke} width="16" height="16">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="16" y1="2" x2="16" y2="6" />
    </svg>
  ),
  Compass: () => (
    <svg {...stroke}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
};
