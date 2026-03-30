import { useState } from 'react';
import { Facebook, Mail, MapPin, PhoneCall } from 'lucide-react';
import { siteData } from '../content/siteData';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: siteData.locations[0].address,
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const whatsappMessage = [
      `Hello Dr. MD Akhtaruzzaman, I want to book a consultation.`,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Preferred chamber: ${formData.location}`,
      formData.message ? `Message: ${formData.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const url = `https://wa.me/${siteData.contact.primaryPhoneDigits}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      location: siteData.locations[0].address,
      message: '',
    });

    window.setTimeout(() => setIsSubmitted(false), 3500);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const contactCards = [
    {
      title: 'Primary phone',
      value: siteData.contact.primaryPhone,
      href: `tel:${siteData.contact.primaryPhoneDigits}`,
      icon: PhoneCall,
    },
    {
      title: 'Secondary phone',
      value: siteData.contact.secondaryPhone,
      href: `tel:${siteData.contact.secondaryPhoneDigits}`,
      icon: PhoneCall,
    },
    {
      title: 'Email',
      value: siteData.contact.email,
      href: `mailto:${siteData.contact.email}`,
      icon: Mail,
    },
    {
      title: 'Facebook',
      value: 'Open clinic profile',
      href: siteData.contact.facebook,
      icon: Facebook,
    },
  ];

  return (
    <section id="contact" className="relative px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-28 lg:pt-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div>
          <p className="section-kicker text-white/60">Booking & Contact</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Turn interest into a <span className="gradient-text">real booking</span> in one step.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">
            The booking area now works like a better patient funnel. Instead of a dead-end form, it
            opens a ready-to-send WhatsApp request with the patient’s details and preferred chamber.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contactCards.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="surface-panel rounded-[28px] p-5 transition-transform hover:-translate-y-1"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-[#7dd7ff]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/42">{item.title}</p>
                  <p className="mt-3 text-base font-semibold text-white">{item.value}</p>
                </a>
              );
            })}
          </div>

          <div className="mt-8 surface-panel rounded-[32px] p-6">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-[#ffd67b]">
              <MapPin className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/42">
              Available locations
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {siteData.locations.map((location) => (
                <a
                  key={location.title}
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-semibold text-white/84 transition-colors hover:bg-white/10"
                >
                  {location.address}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="surface-panel rounded-[36px] p-6 lg:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/44">
            WhatsApp booking form
          </p>
          <h3 className="mt-4 font-serif text-4xl text-white">Send your request now</h3>

          {isSubmitted ? (
            <div className="mt-8 rounded-[28px] border border-[#65f7c3]/30 bg-[#65f7c3]/10 p-6">
              <p className="text-lg font-semibold text-white">Booking message prepared.</p>
              <p className="mt-2 text-sm leading-7 text-white/70">
                A WhatsApp chat window should be open now so the patient can confirm their consultation
                directly with the clinic.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-white/70">Patient name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[22px] border border-white/10 bg-white/6 px-4 py-3.5 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#7dd7ff]/50"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-white/70">Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[22px] border border-white/10 bg-white/6 px-4 py-3.5 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#7dd7ff]/50"
                  placeholder="+91"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-white/70">Preferred chamber</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full rounded-[22px] border border-white/10 bg-white/6 px-4 py-3.5 text-white outline-none focus:border-[#7dd7ff]/50"
                >
                  {siteData.locations.map((location) => (
                    <option key={location.title} value={location.address} className="bg-[#08111d]">
                      {location.address}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-white/70">Patient message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-[22px] border border-white/10 bg-white/6 px-4 py-3.5 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#7dd7ff]/50"
                  placeholder="Describe the patient concern or preferred consultation time."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-[#7dd7ff] via-[#a69cff] to-[#65f7c3] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#06101b] shadow-[0_20px_48px_rgba(125,215,255,0.22)] transition-transform hover:-translate-y-1"
              >
                Send Booking Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
