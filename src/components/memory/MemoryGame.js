import { useCallback, useEffect, useMemo, useState } from 'react';

const EMOJI_CHOICES = ['🐶', '🐱', '🦊', '🐼', '🐸', '🦁', '🐵', '🦋', '🐰', '🐻', '🐯', '🦄'];

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildDeck(pairCount = 8) {
  const picked = shuffleArray(EMOJI_CHOICES).slice(0, pairCount);
  const doubled = picked.flatMap((emoji, pairIndex) => [
    { id: `${pairIndex}-a`, emoji, pairKey: String(pairIndex) },
    { id: `${pairIndex}-b`, emoji, pairKey: String(pairIndex) },
  ]);
  return shuffleArray(doubled);
}

export function MemoryGame({ pairCount = 8 }) {
  const [cards, setCards] = useState(() => buildDeck(pairCount));
  const [flippedIds, setFlippedIds] = useState([]);
  const [matchedKeys, setMatchedKeys] = useState(() => new Set());
  const [moves, setMoves] = useState(0);
  const [lock, setLock] = useState(false);

  const matchedPairs = matchedKeys.size;
  const totalPairs = pairCount;
  const gameWon = matchedPairs >= totalPairs;

  const resetGame = useCallback(() => {
    setCards(buildDeck(pairCount));
    setFlippedIds([]);
    setMatchedKeys(new Set());
    setMoves(0);
    setLock(false);
  }, [pairCount]);

  useEffect(() => {
    if (flippedIds.length < 2) return undefined;

    const [firstId, secondId] = flippedIds;
    const a = cards.find((c) => c.id === firstId);
    const b = cards.find((c) => c.id === secondId);
    if (!a || !b) return undefined;

    setMoves((m) => m + 1);

    if (a.pairKey === b.pairKey) {
      setMatchedKeys((prev) => new Set(prev).add(a.pairKey));
      setFlippedIds([]);
      return undefined;
    }

    setLock(true);
    const t = setTimeout(() => {
      setFlippedIds([]);
      setLock(false);
    }, 700);
    return () => clearTimeout(t);
  }, [flippedIds, cards]);

  function onCardClick(card) {
    if (lock || matchedKeys.has(card.pairKey)) return;
    if (flippedIds.includes(card.id)) return;
    if (flippedIds.length >= 2) return;

    setFlippedIds((prev) => [...prev, card.id]);
  }

  const gridClass = useMemo(() => {
    if (pairCount <= 6) return 'grid-cols-3 sm:grid-cols-4';
    return 'grid-cols-3 sm:grid-cols-4 lg:grid-cols-4';
  }, [pairCount]);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6 flex flex-col items-stretch justify-between gap-4 rounded-kid-lg border-2 border-white bg-white/90 p-4 shadow-soft sm:flex-row sm:items-center sm:p-5">
        <div className="flex flex-wrap items-center gap-3 text-slate-900">
          <span className="rounded-2xl bg-kid-sun/40 px-4 py-2 text-sm font-extrabold">
            ⭐ Pairs: {matchedPairs}/{totalPairs}
          </span>
          <span className="rounded-2xl bg-sky-100 px-4 py-2 text-sm font-extrabold">🎯 Moves: {moves}</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={resetGame}
            className="tap-target rounded-kid bg-slate-900 px-6 py-3 text-base font-extrabold text-white shadow-md transition hover:brightness-110 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            New game 🔄
          </button>
        </div>
      </div>

      {gameWon && (
        <div className="mb-6 animate-pop rounded-kid-lg border-2 border-emerald-200 bg-gradient-to-r from-emerald-100 via-kid-mint/50 to-sky-100 p-4 text-center shadow-soft">
          <p className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
            You matched every pair! Amazing work! 🏆✨
          </p>
        </div>
      )}

      <div className={`grid gap-3 sm:gap-4 ${gridClass}`}>
        {cards.map((card) => {
          const isFlipped = flippedIds.includes(card.id) || matchedKeys.has(card.pairKey);
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => onCardClick(card)}
              disabled={lock && !isFlipped}
              className={[
                'relative aspect-square rounded-kid-lg focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-indigo-400',
                'perspective-[1000px] tap-target',
              ].join(' ')}
              aria-label={isFlipped ? `Matched or showing ${card.emoji}` : 'Hidden card — tap to flip'}
            >
              <span
                className={[
                  'absolute inset-0 flex items-center justify-center rounded-kid-lg border-4 text-4xl transition-all duration-500 [transform-style:preserve-3d] sm:text-5xl',
                  isFlipped ? '[transform:rotateY(180deg)]' : '',
                ].join(' ')}
              >
                <span
                  className={[
                    'absolute inset-0 flex items-center justify-center rounded-kid-lg border-4 bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-inner [backface-visibility:hidden]',
                  ].join(' ')}
                  aria-hidden
                >
                  ?
                </span>
                <span
                  className={[
                    'absolute inset-0 flex items-center justify-center rounded-kid-lg border-4 bg-gradient-to-br from-amber-200 to-pink-200 text-5xl shadow-inner [backface-visibility:hidden] [transform:rotateY(180deg)] sm:text-6xl',
                  ].join(' ')}
                  aria-hidden
                >
                  {card.emoji}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
