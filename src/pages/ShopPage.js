import { Link } from 'react-router-dom';
import { SHOP_PRODUCTS } from '../data/shopProducts';
import { AffiliateProductCard } from '../components/shop/AffiliateProductCard';

export function ShopPage() {
  return (
    <div className="pb-12 pt-4 sm:pb-16 sm:pt-6">
      <div className="mb-8">
        <Link
          to="/"
          className="text-sm font-extrabold text-indigo-700 underline decoration-2 underline-offset-4 hover:text-indigo-900"
        >
          ← Back home
        </Link>
        <h1 className="font-display mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
          <span aria-hidden>🛒</span> Fun finds shop
        </h1>
        <p className="mt-2 max-w-2xl text-sm font-semibold text-slate-700 sm:text-base">
          Cheerful picks with photos, prices, and buttons that open trusted shops in a new tab. Links may be
          affiliate links that support the site.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SHOP_PRODUCTS.map((product) => (
          <AffiliateProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
