import { Star, Info } from "lucide-react";

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
        <div className="modInfo">
          <img className="logo" src="/assets/logo/symbol.svg" alt="symbol" />
          <h2>{module.name}</h2>
          <p>{module.description}</p>
        </div>
        <div className="modActions">
          <button name="favorite" className="modActionButton">
            <Star />
          </button>
          <button name="info" className="modActionButton">
            <Info />
          </button>
        </div>
      </div>
      <iframe src={`/modules/${slug}/index.html`} />
    </div>
  );
}
