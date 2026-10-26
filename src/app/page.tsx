
"use client";
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import { useReveal } from '@/hooks/useReveal';
import Link from 'next/link';

export default function Home() {
  const handleHomeFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const body = Array.from(formData.entries())
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    window.location.href = `mailto:info@krsksecurityservices.com?subject=Home Page Inquiry&body=${encodeURIComponent(body)}`;
    e.currentTarget.reset();
    alert('Request initiated. We will contact you shortly.');
  };

  useReveal();

  return (
    <div className="bg-[#0A0A0C] text-[#E5E1E4] font-sans antialiased selection:bg-[#D4AF37] selection:text-black min-h-screen">
      <Navbar />


      {/* ── HERO SECTION ── */}
      <section id="home" className="home-hero relative min-h-[100vh] flex items-center justify-center pt-4 pb-20 lg:pt-20 lg:pb-20">

        {/* Ken-Burns background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/hero-security.jpg"
            alt="Professional KRSK Security Officer outside a London building"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ animation: 'kenBurns 20s ease-in-out infinite alternate' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C]/50 via-transparent to-[#0A0A0C]/30" />
        </div>

        {/* Floating gold particles */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="absolute w-[2px] h-[2px] rounded-full bg-[#D4AF37]/60"
              style={{
                left: `${8 + i * 8}%`,
                top: `${20 + (i % 4) * 18}%`,
                animation: `floatDot ${3 + i * 0.4}s ease-in-out ${i * 0.3}s infinite alternate`,
              }}
            />
          ))}
        </div>

        {/* Golden radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] aspect-square rounded-full bg-[#D4AF37]/8 blur-[80px] md:blur-[120px] pointer-events-none z-[1]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full bg-[#D4AF37]/10 blur-[40px] md:blur-[60px] pointer-events-none z-[1] animate-pulse" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">

          {/* Eyebrow badge with stagger-in */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-[#D4AF37]/40 bg-black/40 backdrop-blur-md mb-6 sm:mb-8 opacity-0"
            style={{ animation: 'fadeSlideUp 0.8s ease-out 0.2s forwards' }}
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="text-[9px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold text-[#D4AF37] text-center">
              Trusted Security Services • London
            </span>
          </div>

          {/* Hero heading with stagger */}
          <h1
            className="text-[24px] leading-[1.1] sm:text-5xl md:text-6xl lg:text-[70px] sm:leading-[1.08] font-medium text-white tracking-tight font-serif mb-5 sm:mb-6 opacity-0"
            style={{ animation: 'fadeSlideUp 0.9s ease-out 0.45s forwards' }}
          >
            Premium Security.<br />
            <span className="italic text-[#D4AF37] font-serif relative">
              Trusted Protection in London.
              <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="max-w-3xl text-sm sm:text-lg text-gray-300 font-light leading-relaxed mb-8 sm:mb-10 text-center opacity-0"
            style={{ animation: 'fadeSlideUp 0.9s ease-out 0.65s forwards' }}
          >
            We provide trained, SIA-licensed security officers for hotels, restaurants, clubs, offices, events, and homes across London. Friendly, reliable, and always discreet.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10 sm:mb-14 opacity-0"
            style={{ animation: 'fadeSlideUp 0.9s ease-out 0.85s forwards' }}
          >
            <Link
              href="/contact#form-section"
              className="w-full sm:w-auto px-5 py-3 sm:px-7 sm:py-3.5 bg-[#D4AF37] text-black text-[10px] sm:text-xs uppercase tracking-[0.16em] font-bold rounded-sm hover:bg-[#C9A227] transition duration-200 shadow-[0_0_32px_rgba(212,175,55,0.35)] flex items-center justify-center gap-2 group"
            >
              <span>Book a Free Consultation</span>
              <span className="material-symbols-outlined text-[14px] sm:text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <a
              href="tel:+447466463048"
              className="w-full sm:w-auto px-5 py-3 sm:px-7 sm:py-3.5 bg-white/5 border border-white/20 hover:border-[#D4AF37]/60 text-white text-[10px] sm:text-xs uppercase tracking-[0.16em] font-semibold rounded-sm hover:bg-white/10 transition duration-200 backdrop-blur-md flex items-center justify-center gap-2.5"
            >
              <span className="material-symbols-outlined text-[#D4AF37] text-[16px] sm:text-[18px]">call</span>
              <span>Call Us 24/7: +44 7466 463048</span>
            </a>
          </div>

          {/* Stats bar */}
          <div
            className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-0 rounded-sm overflow-hidden border border-white/10 bg-black/50 backdrop-blur-xl opacity-0"
            style={{ animation: 'fadeSlideUp 0.9s ease-out 1.05s forwards' }}
          >
            {[
              { val: '100%', label: 'Vetted Officers' },
              { val: 'Rapid', label: 'Fast Response' },
              { val: '24/7', label: 'Always On Duty' },
              { val: 'Fully', label: 'Insured' },
            ].map((s, i) => (
              <div key={s.label} className={`text-center p-3 sm:p-5 border-white/10 ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b md:border-b-0' : ''} md:border-r ${i === 3 ? 'md:border-r-0' : ''} hover:bg-[#D4AF37]/5 transition-colors`}>
                <div className="text-xl sm:text-3xl font-serif font-bold text-[#D4AF37] mb-1">{s.val}</div>
                <div className="text-[8px] sm:text-[10px] uppercase tracking-wider text-gray-400 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0C] to-transparent pointer-events-none z-[2]" />
      </section>


      <section id="deployments" className="py-24 bg-[#0A0A0C] border-t border-brand-border-subtle relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold block mb-2">WHERE WE WORK</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-brand-text tracking-tight">Security Officers Across London</h2>
            </div>
            <p className="max-w-md text-sm text-brand-textMuted font-light leading-relaxed">
              Our officers look smart and professional. They fit in at luxury shops, hotels, business offices, and private events without drawing unwanted attention.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

            <div className="group rounded-md overflow-hidden bg-brand-card border border-brand-border flex flex-col hover:border-brand-gold/60 transition duration-300">
              <div className="relative h-[320px] overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTFwAO_45EQMz3elVnuY6vii7-xvheUWDhe85Fs8pOQuHfjc4aPFALrRjy1z6K977DpaJb_uLakwk1xKgg5OiN-nmTio9KKq2F7XKzYxESqEubPjsdbn2hEfAbU04v-_ChTPJSwD6N8-rrqeNt6W_rL18Gw-xKOo4HAu2eFqMqP1gfI6gRNwKgmhkCSNgwqYPa4tcSirmCdL3jUT5PVO_hqs9HrblSM5K-Nf0dbZmlCCnVjssBhXSRRA" alt="Security officers at a luxury London hotel entrance" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-black/20"></div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-black/75 backdrop-blur-md border border-brand-gold/30 text-[10px] uppercase tracking-widest text-brand-gold font-semibold rounded-sm">
                  Hotels & Venues
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-semibold text-brand-text mb-2">Smart, Professional Front of House</h3>
                  <p className="text-xs text-brand-textMuted leading-relaxed">
                    Our officers wear smart, tailored suits that suit luxury hotels, private clubs, and fine dining venues.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-brand-borderSubtle flex items-center justify-between text-[11px] text-brand-textMuted">
                  <span>Dress: Smart Tailored Suit</span>
                  <span className="text-brand-gold font-medium">KRSK Standard</span>
                </div>
              </div>
            </div>


            <div className="group rounded-md overflow-hidden bg-brand-card border border-brand-border flex flex-col hover:border-brand-gold/60 transition duration-300">
              <div className="relative h-[320px] overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLajs0ZZAVUtMI4GaGSzdrWLaBAV4d9jG8DmgDQaGhlMt4O_yToTCZZ-STs52zJqOuODTRny6pjfS3TsuUKfQ-fgk3j4I5ftUf5kmH3G9u8DIFbwOOWR1Gq8J9UJUIfNrnA5S1wI6_Ky5HfuE9zjkPqjWkvTMYtVRBjGePCtC_FT_OXVBWy0RPuvtjFmw17nEKNdXXNtYkOl6v-j3Gr_dWj7ti1BlWpUZP3ld4OAibg-4V4D6qmSdi8w" alt="Close protection officer in London" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-black/20"></div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-black/75 backdrop-blur-md border border-brand-gold/30 text-[10px] uppercase tracking-widest text-brand-gold font-semibold rounded-sm">
                  Close Protection
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-semibold text-brand-text mb-2">Event Security</h3>
                  <p className="text-xs text-brand-textMuted leading-relaxed">
                    We provide security for events of all sizes, from private parties to large public gatherings. We manage crowds, entry, and safety.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-brand-borderSubtle flex items-center justify-between text-[11px] text-brand-textMuted">
                  <span>Licence: Close Protection SIA</span>
                  <span className="text-brand-gold font-medium">Secure Place</span>
                </div>
              </div>
            </div>


            <div className="group rounded-md overflow-hidden bg-brand-card border border-brand-border flex flex-col hover:border-brand-gold/60 transition duration-300">
              <div className="relative h-[320px] overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmqYZiCh4QBA8sQYI9TmG8qTnomO3sMRlP1vEkLNsdX7IbqlLCkLCLKzV7-JgQQudMtLrnzvdn8U11P1CkRgdS3Bcr8btmTQoK1Nkchb6DjHb78yVMRh-67eTfRcypNdhgnLT75l-VET_a0vKc47nP4UIPKkHE7J5kY78-HCWYsV6vgMPIOfM4Cnof7Mn0Bp3wzPK3blJJmjOKhoDxzp9G2lDptAANAno_IvTytfZTGeE3kLFACGXXEw" alt="Boutique door guard welcoming shoppers" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-black/20"></div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-black/75 backdrop-blur-md border border-brand-gold/30 text-[10px] uppercase tracking-widest text-brand-gold font-semibold rounded-sm">
                  Shops & Retail
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-semibold text-brand-text mb-2">Retail & Theft Prevention</h3>
                  <p className="text-xs text-brand-textMuted leading-relaxed">
                    Friendly, watchful officers who stop shoplifting and protect high-value goods without upsetting customers.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-brand-borderSubtle flex items-center justify-between text-[11px] text-brand-textMuted">
                  <span>Skills: Calm & Alert</span>
                  <span className="text-brand-gold font-medium">Warm Welcome</span>
                </div>
              </div>
            </div>
          </div>


          <div className="mt-8 rounded-md overflow-hidden border border-brand-border bg-brand-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 relative h-72 lg:h-96">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYmoaKlHEgSTtzfeY1ml58jNT6XDy4uiuDxRBlqxeL90HtsKEf1xKacOeAVanhPqhNcnntgIXMZWbwGB99NzE6toOEq5nwVaFy7aABAGiPyQUbbNKOqDctqBtYNxS4c-XAf-7Ky5AKD9eLk1OUCx4-eRzv4y7aHq2qlDxvYvAqj9bUN3A1xfH22OPl-op0hZ_CXpA1EXiENp6xhuAz6uJGxF88CdkqjQQh-Nq4mWiVLWz5y7Lg9tTlFw" alt="KRSK Security London control room" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A0A0C]/50 to-[#0A0A0C] hidden lg:block"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/40 to-transparent lg:hidden"></div>
              </div>
              <div className="lg:col-span-5 p-8 lg:p-12 z-10">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  24/7 CONTROL ROOM
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-brand-text mb-4">
                  Always Watching, Day and Night
                </h3>
                <p className="text-xs sm:text-sm text-brand-textMuted font-light leading-relaxed mb-6">
                  Our control room keeps in touch with every officer on duty. We track their location, do regular check-ins, and can send backup fast if anything goes wrong.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-borderLight text-xs text-brand-textMuted mb-6">
                  <div>
                    <span className="block text-brand-text font-medium">Live Officer Tracking</span>
                    <span>We always know where they are</span>
                  </div>
                  <div>
                    <span className="block text-brand-text font-medium">Fast Backup Team</span>
                    <span>On site in minutes</span>
                  </div>
                </div>
                <a href="tel:+447466463048" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-brand-gold hover:text-brand-text transition">
                  Call Our Control Room <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="services" className="py-24 bg-[#0E0F12] border-t border-brand-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold block mb-2">WHAT WE OFFER</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-brand-text tracking-tight">Our Security Services</h2>
            <p className="text-sm text-brand-textMuted mt-3 font-light">
              Security services for hotels, restaurants, clubs, businesses, events, and private homes across London.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-brand-card p-8 rounded-sm border border-brand-border-subtle hover:border-brand-gold/60 transition duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="p-2.5 rounded-sm bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                    <span className="material-symbols-outlined text-2xl">hotel</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-textDim font-mono">CODE: HTL-01</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-brand-text mb-2 group-hover:text-brand-gold transition duration-200">Hotel Security</h3>
                <p className="text-xs text-brand-textMuted leading-relaxed mb-6">
                  Trained officers who keep your guests, staff, and property safe. Friendly and professional at the door, alert across the building.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1.5 text-xs text-brand-gold font-semibold uppercase tracking-wider group-hover:translate-x-1 transition duration-150">
                Learn More <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>


            <div className="bg-brand-card p-8 rounded-sm border border-brand-border-subtle hover:border-brand-gold/60 transition duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="p-2.5 rounded-sm bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                    <span className="material-symbols-outlined text-2xl">restaurant</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-textDim font-mono">CODE: RST-02</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-brand-text mb-2 group-hover:text-brand-gold transition duration-200">Restaurant & Bar Security</h3>
                <p className="text-xs text-brand-textMuted leading-relaxed mb-6">
                  Polite, alert door staff who calmly handle busy nights, late hours, and difficult customers so your guests can enjoy their evening.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1.5 text-xs text-brand-gold font-semibold uppercase tracking-wider group-hover:translate-x-1 transition duration-150">
                Learn More <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>


            <div className="bg-brand-card p-8 rounded-sm border border-brand-border-subtle hover:border-brand-gold/60 transition duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="p-2.5 rounded-sm bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                    <span className="material-symbols-outlined text-2xl">nightlife</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-textDim font-mono">CODE: CLB-03</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-brand-text mb-2 group-hover:text-brand-gold transition duration-200">Club Security</h3>
                <p className="text-xs text-brand-textMuted leading-relaxed mb-6">
                  Experienced door supervisors and floor teams who manage entry, queues, and disputes to keep your club safe and running smoothly.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1.5 text-xs text-brand-gold font-semibold uppercase tracking-wider group-hover:translate-x-1 transition duration-150">
                Learn More <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>


            <div className="bg-brand-card p-8 rounded-sm border border-brand-border-subtle hover:border-brand-gold/60 transition duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="p-2.5 rounded-sm bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                    <span className="material-symbols-outlined text-2xl">shield_person</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-textDim font-mono">CODE: CP-04</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-brand-text mb-2 group-hover:text-brand-gold transition duration-200">Close Protection</h3>
                <p className="text-xs text-brand-textMuted leading-relaxed mb-6">
                  Personal bodyguards for VIPs, executives, and families. Discreet or visible, with safe travel planning and full protection.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1.5 text-xs text-brand-gold font-semibold uppercase tracking-wider group-hover:translate-x-1 transition duration-150">
                Learn More <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>


            <div className="bg-brand-card p-8 rounded-sm border border-brand-border-subtle hover:border-brand-gold/60 transition duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="p-2.5 rounded-sm bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                    <span className="material-symbols-outlined text-2xl">celebration</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-textDim font-mono">CODE: EVT-05</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-brand-text mb-2 group-hover:text-brand-gold transition duration-200">Event Security</h3>
                <p className="text-xs text-brand-textMuted leading-relaxed mb-6">
                  Entry checks, crowd control, and guest-list management for parties, galas, launches, and private events of any size.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1.5 text-xs text-brand-gold font-semibold uppercase tracking-wider group-hover:translate-x-1 transition duration-150">
                Learn More <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>


            <div className="bg-brand-card p-8 rounded-sm border border-brand-border-subtle hover:border-brand-gold/60 transition duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="p-2.5 rounded-sm bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                    <span className="material-symbols-outlined text-2xl">home_pin</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-textDim font-mono">CODE: RES-06</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-brand-text mb-2 group-hover:text-brand-gold transition duration-200">Residential Security</h3>
                <p className="text-xs text-brand-textMuted leading-relaxed mb-6">
                  24/7 guards for homes, estates, and apartment buildings. We control access, log visitors, and respond fast to any problem.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1.5 text-xs text-brand-gold font-semibold uppercase tracking-wider group-hover:translate-x-1 transition duration-150">
                Learn More <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>


            <div className="bg-brand-card p-8 rounded-sm border border-brand-border-subtle hover:border-brand-gold/60 transition duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="p-2.5 rounded-sm bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                    <span className="material-symbols-outlined text-2xl">storefront</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-textDim font-mono">CODE: RET-07</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-brand-text mb-2 group-hover:text-brand-gold transition duration-200">Retail Security</h3>
                <p className="text-xs text-brand-textMuted leading-relaxed mb-6">
                  Friendly but watchful officers who prevent theft and shoplifting in shops, boutiques, and shopping centres without harming the customer experience.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1.5 text-xs text-brand-gold font-semibold uppercase tracking-wider group-hover:translate-x-1 transition duration-150">
                Learn More <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>


            <div className="bg-brand-card p-8 rounded-sm border border-brand-border-subtle hover:border-brand-gold/60 transition duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="p-2.5 rounded-sm bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                    <span className="material-symbols-outlined text-2xl">apartment</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-textDim font-mono">CODE: CORP-08</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-brand-text mb-2 group-hover:text-brand-gold transition duration-200">Corporate Security</h3>
                <p className="text-xs text-brand-textMuted leading-relaxed mb-6">
                  Reception security, access control, and front-desk cover for offices and business buildings, keeping staff and visitors safe.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1.5 text-xs text-brand-gold font-semibold uppercase tracking-wider group-hover:translate-x-1 transition duration-150">
                Learn More <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>


      <section id="standards" className="py-24 bg-[#0A0A0C] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold block mb-2">WHY CHOOSE KRSK</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-brand-text tracking-tight">A Small, Focused Team.<br />Big on Quality.</h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-sm text-brand-textMuted font-light leading-relaxed">
                Many large security companies use untrained subcontractors. KRSK is different. We manage our own officers directly, check every one of them carefully, and make sure they always look smart and professional.
              </p>
            </div>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-sm bg-brand-surface border border-brand-border-subtle hover:border-brand-gold/40 transition duration-200">
              <div className="text-3xl font-serif font-bold text-brand-gold mb-3">01</div>
              <h3 className="text-base font-semibold text-brand-text mb-2 tracking-wide">Direct Manager Support</h3>
              <p className="text-xs text-brand-textMuted leading-relaxed">
                A senior manager looks after every job personally. You can call them directly — no call centres or middlemen.
              </p>
            </div>

            <div className="p-8 rounded-sm bg-brand-surface border border-brand-border-subtle hover:border-brand-gold/40 transition duration-200">
              <div className="text-3xl font-serif font-bold text-brand-gold mb-3">02</div>
              <h3 className="text-base font-semibold text-brand-text mb-2 tracking-wide">Professional Uniforms</h3>
              <p className="text-xs text-brand-textMuted leading-relaxed">
                Every officer wears a sharp, tailored dark suit. No cheap, ill-fitting uniforms. They look the part and match your brand.
              </p>
            </div>

            <div className="p-8 rounded-sm bg-brand-surface border border-brand-border-subtle hover:border-brand-gold/40 transition duration-200">
              <div className="text-3xl font-serif font-bold text-brand-gold mb-3">03</div>
              <h3 className="text-base font-semibold text-brand-text mb-2 tracking-wide">Fully Checked Officers</h3>
              <p className="text-xs text-brand-textMuted leading-relaxed">
                Every officer goes through full background checks, right-to-work checks, and a clean DBS criminal record check.
              </p>
            </div>

            <div className="p-8 rounded-sm bg-brand-surface border border-brand-border-subtle hover:border-brand-gold/40 transition duration-200">
              <div className="text-3xl font-serif font-bold text-brand-gold mb-3">04</div>
              <h3 className="text-base font-semibold text-brand-text mb-2 tracking-wide">Complete Confidentiality</h3>
              <p className="text-xs text-brand-textMuted leading-relaxed">
                We keep everything private. No recording, no posting on social media, and NDAs available for your complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>





      <section id="contact" className="py-24 bg-[#0A0A0C] border-t border-brand-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold block mb-2">GET IN TOUCH</span>
                <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-brand-text tracking-tight mb-6">Contact Us Privately</h2>
                <p className="text-xs sm:text-sm text-brand-textMuted font-light leading-relaxed mb-8">
                  Talk to our team directly. Whether you need close protection, security for a venue, or officers for your office, we are here to help.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-sm bg-brand-surface border border-brand-borderSubtle">
                    <span className="p-2 rounded bg-brand-gold/10 text-brand-gold material-symbols-outlined">location_on</span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-brand-textMuted font-medium">Office</div>
                      <div className="text-sm font-medium text-brand-text">Green lane Morden, London. SM4 6SS</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-sm bg-brand-surface border border-brand-borderSubtle">
                    <span className="p-2 rounded bg-brand-gold/10 text-brand-gold material-symbols-outlined">call</span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-brand-textMuted font-medium">Phone (24/7)</div>
                      <div className="text-sm font-medium text-brand-text">+44 7466 463048</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-sm bg-brand-surface border border-brand-borderSubtle">
                    <span className="p-2 rounded bg-brand-gold/10 text-brand-gold material-symbols-outlined">mail</span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-brand-textMuted font-medium">Email</div>
                      <div className="text-sm font-medium text-brand-text">info@krsksecurityservices.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-borderLight text-[11px] text-brand-textMuted">
                <span className="text-brand-gold font-semibold">Your Privacy:</span> All enquiries are kept strictly private and confidential.
              </div>
            </div>


            <div className="lg:col-span-7 bg-brand-card p-8 sm:p-10 rounded-sm border border-brand-border gold-glow">
              <h3 className="text-2xl font-serif font-semibold text-brand-text mb-2">Request a Free Quote</h3>
              <p className="text-xs text-brand-textMuted mb-8 font-light">Fill in the form below and we will get back to you within 15 minutes.</p>

              <form className="space-y-5" onSubmit={handleHomeFormSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-brand-textMuted mb-2 font-medium">Full Name *</label>
                    <input name="fullName" type="text" placeholder="Your Full Name" className="w-full bg-[#1A1C22] border border-brand-borderLight rounded-sm text-sm text-brand-text px-4 py-3 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none" required />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-brand-textMuted mb-2 font-medium">Company / Organisation</label>
                    <input name="organization" type="text" placeholder="Company or Home" className="w-full bg-[#1A1C22] border border-brand-borderLight rounded-sm text-sm text-brand-text px-4 py-3 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-brand-textMuted mb-2 font-medium">Phone Number *</label>
                    <input name="phone" type="tel" placeholder="+44 (0) 7700 900123" className="w-full bg-[#1A1C22] border border-brand-borderLight rounded-sm text-sm text-brand-text px-4 py-3 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none" required />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-brand-textMuted mb-2 font-medium">Service Needed *</label>
                    <select name="service" className="w-full bg-[#1A1C22] border border-brand-borderLight rounded-sm text-sm text-brand-text px-4 py-3 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none">
                      <option>Hotel Security</option>
                      <option>Restaurant & Bar Security</option>
                      <option>Club Security</option>
                      <option>Close Protection</option>
                      <option>Event Security</option>
                      <option>Residential Security</option>
                      <option>Retail Security</option>
                      <option>Corporate Security</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-brand-textMuted mb-2 font-medium">How Soon Do You Need It?</label>
                  <select name="urgency" className="w-full bg-[#1A1C22] border border-brand-borderLight rounded-sm text-sm text-brand-text px-4 py-3 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none">
                    <option>As Soon As Possible (Within 24 Hours)</option>
                    <option>Scheduled (1–2 Weeks)</option>
                    <option>Long-Term Contract</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-brand-textMuted mb-2 font-medium">More Details</label>
                  <textarea name="details" rows={4} placeholder="Tell us your location, dates, and any special needs..." className="w-full bg-[#1A1C22] border border-brand-borderLight rounded-sm text-sm text-brand-text px-4 py-3 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-brand-gold hover:bg-brand-gold-hover text-black text-xs uppercase tracking-[0.2em] font-semibold rounded-sm transition duration-200 shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-2">
                  <span>Send My Request</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


      <footer className="bg-[#060608] border-t border-brand-border-subtle py-16 text-brand-textMuted text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt="KRSK Security Services logo" className="h-10 w-10 object-contain rounded-md" />
              <div>
                <div className="font-serif text-base tracking-[0.12em] font-semibold text-brand-text uppercase">KRSK</div>
                <div className="text-[8px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">Security Services</div>
              </div>
            </div>
            <p className="text-xs text-brand-textMuted leading-relaxed mb-4">
              Professional SIA-licensed security officers for hotels, restaurants, clubs, offices, events, and private homes across London.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-glass border border-brand-borderLight rounded text-[10px] uppercase tracking-wider text-brand-gold">
              <span>SIA Licensed</span> • <span>London Office</span>
            </div>
          </div>


          <div>
            <h4 className="text-brand-text font-serif font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="hover:text-brand-gold transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-gold transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-brand-gold transition">Our Services</Link></li>
              <li><Link href="/why-choose-us" className="hover:text-brand-gold transition">Why Choose Us</Link></li>
              <li><Link href="/contact" className="hover:text-brand-gold transition">Contact Us</Link></li>
            </ul>
          </div>


          <div>
            <h4 className="text-brand-text font-serif font-semibold text-sm uppercase tracking-wider mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-brand-gold transition">Hotel Security</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition">Restaurant & Bar Security</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition">Club Security</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition">Close Protection</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition">Event Security</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition">Residential Security</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition">Retail Security</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition">Corporate Security</a></li>
            </ul>
          </div>


          <div>
            <h4 className="text-brand-text font-serif font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <p className="mb-2 text-brand-text">Green lane Morden,<br />London. SM4 6SS</p>
            <p className="mb-2"><a href="mailto:info@krsksecurityservices.com" className="hover:text-brand-gold transition">info@krsksecurityservices.com</a></p>
            <p className="text-brand-gold font-semibold">+44 7466 463048 (24/7)</p>
          </div>
        </div>


        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 border-t border-brand-borderSubtle flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-brand-textDim">
          <div>© 2026 Krsk Security Services Ltd. All rights reserved. Company Registration Number: 16831389.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-gold transition">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-brand-gold transition">Terms of Service</a>
          </div>
        </div>
      </footer>




    </div>
  );
}
