"use client";
import { useState, useRef } from 'react';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useReveal } from '@/hooks/useReveal';

/* ── service data ── */
const services = [
  {
    division: '01', category: 'hospitality', tag: 'Hotels', icon: 'hotel',
    title: 'Hotel Security',
    description: 'We keep your hotel, guests, and staff safe. Our officers manage the front door, watch the lobby, and handle problems calmly and quietly.',
    features: ['Front door and lobby control', 'Guest and luggage screening', 'Help with difficult guests'],
    attire: 'Smart black tie or tailored suit', cta: 'Book Hotel Security',
  },
  {
    division: '02', category: 'hospitality', tag: 'Restaurants & Bars', icon: 'restaurant',
    title: 'Restaurant & Bar Security',
    description: 'We look after busy restaurants and bars. Our officers keep the atmosphere friendly while making sure everyone follows the rules.',
    features: ['Door control and guest checks', 'Polite bag searches', 'Managing queues and closing time'],
    attire: 'Smart black suit or tuxedo', cta: 'Book Restaurant & Bar Security',
  },
  {
    division: '03', category: 'hospitality', tag: 'Clubs', icon: 'nightlife',
    title: 'Club Security',
    description: 'We provide door supervisors and floor staff for clubs and late-night venues. Our team keeps the crowd calm, safe, and under control.',
    features: ['Queue and door management', 'ID checks and bag searches', 'Handling incidents and first aid'],
    attire: 'Black fitted suit with body camera', cta: 'Book Club Security',
  },
  {
    division: '04', category: 'estates', tag: 'Close Protection', icon: 'shield_person',
    title: 'Close Protection',
    description: 'Trained close protection officers keep one person or family safe at all times. We plan routes, stay alert, and stay discreet.',
    features: ['Personal protection officers', 'Safe travel and route planning', 'Threat checks and planning'],
    attire: 'Smart casual or formal suit', cta: 'Book Close Protection',
  },
  {
    division: '05', category: 'events', tag: 'Events', icon: 'celebration',
    title: 'Event Security',
    description: 'We provide security for events of all sizes, from private parties to large public gatherings. We manage crowds, entry, and safety.',
    features: ['Entry checks and guest screening', 'Crowd and queue control', 'Emergency and evacuation planning'],
    attire: 'Black tie or high-visibility uniform', cta: 'Book Event Security',
  },
  {
    division: '06', category: 'estates', tag: 'Residential', icon: 'home',
    title: 'Residential Security',
    description: 'We protect homes and private estates. Our officers guard the gate, patrol the grounds, and respond quickly to any alarms.',
    features: ['Gatehouse and patrol duties', 'Alarm response and keyholding', '24/7 cover for your home'],
    attire: 'Smart uniform or plain clothes', cta: 'Book Residential Security',
  },
  {
    division: '07', category: 'corporate', tag: 'Retail', icon: 'shopping_bag',
    title: 'Retail Security',
    description: 'We help shops and stores prevent theft and keep staff and customers safe. Our officers watch the floor and handle problems early.',
    features: ['Shop floor monitoring', 'Theft prevention and deterrence', 'Safe handling of incidents'],
    attire: 'Smart suit or store uniform', cta: 'Book Retail Security',
  },
  {
    division: '08', category: 'corporate', tag: 'Corporate', icon: 'corporate_fare',
    title: 'Corporate Security',
    description: 'We protect offices and company buildings. Our officers manage the reception, check visitors, and watch your premises.',
    features: ['Reception and visitor checks', 'Access control and patrolling', 'Health and safety support'],
    attire: 'Corporate business suit', cta: 'Book Corporate Security',
  },
];

const filterTabs = [
  { key: 'all', label: 'All Services' },
  { key: 'hospitality', label: 'Hotels, Restaurants & Clubs' },
  { key: 'corporate', label: 'Retail & Corporate' },
  { key: 'estates', label: 'Close Protection & Residential' },
  { key: 'events', label: 'Events' },
];

const steps = [
  { num: '01', title: 'Site Visit & Risk Check', desc: 'We visit your site and look at the risks to find any weak spots.', icon: 'fact_check', badge: 'Site Checked' },
  { num: '02', title: 'Security Plan', desc: 'We write a clear plan with duties, emergency steps, and who to call.', icon: 'draw', badge: 'Plan Ready' },
  { num: '03', title: 'Choosing Officers', desc: 'We match the right officers to your site, dress code, and needs.', icon: 'badge', badge: 'Officers Picked' },
  { num: '04', title: '24/7 Support', desc: 'We check patrols, stay in touch with duty managers, and send regular reports.', icon: 'radar', badge: 'Always On' },
];

