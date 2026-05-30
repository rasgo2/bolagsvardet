import Link from "next/link";

interface IndustryCardProps {
  title: string;
  description: string;
  href: string;
  multipleRange: string;
  characteristics?: string[];
}

export default function IndustryCard({ title, description, href, multipleRange, characteristics }: IndustryCardProps) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        background: "var(--color-white)",
        border: "1px solid var(--color-border)",
        borderRadius: "14px",
        padding: "1.75rem",
        textDecoration: "none",
      }}
      className="hover:border-blue-300 hover:shadow-md group"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "var(--color-ink)",
            lineHeight: 1.3,
          }}
          className="group-hover:text-blue-700"
        >
          {title}
        </h3>
        <span
          style={{
            background: "var(--color-accent-subtle)",
            color: "var(--color-accent)",
            fontSize: "0.75rem",
            fontWeight: 600,
            padding: "0.25rem 0.6rem",
            borderRadius: "6px",
            whiteSpace: "nowrap",
            fontFamily: "var(--font-body)",
          }}
        >
          {multipleRange}x EBITDA
        </span>
      </div>

      <p
        style={{
          color: "var(--color-slate)",
          fontSize: "0.875rem",
          lineHeight: 1.65,
          fontFamily: "var(--font-body)",
          marginBottom: characteristics ? "1rem" : 0,
        }}
      >
        {description}
      </p>

      {characteristics && (
        <div className="flex flex-wrap gap-2">
          {characteristics.map((c) => (
            <span
              key={c}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "6px",
                padding: "0.2rem 0.6rem",
                fontSize: "0.75rem",
                color: "var(--color-slate)",
                fontFamily: "var(--font-body)",
              }}
            >
              {c}
            </span>
          ))}
        </div>
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          marginTop: "1.25rem",
          color: "var(--color-accent)",
          fontSize: "0.85rem",
          fontWeight: 500,
          fontFamily: "var(--font-body)",
        }}
      >
        Läs mer
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Link>
  );
}
