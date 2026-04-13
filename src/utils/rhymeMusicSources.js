import { RHYME_MUSIC_REMOTE_FALLBACK } from '../constants/audioFallback';

/** Builds same-origin URL for files in public/audio/rhymes/ */
export function rhymeMusicSources(musicFile) {
  const base = process.env.PUBLIC_URL || '';
  const primary = `${base}/audio/rhymes/${musicFile}`;
  return { primary, fallback: RHYME_MUSIC_REMOTE_FALLBACK };
}
