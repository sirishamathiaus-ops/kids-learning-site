import { BackHomeLink } from '../components/kids/BackHomeLink';
import { KidPageHeading } from '../components/kids/KidPageHeading';
import { PageBackdrop } from '../components/layout/PageBackdrop';
import { NavCard } from '../components/kids/NavCard';
import { PAGE_BACKGROUNDS } from '../data/pageBackgrounds';
import { Helmet } from 'react-helmet';

const LEARNING_CARDS = [
  {
    to: '/memory',
    title: 'Memory Match',
    description: 'Flip emoji cards, find pairs, and watch your score grow!',
    emoji: '🧠',
    accent: 'grape',
  },
  {
    to: '/math',
    title: 'Maths Quiz',
    description: 'Count, add, subtract, and multiply with big rainbow buttons.',
    emoji: '🔢',
    accent: 'sky',
  },
  {
    to: '/shop',
    title: 'Learning picks',
    description: 'Colourful books and toys grown-ups can explore for you.',
    emoji: '🛍️',
    accent: 'yellow',
  },
];

export function LearningPage() {
  return (
    <PageBackdrop
      imageUrl={PAGE_BACKGROUNDS.learning}
      overlayClassName="bg-gradient-to-b from-sky-50/95 via-white/93 to-violet-100/92 backdrop-blur-[2px]"
    >

       <Helmet>
        <title>Kids Learning Zone – Memory, Maths & Brain Games</title>

        <meta
          name="description"
          content="Free kids learning zone with memory games, maths quiz, and educational activities for children in Australia."
        />

        <meta property="og:title" content="Kids Learning Zone" />
        <meta property="og:description" content="Fun learning games for kids – memory, maths, and brain training activities." />
        <meta property="og:url" content="https://kids-learning-site.vercel.app/learning" />
      </Helmet>

      <div className="pb-16 pt-6 sm:pb-20 sm:pt-8">
        <BackHomeLink />
        <div className="mt-5">
          <KidPageHeading>Learning zone — ABCs, numbers, and brain games!</KidPageHeading>
        </div>
        <p className="font-comic mt-4 max-w-2xl text-lg font-semibold leading-relaxed text-slate-800 sm:text-xl">
          Pick a card to practise memory skills, maths superpowers, or peek at parent-friendly learning picks.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LEARNING_CARDS.map((card, i) => (
            <NavCard key={card.to} {...card} delayClass={i % 2 === 0 ? '' : 'lg:translate-y-2'} />
          ))}
        </div>
      </div>
    </PageBackdrop>
  );
}
