import { Helmet } from 'react-helmet';
import { BackHomeLink } from '../components/kids/BackHomeLink';
import { KidPageHeading } from '../components/kids/KidPageHeading';
import { PageBackdrop } from '../components/layout/PageBackdrop';
import { MemoryGame } from '../components/memory/MemoryGame';
import { PAGE_BACKGROUNDS } from '../data/pageBackgrounds';

export function MemoryGamePage() {
  return (
    <PageBackdrop
      imageUrl={PAGE_BACKGROUNDS.learning}
      overlayClassName="bg-gradient-to-b from-emerald-50/93 via-white/93 to-sky-50/91 backdrop-blur-[2px]"
    >
       <Helmet>
        <title>Kids Memory Game – Fun Emoji Matching Game</title>

        <meta
          name="description"
          content="Free kids memory match game with emojis. Improve focus, concentration, and memory skills for children in Australia."
        />

        <meta property="og:title" content="Kids Memory Game" />
        <meta property="og:description" content="Fun emoji matching game for kids to improve memory and focus." />
        <meta property="og:url" content="https://kids-learning-site.vercel.app/memory" />
      </Helmet>
      
      <div className="pb-16 pt-6 sm:pb-20 sm:pt-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <BackHomeLink />
            <div className="mt-5">
              <KidPageHeading>
                <span aria-hidden>🃏 </span>
                Memory match
              </KidPageHeading>
            </div>
            <p className="font-comic mt-4 max-w-2xl text-xl font-extrabold leading-relaxed text-red-800 sm:text-xl">
              Find two matching emojis. Try to use fewer moves each time you play!
            </p>
          </div>
        </div>
        <MemoryGame pairCount={8} />
      </div>
    </PageBackdrop>
  );
}
