import { ImageResponse } from "next/og";
import React from "react";

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
            justifyContent: "center",
          }}
          className="metaImage"
        >
          <img src="https://www.wisp.tools/assets/meta/logo.png" alt="logo" />
          <p style={{ fontSize: "1.5rem", color: "#717171" }}>
            wisp.tools/mod/{slug}
          </p>
          <h1 style={{ fontSize: "3rem", color: "#DDD", marginBottom: "1rem" }}>
            {title}
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
              aspectRatio: "1/1",
              borderRadius: "1rem",
              border: "1px solid #717171",
            }}
          >
            <svg
              width="100"
              height="100"
              viewBox={viewBox}
              fill="none"
              stroke="white"
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
          <p style={{ fontSize: "1.5rem", color: "#717171" }}>{description}</p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error("Error fetching or processing SVG:", error);
    return new Response("Error generating image", { status: 500 });
  }
}
