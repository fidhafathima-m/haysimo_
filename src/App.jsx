import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import VideoLoader from './components/VideoLoader'; // Import the new component

function PageTransition({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [showVideoLoader, setShowVideoLoader] = useState(true);

  useEffect(() => {
    // Show video loader on initial load or when navigating to home
    if (location.pathname === '/') {
      setShowVideoLoader(true);
      setLoading(true);
    } else {
      setShowVideoLoader(false);
      setLoading(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
  }, [loading]);

  // Handle when video ends
  const handleVideoEnd = () => {
    setShowVideoLoader(false);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Video Loader */}
      {showVideoLoader && (
        <VideoLoader onVideoEnd={handleVideoEnd} />
      )}
      
      {/* Traditional Loader (fallback if needed) */}
      {!showVideoLoader && <Loader show={loading} />}
      
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route
            path="*"
            element={
              <PageTransition>
                <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-24">
                  <h1 className="font-display text-4xl font-semibold text-horizon-700">404</h1>
                  <p className="mt-2 text-ink/60">This page hasn't flowed here yet.</p>
                </div>
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
