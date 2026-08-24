import Reveal from './Reveal';
import { stats } from '../data/site';

export default function StatsBar() {
  return (
    <section className="relative -mt-12 sm:-mt-16 z-10">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-3xl bg-white shadow-soft border border-horizon-100 grid grid-cols-2 sm:grid-cols-4 divide-x divide-horizon-100">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-8 sm:py-10 text-center">
                <p className="font-display text-3xl sm:text-4xl font-semibold text-horizon-600">{s.value}</p>
                <p className="mt-1.5 text-[11px] sm:text-xs text-ink/55 leading-snug px-2">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
