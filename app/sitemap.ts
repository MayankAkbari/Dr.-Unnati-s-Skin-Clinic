import { MetadataRoute } from "next";
import { treatmentsData } from "@/data/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://drunnatiskinclinic.com";

  const staticRoutes = [
    { route: "", priority: 1.0, freq: "daily" as const },
    { route: "/treatments", priority: 0.9, freq: "weekly" as const },
    { route: "/about", priority: 0.9, freq: "monthly" as const },
    { route: "/results", priority: 0.85, freq: "weekly" as const },
    { route: "/skincare-guide", priority: 0.85, freq: "weekly" as const },
    { route: "/contact", priority: 0.9, freq: "monthly" as const },
  ].map(({ route, priority, freq }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  }));

  const treatmentRoutes = treatmentsData.map((t) => ({
    url: `${baseUrl}/treatments/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.95,
  }));

  return [...staticRoutes, ...treatmentRoutes];
}
