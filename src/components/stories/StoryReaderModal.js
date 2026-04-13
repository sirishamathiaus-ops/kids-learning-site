import { useEffect } from 'react';

export function StoryReaderModal({ story, onClose }) {
  useEffect(() => {
    if (!story) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [story, onClose]);

  if (!story) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity animate-pop"
        aria-label="Close story"
        onClick={onClose}
      />

      <div className="relative z-10 flex max-h-[min(92vh,880px)] w-full max-w-2xl flex-col overflow-hidden rounded-t-kid-lg border-4 border-white bg-white shadow-lift sm:rounded-kid-lg animate-pop">
        <div className={`bg-gradient-to-br ${story.accent} px-6 pb-8 pt-7 sm:px-8`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-wide text-slate-700/85 sm:text-base">
                Story time
              </p>
              <h2
                id="story-modal-title"
                className="font-comic mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl"
              >
                <span className="mr-2" aria-hidden>
                  {story.emoji}
                </span>
                {story.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="tap-target shrink-0 rounded-kid-lg border-2 border-white/80 bg-white/95 px-4 py-2 text-sm font-extrabold text-slate-800 shadow-sm transition motion-safe:hover:scale-105 motion-safe:hover:bg-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-pink-400 sm:text-base"
            >
              ✕ Close
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
          <div className="max-w-none">
            {story.paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-comic mb-5 text-lg font-semibold leading-relaxed text-slate-800 last:mb-0 sm:text-xl"
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-100 bg-slate-50/90 px-6 py-4 sm:px-8">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-kid-lg bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 py-4 text-center text-lg font-extrabold text-slate-900 shadow-md transition motion-safe:hover:brightness-110 motion-safe:hover:shadow-lg focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
          >
            Back to stories 🎉
          </button>
        </div>
      </div>
    </div>
  );
}
