import { motion } from 'framer-motion';
import ImageWithFallback from './ImageWithFallback';
import { images } from '../data/site';

export default function PageHero({ eyebrow, title, subtitle, breadcrumb }) {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden bg-horizon-900">
      <ImageWithFallback
        src={images.bannerMain}
        alt=""
        className="absolute inset-0 w-full h-full opacity-25"
        imgClassName="w-full h-full object-cover"
        label="Haysimo"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-horizon-950/70 via-horizon-900/85 to-horizon-900" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-10 right-1/4 w-72 h-72 rounded-full bg-sky/20 blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-1/5 w-80 h-80 rounded-full bg-gold/10 blur-3xl"
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="relative container-px mx-auto max-w-7xl text-center">
        {breadcrumb && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-foam/50 text-sm mb-4"
          >
            {breadcrumb}
          </motion.p>
        )}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="inline-block text-gold-light text-xs font-semibold tracking-[0.25em] uppercase mb-4"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-foam text-balance"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-5 text-foam/65 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
