import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import ArticleCard from "@/components/ArticleCard";
import IndustryCard from "@/components/IndustryCard";

export const metadata: Metadata = {
  title: "Bolagsvärdet – Förstå vad ditt bolag är värt",
  description:
    "Bolagsvärdet hjälper svenska företagare att förstå vad deras bolag kan vara värt. Få en indikativ värdering, identifiera värdedrivare och förbered dig inför en försäljning.",
  alternates: { canonical: "https://bolagsvardet.se" },
};

const valuationFactors = [
  { key: "EBITDA", label: "EBITDA & lönsamhet", desc: "Den absolut viktigaste faktorn. Köpare betalar multiplar på EBITDA – inte omsättning.", impact: "Hög", positive: true },
  { key: "Tillväxt", label: "Tillväxt", desc: "Stark historisk tillväxt signalerar marknadspotential och rättfärdigar högre multiplar.", impact: "Hög", positive: true },
  { key: "Marginal", label: "Rörelsemarginal", desc: "Hög marginal visar skalbarhet och prissättningskraft. Låg marginal kräver förklaring.", impact: "Hög", positive: true },
  { key: "Återkommande", label: "Återkommande intäkter", desc: "Prenumerationer och ramavtal ger förutsägbart kassaflöde som köpare premierar tydligt.", impact: "Hög", positive: true },
  { key: "Kundkoncentration", label: "Kundkoncentration", desc: "Om 2–3 kunder utgör >50% av intäkterna ser köpare det som en stor riskfaktor.", impact: "Hög", positive: false },
  { key: "Ägarberoende", label: "Ägarberoende", desc: "Bolag som är starkt beroende av ägaren i den dagliga driften är svårare att sälja och värderas lägre.", impact: "Medel", positive: false },
  { key: "Dokumentation", label: "Dokumentation", desc: "Ordentlig bokföring, avtal och processdokumentation underlättar due diligence och höjer förtroende.", impact: "Medel", positive: true },
  { key: "Köparintresse", label: "Köparintresse & marknad", desc: "Fler potentiella köpare skapar konkurrens och driver upp priset. Nischat bolag kan ge sämre budgivning.", impact: "Medel", positive: true },
];

const guides = [
  { title: "Vad är mitt bolag värt?", description: "En genomgång av hur bolagsvärden sätts i praktiken och vad du kan förvänta dig.", href: "/guider/vad-ar-mitt-bolag-vart", readTime: "8 min", tag: "Grundläggande" },
  { title: "Hur värderar man ett företag?", description: "De tre vanligaste värderingsmetoderna och när respektive metod används.", href: "/guider/hur-varderar-man-ett-foretag", readTime: "10 min", tag: "Metodik" },
  { title: "EBITDA-multipel", description: "Vad EBITDA-multipeln innebär, vad som driver den och hur du tolkar branschnormer.", href: "/guider/ebitda-multipel", readTime: "7 min", tag: "Nyckeltal" },
  { title: "Due diligence", description: "Vad köparen granskar, hur du förbereder dig och vad som kan sänka priset i DD.", href: "/guider/due-diligence", readTime: "12 min", tag: "Process" },
  { title: "Earn-out", description: "Hur earn-out fungerar, när det används och hur du skyddar dig i förhandlingen.", href: "/guider/earn-out", readTime: "8 min", tag: "Struktur" },
  { title: "Säljarrevers", description: "Vad en säljarrevers innebär, riskerna du tar och när det kan vara rimligt att acceptera.", href: "/guider/saljarrevers", readTime: "6 min", tag: "Struktur" },
];

const industries = [
  { title: "SaaS-bolag", description: "Höga multiplar tack vare skalbarhet och återkommande intäkter. ARR är det centrala nyckeltalet.", href: "/branscher/saas-bolag", multipleRange: "4–8", characteristics: ["ARR", "Churn", "Net Revenue Retention"] },
  { title: "Konsultbolag", description: "Värderas primärt på EBITDA-marginal och ägarberoende. Ramavtal är en stark värdedrivare.", href: "/branscher/konsultbolag", multipleRange: "2,5–5", characteristics: ["Beläggningsgrad", "Ramavtal", "Seniorkompetens"] },
  { title: "Städföretag", description: "Stabil bransch med förutsägbara intäkter. Operativ effektivitet och kundretention avgör.", href: "/branscher/stadforetag", multipleRange: "2–4", characteristics: ["Kundretention", "Avtalslängd", "Personalstabilitet"] },
  { title: "Redovisningsbyrå", description: "Hög kundlojalitet och låg churn. Automatiseringsgrad och klientmix påverkar värdet.", href: "/branscher/redovisningsbyra", multipleRange: "3–6", characteristics: ["Klientmix", "Automatisering", "Auktorisation"] },
];

