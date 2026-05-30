import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-ink)",
        color: "var(--color-white)",
        paddingTop: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.15rem",
                fontWeight: 600,
                color: "white",
                letterSpacing: "-0.02em",
              }}>
                Bolagsvärdet
              </span>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3b5fd4", display: "inline-block" }} />
            </div>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.7, fontFamily: "var(--font-body)" }}>
              Vi hjälper svenska företagare att förstå vad deras bolag kan vara värt och hur man förbereder sig inför en försäljning.
            </p>
          </div>

          {/* Tjänster */}
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem", fontFamily: "var(--font-body)" }}>
              Tjänster
            </p>
            {[
              { label: "Värdera bolag", href: "/vardera-bolag" },
              { label: "Bolagsvärdering", href: "/bolagsvardering" },
              { label: "Sälja företag", href: "/salja-foretag" },
              { label: "Kontakt", href: "/kontakt" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", marginBottom: "0.5rem", fontFamily: "var(--font-body)" }}
                className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Guider */}
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem", fontFamily: "var(--font-body)" }}>
              Guider
            </p>
            {[
              { label: "Vad är mitt bolag värt?", href: "/guider/vad-ar-mitt-bolag-vart" },
              { label: "Hur värderar man ett företag?", href: "/guider/hur-varderar-man-ett-foretag" },
              { label: "EBITDA-multipel", href: "/guider/ebitda-multipel" },
              { label: "Säljarrevers", href: "/guider/saljarrevers" },
              { label: "Earn-out", href: "/guider/earn-out" },
              { label: "Due diligence", href: "/guider/due-diligence" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", marginBottom: "0.5rem", fontFamily: "var(--font-body)" }}
                className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Branscher */}
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem", fontFamily: "var(--font-body)" }}>
              Branscher
            </p>
            {[
              { label: "Konsultbolag", href: "/branscher/konsultbolag" },
              { label: "SaaS-bolag", href: "/branscher/saas-bolag" },
              { label: "Städföretag", href: "/branscher/stadforetag" },
              { label: "Redovisningsbyrå", href: "/branscher/redovisningsbyra" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", marginBottom: "0.5rem", fontFamily: "var(--font-body)" }}
                className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", fontFamily: "var(--font-body)" }}>
            © {new Date().getFullYear()} Bolagsvärdet. Alla rättigheter förbehållna.
          </p>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem", fontFamily: "var(--font-body)", maxWidth: "520px", textAlign: "center" }}>
            Informationen på denna webbplats utgör inte formell rådgivning. Konsultera alltid kvalificerad rådgivare inför transaktionsbeslut.
          </p>
        </div>
      </div>
    </footer>
  );
}
