import { Link } from 'react-router-dom';
import { MemoryGame } from '../components/memory/MemoryGame';

export function MemoryGamePage() {
  return (
    <div className="pb-12 pt-4 sm:pb-16 sm:pt-6">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link
            to="/"
            className="text-sm font-extrabold text-indigo-700 underline decoration-2 underline-offset-4 hover:text-indigo-900"
          >
            ← Back home
          </Link>
          <h1 className="font-display mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            <span aria-hidden>🃏</span> Memory match
          </h1>
          <p className="mt-2 max-w-2xl text-sm font-semibold text-slate-700 sm:text-base">
            Find two matching emojis. Try to use fewer moves each time you play!
          </p>
        </div>
      </div>
      <MemoryGame pairCount={8} />
    </div>
  );
}
