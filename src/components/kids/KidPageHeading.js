/**
 * Big, colourful page titles for kids.
 * Uses a gradient “rainbow” text look plus a gentle entrance animation.
 */

export function KidPageHeading({ children, as: Tag = 'h1', id, className = '' }) {
  return (
    <Tag
      id={id}
      className={[
        'font-comic text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl',
        'bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent',
        'drop-shadow-sm motion-safe:animate-kid-heading-enter',
        className,
      ].join(' ')}
    >
      {children}
    </Tag>
  );
}

export function KidSectionHeading({ children, id, className = '' }) {
  return (
    <h2
      id={id}
      className={[
        'font-comic text-2xl font-extrabold text-slate-900 sm:text-3xl',
        'motion-safe:animate-kid-fade-in',
        className,
      ].join(' ')}
    >
      <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
        {children}
      </span>
    </h2>
  );
}
