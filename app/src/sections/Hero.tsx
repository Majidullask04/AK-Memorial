import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Facebook, PhoneCall } from 'lucide-react';
import { siteData } from '../content/siteData';

gsap.registerPlugin(ScrollTrigger);

const badges = [
  ...siteData.credentials.slice(0, 3),
  siteData.brand.specialism,
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const visual = visualRef.current;
    const stats = statsRef.current;

    if (!section || !content || !visual || !stats) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ delay: 0.25 });

      timeline
        .fromTo(
          content.children,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: 'power3.out' }
        )
        .fromTo(
          visual.children,
          { y: 70, opacity: 0, rotateX: -8 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1.05, stagger: 0.12, ease: 'power3.out' },
          '-=0.55'
        )
        .fromTo(
          stats.children,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, stagger: 0.08, ease: 'power3.out' },
          '-=0.45'
        );

      gsap.to(visual, {
        yPercent: -8,
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${siteData.contact.primaryPhoneDigits}?text=${encodeURIComponent(
    `Hello Dr. MD Akhtaruzzaman, I would like to book a consultation at ${siteData.brand.clinicName}.`
  )}`;

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36"
    >
      <div className="orb absolute left-[6%] top-32 h-44 w-44 bg-[#44b6ff]/25" />
      <div className="orb absolute right-[10%] top-24 h-60 w-60 bg-[#6ff7c7]/18" />
      <div className="orb absolute bottom-16 left-[22%] h-56 w-56 bg-[#a69cff]/16" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div ref={contentRef} className="relative z-10">
          <p className="section-kicker mb-5 text-white/70">{siteData.brand.clinicName}</p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[0.92] text-white sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
            <span className="block">Dr. MD Akhtaruzzaman</span>
            <span className="gradient-text block">with a more premium digital presence.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            {siteData.brand.headline} {siteData.brand.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/12 bg-white/7 px-4 py-2 text-sm font-semibold text-white/84 backdrop-blur-md"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#7dd7ff] via-[#a69cff] to-[#65f7c3] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#07101b] shadow-[0_24px_54px_rgba(125,215,255,0.24)] transition-transform hover:-translate-y-1"
            >
              Book on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => scrollToSection('#doctor')}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/12 bg-white/6 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-1 hover:bg-white/10"
            >
              Meet the Doctor
            </button>
          </div>

          <div ref={statsRef} className="mt-12 grid gap-4 sm:grid-cols-3">
            {siteData.heroStats.map((item) => (
              <div key={item.label} className="surface-panel rounded-[28px] p-5">
                <p className="font-serif text-4xl text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={visualRef} className="relative min-h-[540px] lg:min-h-[640px]">
          <div className="perspective-stage absolute inset-0">
            <div className="depth-card surface-panel absolute left-0 top-12 w-44 rounded-[30px] p-4">
              <div className="depth-content">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">Call</p>
                <p className="mt-3 text-lg font-semibold text-white">{siteData.contact.primaryPhone}</p>
                <a
                  href={`tel:${siteData.contact.primaryPhoneDigits}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/82"
                >
                  <PhoneCall className="h-4 w-4" />
                  Direct connect
                </a>
              </div>
            </div>

            <div className="depth-card surface-panel absolute bottom-10 right-0 w-56 rounded-[32px] p-4">
              <div className="depth-content">
                <img
                  src="/images/clinic_brand.jpg"
                  alt={siteData.brand.clinicName}
                  className="h-24 w-full rounded-[22px] object-cover"
                />
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                  Follow the clinic
                </p>
                <a
                  href={siteData.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-base font-semibold text-white"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook page
                </a>
              </div>
            </div>

            <div className="depth-card absolute right-10 top-0 mx-auto w-full max-w-[440px] rounded-[40px] border border-white/12 bg-gradient-to-b from-white/12 to-white/4 p-4 shadow-[0_34px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <div className="depth-content overflow-hidden rounded-[32px] border border-white/12 bg-[#07111f]">
                <img
                  src="/images/doctor_akhtar.jpg"
                  alt={siteData.brand.doctorName}
                  className="h-[520px] w-full object-cover object-top"
                />
              </div>
              <div className="depth-content flex items-end justify-between gap-4 px-3 pb-2 pt-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-white/45">Lead doctor</p>
                  <h2 className="mt-2 font-serif text-3xl text-white">{siteData.brand.doctorName}</h2>
                  <p className="mt-2 text-sm text-white/68">{siteData.brand.specialism}</p>
                </div>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="rounded-full border border-white/12 bg-white/8 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/12"
                >
                  Open booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
