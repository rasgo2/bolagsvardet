import type { Metadata } from "next";
import ValuationCalculator from "@/components/ValuationCalculator";

export const metadata: Metadata = {
  title: "Värdera ditt bolag – Indikativ bolagsvärdering",
  description: "Beräkna vad ditt bolag kan vara värt med vår kostnadsfria värderingskalkylator. Få ett indikativt värderingsintervall, exit readiness-poäng och konkreta värdedrivare.",
  alternates: { canonical: "https://bolagsvardet.se/vardera-bolag" },
};

export default function VarderaBolagPage() {
  return (
    <div>
      <section style={{ background: "linear-gradient(160deg, #f7f7fc 0%, #eff3ff 50%, #f7f7fc 100%)", padding: "4rem 1.5rem 3rem" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--color-accent-subtle)", border: "1px solid rgba(30, 64, 175, 0.2)", borderRadius: "100px", padding: "0.3rem 0.9rem", marginBottom: "1.5rem" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-accent)", display: "inline-block" }} />
            <span style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--color-accent)", fontFamily: "var(--font-body)" }}>Kostnadsfritt verktyg</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 600, color: "var(--color-ink)", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            Indikativ bolagsvärdering
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--color-slate)", lineHeight: 1.75, fontFamily: "var(--font-body)", marginBottom: "0.5rem" }}>
            Fyll i uppgifterna nedan för att få ett indikativt värderingsintervall, en exit readiness-bedömning och konkreta faktorer som driver eller sänker värdet på ditt bolag.
          </p>
        </div>
      </section>

      <section style={{ padding: "3rem 1.5rem 5rem", background: "var(--color-white)" }}>
        <ValuationCalculator />
      </section>

      <section style={{ background: "var(--color-surface)", padding: "4rem 1.5rem" }}>
        <div className="max-w-3xl mx-auto">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "1rem", textAlign: "center" }}>
            Hur fungerar kalkylatorn?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {[
              { n: "1", title: "Ange grunddata", desc: "Bransch, omsättning och EBITDA är de viktigaste utgångspunkterna för värderingen." },
              { n: "2", title: "Kvalitativa faktorer", desc: "Tillväxt, kundkoncentration och ägarberoende justerar upp eller ned multipeln markant." },
              { n: "3", title: "Få resultatet", desc: "Du får ett indikativt värderingsintervall, en EBITDA-multipel och en exit readiness-bedömning." },
            ].map((s) => (
              <div key={s.n} style={{ textAlign: "center" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--color-accent)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem", fontWeight: 600, fontFamily: "var(--font-body)" }}>{s.n}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "0.4rem" }}>{s.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--color-slate)", lineHeight: 1.65, fontFamily: "var(--font-body)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
