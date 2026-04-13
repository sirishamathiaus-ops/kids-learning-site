import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AnimatedKidsCursor } from './AnimatedKidsCursor';
import { Logo } from './Logo';

const NAV = [
  { to: '/', label: 'Home', emoji: '🏠' },
  { to: '/learning', label: 'Learning', emoji: '📒' },
  { to: '/memory', label: 'Memory', emoji: '🧠' },
  { to: '/math', label: 'Maths', emoji: '🔢' },
  { to: '/stories', label: 'Stories', emoji: '📚' },
  { to: '/rhymes', label: 'Rhymes', emoji: '🎵' },
  { to: '/shop', label: 'Shop', emoji: '🛍️' },
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
    document.body.classList.toggle('overflow-hidden', menuOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [menuOpen]);

  return (
    <div className="flex min-h-screen flex-col">
      <AnimatedKidsCursor />
      <a
        href="#main-content"
        className="sr-only left-4 top-4 z-[100] rounded-kid bg-slate-900 px-4 py-2 font-extrabold text-white focus:not-sr-only focus:absolute focus:outline focus:outline-4 focus:outline-amber-300"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b-2 border-white/60 bg-white/90 shadow-soft backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <NavLink
            to="/"
            className="group flex items-center gap-3 rounded-kid py-1 pr-3 pl-1 transition hover:bg-sky-100/80 focus-visible:outline focus-visible:outline-4 focus-visible:outline-amber-300"
            onClick={() => setMenuOpen(false)}
            end
          >
            <span className="rounded-2xl bg-gradient-to-br from-kid-sun via-kid-sky to-kid-mint p-1 shadow-inner ring-2 ring-white">
              <Logo className="h-10 w-10" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-bold text-slate-900 sm:text-xl">Kids Fun Lab</span>
              <span className="text-xs font-extrabold text-slate-600">Playful learning for little explorers</span>
            </span>
          </NavLink>

          <button
            type="button"
            className="tap-target inline-flex flex-col justify-center gap-1.5 rounded-kid border-2 border-slate-200 bg-white px-3 py-2 shadow-sm md:hidden"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="h-0.5 w-6 rounded-full bg-slate-900 transition group-[]" />
            <span className="h-0.5 w-6 rounded-full bg-slate-900" />
            <span className="h-0.5 w-6 rounded-full bg-slate-900" />
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>

          <nav
            id="site-nav"
            className={[
              'absolute left-0 right-0 top-full z-40 flex-col gap-2 rounded-b-kid-lg border-x-2 border-b-2 border-white bg-kid-sky p-4 shadow-lift md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none',
              menuOpen ? 'flex' : 'hidden',
              'md:flex',
            ].join(' ')}
          >
            {NAV.map(({ to, label, emoji }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  [
                    'flex items-center gap-2 rounded-full px-4 py-3 text-sm font-extrabold transition md:py-2',
                    isActive
                      ? 'bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-slate-900 shadow-md'
                      : 'text-slate-800 motion-safe:hover:scale-[1.03] motion-safe:hover:bg-gradient-to-r motion-safe:hover:from-pink-100 motion-safe:hover:via-orange-100 motion-safe:hover:to-yellow-100',
                  ].join(' ')
                }
              >
                <span aria-hidden>{emoji}</span>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content" className="flex-1 w-full" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="mt-auto border-t-2 border-white/70 bg-gradient-to-r from-pink-100 via-orange-100 to-yellow-100 py-10 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6">
          <div className="flex max-w-md items-start gap-3">
            <Logo className="h-12 w-12 shrink-0" />
            <div>
              <p className="font-display text-lg font-bold text-slate-900">Kids Fun Lab</p>
              <p className="mt-1 text-sm font-semibold text-slate-600">
                Made with giggles, glitter, and gentle learning goals.
              </p>
            </div>
          </div>
          <div>
            <p className="font-display text-lg font-bold text-slate-900">
               🌈 Made with ❤️ for Kids
            </p>
          </div>
        </div>
        <div className="mx-auto mt-6 w-full max-w-6xl px-4 text-center sm:px-6">
          <p className="text-xs font-extrabold text-slate-500">
            &copy; Kids Fun Lab. All rights reserved. 🎉
          </p>
        </div>
      </footer>
    </div>
  );
}
