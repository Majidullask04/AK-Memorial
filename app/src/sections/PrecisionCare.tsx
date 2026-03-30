import { ArrowRight, BadgeCheck } from 'lucide-react';
import { siteData } from '../content/siteData';

const PrecisionCare = () => {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 rounded-[42px] border border-white/10 bg-[linear-gradient(135deg,rgba(10,22,40,0.92),rgba(7,14,27,0.98))] px-6 py-8 shadow-[0_35px_140px_rgba(0,0,0,0.45)] lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-10">
        <div className="flex flex-col justify-between">
          <div>
            <p className="section-kicker text-white/58">Patient Flow</p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-[3.8rem]">
              A clinic experience that looks <span className="gradient-text">organized, modern, and human.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/68">
              The mid-page experience now frames Dr. Akhtaruzzaman’s process more clearly: listen first,
              prescribe carefully, and review progress with more precision from visit to visit.
            </p>
          </div>

          <div className="mt-10 surface-panel rounded-[30px] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
              Professional highlights
            </p>
            <div className="mt-5 space-y-4">
              {siteData.professionalHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/8 text-[#65f7c3]">
                    <BadgeCheck className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-7 text-white/68">{item}</p>
                </div>
              ))}
            </div>
            <a
              href={`mailto:${siteData.contact.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#7dd7ff]"
            >
              Contact by email
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-5">
          {siteData.treatmentFlow.map((item) => (
            <article
              key={item.step}
              className="surface-panel depth-card rounded-[32px] p-6 lg:p-7"
            >
              <div className="depth-content flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#7dd7ff] to-[#65f7c3] text-lg font-extrabold text-[#05101a]">
                  {item.step}
                </div>
                <div className="max-w-2xl">
                  <h3 className="font-serif text-3xl text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/66">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrecisionCare;
