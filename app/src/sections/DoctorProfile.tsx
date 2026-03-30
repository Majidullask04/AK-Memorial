import { Facebook, Mail, MapPin, PhoneCall } from 'lucide-react';
import { siteData } from '../content/siteData';

const DoctorProfile = () => {
  return (
    <section id="doctor" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <div className="depth-card surface-panel overflow-hidden rounded-[38px] p-4">
          <div className="depth-content overflow-hidden rounded-[32px] border border-white/12 bg-[#07111f]">
            <img
              src="/images/doctor_akhtar.jpg"
              alt={siteData.brand.doctorName}
              className="h-[540px] w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="section-kicker text-white/62">Doctor Profile</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Meet <span className="gradient-text">{siteData.brand.doctorName}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            {siteData.brand.doctorTitle} at {siteData.brand.clinicName}. The new profile section replaces
            the previous doctor identity with Dr. Akhtaruzzaman’s verified contact details, credentials,
            and clinic presence across Murshidabad.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {siteData.credentials.map((credential) => (
              <span
                key={credential}
                className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-semibold text-white/84"
              >
                {credential}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a
              href={`tel:${siteData.contact.primaryPhoneDigits}`}
              className="surface-panel rounded-[28px] p-5 transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-[#7dd7ff]">
                <PhoneCall className="h-5 w-5" />
              </div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/42">Primary phone</p>
              <p className="mt-3 text-xl font-semibold text-white">{siteData.contact.primaryPhone}</p>
              <p className="mt-1 text-sm text-white/55">Direct patient booking line</p>
            </a>

            <a
              href={`mailto:${siteData.contact.email}`}
              className="surface-panel rounded-[28px] p-5 transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-[#65f7c3]">
                <Mail className="h-5 w-5" />
              </div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/42">Email</p>
              <p className="mt-3 text-xl font-semibold text-white break-all">{siteData.contact.email}</p>
              <p className="mt-1 text-sm text-white/55">For digital enquiries and follow-up</p>
            </a>
          </div>

          <div className="mt-8 surface-panel rounded-[32px] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/42">
              Verified highlights
            </p>
            <div className="mt-5 space-y-4">
              {siteData.professionalHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#7dd7ff] to-[#65f7c3]" />
                  <p className="text-sm leading-7 text-white/68">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={siteData.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-semibold text-white/84 transition-colors hover:bg-white/10"
              >
                <Facebook className="h-4 w-4" />
                Facebook profile
              </a>
              <a
                href={`tel:${siteData.contact.secondaryPhoneDigits}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-semibold text-white/84 transition-colors hover:bg-white/10"
              >
                <PhoneCall className="h-4 w-4" />
                {siteData.contact.secondaryPhone}
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {siteData.locations.map((location) => (
              <a
                key={location.title}
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-panel rounded-[26px] p-4 transition-transform hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 text-[#ffd67b]">
                  <MapPin className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-white">{location.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/56">{location.address}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
