import SideBar from "@/components/side-bar";
import AnalyticsSwitch from "@/components/analytics-switch";

import "@/style/main.css";

const TITLE = "Wisp - The Web Interface for Simple Programs";
const DESCRIPTION =
  "WISP (Web Interface for Simple Programs) is a free, open-source website that hosts a collection of simple tools like converters and generators, all in one place.";

export const metadata = {
  metadataBase: new URL("https://www.wisp.tools"),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "https://www.wisp.tools/assets/meta/default.png",
        alt: TITLE,
      },
    ],
    siteName: "Wisp",
    locale: "en-US",
    type: "website",
    url: "https://www.wisp.tools",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: {
      url: "https://www.wisp.tools/assets/meta/default.png",
      alt: TITLE,
    },
    creator: "@EthanHazelGD",
  },
  appleWebApp: {
    title: "Wisp",
    statusBarStyle: "black",
    startupImage: "https://www.wisp.tools/assets/meta/appleStartup.png",
    capable: true,
  },
  icons: {
    icon: "https://www.wisp.tools/assets/favicon/favicon.svg",
    shortcut: [
      "https://www.wisp.tools/assets/favicon/96x.png",
      "https://www.wisp.tools/assets/favicon/192x.png",
      "https://www.wisp.tools/assets/favicon/512x.png",
      "https://www.wisp.tools/assets/favicon/favicon.ico",
    ],
    apple: "https://www.wisp.tools/assets/favicon/apple.png",
  },
  manifest: "https://www.wisp.tools/assets/favicon/site.webmanifest",
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
  title: {
    template: "%s ▸ " + TITLE,
    default: TITLE,
  },
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.wisp.tools/",
    languages: {
      "en-US": "https://www.wisp.tools/",
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
      <body>
        <div className="main">
          <SideBar />
          <div className="content">{children}</div>
        </div>
        <AnalyticsSwitch />
      </body>
    </html>
  );
}
