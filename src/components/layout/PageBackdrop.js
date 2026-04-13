/**
 * Wraps a page with a big background photo + gradient wash so text stays easy to read.
 */
export function PageBackdrop({ imageUrl, overlayClassName = '', children }) {
  const overlay =
    overlayClassName ||
    'bg-gradient-to-b from-white/93 via-amber-50/90 to-sky-50/92 backdrop-blur-[2px]';

  return (
    <div
      className="relative min-h-[60vh] w-full bg-slate-100 bg-cover bg-center bg-no-repeat motion-safe:animate-kid-fade-in"
      style={{ backgroundImage: imageUrl ? `url('${imageUrl}')` : undefined }}
    >
      <div className={`pointer-events-none absolute inset-0 ${overlay}`} aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
    </div>
  );
}
