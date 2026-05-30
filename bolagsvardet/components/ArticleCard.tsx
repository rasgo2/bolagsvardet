import Link from "next/link";

interface ArticleCardProps {
  title: string;
  description: string;
  href: string;
  readTime?: string;
  tag?: string;
}

export default function ArticleCard({ title, description, href, readTime, tag }: ArticleCardProps) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        background: "var(--color-white)",
        border: "1px solid var(--color-border)",
        borderRadius: "12px",
        padding: "1.5rem",
        textDecoration: "none",
        transition: "all 0.2s ease",
      }}
      className="hover:border-blue-300 hover:shadow-md group"
    >
      {tag && (
        <span
          style={{
            display: "inline-block",
            fontSize: "0.7rem",
            fontWeight: 600,
            color: "var(--color-accent)",
            background: "var(--color-accent-subtle)",
            padding: "0.2rem 0.6rem",
            borderRadius: "100px",
            marginBottom: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.07em",
            fontFamily: "var(--font-body)",
          }}
        >
          {tag}
        </span>
      )}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.05rem",
          fontWeight: 600,
          color: "var(--color-ink)",
          lineHeight: 1.3,
          marginBottom: "0.6rem",
        }}
        className="group-hover:text-blue-700"
      >
        {title}
      </h3>
      <p
        style={{
          color: "var(--color-muted)",
          fontSize: "0.875rem",
          lineHeight: 1.65,
          fontFamily: "var(--font-body)",
          marginBottom: readTime ? "1rem" : 0,
        }}
      >
        {description}
      </p>
      {readTime && (
        <p style={{ fontSize: "0.75rem", color: "var(--color-muted)", fontFamily: "var(--font-body)" }}>
          {readTime} läsning
        </p>
      )}
    </Link>
  );
}
