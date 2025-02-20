import ModLink from "./mod-link";

import modules from "@/dist-data/modules.json";

export default function Gallery({ searchQuery, favoritesQuery }) {
  const results = () => {
    return (
      <>
        {modules.map((module) => (
          <ModLink
            key={module.slug}
            slug={module.slug}
            searchQuery={searchQuery}
            favoritesQuery={favoritesQuery}
          />
        ))}
      </>
    );
  };
  return <div className="gallery">{results()}</div>;
}
