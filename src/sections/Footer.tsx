import { Facebook, Mail, MapPin, PhoneCall } from 'lucide-react';
import { siteData } from '../content/siteData';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Doctor Profile', href: '#doctor' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/10 px-4 pb-10 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="surface-panel rounded-[36px] p-6 lg:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="section-kicker text-white/58">Footer</p>
              <h3 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
                {siteData.brand.clinicName}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/66">
                Professional site experience created around Dr. MD Akhtaruzzaman’s local clinic identity,
                real contact details, and premium presentation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${siteData.contact.primaryPhoneDigits}`}
                className="rounded-[28px] border border-white/10 bg-white/5 p-5"
              >
                <PhoneCall className="h-5 w-5 text-[#7dd7ff]" />
                <p className="mt-4 text-xs uppercase tracking-[0.24em] text-white/42">Primary</p>
                <p className="mt-3 text-sm font-semibold text-white">{siteData.contact.primaryPhone}</p>
              </a>

              <a
                href={`mailto:${siteData.contact.email}`}
                className="rounded-[28px] border border-white/10 bg-white/5 p-5"
              >
                <Mail className="h-5 w-5 text-[#65f7c3]" />
                <p className="mt-4 text-xs uppercase tracking-[0.24em] text-white/42">Email</p>
                <p className="mt-3 text-sm font-semibold text-white break-all">{siteData.contact.email}</p>
              </a>

              <a
                href={siteData.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[28px] border border-white/10 bg-white/5 p-5"
              >
                <Facebook className="h-5 w-5 text-[#a69cff]" />
                <p className="mt-4 text-xs uppercase tracking-[0.24em] text-white/42">Facebook</p>
                <p className="mt-3 text-sm font-semibold text-white">Open clinic profile</p>
              </a>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                <MapPin className="h-5 w-5 text-[#ffd67b]" />
                <p className="mt-4 text-xs uppercase tracking-[0.24em] text-white/42">Locations</p>
                <p className="mt-3 text-sm font-semibold text-white">
                  {siteData.locations.map((item) => item.title).join(' / ')}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/45">
            © 2026 {siteData.brand.clinicName}. Built for Dr. MD Akhtaruzzaman.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
