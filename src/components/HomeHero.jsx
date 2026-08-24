import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, ShieldCheck } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import { images } from '../data/site';

export default function HomeHero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-gradient-to-b from-horizon-50 via-foam to-foam">
      {/* dotted texture */}
      <div className="absolute inset-0 bg-wave-grid [background-size:22px_22px] opacity-40" />

      {/* ambient blurred blobs */}
      <motion.div
        className="pointer-events-none absolute top-24 -left-20 w-72 h-72 rounded-full bg-sky/25 blur-3xl"
        animate={{ y: [0, -24, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-10 right-0 w-96 h-96 rounded-full bg-gold/15 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      />

      <div className="relative container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-horizon-100 pl-2.5 pr-4 py-1.5 shadow-sm mb-6"
          >
            <span className="grid place-items-center w-6 h-6 rounded-full bg-horizon-600">
              <ShieldCheck className="w-3.5 h-3.5 text-foam" />
            </span>
            <span className="text-xs font-semibold text-horizon-700 tracking-wide">
              100% Somali &middot; Naturally Mineral-Rich
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-ink leading-[1.05] text-balance"
          >
            The purity of nature, <span className="text-horizon-600">bottled</span> with{' '}
            <span className="relative inline-block text-gold-dark">
              Somali pride
              <svg
                className="absolute left-0 -bottom-2 w-full h-3 text-gold"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M2 9C40 2 160 2 198 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 text-base sm:text-lg text-ink/60 leading-relaxed max-w-lg"
          >
            Drawn from deep underground sources in Bosaso and bottled with care, Haysimo Water
            brings mineral-rich hydration to every home — pure, trusted, and proudly Somali.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/products"
              className="group inline-flex items-center gap-2.5 rounded-full bg-horizon-600 text-foam px-7 py-4 font-semibold shadow-soft hover:bg-horizon-700 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-horizon-200 text-horizon-700 px-7 py-4 font-semibold hover:bg-horizon-50 transition-colors duration-300"
            >
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Layered hero imagery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[380px] sm:h-[460px] lg:h-[520px]"
        >
          {/* ripple rings behind bottle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-sky-light/40 animate-ripple" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-sky-light/40 animate-ripple [animation-delay:0.8s]" />

          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-horizon-100 to-sky-light/30 overflow-hidden shadow-soft">
            <ImageWithFallback
              src={images.heroCover}
              alt="Haysimo Water — refreshing mineral water"
              className="w-full h-full"
              imgClassName="w-full h-full object-cover"
              label="Haysimo Water"
            />
          </div>

          <motion.div
            className="hidden sm:block absolute -bottom-8 -left-10 w-40 h-40 rounded-3xl bg-white shadow-card overflow-hidden border-4 border-foam"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ImageWithFallback
              src={images.heroImg2}
              alt="Haysimo product detail"
              className="w-full h-full"
              imgClassName="w-full h-full object-cover"
              label="Detail"
            />
          </motion.div>

          <motion.div
            className="hidden sm:block absolute -top-6 -right-8 w-36 h-36 rounded-3xl bg-white shadow-card overflow-hidden border-4 border-foam"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <ImageWithFallback
              src={images.heroImg3}
              alt="Haysimo product detail"
              className="w-full h-full"
              imgClassName="w-full h-full object-cover"
              label="Detail"
            />
          </motion.div>

          <motion.div
            className="absolute top-1/2 -right-4 sm:-right-10 -translate-y-1/2 flex items-center gap-2 bg-white rounded-2xl shadow-card px-4 py-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-gold/15">
              <Droplets className="w-4.5 h-4.5 text-gold-dark" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink">Mineral-Rich</p>
              <p className="text-[11px] text-ink/50">Certified purity</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
