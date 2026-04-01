import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Logo } from './Logo';
import { ProductRecommendations } from './ProductRecommendations';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/activities', label: 'Activities' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
];

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('navOpen', menuOpen);
    return () => document.body.classList.remove('navOpen');
  }, [menuOpen]);

  return (
    <div className="appShell">
      <a href="#main-content" className="skipLink">
        Skip to content
      </a>

      <header className="siteHeader">
        <div className="container headerInner">
          <NavLink to="/" className="brandLockup" onClick={() => setMenuOpen(false)}>
            <Logo className="brandLogo" />
            <span className="brandText">
              <span className="brandName">Kids Learning</span>
              <span className="brandTagline">Activities at home</span>
            </span>
          </NavLink>

          <button
            type="button"
            className="navToggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="navToggleBar" />
            <span className="navToggleBar" />
            <span className="navToggleBar" />
            <span className="srOnly">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>

          <nav id="site-nav" className={`siteNav ${menuOpen ? 'siteNav--open' : ''}`}>
            {NAV.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `siteNavLink${isActive ? ' siteNavLink--active' : ''}`}
                onClick={() => setMenuOpen(false)}
                end={to === '/'}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content" className="container main" tabIndex={-1}>
        <Outlet />
        <ProductRecommendations />
      </main>

      <footer className="siteFooter">
        <div className="container footerGrid">
          <div className="footerBrandCol">
            <div className="footerBrandRow">
              <Logo className="footerLogo" />
              <div>
                <div className="footerBrandName">Kids Learning</div>
                <p className="footerBrandBlurb">
                  Clean ideas and gentle structure for parents—playful learning for kids.
                </p>
              </div>
            </div>
          </div>

          <div className="footerCol">
            <div className="footerHeading">Explore</div>
            <ul className="footerLinks">
              {NAV.map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} end={to === '/'}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="footerCol">
            <div className="footerHeading">Contact</div>
            <ul className="footerLinks">
              <li>
                <NavLink to="/contact">Send a message</NavLink>
              </li>
              <li>
                <a>sirishamathiaus@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
