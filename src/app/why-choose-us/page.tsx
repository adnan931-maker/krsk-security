"use client";
import { useState } from 'react';
import 'aos/dist/aos.css';
import { useReveal } from '@/hooks/useReveal';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

/* ── data ── */
const pillars = [
  { num: '01', icon: 'verified_user', title: 'Full BS 7858 Vetting', desc: 'Every officer passes a strict 10-year background check, identity and financial checks, and a personality assessment.', badge: '10-Year Background Check' },
  { num: '02', icon: 'styler', title: 'Smart, Tailored Dress', desc: 'Navy suits, formal evening wear, or plain clothes — our officers always match your venue and guests.', badge: 'Fits Your Venue' },
  { num: '03', icon: 'radar', title: '24/7 Control Room', desc: 'Live patrol checks, officer sign-ins, and GPS tracking managed from our office in Green lane Morden, London. SM4 6SS.', badge: 'Live Monitoring & Dispatch' },
  { num: '04', icon: 'lock', title: 'Total Discretion', desc: 'Strict privacy rules, signed non-disclosure agreements, no photos, and encrypted communication.', badge: 'Signed NDA Every Job' },
  { num: '05', icon: 'workspace_premium', title: 'Expert Leadership', desc: 'Managed by experienced security specialists who have protected London venues and clients for years.', badge: 'Experienced Team' },
  { num: '06', icon: 'departure_board', title: 'Fast Backup Support', desc: 'Extra officers and mobile support teams on standby across Mayfair, St. James\'s, Belgravia, and the City of London.', badge: 'Under 7 Min Support' },
];

const caseStudies = [
  {
    category: 'hospitality',
    title: '5-Star Mayfair Hotel & Private Dining',
    ref: 'CS-LON-2024',
    headline: 'Discreet VIP Protection & Friendly Front-of-House Service',
    challenge: 'A large group of foreign dignitaries needed quiet security during a summit week, without spoiling the hotel\'s 5-star welcome.',
    solution: 'We deployed 12 bilingual, smartly dressed close protection officers trained in crowd watching, perimeter checks, and safe travel planning.',
    stats: [
      { val: '0', label: 'Disruptions' },
      { val: '100%', label: 'Guest Rating' },
      { val: 'Direct', label: 'Client Liaison' }
    ]
  },
  {
    category: 'retail',
    title: 'New Bond Street Watch & Jewellery Shop',
    ref: 'CS-W1S-094',
    headline: 'Stopping Theft & Protecting High-Value Stock',
    challenge: 'A rise in moped gang scouting and smash-and-grab attempts on luxury watch shops in London\'s West End during the winter season.',
    solution: 'We placed visible deterrent officers at the door, added perimeter monitoring, used plain-clothes spotters, and linked directly with West End security networks.',
    stats: [
      { val: '100%', label: 'No Losses' },
      { val: '2 Incursions', label: 'Deterred Quietly' },
      { val: 'Tier 1', label: 'Insurance Grade' }
    ]
  },
  {
    category: 'estate',
    title: 'Private Family Home (Belgravia)',
    ref: 'CS-SW1X-441',
    headline: '24/7 Home Security & Keyholding',
    challenge: 'A 6-storey listed home in Belgravia needed round-the-clock access control, sensor security, and family escort.',
    solution: 'We provided a 24/7 security team with canine patrols, perimeter sensors, and safe car escorts to private airports.',
    stats: [
      { val: '36 Mo.', label: 'No Breaches' },
      { val: '< 4 Min', label: 'Response Time' },
      { val: 'NASDU', label: 'Canine Team' }
    ]
  },
  {
    category: 'events',
    title: 'Charity Gala & Film Premiere',
    ref: 'CS-WC2H-882',
    headline: 'Crowd Control & Red-Carpet Safety',
    challenge: 'Managing 800+ VIP guests, A-list talent, and 2,000+ members of the public along Leicester Square and Park Lane with live TV cameras.',
    solution: 'A 40-officer team handled rope access control, crowd management, protest backup, and safe VIP exits.',
    stats: [
      { val: '800+ VIPs', label: 'Guests Managed' },
      { val: 'Zero', label: 'Perimeter Breaches' },
      { val: '100%', label: 'On Schedule' }
    ]
  }
];

