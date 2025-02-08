import Link from "next/link";

import { Home } from "lucide-react";

import Logo from "@/components/logo";
import BackButton from "@/components/backButton";
import MobileHeader from "@/components/mobileHeader";
import HeaderButton from "@/components/headerButton";

import modules from "@/distData/modules.json";

import "@/style/notFound.css";
import "@/style/modPage.css";

export async function generateMetadata({ params }) {
  const moduleFound = modules.find((module) => module.slug === params.slug);
  return {
    title: moduleFound.name + " ▸ Wisp",
    description: moduleFound.description,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const moduleFound = modules.find((module) => module.slug === slug);

  if (!moduleFound) {
    return (
      <div className="notFoundContainer fadeContent">
        <img
          src="/assets/404.svg"
          alt="404 picture (if you're reading this on a 404 page then something is REALLY wrong)"
          draggable="false"
        />
        <h1>Well $#!%, that's a 404</h1>
        <p>
          The module or page you are looking for does not exist, or has been
          removed.
        </p>
        <Link href="/">
          <Home />
          Bring me home please :(
        </Link>
      </div>
    );
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
