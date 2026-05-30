interface TrustItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const items: TrustItem[] = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 2L13.5 8H20L14.5 12L16.5 18L11 14.5L5.5 18L7.5 12L2 8H8.5L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Indikativ värdering på minuter",
    description:
      "Få en uppskattning av ditt bolags värde baserat på bransch, lönsamhet och nyckeltal – utan att behöva boka ett möte.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 3C7 3 4 6.5 4 10C4 14 7 17.5 11 19C15 17.5 18 14 18 10C18 6.5 15 3 11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 8v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Förstå exit readiness",
    description:
      "Vi hjälper dig identifiera vad som höjer och sänker värdet inför en försäljning – och vad du kan göra åt det innan du initierar en process.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 9h8M7 13h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 8h16" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Välgrundad förberedelse",
    description:
      "Att sälja ett bolag tar tid och kräver rätt underlag. Vi guidar dig genom processen – från värdering till due diligence och förhandling.",
  },
];

export default function TrustSection() {
  return (
    <section style={{ background: "var(--color-white)", padding: "5rem 1.5rem" }}>
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <div className="max-w-2xl mb-14">
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--color-accent)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "0.75rem",
              fontFamily: "var(--font-body)",
            }}
          >
            Varför Bolagsvärdet
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 600,
              color: "var(--color-ink)",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Kunskap är ditt viktigaste förhandlingskort
          </h2>
          <p style={{ color: "var(--color-slate)", lineHeight: 1.75, fontFamily: "var(--font-body)" }}>
            De flesta företagare säljer sitt bolag en gång i livet. Vi hjälper dig gå in i den processen med rätt förväntningar,
            rätt underlag och rätt förståelse för vad köpare faktiskt tittar på.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "14px",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: "var(--color-accent-subtle)",
                  color: "var(--color-accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--color-ink)",
                  marginBottom: "0.5rem",
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: "var(--color-slate)", fontSize: "0.9rem", lineHeight: 1.7, fontFamily: "var(--font-body)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
