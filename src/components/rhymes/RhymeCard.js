import { useId, useState } from 'react';

export function RhymeCard({ rhyme }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className="overflow-hidden rounded-kid-lg border-2 border-white bg-white/90 shadow-soft transition-all duration-300 hover:shadow-lift">
      <button
        type="button"
        id={`rhyme-${rhyme.id}-btn`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-sky-50/80 sm:px-6 sm:py-6"
      >
        <span
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-kid-sun to-amber-300 text-2xl shadow-inner"
          aria-hidden
        >
          {rhyme.emoji}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-lg font-bold text-slate-900 sm:text-xl">{rhyme.title}</h2>
          <p className="mt-0.5 text-sm font-bold text-slate-600">
            {open ? 'Tap to hide the words' : 'Tap to sing along!'}
          </p>
        </div>
        <span
          className={[
            'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-xl font-bold text-white transition-transform duration-300',
            open ? 'rotate-180' : '',
          ].join(' ')}
          aria-hidden
        >
          ⌄
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={`rhyme-${rhyme.id}-btn`}
        className={[
          'grid transition-[grid-template-rows] duration-300 ease-out',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        ].join(' ')}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-slate-100 bg-gradient-to-b from-sky-50/80 to-indigo-50/40 px-5 py-5 sm:px-7 sm:py-6">
            <ul className="space-y-2">
              {rhyme.verses.map((line, i) => (
                <li
                  key={i}
                  className="font-display text-base font-semibold leading-relaxed text-slate-800 sm:text-lg"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
