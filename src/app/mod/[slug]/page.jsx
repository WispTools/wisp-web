import Logo from "@/components/logo";
import BackButton from "@/components/backButton";
import MobileHeader from "@/components/mobileHeader";
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
      <MobileHeader>
        <BackButton />
        <Logo size={"48px"} />
        <HeaderButton icon="Menu" name="menu" />
      </MobileHeader>
      <div className="modHeader fadeContent mobileHide">
        <div className="modInfo">
          <h2>{module.name}</h2>
          <p>{module.description}</p>
        </div>
        <div className="modActions">
          <HeaderButton icon="Heart" name="favorite" />
          <HeaderButton icon="Info" name="info" />
        </div>
      </div>
      <iframe className="fadeContent" src={`/modules/${slug}/index.html`} />
    </div>
  );
}
