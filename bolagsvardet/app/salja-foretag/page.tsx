import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Sälja företag – Processen steg för steg",
  description: "En genomgång av hur en företagsförsäljning går till, från förberedelse och värdering till due diligence, förhandling och tillträde. Vad ska du tänka på?",
  alternates: { canonical: "https://bolagsvardet.se/salja-foretag" },
};

const steps = [
  { n: "01", title: "Förberedelse och analys", desc: "Normalisera EBITDA, identifiera värdedrivare och riskfaktorer, sammanställ ett informationsmemorandum och ta fram en teaser. Det här steget avgör ofta hur hög multipeln blir." },
  { n: "02", title: "Marknadsföring och kontakt", desc: "Identifiera och kontakta potentiella köpare under sekretessavtal (NDA). Strategiska köpare, PE-bolag och branschkonsolidatorer har olika prioriteringar och prissättningslogik." },
  { n: "03", title: "Indikativa bud och urvalsprocess", desc: "Inkomna bud utvärderas – inte bara på pris utan på köparens finansieringsförmåga, synergiplan och hur de ser på ditt ledarteam framöver." },
  { n: "04", title: "Due diligence", desc: "Köparens team granskar juridik, ekonomi, skatt, kunder och avtal. Välförberedda säljare reducerar risken för prisnedskrivning sent i processen." },
  { n: "05", title: "Förhandling och SPA", desc: "Share Purchase Agreement (SPA) reglerar pris, garantier och ansvarsfriskrivningar. Representation & Warranty Insurance (RWI) används allt mer för att underlätta affärer." },
  { n: "06", title: "Tillträde och transition", desc: "Köpeskillingen betalas ut och ägarskiftet genomförs. En tydlig transitionsplan är kritisk för att säkra kundrelationer och nyckelmedarbetare." },
];

export default function SaljaForetagPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(160deg, #f7f7fc 0%, #eff3ff 50%, #f7f7fc 100%)", padding: "5rem 1.5rem" }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem", fontFamily: "var(--font-body)" }}>Processguide</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 600, color: "var(--color-ink)", letterSpacing: "-0.02em", marginBottom: "1rem" }}>Sälja företag</h1>
            <p style={{ fontSize: "1.1rem", color: "var(--color-slate)", lineHeight: 1.75, fontFamily: "var(--font-body)" }}>
              En företagsförsäljning är en av de mest komplexa ekonomiska transaktionerna du som företagare kan genomföra. Här är en strukturerad genomgång av hur processen ser ut i praktiken.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem", background: "var(--color-white)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600, color: "var(--color-ink)", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>Processen i sex steg</h2>
          <p style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)", marginBottom: "3rem", maxWidth: "560px" }}>En välstrukturerad process tar typiskt 6–9 månader. Förberedelsefasen är kritisk och underskattas ofta.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {steps.map((s) => (
              <div key={s.n} style={{ display: "flex", gap: "1.25rem", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "14px", padding: "1.5rem" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.5rem", fontWeight: 500, color: "var(--color-border)", flexShrink: 0, lineHeight: 1 }}>{s.n}</div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "0.4rem" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-slate)", lineHeight: 1.7, fontFamily: "var(--font-body)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem", background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600, color: "var(--color-ink)", letterSpacing: "-0.02em", marginBottom: "1rem" }}>Vad bör du ha klart innan du startar?</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { title: "Normaliserad EBITDA", desc: "Köpare granskar alltid om det finns kostnader som är icke-operativa eller icke-marknadsmässiga. Förbered en normalisering i förväg." },
                  { title: "Uppdaterade avtal", desc: "Kundavtal, leverantörsavtal och anställningsavtal ska vara genomgångna. Avsaknad av skriftliga avtal är en röd flagg i DD." },
                  { title: "Tydlig ägarstruktur", desc: "Komplexa ägarstrukturer eller oklara aktieägaravtal kan fördröja eller stoppa affären. Rensa upp tidigt." },
                  { title: "Nyckelpersonsberoende", desc: "Om bolaget är starkt beroende av en eller ett par nyckelpersoner utöver ägaren – identifiera och adressera det." },
                  { title: "Dokumenterade processer", desc: "Operativa processer, IT-system och kundhistorik bör vara dokumenterade och inte bara bärna i ägarens huvud." },
                ].map((item) => (
                  <div key={item.title} style={{ background: "var(--color-white)", border: "1px solid var(--color-border)", borderRadius: "10px", padding: "1rem 1.25rem" }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "0.25rem" }}>{item.title}</h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-slate)", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/guider/due-diligence" style={{ color: "var(--color-accent)", fontSize: "0.9rem", fontWeight: 500, fontFamily: "var(--font-body)" }}>Läs mer om due diligence →</Link>
              </div>
            </div>
            <div>
              <LeadCaptureForm title="Diskutera din försäljning" description="Fyll i formuläret nedan så återkommer vi för ett konfidentiellt samtal om din situation och tidshorisont." source="salja-foretag" />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Vet du vad ditt bolag är värt idag?"
        subtext="Börja med att göra en indikativ värdering – det är kostnadsfritt och tar fem minuter."
        primaryCTA={{ label: "Gör en indikativ värdering", href: "/vardera-bolag" }}
        variant="dark"
      />
    </>
  );
}
