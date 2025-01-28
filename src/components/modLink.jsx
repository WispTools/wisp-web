import Link from "next/link";

export default function ModLink({ slug }) {
  const loadModuleData = (slug) => {
    return import(`@/distData/modules/${slug}.json`);
  };

  const loadIcon = async (icon) => {
    const { [icon]: Icon } = await import("lucide-react");
    return Icon;
  };

  return (
    <>
      {loadModuleData(slug).then((module) => (
        <Link href={`/mod/${slug}`} className="modLink">
          <span className="modLinkIcon">
            {loadIcon(module.icon).then((Icon) => (
              <Icon />
            ))}
          </span>
          <div className="modLinkInfo">
            <h3>{module.name}</h3>
            <p>{module.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
