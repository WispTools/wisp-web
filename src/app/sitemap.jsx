const SITE_URL = "https://www.wisp.tools";

export default function sitemap() {
  const sitemap = [
    {
      url: `${SITE_URL}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/favorites`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/contribute`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/settings`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/discord`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.25,
    },
    {
      url: `${SITE_URL}/docs`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.25,
    },
  ];

  modules.forEach((module) => {
    sitemap.push({
      url: `${SITE_URL}/mod/${module.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  return sitemap;
}
