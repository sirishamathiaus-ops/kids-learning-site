const POSTS = [
  {
    title: 'Top 10 Kids Learning Activities',
    excerpt: 'Quick ideas you can do with paper, crayons, and everyday items.',
    href: '#',
    category: 'Guides',
    readTime: '6 min read',
    cover: 'indigo',
  },
  {
    title: 'Best Educational Toys in Australia',
    excerpt: 'A simple guide to choosing toys that actually teach.',
    href: '#',
    category: 'Reviews',
    readTime: '8 min read',
    cover: 'teal',
  },
  {
    title: 'Indoor Activities for Kids in Melbourne',
    excerpt: 'Rainy-day fun: calm games, puzzles, reading, and crafts.',
    href: '#',
    category: 'Local',
    readTime: '5 min read',
    cover: 'amber',
  },
];

const AMAZON_IDEA_LINKS = [
  {
    title: 'Educational toys',
      href: '#',
    cover: 'rose',
  },
  {
    title: 'Learning workbooks',
    cover: 'indigo',
      href: '#',
  },
  {
    title: 'Kids puzzles',
    cover: 'teal',
      href: '#',
  },
];

export function BlogPage() {
  return (
    <div className="stack stack--platform">
      <header className="pageIntro blogPageHeader">
        <p className="blogPageHeader__label">Resources &amp; blog</p>
        <h1 className="pageTitle">Ideas for curious families</h1>
        <p className="muted pageLead">
          Guides and articles for parents—add posts here and include Amazon product links inside
          each article.
        </p>
      </header>

      <section className="platformSection platformSection--flush" aria-labelledby="posts-heading">
        <h2 id="posts-heading" className="srOnly">
          Popular posts
        </h2>
        <div className="blogGrid">
          {POSTS.map((post) => (
            <a key={post.title} href={post.href} className={`blogCard blogCard--${post.cover}`}>
              <div className="blogCard__cover">
                <span className="blogCard__pattern" aria-hidden />
                <span className="blogCard__emoji" aria-hidden>
                  {post.cover === 'indigo' ? '📝' : post.cover === 'teal' ? '🧸' : '🏠'}
                </span>
              </div>
              <div className="blogCard__body">
                <div className="blogCard__meta">
                  <span className="blogCard__category">{post.category}</span>
                  <span className="blogCard__time">{post.readTime}</span>
                </div>
                <h3 className="blogCard__title">{post.title}</h3>
                <p className="blogCard__excerpt">{post.excerpt}</p>
                <span className="blogCard__link">
                  Continue reading
                  <span aria-hidden> →</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="platformSection" aria-labelledby="amazon-heading">
        <div className="platformSection__head">
          <h2 id="amazon-heading" className="platformSection__title">
            Example Amazon picks
          </h2>
          <p className="muted platformSection__subtitle">
            Replace these with your Amazon Associates links once you have your affiliate ID.
          </p>
        </div>
        <div className="blogGrid">
          {AMAZON_IDEA_LINKS.map((item) => (
            <a
              key={item.title}
              className={`blogCard blogCard--compact blogCard--${item.cover}`}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="blogCard__cover blogCard__cover--compact">
                <span className="blogCard__badge">Shop</span>
              </div>
              <div className="blogCard__body">
                <h3 className="blogCard__title">{item.title}</h3>
                <p className="blogCard__excerpt">
                  Search results page (swap to your exact product links).
                </p>
                <span className="blogCard__link">
                  View on Amazon
                  <span aria-hidden> →</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
