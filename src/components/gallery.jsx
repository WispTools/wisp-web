import ModLink from "./modLink";

import modules from "@/distData/modules.json";

export default function Gallery() {
  return (
    <div className="gallery">
      {modules.map((module) => (
        <ModLink key={module.slug} slug={module.slug} />
      ))}
    </div>
  );
}
