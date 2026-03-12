import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://creative-gen-ai.netlify.app/sitemap.xml",
    host: "https://creative-gen-ai.netlify.app",
  };
}
