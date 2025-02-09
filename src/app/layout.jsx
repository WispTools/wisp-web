import SideBar from "@/components/sideBar";
import { Analytics } from "@vercel/analytics/react";

import "@/style/main.css";

export const metadata = {
  metadataBase: new URL("https://www.wisp.tools"),
  assets: ["https://www.wisp.tools/assets"],
  openGraph: {
    title: "Wisp - The Web Interface for Simple Programs",
    description:
      "WISP (Web Interface for Simple Programs) is a free, open-source website that hosts a collection of simple tools like converters and generators, all in one place. It's designed to be easy to use, where anyone can create and add their own modules.",
    images: "/assets/meta/default.png",
    siteName: "Wisp",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisp - The Web Interface for Simple Programs",
    description:
      "WISP (Web Interface for Simple Programs) is a free, open-source website that hosts a collection of simple tools like converters and generators, all in one place. It's designed to be easy to use, where anyone can create and add their own modules.",
    images: { url: "/assets/meta/default.png", alt: "Wisp" },
    creator: "@EthanHazelGD",
  },
  appleWebApp: {
    title: "Wisp",
    statusBarStyle: "black-translucent",
    startupImage: "/assets/meta/appleStartup.png",
  },
  icons: {
    icon: "/assets/favicon/favicon.svg",
    shortcut: [
      "/assets/favicon/96x.png",
      "/assets/favicon/192x.png",
      "/assets/favicon/512x.png",
      "/assets/favicon/favicon.ico",
    ],
    apple: "/assets/favicon/apple.png",
  },
  manifest: "/assets/favicon/site.webmanifest",
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
  category: "productivity",
  title: {
    template: "%s ▸ Wisp",
    default: "Wisp",
  },
  creator: "Ethan Hazel",
  description:
    "WISP (Web Interface for Simple Programs) is a free, open-source website that hosts a collection of simple tools like converters and generators, all in one place. It's designed to be easy to use, where anyone can create and add their own modules.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
};

export const viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 0.8,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body onTouchStart="">
        <div className="main">
          <SideBar />
          <div className="content">{children}</div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
