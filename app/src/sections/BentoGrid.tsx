import { ArrowUpRight, MapPinned } from 'lucide-react';
import { siteData } from '../content/siteData';

const BentoGrid = () => {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 lg:mb-16">
          <p className="section-kicker text-white/62">Clinic Snapshot</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Real locations, <span className="gradient-text">real atmosphere,</span> and easier patient access.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface-panel depth-card overflow-hidden rounded-[36px] p-5">
            <div className="depth-content grid gap-5">
              <img
                src="/images/clinic_room.jpg"
                alt="Clinic room"
                className="h-[340px] w-full rounded-[28px] object-cover"
              />
              <div className="grid gap-5 md:grid-cols-2">
                {siteData.gallery.map((item) => (
                  <article key={item.title} className="rounded-[28px] border border-white/10 bg-white/4 p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-40 w-full rounded-[22px] object-cover"
                    />
                    <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/58">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="surface-panel rounded-[34px] p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-[#7dd7ff]">
                <MapPinned className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-3xl text-white">Chambers across Murshidabad</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">
                The site now uses a cleaner location system so patients can understand where to visit
                without relying on vague footer copy or hidden contact details.
              </p>
              <div className="mt-6 space-y-3">
                {siteData.locations.map((location) => (
                  <a
                    key={location.title}
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white/82 transition-colors hover:bg-white/10"
                  >
                    <span>{location.address}</span>
                    <ArrowUpRight className="h-4 w-4 text-white/48" />
                  </a>
                ))}
              </div>
            </div>

            <div className="surface-panel rounded-[34px] overflow-hidden">
              <img
                src="/images/clinic_brand.jpg"
                alt={siteData.brand.clinicName}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/42">
                  Brand refresh
                </p>
                <p className="mt-4 text-sm leading-7 text-white/64">
                  The refreshed layout positions AK Memorial Homoeopathic Clinic as the visible brand,
                  so the website now aligns with the doctor’s local signage and printed material.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
