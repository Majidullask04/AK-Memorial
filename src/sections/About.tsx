import { MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { siteData } from '../content/siteData';

const About = () => {
  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="grid gap-5">
          <div className="surface-panel depth-card overflow-hidden rounded-[34px]">
            <img
              src="/images/clinic_brand.jpg"
              alt={siteData.brand.clinicName}
              className="h-[320px] w-full object-cover"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {siteData.gallery.slice(0, 2).map((item) => (
              <div key={item.title} className="surface-panel depth-card overflow-hidden rounded-[30px]">
                <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="section-kicker text-white/65">Clinic Story</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Built to feel <span className="gradient-text">credible, local, and welcoming</span> from the first scroll.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            This redesign shifts the site away from generic healthcare visuals and grounds it in the
            identity of {siteData.brand.clinicName}. Visitors now meet the actual doctor, actual clinic
            setting, and clear access points before they ever make a call.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="surface-panel rounded-[28px] p-5">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-[#7dd7ff]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Verified professional profile</h3>
              <p className="mt-3 text-sm leading-7 text-white/64">
                Credentials, registration details, and former training history are surfaced more clearly
                so the site feels trustworthy and ready for patient decision-making.
              </p>
            </div>

            <div className="surface-panel rounded-[28px] p-5">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-[#65f7c3]">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">A richer interactive layer</h3>
              <p className="mt-3 text-sm leading-7 text-white/64">
                Glass panels, hover depth, glowing highlights, and cleaner motion give the website a more
                premium and memorable feel without overwhelming the content.
              </p>
            </div>
          </div>

          <div className="mt-8 surface-panel rounded-[32px] p-6">
            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 text-[#ffd67b]">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/42">
                  Chamber presence
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {siteData.locations.map((location) => (
                    <a
                      key={location.title}
                      href={location.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-semibold text-white/82 transition-all hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      {location.address}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
