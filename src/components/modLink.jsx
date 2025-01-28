"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ModLink({ slug }) {
  const [moduleData, setModuleData] = useState(null);
  const [IconComponent, setIconComponent] = useState(null);

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

  return (
    <Link href={`/mod/${slug}`} className="modLink">
      <span className="modLinkIcon">
        <IconComponent />
      </span>
      <div className="modLinkInfo">
        <h3>{moduleData.name}</h3>
        <p>{moduleData.description}</p>
      </div>
    </Link>
  );
}
