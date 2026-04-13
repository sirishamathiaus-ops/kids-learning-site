export function AffiliateProductCard({ product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-kid-lg border-2 border-white bg-white shadow-soft transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-slate-700 shadow-sm">
          Pick for play
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <h2 className="font-comic text-xl font-extrabold text-slate-900 sm:text-2xl">{product.title}</h2>
        <p className="text-2xl font-extrabold text-sky-600">{product.price}</p>
        <div className="mt-auto pt-2">
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex w-full min-h-[52px] items-center justify-center gap-2 rounded-kid-lg bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-300 px-4 py-4 text-center text-lg font-extrabold text-slate-900 shadow-md transition motion-safe:hover:scale-[1.02] motion-safe:hover:shadow-lg focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
          >
            View deal
            <span aria-hidden>🛒</span>
          </a>
        
        </div>
      </div>
    </article>
  );
}
