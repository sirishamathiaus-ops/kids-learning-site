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
            <p className="font-comic mt-4 max-w-2xl text-lg font-semibold leading-relaxed text-slate-800 sm:text-xl">
              Find two matching emojis. Try to use fewer moves each time you play!
            </p>
          </div>
        </div>
        <MemoryGame pairCount={8} />
      </div>
    </PageBackdrop>
  );
}
