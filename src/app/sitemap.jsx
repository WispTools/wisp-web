import modules from "@/distData/modules.json";

export default function sitemap() {
  const sitemap = [
    {
      url: "https://wisptools.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://wisptools.vercel.app/favorites",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://wisptools.vercel.app/contribute",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://wisptools.vercel.app/settings",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  modules.forEach((module) => {
    sitemap.push({
      url: `https://wisptools.vercel.app/mod/${module.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  return sitemap;
}
