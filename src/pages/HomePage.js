import { KidPageHeading, KidSectionHeading } from '../components/kids/KidPageHeading';
import { NavCard } from '../components/kids/NavCard';
import { PageBackdrop } from '../components/layout/PageBackdrop';
import { PAGE_BACKGROUNDS } from '../data/pageBackgrounds';

const NAV_CARDS = [
  {
    to: '/learning',
    title: 'Learning Zone',
    description: 'Memory, maths, and happy picks — your brain-boost corner!',
    emoji: '📒',
    accent: 'sky',
  },
  {
    to: '/memory',
    title: 'Memory Match',
    description: 'Flip happy cards and find emoji pairs. Track your moves!',
    emoji: '🧠',
    accent: 'grape',
  },
  {
    to: '/math',
    title: 'Maths Quiz',
    description: 'Addition, subtraction, and times tables with bubbly big buttons.',
    emoji: '🔢',
    accent: 'sky',
  },
  {
    to: '/stories',
    title: 'Story Time',
    description: 'Tap a story card and read a gentle tale from start to finish.',
    emoji: '📖',
    accent: 'coral',
  },
  {
    to: '/rhymes',
    title: 'Nursery Rhymes',
    description: 'Sing along! Cards open to show every line — plus soft music.',
    emoji: '🎵',
    accent: 'mint',
  },
  {
    to: '/shop',
    title: 'Fun Finds Shop',
    description: 'Bright picks with pictures, prices, and parent-friendly links.',
    emoji: '🛍️',
    accent: 'yellow',
  },
];

export function HomePage() {
  return (
    <PageBackdrop
      imageUrl={PAGE_BACKGROUNDS.home}
      overlayClassName="bg-gradient-to-b from-amber-50/94 via-white/92 to-rose-50/90 backdrop-blur-[2px]"
    >
      <div className="pb-16 pt-6 sm:pb-20 sm:pt-8">
        <section
          className="relative overflow-hidden rounded-kid-lg border-[3px] border-white bg-white/90 p-6 shadow-[0_16px_48px_rgba(15,23,42,0.12)] sm:p-10"
          aria-labelledby="hero-heading"
        >
          <span
            className="pointer-events-none absolute -right-6 top-6 text-8xl opacity-35 animate-float sm:text-9xl"
            aria-hidden
          >
            🌈
          </span>
          <span
            className="pointer-events-none absolute bottom-4 left-4 text-5xl opacity-30 sm:text-6xl"
            aria-hidden
          >
            ✨
          </span>
          <div className="relative z-10 max-w-3xl">
            <p className="inline-flex items-center rounded-full border-2 border-pink-200/80 bg-gradient-to-r from-pink-100 to-yellow-100 px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-pink-700 shadow-sm sm:text-base">
              Hello, superstar!
            </p>
            <div className="mt-5">
              <KidPageHeading id="hero-heading" as="h1">
                Fun Kids Learning — play, read, count, and explore!
              </KidPageHeading>
            </div>
            <p className="font-comic mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-slate-800 sm:text-xl">
              Tap a colourful card below to jump into games, cosy stories, sing-along rhymes, or our tiny toy
              shop. Everything is big, bright, and ready for tablets and phones.
            </p>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="nav-cards-heading">
          <div className="mb-8 flex flex-col gap-3">
            <KidSectionHeading id="nav-cards-heading">Where do you want to go?</KidSectionHeading>
            <p className="max-w-2xl text-lg font-bold leading-relaxed text-slate-800 sm:text-xl">
              Every tile is a new adventure — pick one and let the fun begin.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {NAV_CARDS.map((card, i) => (
              <NavCard key={card.to} {...card} delayClass={i % 2 === 0 ? '' : 'lg:translate-y-2'} />
            ))}
          </div>
        </section>
      </div>
    </PageBackdrop>
  );
}
