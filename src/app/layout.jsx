import LeftSideBar from "@/components/leftSideBar";
import { Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";

import "@/style/main.css";

export const metadata = {
  title: "Wisp",
  description: "Temporary website description",
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
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/assets/favicon/96x.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/favicon/favicon.svg"
        />
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple.png"
        />
        <meta name="apple-mobile-web-app-title" content="Wisp" />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
      </head>
      <body onTouchStart="">
        <div className="main">
          <LeftSideBar />
          <div className="content">{children}</div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
