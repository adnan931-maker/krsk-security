import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KRSK Security Services - Trusted Security in London",
  description: "Professional, SIA-licensed security officers for hotels, restaurants, clubs, events, businesses, and private clients across London.",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="overflow-x-hidden bg-[#0A0A0C] text-[#E5E1E4] antialiased selection:bg-[#D4AF37] selection:text-black">
        <div className="site-zoom">{children}</div>
      </body>
    </html>
  );
}
