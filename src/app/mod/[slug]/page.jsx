import modules from "@/distData/modules.json";

import "@/style/modPage.css";

export default async function Page({ params }) {
  const { slug } = await params;

  const moduleFound = modules.find((module) => module.slug === slug);

  if (!moduleFound) {
    return <h1>Module Not Found (Placeholder design)</h1>;
  }

  const module = moduleFound;

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
