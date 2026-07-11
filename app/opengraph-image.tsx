import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name}, architect portfolio`;

// Branded, self-contained OG card (no external font fetch) rendered at build.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f4f0e8",
          color: "#201d18",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 40, height: 2, backgroundColor: "#605d37" }} />
          <div
            style={{
              marginLeft: 20,
              fontSize: 24,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#4a3f34",
            }}
          >
            Architect
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 128, fontWeight: 600, lineHeight: 1 }}>{profile.name}</div>
          <div style={{ marginTop: 28, fontSize: 32, color: "#4a3f34", maxWidth: 860 }}>
            Hospitals, transit, and skylines across India and the UAE.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#6d6152" }}>
          <div>{profile.location}</div>
          <div>Selected works</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
