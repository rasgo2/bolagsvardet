import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import SEOContentBlock from "@/components/SEOContentBlock";

export const metadata: Metadata = {
  title: "Säljarrevers – Vad det innebär och när du bör acceptera",
  description: "En säljarrevers innebär att du lånar ut delar av köpeskillingen till köparen. Vi förklarar hur det fungerar, riskerna du tar och när det kan vara rimligt.",
  alternates: { canonical: "https://bolagsvardet.se/guider/saljarrevers" },
};

export default function SaljarreversPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(160deg, #f7f7fc 0%, #eff3ff 50%, #f7f7fc 100%)", padding: "5rem 1.5rem" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1rem" }}>
            <Link href="/" style={{ fontSize: "0.8rem", color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>Hem</Link>
            <span style={{ color: "var(--color-muted)" }}>›</span>
            <span style={{ fontSize: "0.8rem", color: "var(--color-ink)", fontFamily: "var(--font-body)" }}>Säljarrevers</span>
          </div>
          <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 600, color: "var(--color-accent)", background: "var(--color-accent-subtle)", padding: "0.2rem 0.6rem", borderRadius: "6px", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.07em", fontFamily: "var(--font-body)" }}>Transaktionsstruktur</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 600, color: "var(--color-ink)", letterSpacing: "-0.02em", marginBottom: "1rem" }}>Säljarrevers</h1>
          <p style={{ fontSize: "1.05rem", color: "var(--color-slate)", lineHeight: 1.75, fontFamily: "var(--font-body)" }}>En säljarrevers innebär att säljaren finansierar delar av köpet. Det kan vara ett förhandlingsverktyg – men det för med sig risker som du måste förstå innan du accepterar.</p>
          <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", fontFamily: "var(--font-body)", marginTop: "1rem" }}>6 minuters läsning</p>
        </div>
      </section>
      <SEOContentBlock>
        <h2>Vad är en säljarrevers?</h2>
        <p>En säljarrevers (seller's note eller vendor loan) innebär att du som säljare accepterar att en del av köpeskillingen – typiskt 10–30% – betalas ut i efterhand, strukturerat som ett lån från dig till köparen. Köparen betalar ränta och amorterar under en avtalad period, ofta 2–5 år.</p>
        <p>Ur köparens perspektiv är en säljarrevers ett komplement till bankfinansiering och eget kapital. Det kan möjliggöra en affär som annars inte gått att finansiera – eller förbättra köparens likviditet vid tillträde.</p>
        <h2>När används säljarrevers?</h2>
        <p>Säljarrevers förekommer oftast i tre situationer:</p>
        <ul>
          <li><strong>Finansieringsglapp:</strong> Köparen kan inte finansiera hela köpeskillingen via bank och eget kapital</li>
          <li><strong>Förtroendesignal:</strong> Köparen vill att du som säljare "håller kvar skin in the game" och visar tillit till bolagets framtid</li>
          <li><strong>Prisbro:</strong> Parterna är inte överens om priset och en säljarrevers möjliggör affären till ett högre nominellt pris med uppskjuten betalning</li>
        </ul>
        <h2>Vilka risker tar du som säljare?</h2>
        <p>En säljarrevers är ett kreditrisk du tar på köparen. Om köparen misslyckas med att driva bolaget och inte kan betala tillbaka – får du ofta en svårt att återfå dina pengar. Du har normalt sett en fordran på köparen (inte bolaget), vilket innebär att du hamnar i kön bakom banker och andra prioriterade fordringsägare om det går illa.</p>
        <ul>
          <li>Kräv alltid säkerhet – pantbrev, borgen eller liknande</li>
          <li>Begränsa belopp och löptid – ju mindre och kortare desto bättre</li>
          <li>Förhandla ränta som kompenserar för risken – typiskt 4–8% per år</li>
          <li>Inkludera acceleration-klausuler vid kontraktsbrott</li>
        </ul>
        <h2>Är säljarrevers alltid negativt?</h2>
        <p>Inte nödvändigtvis. Om säljarreversen möjliggör en affär med en stark köpare som du bedömer ha goda förutsättningar, och om du kan förhandla bra villkor och säkerheter, kan det vara ett rimligt alternativ. Det är alltid bättre att göra en affär med en mindre kontantsumma vid tillträde än att inte göra någon affär alls.</p>
        <p>Prata alltid med en M&A-advokat och din skatterådgivare innan du accepterar en säljarrevers. Skatteeffekterna och den civilrättsliga utformningen kan ha stor påverkan på det faktiska ekonomiska utfallet.</p>
      </SEOContentBlock>
      <section style={{ padding: "0 1.5rem 5rem", background: "var(--color-white)" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "14px", padding: "2rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "1rem" }}>Relaterade guider</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[{ label: "Earn-out – hur det fungerar", href: "/guider/earn-out" }, { label: "Due diligence", href: "/guider/due-diligence" }, { label: "Sälja företag – processen steg för steg", href: "/salja-foretag" }].map((l) => <Link key={l.href} href={l.href} style={{ color: "var(--color-accent)", fontSize: "0.9rem", fontFamily: "var(--font-body)" }}>→ {l.label}</Link>)}
            </div>
          </div>
        </div>
      </section>
      <CTASection headline="Förstå ditt bolags position inför en försäljning" primaryCTA={{ label: "Gör en indikativ värdering", href: "/vardera-bolag" }} variant="accent" />
    </>
  );
}
