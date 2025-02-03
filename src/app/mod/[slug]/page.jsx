import BackButton from "@/components/backButton";
import HeaderButton from "@/components/headerButton";

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
        <div className="modActions backButton">
          <BackButton />
        </div>
        <div className="modInfo">
          <h2>{module.name}</h2>
          <p>{module.description}</p>
        </div>
        <a className="modLogo" href="/">
          <img src="/assets/logo/symbol.svg" alt="logo" />
        </a>
        <div className="modActions">
          <HeaderButton icon="Star" name="favorite" />
          <HeaderButton icon="Info" name="info" />
        </div>
      </div>
      <iframe src={`/modules/${slug}/index.html`} />
    </div>
  );
}
