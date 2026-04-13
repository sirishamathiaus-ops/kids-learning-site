import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export function StoryReaderModal({ story, onClose }) {
  useEffect(() => {
    if (!story) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [story, onClose]);

  if (!story) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-modal-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative z-10 flex h-[85dvh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl">
        
        {/* Header */}
        <div className={`bg-gradient-to-br ${story.accent} px-6 pb-8 pt-7 sm:px-8 flex-shrink-0`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-wide text-slate-700/85 sm:text-base">
                Story time
              </p>
              <h2
                id="story-modal-title"
                className="font-comic mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl"
              >
                <span className="mr-2" aria-hidden>{story.emoji}</span>
                {story.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex-shrink-0 rounded-xl border-2 border-white/80 bg-white/95 px-4 py-2 text-sm font-extrabold text-slate-800 shadow-sm"
            >
              ✕ Close
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 min-h-0 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
          {story.paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-comic mb-5 text-lg sm:text-xl font-semibold leading-relaxed text-slate-800 last:mb-0"
            >
              {p}
            </p>
          ))}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 border-t border-slate-100 bg-slate-50/90 px-6 py-4 sm:px-8">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-xl bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 py-4 text-lg font-extrabold text-slate-900 shadow-md"
          >
            Back to stories 🎉
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}