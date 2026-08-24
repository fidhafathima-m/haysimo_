import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Droplets } from 'lucide-react';
import { images } from '../data/site';
import ImageWithFallback from './ImageWithFallback';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-foam/90 backdrop-blur-md shadow-card py-2' : 'py-4'
      }`}
    >
      {/* Scrim so nav text stays readable over any hero image/color, fades out once scrolled */}
      {!scrolled && (
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-horizon-950/55 via-horizon-950/15 to-transparent h-28" />
      )}

      <nav className="container-px mx-auto max-w-7xl flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className={`relative rounded-xl transition-all ${!scrolled ? 'bg-foam/90 backdrop-blur-sm p-1.5 shadow-sm' : ''}`}>
            <ImageWithFallback
              src={images.logo}
              alt="Haysimo Water"
              className="h-8 sm:h-10 w-auto shrink-0"
              imgClassName="h-8 sm:h-10 w-auto object-contain"
              label="Haysimo"
            />
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  scrolled
                    ? isActive
                      ? 'text-horizon-700'
                      : 'text-ink/70 hover:text-horizon-600'
                    : isActive
                      ? 'text-foam'
                      : 'text-foam/80 hover:text-foam'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className={`absolute inset-0 -z-10 rounded-full border ${
                        scrolled
                          ? 'bg-horizon-50 border-horizon-100'
                          : 'bg-foam/15 border-foam/25 backdrop-blur-sm'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-horizon-600 text-foam px-5 py-2.5 text-sm font-semibold shadow-soft hover:bg-horizon-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <Droplets className="w-4 h-4" />
            Get Connected
          </NavLink>
        </div>

        <button
          className={`md:hidden p-2 rounded-full transition-colors ${
            scrolled ? 'text-horizon-700 hover:bg-horizon-50' : 'text-foam hover:bg-foam/15'
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-foam/98 backdrop-blur-md border-t border-horizon-100"
          >
            <div className="container-px py-4 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-3 text-base font-medium rounded-xl transition-colors ${
                        isActive ? 'bg-horizon-50 text-horizon-700' : 'text-ink/80 hover:bg-mist'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-horizon-600 text-foam px-5 py-3 text-sm font-semibold shadow-soft"
              >
                <Droplets className="w-4 h-4" />
                Get Connected
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
