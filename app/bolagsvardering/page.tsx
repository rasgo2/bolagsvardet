import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Bolagsvärdering – Så värderas ett företag",
  description: "Lär dig hur bolagsvärdering fungerar i praktiken. Vi förklarar de vanligaste metoderna, vad köpare tittar på och hur du maximerar värdet på ditt bolag inför en försäljning.",
  alternates: { canonical: "https://bolagsvardet.se/bolagsvardering" },
};

const methods = [
  {
    name: "EBITDA-multipel",
    description: "Den vanligaste metoden vid förvärv av lönsamma SME-bolag. Köparen betalar en multipel (t.ex. 4×) av bolagets EBITDA. Multipeln bestäms av bransch, tillväxt, stabilitet och konkurrens om affären.",
    href: "/guider/ebitda-multipel",
    highlight: true,
  },
  {
    name: "DCF – Diskonterat kassaflöde",
    description: "Mer sofistikerad metod som nuvärdesberäknar framtida kassaflöden. Används ofta av PE-bolag och vid större transaktioner. Kräver trovärdiga prognoser och en motiverad diskonteringsränta.",
    href: "/guider/hur-varderar-man-ett-foretag",
    highlight: false,
  },
  {
    name: "Substansvärdering",
    description: "Värdering baserad på tillgångars marknadsvärde minus skulder. Relevant för kapitalintensiva bolag och fastighetsbolag. Sällan relevant för tjänstebolag med högt humankapital.",
    href: "/guider/hur-varderar-man-ett-foretag",
    highlight: false,
  },
];

const faqItems = [
  { question: "Vad är skillnaden mellan bolagsvärde och köpeskilling?", answer: "Bolagsvärdet (enterprise value) är det totala värdet på rörelsens tillgångar. Köpeskillingen du faktiskt får som ägare är enterprise value minus räntebärande skulder plus kassa – det kallas equity value. Skillnaden kan vara betydande om bolaget har lån." },
  { question: "Räknar köpare på EBIT eller EBITDA?", answer: "De flesta köpare räknar primärt på EBITDA (före avskrivningar) eftersom det ger en bättre bild av operativt kassaflöde. Men de tittar alltid även på EBIT och free cash flow för att förstå capex-behovet. Normalisering av EBITDA – att rensa bort engångsposter och icke-marknadsmässiga kostnader – är ett kritiskt steg." },
  { question: "Hur länge tar en M&A-process?", answer: "En strukturerad försäljningsprocess tar typiskt 6–9 månader från mandat till signering. Budgetprocessen hos köparen, due diligence och förhandling om SPA (Share Purchase Agreement) är de tidsmässigt mest krävande delarna." },
  { question: "Hur påverkar earn-out min slutliga köpeskilling?", answer: "En earn-out innebär att delar av köpeskillingen betalas ut baserat på framtida prestationer. Det är vanligt när parterna inte är överens om framtidspotentialen. Som säljare bör du förhandla tydliga och mätbara mål, och vara medveten om att du som ny minoritetsägare kan ha begränsat inflytande över utfallet." },
  { question: "Kan jag sälja mitt bolag utan rådgivare?", answer: "Det är möjligt men sällan optimalt. En erfaren M&A-rådgivare skapar konkurrens, håller processen strukturerad och kan förhandla upp priset med 20–40%. Avgiften – typiskt 2–5% av köpeskillingen – är vanligtvis välmotiverad." },
];

export default function BolagsvarderingPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(160deg, #f7f7fc 0%, #eff3ff 50%, #f7f7fc 100%)", padding: "5rem 1.5rem" }}>
        <div className="max-w-3xl">
          <div className="max-w-7xl mx-auto px-0">
            <div className="max-w-3xl">
              <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem", fontFamily: "var(--font-body)" }}>Kunskapsguide</p>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 600, color: "var(--color-ink)", letterSpacing: "-0.02em", marginBottom: "1rem" }}>Bolagsvärdering</h1>
              <p style={{ fontSize: "1.1rem", color: "var(--color-slate)", lineHeight: 1.75, fontFamily: "var(--font-body)", marginBottom: "1.5rem" }}>
                Att förstå hur ditt bolag värderas är avgörande för att fatta rätt beslut inför en försäljning. Här är en strukturerad genomgång av hur professionella köpare tänker.
              </p>
              <Link href="/vardera-bolag" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--color-accent)", color: "white", padding: "0.75rem 1.5rem", borderRadius: "10px", fontWeight: 500, fontSize: "0.95rem", fontFamily: "var(--font-body)" }} className="hover:opacity-90">
                Värdera ditt bolag →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem", background: "var(--color-white)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600, color: "var(--color-ink)", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>De vanligaste värderingsmetoderna</h2>
          <p style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)", marginBottom: "2.5rem", maxWidth: "600px" }}>Vilken metod som används beror på bolagets storlek, lönsamhetsprofil och typen av köpare.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {methods.map((m) => (
              <div key={m.name} style={{ background: m.highlight ? "var(--color-accent-subtle)" : "var(--color-surface)", border: m.highlight ? "1px solid rgba(30,64,175,0.25)" : "1px solid var(--color-border)", borderRadius: "14px", padding: "1.75rem" }}>
                {m.highlight && <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 600, color: "var(--color-accent)", background: "white", padding: "0.2rem 0.6rem", borderRadius: "6px", marginBottom: "1rem", fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.07em" }}>Vanligast vid SME</span>}
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "0.75rem" }}>{m.name}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--color-slate)", lineHeight: 1.7, fontFamily: "var(--font-body)", marginBottom: "1.25rem" }}>{m.description}</p>
                <Link href={m.href} style={{ fontSize: "0.85rem", color: "var(--color-accent)", fontWeight: 500, fontFamily: "var(--font-body)" }}>Läs mer →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem", background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600, color: "var(--color-ink)", letterSpacing: "-0.02em", marginBottom: "2.5rem" }}>Vad driver en hög multipel?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Stark EBITDA-marginal", desc: "Marginal >20% signalerar skalbarhet och prissättningskraft. Köpare betalar mer för lönsamhet." },
              { label: "Hög tillväxttakt", desc: "Bolag med 20%+ tillväxt kan motivera multiplar i den övre delen av branschintervallet." },
              { label: "Återkommande intäkter", desc: "SaaS-prenumerationer, ramavtal och servicekontrakt reducerar intäktsvolatilitet markant." },
              { label: "Skalbar affärsmodell", desc: "Förmåga att växa utan proportionellt ökade kostnader är ett av de mest eftertraktade attributen." },
              { label: "Dokumenterad organisation", desc: "Tydliga processer, roller och dokumentation minskar köparens risk och förenklar ägarskiftet." },
              { label: "Låg ägarberoende", desc: "Om bolaget fungerar utan ägaren i det dagliga reduceras risken för kunskapstapp och kundavhopp." },
            ].map((item) => (
              <div key={item.label} style={{ background: "var(--color-white)", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "1.25rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--color-green)", flexShrink: 0, fontSize: "1.1rem", marginTop: "1px" }}>✓</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "0.3rem" }}>{item.label}</h3>
                    <p style={{ fontSize: "0.82rem", color: "var(--color-slate)", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqItems} title="Vanliga frågor om bolagsvärdering" />

      <CTASection
        headline="Vill du se vad ditt specifika bolag kan vara värt?"
        subtext="Använd vår kalkylator för att få ett indikativt värderingsintervall baserat på din bransch, lönsamhet och nyckeltal."
        primaryCTA={{ label: "Gör en indikativ värdering", href: "/vardera-bolag" }}
        variant="accent"
      />
    </>
  );
}
