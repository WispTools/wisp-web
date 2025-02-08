import modules from "@/distData/modules.json";

export default function sitemap() {
  const sitemap = [
    {
      url: "https://www.wisp.tools/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.wisp.tools/favorites",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://www.wisp.tools/contribute",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://www.wisp.tools/settings",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://www.wisp.tools/discord",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.25,
    },
  ];

  modules.forEach((module) => {
    sitemap.push({
      url: `https://www.wisp.tools/mod/${module.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  return sitemap;
}
