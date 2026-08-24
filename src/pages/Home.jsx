import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import HomeHero from '../components/HomeHero';
import StatsBar from '../components/StatsBar';
import Features from '../components/Features';
import ProductCard from '../components/ProductCard';
import WaveDivider from '../components/WaveDivider';
import CtaBanner from '../components/CtaBanner';
import Reveal from '../components/Reveal';
import ImageWithFallback from '../components/ImageWithFallback';
import { products, images } from '../data/site';

export default function Home() {
  return (
    <>
      <HomeHero />
      <StatsBar />
      <Features />

      {/* Product showcase */}
      <section className="relative py-20 sm:py-28 bg-mist/50">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <span className="text-horizon-500 text-xs font-semibold tracking-[0.2em] uppercase">
                Explore Our Products
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-ink text-balance">
                The purity in every drop
              </h2>
            </div>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-horizon-600 font-semibold hover:text-horizon-700 transition-colors shrink-0"
            >
              View all products
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <WaveDivider colorTop="#EAF3FA" colorBottom="#FBFCFE" />

      {/* Story teaser */}
      <section className="relative py-20 sm:py-28 bg-foam">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
          <Reveal direction="right">
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-soft aspect-[4/3]">
                <ImageWithFallback
                  src={images.presentation}
                  alt="Haysimo Water production"
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover"
                  label="Our Process"
                />
              </div>
              <div className="hidden sm:flex absolute -bottom-8 -right-8 w-44 rounded-2xl bg-horizon-600 text-foam p-5 shadow-soft items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-foam/15 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </span>
                <p className="text-xs leading-snug font-medium">35+ years of combined industry experience</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <span className="text-horizon-500 text-xs font-semibold tracking-[0.2em] uppercase">
              Our Story
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-ink text-balance">
              Transforming Somalia's beverage sector, one bottle at a time
            </h2>
            <p className="mt-5 text-ink/60 leading-relaxed">
              Haysimo Water Plant is committed to providing the nation with high-quality, natural
              mineral water. Led by industry veterans with decades of entrepreneurial experience,
              we're working to close the gap in clean drinking water access across Somalia.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-horizon-600 text-foam px-6 py-3.5 font-semibold shadow-soft hover:bg-horizon-700 transition-all duration-300 hover:-translate-y-0.5"
            >
              Learn our story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
