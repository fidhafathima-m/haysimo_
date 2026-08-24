import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Droplets, MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { images, contact } from '../data/site';
import ImageWithFallback from './ImageWithFallback';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative bg-horizon-900 text-foam/85 overflow-hidden">
      {/* ambient droplets */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute -top-10 left-10 w-72 h-72 rounded-full bg-sky blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="relative container-px mx-auto max-w-7xl pt-16 pb-8">
        <div className="grid md:grid-cols-[1.3fr_1fr_1.2fr] gap-12">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5">
              <ImageWithFallback
                src={images.logo}
                alt="Haysimo Water"
                className="h-9 w-auto brightness-0 invert opacity-90"
                imgClassName="h-9 w-auto object-contain"
                label="Haysimo"
              />
              <span className="font-display font-semibold text-lg text-foam">Haysimo</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-foam/60 max-w-sm">
              Proudly sourced from the heart of Somalia, Haysimo delivers pure, mineral-rich
              hydration you can trust. Experience nature's freshness in every drop.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5 text-foam/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-sky-light" />
                <span>{contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-foam/70">
                <Phone className="w-4 h-4 shrink-0 text-sky-light" />
                <span>{contact.phones.join(' · ')}</span>
              </div>
              <div className="flex items-center gap-2.5 text-foam/70">
                <Mail className="w-4 h-4 shrink-0 text-sky-light" />
                <a href={`mailto:${contact.email}`} className="hover:text-gold-light transition-colors">
                  {contact.email}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-foam font-medium text-base mb-4">Useful Links</h4>
            <ul className="space-y-2.5 text-sm text-foam/65">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Haysimo' },
                { to: '/products', label: 'Our Products' },
                { to: '/contact', label: 'Contact Us' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-gold-light transition-colors inline-flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-sky-light/60 group-hover:bg-gold-light transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-foam font-medium text-base mb-2">Subscribe to Haysimo!</h4>
            <p className="text-sm text-foam/60 mb-4">
              Don't miss our new launches — get subscribed today.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex items-center gap-2 bg-foam/10 border border-foam/15 rounded-full pl-4 pr-1.5 py-1.5 focus-within:border-sky-light/60 transition-colors">
                <Droplets className="w-4 h-4 text-sky-light shrink-0" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="bg-transparent flex-1 min-w-0 text-sm placeholder:text-foam/40 focus:outline-none py-1.5"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="shrink-0 grid place-items-center w-9 h-9 rounded-full bg-gold text-horizon-900 hover:bg-gold-light transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <motion.div
                initial={false}
                animate={{ opacity: subscribed ? 1 : 0, y: subscribed ? 0 : -6 }}
                className="absolute left-1 top-full mt-2 flex items-center gap-1.5 text-xs text-gold-light"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                Thanks for subscribing!
              </motion.div>
            </form>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-foam/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foam/45">
          <p>© {new Date().getFullYear()} Haysimo Water. All Rights Reserved.</p>
          <p>Crafted with care for a healthier Somalia.</p>
        </div>
      </div>
    </footer>
  );
}
