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
              <p className="text-sm font-extrabold uppercase tracking-wide text-slate-700/80">
                Story time
              </p>
              <h2 id="story-modal-title" className="font-display mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
                <span className="mr-2" aria-hidden>
                  {story.emoji}
                </span>
                {story.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="tap-target shrink-0 rounded-xl bg-white/90 px-4 py-2 text-sm font-extrabold text-slate-800 shadow-sm transition hover:bg-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-slate-900"
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
                className="mb-4 text-base font-semibold leading-relaxed text-slate-800 last:mb-0 sm:text-lg"
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
            className="w-full rounded-kid bg-gradient-to-r from-indigo-500 to-violet-500 py-4 text-center text-lg font-extrabold text-white shadow-md transition hover:brightness-110 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Back to stories 🎉
          </button>
        </div>
      </div>
    </div>
  );
}
