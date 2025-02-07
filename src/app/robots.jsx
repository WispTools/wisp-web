export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `https://wisptools.vercel.app/sitemap.xml`,
  };
}
