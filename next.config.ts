import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
    ],
  },

  async rewrites() {
    return [
      // pretty download URL that points to the same public file
      { source: "/cv-download", destination: "/cv.pdf" },
    ];
  },

  async headers() {
    return [
      {
        // only the download alias gets the attachment header
        source: "/cv-download",
        headers: [
          { key: "Content-Disposition", value: 'attachment; filename="Matthieu_Laurin_CV.pdf"' },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
