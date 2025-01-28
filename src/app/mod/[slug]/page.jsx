import modules from "@/distData/slugs.json";

import "@/style/modPage.css";

export default async function Page({ params }) {
  const { slug } = await params;

  if (!modules.includes(slug)) {
    return <h1>Module Not Found (Placeholder design)</h1>;
  }

  const module = await import(`@/distData/modules/${slug}.json`);

  return (
    <div className="modPage">
      <div className="modHeader">
        <h1>{module.name}</h1>
        <p>{module.description}</p>
      </div>
      <iframe src={`/modules/${slug}/index.html`} />
      <div className="modFooter">
        <p>
          Contributors:{" "}
          {module.contributors
            .join(", ")
            .replace(/, (?=(?:[^,]*, )?[^,]*$)/g, ", ")}
        </p>
        <p>Version: {module.version}</p>
      </div>
    </div>
  );
}
