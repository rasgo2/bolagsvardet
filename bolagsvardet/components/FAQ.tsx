"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({ items, title = "Vanliga frågor" }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ padding: "5rem 1.5rem", background: "var(--color-surface)" }}>
      <div className="max-w-3xl mx-auto">
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 600,
            color: "var(--color-ink)",
            marginBottom: "2.5rem",
            textAlign: "center",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                background: "var(--color-white)",
                border: "1px solid var(--color-border)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "var(--font-body)",
                }}
              >
                <span
                  style={{
                    fontWeight: 500,
                    color: "var(--color-ink)",
                    fontSize: "0.95rem",
                    lineHeight: 1.4,
                  }}
                >
                  {item.question}
                </span>
                <span
                  style={{
                    flexShrink: 0,
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: open === i ? "var(--color-accent)" : "var(--color-surface)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: open === i ? "white" : "var(--color-slate)",
                    transition: "all 0.2s",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    {open === i ? (
                      <path d="M3 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    ) : (
                      <path d="M7 3v8M3 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    )}
                  </svg>
                </span>
              </button>
              {open === i && (
                <div style={{ padding: "0 1.5rem 1.25rem" }}>
                  <p style={{ color: "var(--color-slate)", lineHeight: 1.75, fontSize: "0.9rem", fontFamily: "var(--font-body)" }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
