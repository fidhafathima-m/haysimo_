import { AnimatePresence, motion } from 'framer-motion';
import { X, Droplet, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageWithFallback from './ImageWithFallback';

export default function ProductModal({ product, onClose }) {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            aria-label="Close product details"
            className="absolute inset-0 bg-horizon-950/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative w-full sm:max-w-2xl bg-white rounded-t-[2rem] sm:rounded-[2rem] overflow-hidden shadow-soft max-h-[90vh] overflow-y-auto"
            initial={{ y: 60, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 grid place-items-center w-9 h-9 rounded-full bg-white/90 shadow-card text-ink/60 hover:text-ink transition-colors"
              aria-label="Close"
            >
              <X className="w-4.5 h-4.5" />
            </button>

            <div className="grid sm:grid-cols-2">
              <div className="relative h-64 sm:h-full bg-mist">
                <ImageWithFallback
                  src={product.image}
                  alt={`${product.name} ${product.variant}`}
                  className="w-full h-full"
                  imgClassName="w-full h-full object-contain p-8"
                  label={`${product.name} ${product.variant}`}
                />
              </div>
              <div className="p-8 sm:p-10 flex flex-col">
                {product.tag && (
                  <span className="inline-flex self-start items-center gap-1.5 rounded-full bg-gold/15 text-gold-dark text-[11px] font-semibold px-3 py-1 tracking-wide mb-4">
                    <Droplet className="w-3 h-3" /> {product.tag}
                  </span>
                )}
                <h3 className="font-display text-2xl font-semibold text-ink">{product.name}</h3>
                <p className="text-horizon-600 font-medium mt-1">{product.variant}</p>
                <p className="mt-4 text-sm text-ink/60 leading-relaxed">{product.description}</p>

                <ul className="mt-6 space-y-2 text-sm text-ink/70">
                  {['Naturally sourced from Bosaso aquifers', '100% Somali bottled & distributed', 'Rich in essential minerals'].map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-horizon-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  onClick={onClose}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-horizon-600 text-foam px-6 py-3.5 font-semibold hover:bg-horizon-700 transition-colors"
                >
                  Enquire about this pack
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
