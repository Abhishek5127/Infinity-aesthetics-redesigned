import Link from "next/link";
import { blogPosts } from "../../lib/blog";
import { createMetadata } from "../../lib/seo";

export const metadata = createMetadata({
  title: "Skin & Hair Care Blog | Infinity Aesthetics Ajmer",
  description: "Read expert skin and hair care articles from Infinity Aesthetics in Ajmer. Learn about UV protection, acne management, and more.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <div style={{ padding: "120px 24px 64px", maxWidth: "1000px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <p style={{ color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px", fontSize: "14px", fontWeight: "bold" }}>
          Knowledge Base
        </p>
        <h1 style={{ fontSize: "3rem", marginBottom: "24px", color: "var(--text-primary)" }}>
          Skin & Hair Care Insights
        </h1>
        <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
          Expert advice tailored for Ajmer&apos;s unique climate.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "32px",
              backgroundColor: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "16px",
              textDecoration: "none",
              transition: "transform 0.2s, background-color 0.2s"
            }}
          >
            <h2 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "16px", lineHeight: "1.4" }}>
              {post.title}
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "24px", flexGrow: 1 }}>
              {post.metaDescription}
            </p>
            <span style={{ color: "var(--accent-gold)", fontSize: "14px", fontWeight: "500", display: "flex", alignItems: "center", gap: "8px" }}>
              Read Outline →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
