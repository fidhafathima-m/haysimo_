import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { contact } from '../data/site';

const infoCards = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: [contact.address],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: contact.phones,
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: [contact.email],
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.firstName} ${form.lastName}`.trim());
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nCountry: ${form.country}\n\n${form.message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      <PageHero
        breadcrumb="Home / Contact"
        eyebrow="Get In Touch"
        title="Connect with us"
        subtitle="Questions about distribution, bulk orders, or partnerships? We'd love to hear from you."
      />

      {/* Info cards */}
      <section className="relative -mt-12 sm:-mt-16 z-10 pb-4">
        <div className="container-px mx-auto max-w-6xl grid sm:grid-cols-3 gap-5">
          {infoCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl bg-white shadow-soft border border-horizon-100 p-7 hover:-translate-y-1.5 transition-transform duration-500">
                <div className="w-12 h-12 rounded-xl bg-horizon-600 grid place-items-center mb-5 shadow-sm">
                  <c.icon className="w-5 h-5 text-foam" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg font-medium text-ink mb-2">{c.title}</h3>
                {c.lines.map((line) => (
                  <p key={line} className="text-sm text-ink/60 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + map */}
      <section className="relative py-20 sm:py-28 bg-foam">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
          <Reveal>
            <span className="text-horizon-500 text-xs font-semibold tracking-[0.2em] uppercase">
              Send a Message
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-ink text-balance mb-8">
              We usually reply within a day
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-semibold text-ink/60 mb-1.5 uppercase tracking-wide">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    required
                    value={form.firstName}
                    onChange={update('firstName')}
                    className="w-full rounded-xl border border-horizon-100 bg-mist/40 px-4 py-3.5 text-sm focus:outline-none focus:border-horizon-400 focus:bg-white transition-colors"
                    placeholder="Amina"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-semibold text-ink/60 mb-1.5 uppercase tracking-wide">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    required
                    value={form.lastName}
                    onChange={update('lastName')}
                    className="w-full rounded-xl border border-horizon-100 bg-mist/40 px-4 py-3.5 text-sm focus:outline-none focus:border-horizon-400 focus:bg-white transition-colors"
                    placeholder="Hassan"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-ink/60 mb-1.5 uppercase tracking-wide">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  className="w-full rounded-xl border border-horizon-100 bg-mist/40 px-4 py-3.5 text-sm focus:outline-none focus:border-horizon-400 focus:bg-white transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-xs font-semibold text-ink/60 mb-1.5 uppercase tracking-wide">
                  Which country do you reside in?
                </label>
                <input
                  id="country"
                  required
                  value={form.country}
                  onChange={update('country')}
                  className="w-full rounded-xl border border-horizon-100 bg-mist/40 px-4 py-3.5 text-sm focus:outline-none focus:border-horizon-400 focus:bg-white transition-colors"
                  placeholder="Somalia"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-ink/60 mb-1.5 uppercase tracking-wide">
                  Comment or Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  className="w-full rounded-xl border border-horizon-100 bg-mist/40 px-4 py-3.5 text-sm focus:outline-none focus:border-horizon-400 focus:bg-white transition-colors resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-2.5 rounded-full bg-horizon-600 text-foam px-7 py-4 font-semibold shadow-soft hover:bg-horizon-700 transition-all duration-300 hover:-translate-y-0.5"
              >
                Submit
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>

              <motion.p
                initial={false}
                animate={{ opacity: sent ? 1 : 0, y: sent ? 0 : -6 }}
                className="flex items-center gap-1.5 text-sm text-horizon-600 font-medium"
              >
                <CheckCircle2 className="w-4 h-4" />
                Opening your email app to send this message...
              </motion.p>
            </form>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="rounded-[2rem] overflow-hidden shadow-soft h-[420px] lg:h-full border border-horizon-100">
              <iframe
                title="Haysimo Water location — Bosaso, Puntland, Somalia"
                src="https://www.google.com/maps?q=Bosaso,Puntland,Somalia&output=embed"
                className="w-full h-full grayscale-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