const accreditations = [
  { icon: 'verified_user', label: 'SIA Licensed' },
  { icon: 'security', label: 'BS 7858 Vetted' },
  { icon: 'workspace_premium', label: 'ISO 9001 Quality' },
  { icon: 'medical_services', label: 'First Aid Trained' },
  { icon: 'shield', label: 'ACT Terrorism Trained' },
];

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedService, setSelectedService] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLDivElement>(null);

  useReveal();

  const filteredServices = activeFilter === 'all'
    ? services
    : services.filter(s => s.category === activeFilter);

  function handleCommission(serviceName: string) {
    setSelectedService(serviceName);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  async function handleServiceSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      service: String(formData.get('service') || ''),
      location: String(formData.get('location') || ''),
      personnel: String(formData.get('personnel') || ''),
      scope: String(formData.get('scope') || ''),
      fullName: String(formData.get('fullName') || ''),
      phone: String(formData.get('phone') || ''),
      email: String(formData.get('email') || ''),
      details: String(formData.get('details') || ''),
    };

    setIsSending(true);
    setErrorMessage('');
    setFormSubmitted(false);

    try {
      const response = await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'Unable to send your request.');
      }

      setFormSubmitted(true);
      form.reset();
      setSelectedService('');
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="bg-[#0A0A0C] text-[#E5E1E4] font-sans antialiased selection:bg-[#D4AF37] selection:text-black min-h-screen overflow-x-hidden w-full">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-12 lg:py-24">
        <div className="absolute -top-32 right-1/4 w-[480px] h-[480px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[360px] h-[360px] rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-gold/40 bg-brand-overlay backdrop-blur-md mb-6" data-aos="fade-down">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-bold text-brand-gold">
              Our Security Services • London
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium text-brand-text tracking-tight font-serif mb-6 max-w-4xl" data-aos="fade-up">
            Security Services for Every Need
          </h1>

          <p className="text-base sm:text-lg text-brand-textMuted font-light leading-relaxed mb-10 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
            We provide trained, SIA-licensed security officers for hotels, restaurants, bars, clubs, events, offices, shops, homes, and close protection across London. Safe, discreet, and suited to your needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-14 w-full sm:w-auto" data-aos="fade-up" data-aos-delay="200">
            <a href="#consultation-inquiry" className="w-full sm:w-auto px-4 sm:px-6 py-3 bg-brand-gold text-black text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.16em] font-semibold rounded-sm hover:bg-brand-gold-hover transition duration-200 shadow-xl shadow-brand-gold/20 flex items-center justify-center gap-2">
              <span className="truncate whitespace-nowrap">Request a Free Quote</span>
              <span className="material-symbols-outlined text-[14px] sm:text-[16px]">arrow_forward</span>
            </a>
            <a href="tel:+447466463048" className="w-full sm:w-auto px-4 sm:px-6 py-3 bg-brand-glass border border-brand-borderLight hover:border-brand-gold/60 text-brand-text text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.16em] font-semibold rounded-sm hover:bg-brand-glassHover transition duration-200 backdrop-blur-md flex items-center justify-center gap-2 sm:gap-2.5">
              <span className="material-symbols-outlined text-brand-gold text-[14px] sm:text-[18px]">call</span>
              <span className="truncate whitespace-nowrap">Call Us (+44 7466 463048)</span>
            </a>
          </div>

          {/* Filter Tabs */}
          <div className="w-full max-w-4xl glass-obsidian p-1.5 rounded-2xl md:rounded-full flex flex-wrap items-center justify-center gap-1.5 shadow-xl border border-brand-borderSubtle" data-aos="fade-up" data-aos-delay="300">
            {filterTabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-5 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 ${activeFilter === tab.key
                  ? 'bg-brand-gold text-black shadow-[0_0_16px_rgba(212,175,55,0.25)]'
                  : 'text-brand-textMuted hover:text-brand-text hover:bg-brand-glassHover'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SLA BAR ── */}
      <section className="bg-[#111215] py-8 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'verified', title: '100% SIA Licensed', sub: 'All Officers Vetted' },
              { icon: 'timer', title: 'Fast Response', sub: 'Under 15 Minutes in London' },
              { icon: 'security', title: '24/7 Support', sub: 'Always Reachable' },
              { icon: 'policy', title: 'Insurance', sub: 'Fully Covered' },
            ].map((sla, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-sm bg-white/[0.03] shadow-sm" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="w-12 h-12 rounded-sm bg-brand-glass flex items-center justify-center text-brand-gold shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-[26px]">{sla.icon}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-text">{sla.title}</div>
                  <div className="text-[11px] text-brand-textMuted">{sla.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-12 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" data-aos="fade-up">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span className="text-[11px] tracking-[0.25em] uppercase font-bold text-brand-gold">Our Security Roles</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[40px] leading-tight font-serif text-brand-text font-normal">
                Our Security Services
              </h2>
            </div>
            <p className="text-sm text-brand-textMuted max-w-md">
              Every job comes with clear written instructions for our officers, set up to suit your venue, your rules, and your need for privacy.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredServices.map((svc, i) => (
              <div
                key={svc.division}
                className="group rounded-sm bg-[#131418] hover:bg-[#181A1F] transition-all duration-300 p-5 flex flex-col justify-between shadow-lg relative overflow-hidden border border-brand-borderSubtle hover:border-brand-gold/20"
                data-aos="fade-up"
                data-aos-delay={i % 4 * 100}
              >
                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

                <div>
                  {/* Top meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-brand-gold">Service {svc.division}</span>
                    <span className="px-2.5 py-1 rounded-full bg-brand-glass text-[9px] uppercase tracking-widest text-brand-textMuted font-semibold">{svc.tag}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-11 h-11 rounded-sm bg-brand-glass flex items-center justify-center text-brand-gold mb-4 shadow-md">
                    <span className="material-symbols-outlined text-[24px]">{svc.icon}</span>
                  </div>

                  <h3 className="text-lg font-serif text-brand-text font-medium mb-2">{svc.title}</h3>
                  <p className="text-[13px] text-brand-textMuted mb-4 leading-relaxed">{svc.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {svc.features.map((f, fi) => (
                      <div key={fi} className="flex items-center gap-2 text-brand-text">
                        <span className="material-symbols-outlined text-brand-gold text-[16px]">check_circle</span>
                        <span className="text-[11px] text-brand-textMuted">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-brand-borderSubtle -mx-5 -mb-5 px-5 pb-5">
                  <div className="flex items-start justify-between gap-3 text-[11px] text-brand-textMuted mb-3">
                    <span className="font-semibold text-brand-textMuted shrink-0">Attire:</span>
                    <span className="text-right">{svc.attire}</span>
                  </div>
                  <button
                    onClick={() => handleCommission(svc.title)}
                    className="w-full py-2 rounded-sm bg-brand-glass hover:bg-brand-gold hover:text-black text-brand-gold text-[10px] uppercase tracking-wider font-semibold transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>{svc.cta}</span>
                    <span className="material-symbols-outlined text-[14px]">north_east</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPLOYMENT PROCESS ── */}
      <section className="py-12 lg:py-24 bg-[#0e0e10]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span className="text-[11px] tracking-[0.25em] uppercase font-bold text-brand-gold">How We Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] leading-tight font-serif text-brand-text font-normal">How We Get You Started</h2>
            <p className="text-sm text-brand-textMuted mt-4">
              A simple, proven process that helps us spot risks and get the right officers in place before your first day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="p-7 rounded-sm bg-[#131418] flex flex-col justify-between shadow-md border border-brand-borderSubtle" data-aos="fade-up" data-aos-delay={i * 100}>
                <div>
                  <div className="text-[40px] leading-none font-serif font-bold text-brand-gold/30 mb-4">{step.num}</div>
                  <h3 className="text-base font-semibold text-brand-text mb-3">{step.title}</h3>
                  <p className="text-[12px] text-brand-textMuted leading-relaxed mb-6">{step.desc}</p>
                </div>
                <div className="pt-4 border-t border-brand-borderSubtle -mx-7 -mb-7 px-7 pb-7 flex items-center gap-2 text-brand-gold text-[10px] tracking-[0.2em] uppercase font-semibold">
                  <span className="material-symbols-outlined text-[16px]">{step.icon}</span>
                  <span>{step.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCREDITATION BANNER ── */}
      <section className="py-12 bg-[#111215]/60 shadow-sm border-y border-brand-borderSubtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8" data-aos="fade-up">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-sm bg-brand-gold text-black flex items-center justify-center shrink-0 shadow-md">
                <span className="material-symbols-outlined text-[28px]">gavel</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-brand-text">Fully Regulated & Compliant</div>
                <p className="text-[12px] text-brand-textMuted">We meet all UK security rules and are checked regularly.</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {accreditations.map((acc, i) => (
                <div key={i} className="px-4 py-2 rounded-sm bg-brand-glass flex items-center gap-2 shadow-sm">
                  <span className="material-symbols-outlined text-brand-gold text-[18px]">{acc.icon}</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-text">{acc.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONSULTATION FORM ── */}
      <section className="py-12 lg:py-24 relative" id="consultation-inquiry" ref={formRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left info */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full" data-aos="fade-right">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span className="text-[11px] tracking-[0.25em] uppercase font-bold text-brand-gold">Talk to Us</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-[40px] leading-tight font-serif text-brand-text font-normal mb-6">
                  Request a Free Quote
                </h2>
                <p className="text-sm text-brand-textMuted leading-relaxed mb-8">
                  Tell us what you need in confidence. We send clear, simple quotes within 4 working hours for standard jobs.
                </p>

                <div className="space-y-6 mb-10">
                  {[
                    { icon: 'location_on', title: 'Our Office', sub: 'Green lane Morden, London. SM4 6SS' },
                    { icon: 'call', title: '24/7 Phone Line', sub: '+44 7466 463048', href: 'tel:+447466463048' },
                    { icon: 'mail', title: 'Email Us', sub: 'info@krsksecurityservices.com', href: 'mailto:info@krsksecurityservices.com' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-sm bg-brand-glass flex items-center justify-center text-brand-gold shrink-0 shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-brand-text">{item.title}</div>
                        {item.href ? (
                          <a className="text-[12px] text-brand-gold hover:underline" href={item.href}>{item.sub}</a>
                        ) : (
                          <div className="text-[12px] text-brand-textMuted">{item.sub}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust card */}
              <div className="p-6 rounded-sm bg-[#131418] shadow-sm border border-brand-borderSubtle">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-brand-gold text-[20px]">lock</span>
                  <span className="text-sm font-medium text-brand-text">Your Privacy Matters</span>
                </div>
                <p className="text-[12px] text-brand-textMuted leading-relaxed">
                  Everything you share with us stays private. We can sign an NDA before we discuss any details.
                </p>
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-7 bg-[#131418] p-6 sm:p-8 lg:p-10 rounded-sm shadow-2xl border border-brand-borderSubtle" data-aos="fade-left">
              <h3 className="text-xl font-serif text-brand-text font-normal mb-2">Tell Us What You Need</h3>
              <p className="text-[12px] text-brand-textMuted mb-8">
                Fill in the simple form below and we will send you a quote.
              </p>

              <form className="space-y-6" onSubmit={handleServiceSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-brand-textMuted mb-2 font-medium">Service Needed *</label>
                    <div className="relative">
                      <select
                        name="service"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        required
                        className="w-full bg-brand-glass text-brand-text px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold border border-brand-borderLight appearance-none"
                      >
                        <option value="">Select a service</option>
                        {services.map(s => (
                          <option key={s.division} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-3.5 text-brand-textMuted pointer-events-none text-[20px]">expand_more</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-brand-textMuted mb-2 font-medium">Your Location / Postcode *</label>
                    <input name="location" type="text" placeholder="e.g. London, SW1" required className="w-full bg-brand-glass text-brand-text px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold border border-brand-borderLight" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-brand-textMuted mb-2 font-medium">How Many Officers? *</label>
                    <div className="relative">
                      <select name="personnel" required className="w-full bg-brand-glass text-brand-text px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold border border-brand-borderLight appearance-none">
                        <option>1 - 2 Officers</option>
                        <option>3 - 5 Officers</option>
                        <option>6 - 10 Officers</option>
                        <option>10+ Officers</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-3.5 text-brand-textMuted pointer-events-none text-[20px]">expand_more</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-brand-textMuted mb-2 font-medium">How Long Do You Need It? *</label>
                    <div className="relative">
                      <select name="scope" required className="w-full bg-brand-glass text-brand-text px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold border border-brand-borderLight appearance-none">
                        <option>One-off Event or Task</option>
                        <option>Short-Term (1 - 3 Months)</option>
                        <option>Long-Term Contract (Full Year)</option>
                        <option>Urgent Cover (Within 24 Hours)</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-3.5 text-brand-textMuted pointer-events-none text-[20px]">expand_more</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-brand-textMuted mb-2 font-medium">Your Full Name *</label>
                    <input name="fullName" type="text" placeholder="e.g. John Smith" required className="w-full bg-brand-glass text-brand-text px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold border border-brand-borderLight" />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-brand-textMuted mb-2 font-medium">Your Phone Number *</label>
                    <input name="phone" type="tel" placeholder="e.g. +44 7700 900123" required className="w-full bg-brand-glass text-brand-text px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold border border-brand-borderLight" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-brand-textMuted mb-2 font-medium">Your Email Address *</label>
                  <input name="email" type="email" placeholder="you@example.co.uk" required className="w-full bg-brand-glass text-brand-text px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold border border-brand-borderLight" />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-brand-textMuted mb-2 font-medium">Extra Details (Optional)</label>
                  <textarea name="details" rows={3} placeholder="Tell us about your site, hours, or any special needs..." className="w-full bg-brand-glass text-brand-text px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold border border-brand-borderLight" />
                </div>

                <div>
                  <button type="submit" disabled={isSending} className="w-full py-3 sm:py-4 bg-brand-gold hover:bg-brand-gold-hover text-black text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.2em] font-semibold rounded-sm transition duration-200 shadow-[0_4px_24px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                    <span className="truncate whitespace-nowrap">{isSending ? 'Sending…' : 'Send My Request'}</span>
                    <span className="material-symbols-outlined text-[16px] sm:text-[20px]">{isSending ? 'hourglass_top' : 'verified'}</span>
                  </button>

                  {errorMessage && (
                    <div className="mt-4 p-4 rounded-sm bg-red-950/40 text-red-300 text-[12px] text-center border border-red-500/30">
                      {errorMessage}
                    </div>
                  )}

                  {formSubmitted && (
                    <div className="mt-4 p-4 rounded-sm bg-brand-glass text-brand-gold text-[12px] text-center border border-brand-gold/20">
                      Thank you. We have received your request and will contact you within 2 hours.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#060608] border-t border-brand-borderSubtle py-10 sm:py-16 text-brand-textMuted text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt="KRSK Security Services" className="h-9 w-9 object-contain rounded-md" />
              <div>
                <div className="font-serif text-sm tracking-[0.12em] font-semibold text-brand-text uppercase">KRSK</div>
                <div className="text-[7px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">Security Services</div>
              </div>
            </div>
            <p className="text-brand-textDim leading-relaxed text-[11px] mb-4 max-w-xs">Professional SIA-licensed security officers for hotels, restaurants, clubs, offices, events, shops, and private homes across London.</p>
          </div>

          <div>
            <h4 className="text-brand-text font-serif font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-[12px]">
              {[{ l: 'Home', h: '/' }, { l: 'About Us', h: '/about' }, { l: 'Services', h: '/services' }, { l: 'Why Choose Us', h: '/why-choose-us' }, { l: 'Contact Us', h: '/contact' }].map(lk => (
                <li key={lk.l}><Link href={lk.h} className="hover:text-brand-gold transition">{lk.l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-text font-serif font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-[12px]">
              {['Hotel Security', 'Restaurant & Bar Security', 'Club Security', 'Close Protection', 'Event Security', 'Residential Security', 'Retail Security', 'Corporate Security'].map(link => (
                <li key={link}><Link href="/services" className="hover:text-brand-gold transition">{link}</Link></li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-brand-text font-serif font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-2 text-[11px] sm:text-[12px]">
              <div className="flex items-start gap-2"><span className="material-symbols-outlined text-brand-gold text-[16px] shrink-0 mt-0.5">location_on</span><span>Green lane Morden, London. SM4 6SS</span></div>
              <div className="flex items-center gap-2"><span className="material-symbols-outlined text-brand-gold text-[16px] shrink-0">mail</span><span className="truncate">info@krsksecurityservices.com</span></div>
              <div className="flex items-center gap-2"><span className="material-symbols-outlined text-brand-gold text-[16px] shrink-0">call</span><span>+44 7466 463048</span></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 sm:pt-8 border-t border-brand-borderSubtle flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-[11px] text-brand-textDim text-center sm:text-left">
          <div>© 2026 Krsk Security Services Ltd. All rights reserved. Reg: 16831389.</div>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-brand-gold transition">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-brand-gold transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
