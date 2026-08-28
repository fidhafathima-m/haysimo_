
import { useState } from "react";
import { FileText, Eye, ShieldCheck, X } from "lucide-react";
import Reveal from "./Reveal";
import { certificates } from "../data/site";

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const closeModal = () => {
    setSelectedCertificate(null);
  };

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
            Every batch of Haysimo Water is tested and approved to meet national
            quality and safety standards.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 0.1}>
              <div className="group h-full rounded-3xl bg-mist/60 border border-horizon-100 p-7 hover:bg-white hover:shadow-card transition-all duration-500 flex flex-col">

                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-horizon-600 grid place-items-center shrink-0 shadow-sm">
                    <FileText
                      className="w-5 h-5 text-foam"
                      strokeWidth={1.75}
                    />
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-horizon-500 bg-horizon-50 px-2.5 py-1 rounded-full">
                    <ShieldCheck className="w-3 h-3" />
                    {cert.year}
                  </span>
                </div>

                {/* Certificate information */}
                <h3 className="font-display text-lg font-medium text-ink mb-1">
                  {cert.title}
                </h3>

                <p className="text-sm text-ink/55 mb-6">
                  {cert.issuer}
                </p>

                {/* View button */}
                <div className="mt-auto pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(cert)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-horizon-600 hover:text-horizon-700 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    View Certificate
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={selectedCertificate.title}
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close certificate viewer"
            onClick={closeModal}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-default"
          />

          {/* Modal */}
          <div className="relative z-10 w-full max-w-5xl h-[90vh] bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col">

            {/* Modal header */}
            <div className="shrink-0 flex items-center justify-between gap-4 px-4 sm:px-6 py-3 border-b border-horizon-100 bg-white">
              <div className="min-w-0">
                <h3 className="font-display text-base sm:text-lg font-semibold text-ink truncate">
                  {selectedCertificate.title}
                </h3>

                <p className="text-xs sm:text-sm text-ink/50 truncate">
                  {selectedCertificate.issuer}
                </p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="shrink-0 w-9 h-9 rounded-full grid place-items-center text-ink/60 hover:text-ink hover:bg-mist transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate viewer */}
            <div className="flex-1 min-h-0 bg-horizon-100">
              <iframe
                src={`${selectedCertificate.file}#toolbar=0&navpanes=0&scrollbar=1`}
                title={selectedCertificate.title}
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
