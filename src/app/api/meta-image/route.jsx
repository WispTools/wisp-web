import { ImageResponse } from "next/og";
import React from "react";

const Inter = fetch(
  new URL(
    "https://www.wisp.tools/assets/fonts/inter/regular.otf",
    import.meta.url
  )
).then((res) => res.arrayBuffer());

const Syne = fetch(
  new URL("https://www.wisp.tools/assets/fonts/syne/bold.otf", import.meta.url)
).then((res) => res.arrayBuffer());

export const runtime = "edge";

function PascalCaseToKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const slug = searchParams.get("slug") || "unknown-slug";
  const title = searchParams.get("title") || "Unknown Title";
  const description = searchParams.get("description") || "Unknown Description";
  const iconName =
    PascalCaseToKebabCase(searchParams.get("iconName")) || "circle-help";

  const svgUrl = `https://unpkg.com/lucide-static@latest/icons/${iconName}.svg`;

  try {
    const iconSvg = await fetch(svgUrl).then((res) => res.text());

    const viewBoxMatch = iconSvg.match(/viewBox="([^"]+)"/);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";

    const elementMatches = [
      ...iconSvg.matchAll(
        /<(path|rect|circle|line|polyline|polygon|ellipse)\s([^>]+)\/>/g
      ),
    ];

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#070707",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "4rem",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <img
              src="https://www.wisp.tools/assets/meta/logo.png"
              alt="logo"
              style={{ width: "197px", height: "55px" }}
            />
            <p
              style={{
                fontSize: "1.5rem",
                color: "#717171",
                fontFamily: "Syne, sans-serif",
                fontWeight: "bold",
              }}
            >
              wisp.tools/mod/{slug}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "1 1 auto",
                marginRight: "1rem",
              }}
            >
              <h1
                style={{
                  fontSize: "4rem",
                  color: "#DDD",
                  margin: "0",
                  fontWeight: "bold",
                  fontFamily: "Syne, sans-serif",
                }}
              >
                {title}
              </h1>
              <p
                style={{
                  fontSize: "1.5rem",
                  color: "#717171",
                  overflowWrap: "break-word",
                  wordBreak: "break-all",
                }}
              >
                {description}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "3rem",
                aspectRatio: "1/1",
                borderRadius: "1rem",
                border: "2px solid #444",
                color: "#DDD",
                flexShrink: 0,
                marginLeft: "4rem",
              }}
            >
              <svg
                width="150"
                height="150"
                viewBox={viewBox}
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {elementMatches.map((match, index) => {
                  const tagName = match[1];
                  const attributesString = match[2];

                  const props = Object.fromEntries(
                    [...attributesString.matchAll(/([\w-]+)="([^"]+)"/g)].map(
                      ([, key, value]) => [key, value]
                    )
                  );

                  return React.createElement(tagName, { key: index, ...props });
                })}
              </svg>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: await Inter,
            style: "normal",
          },
          {
            name: "Syne",
            data: await Syne,
            style: "bold",
          },
        ],
      }
    );
  } catch (error) {
    console.error("Error fetching or processing SVG:", error);
    return new Response("Error generating image", { status: 500 });
  }
}
