import { clinicServices } from "../lib/services";
import { SITE_URL } from "../lib/seo";

export default function sitemap() {
  const lastModified = new Date();
  const staticRoutes = ["/", "/about", "/services", "/process", "/results", "/fees", "/contact"];
  const serviceRoutes = clinicServices.map((service) => `/services/${service.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/services") ? 0.8 : 0.6,
  }));
}
