import { IconBlocks, IconBook, IconCards } from './icons';

const RECOMMENDATIONS = [
  {
    title: 'Learning toys',
    description: 'Hands-on toys that build early maths, logic, and fine motor skills.',
    Icon: IconBlocks,
  },
  {
    title: 'Books',
    description: 'Story books and early readers for daily reading practice.',
    Icon: IconBook,
  },
  {
    title: 'Flashcards',
    description: 'Alphabet, numbers, and sight words—great for quick practice.',
    Icon: IconCards,
  },
];

export function ProductRecommendations() {
  return (
    <section className="platformPanel productRecs" aria-labelledby="product-recs-title">
      <div className="sectionHeader sectionHeader--row">
        <div>
          <h2 id="product-recs-title" className="sectionTitle">
            Product recommendations
          </h2>
      
        </div>
      </div>

      <div className="grid3">
        {RECOMMENDATIONS.map((item) => {
          const { Icon } = item;
          return (
            <article key={item.title} className="card card--product card--static">
              <span className="cardIcon" aria-hidden>
                <Icon className="cardIconSvg" />
              </span>
              <div className="cardTitle">{item.title}</div>
              <div className="cardText">{item.description}</div>
              <div className="cardCta cardCta--muted">Links coming soon</div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
