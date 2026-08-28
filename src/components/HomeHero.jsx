
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Volume2,
  VolumeX,
} from "lucide-react";
import heroVideo from "../assets/heroVideo.mp4";

export default function HomeHero() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section className="relative h-[100vh] min-h-[560px] mb-[50px] w-full overflow-hidden bg-horizon-950">
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-horizon-950/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-horizon-950/30 via-transparent to-horizon-950/60" />

      {/* Mute / unmute */}
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 grid place-items-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-foam hover:bg-white/25 transition-colors"
      >
        {muted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </button>

      {/* Centered content */}
      <div className="relative z-10 h-full container-px mx-auto max-w-7xl flex items-center justify-center">
        <div className="max-w-4xl text-center">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-foam leading-[1.05] text-balance"
          >
            The purity of nature,{" "}
            <span className="text-sky-light">bottled</span> with{" "}
            <span className="relative inline-block text-gold-light">
              Somali pride
              <svg
                className="absolute left-0 -bottom-2 w-full h-3 text-gold"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C40 2 160 2 198 9"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-7 mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-foam/85 leading-relaxed"
          >
            Drawn from deep underground sources in Bosaso and bottled with care,
            Haysimo Water brings mineral-rich hydration to every home —
            pure, trusted, and proudly Somali.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-9 flex flex-wrap justify-center items-center gap-4"
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
              className="inline-flex items-center gap-2 rounded-full border border-white/30 text-foam px-7 py-4 font-semibold hover:bg-white/10 backdrop-blur-sm transition-colors duration-300"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
