import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "../../../lib/blog";
import { createMetadata } from "../../../lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return createMetadata({
      title: "Blog Post Not Found | Infinity Aesthetics",
      description: "The requested Infinity Aesthetics blog post could not be found.",
      path: "/blog",
    });
  }

  return createMetadata({
    title: `${post.title} | Infinity Aesthetics Ajmer`,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article style={{ padding: "120px 24px 64px", maxWidth: "800px", margin: "0 auto" }}>
      <Link href="/blog" style={{ color: "var(--accent-gold)", textDecoration: "none", display: "inline-block", marginBottom: "32px" }}>
        ← Back to Blog
      </Link>
      
      <div style={{ marginBottom: "48px" }}>
        <p style={{ color: "var(--text-secondary)", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>
          Target Keyword: {post.targetKeyword}
        </p>
        <h1 style={{ fontSize: "2.5rem", lineHeight: "1.2", marginBottom: "24px", color: "var(--text-primary)" }}>
          {post.title}
        </h1>
        <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
          {post.metaDescription}
        </p>
      </div>

      <div style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "16px", padding: "32px" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "24px", color: "var(--text-primary)" }}>Article Outline</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
          {post.outline.map((item, index) => (
            <li key={index} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <span style={{ color: "var(--accent-gold)", fontWeight: "bold" }}>{index + 1}.</span>
              <span style={{ color: "var(--text-secondary)", lineHeight: "1.5" }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: "48px", padding: "24px", backgroundColor: "rgba(255,200,100,0.1)", border: "1px solid rgba(255,200,100,0.2)", borderRadius: "8px" }}>
        <p style={{ color: "var(--accent-gold)", fontSize: "14px", margin: 0 }}>
          <strong>Draft Note:</strong> This is a content stub. Full medical/health articles require owner sign-off before publishing.
        </p>
      </div>
    </article>
  );
}
