import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import SEOContentBlock from "@/components/SEOContentBlock";

export const metadata: Metadata = {
  title: "Hur värderar man ett företag? – Tre metoder förklarade",
  description: "En strukturerad genomgång av de tre vanligaste värderingsmetoderna: EBITDA-multipel, DCF och substansvärdering. När används vilken metod och vad ska du tänka på?",
  alternates: { canonical: "https://bolagsvardet.se/guider/hur-varderar-man-ett-foretag" },
};

export default function HurVarderar() {
  return (
    <>
      <section style={{ background: "linear-gradient(160deg, #f7f7fc 0%, #eff3ff 50%, #f7f7fc 100%)", padding: "5rem 1.5rem" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1rem" }}>
            <Link href="/" style={{ fontSize: "0.8rem", color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>Hem</Link>
            <span style={{ color: "var(--color-muted)" }}>›</span>
            <span style={{ fontSize: "0.8rem", color: "var(--color-ink)", fontFamily: "var(--font-body)" }}>Hur värderar man ett företag?</span>
          </div>
          <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 600, color: "var(--color-accent)", background: "var(--color-accent-subtle)", padding: "0.2rem 0.6rem", borderRadius: "6px", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.07em", fontFamily: "var(--font-body)" }}>Metodik</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 600, color: "var(--color-ink)", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            Hur värderar man ett företag?
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--color-slate)", lineHeight: 1.75, fontFamily: "var(--font-body)" }}>
            Det finns tre principiellt olika sätt att värdera ett bolag. Vilken metod som är relevant beror på bolagets storlek, lönsamhetsprofil och typen av köpare.
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", fontFamily: "var(--font-body)", marginTop: "1rem" }}>10 minuters läsning</p>
        </div>
      </section>

      <SEOContentBlock>
        <h2>1. EBITDA-multipeln – den vanligaste metoden vid SME-förvärv</h2>
        <p>
          Vid förvärv av lönsamma SME-bolag med omsättning mellan 5–300 MSEK är EBITDA-multipeln standardmetoden. Principen är enkel: man multiplicerar bolagets normaliserade EBITDA med en branschspecifik multipel.
        </p>
        <p>
          <strong>Varför EBITDA?</strong> EBITDA är ett approximativt mått på operativt kassaflöde som är relativt jämförbart mellan bolag eftersom det är oberoende av kapitalstruktur (räntor), skatteregim och avskrivningsmetod.
        </p>
        <p>
          Multipeln bestäms av ett antal faktorer: branschens generella attraktivitet, bolagets tillväxttakt, intäktsstabilitet, kundkoncentration och konkurrensen om bolaget. En redovisningsbyrå med hög retention handlas till 4–6× EBITDA. Ett snabbväxande SaaS-bolag kan motivera 6–10×.
        </p>

        <h2>2. DCF – diskonterat kassaflöde</h2>
        <p>
          DCF-metoden nuvärdesberäknar förväntade framtida fria kassaflöden med hjälp av en diskonteringsränta (WACC). Teorin är elegant: det ett bolag är värt idag är nuvärdet av alla framtida kassaflöden det genererar.
        </p>
        <p>
          I praktiken är DCF känslig för antaganden. Prognoser om framtida tillväxt och lönsamhet är i grunden spekulativa – och small changes i diskonteringsräntan kan förändra värderingen dramatiskt. Av den anledningen används DCF mer som ett komplement och sanity check snarare än primär värderingsmetod vid SME-affärer.
        </p>
        <p>
          DCF används mer frekvent av PE-bolag (som modellerar return on investment) och vid värdering av bolag med starka tillväxtprognoser som ännu inte är lönsamma.
        </p>

        <h2>3. Substansvärdering – tillgångar minus skulder</h2>
        <p>
          Substansvärdering utgår från balansräkningens nettotillgångar och marknadsvärdesätter respektive tillgång. Det är relevant för kapitalintensiva verksamheter – fastighetsbolag, tillverkningsföretag med mycket utrustning – men sällan för tjänstebolag.
        </p>
        <p>
          För ett konsultbolag eller en SaaS-verksamhet reflekterar substansvärdet inte värdet av kundrelationer, varumärke, know-how eller återkommande intäkter. Att använda substansvärdering för dessa bolag underskattar värdet markant.
        </p>

        <h2>Vilken metod gäller för ditt bolag?</h2>
        <p>
          För de flesta lönsamma svenska SME-bolag är EBITDA-multipeln den mest relevanta referenspunkten. Det är den metod du bör förstå, använda som utgångspunkt och förbereda dig för i en köparkonversation.
        </p>
        <p>
          Om ditt bolag har en atypisk profil – t.ex. stor tillgångsbas, förluster med hög tillväxt, eller komplex holdingstruktur – kan andra metoder eller kombinationer vara relevanta. Det är också då professionell rådgivning tillför mest värde.
        </p>
      </SEOContentBlock>

      <section style={{ padding: "0 1.5rem 5rem", background: "var(--color-white)" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "14px", padding: "2rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "1rem" }}>Fortsätt lära dig</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { label: "EBITDA-multipeln i detalj", href: "/guider/ebitda-multipel" },
                { label: "Vad är mitt bolag värt?", href: "/guider/vad-ar-mitt-bolag-vart" },
                { label: "Due diligence – vad köparen granskar", href: "/guider/due-diligence" },
              ].map((l) => <Link key={l.href} href={l.href} style={{ color: "var(--color-accent)", fontSize: "0.9rem", fontFamily: "var(--font-body)" }}>→ {l.label}</Link>)}
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="Beräkna ditt bolags indikativa värde" primaryCTA={{ label: "Gör en indikativ värdering", href: "/vardera-bolag" }} variant="accent" />
    </>
  );
}
