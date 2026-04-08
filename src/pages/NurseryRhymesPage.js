import { Link } from 'react-router-dom';
import { NURSERY_RHYMES } from '../data/rhymes';
import { RhymeCard } from '../components/rhymes/RhymeCard';

export function NurseryRhymesPage() {
  return (
    <div className="pb-12 pt-4 sm:pb-16 sm:pt-6">
      <div className="mb-8">
        <Link
          to="/"
          className="text-sm font-extrabold text-indigo-700 underline decoration-2 underline-offset-4 hover:text-indigo-900"
        >
          ← Back home
        </Link>
        <h1 className="font-display mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
          <span aria-hidden>🎶</span> Nursery rhymes
        </h1>
        <p className="mt-2 max-w-2xl text-sm font-semibold text-slate-700 sm:text-base">
          Tap the arrow on any rhyme to reveal the words. Sing it loud — we love enthusiasm!
        </p>
      </div>

      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        {NURSERY_RHYMES.map((rhyme) => (
          <RhymeCard key={rhyme.id} rhyme={rhyme} />
        ))}
      </div>
    </div>
  );
}
