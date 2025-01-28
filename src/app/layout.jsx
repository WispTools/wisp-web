import LeftSideBar from "@/components/leftSideBar";

import "@/style/main.css";

export const metadata = {
  title: "Wisp",
  description: "Temporary website description",
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
      <body>
        <div className="main">
          <LeftSideBar />
          <div className="content">{children}</div>
        </div>
      </body>
    </html>
  );
}
