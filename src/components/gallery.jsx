import ModLink from "./modLink";

import modules from "@/distData/modules.json";

export default function Gallery({ searchQuery }) {
  const results = () => {
    return (
      <>
        {modules.map((module) => (
          <ModLink
            key={module.slug}
            slug={module.slug}
            searchQuery={searchQuery}
          />
        ))}
      </>
    );
  };
  return <div className="gallery">{results()}</div>;
}
