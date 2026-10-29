"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileDrawer from '@/components/MobileDrawer';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Contact', href: '/contact' },
];

const pageKeyMap: Record<string, string> = {
  '/': 'home',
  '/about': 'about',
  '/services': 'services',
  '/why-choose-us': 'why',
  '/contact': 'contact',
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const activePage = pageKeyMap[pathname] ?? 'home';

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="hidden sm:block bg-[#060608] border-b border-white/5 text-[11px] font-medium tracking-[0.18em] text-gray-400 uppercase py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[#D4AF37] font-semibold">KRSK Security</span>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <span className="hidden sm:inline">Background-Checked Staff</span>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <span className="hidden sm:inline">SIA Licensed</span>
          </div>
          <div className="flex items-center gap-5 text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-[#D4AF37]">lock</span>
              Confidentiality Agreements
            </span>
            <a href="tel:+447466463048" className="text-[#D4AF37] hover:text-white transition font-semibold">
              24/7: +44 7466 463048
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN HEADER ── */}
      <header className="sticky top-0 z-50 glass-obsidian border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <img
              src="/logo.jpg"
              alt="KRSK Security Services Insignia"
              width={48}
              height={48}
              style={{ maxWidth: '48px', maxHeight: '48px' }}
              className="h-12 w-12 object-contain drop-shadow-[0_2px_12px_rgba(212,175,55,0.3)] transition duration-200 group-hover:scale-105 rounded-lg"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.15em] font-semibold text-white group-hover:text-[#D4AF37] transition duration-200 uppercase">KRSK</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold -mt-1">Security Services</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-white/5 rounded-full">
            {navLinks.map(item => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${isActive
                      ? 'bg-[#D4AF37] text-black font-semibold shadow-[0_0_16px_rgba(212,175,55,0.35)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile controls */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact#form-section"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37]/50 rounded-sm hover:bg-[#D4AF37]/10 transition-all duration-300"
            >
              Request a Quote
            </Link>
            <a href="tel:+447466463048" className="lg:hidden p-2 text-[#D4AF37]">
              <span className="material-symbols-outlined text-2xl">call</span>
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-3 -mr-2 text-[#D4AF37] hover:text-white transition active:scale-95 duration-200 cursor-pointer touch-manipulation"
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-3xl pointer-events-none">menu</span>
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} activePage={activePage} />
    </>
  );
}
