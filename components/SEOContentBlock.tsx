interface SEOContentBlockProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function SEOContentBlock({ children, title, subtitle }: SEOContentBlockProps) {
  return (
    <section style={{ padding: "5rem 1.5rem", background: "var(--color-white)" }}>
      <div className="max-w-3xl mx-auto">
        {(title || subtitle) && (
          <div style={{ marginBottom: "2.5rem" }}>
            {title && (
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 600,
                  color: "var(--color-ink)",
                  marginBottom: subtitle ? "0.75rem" : 0,
                  letterSpacing: "-0.02em",
                }}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p style={{ color: "var(--color-slate)", lineHeight: 1.75, fontFamily: "var(--font-body)" }}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="prose">{children}</div>
      </div>
    </section>
  );
}
