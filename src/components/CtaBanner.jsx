import { Link } from 'react-router-dom';
import { ArrowRight, Droplets } from 'lucide-react';
import Reveal from './Reveal';
import ImageWithFallback from './ImageWithFallback';
import { images } from '../data/site';

export default function CtaBanner() {
  return (
    <section className="relative py-24 sm:py-28 bg-horizon-900 overflow-hidden">
      {/* ambient background drips */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 -translate-y-1/2 -left-24 w-96 h-96 rounded-full bg-sky/20 blur-3xl animate-drift" />
        <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-gold/10 blur-3xl animate-drift" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative container-px mx-auto max-w-7xl grid md:grid-cols-[1fr_auto] items-center gap-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-gold-light text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <Droplets className="w-3.5 h-3.5" /> Stay in touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-foam text-balance leading-tight">
            Connect With Us <span className="text-gold-light">Now!</span>
          </h2>
          <p className="mt-4 text-foam/65 max-w-xl leading-relaxed">
            Proudly sourced from the heart of Somalia, Haysimo delivers pure, mineral-rich
            hydration you can trust. Experience nature's freshness in every drop — stay connected
            with us for updates, products, and more.
          </p>
        </Reveal>

        <Reveal direction="left" delay={0.15} className="flex flex-col items-start md:items-end gap-6">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gold text-horizon-900 px-7 py-4 font-semibold shadow-soft hover:bg-gold-light transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Connect Here
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <ImageWithFallback
            src={images.bottleTransparent}
            alt="Haysimo bottled water"
            className="hidden md:block w-28 h-40 animate-bob"
            imgClassName="w-full h-full object-contain drop-shadow-2xl"
            label="Haysimo Bottle"
          />
        </Reveal>
      </div>
    </section>
  );
}
