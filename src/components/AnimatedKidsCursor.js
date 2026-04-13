import { useCallback, useEffect, useRef, useState } from 'react';
import './AnimatedKidsCursor.css';

/**
 * Custom animated cursor for a kids learning site.
 *
 * - Small glowing dot follows the mouse exactly.
 * - A larger ring follows with a smooth delay (lerp).
 * - Click plays a short bounce animation.
 *
 * Only runs on devices with a fine pointer (mouse / trackpad), not phones.
 * Respects "prefers-reduced-motion".
 */

function useFinePointer() {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    const update = () => setOk(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return ok;
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return reduced;
}

export function AnimatedKidsCursor() {
  const finePointer = useFinePointer();
  const reducedMotion = useReducedMotion();

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rootRef = useRef(null);

  const targetX = useRef(0);
  const targetY = useRef(0);
  const ringX = useRef(0);
  const ringY = useRef(0);
  const hoveringRef = useRef(false);
  const hasMovedRef = useRef(false);

  const rafRef = useRef(null);
  const [clicking, setClicking] = useState(false);

  const moveDot = useCallback(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    dot.style.left = `${targetX.current}px`;
    dot.style.top = `${targetY.current}px`;

    const ease = 0.12;
    ringX.current += (targetX.current - ringX.current) * ease;
    ringY.current += (targetY.current - ringY.current) * ease;

    ring.style.left = `${ringX.current}px`;
    ring.style.top = `${ringY.current}px`;

    rafRef.current = requestAnimationFrame(moveDot);
  }, []);

 useEffect(() => {
  if (!finePointer || reducedMotion) return;

  const root = rootRef.current; // ✅ FIX: lock reference

  const onMove = (e) => {
    targetX.current = e.clientX;
    targetY.current = e.clientY;

    if (!hasMovedRef.current) {
      hasMovedRef.current = true;
      ringX.current = e.clientX;
      ringY.current = e.clientY;

      root?.classList.add("kids-cursor--visible");
    }

    const overInteractive = !!e.target.closest(
      "a, button, [role='button'], input, textarea, select, label"
    );

    if (overInteractive !== hoveringRef.current) {
      hoveringRef.current = overInteractive;
      root?.classList.toggle("kids-cursor--hover", overInteractive);
    }
  };

  const onDown = () => setClicking(true);
  const onUp = () => setClicking(false);

  window.addEventListener("mousemove", onMove);
  window.addEventListener("mousedown", onDown);
  window.addEventListener("mouseup", onUp);

  document.body.classList.add("kids-cursor-on");

  rafRef.current = requestAnimationFrame(moveDot);

  return () => {
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mousedown", onDown);
    window.removeEventListener("mouseup", onUp);

    document.body.classList.remove("kids-cursor-on");

    hasMovedRef.current = false;

    root?.classList.remove("kids-cursor--visible", "kids-cursor--hover"); // ✅ FIXED

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  };
}, [finePointer, reducedMotion, moveDot]);

  return (
    <div
      ref={rootRef}
      className={['kids-cursor', clicking ? 'kids-cursor--click' : ''].filter(Boolean).join(' ')}
      aria-hidden
    >
      <div ref={ringRef} className="kids-cursor__ring" />
      <div ref={dotRef} className="kids-cursor__dot" />
    </div>
  );
}
