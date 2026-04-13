import { useCallback, useEffect, useState } from 'react';

/**
 * Reads rhyme text aloud using the browser’s built-in voice (Web Speech API).
 * Works on many phones and desktops after a tap (required on iOS Safari).
 */
export function useRhymeNarration(title, verses) {
  const [narrationPlaying, setNarrationPlaying] = useState(false);
  const [narrationError, setNarrationError] = useState(false);

  const pickVoice = useCallback(() => {
    const list = typeof window !== 'undefined' ? window.speechSynthesis?.getVoices() || [] : [];
    const nice =
      list.find(
        (v) =>
          v.lang.startsWith('en') &&
          (/Google US English/i.test(v.name) ||
            /Samantha|Victoria|Fiona|Karen|Moira|Tessa|Allison/i.test(v.name))
      ) || list.find((v) => v.lang.startsWith('en'));
    return nice || null;
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return undefined;
    const warmUp = () => window.speechSynthesis.getVoices();
    warmUp();
    window.speechSynthesis.addEventListener('voiceschanged', warmUp);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', warmUp);
  }, []);

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setNarrationPlaying(false);
  }, []);

  const speak = useCallback(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setNarrationError(true);
      return;
    }
    setNarrationError(false);
    window.speechSynthesis.cancel();

    const text = [title, ...verses].join('. ');
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.82;
    utter.pitch = 1.05;
    const voice = pickVoice();
    if (voice) utter.voice = voice;

    utter.onstart = () => setNarrationPlaying(true);
    utter.onend = () => setNarrationPlaying(false);
    utter.onerror = () => {
      setNarrationPlaying(false);
      setNarrationError(true);
    };

    window.speechSynthesis.speak(utter);
  }, [pickVoice, title, verses]);

  const replay = useCallback(() => {
    stop();
    window.setTimeout(speak, 120);
  }, [speak, stop]);

  useEffect(() => () => stop(), [stop]);

  return { narrationPlaying, narrationError, speak, stop, replay };
}
