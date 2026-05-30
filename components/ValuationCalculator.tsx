"use client";

import { useState } from "react";
import ResultCard from "./ResultCard";

interface CalcFormData {
  bransch: string;
  omsattning: string;
  ebitda: string;
  tillvaxt: string;
  aterkommer: string;
  kundkoncentration: "low" | "medium" | "high" | "";
  agarberoende: "low" | "medium" | "high" | "";
  anstallda: string;
  tidshorisont: string;
  [key: string]: string;
}

const initialData: CalcFormData = {
  bransch: "",
  omsattning: "",
  ebitda: "",
  tillvaxt: "",
  aterkommer: "",
  kundkoncentration: "",
  agarberoende: "",
  anstallda: "",
  tidshorisont: "",
};

const branscher = [
  { value: "saas", label: "SaaS-bolag" },
  { value: "konsult", label: "Konsultbolag" },
  { value: "stad", label: "Städföretag" },
  { value: "redovisning", label: "Redovisningsbyrå" },
  { value: "other", label: "Annan bransch" },
];

const tidshorisonter = [
  { value: "nu", label: "Så snart som möjligt" },
  { value: "6-12", label: "6–12 månader" },
  { value: "1-3", label: "1–3 år" },
  { value: "nyfiken", label: "Bara nyfiken" },
];

const baseMultiples: Record<string, { min: number; max: number }> = {
  saas: { min: 4.0, max: 8.0 },
  konsult: { min: 2.5, max: 5.0 },
  stad: { min: 2.0, max: 4.0 },
  redovisning: { min: 3.0, max: 6.0 },
  other: { min: 2.5, max: 5.0 },
};

function computeValuation(data: CalcFormData) {
  const bransch = data.bransch || "other";
  const base = baseMultiples[bransch] ?? baseMultiples["other"];
  let minMult = base.min;
  let maxMult = base.max;

  const growth = parseFloat(data.tillvaxt) || 0;
  if (growth > 20) { minMult += 0.5; maxMult += 1.0; }
  else if (growth > 10) { minMult += 0.25; maxMult += 0.5; }
  else if (growth < 0) { minMult -= 0.5; maxMult -= 0.5; }

  const aterkommer = parseFloat(data.aterkommer) || 0;
  if (aterkommer > 70) { minMult += 0.5; maxMult += 1.0; }
  else if (aterkommer > 40) { minMult += 0.25; maxMult += 0.5; }

  if (data.kundkoncentration === "high") { minMult -= 0.5; maxMult -= 0.75; }
  else if (data.kundkoncentration === "low") { minMult += 0.25; maxMult += 0.25; }

  if (data.agarberoende === "high") { minMult -= 0.75; maxMult -= 1.0; }
  else if (data.agarberoende === "low") { minMult += 0.25; maxMult += 0.5; }

  minMult = Math.max(1.0, Math.round(minMult * 4) / 4);
  maxMult = Math.max(minMult + 0.5, Math.round(maxMult * 4) / 4);

  const ebitda = parseFloat(data.ebitda) || 0;
  const minVal = Math.round(ebitda * minMult * 1000) * 1000;
  const maxVal = Math.round(ebitda * maxMult * 1000) * 1000;

  // Exit readiness score
  let score = 50;
  if (growth > 15) score += 10;
  if (growth > 25) score += 5;
  if (aterkommer > 60) score += 10;
  if (data.kundkoncentration === "low") score += 10;
  if (data.kundkoncentration === "high") score -= 15;
  if (data.agarberoende === "low") score += 10;
  if (data.agarberoende === "high") score -= 20;
  if (data.tidshorisont === "1-3") score += 5;
  if (data.tidshorisont === "nyfiken") score -= 5;
  score = Math.max(10, Math.min(95, score));

  const drivers: string[] = [];
  const risks: string[] = [];

  if (aterkommer > 60) drivers.push("Hög andel återkommande intäkter ger stabil och förutsägbar kassaflödesprofil");
  if (growth > 15) drivers.push("Stark tillväxt signalerar marknadspotential och attraherar premiumvärderingar");
  if (data.kundkoncentration === "low") drivers.push("Diversifierad kundbas minskar riskprofilen och stärker förhandlingsposition");
  if (data.agarberoende === "low") drivers.push("Låg ägarberoende möjliggör smidig ägarövergång utan värdetapp");
  if (bransch === "saas") drivers.push("SaaS-modellen genererar skalbar intjäning med höga retentionsmöjligheter");
  if (bransch === "redovisning") drivers.push("Hög kundlojalitet och återkommande behov ger stabilt kassaflöde");

  if (data.kundkoncentration === "high") risks.push("Hög kundkoncentration – en eller ett fåtal kunder utgör oproportionerlig andel av intäkterna");
  if (data.agarberoende === "high") risks.push("Stark ägarberoende kan leda till kunskapstapp och kundavhopp vid ägarskifte");
  if (growth < 0) risks.push("Negativ tillväxt signalerar marknadsproblem och kräver tydlig förklaring inför köpare");
  if (aterkommer < 20) risks.push("Låg andel återkommande intäkter ger osäkert och volatilt kassaflöde");
  if (data.tidshorisont === "nu") risks.push("Kort tidshorisont begränsar möjligheten att åtgärda värdesänkande faktorer innan försäljning");

  while (drivers.length < 3) drivers.push("Dokumenterade processer och tydlig affärsmodell underlättar due diligence");
  while (risks.length < 3) risks.push("Begränsad dokumentation av affärsprocesser kan förlänga och försvåra due diligence-processen");

  return {
    minVal,
    maxVal,
    minMult,
    maxMult,
    exitScore: score,
    drivers: drivers.slice(0, 3),
    risks: risks.slice(0, 3),
  };
}

