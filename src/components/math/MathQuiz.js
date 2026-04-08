import { useCallback, useState } from 'react';

const OPS = [
  { symbol: '+', name: 'add', fn: (a, b) => a + b },
  { symbol: '−', name: 'subtract', fn: (a, b) => a - b },
  { symbol: '×', name: 'multiply', fn: (a, b) => a * b },
];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function makeOptions(correct) {
  const pool = new Set([correct]);
  let guard = 0;
  while (pool.size < 4 && guard < 80) {
    guard += 1;
    const wrong = correct + randomInt(-12, 12);
    if (wrong >= 0 && wrong !== correct) pool.add(wrong);
  }
  let extra = 1;
  while (pool.size < 4) {
    pool.add(correct + extra);
    extra += 1;
  }
  return shuffle([...pool]).slice(0, 4);
}

function newQuestion() {
  const op = OPS[randomInt(0, OPS.length - 1)];
  let a;
  let b;
  if (op.name === 'subtract') {
    a = randomInt(4, 18);
    b = randomInt(1, a - 1);
  } else if (op.name === 'multiply') {
    a = randomInt(2, 9);
    b = randomInt(2, 9);
  } else {
    a = randomInt(3, 12);
    b = randomInt(3, 12);
  }
  const answer = op.fn(a, b);
  return {
    text: `${a} ${op.symbol} ${b}`,
    answer,
    options: makeOptions(answer),
  };
}

const ROUND_SIZE = 10;

export function MathQuiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(() => newQuestion());
  const [feedback, setFeedback] = useState(null);
  const [locked, setLocked] = useState(false);

  const finished = questionIndex >= ROUND_SIZE;
  const displayNum = Math.min(questionIndex + 1, ROUND_SIZE);

  const startFresh = useCallback(() => {
    setQuestionIndex(0);
    setScore(0);
    setQuestion(newQuestion());
    setFeedback(null);
    setLocked(false);
  }, []);

  const goNext = useCallback(() => {
    setFeedback(null);
    setLocked(false);
    setQuestionIndex((i) => {
      const next = i + 1;
      if (next < ROUND_SIZE) setQuestion(newQuestion());
      return next;
    });
  }, []);

  function onPick(choice) {
    if (locked || finished) return;
    setLocked(true);
    const correct = choice === question.answer;
    setFeedback(correct ? 'correct' : 'wrong');
    if (correct) setScore((s) => s + 1);
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-6 rounded-kid-lg border-2 border-white bg-white/95 p-5 shadow-soft sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-wide text-slate-600">
              Question {finished ? ROUND_SIZE : displayNum} of {ROUND_SIZE}
            </p>
            <p className="font-display mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
              Score: {score}
              {!finished && (
                <span className="text-lg font-extrabold text-slate-500 sm:text-xl">
                  {' '}
                  / {ROUND_SIZE} stars to collect
                </span>
              )}
            </p>
          </div>
          <button
            type="button"
            onClick={startFresh}
            className="tap-target rounded-kid border-2 border-slate-200 bg-slate-50 px-5 py-3 text-sm font-extrabold text-slate-800 transition hover:bg-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-slate-400"
          >
            Restart quiz 🔁
          </button>
        </div>

        {!finished && (
          <>
            <div className="mt-6 rounded-kid bg-gradient-to-br from-sky-100 via-white to-amber-50 p-6 text-center shadow-inner">
              <p className="text-sm font-extrabold text-slate-600">Solve this one:</p>
              <p className="font-display mt-2 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                {question.text}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              {question.options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  disabled={locked}
                  onClick={() => onPick(opt)}
                  className="tap-target rounded-kid-lg bg-gradient-to-br from-indigo-500 to-violet-600 py-5 text-2xl font-extrabold text-white shadow-md transition hover:brightness-110 disabled:opacity-70 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        )}

        {feedback === 'correct' && !finished && (
          <div className="mt-4 animate-pop rounded-kid bg-emerald-100 px-4 py-3 text-center text-lg font-extrabold text-emerald-900">
            Sparkly correct! 🌟
          </div>
        )}
        {feedback === 'wrong' && !finished && (
          <div className="mt-4 animate-pop rounded-kid bg-rose-100 px-4 py-3 text-center text-lg font-extrabold text-rose-900">
            Oops! The answer was {question.answer}. You’ve got this! 💪
          </div>
        )}

        {!finished && feedback && (
          <button
            type="button"
            onClick={goNext}
            className="tap-target mt-5 w-full rounded-kid bg-slate-900 py-4 text-lg font-extrabold text-white shadow-md transition hover:brightness-110 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            Next question ➡️
          </button>
        )}

        {finished && (
          <div className="mt-6 animate-pop rounded-kid-lg border-2 border-amber-200 bg-gradient-to-br from-amber-100 via-white to-sky-100 p-6 text-center">
            <p className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              Quiz complete! You scored {score} out of {ROUND_SIZE}! 🎉
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-600">
              Want to try for a perfect score?
            </p>
            <button
              type="button"
              onClick={startFresh}
              className="tap-target mt-5 w-full rounded-kid bg-gradient-to-r from-pink-500 to-orange-400 py-4 text-lg font-extrabold text-white shadow-md transition hover:brightness-110 focus-visible:outline focus-visible:outline-4 focus-visible:outline-pink-500"
            >
              Play again 🚀
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
