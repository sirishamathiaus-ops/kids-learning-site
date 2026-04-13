import { Link } from 'react-router-dom';

const base =
  'tap-target inline-flex items-center justify-center gap-2 rounded-kid-lg px-5 py-3 text-base font-extrabold shadow-md transition-transform duration-200 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.02] motion-safe:active:translate-y-0.5 motion-safe:active:scale-[0.98]';

const variants = {
  sunset: 'bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-300 text-slate-900 focus-visible:outline-orange-400',
  ocean: 'bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-500 text-white focus-visible:outline-sky-400',
  mint: 'bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-slate-900 focus-visible:outline-teal-400',
};

export function ColorfulButton({ variant = 'sunset', className = '', ...props }) {
  return (
    <button
      type="button"
      className={[base, variants[variant] || variants.sunset, className].join(' ')}
      {...props}
    />
  );
}

export function ColorfulLinkButton({ to, variant = 'ocean', className = '', children, ...props }) {
  return (
    <Link
      to={to}
      className={[base, variants[variant] || variants.ocean, className].join(' ')}
      {...props}
    >
      {children}
    </Link>
  );
}
