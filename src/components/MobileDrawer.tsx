"use client";
import { useEffect } from "react";
import Link from "next/link";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activePage?: string;
}

const navLinks = [
  { label: "Home", href: "/", key: "home" },
  { label: "About Us", href: "/about", key: "about" },
  { label: "Services", href: "/services", key: "services" },
  { label: "Why Choose Us", href: "/why-choose-us", key: "why" },
  { label: "Contact Us", href: "/contact", key: "contact" },
];

export default function MobileDrawer({ isOpen, onClose, activePage = "home" }: MobileDrawerProps) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[60] ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop overlay */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
      />

      {/* Slide-in drawer panel (from right) */}
      <div
        className={`absolute top-0 right-0 z-[10] h-full w-[85vw] max-w-[340px] bg-[#0A0A0C] border-l border-[#D4AF37]/20 shadow-[-8px_0_40px_rgba(0,0,0,0.7)] transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* ── Drawer Header ── */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-borderSubtle shrink-0">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="KRSK"
              className="h-8 w-8 object-contain rounded-md"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xs tracking-[0.15em] font-semibold text-brand-text uppercase">KRSK</span>
              <span className="text-[7px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold -mt-0.5">Security Services</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-brand-glass border border-brand-borderLight flex items-center justify-center text-brand-textMuted hover:text-brand-text hover:border-[#D4AF37]/40 transition-all duration-200 active:scale-90"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* ── Scrollable Content ── */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          {/* Navigation Links */}
          <nav className="flex flex-col px-4 py-6 gap-1">
            {navLinks.map((link, i) => {
              const isActive = link.key === activePage;

              const className = `relative flex items-center gap-3.5 px-4 py-3.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 group ${isActive
                  ? "bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20"
                  : "text-brand-textMuted hover:text-brand-text hover:bg-brand-glass border border-transparent"
                }`;

              const content = (
                <>
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-[#D4AF37] rounded-r-full" />
                  )}
                  <span className="material-symbols-outlined text-[18px]">
                    {link.key === "home" ? "home" : link.key === "services" ? "shield" : link.key === "about" ? "info" : link.key === "why" ? "workspace_premium" : "call"}
                  </span>
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_6px_rgba(212,175,55,0.8)]" />
                  )}
                </>
              );

              return (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={onClose}
                  className={className}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {content}
                </Link>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="mx-6 border-t border-brand-borderSubtle" />

          {/* Contact Quick-Access */}
          <div className="px-6 py-6 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-textDim font-semibold">Quick Contact</p>

            <a
              href="tel:+447466463048"
              className="flex items-center gap-3 px-3 py-3 rounded-lg bg-white/[0.03] border border-brand-borderSubtle hover:border-[#D4AF37]/30 transition-all duration-200 group"
            >
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#D4AF37] text-[16px]">call</span>
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-brand-textMuted font-medium truncate">24/7 Support</div>
                <div className="text-xs text-brand-text font-semibold tracking-wide truncate">+44 7466 463048</div>
              </div>
            </a>

            <a
              href="mailto:info@krsksecurityservices.com"
              className="flex items-center gap-3 px-3 py-3 rounded-lg bg-white/[0.03] border border-brand-borderSubtle hover:border-[#D4AF37]/30 transition-all duration-200 group"
            >
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#D4AF37] text-[16px]">mail</span>
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-brand-textMuted font-medium truncate">Email Us</div>
                <div className="text-xs text-brand-text font-semibold tracking-wide truncate">info@krsksecurityservices.com</div>
              </div>
            </a>
          </div>
        </div>

        {/* ── CTA Button ── */}
        <div className="p-5 border-t border-brand-borderSubtle shrink-0 bg-[#060608]">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#D4AF37] hover:bg-[#C59F2D] text-black text-[10px] uppercase tracking-[0.16em] font-semibold rounded-sm transition duration-200 shadow-[0_4px_24px_rgba(212,175,55,0.3)]"
          >
            <span>Contact Us</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </Link>

          <div className="flex items-center justify-center gap-2 mt-3 text-[9px] text-brand-textDim">
            <span className="material-symbols-outlined text-[12px] text-[#D4AF37]/50">lock</span>
            <span>Your Privacy Protected</span>
          </div>
        </div>
      </div>
    </div>
  );
}
