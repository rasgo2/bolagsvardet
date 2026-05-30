import Link from "next/link";

interface CTASectionProps {
  headline: string;
  subtext?: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  variant?: "dark" | "light" | "accent";
}

export default function CTASection({
  headline,
  subtext,
  primaryCTA,
  secondaryCTA,
  variant = "dark",
}: CTASectionProps) {
  const bgStyles = {
    dark: {
      background: "var(--color-ink)",
      headingColor: "white",
      textColor: "rgba(255,255,255,0.65)",
      primaryBg: "white",
      primaryColor: "var(--color-ink)",
      secondaryBorder: "rgba(255,255,255,0.2)",
      secondaryColor: "rgba(255,255,255,0.8)",
    },
    light: {
      background: "var(--color-surface)",
      headingColor: "var(--color-ink)",
      textColor: "var(--color-slate)",
      primaryBg: "var(--color-accent)",
      primaryColor: "white",
      secondaryBorder: "var(--color-border)",
      secondaryColor: "var(--color-slate)",
    },
    accent: {
      background: "var(--color-accent)",
      headingColor: "white",
      textColor: "rgba(255,255,255,0.75)",
      primaryBg: "white",
      primaryColor: "var(--color-accent)",
      secondaryBorder: "rgba(255,255,255,0.3)",
      secondaryColor: "rgba(255,255,255,0.85)",
    },
  }[variant];

  return (
    <section
      style={{
        background: bgStyles.background,
        padding: "5rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
            fontWeight: 600,
            color: bgStyles.headingColor,
            lineHeight: 1.2,
            marginBottom: subtext ? "1rem" : "2rem",
            letterSpacing: "-0.02em",
          }}
        >
          {headline}
        </h2>
        {subtext && (
          <p
            style={{
              fontSize: "1rem",
              color: bgStyles.textColor,
              lineHeight: 1.7,
              marginBottom: "2rem",
              fontFamily: "var(--font-body)",
            }}
          >
            {subtext}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={primaryCTA.href}
            style={{
              background: bgStyles.primaryBg,
              color: bgStyles.primaryColor,
              padding: "0.875rem 2rem",
              borderRadius: "10px",
              fontWeight: 500,
              fontSize: "0.975rem",
              fontFamily: "var(--font-body)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            }}
            className="hover:opacity-90"
          >
            {primaryCTA.label}
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              style={{
                border: `1px solid ${bgStyles.secondaryBorder}`,
                color: bgStyles.secondaryColor,
                padding: "0.875rem 2rem",
                borderRadius: "10px",
                fontWeight: 500,
                fontSize: "0.975rem",
                fontFamily: "var(--font-body)",
                background: "transparent",
              }}
              className="hover:opacity-80"
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
