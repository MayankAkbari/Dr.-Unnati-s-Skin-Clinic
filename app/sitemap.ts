import { MetadataRoute } from "next";
import { treatmentsData } from "@/data/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://drunnatiskinclinic.com";

  const staticRoutes = [
    "",
    "/treatments",
    "/about",
    "/results",
    "/skincare-guide",
    "/contact"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }));

  const treatmentRoutes = treatmentsData.map((t) => ({
    url: `${baseUrl}/treatments/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...treatmentRoutes];
}
