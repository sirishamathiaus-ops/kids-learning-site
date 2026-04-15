import { useCallback, useState } from 'react';
import { BackHomeLink } from '../components/kids/BackHomeLink';
import { KidPageHeading } from '../components/kids/KidPageHeading';
import { PageBackdrop } from '../components/layout/PageBackdrop';
import { RhymeCard } from '../components/rhymes/RhymeCard';
import { PAGE_BACKGROUNDS } from '../data/pageBackgrounds';
import { NURSERY_RHYMES } from '../data/rhymes';

export function NurseryRhymesPage() {
  const [playingId, setPlayingId] = useState(null);

  const handleMusicStart = useCallback((id) => {
    setPlayingId(id);
  }, []);

  const handleMusicStop = useCallback((id) => {
    setPlayingId((current) => (current === id ? null : current));
  }, []);

  return (
    <PageBackdrop
      imageUrl={PAGE_BACKGROUNDS.rhymes}
      overlayClassName="bg-gradient-to-b from-fuchsia-50/93 via-white/92 to-indigo-50/90 backdrop-blur-[2px]"
    >
       <Helmet>
        <title>Nursery Rhymes for Kids – Sing Along Songs & Learning</title>

        <meta
          name="description"
          content="Free nursery rhymes for kids with songs, lyrics, and music. Fun learning activity for children in Australia to improve memory and language skills."
        />

        <meta property="og:title" content="Nursery Rhymes for Kids" />
        <meta property="og:description" content="Sing along nursery rhymes with music and fun learning for kids." />
        <meta property="og:url" content="https://kids-learning-site.vercel.app/rhymes" />
      </Helmet>
      
      <div className="pb-16 pt-6 sm:pb-20 sm:pt-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <BackHomeLink />
            <div className="mt-5">
              <KidPageHeading>
                <span aria-hidden>🎶 </span>
                Nursery rhymes
              </KidPageHeading>
            </div>
          
          </div>
        </div>

        <div className="mx-auto flex max-w-4xl flex-col gap-5">
          {NURSERY_RHYMES.map((rhyme) => (
            <RhymeCard
              key={rhyme.id}
              rhyme={rhyme}
              isMusicPlaying={playingId === rhyme.id}
              onMusicStart={handleMusicStart}
              onMusicStop={handleMusicStop}
            />
          ))}
        </div>
      </div>
    </PageBackdrop>
  );
}
