import Link from "next/link";

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  badge?: string;
}

export default function Hero({ headline, subheadline, primaryCTA, secondaryCTA, badge }: HeroProps) {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, #f7f7fc 0%, #eff3ff 50%, #f7f7fc 100%)",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background pattern */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 70% 40%, rgba(59, 95, 212, 0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-3xl">
          {badge && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "var(--color-accent-subtle)",
                border: "1px solid rgba(30, 64, 175, 0.2)",
                borderRadius: "100px",
                padding: "0.3rem 0.9rem",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--color-accent)",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {badge}
              </span>
            </div>
          )}

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              color: "var(--color-ink)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}
          >
            {headline}
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--color-slate)",
              lineHeight: 1.75,
              marginBottom: "2rem",
              maxWidth: "600px",
              fontFamily: "var(--font-body)",
            }}
          >
            {subheadline}
          </p>

          <div className="flex flex-wrap gap-3">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                style={{
                  background: "var(--color-accent)",
                  color: "white",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "10px",
                  fontWeight: 500,
                  fontSize: "1rem",
                  fontFamily: "var(--font-body)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 4px 14px rgba(30, 64, 175, 0.3)",
                }}
                className="hover:opacity-90"
              >
                {primaryCTA.label}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                style={{
                  background: "white",
                  color: "var(--color-ink)",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "10px",
                  fontWeight: 500,
                  fontSize: "1rem",
                  fontFamily: "var(--font-body)",
                  border: "1px solid var(--color-border)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                className="hover:border-blue-300"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
