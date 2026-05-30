import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import SEOContentBlock from "@/components/SEOContentBlock";

export const metadata: Metadata = {
  title: "EBITDA-multipel – Vad det innebär och hur du tolkar den",
  description: "En detaljerad genomgång av EBITDA-multipeln: hur den beräknas, vad som driver den upp eller ned, och vad som är normala branschnivåer i Sverige.",
  alternates: { canonical: "https://bolagsvardet.se/guider/ebitda-multipel" },
};

const multiples = [
  { bransch: "SaaS-bolag", range: "4–8×", drivers: "ARR-tillväxt, churn, NRR" },
  { bransch: "Konsultbolag", range: "2,5–5×", drivers: "Beläggning, ramavtal, ägarberoende" },
  { bransch: "Städföretag", range: "2–4×", drivers: "Avtalslängd, personalstabilitet" },
  { bransch: "Redovisningsbyrå", range: "3–6×", drivers: "Klientmix, automatisering" },
  { bransch: "Tillverkning", range: "3–6×", drivers: "Capex, marginal, orderbok" },
  { bransch: "E-handel", range: "1,5–4×", drivers: "Varumärke, kundanskaffningskostnad" },
];

export default function EbitdaMultipelPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(160deg, #f7f7fc 0%, #eff3ff 50%, #f7f7fc 100%)", padding: "5rem 1.5rem" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1rem" }}>
            <Link href="/" style={{ fontSize: "0.8rem", color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>Hem</Link>
            <span style={{ color: "var(--color-muted)" }}>›</span>
            <span style={{ fontSize: "0.8rem", color: "var(--color-ink)", fontFamily: "var(--font-body)" }}>EBITDA-multipel</span>
          </div>
          <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 600, color: "var(--color-accent)", background: "var(--color-accent-subtle)", padding: "0.2rem 0.6rem", borderRadius: "6px", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.07em", fontFamily: "var(--font-body)" }}>Nyckeltal</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 600, color: "var(--color-ink)", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            EBITDA-multipel
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--color-slate)", lineHeight: 1.75, fontFamily: "var(--font-body)" }}>
            EBITDA-multipeln är det viktigaste nyckeltalet vid de flesta bolagsförvärv. Här är en grundlig genomgång av hur det fungerar, vad som driver det och hur du tolkar branschnivåer.
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", fontFamily: "var(--font-body)", marginTop: "1rem" }}>7 minuters läsning</p>
        </div>
      </section>

      <SEOContentBlock>
        <h2>Vad är en EBITDA-multipel?</h2>
        <p>
          En EBITDA-multipel är ett värderingsmått som uttrycker relationen mellan ett bolags totala värde (enterprise value) och dess EBITDA. Om ett bolag säljs för 20 MSEK och har ett EBITDA på 5 MSEK, är multipeln 4× (20 ÷ 5).
        </p>
        <p>
          EBITDA står för <em>Earnings Before Interest, Taxes, Depreciation and Amortization</em> – alltså rörelseresultatet före räntor, skatter, avskrivningar och nedskrivningar. Det ger en approximation av bolagets operativa kassaflöde och är relativt jämförbart mellan bolag i samma bransch.
        </p>

        <h2>Varför är EBITDA-multipeln det vanligaste måttet?</h2>
        <p>
          Köpare använder EBITDA-multipeln för att snabbt kunna jämföra bolag oavsett kapitalstruktur (hur mycket lån bolaget har) och skattesituation. Det ger en standardiserad bild av hur mycket man betalar per krona i operativt kassaflöde.
        </p>
        <p>
          Det är också det mått som industriella köpare, PE-bolag och banker förstår och kommunicerar kring. Om du ska sälja ditt bolag måste du kunna kommunicera ditt normaliserade EBITDA – och förstå hur köparen sannolikt tolkar det.
        </p>

        <h2>Hur normaliseras EBITDA?</h2>
        <p>
          Det viktigaste att förstå är att köpare aldrig räknar på råa bokslutssiffror. De normaliserar EBITDA för att visa ett representativt, löpande kassaflöde. Vanliga justeringar:
        </p>
        <ul>
          <li>Ägarens lön – justeras till marknadsmässig nivå</li>
          <li>Engångskostnader – tas bort (t.ex. juridiska kostnader vid tvist)</li>
          <li>Icke-operativa intäkter – exkluderas</li>
          <li>Hyra – justeras om det finns relaterade parters transaktioner</li>
          <li>Personalkostnader – rensas om nyckelpersoner rekryterats sent på året</li>
        </ul>

        <h2>Vad är normala multiplar i Sverige?</h2>
        <p>Nedan är riktmärken för indikativa EBITDA-multiplar vid SME-förvärv i Sverige. Faktiska multiplar varierar beroende på bolagets specifika profil.</p>
      </SEOContentBlock>

      <section style={{ padding: "0 1.5rem 2rem", background: "var(--color-white)" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ border: "1px solid var(--color-border)", borderRadius: "12px", overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-body)" }}>
              <thead>
                <tr style={{ background: "var(--color-surface)" }}>
                  <th style={{ padding: "0.875rem 1.25rem", textAlign: "left", fontSize: "0.8rem", fontWeight: 600, color: "var(--color-slate)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Bransch</th>
                  <th style={{ padding: "0.875rem 1.25rem", textAlign: "left", fontSize: "0.8rem", fontWeight: 600, color: "var(--color-slate)", textTransform: "uppercase", letterSpacing: "0.05em" }}>EBITDA-multipel</th>
                  <th style={{ padding: "0.875rem 1.25rem", textAlign: "left", fontSize: "0.8rem", fontWeight: 600, color: "var(--color-slate)", textTransform: "uppercase", letterSpacing: "0.05em", display: "table-cell" }} className="hidden sm:table-cell">Nyckeltal</th>
                </tr>
              </thead>
              <tbody>
                {multiples.map((m, i) => (
                  <tr key={m.bransch} style={{ borderTop: "1px solid var(--color-border)", background: i % 2 === 0 ? "white" : "var(--color-surface)" }}>
                    <td style={{ padding: "0.875rem 1.25rem", fontSize: "0.9rem", color: "var(--color-ink)", fontWeight: 500 }}>{m.bransch}</td>
                    <td style={{ padding: "0.875rem 1.25rem" }}>
                      <span style={{ background: "var(--color-accent-subtle)", color: "var(--color-accent)", fontSize: "0.85rem", fontWeight: 600, padding: "0.25rem 0.6rem", borderRadius: "6px" }}>{m.range}</span>
                    </td>
                    <td style={{ padding: "0.875rem 1.25rem", fontSize: "0.82rem", color: "var(--color-muted)", display: "table-cell" }} className="hidden sm:table-cell">{m.drivers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "0.75rem", color: "var(--color-muted)", marginTop: "0.75rem", fontFamily: "var(--font-body)" }}>
            Indikativa intervall baserade på marknadsdata. Faktiska multiplar varierar beroende på bolagets specifika profil, storlek och köparsituation.
          </p>
        </div>
      </section>

      <SEOContentBlock>
        <h2>Vad driver multipeln upp?</h2>
        <ul>
          <li><strong>Stark tillväxt</strong> – 20%+ tillväxt rättfärdigar multiplar i den övre delen av intervallet</li>
          <li><strong>Hög andel återkommande intäkter</strong> – minskar intäktsvolatilitet och ökar förutsägbarhet</li>
          <li><strong>Låg kundkoncentration</strong> – diversifierad kundbas minskar risken</li>
          <li><strong>Låg ägarberoende</strong> – möjliggör smidig ägarövergång</li>
          <li><strong>Skalbarhet</strong> – förmåga att växa marginalen vid ökad volym</li>
        </ul>

        <h2>Vad driver multipeln ned?</h2>
        <ul>
          <li><strong>Hög kundkoncentration</strong> – en eller ett fåtal kunder utgör {'>'}50% av intäkterna</li>
          <li><strong>Stark ägarberoende</strong> – bolaget är operativt beroende av ägarens närvaro</li>
          <li><strong>Fallande marginaler</strong> – signalerar strukturella problem i affärsmodellen</li>
          <li><strong>Litet bolag</strong> – bolag under 2–3 MSEK EBITDA handlas ofta till lägre multiplar</li>
          <li><strong>Ogynnsam bransch</strong> – strukturella utmaningar i hela sektorn påverkar alla aktörer</li>
        </ul>
      </SEOContentBlock>

      <section style={{ padding: "0 1.5rem 5rem", background: "var(--color-white)" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "14px", padding: "2rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "1rem" }}>Relaterade guider</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { label: "Vad är mitt bolag värt?", href: "/guider/vad-ar-mitt-bolag-vart" },
                { label: "Hur värderar man ett företag?", href: "/guider/hur-varderar-man-ett-foretag" },
                { label: "Due diligence", href: "/guider/due-diligence" },
              ].map((l) => <Link key={l.href} href={l.href} style={{ color: "var(--color-accent)", fontSize: "0.9rem", fontFamily: "var(--font-body)" }}>→ {l.label}</Link>)}
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="Se hur din EBITDA påverkar värderingen" primaryCTA={{ label: "Gör en indikativ värdering", href: "/vardera-bolag" }} variant="accent" />
    </>
  );
}
