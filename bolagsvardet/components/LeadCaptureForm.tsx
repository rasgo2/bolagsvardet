"use client";

import { useState } from "react";

interface LeadCaptureFormProps {
  title?: string;
  description?: string;
  submitLabel?: string;
  source?: string;
}

export default function LeadCaptureForm({
  title = "Boka en fördjupad genomgång",
  description = "Fyll i dina uppgifter så återkommer vi inom en arbetsdag för att diskutera din situation.",
  submitLabel = "Skicka förfrågan",
  source = "website",
}: LeadCaptureFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div
        style={{
          background: "var(--color-green-bg)",
          border: "1px solid #bbf7d0",
          borderRadius: "14px",
          padding: "2.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            background: "#dcfce7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1rem",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l5 5 9-9" stroke="#166534" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--color-green)", marginBottom: "0.5rem" }}>
          Tack för din förfrågan
        </h3>
        <p style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)", fontSize: "0.9rem" }}>
          Vi återkommer inom en arbetsdag.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "var(--color-white)",
        border: "1px solid var(--color-border)",
        borderRadius: "14px",
        padding: "2rem",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "var(--color-ink)",
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </h3>
      <p style={{ color: "var(--color-slate)", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1.5rem", fontFamily: "var(--font-body)" }}>
        {description}
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input type="hidden" name="source" value={source} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 500, color: "var(--color-slate)", marginBottom: "0.375rem", fontFamily: "var(--font-body)" }}>
              Namn *
            </label>
            <input
              type="text"
              required
              placeholder="Anna Lindgren"
              style={{
                width: "100%",
                padding: "0.625rem 0.875rem",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                fontSize: "0.9rem",
                fontFamily: "var(--font-body)",
                color: "var(--color-ink)",
                background: "var(--color-white)",
              }}
            />
          </div>
          <div>
            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 500, color: "var(--color-slate)", marginBottom: "0.375rem", fontFamily: "var(--font-body)" }}>
              E-post *
            </label>
            <input
              type="email"
              required
              placeholder="anna@foretag.se"
              style={{
                width: "100%",
                padding: "0.625rem 0.875rem",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                fontSize: "0.9rem",
                fontFamily: "var(--font-body)",
                color: "var(--color-ink)",
                background: "var(--color-white)",
              }}
            />
          </div>
        </div>

        <div>
          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 500, color: "var(--color-slate)", marginBottom: "0.375rem", fontFamily: "var(--font-body)" }}>
            Telefon
          </label>
          <input
            type="tel"
            placeholder="070-123 45 67"
            style={{
              width: "100%",
              padding: "0.625rem 0.875rem",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
              fontSize: "0.9rem",
              fontFamily: "var(--font-body)",
              color: "var(--color-ink)",
              background: "var(--color-white)",
            }}
          />
        </div>

        <div>
          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 500, color: "var(--color-slate)", marginBottom: "0.375rem", fontFamily: "var(--font-body)" }}>
            Berätta kort om ert bolag
          </label>
          <textarea
            rows={3}
            placeholder="Bransch, omsättning, tidpunkt för potentiell försäljning..."
            style={{
              width: "100%",
              padding: "0.625rem 0.875rem",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
              fontSize: "0.9rem",
              fontFamily: "var(--font-body)",
              color: "var(--color-ink)",
              background: "var(--color-white)",
              resize: "vertical",
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            background: "var(--color-accent)",
            color: "white",
            padding: "0.875rem",
            borderRadius: "10px",
            fontWeight: 500,
            fontSize: "0.975rem",
            fontFamily: "var(--font-body)",
            border: "none",
            cursor: loading ? "wait" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Skickar..." : submitLabel}
        </button>

        <p style={{ fontSize: "0.75rem", color: "var(--color-muted)", textAlign: "center", fontFamily: "var(--font-body)" }}>
          Vi delar aldrig dina uppgifter med tredje part.
        </p>
      </form>
    </div>
  );
}
