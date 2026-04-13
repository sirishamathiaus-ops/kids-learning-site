import { BackHomeLink } from '../components/kids/BackHomeLink';
import { KidPageHeading } from '../components/kids/KidPageHeading';
import { PageBackdrop } from '../components/layout/PageBackdrop';
import { AffiliateProductCard } from '../components/shop/AffiliateProductCard';
import { PAGE_BACKGROUNDS } from '../data/pageBackgrounds';
import { SHOP_PRODUCTS } from '../data/shopProducts';

export function ShopPage() {
  return (
    <PageBackdrop
      imageUrl={PAGE_BACKGROUNDS.shop}
      overlayClassName="bg-gradient-to-b from-orange-50/93 via-white/92 to-pink-50/90 backdrop-blur-[2px]"
    >
      <div className="pb-16 pt-6 sm:pb-20 sm:pt-8">
        <div className="mb-8">
          <BackHomeLink />
          <div className="mt-5">
            <KidPageHeading>
              <span aria-hidden>🛒 </span>
              Fun finds shop
            </KidPageHeading>
          </div>
          <p className="font-comic mt-4 max-w-2xl text-lg font-semibold leading-relaxed text-slate-800 sm:text-xl">
            Cheerful picks with photos, prices, and buttons that open trusted shops in a new tab. 
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SHOP_PRODUCTS.map((product) => (
            <AffiliateProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </PageBackdrop>
  );
}
