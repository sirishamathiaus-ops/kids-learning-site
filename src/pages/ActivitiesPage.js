const ACTIVITY_BLOCKS = [
  {
    id: 'creative',
    colorClass: 'purple',
    title: 'Creative Activities',
    items: [
      {
        title: 'Drawing',
        text: 'Simple prompts, tracing, and free drawing for fine motor skills.',
        imgAlt: 'Drawing activity',
        imgSrc: `${process.env.PUBLIC_URL}/activity-drawing.svg`,
      },
      {
        title: 'Painting',
        text: 'Washable paints and brushes for color mixing and creativity.',
        imgAlt: 'Painting activity',
        imgSrc: `${process.env.PUBLIC_URL}/activity-painting.svg`,
      },
      {
        title: 'Crafts',
        text: 'Cut, glue, and build—great for focus and imagination.',
        imgAlt: 'Craft activity',
        imgSrc: `${process.env.PUBLIC_URL}/activity-crafts.svg`,
      },
    ],
  },
  {
    id: 'reading',
    colorClass: 'blue',
    title: 'Reading Activities',
    items: [
      {
        title: 'Story books',
        text: 'Read-aloud time builds vocabulary and attention.',
        imgAlt: 'Story books',
        imgSrc: `${process.env.PUBLIC_URL}/activity-storybooks.svg`,
      },
      {
        title: 'Alphabet learning',
        text: 'Letter sounds, tracing, and quick games for early literacy.',
        imgAlt: 'Alphabet learning',
        imgSrc: `${process.env.PUBLIC_URL}/activity-alphabet.svg`,
      },
    ],
  },
  {
    id: 'puzzles',
    colorClass: 'green',
    title: 'Puzzle Games',
    items: [
      {
        title: 'Matching games',
        text: 'Sort shapes, colors, and pictures to build logic.',
        imgAlt: 'Matching game',
        imgSrc: `${process.env.PUBLIC_URL}/activity-matching.svg`,
      },
      {
        title: 'Memory games',
        text: 'Flip-and-find games for attention and recall.',
        imgAlt: 'Memory game',
        imgSrc: `${process.env.PUBLIC_URL}/activity-memory.svg`,
      },
    ],
  },
  {
    id: 'games',
    colorClass: 'yellow',
    title: 'Fun Games',
    items: [
      {
        title: 'Outdoor play',
        text: 'Movement games that build coordination and confidence.',
        imgAlt: 'Outdoor play',
        imgSrc: `${process.env.PUBLIC_URL}/activity-outdoor.svg`,
      },
      {
        title: 'Indoor games',
        text: 'Rainy-day fun that still teaches turn-taking and focus.',
        imgAlt: 'Indoor games',
        imgSrc: `${process.env.PUBLIC_URL}/activity-indoor.svg`,
      },
    ],
  },
];

function ActivityCard({ title, text, imgAlt, imgSrc }) {
  return (
    <article className="card activityCard card--static">
      <div className="activityMedia">
        <img className="activityImg" alt={imgAlt} src={imgSrc} loading="lazy" />
      </div>
      <div className="activityBody">
        <h3 className="activityTitle">{title}</h3>
        <p className="activityText">{text}</p>
        <p className="activityProductNote">Product links coming soon</p>
      </div>
    </article>
  );
}

export function ActivitiesPage() {
  return (
    <div className="stack">
      <section className="sectionHeader pageIntro">
        <h1 className="pageTitle">Activities</h1>
        <p className="muted pageLead">
          Each card includes a picture and a short idea you can try at home.
        </p>
      </section>

      {ACTIVITY_BLOCKS.map((block) => (
        <section
          key={block.id}
          id={block.id}
          className={`section section--lift activitySection ${block.colorClass}`}
          aria-labelledby={`${block.id}-title`}
        >
          <div className="sectionHeader">
            <h2 id={`${block.id}-title`} className="sectionTitle">
              {block.title}
            </h2>
          </div>

          <div className="grid3">
            {block.items.map((item) => (
              <ActivityCard key={item.title} {...item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

