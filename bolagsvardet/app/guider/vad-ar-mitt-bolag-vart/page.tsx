import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import SEOContentBlock from "@/components/SEOContentBlock";

export const metadata: Metadata = {
  title: "Vad är mitt bolag värt? – Guide till bolagsvärdering",
  description: "Lär dig hur bolagets värde bestäms i praktiken. Vi förklarar EBITDA-multiplar, vad köpare faktiskt betalar för och hur du kan höja värdet på ditt bolag.",
  alternates: { canonical: "https://bolagsvardet.se/guider/vad-ar-mitt-bolag-vart" },
};

export default function VadArMittBolagVartPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(160deg, #f7f7fc 0%, #eff3ff 50%, #f7f7fc 100%)", padding: "5rem 1.5rem" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1rem" }}>
            <Link href="/" style={{ fontSize: "0.8rem", color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>Hem</Link>
            <span style={{ color: "var(--color-muted)" }}>›</span>
            <span style={{ fontSize: "0.8rem", color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>Guider</span>
            <span style={{ color: "var(--color-muted)" }}>›</span>
            <span style={{ fontSize: "0.8rem", color: "var(--color-ink)", fontFamily: "var(--font-body)" }}>Vad är mitt bolag värt?</span>
          </div>
          <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 600, color: "var(--color-accent)", background: "var(--color-accent-subtle)", padding: "0.2rem 0.6rem", borderRadius: "6px", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.07em", fontFamily: "var(--font-body)" }}>Grundläggande</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 600, color: "var(--color-ink)", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            Vad är mitt bolag värt?
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--color-slate)", lineHeight: 1.75, fontFamily: "var(--font-body)" }}>
            Det finns inget enkelt svar – men det finns en tydlig logik bakom hur professionella köpare sätter värden. Här är en ärlig genomgång.
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", fontFamily: "var(--font-body)", marginTop: "1rem" }}>8 minuters läsning</p>
        </div>
      </section>

      <SEOContentBlock>
        <h2>Bolagsvärde är inte ett fast tal – det är ett intervall</h2>
        <p>
          När en företagare frågar "vad är mitt bolag värt?" förväntar sig många ett exakt svar. Det existerar inte.
          Värdet på ett bolag är det pris som en informerad köpare och en informerad säljare – utan press – är villiga att genomföra en affär på.
          Det innebär att värdet beror på vem köparen är, hur marknaden ser ut just nu och hur bra du är på att presentera din affär.
        </p>
        <p>
          Det du kan göra är att förstå <strong>värderingsintervallet</strong> – den rimliga spridning inom vilken affärer i din bransch görs – och sedan arbeta aktivt för att hamna i den övre delen.
        </p>

        <h2>Hur räknar köpare?</h2>
        <p>
          Den absolut vanligaste metoden vid förvärv av lönsamma SME-bolag är <strong>EBITDA-multipeln</strong>. Köparen multiplicerar bolagets normaliserade EBITDA med en branschspecifik multipel.
        </p>
        <p>
          Om ditt bolag har ett normaliserat EBITDA på 5 MSEK och multipeln i din bransch är 4×, landar värderingen på 20 MSEK. Om multipeln är 6× landar den på 30 MSEK. Det är en enorm skillnad – och den bestäms av faktorer du faktiskt kan påverka.
        </p>

        <h2>Vad är "normaliserat EBITDA"?</h2>
        <p>
          Köpare tittar inte bara på din bokslutssiffra. De normaliserar EBITDA:
        </p>
        <ul>
          <li>Lägger till eller drar ifrån ägarens lön om den avviker från marknad</li>
          <li>Rensar bort engångskostnader (t.ex. konsulter för ett engångsprojekt)</li>
          <li>Normaliserar hyra och övriga transaktionskostnader</li>
          <li>Identifierar intäkter som inte är representativa för framtiden</li>
        </ul>
        <p>
          Det är viktigt att du gör den här övningen själv innan du ger dig in i en process – annars riskerar du att köparens normalisering ser annorlunda ut än din och att du tappar förhandlingsinitiativet.
        </p>

        <h2>Vad driver multipeln upp eller ned?</h2>
        <p>
          Multipeln för ett bolag i en given bransch kan variera med 50–100% beroende på bolagets specifika profil. Det är de här faktorerna som spelar störst roll:
        </p>
        <ul>
          <li><strong>Tillväxt:</strong> Snabbväxande bolag motiverar högre multiplar</li>
          <li><strong>Återkommande intäkter:</strong> Prenumerationer och ramavtal reducerar intäktsrisk</li>
          <li><strong>Kundkoncentration:</strong> Hög koncentration är en av de vanligaste orsakerna till lägre multiplar</li>
          <li><strong>Ägarberoende:</strong> Bolag som fungerar utan ägaren värderas högre</li>
          <li><strong>Marginal:</strong> Hög EBITDA-marginal signalerar skalbarhet och prissättningskraft</li>
          <li><strong>Konkurrens om affären:</strong> Fler budgivare driver upp priset</li>
        </ul>

        <h2>Räcker det att ha ett lönsamt bolag?</h2>
        <p>
          Lönsamhet är nödvändigt men inte tillräckligt. Köpare köper inte bara historiska siffror – de köper en ström av framtida kassaflöden. Det innebär att de tittar noggrant på om lönsamheten är repeterbar, skalbar och köparoberoende.
        </p>
        <p>
          Ett bolag med 4 MSEK i EBITDA men hög kundkoncentration och stark ägarberoende kan värderas lägre än ett bolag med 3 MSEK i EBITDA men stark kundlojalitet, ramavtal och ett välfungerande team.
        </p>

        <h2>Hur tar du reda på var ditt bolag hamnar?</h2>
        <p>
          Det bästa sättet är att använda vår kalkylator för att få ett indikativt intervall – och sedan boka ett samtal om du vill gå djupare. En ärlig och välgörundad bedömning är alltid bättre än att gå in i en process med orealistiska förväntningar.
        </p>
      </SEOContentBlock>

      <section style={{ padding: "0 1.5rem 5rem", background: "var(--color-white)" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "14px", padding: "2rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "1rem" }}>Relaterade guider</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { label: "EBITDA-multipel – vad det innebär och hur du tolkar det", href: "/guider/ebitda-multipel" },
                { label: "Hur värderar man ett företag? – de tre metoderna", href: "/guider/hur-varderar-man-ett-foretag" },
                { label: "Due diligence – vad köparen granskar", href: "/guider/due-diligence" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ color: "var(--color-accent)", fontSize: "0.9rem", fontFamily: "var(--font-body)" }}>→ {l.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Beräkna ditt bolags indikativa värde"
        primaryCTA={{ label: "Gör en indikativ värdering", href: "/vardera-bolag" }}
        variant="accent"
      />
    </>
  );
}
