"use client";
import 'aos/dist/aos.css';
import { useReveal } from '@/hooks/useReveal';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

/* ── data ── */
const trustBadges = [
  { icon: 'verified_user', title: 'SIA Approved', sub: 'Contractor Scheme' },
  { icon: 'fingerprint', title: 'BS 7858 Vetted', sub: 'Fully Checked Staff' },
  { icon: 'policy', title: 'ICO Registered', sub: 'Data Protected' },
  { icon: 'workspace_premium', title: 'Safe Contractor', sub: 'Gold Certified' },
];

const protocols = [
  { icon: 'checkroom', title: 'The Right Dress Code', desc: 'Black tie, smart suits, or plain clothes — our officers always match your venue.' },
  { icon: 'record_voice_over', title: 'Calm Conflict Handling', desc: 'We settle problems quietly and politely, before they disturb your guests.' },
  { icon: 'encrypted', title: 'Secure Reporting', desc: 'Encrypted incident reports that keep your details safe and private.' },
  { icon: 'lock', title: 'Full Confidentiality', desc: 'Every officer signs a strict non-disclosure agreement.' },
];

const pillars = [
  { num: '01', icon: 'badge', title: 'Thorough Vetting', desc: 'Every officer passes a full BS 7858 background check, DBS criminal record check, identity verification, and reference review.', bar: 100, badge: 'BS 7858 Checked' },
  { num: '02', icon: 'dry_cleaning', title: 'Smart Presentation', desc: 'Every officer represents your brand. We provide suits, black tie, or plain clothes to suit your venue.', bar: 96, badge: '100% Smart Dress' },
  { num: '03', icon: 'hub', title: 'Smart Technology', desc: 'Live patrol checks, fast incident alerts, and a direct link to our 24/7 London control room.', bar: 98, badge: 'Real-Time Updates' },
  { num: '04', icon: 'key', title: 'Total Confidentiality', desc: 'Strict non-disclosure rules, privacy-first body cameras, and full discretion on every job.', bar: 100, badge: 'Zero Breach Record' },
];

