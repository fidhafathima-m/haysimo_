import { motion, AnimatePresence } from 'framer-motion';
import { images } from '../data/site';
import ImageWithFallback from './ImageWithFallback';

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-4"
          >
            <ImageWithFallback
              src={images.logo}
              alt="Haysimo Water"
              className="h-16 sm:h-20 w-auto"
              imgClassName="h-16 sm:h-20 w-auto object-contain"
              label="Haysimo"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}