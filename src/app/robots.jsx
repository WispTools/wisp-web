export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `https://www.wisp.tools/sitemap.xml`,
  };
}
