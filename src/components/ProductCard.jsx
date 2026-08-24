import { motion } from 'framer-motion';
import { Droplet, ArrowUpRight } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function ProductCard({ product, index = 0, onClick }) {
  const interactive = typeof onClick === 'function';
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={interactive ? (e) => (e.key === 'Enter' || e.key === ' ') && onClick() : undefined}
      className={`group relative rounded-3xl bg-white border border-horizon-100 p-6 shadow-card hover:shadow-soft transition-shadow duration-500 ${interactive ? 'cursor-pointer' : ''}`}
    >
      {product.tag && (
        <span className="absolute top-5 left-5 z-10 inline-flex items-center gap-1.5 rounded-full bg-gold/15 text-gold-dark text-[11px] font-semibold px-3 py-1 tracking-wide">
          <Droplet className="w-3 h-3" /> {product.tag}
        </span>
      )}

      <div className="relative h-52 sm:h-60 rounded-2xl bg-mist overflow-hidden">
        <ImageWithFallback
          src={product.image}
          alt={`${product.name} ${product.variant}`}
          className="w-full h-full"
          imgClassName="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
          label={`${product.name} ${product.variant}`}
        />
      </div>

      <div className="mt-6">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-xl font-medium text-ink">{product.name}</h3>
            <p className="text-sm text-horizon-600 font-medium mt-0.5">{product.variant}</p>
          </div>
          {interactive && (
            <span className="shrink-0 grid place-items-center w-8 h-8 rounded-full bg-mist text-horizon-600 group-hover:bg-horizon-600 group-hover:text-foam transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          )}
        </div>
        <p className="mt-3 text-sm text-ink/60 leading-relaxed">{product.description}</p>
      </div>
    </motion.div>
  );
}
