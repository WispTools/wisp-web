import ModLink from "./modLink";

import modules from "@/distData/slugs.json";

export default function Gallery() {
  return (
    <div className="gallery">
      {modules.map((slug) => (
        <ModLink key={slug} slug={slug} />
      ))}
    </div>
  );
}
