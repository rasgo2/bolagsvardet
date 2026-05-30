import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import SEOContentBlock from "@/components/SEOContentBlock";

export const metadata: Metadata = {
  title: "Earn-out – Hur det fungerar och hur du förhandlar",
  description: "Earn-out innebär att delar av köpeskillingen betalas baserat på framtida prestationer. Vi förklarar strukturen, riskerna och vad du bör förhandla om.",
  alternates: { canonical: "https://bolagsvardet.se/guider/earn-out" },
};

export default function EarnOutPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(160deg, #f7f7fc 0%, #eff3ff 50%, #f7f7fc 100%)", padding: "5rem 1.5rem" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1rem" }}>
            <Link href="/" style={{ fontSize: "0.8rem", color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>Hem</Link>
            <span style={{ color: "var(--color-muted)" }}>›</span>
            <span style={{ fontSize: "0.8rem", color: "var(--color-ink)", fontFamily: "var(--font-body)" }}>Earn-out</span>
          </div>
          <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 600, color: "var(--color-accent)", background: "var(--color-accent-subtle)", padding: "0.2rem 0.6rem", borderRadius: "6px", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.07em", fontFamily: "var(--font-body)" }}>Transaktionsstruktur</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 600, color: "var(--color-ink)", letterSpacing: "-0.02em", marginBottom: "1rem" }}>Earn-out</h1>
          <p style={{ fontSize: "1.05rem", color: "var(--color-slate)", lineHeight: 1.75, fontFamily: "var(--font-body)" }}>Earn-out används när köpare och säljare inte är överens om värderingen – men vill genomföra affären ändå. Det kan vara rimligt, men strukturen är viktig att förstå.</p>
          <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", fontFamily: "var(--font-body)", marginTop: "1rem" }}>8 minuters läsning</p>
        </div>
      </section>
      <SEOContentBlock>
        <h2>Vad är earn-out?</h2>
        <p>Earn-out är en transaktionsstruktur där en del av köpeskillingen betalas ut i efterhand, baserat på hur bolaget presterar under en definierad period – typiskt 1–3 år efter tillträdet. Det är ett sätt att dela riskbilden mellan köpare och säljare när man inte är överens om framtida potential.</p>
        <p>Exempel: Du säljer ditt bolag för 30 MSEK, varav 22 MSEK betalas vid tillträdet och ytterligare 8 MSEK kan betalas ut om bolaget når ett EBITDA-mål om 6 MSEK under de kommande 24 månaderna.</p>
        <h2>När används earn-out?</h2>
        <ul>
          <li>Bolaget har hög tillväxtpotential men osäkra prognoser</li>
          <li>Säljaren vill ha ett högre pris än köparen är villig att betala kontant</li>
          <li>Bolaget är starkt beroende av säljaren och köparen vill behålla hen i verksamheten</li>
          <li>Köparen vill minska initial kapitalinsats</li>
        </ul>
        <h2>Riskerna du tar som säljare</h2>
        <p>Det grundläggande problemet med earn-out är att du som säljare inte längre kontrollerar bolaget – men ändå är beroende av dess prestationer för att få din fulla köpeskilling. Köparen kan fatta beslut som försämrar bolagets EBITDA (t.ex. ökade kostnader, förändrad strategi, integration i koncernen) och därmed påverka dina utbetalningar.</p>
        <ul>
          <li><strong>Kontrollförlust:</strong> Du äger inte längre bolaget men är beroende av köparens beslut</li>
          <li><strong>Tolkningskonflikter:</strong> Hur EBITDA definieras kan bli föremål för tvist</li>
          <li><strong>Integrationseffekter:</strong> Synergier kan ske på sätt som förstör earn-out-basen</li>
          <li><strong>Incitamentskonflikter:</strong> Du vill maximera EBITDA, köparen kanske inte</li>
        </ul>
        <h2>Vad ska du förhandla om?</h2>
        <p>Om en earn-out är nödvändig för att genomföra affären bör du fokusera på dessa punkter i förhandlingen:</p>
        <ul>
          <li><strong>Tydlig definition av mätmåttet</strong> – helst enkelt och svårt att manipulera (t.ex. fakturerad omsättning snarare än EBITDA)</li>
          <li><strong>Operativt självstyre</strong> – rätten att driva bolaget utan inblandning under earn-out-perioden</li>
          <li><strong>Skydd mot beslut som urholkar earn-out-basen</strong> – förbud mot omotiverade koncerninterna transaktioner</li>
          <li><strong>Korta perioder</strong> – maximalt 2 år, helst 1 år</li>
          <li><strong>Ratchet-struktur</strong> – progressiva utbetalningar vid delprestationer snarare än allt-eller-inget</li>
        </ul>
      </SEOContentBlock>
      <section style={{ padding: "0 1.5rem 5rem", background: "var(--color-white)" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "14px", padding: "2rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "1rem" }}>Relaterade guider</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[{ label: "Säljarrevers", href: "/guider/saljarrevers" }, { label: "Due diligence", href: "/guider/due-diligence" }, { label: "Sälja företag", href: "/salja-foretag" }].map((l) => <Link key={l.href} href={l.href} style={{ color: "var(--color-accent)", fontSize: "0.9rem", fontFamily: "var(--font-body)" }}>→ {l.label}</Link>)}
            </div>
          </div>
        </div>
      </section>
      <CTASection headline="Förstå ditt bolags position inför en försäljning" primaryCTA={{ label: "Gör en indikativ värdering", href: "/vardera-bolag" }} variant="accent" />
    </>
  );
}
