import { ImageResponse } from "next/og";
import React from "react";

export const runtime = "edge";

const CACHE_MAX_SIZE = 100;
const cache = new Map();

function addToCache(key, value) {
  cache.set(key, value);
  if (cache.size > CACHE_MAX_SIZE) {
    const oldestKey = cache.keys().next().value;
    cache.delete(oldestKey);
  }
}

function PascalCaseToKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const iconName =
    PascalCaseToKebabCase(searchParams.get("iconName")) || "circle-help";

  const cacheKey = JSON.stringify({ iconName });

  const cached = cache.get(cacheKey);
  if (cached) {
    return new Response(cached.buffer, {
      headers: cached.headers,
    });
  }

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

    const imageResponse = new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#050505",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            color: "#ddd",
          }}
        >
          <svg
            width="130"
            height="130"
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
      ),
      {
        width: 180,
        height: 180,
      }
    );

    const buffer = await imageResponse.arrayBuffer();
    const headers = new Headers(imageResponse.headers);
    headers.set("Cache-Control", "public, max-age=31536000, immutable");

    addToCache(cacheKey, { buffer, headers });

    return new Response(buffer, { headers });
  } catch (error) {
    console.error("Error fetching or processing SVG:", error);
    return new Response("Error generating image", { status: 500 });
  }
}