const benchmarks = [
  { metric: 'Vetting Standard', desc: 'How officers are background checked', krsk: 'BS 7858 Enhanced (10-year check + assessment)', generic: 'Standard DBS basic check only' },
  { metric: 'Dress & Presentation', desc: 'Matching the look of your venue', krsk: 'Tailored suits or formal black tie', generic: 'Plain generic security uniform' },
  { metric: 'Management', desc: 'Experience of the people in charge', krsk: 'Experienced security specialists', generic: 'Ordinary retail security staff' },
  { metric: 'Control Room Back-Up', desc: 'Real-time support and monitoring', krsk: '24/7 control room with live GPS tracking', generic: 'Occasional phone check-in' },
  { metric: 'Backup Response Time', desc: 'How fast extra officers arrive', krsk: 'Fast deployment across London', generic: '1–3 hours or untrained patrols' },
  { metric: 'Privacy', desc: 'Protecting your name and details', krsk: 'Signed NDAs with full data privacy', generic: 'Basic standard contracts' }
];

const testimonials = [
  { quote: '“Krsk made our security feel like part of our five-star service. Our guests feel safe without ever feeling watched.”', role: 'General Manager', org: 'Mayfair 5-Star Hotel', duration: 'Client Since 2021' },
  { quote: '“They are brilliant on New Bond Street. The officers are smart, polite, and give our customers and staff real confidence.”', role: 'Director of Retail Operations', org: 'Bond Street Luxury Maison', duration: 'Security Partner' },
  { quote: '“When moving our family between homes and private airports, Krsk\'s close protection team is always precise and professional.”', role: 'Chief of Staff', org: 'International Family Office', duration: 'Home & Travel Security' }
];