export default function HomePage() {
  return (
    <>
      <Hero
        badge="Oberoende plattform för bolagsvärdering"
        headline="Ta reda på vad ditt bolag kan vara värt"
        subheadline="Få en indikativ värdering och förstå vilka faktorer som höjer eller sänker värdet inför en framtida försäljning."
        primaryCTA={{ label: "Värdera mitt bolag", href: "/vardera-bolag" }}
        secondaryCTA={{ label: "Läs om bolagsvärdering", href: "/bolagsvardering" }}
      />

      <TrustSection />

      <section style={{ background: "var(--color-surface)", padding: "5rem 1.5rem" }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem", fontFamily: "var(--font-body)" }}>Värdeanalys</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "var(--color-ink)", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>Vad påverkar bolagsvärdet?</h2>
            <p style={{ color: "var(--color-slate)", lineHeight: 1.75, fontFamily: "var(--font-body)" }}>Värdet på ditt bolag styrs av ett antal faktorer som professionella köpare alltid granskar. Ju bättre du förstår dessa, desto bättre kan du förbereda dig.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {valuationFactors.map((f) => (
              <div key={f.key} style={{ background: "var(--color-white)", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 600, padding: "0.2rem 0.5rem", borderRadius: "6px", background: f.positive ? "var(--color-green-bg)" : "#fff7ed", color: f.positive ? "var(--color-green)" : "#c2410c", fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{f.positive ? "Positiv" : "Risk"}</span>
                  <span style={{ fontSize: "0.7rem", color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>Påverkan: {f.impact}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "0.4rem" }}>{f.label}</h3>
                <p style={{ fontSize: "0.82rem", color: "var(--color-muted)", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link href="/vardera-bolag" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--color-accent)", color: "white", padding: "0.875rem 2rem", borderRadius: "10px", fontWeight: 500, fontSize: "0.975rem", fontFamily: "var(--font-body)", boxShadow: "0 4px 14px rgba(30, 64, 175, 0.25)" }} className="hover:opacity-90">
              Beräkna ditt bolags värde
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-white)", padding: "5rem 1.5rem" }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem", fontFamily: "var(--font-body)" }}>Kunskapsbank</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600, color: "var(--color-ink)", letterSpacing: "-0.02em" }}>Guider om bolagsvärdering</h2>
            </div>
            <Link href="/guider/hur-varderar-man-ett-foretag" style={{ color: "var(--color-accent)", fontSize: "0.875rem", fontWeight: 500, fontFamily: "var(--font-body)" }}>Se alla guider →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((g) => <ArticleCard key={g.href} {...g} />)}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-surface)", padding: "5rem 1.5rem" }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ marginBottom: "2.5rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem", fontFamily: "var(--font-body)" }}>Branschanalyser</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600, color: "var(--color-ink)", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>Värdering per bransch</h2>
            <p style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>Multiplar varierar kraftigt beroende på bransch. Här är hur köpare tänker om de vanligaste sektorerna.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map((ind) => <IndustryCard key={ind.href} {...ind} />)}
          </div>
        </div>
      </section>

      <CTASection
        headline="Vill du förstå vad ditt bolag kan vara värt?"
        subtext="Det tar fem minuter att fylla i kalkylatorn. Du får ett indikativt värderingsintervall, en exit readiness-poäng och konkreta värdedrivare att arbeta med."
        primaryCTA={{ label: "Gör en indikativ värdering", href: "/vardera-bolag" }}
        secondaryCTA={{ label: "Kontakta oss", href: "/kontakt" }}
        variant="dark"
      />
    </>
  );
}
