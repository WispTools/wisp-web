import modules from "@/dist-data/modules.json";

export const runtime = "edge";

export async function GET() {
  return new Response(JSON.stringify(modules), {
    headers: { "Content-Type": "application/json" },
  });
}