export default function WhyChooseUsPage() {
  const [activeTab, setActiveTab] = useState('all');

  useReveal();

  const filteredCaseStudies = activeTab === 'all' ? caseStudies : caseStudies.filter(c => c.category === activeTab);

  return (
    <div className="bg-[#0A0A0C] text-[#E5E1E4] font-sans antialiased selection:bg-[#D4AF37] selection:text-black min-h-screen overflow-x-hidden w-full">

      <Navbar />

      {/* ── BREADCRUMBS ── */}
      <section className="w-full bg-[#060608] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-gray-400">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <span className="text-brand-gold/40">•</span>
            <span className="text-brand-gold">Why Choose Us</span>
            <span className="text-brand-gold/40">•</span>
            <span className="text-gray-500">Our Standards</span>
          </nav>
          <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 shadow-sm border border-white/10">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="text-[10px] text-white tracking-wider font-semibold uppercase">0.00% Breach Record</span>
            <span className="text-gray-500 text-[10px]">•</span>
            <span className="text-[10px] text-gray-400 uppercase">100% Client Retention</span>
            <span className="text-gray-500 text-[10px]">•</span>
            <span className="text-[10px] text-brand-gold uppercase font-semibold">100% BS 7858 Vetted</span>
          </div>
        </div>
      </section>

      {/* ── HERO SECTION ── */}
      <section className="w-full relative overflow-hidden bg-[#0A0A0C] py-12 lg:py-24">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" data-aos="fade-up">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-sm bg-white/5 text-brand-gold shadow-sm border border-brand-gold/20">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-brand-gold">Expert Security • Full Discretion</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-serif text-white font-semibold">
              Why Clients Choose <span className="italic text-brand-gold font-normal">Krsk Security</span>
            </h1>
            <p className="text-base text-gray-400 max-w-3xl leading-relaxed">
              Find out why London’s top hotels, Mayfair private clubs, Bond Street jewellery shops, and private families trust Krsk Security Services to protect them.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a className="px-6 py-3 rounded-sm bg-brand-gold text-black text-sm font-semibold tracking-wider hover:bg-brand-gold-hover transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)]" href="#operational-pillars">
                Our Standards
              </a>
            </div>
          </div>

          {/* KEY METRICS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16" data-aos="fade-up" data-aos-delay="100">
            {[
              { label: 'Client Trust', icon: 'handshake', val: '100%', desc: 'Client satisfaction rating across all our security jobs.' },
              { label: 'Response Time', icon: 'timer', val: '< 7 Min', desc: 'Fast backup from mobile patrol units in Mayfair and Knightsbridge.' },
              { label: 'Vetting Level', icon: 'policy', val: '100%', desc: 'BS 7858 and Enhanced DBS checked with 5 to 10-year background checks.' },
              { label: 'Insurance Cover', icon: 'shield_with_house', val: 'Covered', desc: 'Full liability insurance for all security work.' },
            ].map(m => (
              <div key={m.label} className="p-6 rounded-sm bg-[#131418] shadow-sm border border-white/5 flex flex-col justify-between hover:bg-[#181A1F] hover:border-brand-gold/20 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] text-brand-gold tracking-widest uppercase font-semibold">{m.label}</span>
                  <span className="material-symbols-outlined text-brand-gold text-[20px]">{m.icon}</span>
                </div>
                <div className="text-[40px] font-serif leading-tight text-white font-semibold">{m.val}</div>
                <p className="text-[12px] text-gray-400 mt-2 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 1: THE SIX PILLARS OF OPERATIONAL EXCELLENCE ── */}
      <section className="w-full bg-[#0e0e10] py-14 lg:py-28 border-y border-white/5" id="operational-pillars">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12 lg:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6" data-aos="fade-up">
            <div className="max-w-2xl space-y-3">
              <span className="text-[11px] text-brand-gold tracking-[0.2em] uppercase font-bold">Our Standards</span>
              <h2 className="text-2xl sm:text-3xl md:text-[40px] leading-tight font-serif text-white">Six Reasons to Choose Krsk</h2>
            </div>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              Every job is run to strict standards, keeping you safe while never getting in the way of your guests or business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div key={p.num} className="p-8 rounded-sm bg-[#131418] shadow-sm border border-white/5 flex flex-col justify-between hover:bg-[#181A1F] hover:border-brand-gold/20 transition-all group" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-serif text-brand-gold/30 font-bold group-hover:text-brand-gold transition-colors">{p.num}</span>
                    <span className="material-symbols-outlined text-brand-gold text-[24px] group-hover:scale-110 transition-transform">{p.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="text-[12px] text-gray-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-gray-400 text-[10px] tracking-wider uppercase font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                  {p.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* ── SECTION 5: CTA ── */}
      <section className="w-full bg-[#0e0e10] py-14 lg:py-24 border-t border-white/5" id="contact">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="p-8 sm:p-10 lg:p-16 rounded-sm bg-[#181A1F] border border-brand-gold/20 shadow-2xl relative overflow-hidden flex flex-col items-center text-center" data-aos="fade-up">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="max-w-3xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-gold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping"></span>
                <span className="text-[10px] uppercase tracking-widest font-semibold">KRSK Control Room • 24/7 Live</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[40px] leading-tight font-serif text-white">
                Ready to Get Started?
              </h2>
              <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Book a free, private security check at Green lane Morden, London. SM4 6SS. Get your tailored security plan within 4 hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-brand-gold text-black text-sm font-semibold tracking-wider hover:bg-brand-gold-hover transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)]" href="https://krsksecuritysevices.com/contact#form-section">
                  Book Free Consultation
                </a>
                <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-white/5 border border-white/10 text-white text-sm font-semibold tracking-wider hover:bg-white/10 transition-all shadow-sm" href="tel:+447466463048">
                  <span className="material-symbols-outlined text-[18px] text-brand-gold">call</span>
                  <span>Call Us: +44 7466 463048</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#060608] border-t border-white/5 py-10 sm:py-16 text-gray-400 text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt="KRSK Security Services" className="h-9 w-9 object-contain rounded-md" />
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
