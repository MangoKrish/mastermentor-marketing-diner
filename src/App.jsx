import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar.jsx';
import { MobileMenu } from './components/MobileMenu.jsx';
import { SiteFooter } from './components/SiteFooter.jsx';
import { SiteHeader } from './components/SiteHeader.jsx';
import { PAGE_TITLES, ROUTES, pageFromPath } from './constants/navigation.js';
import { ContactPage } from './pages/ContactPage.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { StoryPage } from './pages/StoryPage.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => pageFromPath(window.location.pathname));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(pageFromPath(window.location.pathname));
      setMobileMenuOpen(false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLES[currentPage] || PAGE_TITLES.platform;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileMenuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [mobileMenuOpen]);

  const navigateTo = useCallback((event, page) => {
    if (event) event.preventDefault();

    const nextPath = ROUTES[page] || ROUTES.platform;
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }

    setCurrentPage(page);
    setMobileMenuOpen(false);
  }, []);

  const renderedPage = useMemo(() => {
    switch (currentPage) {
      case 'our-story':
        return <StoryPage />;
      case 'contact':
        return <ContactPage />;
      case 'platform':
      default:
        return <HomePage />;
    }
  }, [currentPage]);

  return (
    <>
      <AnnouncementBar />

      <SiteHeader
        currentPage={currentPage}
        mobileMenuOpen={mobileMenuOpen}
        onNavigate={navigateTo}
        onToggleMobileMenu={() => setMobileMenuOpen((value) => !value)}
      />

      <MobileMenu isOpen={mobileMenuOpen} currentPage={currentPage} onNavigate={navigateTo} />

      <main className="site-main">
        {renderedPage}
      </main>

      <SiteFooter onNavigate={navigateTo} />
    </>
  );
}
