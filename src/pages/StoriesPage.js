import { useState } from 'react';
import { Link } from 'react-router-dom';
import { STORIES } from '../data/stories';
import { StoryReaderModal } from '../components/stories/StoryReaderModal';

export function StoriesPage() {
  const [active, setActive] = useState(null);

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
          <span aria-hidden>📚</span> Story time
        </h1>
        <p className="mt-2 max-w-2xl text-sm font-semibold text-slate-700 sm:text-base">
          Choose a story card — we will open a cozy full-screen read for you.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {STORIES.map((story) => (
          <button
            key={story.id}
            type="button"
            onClick={() => setActive(story)}
            className="group relative overflow-hidden rounded-kid-lg border-4 border-white bg-white p-5 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-amber-400 sm:p-6"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br opacity-40 transition-opacity duration-300 group-hover:opacity-55 ${story.accent}`}
              aria-hidden
            />
            <div className="relative z-10 flex gap-4">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-4xl shadow-md">
                <span aria-hidden>{story.emoji}</span>
              </span>
              <div className="min-w-0">
                <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">{story.title}</h2>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-800 sm:text-base">
                  {story.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-indigo-700">
                  Read the story
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <StoryReaderModal story={active} onClose={() => setActive(null)} />
    </div>
  );
}
