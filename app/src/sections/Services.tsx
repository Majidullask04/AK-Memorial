import {
  Activity,
  HeartPulse,
  NotebookPen,
  Pill,
  TimerReset,
  Users,
} from 'lucide-react';
import { siteData } from '../content/siteData';

const icons = [NotebookPen, TimerReset, Activity, Users, Pill, HeartPulse];

const Services = () => {
  return (
    <section id="services" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-5 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-kicker text-white/65">Services</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              A more <span className="gradient-text">professional service layout</span> for patient trust.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-white/68">
            Instead of generic treatment cards, the services area now shows a clearer consultation flow,
            practical visit types, and more specific reasons for patients to contact the clinic.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {siteData.services.map((service, index) => {
            const Icon = icons[index];

            return (
              <article
                key={service.title}
                className="surface-panel depth-card group rounded-[32px] p-6 transition-transform"
              >
                <div className="depth-content">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-[22px] border border-white/12 bg-white/7 text-[#7dd7ff] shadow-[0_18px_45px_rgba(125,215,255,0.12)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/52">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl leading-tight text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/64">{service.description}</p>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-[#7dd7ff]/50 via-white/10 to-transparent" />
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/55 transition-colors group-hover:text-[#65f7c3]">
                    Designed for higher patient confidence
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
