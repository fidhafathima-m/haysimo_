import Reveal from './Reveal';
import { processSteps } from '../data/site';

export default function ProcessSteps() {
  return (
    <div className="relative">
      {/* connecting line */}
      <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-horizon-200 to-transparent" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {processSteps.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.12}>
            <div className="relative">
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-horizon-600 grid place-items-center shadow-soft mb-6">
                <span className="font-display text-lg font-semibold text-foam">{s.step}</span>
                <span className="absolute inset-0 rounded-2xl ring-4 ring-mist" />
              </div>
              <h3 className="font-display text-lg font-medium text-ink mb-2">{s.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{s.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
