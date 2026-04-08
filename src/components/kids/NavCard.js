import { Link } from 'react-router-dom';

const ACCENTS = {
  yellow: 'from-kid-sun/90 to-amber-300 shadow-amber-200/60 hover:shadow-amber-300/80',
  sky: 'from-sky-300 to-kid-sky shadow-sky-200/60 hover:shadow-sky-300/80',
  mint: 'from-emerald-300 to-kid-mint shadow-emerald-200/60 hover:shadow-emerald-300/80',
  grape: 'from-violet-300 to-kid-grape shadow-violet-200/60 hover:shadow-violet-300/80',
  coral: 'from-rose-300 to-kid-coral shadow-rose-200/60 hover:shadow-rose-300/80',
  cream: 'from-amber-100 to-kid-cream shadow-amber-200/50 hover:shadow-amber-300/70',
};

export function NavCard({ to, title, description, emoji, accent = 'yellow', delayClass = '' }) {
  const gradient = ACCENTS[accent] || ACCENTS.yellow;

  return (
    <Link
      to={to}
      className={[
        'group relative overflow-hidden rounded-kid-lg border-2 border-white/80 bg-gradient-to-br p-6 shadow-soft transition-all duration-300',
        'hover:-translate-y-1 hover:shadow-lift focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-amber-300',
        gradient,
        delayClass,
      ].join(' ')}
    >
      <span
        className="pointer-events-none absolute -right-4 -top-4 text-7xl opacity-25 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
        aria-hidden
      >
        {emoji}
      </span>
      <div className="relative z-10 flex flex-col gap-3">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-3xl shadow-sm transition-transform duration-300 group-hover:animate-wiggle">
          {emoji}
        </span>
        <div>
          <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">{title}</h2>
          <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-800/90 sm:text-base">
            {description}
          </p>
        </div>
        <span className="mt-2 inline-flex items-center gap-1 text-sm font-extrabold text-slate-900 underline decoration-2 decoration-slate-900/30 underline-offset-4 group-hover:decoration-slate-900">
          Let’s go
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
