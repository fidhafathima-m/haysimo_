
import { useRef, useState } from "react";
import {
  Play,
  Pause,
  Award,
  Users,
  Target,
  Volume2,
  VolumeX,
  Maximize,
} from "lucide-react";

import PageHero from "../components/PageHero";
import ProcessSteps from "../components/ProcessSteps";
import Certifications from '../components/Certifications';
import Features from "../components/Features";
import CtaBanner from "../components/CtaBanner";
import Reveal from "../components/Reveal";
import ImageWithFallback from "../components/ImageWithFallback";

import { images } from "../data/site";
import aboutVideo from "../assets/about.mp4";
function AboutVideo() {
  const videoRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [errored, setErrored] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  /* -----------------------------
     Play / Pause
  ----------------------------- */
  const togglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      console.error("Unable to play video:", error);
    }
  };

  /* -----------------------------
     Seek
  ----------------------------- */
  const handleSeek = (event) => {
    const video = videoRef.current;

    if (!video) return;

    const value = Number(event.target.value);

    video.currentTime = value;
    setCurrentTime(value);
  };

  /* -----------------------------
     Metadata loaded
  ----------------------------- */
  const handleLoadedMetadata = () => {
    const video = videoRef.current;

    if (!video) return;

    setDuration(video.duration);
  };

  /* -----------------------------
     Time update
  ----------------------------- */
  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (!video) return;

    setCurrentTime(video.currentTime);
  };

  /* -----------------------------
     Format duration
  ----------------------------- */
  const formatTime = (time) => {
    if (!Number.isFinite(time)) {
      return "0:00";
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  /* -----------------------------
     Fallback
  ----------------------------- */
  if (errored) {
    return (
      <div className="relative aspect-[9/16] max-h-[450px] rounded-[2rem] overflow-hidden shadow-soft bg-horizon-900">
        <ImageWithFallback
          src={images.processMain}
          alt="Haysimo Water — behind the scenes"
          className="w-full h-full"
          imgClassName="w-full h-full object-cover"
          label="Behind Haysimo"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[9/16] max-h-[450px] rounded-[2rem] overflow-hidden shadow-soft bg-horizon-900 group">

      {/* --------------------------------
          Video
      -------------------------------- */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        muted
        loop
        preload="metadata"
        onError={() => setErrored(true)}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      >
        <source src={aboutVideo} type="video/mp4" />
      </video>

      {/* --------------------------------
          Overlay when paused
      -------------------------------- */}
      {!playing && (
        <div className="absolute inset-0 bg-horizon-950/20 pointer-events-none" />
      )}

      {/* --------------------------------
          Large Play Button
      -------------------------------- */}
      {!playing && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Play Haysimo behind-the-scenes video"
          className="absolute inset-0 z-20 flex items-center justify-center"
        >
          <span className="grid place-items-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 backdrop-blur-md text-horizon-700 shadow-soft transition-all duration-300 group-hover:scale-105 group-hover:bg-white">
            <Play
              className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-horizon-700"
              strokeWidth={1.5}
            />
          </span>
        </button>
      )}

      {/* --------------------------------
          Video label
      -------------------------------- */}
      <div className="absolute top-4 left-4 z-30 inline-flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold text-horizon-700 pointer-events-none">
        <Play className="w-3 h-3 fill-horizon-700" />
        Inside Haysimo
      </div>

      {/* --------------------------------
          Video Controls
      -------------------------------- */}
      <div className="absolute bottom-0 left-0 right-0 z-30 px-4 pb-4 pt-14 bg-gradient-to-t from-black/85 via-black/40 to-transparent">

        {/* Progress */}
        <input
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={currentTime}
          onChange={handleSeek}
          aria-label="Video progress"
          className="w-full h-1.5 mb-3 cursor-pointer accent-horizon-500"
        />

        {/* Controls row */}
        <div className="flex items-center gap-3 text-white">

          {/* Play / Pause */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pause video" : "Play video"}
            className="shrink-0 hover:text-sky-light transition-colors"
          >
            {playing ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current" />
            )}
          </button>

          {/* Duration */}
          <span className="text-xs font-medium tabular-nums whitespace-nowrap">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Fullscreen */}
          <button
            type="button"
            onClick={() => {
              const video = videoRef.current;

              if (!video) return;

              if (document.fullscreenElement) {
                document.exitFullscreen();
              } else if (video.requestFullscreen) {
                video.requestFullscreen();
              }
            }}
            aria-label="Fullscreen"
            className="shrink-0 hover:text-sky-light transition-colors"
          >
            <Maximize className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}



export default function About() {
  return (
    <>
      <PageHero
        breadcrumb="Home / About Us"
        eyebrow="About Haysimo"
        title="Purity, purpose, and Somali pride"
        subtitle="Haysimo Water Plant is committed to transforming Somalia's beverage sector with high-quality, natural mineral water."
      />

      {/* Intro + video */}
      <section className="relative py-20 sm:py-28 bg-foam">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">

          <Reveal direction="right">
            <AboutVideo />
          </Reveal>

          <Reveal>
            <span className="text-horizon-500 text-xs font-semibold tracking-[0.2em] uppercase">
              Our Mission
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-ink text-balance">
              Meeting Somalia's rising demand for clean water
            </h2>

            <p className="mt-5 text-ink/60 leading-relaxed">
              Haysimo Water Plant is committed to transforming Somalia's beverage
              sector by providing the nation with high-quality, natural mineral
              water. Led by industry veterans with a combined 35 years of
              entrepreneurial experience, this initiative seeks to alleviate the
              critical shortage of clean drinking water in Somalia by meeting the
              region's increasing demand.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-5">
              {[
                {
                  icon: Award,
                  label: "35+ Years",
                  sub: "Combined experience",
                },
                {
                  icon: Users,
                  label: "Local Jobs",
                  sub: "Somali workforce",
                },
                {
                  icon: Target,
                  label: "One Mission",
                  sub: "Clean water for all",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-mist/70 border border-horizon-100 p-5"
                >
                  <item.icon
                    className="w-5 h-5 text-horizon-600 mb-3"
                    strokeWidth={1.75}
                  />

                  <p className="font-display font-semibold text-ink">
                    {item.label}
                  </p>

                  <p className="text-xs text-ink/50 mt-0.5">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-20 sm:py-28 bg-mist/50">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-16">
            <span className="text-horizon-500 text-xs font-semibold tracking-[0.2em] uppercase">
              Explore Haysimo's Process
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-ink text-balance">
              From aquifer to your table
            </h2>
          </Reveal>

          <ProcessSteps />
        </div>
      </section>

       <Certifications />

      {/* Features */}
      <Features
        eyebrow="Our Promise"
        title="What makes Haysimo different"
      />

      {/* CTA */}
      <CtaBanner />
    </>
  );
}
