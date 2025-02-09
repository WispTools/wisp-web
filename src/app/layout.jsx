import SideBar from "@/components/sideBar";
import { Analytics } from "@vercel/analytics/react";

import "@/style/main.css";

export const metadata = {
  metadataBase: new URL("https://www.wisp.tools"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  title: "Wisp",
  appleMobileWebAppTitle: "Wisp",
  description: "Temporary website description",
  openGraph: {
    images: "/assets/meta/default.png",
  },
  icons: {
    shortcut: [
      "/assets/favicon/96x.png",
      "/assets/favicon/192x.png",
      "/assets/favicon/512x.png",
      "/assets/favicon/favicon.ico",
      "/assets/favicon/favicon.svg",
    ],
    apple: "/assets/favicon/apple.png",
  },
  manifest: "/assets/favicon/site.webmanifest",
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
