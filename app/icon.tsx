import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Generated monogram used as the site favicon.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#201d18",
          color: "#f4f0e8",
          fontSize: 44,
          fontWeight: 600,
        }}
      >
        A
      </div>
    ),
    { ...size },
  );
}
