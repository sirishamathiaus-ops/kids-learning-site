export function AffiliateProductCard({ product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-kid-lg border-2 border-white bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
       
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <h2 className="font-display text-lg font-bold text-slate-900 sm:text-xl">{product.title}</h2>
        <div className="mt-auto pt-2">
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex w-full items-center justify-center gap-2 rounded-kid bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 px-4 py-4 text-center text-lg font-extrabold text-slate-900 shadow-md transition hover:brightness-110 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
          >
            View deal
            <span aria-hidden>🛒</span>
          </a>
         
        </div>
      </div>
    </article>
  );
}
