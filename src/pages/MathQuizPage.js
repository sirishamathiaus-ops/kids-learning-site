import { BackHomeLink } from '../components/kids/BackHomeLink';
import { KidPageHeading } from '../components/kids/KidPageHeading';
import { PageBackdrop } from '../components/layout/PageBackdrop';
import { MathQuiz } from '../components/math/MathQuiz';
import { PAGE_BACKGROUNDS } from '../data/pageBackgrounds';

export function MathQuizPage() {
  return (
    <PageBackdrop
      imageUrl={PAGE_BACKGROUNDS.learning}
      overlayClassName="bg-gradient-to-b from-amber-50/93 via-white/93 to-violet-50/91 backdrop-blur-[2px]"
    >
      <div className="pb-16 pt-6 sm:pb-20 sm:pt-8">
        <div className="mb-8">
          <BackHomeLink />
          <div className="mt-5">
            <KidPageHeading>
              <span aria-hidden>🧮 </span>
              Maths quiz
            </KidPageHeading>
          </div>
          <p className="font-comic mt-4 max-w-2xl text-lg font-semibold leading-relaxed text-slate-800 sm:text-xl">
            Ten friendly questions mixing addition, subtraction, and multiplication. Tap the answer that fits!
          </p>
        </div>
        <MathQuiz />
      </div>
    </PageBackdrop>
  );
}
