import { Link } from 'react-router-dom';

export function BackHomeLink() {
  return (
    <Link
      to="/"
      className="tap-target inline-flex items-center gap-2 rounded-full border-2 border-white bg-gradient-to-r from-pink-100 via-orange-100 to-yellow-100 px-4 py-2 text-sm font-extrabold text-slate-800 shadow-sm transition motion-safe:hover:scale-[1.03] motion-safe:hover:shadow-md focus-visible:outline focus-visible:outline-4 focus-visible:outline-pink-400 sm:text-base"
    >
      <span aria-hidden>🏠</span>
      Back home
    </Link>
  );
}
