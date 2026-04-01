import { Link } from 'react-router-dom';

const FEATURED = [
  {
    to: '/activities',
    title: 'Activities',
    description: 'Creative projects, crafts, and hands-on ideas you can set up in minutes.',
    icon: '🎨',
    accent: 'indigo',
  },
  {
    to: '/activities#games',
    title: 'Games',
    description: 'Puzzles, movement, and play that still build focus and skills.',
    icon: '🎮',
    accent: 'teal',
  },
  {
    to: '/activities#reading',
    title: 'Learning',
    description: 'Reading, letters, and early literacy routines that feel like fun.',
    icon: '📚',
    accent: 'amber',
  },
];

export function HomePage() {
  return (
    <div className="stack stack--platform">
      <section className="educHero" aria-labelledby="hero-heading">
        <div className="educHero__grid">
          <div className="educHero__copy">
            <p className="educHero__eyebrow">Learning at home, made simple</p>
            <h1 id="hero-heading" className="educHero__title">
              Fun kids learning activities at home 🎉
            </h1>
            <p className="educHero__lead">
              Easy and fun learning ideas for children—organized like a modern learning platform,
              friendly for families.
            </p>
            <div className="educHero__actions">
              <Link className="button button--primary button--lg" to="/activities">
                Explore activities
              </Link>
              <Link className="button button--ghost" to="/resources">
                Read the blog
              </Link>
            </div>
            <ul className="educHero__pills" aria-label="Highlights">
              <li>Free ideas</li>
              <li>Parent-friendly</li>
            </ul>
          </div>
          <div className="educHero__visual" aria-hidden>
            <div className="educHero__orb educHero__orb--1" />
            <div className="educHero__orb educHero__orb--2" />
            <div className="educHero__orb educHero__orb--3" />
            <div className="educHero__cardMock">
              <span className="educHero__mockLine" />
              <span className="educHero__mockLine educHero__mockLine--short" />
              <div className="educHero__mockGrid">
                <span />
                <span />
                <span />
              </div>
            </div>
            <span className="educHero__float">✨</span>
            <span className="educHero__float educHero__float--b">🧩</span>
          </div>
        </div>
      </section>

      <section className="platformSection" aria-labelledby="featured-heading">
        <div className="platformSection__head">
          <h2 id="featured-heading" className="platformSection__title">
            Featured categories
          </h2>
          <p className="platformSection__subtitle muted">
            Pick a path—each one links to ideas and product suggestions on the Activities page.
          </p>
        </div>
        <div className="featuredGrid">
          {FEATURED.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className={`featuredCard featuredCard--${item.accent}`}
            >
              <span className="featuredCard__icon" aria-hidden>
                {item.icon}
              </span>
              <h3 className="featuredCard__title">{item.title}</h3>
              <p className="featuredCard__text">{item.description}</p>
              <span className="featuredCard__cta">
                Open
                <span className="featuredCard__arrow" aria-hidden>
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