const leaders = [
  { name: 'Julian Thorne', role: 'Founder & Managing Director', roleShort: 'Managing Director', desc: 'Over 18 years protecting VIPs and major sites across London and Zurich.', badge: 'Security Specialist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCocXaPfLjSDU0C_HZiu1gscM0zWVmaaotRI1IB5mZ7FYL9ujt_dK4cQwouRIYiSXZjMp5_yfc4EZjWyA-BfCkYMuSRFa91bjwSMKPn74X4zte-t332fz81tgORmOzCj3bQMlzViJAGNlL7Etpdfs_kE4fXRiWscabdaTYF8a6j4dZJqwnv0UrE8bK8XEevDrlPfFk_1efwTJrChNBwYtRmFez1PwtjJyO25fPX1o2ST16xx_ZXInWDKg' },
  { name: 'Victoria Sterling', role: 'Head of Ops & Compliance', roleShort: 'Operations Lead', desc: 'Leads on SIA standards, BS 7858 checks, and counter-terror awareness training.', badge: 'Compliance Specialist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOMUkHMDZ_Lmmd3Wb1SX-ZXeYHUO-aYve95npfF1XTymyFi4WoXDaeJeKOhg51GuGiJL-dpTH5Uv-GrFMi2vcY8qiKWZ_l9dVaws4FFFDP8ymRRekfl2fXc4erXKGRN03mweOssnDmutLbmCigFBV5n8Kuf-fbFQCmgu3gv8iktozix_1QZCYnrkvIpNlD97KTSvGVPTt7g9bp20cVdqkd4WX-mTx0wMy1fbN3blZWD9JrrJjrlLDQAQ' },
  { name: 'Marcus Vance', role: 'Director of VIP & Close Protection', roleShort: 'Close Protection', desc: 'Specialises in close protection for VIPs and safe travel planning.', badge: 'Close Protection Lead', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwAQcMKuDraauejpNbps9oaRy9I5RV2s9oNjrtlZR9tdVm8O7sQBxk_Xy_op3PMMyBpKs-_cbu0FpK9g01uv7tSTwk2oWb38u7nxjwZTmLs0ywvIDGtOt_ulrhgKGGxloxU3v2j79b-53tbhFqcVeh25bl6o6On6vaYOVDUMzFxTuUFwWy0jvCxEYsUFcxuEWyKvzE5iWvaAMmzqjqBwt9O1xuM7UtVO54SGLaG4KupIdBKhFtuWA9zg' },
  { name: 'Eleanor Montrose', role: 'Head of Hospitality Relations', roleShort: 'Client Relations', desc: 'Former guest safety director for 5-star West End hotels. Makes sure every job meets five-star standards.', badge: 'Luxury West End Alum', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYKK212yXOkmL2_GfWt-wcmemRrxYx_hUDH6M1Acxk3ZOmIn22Nn8iYaFTtVNBd07jwzmWq6tZmICZOc3hCh2kgaYjFIH7W4SRjWW0cVtQ2XrHHKyw2X0CozUXXNUAw5qP_8AKmgTjWCTiE-oaaDtMqjaxQ3cswBkx2AUgjzodPQdvDPJ22yaLlyId9FF0BcUHBRjTyOEw6Dy2ehXC5LT46R_XVxOW4nHj5suWoHLApnchmNUJNWMtfA' },
];

const accreditations = [
  { icon: 'verified', title: 'SIA Approved Contractor', desc: 'Officially assessed to the SIA ACS standard for best-practice security work.' },
  { icon: 'fingerprint', title: 'BS 7858 Screening', desc: 'Full background checks, ID validation, and past employment checks for every officer.' },
  { icon: 'verified_user', title: 'ISO 9001 Certified Quality', desc: 'Consistent officer training and clear management so quality never slips.' },
  { icon: 'verified_user', title: 'ACT Certified Officers', desc: 'All front-line officers are trained in Action Counters Terrorism awareness.' },
  { icon: 'medical_services', title: 'First Aid Trained', desc: 'Officers hold FAAW Level 3 first aid training for fast emergency response.' },
  { icon: 'account_balance', title: '£10M Insurance Cover', desc: 'Full insurance cover for security guarding and close protection work.' },
];

export default function AboutPage() {

  useReveal();

  return (
    <div className="bg-[#0A0A0C] text-[#E5E1E4] font-sans antialiased selection:bg-[#D4AF37] selection:text-black min-h-screen overflow-x-hidden w-full">

      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-10 lg:pt-20 pb-12 lg:pb-16">
        <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-brand-textMuted mb-6" data-aos="fade-down">
            <Link href="/" className="hover:text-brand-gold transition">Home</Link>
            <span className="text-brand-gold/40">•</span>
            <span className="text-brand-gold">About Us</span>
            <span className="text-brand-gold/40">•</span>
            <span className="text-brand-textDim">London</span>
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-gold/40 bg-brand-overlay backdrop-blur-md mb-6" data-aos="fade-up">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-bold text-brand-gold">London • BS 7858 & SIA Accredited</span>
          </div>

          {/* Headline Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-10 lg:mb-12">
            <div className="lg:col-span-8" data-aos="fade-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.08] font-serif font-semibold text-brand-text tracking-tight">
                Trusted <span className="italic font-normal text-brand-gold">Security</span> You Can Rely On
              </h1>
            </div>
            <div className="lg:col-span-4 lg:pb-2" data-aos="fade-up" data-aos-delay="100">
              <p className="text-base text-brand-textMuted font-light leading-relaxed">
                We combine professional security expertise with the calm, discreet service that London's top venues, businesses, and families expect.
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3" data-aos="fade-up" data-aos-delay="200">
            {trustBadges.map((b, i) => (
              <div key={i} className="p-4 rounded-sm bg-[#131418] shadow-sm flex items-center gap-3 border border-brand-borderSubtle">
                <div className="w-9 h-9 rounded-sm bg-brand-glass flex items-center justify-center text-brand-gold shrink-0">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>{b.icon}</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[12px] font-semibold text-brand-text truncate">{b.title}</span>
                  <span className="text-[10px] uppercase tracking-wider text-brand-textMuted font-semibold">{b.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16" data-aos="fade-up">
        <div className="relative w-full h-80 md:h-[420px] rounded-sm overflow-hidden shadow-2xl bg-[#0e0e10]">
          <img className="w-full h-full object-cover brightness-[0.78] contrast-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPqn4fvgbgaPNedzEUcucCYhLxWYdTzdMCf1DHtTWUydH4NoxgYDNIlc9A4V9au03-7SkgPBLDmfUqLwXwcyzFB7fM_EhV4t1m6C_o27zQEp5z7NDd8L1s3py_jiRogNQihAB9HM-hzPDuplIzkUElmUOyT9dk3Q4WROETwNb0I8qnbNHWDf3SXwM5KNikcz_1nVqh9iE7Hlh42uRbLrjaUB6VFHN3L17O7ZdXUyjvDR84iST95v-DBQ" alt="KRSK Security Officer in Mayfair" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-[#0A0A0C]/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="p-4 rounded-sm bg-[#0A0A0C]/90 backdrop-blur-md max-w-lg shadow-xl border border-brand-borderSubtle">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-brand-gold">Live in London</span>
              </div>
              <p className="text-sm font-semibold text-brand-text mb-1">Our London Office</p>
              <p className="text-[12px] text-brand-textMuted leading-relaxed">Green lane Morden, London. SM4 6SS. Coordinating close protection and venue security across London.</p>
            </div>
            <div className="hidden sm:flex items-center gap-4 bg-brand-glass backdrop-blur-md px-5 py-3 rounded-sm shadow-lg border border-brand-borderSubtle">
              <div className="text-right">
                <div className="text-xl font-serif font-semibold text-brand-gold leading-none">0.00%</div>
                <div className="text-[10px] uppercase tracking-wider text-brand-textMuted mt-1">No Breaches Since 2021</div>
              </div>
              <div className="w-px h-10 bg-brand-glassHover" />
              <div className="text-right">
                <div className="text-xl font-serif font-semibold text-brand-gold leading-none">&lt; 7m</div>
                <div className="text-[10px] uppercase tracking-wider text-brand-textMuted mt-1">Average London Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERITAGE & FOUNDING ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col space-y-4" data-aos="fade-right">
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[1px] bg-brand-gold" />
              <span className="text-[11px] tracking-[0.25em] uppercase font-bold text-brand-gold">Our Story</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] leading-tight font-serif text-brand-text">Discreet Security, <br /><span className="italic font-normal text-brand-gold">Done Right.</span></h2>
            <p className="text-base text-brand-text leading-relaxed pt-2">Krsk Security was founded in London because we saw that the city's best venues, embassies, and luxury shops were poorly served by ordinary security firms.</p>
            <p className="text-sm text-brand-textMuted leading-relaxed">We do things differently. We choose officers not only for their skill and SIA licence, but also for their good manners, calm nature, and understanding of high-end service.</p>
            <p className="text-sm text-brand-textMuted leading-relaxed">From a private club in Mayfair to a royal event or a jewellery shop on Bond Street, our officers always stay calm, friendly, and professional.</p>
            <p className="text-sm text-brand-textMuted leading-relaxed pt-4 border-t border-brand-borderSubtle">
              Fully SIA-licensed, BS 7858 vetted, and insured to £10M — trusted by London venues, businesses, and private clients.
            </p>
          </div>

          {/* KRSK Protocol Card */}
          <div className="lg:col-span-5 lg:-mt-4" data-aos="fade-left">
            <div className="p-7 rounded-sm bg-[#181A1F] shadow-2xl relative overflow-hidden border border-brand-borderSubtle">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-brand-gold text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_house</span>
                  <span className="text-sm font-semibold text-brand-text">Our Service Promise</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-glass text-[10px] uppercase tracking-widest text-brand-gold font-semibold">Our Standards</span>
              </div>
              <p className="text-[12px] text-brand-textMuted mb-4 leading-relaxed">The simple rules every officer follows to protect your guests, your property, and your privacy.</p>
              <div className="space-y-2">
                {protocols.map((p, i) => (
                  <div key={i} className="p-3 bg-white/[0.03] rounded-sm flex items-start gap-3 border border-brand-borderSubtle">
                    <div className="w-7 h-7 rounded-sm bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">{p.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-text">{p.title}</h4>
                      <p className="text-[11px] text-brand-textMuted">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between border-t border-brand-borderSubtle">
                <span className="text-[10px] uppercase tracking-wider text-brand-textDim">Ref: KRSK-SOP-V4</span>
                <a className="text-[12px] text-brand-gold font-semibold hover:underline inline-flex items-center gap-1" href="#">Read Our Standards <span className="material-symbols-outlined text-[14px]">arrow_forward</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUR PILLARS ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-brand-gold" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-bold text-brand-gold">What Sets Us Apart</span>
            <span className="w-6 h-[1px] bg-brand-gold" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] leading-tight font-serif text-brand-text">Four Things We Do Right</h2>
          <p className="text-base text-brand-textMuted mt-2">Built to meet the high standards of London's top venues, businesses, and private clients.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, i) => (
            <div key={p.num} className="group p-7 rounded-sm bg-[#131418] hover:bg-[#181A1F] transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between border border-brand-borderSubtle hover:border-brand-gold/20" data-aos="fade-up" data-aos-delay={i * 100}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-serif font-bold text-brand-gold/30 group-hover:text-brand-gold transition-colors">{p.num}</span>
                  <div className="w-10 h-10 rounded-sm bg-brand-glass flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-colors">
                    <span className="material-symbols-outlined text-[22px]">{p.icon}</span>
                  </div>
                </div>
                <h3 className="text-base font-semibold text-brand-text mb-2">{p.title}</h3>
                <p className="text-[12px] text-brand-textMuted leading-relaxed mb-4">{p.desc}</p>
              </div>
              <div className="pt-3">
                <div className="w-full bg-brand-glass h-1 rounded-full overflow-hidden">
                  <div className="bg-brand-gold h-full transition-all duration-500" style={{ width: `${p.bar}%` }} />
                </div>
                <span className="block mt-2 text-[10px] uppercase tracking-widest text-brand-gold font-semibold">{p.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* ── CTA BANNER ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 mb-8" id="contact">
        <div className="p-8 lg:p-12 rounded-sm bg-[#181A1F] relative overflow-hidden shadow-2xl border border-brand-borderSubtle" data-aos="fade-up">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 flex flex-col space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-6 rounded-sm bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <span className="material-symbols-outlined text-[16px]">assured_workload</span>
                </span>
                <span className="text-[11px] tracking-[0.25em] uppercase font-bold text-brand-gold">Full Privacy Guaranteed</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[40px] leading-tight font-serif text-brand-text">Book a Free Security Consultation</h2>
              <p className="text-sm text-brand-textMuted max-w-2xl leading-relaxed">Contact our team to arrange a discreet, free security check for your London venue, office, or home.</p>
              <div className="flex flex-wrap items-center gap-4 text-brand-textMuted text-[12px] pt-2">
                {['Non-Disclosure Agreement Ready', 'Tailored Security Plan', 'Quick Deployment Available'].map(t => (
                  <span key={t} className="flex items-center gap-1.5"><span className="material-symbols-outlined text-brand-gold text-[16px]">done</span>{t}</span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-brand-gold text-black text-sm font-semibold hover:bg-brand-gold-hover transition-all shadow-[0_0_24px_rgba(212,175,55,0.3)]" href="https://krsksecuritysevices.com/contact#form-section">
                <span>Book Free Consultation</span>
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              </a>
              <a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-brand-glass text-brand-gold hover:bg-brand-glassHover transition-all text-[12px] font-semibold border border-brand-borderLight" href="tel:+447466463048">
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>Call Us: +44 7466 463048</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#060608] border-t border-brand-borderSubtle py-10 sm:py-16 text-brand-textMuted text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt="KRSK Security Services" width={36} height={36} style={{ maxWidth: '36px', maxHeight: '36px' }} className="h-9 w-9 object-contain rounded-md" />
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
              {['Hotel Security', 'Restaurant & Bar Security', 'Club Security', 'Close Protection', 'Event Security', 'Residential Security', 'Retail Security', 'Corporate Security'].map(s => (
                <li key={s}><Link href="/services" className="hover:text-brand-gold transition">{s}</Link></li>
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
