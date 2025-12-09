import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get("title") || "HIMALAYA BUILD CO."
  const description = searchParams.get("description") || "Premium Construction in Nepal"

  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "linear-gradient(135deg, #0B4F6C 0%, #F2994A 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "white",
        padding: "40px",
      }}
    >
      <div style={{ fontSize: 60, marginBottom: 20, fontWeight: "bold" }}>{title}</div>
      <div style={{ fontSize: 32, opacity: 0.9 }}>{description}</div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
