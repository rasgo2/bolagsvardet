"use client";

import Link from "next/link";

interface ResultData {
  minVal: number;
  maxVal: number;
  minMult: number;
  maxMult: number;
  exitScore: number;
  drivers: string[];
  risks: string[];
}

interface CalcFormData {
  bransch: string;
  ebitda: string;
  tidshorisont: string;
  [key: string]: string;
}

interface ResultCardProps {
  result: ResultData;
  data: CalcFormData;
  onReset: () => void;
}

function formatMSEK(val: number): string {
  if (val === 0) return "–";
  if (val >= 1000) return `${(val / 1000).toFixed(1)} MSEK`;
  return `${val.toFixed(1)} MSEK`;
}

function ScoreMeter({ score }: { score: number }) {
  const color = score >= 70 ? "#166534" : score >= 45 ? "#92400e" : "#991b1b";
  const bgColor = score >= 70 ? "#f0fdf4" : score >= 45 ? "#fffbeb" : "#fef2f2";
  const label = score >= 70 ? "Bra exit-förutsättningar" : score >= 45 ? "Förbättringspotential finns" : "Kräver förberedelse";

  return (
    <div
      style={{
        background: bgColor,
        border: `1px solid ${color}30`,
        borderRadius: "12px",
        padding: "1.25rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
        <span style={{ fontSize: "0.85rem", fontWeight: 600, color, fontFamily: "var(--font-body)" }}>
          Exit Readiness
        </span>
        <span style={{ fontSize: "1.5rem", fontWeight: 700, color, fontFamily: "var(--font-body)" }}>
          {score}/100
        </span>
      </div>
      <div style={{ height: "8px", background: `${color}20`, borderRadius: "100px", marginBottom: "0.5rem" }}>
        <div style={{ height: "100%", width: `${score}%`, background: color, borderRadius: "100px", transition: "width 1s ease" }} />
      </div>
      <p style={{ fontSize: "0.8rem", color, fontFamily: "var(--font-body)" }}>{label}</p>
    </div>
  );
}

export default function ResultCard({ result, data, onReset }: ResultCardProps) {
  const ebitda = parseFloat(data.ebitda) || 0;

  return (
    <div style={{ maxWidth: "680px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "var(--color-green-bg)",
            border: "1px solid #bbf7d0",
            borderRadius: "100px",
            padding: "0.3rem 0.9rem",
            marginBottom: "1rem",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#166534", display: "inline-block" }} />
          <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--color-green)", fontFamily: "var(--font-body)" }}>
            Indikativ värdering beräknad
          </span>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.4rem, 4vw, 2rem)",
            fontWeight: 600,
            color: "var(--color-ink)",
            marginBottom: "0.5rem",
          }}
        >
          Ditt bolag kan vara värt
        </h2>

        {ebitda > 0 ? (
          <div
            style={{
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              fontWeight: 700,
              color: "var(--color-accent)",
              fontFamily: "var(--font-body)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {formatMSEK(result.minVal)} – {formatMSEK(result.maxVal)}
          </div>
        ) : (
          <div
            style={{
              fontSize: "1.25rem",
              color: "var(--color-slate)",
              fontFamily: "var(--font-body)",
            }}
          >
            Ange EBITDA för att se värderingsintervall
          </div>
        )}

        <p style={{ color: "var(--color-muted)", fontSize: "0.875rem", marginTop: "0.5rem", fontFamily: "var(--font-body)" }}>
          Baserat på {result.minMult}–{result.maxMult}× EBITDA
          {ebitda > 0 && ` på ${ebitda} MSEK`}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Multiple card */}
        <div
          style={{
            background: "var(--color-accent-subtle)",
            border: "1px solid rgba(30,64,175,0.15)",
            borderRadius: "12px",
            padding: "1.25rem",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-accent)", marginBottom: "0.25rem", fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.07em" }}>
            EBITDA-multipel
          </p>
          <p style={{ fontSize: "2rem", fontWeight: 700, color: "var(--color-accent)", fontFamily: "var(--font-body)" }}>
            {result.minMult}–{result.maxMult}×
          </p>
        </div>

        {/* Score */}
        <ScoreMeter score={result.exitScore} />
      </div>

      {/* Drivers */}
      <div
        style={{
          background: "var(--color-green-bg)",
          border: "1px solid #bbf7d0",
          borderRadius: "12px",
          padding: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            fontWeight: 600,
            color: "var(--color-green)",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span>↑</span> Värdedrivare
        </h3>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {result.drivers.map((d, i) => (
            <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <span style={{ color: "var(--color-green)", flexShrink: 0, marginTop: "2px" }}>✓</span>
              <span style={{ fontSize: "0.875rem", color: "#166534", lineHeight: 1.55, fontFamily: "var(--font-body)" }}>{d}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Risks */}
      <div
        style={{
          background: "#fff7ed",
          border: "1px solid #fed7aa",
          borderRadius: "12px",
          padding: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            fontWeight: 600,
            color: "#c2410c",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span>↓</span> Riskfaktorer att adressera
        </h3>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {result.risks.map((r, i) => (
            <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <span style={{ color: "#c2410c", flexShrink: 0, marginTop: "2px" }}>!</span>
              <span style={{ fontSize: "0.875rem", color: "#7c2d12", lineHeight: 1.55, fontFamily: "var(--font-body)" }}>{r}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div
        style={{
          background: "var(--color-ink)",
          borderRadius: "12px",
          padding: "1.75rem",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 600, color: "white", marginBottom: "0.5rem" }}>
          Vill du gå djupare?
        </h3>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", fontFamily: "var(--font-body)", marginBottom: "1.25rem" }}>
          Boka en kostnadsfri genomgång där vi diskuterar din specifika situation, värdedrivare och timing.
        </p>
        <Link
          href="/kontakt"
          style={{
            display: "inline-block",
            background: "white",
            color: "var(--color-ink)",
            padding: "0.875rem 2rem",
            borderRadius: "10px",
            fontWeight: 500,
            fontSize: "0.975rem",
            fontFamily: "var(--font-body)",
          }}
          className="hover:opacity-90"
        >
          Boka en fördjupad genomgång
        </Link>
      </div>

      {/* Disclaimer */}
      <p
        style={{
          fontSize: "0.75rem",
          color: "var(--color-muted)",
          lineHeight: 1.65,
          fontFamily: "var(--font-body)",
          marginBottom: "1rem",
          padding: "0.75rem 1rem",
          background: "var(--color-surface)",
          borderRadius: "8px",
          border: "1px solid var(--color-border)",
        }}
      >
        <strong style={{ color: "var(--color-slate)" }}>Disclaimer:</strong> Detta är en indikativ uppskattning baserad på
        förenklade antaganden och ska inte ses som en formell värdering, fairness opinion eller transaktionsrådgivning.
        Faktisk värdering beror på ett stort antal faktorer som kräver professionell analys.
      </p>

      <button
        onClick={onReset}
        style={{
          width: "100%",
          padding: "0.75rem",
          border: "1px solid var(--color-border)",
          borderRadius: "10px",
          background: "transparent",
          color: "var(--color-slate)",
          fontSize: "0.875rem",
          fontFamily: "var(--font-body)",
          cursor: "pointer",
        }}
      >
        Gör en ny beräkning
      </button>
    </div>
  );
}
