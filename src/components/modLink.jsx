"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Updated import for Next.js 13+
import Transition from "./transition"; // Ensure this utility function is defined

export default function ModLink({ slug, searchQuery }) {
  const [moduleData, setModuleData] = useState(null);
  const [IconComponent, setIconComponent] = useState(null);

  const router = useRouter(); // Correctly initialized router

  useEffect(() => {
    const fetchData = async () => {
      try {
        const modules = await import("@/distData/modules.json");
        const module = modules.default.find((mod) => mod.slug === slug);
        setModuleData(module);

        if (module?.icon) {
          const { [module.icon]: Icon } = await import("lucide-react");
          setIconComponent(() => Icon);
        }
      } catch (error) {
        console.error("Error loading module or icon:", error);
      }
    };

    fetchData();
  }, [slug]);

  if (!moduleData || !IconComponent) {
    return <p>Loading...</p>;
  }

  if (searchQuery && searchQuery.length > 0) {
    console.log(searchQuery);
    const searchQueryLower = searchQuery.toLowerCase();
    const slugLower = slug.toLowerCase();
    const nameLower = moduleData.name.toLowerCase();
    const descriptionLower = moduleData.description.toLowerCase();

    if (
      !slugLower.includes(searchQueryLower) &&
      !nameLower.includes(searchQueryLower) &&
      !descriptionLower.includes(searchQueryLower)
    ) {
      return <></>;
    }
  }

  return (
    <button
      onClick={() => Transition(router, `/mod/${slug}`)} // Ensure Transition is defined
      className="modLink"
    >
      <span className="modLinkIcon">
        <IconComponent />
      </span>
      <div className="modLinkInfo">
        <h3>{moduleData.name}</h3>
        <p>{moduleData.description}</p>
      </div>
    </button>
  );
}
