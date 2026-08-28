import { FileText, Eye, Download, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';
import { certificates } from '../data/site';

export default function Certifications() {
  return (
    <section className="relative py-20 sm:py-28 bg-foam">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-horizon-500 text-xs font-semibold tracking-[0.2em] uppercase">
            Verified & Trusted
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-ink text-balance">
            Our certifications
          </h2>
          <p className="mt-3 text-ink/60 text-sm leading-relaxed">
            Every batch of Haysimo Water is tested and approved to meet national quality and
            safety standards.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 0.1}>
              <div className="group h-full rounded-3xl bg-mist/60 border border-horizon-100 p-7 hover:bg-white hover:shadow-card transition-all duration-500 flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-horizon-600 grid place-items-center shrink-0 shadow-sm">
                    <FileText className="w-5 h-5 text-foam" strokeWidth={1.75} />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-horizon-500 bg-horizon-50 px-2.5 py-1 rounded-full">
                    <ShieldCheck className="w-3 h-3" /> {cert.year}
                  </span>
                </div>

                <h3 className="font-display text-lg font-medium text-ink mb-1">{cert.title}</h3>
                <p className="text-sm text-ink/55 mb-6">{cert.issuer}</p>

                <div className="mt-auto flex items-center gap-3 pt-2">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-horizon-600 hover:text-horizon-700 transition-colors"
                  >
                    <Eye className="w-4 h-4" /> View
                  </a>
                  <span className="w-px h-4 bg-horizon-200" />
                  <a
                    href={cert.file}
                    download
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink/60 hover:text-ink transition-colors"
                  >
                    <Download className="w-4 h-4" /> Download
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
