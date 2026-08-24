import { useState } from 'react';
import PageHero from '../components/PageHero';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import Features from '../components/Features';
import CtaBanner from '../components/CtaBanner';
import Reveal from '../components/Reveal';
import ImageWithFallback from '../components/ImageWithFallback';
import { products, images } from '../data/site';

export default function Products() {
  const [active, setActive] = useState(null);

  return (
    <>
      <PageHero
        breadcrumb="Home / Products"
        eyebrow="Bottled Water"
        title="A pack for every table"
        subtitle="From family-sized bottles to grab-and-go packs — every drop is naturally sourced and proudly Somali."
      />

      <section className="relative py-20 sm:py-28 bg-foam">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal className="max-w-xl mb-14">
            <span className="text-horizon-500 text-xs font-semibold tracking-[0.2em] uppercase">
              Our Range
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-ink text-balance">
              Choose your Haysimo
            </h2>
            <p className="mt-3 text-ink/60 text-sm">Tap any pack to see full details.</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} onClick={() => setActive(p)} />
            ))}
          </div>
        </div>
      </section>

      <Features
        eyebrow="Every Bottle Promises"
        title="Quality that never wavers"
      />

      {/* Gallery / best seller strip */}
      <section className="relative py-20 sm:py-28 bg-mist/50">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-center">
          <Reveal direction="right" className="rounded-[2rem] overflow-hidden shadow-soft aspect-[16/10]">
            <ImageWithFallback
              src={images.bestSeller}
              alt="Haysimo best seller pack"
              className="w-full h-full"
              imgClassName="w-full h-full object-cover"
              label="Best Seller"
            />
          </Reveal>
          <Reveal>
            <span className="text-horizon-500 text-xs font-semibold tracking-[0.2em] uppercase">
              Fan Favorite
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-ink text-balance">
              Loved across households in Puntland
            </h2>
            <p className="mt-5 text-ink/60 leading-relaxed">
              Our combo and family packs are the most requested by retailers and households alike
              — a balance of everyday convenience and dependable, mineral-rich hydration for the
              whole family.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner />

      <ProductModal product={active} onClose={() => setActive(null)} />
    </>
  );
}
