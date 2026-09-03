import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import videoFile from '../assets/Water_bottle_loading_animation.mp4';

export default function VideoLoader({ onVideoEnd }) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Prevent body scroll while loader is visible
    document.body.style.overflow = 'hidden';
    
    // Auto-play the video
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented:', error);
      });
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleVideoEnd = () => {
    document.body.style.overflow = '';
    if (onVideoEnd) {
      onVideoEnd();
    }
  };

  const handleSkip = () => {
    document.body.style.overflow = '';
    if (onVideoEnd) {
      onVideoEnd();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] bg-black"
    >
      {/* Full screen video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        onEnded={handleVideoEnd}
        muted
        playsInline
        preload="auto"
        autoPlay
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Skip button at bottom right */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 px-6 py-2.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-sm font-medium rounded-full border border-white/20 transition-all duration-300 hover:scale-105 hover:border-white/40"
        aria-label="Skip intro"
      >
        Skip
      </button>
    </motion.div>
  );
}