const labelStyle = {
  display: "block" as const,
  fontSize: "0.85rem",
  fontWeight: 500,
  color: "var(--color-slate)",
  marginBottom: "0.375rem",
  fontFamily: "var(--font-body)",
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem 1rem",
  border: "1px solid var(--color-border)",
  borderRadius: "10px",
  fontSize: "0.95rem",
  fontFamily: "var(--font-body)",
  color: "var(--color-ink)",
  background: "var(--color-white)",
};

const selectStyle = { ...inputStyle, appearance: "auto" as const };

function ToggleGroup({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string; desc?: string }[];
}) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${options.length}, 1fr)`, gap: "0.5rem" }}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          style={{
            padding: "0.75rem 0.5rem",
            border: value === opt.value ? "2px solid var(--color-accent)" : "1px solid var(--color-border)",
            borderRadius: "10px",
            background: value === opt.value ? "var(--color-accent-subtle)" : "var(--color-white)",
            color: value === opt.value ? "var(--color-accent)" : "var(--color-slate)",
            fontWeight: value === opt.value ? 600 : 400,
            fontSize: "0.875rem",
            fontFamily: "var(--font-body)",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          <div>{opt.label}</div>
          {opt.desc && <div style={{ fontSize: "0.7rem", opacity: 0.7, marginTop: "2px" }}>{opt.desc}</div>}
        </button>
      ))}
    </div>
  );
}

export default function ValuationCalculator() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<CalcFormData>(initialData);
  const [result, setResult] = useState<ReturnType<typeof computeValuation> | null>(null);

  const totalSteps = 3;

  const set = (key: keyof CalcFormData, val: string) => setData((d) => ({ ...d, [key]: val }));

  const canNext1 = data.bransch && data.omsattning && data.ebitda;
  const canNext2 = data.tillvaxt !== "" && data.kundkoncentration && data.agarberoende;
  const canSubmit = data.tidshorisont;

  const handleSubmit = () => {
    const r = computeValuation(data);
    setResult(r);
  };

  const reset = () => { setStep(1); setData(initialData); setResult(null); };

  if (result) {
    return <ResultCard result={result} data={data} onReset={reset} />;
  }

  return (
    <div
      style={{
        background: "var(--color-white)",
        border: "1px solid var(--color-border)",
        borderRadius: "16px",
        padding: "clamp(1.5rem, 4vw, 2.5rem)",
        maxWidth: "680px",
        margin: "0 auto",
        boxShadow: "0 4px 24px rgba(26,26,46,0.07)",
      }}
    >
      {/* Progress */}
      <div style={{ marginBottom: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
          <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--color-accent)", fontFamily: "var(--font-body)" }}>
            Steg {step} av {totalSteps}
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>
            {step === 1 ? "Grunduppgifter" : step === 2 ? "Kvalitativa faktorer" : "Tidshorisont"}
          </p>
        </div>
        <div style={{ height: "4px", background: "var(--color-surface)", borderRadius: "100px" }}>
          <div
            style={{
              height: "100%",
              background: "var(--color-accent)",
              borderRadius: "100px",
              width: `${(step / totalSteps) * 100}%`,
              transition: "width 0.3s ease",
            }}
          />
        </div>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "0.25rem" }}>
            Berätta om ditt bolag
          </h2>
          <p style={{ color: "var(--color-slate)", fontSize: "0.9rem", fontFamily: "var(--font-body)", marginBottom: "0.5rem" }}>
            Vi börjar med de grundläggande finansiella uppgifterna.
          </p>

          <div>
            <label style={labelStyle}>Bransch *</label>
            <select style={selectStyle} value={data.bransch} onChange={(e) => set("bransch", e.target.value)}>
              <option value="">Välj bransch</option>
              {branscher.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label style={labelStyle}>Omsättning (MSEK) *</label>
              <input
                type="number"
                min="0"
                placeholder="t.ex. 15"
                style={inputStyle}
                value={data.omsattning}
                onChange={(e) => set("omsattning", e.target.value)}
              />
            </div>
            <div>
              <label style={labelStyle}>EBITDA (MSEK) *</label>
              <input
                type="number"
                min="0"
                placeholder="t.ex. 4"
                style={inputStyle}
                value={data.ebitda}
                onChange={(e) => set("ebitda", e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label style={labelStyle}>Antal anställda</label>
              <input
                type="number"
                min="0"
                placeholder="t.ex. 25"
                style={inputStyle}
                value={data.anstallda}
                onChange={(e) => set("anstallda", e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={() => setStep(2)}
            disabled={!canNext1}
            style={{
              background: canNext1 ? "var(--color-accent)" : "var(--color-border)",
              color: canNext1 ? "white" : "var(--color-muted)",
              padding: "0.875rem",
              borderRadius: "10px",
              fontWeight: 500,
              fontSize: "0.975rem",
              fontFamily: "var(--font-body)",
              border: "none",
              cursor: canNext1 ? "pointer" : "not-allowed",
              marginTop: "0.5rem",
            }}
          >
            Nästa steg →
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "0.25rem" }}>
              Kvalitativa faktorer
            </h2>
            <p style={{ color: "var(--color-slate)", fontSize: "0.9rem", fontFamily: "var(--font-body)" }}>
              Dessa faktorer påverkar multipeln markant.
            </p>
          </div>

          <div>
            <label style={labelStyle}>Tillväxt senaste året (%)</label>
            <input
              type="number"
              placeholder="t.ex. 15"
              style={inputStyle}
              value={data.tillvaxt}
              onChange={(e) => set("tillvaxt", e.target.value)}
            />
          </div>

          <div>
            <label style={labelStyle}>Andel återkommande intäkter (%)</label>
            <input
              type="number"
              min="0"
              max="100"
              placeholder="t.ex. 60"
              style={inputStyle}
              value={data.aterkommer}
              onChange={(e) => set("aterkommer", e.target.value)}
            />
          </div>

          <div>
            <label style={labelStyle}>Kundkoncentration *</label>
            <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", marginBottom: "0.5rem", fontFamily: "var(--font-body)" }}>
              Hur stor andel av intäkterna kommer från de 3 största kunderna?
            </p>
            <ToggleGroup
              value={data.kundkoncentration}
              onChange={(v) => set("kundkoncentration", v)}
              options={[
                { value: "low", label: "Låg", desc: "< 30%" },
                { value: "medium", label: "Medel", desc: "30–60%" },
                { value: "high", label: "Hög", desc: "> 60%" },
              ]}
            />
          </div>

          <div>
            <label style={labelStyle}>Ägarberoende *</label>
            <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", marginBottom: "0.5rem", fontFamily: "var(--font-body)" }}>
              Hur beroende är bolaget av dig som ägare i den dagliga driften?
            </p>
            <ToggleGroup
              value={data.agarberoende}
              onChange={(v) => set("agarberoende", v)}
              options={[
                { value: "low", label: "Lågt", desc: "Delegerat" },
                { value: "medium", label: "Medel", desc: "Delvis" },
                { value: "high", label: "Högt", desc: "Centralt" },
              ]}
            />
          </div>

          <div style={{ display: "flex", gap: "0.75rem" }}>
            <button
              onClick={() => setStep(1)}
              style={{
                flex: 1,
                background: "var(--color-surface)",
                color: "var(--color-slate)",
                padding: "0.875rem",
                borderRadius: "10px",
                fontWeight: 500,
                fontSize: "0.975rem",
                fontFamily: "var(--font-body)",
                border: "1px solid var(--color-border)",
                cursor: "pointer",
              }}
            >
              ← Tillbaka
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={!canNext2}
              style={{
                flex: 2,
                background: canNext2 ? "var(--color-accent)" : "var(--color-border)",
                color: canNext2 ? "white" : "var(--color-muted)",
                padding: "0.875rem",
                borderRadius: "10px",
                fontWeight: 500,
                fontSize: "0.975rem",
                fontFamily: "var(--font-body)",
                border: "none",
                cursor: canNext2 ? "pointer" : "not-allowed",
              }}
            >
              Nästa steg →
            </button>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "var(--color-ink)", marginBottom: "0.25rem" }}>
              Tidshorisont
            </h2>
            <p style={{ color: "var(--color-slate)", fontSize: "0.9rem", fontFamily: "var(--font-body)" }}>
              När funderar du på att sälja bolaget?
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {tidshorisonter.map((t) => (
              <button
                key={t.value}
                type="button"
                onClick={() => set("tidshorisont", t.value)}
                style={{
                  padding: "1rem 1.25rem",
                  border: data.tidshorisont === t.value ? "2px solid var(--color-accent)" : "1px solid var(--color-border)",
                  borderRadius: "10px",
                  background: data.tidshorisont === t.value ? "var(--color-accent-subtle)" : "var(--color-white)",
                  color: data.tidshorisont === t.value ? "var(--color-accent)" : "var(--color-ink)",
                  fontWeight: data.tidshorisont === t.value ? 600 : 400,
                  fontSize: "0.95rem",
                  fontFamily: "var(--font-body)",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", gap: "0.75rem" }}>
            <button
              onClick={() => setStep(2)}
              style={{
                flex: 1,
                background: "var(--color-surface)",
                color: "var(--color-slate)",
                padding: "0.875rem",
                borderRadius: "10px",
                fontWeight: 500,
                fontSize: "0.975rem",
                fontFamily: "var(--font-body)",
                border: "1px solid var(--color-border)",
                cursor: "pointer",
              }}
            >
              ← Tillbaka
            </button>
            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              style={{
                flex: 2,
                background: canSubmit ? "var(--color-accent)" : "var(--color-border)",
                color: canSubmit ? "white" : "var(--color-muted)",
                padding: "0.875rem",
                borderRadius: "10px",
                fontWeight: 500,
                fontSize: "0.975rem",
                fontFamily: "var(--font-body)",
                border: "none",
                cursor: canSubmit ? "pointer" : "not-allowed",
              }}
            >
              Beräkna värdering →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
