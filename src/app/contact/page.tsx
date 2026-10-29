"use client";
import { useState } from 'react';
import 'aos/dist/aos.css';
import { useReveal } from '@/hooks/useReveal';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
  const [formFeedback, setFormFeedback] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showNdaForm, setShowNdaForm] = useState(false);
  const [ndaSending, setNdaSending] = useState(false);
  const [ndaSent, setNdaSent] = useState(false);
  const [ndaError, setNdaError] = useState('');

  useReveal();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get('fullName') || ''),
      title: String(formData.get('title') || ''),
      organization: String(formData.get('organization') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      channel: String(formData.get('channel') || ''),
      requirement: String(formData.get('requirement') || ''),
      urgency: String(formData.get('urgency') || ''),
      location: String(formData.get('location') || ''),
      details: String(formData.get('details') || ''),
    };

    setIsSending(true);
    setErrorMessage('');
    setFormFeedback(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'Unable to send your request.');
      }

      setFormFeedback(true);
      form.reset();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const handleNdaSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get('ndaName') || ''),
      organization: String(formData.get('ndaOrg') || ''),
      email: String(formData.get('ndaEmail') || ''),
      phone: String(formData.get('ndaPhone') || ''),
    };

    setNdaSending(true);
    setNdaError('');
    setNdaSent(false);

    try {
      const response = await fetch('/api/nda', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'Unable to submit your NDA request.');
      }

      setNdaSent(true);
      form.reset();
    } catch (err) {
      setNdaError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setNdaSending(false);
    }
  };

  return (
    <div className="bg-[#0A0A0C] text-[#E5E1E4] font-sans antialiased selection:bg-[#D4AF37] selection:text-black min-h-screen overflow-x-hidden w-full">


      <Navbar />


      {/* ── BREADCRUMBS ── */}
      <section className="w-full bg-[#060608] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-gray-400">
            <Link href="/" className="hover:text-brand-gold transition-colors cursor-pointer">HOME</Link>
            <span className="text-brand-gold/40">•</span>
            <span className="text-gray-500">CONTACT &amp; OPERATIONS COMMAND</span>
            <span className="text-brand-gold/40">•</span>
            <span className="text-brand-gold">MAYFAIR DISPATCH</span>
          </nav>
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 shadow-sm border border-white/10">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="text-[10px] text-white tracking-wider font-semibold uppercase">24/7 PHONE LINE ACTIVE • LONDON</span>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT AREA ── */}
      <main className="relative w-full overflow-hidden bg-[#0A0A0C]">
        {/* Ambient Golden Aura Backdrops */}
        <div className="absolute -top-40 right-1/4 w-96 h-96 rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-16 relative z-10">

          {/* Hero Section */}
          <div className="pb-10 sm:pb-14 pt-2" data-aos="fade-up">
            <div className="max-w-4xl space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-serif text-white font-semibold">
                Contact KRSK Security
              </h1>
              <p className="text-base text-gray-400 max-w-3xl leading-relaxed">
                Our office is at Green Lane, Morden, London, SM4 6SS. Call us any time or send a message and we will reply within minutes. All enquiries are kept private.
              </p>
            </div>

            {/* Quick Contact Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10" data-aos="fade-up" data-aos-delay="100">
              <div className="p-6 rounded-sm bg-[#131418] border border-white/5 hover:border-brand-gold/40 transition-all duration-300 group shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">24/7 Phone Line</span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-emerald-950/60 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[9px] text-emerald-400 uppercase tracking-widest font-semibold">Control Room Open</span>
                  </div>
                </div>
                <a className="block text-2xl font-serif text-brand-gold font-bold tracking-wide group-hover:text-white transition-colors" href="tel:+447466463048">
                  +44 7466 463048
                </a>
                <p className="text-[12px] text-gray-400 mt-1">Direct hotline to our duty controller</p>
              </div>

              <div className="p-6 rounded-sm bg-[#131418] border border-white/5 hover:border-brand-gold/40 transition-all duration-300 group shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Email Us</span>
                  <span className="material-symbols-outlined text-brand-gold text-[18px]">lock</span>
                </div>
                <a className="block text-[18px] text-white font-semibold group-hover:text-brand-gold transition-colors truncate" href="mailto:info@krsksecurityservices.com">
                  info@krsksecurityservices.com
                </a>
                <p className="text-[12px] text-gray-400 mt-1">Secure email for all enquiries</p>
              </div>

              <div className="p-6 rounded-sm bg-[#131418] border border-white/5 hover:border-brand-gold/40 transition-all duration-300 group shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Our Office</span>
                  <span className="material-symbols-outlined text-brand-gold text-[18px]">domain</span>
                </div>
                <span className="block text-[18px] text-white font-semibold">
                  Green lane Morden, London. SM4 6SS
                </span>
                <p className="text-[12px] text-gray-400 mt-1">London • Security Operations Desk</p>
              </div>
            </div>
          </div>

          {/* Two-Column Contact & Consultation Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">

            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6" data-aos="fade-up" data-aos-delay="200">

              <div className="p-6 sm:p-8 rounded-sm bg-[#131418] border border-white/5 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold">
                    <span className="material-symbols-outlined text-[19px]">account_balance</span>
                  </div>
                  <h2 className="text-xl font-serif text-white font-semibold">Krsk Office</h2>
                </div>
                <div className="space-y-4 text-sm text-gray-400">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-brand-gold block mb-0.5 font-bold">Address</span>
                    <span className="text-white font-medium">Green lane Morden, London. SM4 6SS</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-brand-gold block mb-0.5 font-bold">Transit &amp; Approach</span>
                    <p className="leading-relaxed">
                      Morden South Station — 5 min walk.<br />
                      Morden Station (Northern Line) — 10 min walk.
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-brand-gold block mb-0.5 font-bold">Control Centre Operations</span>
                    <span className="text-white font-medium">24/7/365 Physical Security Operations Room &amp; Dispatch Desk</span>
                  </div>
                  <div className="p-4 rounded-sm bg-[#0e0e10] border border-white/5 text-[12px] flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-brand-gold text-[17px] shrink-0 mt-0.5">verified_user</span>
                    <span><strong className="text-white font-medium">Visitor Access:</strong> By appointment only.</span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-sm bg-[#131418] border border-white/5 shadow-sm">
                <h2 className="text-xl font-serif text-white font-semibold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-gold text-[20px]">quick_reference</span>
                  Contact by Service
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: 'Hotel Security', icon: 'hotel' },
                    { title: 'Restaurant & Bar Security', icon: 'restaurant' },
                    { title: 'Club Security', icon: 'nightlife' },
                    { title: 'Close Protection', icon: 'shield_person' },
                    { title: 'Event Security', icon: 'celebration' },
                    { title: 'Residential Security', icon: 'home' },
                    { title: 'Retail Security', icon: 'shopping_bag' },
                    { title: 'Corporate Security', icon: 'corporate_fare' },
                  ].map((s, idx) => (
                    <div key={idx} className="p-3 rounded-sm bg-[#0e0e10] border border-white/5">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="material-symbols-outlined text-brand-gold text-[16px]">{s.icon}</span>
                        <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">{s.title}</span>
                      </div>
                      <a className="block text-[11px] text-white hover:text-brand-gold transition-colors font-medium break-all" href="mailto:info@krsksecurityservices.com">info@krsksecurityservices.com</a>
                      <a className="block text-[11px] text-gray-400 hover:text-brand-gold transition-colors" href="tel:+447466463048">+44 7466 463048</a>
                    </div>
                  ))}
                </div>
              </div>


            </div>

            {/* Right Column: Interactive Consultation & Request Form */}
            <div className="lg:col-span-7" data-aos="fade-up" data-aos-delay="300" id="form-section">
              <div className="p-6 sm:p-8 lg:p-12 rounded-sm bg-[#131418] border border-brand-gold/20 shadow-2xl relative">
                <div className="absolute -top-3 right-6 px-3 py-1 rounded-sm bg-brand-gold text-black text-[9px] uppercase font-bold tracking-widest shadow-[0_0_12px_rgba(212,175,55,0.4)]">
                  PRIORITY ENQUIRY
                </div>
                <div className="mb-8 space-y-2">
                  <h2 className="text-2xl md:text-[32px] text-white font-serif font-semibold tracking-tight">
                    Request a Free Consultation
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Tell us what you need and our team will review it right away. Everything you share stays confidential under UK data protection law.
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleFormSubmit}>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold uppercase text-gray-300 tracking-wider">Full Name *</label>
                      <input name="fullName" className="w-full bg-[#0A0A0C] text-white border border-white/10 focus:border-brand-gold focus:outline-none rounded-sm px-4 py-3 text-sm placeholder:text-gray-600 transition-all" placeholder="e.g. Your Full Name" required type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold uppercase text-gray-300 tracking-wider">Your Job Title *</label>
                      <input name="title" className="w-full bg-[#0A0A0C] text-white border border-white/10 focus:border-brand-gold focus:outline-none rounded-sm px-4 py-3 text-sm placeholder:text-gray-600 transition-all" placeholder="e.g. Family Office Principal / GM" required type="text" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold uppercase text-gray-300 tracking-wider">Company / Venue *</label>
                      <input name="organization" className="w-full bg-[#0A0A0C] text-white border border-white/10 focus:border-brand-gold focus:outline-none rounded-sm px-4 py-3 text-sm placeholder:text-gray-600 transition-all" placeholder="e.g. Private Members Club" required type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold uppercase text-gray-300 tracking-wider">Email Address *</label>
                      <input name="email" className="w-full bg-[#0A0A0C] text-white border border-white/10 focus:border-brand-gold focus:outline-none rounded-sm px-4 py-3 text-sm placeholder:text-gray-600 transition-all" placeholder="executive@familyoffice.co.uk" required type="email" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold uppercase text-gray-300 tracking-wider">Phone Number *</label>
                      <input name="phone" className="w-full bg-[#0A0A0C] text-white border border-white/10 focus:border-brand-gold focus:outline-none rounded-sm px-4 py-3 text-sm placeholder:text-gray-600 transition-all" placeholder="+44 (0) 7700 900123" required type="tel" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold uppercase text-gray-300 tracking-wider">How Should We Contact You?</label>
                      <select name="channel" className="w-full bg-[#0A0A0C] text-white border border-white/10 focus:border-brand-gold focus:outline-none rounded-sm px-4 py-3 text-sm transition-all">
                        <option value="phone">Phone Call</option>
                        <option value="email">Email</option>
                        <option value="in-person">In-Person Meeting</option>
                        <option value="client-site">Visit My Site</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-semibold uppercase text-gray-300 tracking-wider">Which Service Do You Need? *</label>
                    <select name="requirement" className="w-full bg-[#0A0A0C] text-white border border-white/10 focus:border-brand-gold focus:outline-none rounded-sm px-4 py-3 text-sm transition-all" required>
                      <option value="">Select a service...</option>
                      <option value="hotel">Hotel Security</option>
                      <option value="restaurant">Restaurant and Bar Security</option>
                      <option value="club">Club Security</option>
                      <option value="cp">Close Protection</option>
                      <option value="event">Event Security</option>
                      <option value="residential">Residential Security</option>
                      <option value="retail">Retail Security</option>
                      <option value="corporate">Corporate Security</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold uppercase text-gray-300 tracking-wider">When Do You Need Us? *</label>
                      <select name="urgency" className="w-full bg-[#0A0A0C] text-white border border-white/10 focus:border-brand-gold focus:outline-none rounded-sm px-4 py-3 text-sm transition-all" required>
                        <option value="immediate">Urgent — Within 24 Hours</option>
                        <option value="7days">Within 7 Days</option>
                        <option value="launch">For an Upcoming Event</option>
                        <option value="retainer">Ongoing Contract</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold uppercase text-gray-300 tracking-wider">Location / Postcode *</label>
                      <input name="location" className="w-full bg-[#0A0A0C] text-white border border-white/10 focus:border-brand-gold focus:outline-none rounded-sm px-4 py-3 text-sm placeholder:text-gray-600 transition-all" placeholder="e.g. London, Surrey" required type="text" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-[11px] font-semibold uppercase text-gray-300 tracking-wider">More Details (Optional)</label>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">Confidential</span>
                    </div>
                    <textarea name="details" className="w-full bg-[#0A0A0C] text-white border border-white/10 focus:border-brand-gold focus:outline-none rounded-sm px-4 py-3 text-sm placeholder:text-gray-600 transition-all" placeholder="Tell us about your site, any risks, dates, or dress code..." rows={4}></textarea>
                  </div>

                  <div className="space-y-3 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input className="mt-1 w-4 h-4 rounded border-white/20 text-brand-gold focus:ring-brand-gold bg-[#0A0A0C] accent-brand-gold" type="checkbox" defaultChecked />
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                        Send me a Non-Disclosure Agreement (NDA) before we talk in detail.
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input className="mt-1 w-4 h-4 rounded border-white/20 text-brand-gold focus:ring-brand-gold bg-[#0A0A0C] accent-brand-gold" type="checkbox" required defaultChecked />
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                        I agree to my details being stored securely under the UK Data Protection Act 2018.
                      </span>
                    </label>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <button disabled={isSending} className="w-full py-4 px-6 rounded-sm bg-brand-gold text-black font-semibold tracking-wider hover:bg-brand-gold-hover shadow-[0_0_24px_rgba(212,175,55,0.25)] transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-60 disabled:cursor-not-allowed" type="submit">
                      <span>{isSending ? 'Sending…' : 'Submit Enquiry'}</span>
                      <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">{isSending ? 'hourglass_top' : 'arrow_forward'}</span>
                    </button>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-gray-400 text-[12px]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>Average callback time: <strong className="text-white">14 minutes</strong>.</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Need us now? Call <a className="text-brand-gold hover:underline font-medium" href="tel:+447466463048">+44 7466 463048</a>.</span>
                  </div>

                  {errorMessage && (
                    <div className="mt-6 p-4 rounded-sm bg-red-950/40 border border-red-500/30 text-left space-y-2">
                      <div className="flex items-center gap-2 text-red-400 font-semibold text-sm uppercase tracking-wider">
                        <span className="material-symbols-outlined text-[20px]">error</span>
                        <span>Message Failed</span>
                      </div>
                      <p className="text-[13px] text-red-200/80">{errorMessage}</p>
                    </div>
                  )}

                  {formFeedback && (
                    <div className="mt-6 p-4 rounded-sm bg-emerald-950/40 border border-emerald-500/30 text-left space-y-2 animate-pulse">
                      <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm uppercase tracking-wider">
                        <span className="material-symbols-outlined text-[20px]">check_circle</span>
                        <span>Message Sent</span>
                      </div>
                      <p className="text-[13px] text-emerald-200/80">
                        Your message has reached our team. We will contact you using your chosen method within 15 minutes.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>




        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#060608] border-t border-white/5 py-10 sm:py-16 text-gray-400 text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt="KRSK Security Services" width={36} height={36} style={{ maxWidth: '36px', maxHeight: '36px' }} className="h-9 w-9 object-contain rounded-md" />
              <div>
                <div className="font-serif text-sm tracking-[0.12em] font-semibold text-white uppercase">KRSK</div>
                <div className="text-[7px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">Security Services</div>
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed text-[11px] mb-4 max-w-xs">Professional SIA-licensed security officers for hotels, restaurants, clubs, offices, events, shops, and private homes across London.</p>
          </div>
          <div>
            <h4 className="text-white font-serif font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-[12px]">
              {[{ l: 'Home', h: '/' }, { l: 'About Us', h: '/about' }, { l: 'Services', h: '/services' }, { l: 'Why Choose Us', h: '/why-choose-us' }, { l: 'Contact Us', h: '/contact' }].map(lk => (
                <li key={lk.l}><Link href={lk.h} className="hover:text-brand-gold transition">{lk.l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-serif font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-[12px]">
              {['Hotel Security', 'Restaurant & Bar Security', 'Club Security', 'Close Protection', 'Event Security', 'Residential Security', 'Retail Security', 'Corporate Security'].map(s => (
                <li key={s}><Link href="/services" className="hover:text-brand-gold transition">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-white font-serif font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-2 text-[11px] sm:text-[12px]">
              <div className="flex items-start gap-2"><span className="material-symbols-outlined text-brand-gold text-[16px] shrink-0 mt-0.5">location_on</span><span>Green lane Morden, London. SM4 6SS</span></div>
              <div className="flex items-center gap-2"><span className="material-symbols-outlined text-brand-gold text-[16px] shrink-0">mail</span><span className="truncate">info@krsksecurityservices.com</span></div>
              <div className="flex items-center gap-2"><span className="material-symbols-outlined text-brand-gold text-[16px] shrink-0">call</span><span>+44 7466 463048</span></div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-[11px] text-gray-500 text-center sm:text-left">
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
