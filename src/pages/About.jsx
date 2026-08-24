import { useState } from 'react';
import { Play, Award, Users, Target } from 'lucide-react';
import PageHero from '../components/PageHero';
import ProcessSteps from '../components/ProcessSteps';
import Features from '../components/Features';
import CtaBanner from '../components/CtaBanner';
import Reveal from '../components/Reveal';
import ImageWithFallback from '../components/ImageWithFallback';
import { images } from '../data/site';

function AboutVideo() {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-soft">
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
    <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-soft bg-horizon-900 group">
      <video
        className="w-full h-full object-cover"
        controls
        playsInline
        preload="metadata"
        poster={images.processMain}
        onError={() => setErrored(true)}
      >
        <source src={images.aboutVideo} type="video/mp4" />
      </video>
      <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold text-horizon-700 pointer-events-none">
        <Play className="w-3 h-3 fill-horizon-700" /> Inside Haysimo
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
              Haysimo Water Plant is committed to transforming Somalia's beverage sector by
              providing the nation with high-quality, natural mineral water. Led by industry
              veterans with a combined 35 years of entrepreneurial experience, this initiative
              seeks to alleviate the critical shortage of clean drinking water in Somalia by
              meeting the region's increasing demand.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-5">
              {[
                { icon: Award, label: '35+ Years', sub: 'Combined experience' },
                { icon: Users, label: 'Local Jobs', sub: 'Somali workforce' },
                { icon: Target, label: 'One Mission', sub: 'Clean water for all' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-mist/70 border border-horizon-100 p-5">
                  <item.icon className="w-5 h-5 text-horizon-600 mb-3" strokeWidth={1.75} />
                  <p className="font-display font-semibold text-ink">{item.label}</p>
                  <p className="text-xs text-ink/50 mt-0.5">{item.sub}</p>
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

      <Features
        eyebrow="Our Promise"
        title="What makes Haysimo different"
      />

      <CtaBanner />
    </>
  );
}
