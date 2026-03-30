import { useEffect, useState } from 'react';
import { Menu, PhoneCall, X } from 'lucide-react';
import { siteData } from '../content/siteData';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Doctor', href: '#doctor' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled ? 'px-3 pt-3 sm:px-6' : 'px-0 pt-0'
        }`}
      >
        <div
          className={`mx-auto max-w-7xl transition-all duration-500 ${
            isScrolled
              ? 'surface-panel rounded-[28px] border border-white/12 shadow-[0_22px_80px_rgba(0,0,0,0.36)]'
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <a
              href="#hero"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/8 text-sm font-extrabold uppercase tracking-[0.24em] text-white shadow-[0_16px_34px_rgba(5,17,31,0.4)]">
                AK
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/55">
                  Clinic
                </p>
                <p className="font-serif text-2xl leading-none text-white">
                  {siteData.brand.shortName}
                </p>
              </div>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="group relative text-sm font-semibold uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#7dd7ff] to-[#65f7c3] transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href={`tel:${siteData.contact.primaryPhoneDigits}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-semibold text-white/80 transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                <PhoneCall className="h-4 w-4" />
                {siteData.contact.primaryPhone}
              </a>
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection('#contact');
                }}
                className="rounded-full bg-gradient-to-r from-[#7dd7ff] via-[#8da4ff] to-[#65f7c3] px-5 py-2.5 text-sm font-semibold text-[#06101b] shadow-[0_18px_40px_rgba(125,215,255,0.22)] transition-transform hover:-translate-y-0.5"
              >
                Book Now
              </a>
            </div>

            <button
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-white md:hidden"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#06101c]/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-full flex-col justify-center px-6">
          <div className="surface-panel mx-auto w-full max-w-md rounded-[34px] p-6">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/45">Clinic Menu</p>
                <p className="font-serif text-3xl text-white">{siteData.brand.shortName}</p>
              </div>
              <button
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-5 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <span>{link.label}</span>
                  <span className="text-white/40">0{navLinks.indexOf(link) + 1}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <a
                href={`tel:${siteData.contact.primaryPhoneDigits}`}
                className="block rounded-full border border-white/12 bg-white/8 px-5 py-3 text-center font-semibold text-white"
              >
                Call {siteData.contact.primaryPhone}
              </a>
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection('#contact');
                }}
                className="block rounded-full bg-gradient-to-r from-[#7dd7ff] via-[#8da4ff] to-[#65f7c3] px-5 py-3 text-center font-semibold text-[#06101b]"
              >
                Open Booking Section
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
