import { useState } from 'react';
import { BackHomeLink } from '../components/kids/BackHomeLink';
import { KidPageHeading } from '../components/kids/KidPageHeading';
import { PageBackdrop } from '../components/layout/PageBackdrop';
import { StoryReaderModal } from '../components/stories/StoryReaderModal';
import { PAGE_BACKGROUNDS } from '../data/pageBackgrounds';
import { STORIES } from '../data/stories';
import { Helmet } from 'react-helmet';

export function StoriesPage() {
  const [active, setActive] = useState(null);

  return (
    <PageBackdrop
      imageUrl={PAGE_BACKGROUNDS.stories}
      overlayClassName="bg-gradient-to-b from-violet-50/94 via-white/93 to-amber-50/90 backdrop-blur-[2px]"
    >
         <Helmet>
        <title>Kids Stories – Fun Short Reading Stories for Children</title>

        <meta
          name="description"
          content="Free kids story time with short, fun, and easy reading stories. Perfect for early readers in Australia to improve reading skills."
        />

        <meta property="og:title" content="Kids Story Time" />
        <meta property="og:description" content="Fun and short stories for kids to read and enjoy." />
        <meta property="og:url" content="https://kids-learning-site.vercel.app/stories" />
      </Helmet>
      <div className="pb-16 pt-6 sm:pb-20 sm:pt-8">
        <BackHomeLink />
        <div className="mt-5">
          <KidPageHeading>
            <span aria-hidden>📚 </span>
            Story time
          </KidPageHeading>
        </div>
        <p className="font-comic mt-4 max-w-2xl text-lg font-semibold leading-relaxed text-slate-800 sm:text-xl">
          Tap a story card. The words are short and friendly — perfect for early readers.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {STORIES.map((story) => (
            <button
              key={story.id}
              type="button"
              onClick={() => setActive(story)}
              className="group relative overflow-hidden rounded-kid-lg border-[3px] border-white bg-white/95 p-6 text-left shadow-[0_12px_40px_rgba(15,23,42,0.1)] transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_20px_50px_rgba(109,40,217,0.15)] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-violet-400 sm:p-7"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-45 transition-opacity duration-300 group-hover:opacity-60 ${story.accent}`}
                aria-hidden
              />
              <div className="relative z-10 flex gap-4 sm:gap-5">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-4xl shadow-md sm:h-20 sm:w-20 sm:text-5xl">
                  <span aria-hidden>{story.emoji}</span>
                </span>
                <div className="min-w-0">
                  <h2 className="font-comic text-xl font-extrabold text-slate-900 sm:text-2xl">{story.title}</h2>
                  <p className="mt-2 text-base font-semibold leading-relaxed text-slate-800 sm:text-lg">
                    {story.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-sm font-extrabold text-violet-700 shadow-sm">
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
    </PageBackdrop>
  );
}
