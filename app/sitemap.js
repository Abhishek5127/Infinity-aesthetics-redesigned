import { clinicServices } from "../lib/services";
import { SITE_URL } from "../lib/seo";
import { blogPosts } from "../lib/blog";

export default function sitemap() {
  const lastModified = new Date();
  const staticRoutes = ["/", "/about", "/services", "/process", "/results", "/contact", "/blog"];
  const serviceRoutes = clinicServices.map((service) => `/services/${service.slug}`);
  
  // Blog routes are stubs so we won't put them high priority, but they are indexable.
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/services") ? 0.8 : route.startsWith("/blog") ? 0.5 : 0.6,
  }));
}
