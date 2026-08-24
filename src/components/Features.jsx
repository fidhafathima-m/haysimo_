import { Droplet, Flag, Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import { features } from '../data/site';

const iconMap = { droplet: Droplet, flag: Flag, sparkles: Sparkles };

export default function Features({ eyebrow = 'Why Haysimo', title = 'Purity you can feel, in every drop' }) {
  return (
    <section className="relative py-20 sm:py-28 bg-foam">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-horizon-500 text-xs font-semibold tracking-[0.2em] uppercase">{eyebrow}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-ink text-balance">
            {title}
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon] || Droplet;
            return (
              <Reveal key={f.title} delay={i * 0.12}>
                <div className="group relative h-full rounded-3xl bg-mist/60 border border-horizon-100 p-8 hover:bg-white hover:shadow-card transition-all duration-500 hover:-translate-y-1.5">
                  <div className="relative w-14 h-14 rounded-2xl bg-horizon-600 grid place-items-center mb-6 shadow-soft group-hover:bg-gold transition-colors duration-500">
                    <Icon className="w-6 h-6 text-foam" strokeWidth={1.75} />
                    <span className="absolute inset-0 rounded-2xl border border-sky-light/0 group-hover:border-sky-light/60 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700" />
                  </div>
                  <h3 className="font-display text-xl font-medium text-ink mb-2.5">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/60">{f.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
