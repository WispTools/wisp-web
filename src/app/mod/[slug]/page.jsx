import Logo from "@/components/logo";
import BackButton from "@/components/back-button";
import InfoButton from "@/components/info-button";
import LikeButton from "@/components/like-button";
import MobileHeader from "@/components/mobile-header";
import BadPage from "@/components/bad-page";

import modules from "@/dist-data/modules.json";

import "@/style/mod-page/mod-page.css";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const moduleFound = modules.find((module) => module.slug === slug);

  if (!moduleFound) {
    return {
      title: "Not Found",
      description: "The module you are looking for does not exist.",
    };
  }

  const metaImageUrl = `/api/meta-image?title=${encodeURIComponent(
    moduleFound.name
  )}&description=${encodeURIComponent(moduleFound.description)}&iconName=${
    moduleFound.icon
  }&slug=${moduleFound.slug}`;

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
      type: "website",
      url: `https://www.wisp.tools/mod/${slug}`,
      title: moduleFound.name,
      description: moduleFound.description,
      site_name: "Your Site Name",
      images: metaImageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: moduleFound.name,
      description: moduleFound.description,
      images: metaImageUrl,
      creator: "@EthanHazelGD",
    },
    alternates: {
      canonical: `https://www.wisp.tools/mod/${slug}`,
      languages: {
        "en-US": `https://www.wisp.tools/mod/${slug}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
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
      <iframe className="fadeContent" src={`/raw-mod/${slug}/index.html`} />
    </div>
  );
}
