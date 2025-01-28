import LeftSideBar from "@/components/leftSideBar";

import "@/style/main.css";

export const metadata = {
  title: "Wisp",
  description: "Temporary website description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <LeftSideBar />
          <div className="content">{children}</div>
        </div>
      </body>
    </html>
  );
}
