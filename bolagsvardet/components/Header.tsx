"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { label: "Värdera bolag", href: "/vardera-bolag" },
  { label: "Bolagsvärdering", href: "/bolagsvardering" },
  { label: "Sälja företag", href: "/salja-foretag" },
  {
    label: "Guider",
    href: "#",
    children: [
      { label: "Vad är mitt bolag värt?", href: "/guider/vad-ar-mitt-bolag-vart" },
      { label: "Hur värderar man ett företag?", href: "/guider/hur-varderar-man-ett-foretag" },
      { label: "EBITDA-multipel", href: "/guider/ebitda-multipel" },
      { label: "Säljarrevers", href: "/guider/saljarrevers" },
      { label: "Earn-out", href: "/guider/earn-out" },
      { label: "Due diligence", href: "/guider/due-diligence" },
    ],
  },
  {
    label: "Branscher",
    href: "#",
    children: [
      { label: "Konsultbolag", href: "/branscher/konsultbolag" },
      { label: "SaaS-bolag", href: "/branscher/saas-bolag" },
      { label: "Städföretag", href: "/branscher/stadforetag" },
      { label: "Redovisningsbyrå", href: "/branscher/redovisningsbyra" },
    ],
  },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header
      style={{
        background: "var(--color-white)",
        borderBottom: "1px solid var(--color-border)",
      }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-ink)",
              fontSize: "1.25rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            Bolagsvärdet
          </span>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--color-accent)",
              display: "inline-block",
            }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  style={{
                    color: "var(--color-slate)",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    fontFamily: "var(--font-body)",
                    padding: "0.5rem 0.75rem",
                    borderRadius: "6px",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                  className="hover:text-blue-700"
                >
                  {item.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {openDropdown === item.label && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      background: "var(--color-white)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "10px",
                      boxShadow: "0 8px 32px rgba(26,26,46,0.10)",
                      padding: "0.5rem",
                      minWidth: "220px",
                      zIndex: 100,
                    }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{
                          display: "block",
                          padding: "0.5rem 0.75rem",
                          fontSize: "0.875rem",
                          color: "var(--color-slate)",
                          borderRadius: "6px",
                          fontFamily: "var(--font-body)",
                        }}
                        className="hover:bg-blue-50 hover:text-blue-700"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: "var(--color-slate)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  fontFamily: "var(--font-body)",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "6px",
                }}
                className="hover:text-blue-700"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/vardera-bolag"
            style={{
              background: "var(--color-accent)",
              color: "var(--color-white)",
              padding: "0.5rem 1.25rem",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontWeight: 500,
              fontFamily: "var(--font-body)",
            }}
            className="hover:opacity-90"
          >
            Värdera bolag
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Meny"
          style={{ color: "var(--color-ink)" }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {mobileOpen ? (
              <path d="M5 5L17 17M5 17L17 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            background: "var(--color-white)",
            padding: "1rem 1.5rem 1.5rem",
          }}
          className="lg:hidden"
        >
          {nav.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <div className="mb-2">
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--color-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "0.5rem",
                      marginTop: "1rem",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "block",
                        padding: "0.375rem 0",
                        fontSize: "0.9rem",
                        color: "var(--color-slate)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "0.5rem 0",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "var(--color-ink)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/vardera-bolag"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block",
              marginTop: "1rem",
              background: "var(--color-accent)",
              color: "white",
              padding: "0.75rem",
              borderRadius: "8px",
              textAlign: "center",
              fontWeight: 500,
              fontFamily: "var(--font-body)",
            }}
          >
            Värdera bolag
          </Link>
        </div>
      )}
    </header>
  );
}
