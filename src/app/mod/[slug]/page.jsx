import Logo from "@/components/logo";
import BackButton from "@/components/backButton";
import InfoButton from "@/components/infoButton";
import LikeButton from "@/components/likeButton";
import MobileHeader from "@/components/mobileHeader";
import BadPage from "@/components/badPage";

import modules from "@/distData/modules.json";

import "@/style/modPage/modPage.css";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const moduleFound = modules.find((module) => module.slug === slug);
  if (!moduleFound) {
    return;
  }
  return {
    title: moduleFound.name,
    description: moduleFound.description,
    icons: {
      apple: `/api/app-image?iconName=${moduleFound.icon}`,
      shortcut: [
        "/assets/favicon/96x.png",
        "/assets/favicon/192x.png",
        "/assets/favicon/512x.png",
        "/assets/favicon/favicon.ico",
        "/assets/favicon/favicon.svg",
      ],
    },
    appleWebApp: {
      title: moduleFound.slug,
      statusBarStyle: "black",
      startupImage: "/assets/meta/appleStartup.png",
    },
    openGraph: {
      images: `/api/meta-image?title=${moduleFound.name}&description=${moduleFound.description}&iconName=${moduleFound.icon}&slug=${moduleFound.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: moduleFound.name,
      description: moduleFound.description,
      images: `/api/meta-image?title=${moduleFound.name}&description=${moduleFound.description}&iconName=${moduleFound.icon}&slug=${moduleFound.slug}`,
      creator: "@EthanHazelGD",
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const moduleFound = modules.find((module) => module.slug === slug);

  if (!moduleFound) {
    return <BadPage />;
  }

  const module = moduleFound;

  return (
    <div className="modPage">
      <MobileHeader>
        <BackButton />
        <Logo size={"48px"} />
        <InfoButton module={module} />
      </MobileHeader>
      <div className="modHeader fadeContent mobileHide">
        <div className="modInfo">
          <h2>{module.name}</h2>
          <p>{module.description}</p>
        </div>
        <div className="modActions">
          <InfoButton module={module} />
          <LikeButton slug={module.slug} />
        </div>
      </div>
      <iframe className="fadeContent" src={`/raw_mod/${slug}/index.html`} />
    </div>
  );
}
