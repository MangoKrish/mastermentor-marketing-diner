export const ROUTES = {
  platform: '/',
  'our-story': '/our-story',
  contact: '/contact'
};

export const PAGE_LABELS = {
  platform: 'Platform',
  'our-story': 'Our Story',
  contact: 'Support'
};

export const PAGE_TITLES = {
  platform: 'Master Mentor | Structured Academic Progression',
  'our-story': 'Our Story | Master Mentor',
  contact: 'Support & Contact | Master Mentor'
};

export const NAV_ITEMS = [
  { id: 'platform', label: PAGE_LABELS.platform, href: ROUTES.platform },
  { id: 'our-story', label: PAGE_LABELS['our-story'], href: ROUTES['our-story'] },
  { id: 'contact', label: PAGE_LABELS.contact, href: ROUTES.contact }
];

export function pageFromPath(pathname) {
  const normalized = pathname.replace(/\/$/, '') || '/';

  if (normalized === '/') return 'platform';
  if (normalized === '/our-story') return 'our-story';
  if (normalized === '/contact') return 'contact';

  return 'platform';
}
