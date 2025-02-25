const SITE_URL = "https://www.wisp.tools";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/api/", "/dist-data/", "/raw-mod/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
