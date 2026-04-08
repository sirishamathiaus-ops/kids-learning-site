import { NavCard } from '../components/kids/NavCard';

const NAV_CARDS = [
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
    description: 'Sing along! Cards open to show every line.',
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
    <div className="pb-12 pt-4 sm:pb-16 sm:pt-6">
      <section
        className="relative overflow-hidden rounded-kid-lg border-4 border-white bg-gradient-to-br from-fuchsia-200 via-kid-sky/80 to-kid-mint p-6 shadow-lift sm:p-10"
        aria-labelledby="hero-heading"
      >
        <span
          className="pointer-events-none absolute -right-6 top-6 text-8xl opacity-30 animate-float sm:text-9xl"
          aria-hidden
        >
          🌈
        </span>
        <span
          className="pointer-events-none absolute bottom-4 left-4 text-5xl opacity-25 sm:text-6xl"
          aria-hidden
        >
          ✨
        </span>
        <div className="relative z-10 max-w-3xl">
          <p className="inline-flex items-center rounded-full bg-white/85 px-4 py-1.5 text-sm font-extrabold uppercase tracking-wide text-slate-700 shadow-sm">
            Hello, superstar!
          </p>
          <h1
            id="hero-heading"
            className="font-display mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Fun Kids Learning — play, read, count, and explore!
          </h1>
          <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-slate-800 sm:text-lg">
            Tap a colourful card below to jump into games, cosy stories, sing-along rhymes, or our tiny toy
            shop. Everything is big, bright, and ready for tablets and phones.
          </p>
        </div>
      </section>

      <section className="mt-10" aria-labelledby="nav-cards-heading">
        <div className="mb-6 flex flex-col gap-2 sm:mb-8">
          <h2 id="nav-cards-heading" className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
            Where do you want to go?
          </h2>
          <p className="max-w-2xl text-sm font-semibold text-slate-700 sm:text-base">
            Every tile is a new adventure — pick one and let the fun begin.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {NAV_CARDS.map((card, i) => (
            <NavCard key={card.to} {...card} delayClass={i % 2 === 0 ? '' : 'lg:translate-y-2'} />
          ))}
        </div>
      </section>
    </div>
  );
}
