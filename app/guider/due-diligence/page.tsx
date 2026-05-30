import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import SEOContentBlock from "@/components/SEOContentBlock";

export const metadata: Metadata = {
  title: "Due Diligence – Vad köparen granskar och hur du förbereder dig",
  description: "Due diligence är köparens granskning av ditt bolag. Vi förklarar vad som ingår, vad som kan sänka priset och hur du förbereder dig för att klara processen.",
  alternates: { canonical: "https://bolagsvardet.se/guider/due-diligence" },
};

const ddAreas = [
  { area: "Finansiell DD", items: ["Historiska resultat- och balansräkningar", "Normalisering av EBITDA", "Kassaflödesanalys", "Rörelsekapitalbehov", "Skulder och åtaganden utanför balansräkning"] },
  { area: "Kommersiell DD", items: ["Kundkontrakt och retention", "Kundbas och koncentration", "Pipeline och pipeline-kvalitet", "Konkurrenssituation och marknad", "Prissättning och marginaldrivare"] },
  { area: "Juridisk DD", items: ["Aktieägaravtal och bolagsordning", "Anställningsavtal för nyckelpersoner", "Immateriella rättigheter (IP)", "Pågående eller historiska tvister", "Licensavtal och regulatoriska tillstånd"] },
  { area: "Skattemässig DD", items: ["Skatteposition och deklarationer 3 år bakåt", "Uppskjutna skatteskulder", "Transfer pricing (vid internationella strukturer)", "Personalskatt och sociala avgifter", "Moms-historik"] },
];

export default function DueDiligencePage() {
  return (
    <>
      <section style={{ background: "linear-gradient(160deg, #f7f7fc 0%, #eff3ff 50%, #f7f7fc 100%)", padding: "5rem 1.5rem" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1rem" }}>
            <Link href="/" style={{ fontSize: "0.8rem", color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>Hem</Link>
            <span style={{ color: "var(--color-muted)" }}>›</span>
            <span style={{ fontSize: "0.8rem", color: "var(--color-ink)", fontFamily: "var(--font-body)" }}>Due diligence</span>
          </div>
          <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 600, color: "var(--color-accent)", background: "var(--color-accent-subtle)", padding: "0.2rem 0.6rem", borderRadius: "6px", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.07em", fontFamily: "var(--font-body)" }}>Process</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 600, color: "var(--color-ink)", letterSpacing: "-0.02em", marginBottom: "1rem" }}>Due diligence</h1>
          <p style={{ fontSize: "1.05rem", color: "var(--color-slate)", lineHeight: 1.75, fontFamily: "var(--font-body)" }}>Due diligence är köparens systematiska granskning av ditt bolag innan affären sluts. Hur du förbereder dig avgör om priset håller hela vägen till tillträdet.</p>
          <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", fontFamily: "var(--font-body)", marginTop: "1rem" }}>12 minuters läsning</p>
        </div>
      </section>
      <SEOContentBlock>
        <h2>Vad är due diligence?</h2>
        <p>Due diligence (DD) är köparens systematiska granskning av ditt bolag – juridik, ekonomi, skatt, kunder, avtal och verksamhet. Syftet är att verifiera att informationen i informationsmemorandumet stämmer, identifiera risker och avgöra om priset är rätt.</p>
        <p>DD görs normalt efter att parterna kommit överens om ett indikativt pris (LOI – Letter of Intent). Om köparen hittar något under DD kan de begära prisjustering, extra garantier eller i värsta fall dra sig ur affären helt.</p>
        <h2>Vad granskas?</h2>
        <p>En modern M&A-process inkluderar typiskt fyra DD-spår som görs parallellt av olika specialister:</p>
      </SEOContentBlock>
      <section style={{ padding: "0 1.5rem 2rem", background: "var(--color-white)" }}>
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ddAreas.map((area) => (
            <div key={area.area} style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "1.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "0.75rem" }}>{area.area}</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {area.items.map((item) => (
                  <li key={item} style={{ display: "flex", gap: "0.5rem", fontSize: "0.82rem", color: "var(--color-slate)", fontFamily: "var(--font-body)", lineHeight: 1.5 }}>
                    <span style={{ color: "var(--color-accent)", flexShrink: 0 }}>·</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <SEOContentBlock>
        <h2>Hur förbereder du dig?</h2>
        <p>Välförberedda säljare klarar DD snabbare, med färre överraskningar och minskar risken för prisjustering. Här är de viktigaste förberedelserna:</p>
        <ul>
          <li><strong>Data room:</strong> Sammanställ ett välorganiserat digitalt dokumentarkiv med avtal, bokslut, skattedeklarationer och övriga relevanta dokument</li>
          <li><strong>Normalisering i förväg:</strong> Gör din egen EBITDA-normalisering med tydlig dokumentation – det skapar trovärdighet</li>
          <li><strong>Rensa upp avtal:</strong> Se till att kundavtal, leverantörsavtal och anställningsavtal är dokumenterade och uppdaterade</li>
          <li><strong>IP-inventering:</strong> Dokumentera äganderätten till mjukvara, varumärken och andra immateriella rättigheter</li>
          <li><strong>Skatteposition:</strong> Stäm av eventuella öppna skattefrågor med din revisor</li>
        </ul>
        <h2>Vad kan sänka priset under DD?</h2>
        <p>Prisjustering (price chip) är vanligare än man tror. De vanligaste orsakerna:</p>
        <ul>
          <li>Rörelsekapitalnivå avviker från avtalad normalnivå</li>
          <li>Okände skulder eller åtaganden identifieras</li>
          <li>Kundkontrakt saknas eller innehåller oacceptabla uppsägningsklausuler</li>
          <li>Skattemässiga exponeringar som inte deklarerats</li>
          <li>IP-äganderätten är oklar eller saknas</li>
        </ul>
        <p>Ju bättre du är förberedd, desto lägre är risken för obehagliga överraskningar sent i processen – och desto starkare är din förhandlingsposition.</p>
      </SEOContentBlock>
      <section style={{ padding: "0 1.5rem 5rem", background: "var(--color-white)" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "14px", padding: "2rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "1rem" }}>Relaterade guider</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[{ label: "Sälja företag – processen steg för steg", href: "/salja-foretag" }, { label: "Earn-out", href: "/guider/earn-out" }, { label: "Säljarrevers", href: "/guider/saljarrevers" }].map((l) => <Link key={l.href} href={l.href} style={{ color: "var(--color-accent)", fontSize: "0.9rem", fontFamily: "var(--font-body)" }}>→ {l.label}</Link>)}
            </div>
          </div>
        </div>
      </section>
      <CTASection headline="Förstå din exit readiness" subtext="Ta reda på hur väl förberedd ditt bolag är inför en försäljning." primaryCTA={{ label: "Gör en indikativ värdering", href: "/vardera-bolag" }} variant="accent" />
    </>
  );
}
