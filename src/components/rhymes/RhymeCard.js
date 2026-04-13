import { useEffect, useId, useState } from 'react';


/**
 * One nursery rhyme: verses, background music (MP3 from /public + fallback), and optional voice read-aloud.
 */
export function RhymeCard({ rhyme, isMusicPlaying, onMusicStop }) {
  const { id: rhymeId } = rhyme;
  const [open, setOpen] = useState(false);
  const panelId = useId(); 



  useEffect(() => {
    if (!open && isMusicPlaying) {
      onMusicStop(rhymeId);
    }
  }, [open, isMusicPlaying, onMusicStop, rhymeId]);

  function toggleOpen() {
    setOpen((v) => !v);
  }
 

  return (
    <article className="overflow-hidden rounded-kid-lg border-[3px] border-white bg-white/95 shadow-[0_12px_40px_rgba(15,23,42,0.12)] transition-all duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_18px_50px_rgba(79,70,229,0.18)]">
      <button
        type="button"
        id={`rhyme-${rhyme.id}-btn`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggleOpen}
        className="flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-gradient-to-r hover:from-pink-50/95 hover:to-yellow-50/85 sm:px-6 sm:py-6"
      >
        <span
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-300 via-orange-300 to-yellow-300 text-3xl shadow-inner motion-safe:hover:animate-wiggle"
          aria-hidden
        >
          {rhyme.emoji}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="font-comic text-xl font-bold text-slate-900 sm:text-2xl">{rhyme.title}</h2>
          <p className="mt-1 text-base font-bold text-slate-600">
            {open ? 'Tap the header to hide' : 'Tap to open — sing along!'}
          </p>
        </div>
        <span
          className={[
            'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-xl font-bold text-white shadow-md transition-transform duration-300',
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
          <div className="space-y-6 border-t-[3px] border-pink-200/80 bg-gradient-to-b from-sky-50 via-white to-amber-50/95 px-5 py-6 sm:px-8 sm:py-8">
           

            <ul className="space-y-4">
              {rhyme.verses.map((line, i) => (
                <li
                  key={i}
                  className="font-comic text-lg font-semibold leading-relaxed text-slate-800 sm:text-xl"
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
